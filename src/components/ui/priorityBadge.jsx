import React from 'react'
import { Box, Typography } from '@mui/material'
import { cva } from "class-variance-authority";
import clsx from 'clsx';

const priorityBadgeVariants = cva(
  'text-[12px]! rounded-md py-0.5 px-2 uppercase',
  {
    variants: {
      variant: {
        high: "bg-high/30 text-high",
        medium: "bg-medium/30 text-medium",
        low: "bg-low/30 text-low",
      }
    },
    defaultVariants: {
      variant: "high"
    },
  }
);

function PriorityBadge({title="",variant="high",className=""}) {
  return (
    <div>
      <Typography component={ "h4" } className={ clsx(priorityBadgeVariants({variant}), className) }>{ title }</Typography>
    </div>
  )
}

export default PriorityBadge