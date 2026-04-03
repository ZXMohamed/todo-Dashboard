import React from 'react'
import StatusColumn from '../ui/statusColumn'
import { Box, Grid } from '@mui/material'
import useGetTasks from '../../hook/useGetTasks';
import constValues from '../../data/constValues';

function ToDoBoard({searchQuery}) {
//$get search parameter from url

    const { data: backlogData, dataList: backlogList, fetchNextPage: backlogFetchNextPage, hasNextPage: backlogHasNextPage, isFetchingNextPage: backlogIsFetchingNextPage, error: backlogError, isError: backlogIsError, isLoading: backlogIsLoading, isSuccess:backlogIsSuccess} = useGetTasks({column:constValues.columns.backlog, limit: constValues.columnsLoadLimit, searchQuery });
    const { data: inProgressData, dataList: inProgressList, fetchNextPage: inProgressFetchNextPage, hasNextPage: inProgressHasNextPage, isFetchingNextPage: inProgressIsFetchingNextPage, error: inProgressError, isError: inProgressIsError, isLoading: inProgressIsLoading, isSuccess:inProgressIsSuccess} = useGetTasks({column:constValues.columns.inProgress, limit: constValues.columnsLoadLimit, searchQuery });
    const { data: reviewData, dataList: reviewList, fetchNextPage: reviewFetchNextPage, hasNextPage: reviewHasNextPage, isFetchingNextPage: reviewIsFetchingNextPage, error: reviewError, isError: reviewIsError, isLoading: reviewIsLoading, isSuccess:reviewIsSuccess} = useGetTasks({column:constValues.columns.review, limit: constValues.columnsLoadLimit, searchQuery });
    const { data: doneData, dataList: doneList, fetchNextPage: doneFetchNextPage, hasNextPage: doneHasNextPage, isFetchingNextPage: doneIsFetchingNextPage, error: doneError, isError: doneIsError, isLoading: doneIsLoading, isSuccess:doneIsSuccess} = useGetTasks({column:constValues.columns.done, limit: constValues.columnsLoadLimit, searchQuery });
   
    // console.log(backlogList, inProgressList, reviewList, doneList);

    // console.log("s");

    return (
        <Box>
            <Grid container spacing={3} className="h-[100vh] pt-10 px-6 pb-0">
                <Grid size={ { xs: 12, sm: 6, lg: 4, xl: 3 } }>
                    <StatusColumn tasks={ backlogList } itemsCount={ backlogData?.pages[0]?.total } title='backlog'isSuccess={backlogIsSuccess} isError={ backlogIsError } error={backlogError} isLoading = {backlogIsLoading}  isFetching={ backlogIsFetchingNextPage } hasNext={ backlogHasNextPage } loadMore={ backlogFetchNextPage } status={constValues.columns.backlog } />
                </Grid>
                <Grid size={{xs:12,sm:6,lg:4,xl:3}}>    
                    <StatusColumn tasks={ inProgressList } itemsCount={ inProgressData?.pages[0]?.total } title='in progress' isSuccess={ inProgressIsSuccess } isError={ inProgressIsError } error={ inProgressError } isLoading={ inProgressIsLoading } isFetching={ inProgressIsFetchingNextPage } hasNext={ inProgressHasNextPage } loadMore={ inProgressFetchNextPage } status={ constValues.columns.inProgress } />
                </Grid>
                <Grid size={{xs:12,sm:6,lg:4,xl:3}}>    
                    <StatusColumn tasks={ reviewList } itemsCount={ reviewData?.pages[0]?.total } title='review' isSuccess={ reviewIsSuccess } isError={ reviewIsError } error={ reviewError } isLoading={ reviewIsLoading } isFetching={ reviewIsFetchingNextPage } hasNext={ reviewHasNextPage } loadMore={ reviewFetchNextPage } status={ constValues.columns.review } />
                </Grid>
                <Grid size={{xs:12,sm:6,lg:4,xl:3}}>    
                    <StatusColumn tasks={ doneList } itemsCount={ doneData?.pages[0]?.total } title='done' isSuccess={ doneIsSuccess } isError={ doneIsError } error={ doneError } isLoading={ doneIsLoading } isFetching={ doneIsFetchingNextPage } hasNext={ doneHasNextPage } loadMore={ doneFetchNextPage } status={ constValues.columns.done } />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ToDoBoard