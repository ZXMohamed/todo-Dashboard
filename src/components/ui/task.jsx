import React from 'react'
import { Box, CardContent, Chip, Typography } from '@mui/material'
import PriorityBadge from './priorityBadge'

function Task({ title, description, priorityTitle = "", priority = "" }) {
    return (
        <Box className="border border-primary-border bg-accent rounded-lg">
            <CardContent className='flex gap-2 flex-col items-start justify-center pb-5!'>
                <Typography component="h3" className='text-primary-text'>{ title }</Typography>
                <Typography component="p" className='text-muted-text'>{ description }</Typography>
                <Box>
                    <PriorityBadge title={priorityTitle} variant={ priority } />
                </Box>
            </CardContent>
        </Box>
    )
}

export default Task