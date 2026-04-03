import axios from "axios";

export const deleteTask = async ({ id }) => {
    try {
        const res = await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
        return {
            data: res.data,
        }
    } catch (error) {
        throw new Error(error.message);
    }
};