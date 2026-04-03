import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTask } from '../features/tasks/api/createTask';

function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: (data,variables) => {
      queryClient.invalidateQueries({ queryKey: ['tasks',variables.status] });
    },
  });
  
}

export default useCreateTask
