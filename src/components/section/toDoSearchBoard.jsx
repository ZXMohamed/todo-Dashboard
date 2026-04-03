import React from 'react'
import ToDoBoard from './toDoBoard'
import { useSearchParams } from 'react-router-dom'
import { SearchIcon } from 'lucide-react';

function ToDoSearchBoard() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("searchQuery") || "";
    return (
        <>
            <section className='p-5 flex gap-2 items-center'>
                <div className='rounded-2xl bg-primary w-12 h-12 flex justify-center items-center'><SearchIcon size={ 30 } className='text-accent'/></div>
                <h2 component={"h2"} className='text-primary font-light'>Search About : { searchQuery }</h2>
            </section>
            
            <ToDoBoard searchQuery={ searchQuery } />
        </>
    )
}

export default ToDoSearchBoard