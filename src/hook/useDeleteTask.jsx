import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTask } from '../features/tasks/api/deleteTask';

function useDeleteTask({id}) {
//   const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask(id),
    // onSuccess: () => {
    //   // إعادة جلب قائمة المنشورات لتحديث الواجهة تلقائيًا
    //   queryClient.invalidateQueries({ queryKey: ['posts'] });
    // },
  });
  
}

export default useDeleteTask


