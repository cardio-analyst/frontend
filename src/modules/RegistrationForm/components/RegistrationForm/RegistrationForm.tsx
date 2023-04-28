import React, { useMemo, useState } from 'react';
import { FormContainer } from 'components/FormContainer/FormContainer';
import styles from './RegistrationForm.module.scss';
import { RegisterSteps } from '../RegistrationSteps/RegistrationSteps';
import { RegistrationStepOne } from '../RegistrationStepOne/RegistrationStepOne';
import { RegistrationStepTwo } from '../RegistrationStepTwo/RegistrationStepTwo';
import { RegistrationStepThree } from '../RegistrationStepThree/RegistrationStepThree';
import { Button, Form } from 'antd';
import { InitialValuesForm } from './types';
import clsx from 'clsx';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { signUpCreator } from '../../store/registrationCreators';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes';

const steps = [
    <RegistrationStepOne key={0} />,
    <RegistrationStepTwo key={1} />,
    <RegistrationStepThree key={2} />,
];

export const RegistrationForm = () => {
    const dispatch = useAppDispatch();

    const navigation = useNavigate();

    const [currentStep, setCurrentStep] = useState<number>(0);

    const [initialValues, setInitialValues] = useState<InitialValuesForm>();

    const step = useMemo(() => steps[currentStep], [currentStep]);

    const primaryBtnText = currentStep === 2 ? 'Завершить' : 'Продолжить';

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
                    className={clsx(
                        styles.currentStep,
                        currentStep === 1 && styles.stepTwoContainer,
                    )}
                    onFinish={onFinish}
                >
                    {step}
                    <div className={styles.btnContainer}>
                        <Button type='primary' htmlType='submit'>
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
        setInitialValues({ ...initialValues, ...values });
        if (currentStep < 2) {
            setCurrentStep((step) => step + 1);
        }

        if (currentStep === 2 && initialValues) {
            dispatch(
                signUpCreator({
                    request: initialValues,
                    onSuccess: () => navigation(routes.login),
                }),
            );
        }
    }

    function onGoBack() {
        setCurrentStep((step) => step - 1);
    }
};
