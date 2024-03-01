import Chip from "@mui/material/Chip";

import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteIconComponent() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Chip
      className="text-red-500 border-red-500 w-24 "
      label="Delete"
      onClick={handleClick}
      onDelete={handleDelete}
      deleteIcon={<DeleteIcon style={{ color: "red" }} />}
      variant="outlined"
      //className="border-red-500"
    />
  );
}
