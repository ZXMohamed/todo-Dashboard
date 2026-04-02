import { Box, Typography } from '@mui/material'
import React from 'react'

function PriorityBadge({title="",variant="hight"}) {
  return (
    <div>
        <Typography component={ "h4" } className='bg-medium/30 text-medium text-[12px]! rounded-md py-1 px-2 uppercase'>{ title }</Typography>
    </div>
  )
}

export default PriorityBadge