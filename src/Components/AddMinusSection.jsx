import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function AddMinusSection() {
  return (
    <Stack direction="row" spacing={2} className="flex items-center">
      <Button variant="contained" className="bg-orange-400 h-10">
        <RemoveIcon />
      </Button>
      <p>number</p>
      <Button variant="contained" className="bg-orange-400 h-10">
        <AddIcon />
      </Button>
    </Stack>
  );
}
