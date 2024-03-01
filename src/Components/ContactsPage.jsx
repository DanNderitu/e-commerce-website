//import React from "react";
import { Box, Typography, Link, Stack, IconButton } from "@mui/material";
import { Facebook, Email, Phone, Instagram } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
function ContactsPage() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(254 215 170)",
        color: "black",
        padding: "20px",

        display: "grid",

        alignItems: "center", // Vertically center content
        justifyItems: "center",
        marginTop: "16px",
      }}
    >
      <Box className="grid items-center">
        <Typography variant="h6 " className="m-auto">
          Contact Us
        </Typography>
        <Stack direction="row">
          <Link href="#" underline="none">
            <IconButton sx={{ color: "rgb(29 78 216)" }}>
              <Facebook />
            </IconButton>
            <Link href="#" underline="none">
              <IconButton sx={{ color: "rgb(239 68 68)" }}>
                <Instagram />
              </IconButton>
            </Link>
            <Link href="#" underline="none">
              <IconButton sx={{ color: "rgb(0 0 0)" }}>
                <XIcon />
              </IconButton>
            </Link>
          </Link>
          <Link href="#" underline="none">
            <IconButton sx={{ color: "#fff" }}>
              <Email />
            </IconButton>
          </Link>
        </Stack>
      </Box>

      <Link href="#" underline="none" className="font-bold text-black">
        <IconButton sx={{ color: "rgb(29 78 216)" }}>
          <Phone />
        </IconButton>
        0704176681
      </Link>

      <Box>
        <Typography variant="body2">© 2024 Spce Living</Typography>
      </Box>
    </Box>
  );
}

export default ContactsPage;
