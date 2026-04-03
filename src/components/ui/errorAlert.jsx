import React from 'react'
import { Box, CardContent } from '@mui/material'
import { AlertCircle } from 'lucide-react'
import clsx from 'clsx'

function ErrorAlert({msg="",className=""}) {
  return (
    <CardContent className={ clsx('bg-red-500 rounded-2xl text-accent',className) }>
      <Box className="flex">
        <AlertCircle /> &nbsp;<p>Error</p>
      </Box>
      <p className='ml-7'>{msg}</p>
    </CardContent>
  )
}

export default ErrorAlert