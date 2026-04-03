import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTask } from '../features/tasks/api/deleteTask';

function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: (data,variables) => {console.log(variables.id,variables.status);
      queryClient.invalidateQueries({ queryKey: ['tasks',variables.status] });
    },
  });
  
}

export default useDeleteTask