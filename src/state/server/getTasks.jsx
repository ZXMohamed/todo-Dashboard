import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchItems = async ({ pageParam = 1 }) => {
  const res = await axios.get(`/api/items?page=${pageParam}`);
  return res.data;
};

const { data, fetchNextPage, hasNextPage, isFetchingNextPage, } = useInfiniteQuery({
  queryKey: ["items"],
  queryFn: fetchItems,
  getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
});