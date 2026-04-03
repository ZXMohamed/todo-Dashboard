import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTask } from '../features/tasks/api/deleteTask';

function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: (data,variables) => {
      queryClient.invalidateQueries({ queryKey: ['tasks',variables.status] });
    },
  });
  
}

export default useDeleteTask
