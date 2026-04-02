import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Plus } from 'lucide-react'
import Task from './task'
function StatusColumn({ items = [], loadMore = () => { }, itemsCount = 0, title = "", color = "done" }) {
    
    //$infinity scroll
    //$open add form 

    return (
      <Stack component={"section"} className='w-full h-none max-h-[500px] xl:max-h-none xl:h-[900px] bg-secondary max-xl:rounded-br-2xl max-xl:rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl py-5 px-4 gap-2'>
        <Box className='flex items-center gap-3 text-primary-text'>
            <div className={ `rounded-full [&:::-webkit-scrollbar-thumb]:bg-${color} w-[12px] h-[12px]` } style={{backgroundColor:`var(--color-${color})`}} />
            <Typography component="h2" className='text-[14px] capitalize'>{title}</Typography>
            <div className='rounded-full bg-muted w-[20px] h-[20px] flex justify-center items-center text-[12px]'>{ itemsCount }</div>
        </Box>
        <Stack className="max-h-[850px] overflow-y-scroll gap-2 px-1">
          <Task />
          {/* {items.map(item => (
          ))} */}
        </Stack>
        <Button variant='outlined' color='primary'><Plus/> Add task</Button>
      </Stack>
  )
}

export default StatusColumn