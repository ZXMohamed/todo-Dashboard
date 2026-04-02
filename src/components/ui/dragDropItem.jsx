// import React from 'react'
// import { useDraggable } from '@dnd-kit/react';
// import { Box } from '@mui/material';

// function DragDropItem({children}) {

//     const {ref:itemRef} = useDraggable({id: 'draggable'});
    
//     return (
//         <div ref={ itemRef }>{ children }</div>
//     )
// }



import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function DragDropItem({ id, children }) {
    const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
} = useSortable({ id });

const style = {
    transform: CSS.Transform.toString(transform),
    transition,
};

return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}
export default DragDropItem