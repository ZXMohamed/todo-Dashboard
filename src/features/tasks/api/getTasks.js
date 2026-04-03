import axios from "axios";

export const getTasks = async ({ pageParam = 1, queryKey }) => {
    const [,column, limit] = queryKey;
    try {      
        const res = await axios.get("http://localhost:3000/tasks", {
            params: {
                _page: pageParam,
                _limit: Number(limit),
                column,
                _sort: "id",
                _order: "desc",
            }
        });
        return {
            data: res.data,
            total: res.headers["x-total-count"],
            nextPage: pageParam + 1,
            hasMore: res.data.length > 0,
        }
    } catch (error) {
        throw new Error(error.message);
    }
};