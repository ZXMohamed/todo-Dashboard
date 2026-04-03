import React, { useCallback, useEffect } from 'react'
import { Alert, Box, Button, CircularProgress, Stack, Typography } from '@mui/material'
import { Plus } from 'lucide-react'
import Task from './task'
import clsx from 'clsx'
import useDeleteTask from '../../hook/useDeleteTask'
import toast from 'react-hot-toast'
// import { deleteTask } from '../../features/tasks/api/deleteTask'


function StatusColumn({ tasks = [], loadMore = () => { }, hasNext=false,isSuccess=false,isError=false,error={}, isLoading=false, isFetching=false, itemsCount = 0, title = "", status = "done",className="" }) {
    
  //$open add form
  //$dnd

  const { isError: deleteItemError, isSuccess: deleteItemSuccess, mutate: deleteTask } = useDeleteTask();
  
  useEffect(()=>{
    if(deleteItemSuccess){
      toast.success("Task deleted successfully");
    }else if(deleteItemError){
      toast.error("Failed to delete task");
    }
  },[deleteItemSuccess,deleteItemError])

  const handleDeleteTask = useCallback((id) => {
    deleteTask({ id });
  }, [deleteTask]);

  const handleEditTask = useCallback(() => {

  }, []);
  
  const fetchOnScrollDown = (e) => {
    const reachDown = (e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop) < 5;
    if (reachDown && hasNext) {
      loadMore()
    }
  }
  
  return (
    <Stack component={ "section" } className={ clsx('w-full h-none max-h-[500px] xl:max-h-none xl:h-[900px] bg-secondary max-xl:rounded-br-2xl max-xl:rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl py-5 px-4 gap-2',className)}>
      <Box className='flex items-center gap-3 text-primary-text'>
        <div className={ `rounded-full w-[12px] h-[12px]` } style={{backgroundColor:`var(--color-${status})`}} />
        <Typography component="h2" className='text-[14px] uppercase'>{title}</Typography>
        <div className='rounded-full bg-muted w-[20px] h-[20px] flex justify-center items-center text-[12px]'>{ itemsCount }</div>
      </Box>
      <Stack onScroll={fetchOnScrollDown} className="max-h-[850px] overflow-y-scroll gap-2 px-1">
        { tasks?.map((task,index) => <Task key={index} id={task.id} title={ task.title } description={ task.description } priority={ task.priority} priorityTitle={task.priority} onDelete={handleDeleteTask} onEdit={handleEditTask}/>)}
      </Stack>
      { (isLoading || isFetching) && <CircularProgress enableTrackSlot size={ 40 } className='m-auto' /> }
      { isError && <Alert variant="filled" severity="error"> { error.message } </Alert> }
      { isSuccess && <Button variant='outlined' color='primary' className='capitalize!' ><Plus /> Add task</Button> }
    </Stack>
  )
}

export default StatusColumn