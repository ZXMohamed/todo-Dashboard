import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { X } from 'lucide-react';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import useFormsState from '../../hook/useFormsState';
import constValues from "../../data/constValues";
import useCreateTask from '../../hook/useCreateTask';
import toast from 'react-hot-toast';


function CreateForm() {

  const { forms, openCreateForm } = useFormsState();

  const { isError, isSuccess, isPending, mutate } = useCreateTask();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Task created successfully");
    } else if (isError) {
      toast.error("Failed to create the task");
    }
  }, [isSuccess, isError]);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    mutate({ data: { ...data, column: forms.create.status }, status: forms.create.status });
  };

  return (
    <div className="p-5 max-w-[600px]">
      <Box component={"section"} className='flex items-center justify-between gap-4 mb-10' >
        <Typography variant="h2">Create From</Typography>
        <Button onClick={()=>{openCreateForm(false)}} ><X /></Button>          
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          
          <TextField variant='filled'label="Title"{...register("title", { required: "Title is required" })}error={!!errors.title}helperText={errors.title?.message}/>

          <TextField  variant='filled' label="Description" multiline rows={3} {...register("description")} />

          <TextField label="Priority" select defaultValue="" {...register("priority", { required: "Priority is required" })} error={!!errors.priority} helperText={errors.priority?.message}>
              <MenuItem value="">Select priority</MenuItem>
              <MenuItem value={constValues.priority.low} className='bg-low/50!'>Low</MenuItem>
              <MenuItem value={constValues.priority.medium} className='bg-medium/50!'>Medium</MenuItem>
              <MenuItem value={constValues.priority.high} className='bg-high/50!'>High</MenuItem>
          </TextField>

          <Button type="submit" variant="contained" loading={isPending} style={{backgroundColor:`var(--color-${forms.create.status})`}}>Create</Button>
      </form>
    </div>
  );
}

export default CreateForm