
import { AllImagesResponse } from '../types';
import axiosInstance from './axios';

export const homepageService = {

    getHomePage: async () => {
        try {
            const images = await axiosInstance.get(`home-page`);
            const response: AllImagesResponse = images.data;
            if (response.error)
                throw new Error('Something went wrong try again later!');
            return response;
        } catch (e) {
            throw e;
        }
    },

};