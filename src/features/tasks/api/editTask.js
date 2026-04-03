import axios from "axios";

export const editTask = async ({ id, data }) => {
    try {
        const res = await axios.patch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, data);
        return {
            data: res.data,
        }
    } catch (error) {
        throw new Error(error.message);
    }
};