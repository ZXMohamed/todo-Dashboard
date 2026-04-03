import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editTask } from '../features/tasks/api/editTask';

function useEditTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editTask,
    onSuccess: (data,variables) => {
      queryClient.invalidateQueries({ queryKey: ['tasks',variables.status] });
    },
  });
  
}

export default useEditTask
