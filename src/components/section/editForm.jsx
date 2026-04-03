import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import React, { use, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import useFormsState from '../../hook/useFormsState';
import { X } from 'lucide-react';
import constValues from "../../data/constValues";
import toast from 'react-hot-toast';
import useEditTask from '../../hook/useEditTask';

function EditForm() {

  const { forms, openEditForm } = useFormsState();

  const { isError, isSuccess, isPending, mutate } = useEditTask();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Task edited successfully");
    } else if (isError) {
      toast.error("Failed to edit the task");
    }
  }, [isSuccess, isError]);

  useEffect(() => { 
    if (!forms.edit.data || !forms.edit.data.id) {
      openEditForm(false, null);
    }
  },[])
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      title: forms.edit.data?.data?.title ?? "",
      description: forms.edit.data?.data?.description ?? "",
      priority: forms.edit.data?.data?.priority ?? "",
    },
  });

  useEffect(() => {
    setValue("title", forms.edit.data?.data?.title ?? "");
    setValue("description", forms.edit.data?.data?.description ?? "");
    setValue("priority", forms.edit.data?.data?.priority ?? "");
  }, [forms.edit.data, setValue]);

  const onSubmit = (data) => {
    mutate({id:forms.edit.data.id, data:{ ...data, column: forms.edit.data.status }, status:forms.edit.data.status});
  };

  return (
    <Box className="p-5  max-w-[600px]">
      <section className='flex items-center justify-between mb-10'>
        <Typography variant="h2">Edit From</Typography>       
        <Button onClick={()=>{openEditForm(false,null)}}><X/></Button>          
      </section>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          
          <TextField variant='filled'label="Title"{...register("title", { required: "Title is required" })}error={!!errors.title}helperText={errors.title?.message}/>

          <TextField multiline variant='filled' label="Description" rows={3} {...register("description")} />

          <TextField select label="Priority" defaultValue={forms.edit.data?.data?.priority ?? ""} {...register("priority", { required: "Priority is required" })} error={!!errors.priority} helperText={errors.priority?.message}>
              <MenuItem value={constValues.priority["low"]} className='bg-low/50!'>Low</MenuItem>
              <MenuItem value={constValues.priority["medium"]} className='bg-medium/50!'>Medium</MenuItem>
              <MenuItem value={constValues.priority["high"]} className='bg-high/50!'>High</MenuItem>
          </TextField>

          <Button type="submit" variant="contained" loading={isPending} style={{backgroundColor:`var(--color-${forms.edit.data.status})`}}>Edit</Button>
      </form>
    </Box>
  );
}

export default EditForm