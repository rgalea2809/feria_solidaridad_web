import axiosInstance from './axios';

export const projectsService = {

    getProjects: async () => {
        try {
            const projects = await axiosInstance.get('project');
            const response = projects.data;
            if (response.data.length === 0)
                throw new Error('Something went wrong try again later!');
            return response.data;
        } catch (e) {
            throw e;
        }
    },
};