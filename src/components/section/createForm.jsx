import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';

function CreateForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
 
  };

  return (
    <Box className="p-5">
        <Typography variant="h2" className='mb-10!'>Create From</Typography>          
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 max-w-[600px]">
            
            <TextField variant='filled'label="Title"{...register("title", { required: "Title is required" })}error={!!errors.title}helperText={errors.title?.message}/>

            <TextField  variant='filled' label="Description" multiline rows={3} {...register("description")} />

            <TextField label="Priority" select defaultValue="" {...register("priority", { required: "Priority is required" })} error={!!errors.priority} helperText={errors.priority?.message}>
                <MenuItem value="">Select priority</MenuItem>
                <MenuItem value="low" className='bg-low/50!'>Low</MenuItem>
                <MenuItem value="medium" className='bg-medium/50!'>Medium</MenuItem>
                <MenuItem value="high" className='bg-high/50!'>High</MenuItem>
            </TextField>

            <Button type="submit" variant="contained">Create</Button>
        </form>
    </Box>
  );
}

export default CreateForm