
import { AllImagesResponse } from '../types';
import axiosInstance from './axios';

export const imagesService = {

    getImages: async () => {
        try {
            const images = await axiosInstance.get(`images`);
            const response: AllImagesResponse = images.data;
            if (response.error)
                throw new Error('Something went wrong try again later!');
            return response;
        } catch (e) {
            throw e;
        }
    },

};