import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';

function EditForm({ id="", title = "5555", description = "dasdasd", priority = "low" }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: title,
      description: description,
      priority: priority,
    },
  });

  const onSubmit = (data) => {
 
  };

  return (
    <Box className="p-5">
        <Typography variant="h2" className='mb-10!'>Edit From</Typography>       
           
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 max-w-[600px]">
            
            <TextField variant='filled'label="Title"{...register("title", { required: "Title is required" })}error={!!errors.title}helperText={errors.title?.message}/>

            <TextField multiline variant='filled' label="Description" rows={3} {...register("description")} />

            <TextField select label="Priority" defaultValue={priority} {...register("priority", { required: "Priority is required" })} error={!!errors.priority} helperText={errors.priority?.message}>
                <MenuItem value="low" className='bg-low/50!'>Low</MenuItem>
                <MenuItem value="medium" className='bg-medium/50!'>Medium</MenuItem>
                <MenuItem value="high" className='bg-heigh/50!'>High</MenuItem>
            </TextField>

            <Button type="submit" variant="contained">Edit</Button>
        </form>
    </Box>
  );
}

export default EditForm