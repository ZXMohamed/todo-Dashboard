import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import {  SearchIcon } from 'lucide-react';
import { Box, OutlinedInput } from '@mui/material';

function Search() {


    //$call search result page 
    //$set search query (search="")


    return (
      <Box component={"section"} className='flex items-center gap-2 focus-within:[&>button]:block'>
        <FormControl variant="standard">
            <OutlinedInput className='h-10 w-[300px] text-[14px]!' placeholder='Search tasks...'
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon size={20}/>
                    </InputAdornment>
                }
            />
        </FormControl>
        <button className='bg-primary text-accent h-full p-2 rounded-2xl cursor-pointer hidden'>
            <SearchIcon size={20}/>
        </button>
      </Box>
  )
}

export default Search