import axios from "axios";

export const editTask = async ({ id, data }) => {
    try {
        const res = await axios.patch(`http://localhost:3000/tasks/${id}`, data);
        return {
            data: res.data,
        }
    } catch (error) {
        throw new Error(error.message);
    }
};