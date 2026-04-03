import React, { useRef } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import {  SearchIcon } from 'lucide-react';
import { Box, OutlinedInput } from '@mui/material';
import { createSearchParams, useNavigate } from 'react-router-dom';
import PriorityBadge from './priorityBadge';

function Search() {

    const goto = useNavigate();

    const searchInputRef = useRef();

    const handleSearch = () => { 
        goto({ pathname: "/search", search: createSearchParams({ searchQuery: searchInputRef.current?.value || "" }).toString() });
    }
    
    const handleSearchByPriority = (priority) => { 
        goto({ pathname: "/search", search: createSearchParams({ searchQuery: priority || "" }).toString() });
    }

    return (
      <Box component={"section"} className='flex items-center gap-2 focus-within:[&>button]:block'>
        <button onClick={()=>handleSearchByPriority("high")}><PriorityBadge title={"High"} variant={"high"}/></button>
        <button onClick={()=>handleSearchByPriority("medium")}><PriorityBadge title={ "medium" } variant={ "medium" } /></button>
        <button onClick={()=>handleSearchByPriority("low")}><PriorityBadge title={ "low" } variant={ "low" } /></button>
        
            
        <FormControl variant="standard">
            <OutlinedInput inputRef={searchInputRef} className='h-10 w-[300px] text-[14px]!' placeholder='Search tasks...'
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon size={20}/>
                    </InputAdornment>
                }
            />
        </FormControl>
            
        <button onClick={handleSearch} className='bg-primary text-accent h-full p-2 rounded-2xl cursor-pointer hidden'>
            <SearchIcon size={20}/>
        </button>
      </Box>
  )
}

export default Search