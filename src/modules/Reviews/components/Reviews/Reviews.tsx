import React, { useState } from 'react';
import { ReviewsTable } from '../ReviewsTable/ReviewsTable';
import { Review } from '../../model/Review';
import { ModalReview } from '../ModalReview/ModalReview';

const data = [
    new Review({
        firstName: 'Говно',
        lastName: 'Говныш',
        middleName: 'Говняныч',
        login: 'govno1',
        email: 'govno1@gmail.com',
        mark: 1,
        message: 'safasafs',
    }),
    new Review({
        firstName: 'Говно',
        lastName: 'Говныш',
        middleName: 'Говняныч',
        login: 'govno1',
        email: 'govno1@gmail.com',
        mark: 2,
        message: 'safasafs',
    }),
    new Review({
        firstName: 'Говно',
        lastName: 'Говныш',
        middleName: 'Говняныч',
        login: 'govno1',
        email: 'govno1@gmail.com',
        mark: 4,
        message: 'safasafs',
    }),
    new Review({
        firstName: 'Говно',
        lastName: 'Говныш',
        middleName: 'Говняныч',
        login: 'govno1',
        email: 'govno1@gmail.com',
        mark: 5,
        message:
            'safasafsfdjifjgjfigfijgjfgjifjigifgifgjjifsafasafsfdjifjgjfigfijgjfgjifjigifgifgjjifsafasafsfdjifjgjfigfijgjfgjifjigifgifgjjifsafasafsfdjifjgjfigfijgjfgjifjigifgifgjjifsafasafsfdjifjgjfigfijgjfgjifjigifgifgjjifsafasafsfdjifjgjfigfijgjfgjifjigifgifgjjifsafasafsfdjifjgjfigfijgjfgjifjigifgifgjjifsafasafsfdjifjgjfigfijgjfgjifjigifgifgjjif',
    }),
];

export const Reviews = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedReview, setSelectedReview] = useState<Review>();

    return (
        <>
            <ReviewsTable reviews={data} onRowClick={handleRowClick} />
            <ModalReview
                isModalOpen={isModalOpen}
                handleOk={handleCloseModal}
                review={selectedReview}
            />
        </>
    );

    function handleRowClick(review: Review) {
        console.log('TEST', review);
        setSelectedReview(review);
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }
};
