import { AllInstitutionsResponse, FullInstitutionResponse } from '../types';
import axiosInstance from './axios';

export const institutionService = {

    getInstitutions: async (page?: number, limit?: number) => {
        try {
            const projects = await axiosInstance.get(`institution?${page && limit ? `page=${page}&limit=${limit}` : ''} `);
            const response: AllInstitutionsResponse = projects.data;
            if (response.error)
                throw new Error('Something went wrong try again later!');
            return response;
        } catch (e) {
            throw e;
        }
    },
    getInstitutionById: async (slug: string) => {
        try {
            const projects = await axiosInstance.get(`institution/${slug}`);
            const response: FullInstitutionResponse = projects.data;
            if (response.error)
                throw new Error('Something went wrong try again later!');
            return response.data;
        } catch (e) {
            throw e;
        }
    },

};