import React, { useMemo } from 'react'
import { getTasks } from '../features/tasks/api/getTasks';
import { useInfiniteQuery } from '@tanstack/react-query';



function useGetTasks({ column, limit = 5, searchQuery }) {

    const controls = useInfiniteQuery({
        queryKey: ["tasks",column,limit,searchQuery],
        queryFn: getTasks,
        getNextPageParam: (lastPage) => lastPage.hasMore ? lastPage.nextPage : undefined,
    });

    const dataList = useMemo(() => {
        const list = [];
        const pages = [...controls?.data?.pages ?? []];
        for (let page of pages) {
            list.push(...page.data);
        }
        return list;
    }, [controls.data]);

    return { ...controls, dataList };

}

export default useGetTasks