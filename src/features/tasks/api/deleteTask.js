import axios from "axios";

export const deleteTask = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3000/tasks/${id}`);
        return {
            data: res.data,
        }
    } catch (error) {
        throw new Error(error.message);
    }
};