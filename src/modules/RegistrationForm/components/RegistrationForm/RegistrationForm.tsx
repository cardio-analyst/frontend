import React, { useEffect, useMemo, useState } from 'react';
import { FormContainer } from 'components/FormContainer/FormContainer';
import styles from './RegistrationForm.module.scss';
import { RegisterSteps } from '../RegistrationSteps/RegistrationSteps';
import {
    RegistrationStepThree,
    RegistrationStepTwo,
    RegistrationStepOne,
} from '../RegistrationStep';
import { Button, Form, Typography } from 'antd';
import { InitialValuesForm } from './types';
import clsx from 'clsx';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { signUpCreator } from '../../store/registrationCreators';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes';
import { formatDate } from 'utils/formatDate';
import { useAppSelector } from 'hooks/useAppSelector';
import { registrationSelector } from '../../store/registrationSelector';
import {getNameFieldByError, getStepFormByError} from './RegistrationFormData';
import { ErrorGlobalEnum } from '../../../../http/config/types';

const { Text } = Typography;

interface RegistrationResult {
    type: 'success' | 'danger';
    message: string;
}

const steps = [
    <RegistrationStepOne key={0} />,
    <RegistrationStepTwo key={1} />,
    <RegistrationStepThree key={2} />,
];

export const RegistrationForm = () => {
    const dispatch = useAppDispatch();
    const { isLoading, error } = useAppSelector(registrationSelector);

    const navigation = useNavigate();

    const [form] = Form.useForm<InitialValuesForm>();

    const [currentStep, setCurrentStep] = useState<number>(0);
    const [initialValues, setInitialValues] = useState<InitialValuesForm>();
    const [registrationResult, setRegistrationResult] =
        useState<RegistrationResult | null>(null);

    const step = useMemo(() => steps[currentStep], [currentStep]);

    const primaryBtnText = currentStep === 2 ? 'Завершить' : 'Продолжить';

    useEffect(() => {
        if (error) {
            if (error.error === ErrorGlobalEnum.InternalError) {
                setRegistrationResult({
                    type: 'danger',
                    message: error.description,
                });
            }

            const stepError = getStepFormByError(error.error);
            setCurrentStep(stepError);

            handleError();
        }
    }, [error]);

    useEffect(() => {
        handleError();
    }, [step])

    return (
        <FormContainer title='Регистрация' wrapperClassName={styles.sizeForm}>
            <div className={styles.regFormContainer}>
                <RegisterSteps
                    currentStep={currentStep}
                    wrapperClassName={styles.steps}
                />
                <Form
                    name='registration'
                    initialValues={initialValues}
                    form={form}
                    className={clsx(
                        styles.currentStep,
                        currentStep === 1 && styles.stepTwoContainer,
                    )}
                    onFinish={onFinish}
                >
                    {step}
                    {registrationResult && (
                        <div className={styles.errorBlock}>
                            <Text type={registrationResult.type}>
                                {registrationResult.message}
                            </Text>
                        </div>
                    )}
                    <div className={styles.btnContainer}>
                        <Button
                            type='primary'
                            htmlType='submit'
                            loading={isLoading}
                        >
                            {primaryBtnText}
                        </Button>
                        {!!currentStep && (
                            <Button
                                type='ghost'
                                className={styles.btnGoBack}
                                onClick={onGoBack}
                            >
                                Назад
                            </Button>
                        )}
                    </div>
                </Form>
            </div>
        </FormContainer>
    );

    function onFinish(values: InitialValuesForm) {
        const data = { ...initialValues, ...values };
        setInitialValues(data);

        if (currentStep < 2) {
            setCurrentStep((step) => step + 1);
        }

        if (currentStep === 2 && data) {
            if (data['birthDate']) {
                data['birthDate'] = formatDate(data['birthDate']);
            }

            if (registrationResult) {
                setRegistrationResult(null);
            }

            dispatch(
                signUpCreator({
                    request: data,
                    onSuccess: handleSuccessFinish,
                }),
            );
        }
    }

    function handleSuccessFinish() {
        setRegistrationResult({
            type: 'success',
            message: 'Вы успешно зарегистрировались',
        });

        setTimeout(() => {
            navigation(routes.login);
        }, 2000);
    }

    function onGoBack() {
        setCurrentStep((step) => step - 1);
    }

    function handleError() {
        if (error) {
            const nameField = getNameFieldByError(error.error);

            if (!nameField) {
                return;
            }

            form.setFields([{
                name: nameField,
                errors: [error.description]
            }])
        }
    }
};
