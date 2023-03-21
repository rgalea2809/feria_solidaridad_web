import { AllProjectsResponse, FullProjectResponse } from '../types';
import axiosInstance from './axios';

export const projectsService = {

    getProjects: async (page?: number, limit?: number) => {
        try {
            const projects = await axiosInstance.get(`project?${page && limit ? `page=${page}&limit=${limit}` : ''} `);
            const response: AllProjectsResponse = projects.data;
            if (response.error)
                throw new Error('Something went wrong try again later!');
            return response;
        } catch (e) {
            throw e;
        }
    },
    getProjectById: async (slug: string) => {
        try {
            const projects = await axiosInstance.get(`project/${slug}`);
            const response: FullProjectResponse = projects.data;
            if (response.error)
                throw new Error('Something went wrong try again later!');
            return response.data;
        } catch (e) {
            throw e;
        }
    },

};