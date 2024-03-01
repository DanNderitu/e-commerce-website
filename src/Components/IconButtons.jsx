import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";

import FavoriteIcon from "@mui/icons-material/Favorite";

import LoginPage from "./LoginPage";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleLoginModal } from "../LoginReducer";

import { useNavigate } from "react-router-dom";

export default function IconButtons() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false); // Manage local visibility state for custom animation/styling

  const handleOpenLoginModal = () => {
    dispatch(toggleLoginModal());
    setIsOpen(true); // Update local state for animation/styling
  };

  function combinedFunctionToLogin() {
    handleLoginClick();
    handleOpenLoginModal();
  }

  const handleCloseLoginModal = () => {
    dispatch(toggleLoginModal());
    setIsOpen(false); // Update local state for animation/styling
  };

  return (
    <div>
      <Stack direction="row" className="mr-0">
        <IconButton aria-label="account" className="text-black">
          <AccountCircle onClick={combinedFunctionToLogin} />
          {isOpen && <LoginPage onClose={handleCloseLoginModal} />}
        </IconButton>
        <IconButton aria-label="favorites" className="text-black">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to shopping cart" className="text-black">
          <AddShoppingCartIcon onClick={handleCartClick} />
        </IconButton>
      </Stack>
    </div>
  );
}
