import { Box } from "@mui/material";

function DragDropContainer({ id, children }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <Box ref={setNodeRef}>
        {children}
    </Box>
  );
}

export default DragDropContainer