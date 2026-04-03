import React from 'react'
import { Box, CardContent, Chip, IconButton, Stack, Typography } from '@mui/material'
import PriorityBadge from './priorityBadge'
import clsx from 'clsx'
import { DeleteIcon, Edit, Trash } from 'lucide-react'

function Task({ id="", title="", description="", priorityTitle = "", priority = "", onDelete = () => { }, onEdit = () => { }, className = "" }) {
    return (
        <Box className={clsx("border border-primary-border bg-accent rounded-lg flex justify-between",className)} >
            <CardContent className='flex gap-2 flex-col items-start justify-center pb-5!'>
                <Typography component="h3" className='text-primary-text'>{ title }</Typography>
                <Typography component="p" className='text-muted-text text-[14px]!'>{ description }</Typography>
                <Box>
                    <PriorityBadge title={priorityTitle} variant={ priority } />
                </Box>
            </CardContent>
            <Stack className='gap-1 p-2'>
                <IconButton >
                    <Trash onClick={()=>onDelete(id)} size={20} />
                </IconButton>
                <IconButton >
                    <Edit onClick={()=>onEdit(id,{title,description,priority})} size={20}/>
                </IconButton>
            </Stack>
        </Box>
    )
}

export default Task