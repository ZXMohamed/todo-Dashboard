import axios from "axios";

export const createTask = async ({data}) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/tasks/`, data);
        return {
            data: res.data,
        }
    } catch (error) {
        throw new Error(error.message);
    }
};