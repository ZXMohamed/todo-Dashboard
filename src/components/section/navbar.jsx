import { Box, Stack } from '@mui/material'
import { Grid2x2 } from 'lucide-react'
import React from 'react'
import Search from '../ui/search'
import useGetTasks from '../../hook/useGetTasks';
import { Link, useSearchParams } from 'react-router-dom';

function Navbar() {

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("searchQuery") || "";

  const { data:tasksData } = useGetTasks({limit: 1,searchQuery });

  return (
    <nav className='flex items-center justify-between py-4 px-6 border-b border-primary-border'>
        <Box component={"section"} className='flex items-center gap-4'>
            <Box className='p-2 bg-primary text-accent rounded-lg'>
                <Grid2x2/>
            </Box>
            <Stack className='flex flex-col'>
                <Link to={"/"}><h1 className='text-[16px]'>KANBAN BOARD</h1></Link>
                <p className='text-[12px]'>{tasksData?.pages[0]?.total??0} tasks</p>
            </Stack>
        </Box>
        <Search/>
    </nav>
  )
}

export default Navbar