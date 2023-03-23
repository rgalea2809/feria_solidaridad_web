
import { AllEventsResponse } from '../types';
import axiosInstance from './axios';

export const eventsService = {

    getEvents: async () => {
        try {
            const events = await axiosInstance.get(`event`);
            const response: AllEventsResponse = events.data;
            if (response.error)
                throw new Error('Something went wrong try again later!');
            return response;
        } catch (e) {
            throw e;
        }
    },

};