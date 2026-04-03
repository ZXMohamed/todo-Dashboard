import axios from "axios";

export const createTask = async ({data}) => {
    try {
        const res = await axios.post(`http://localhost:3000/tasks/`, data);
        return {
            data: res.data,
        }
    } catch (error) {
        throw new Error(error.message);
    }
};