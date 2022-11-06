import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useCallback } from "react";

function Header() {
  const { user } = useSelector((state) => state);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);
  const handleCloseMenu = useCallback(() => setAnchorEl(null), []);
  const handleLogOut = useCallback(async () => await signOut(getAuth()), []);

  return (
    <>
      {/* TODO backgroundColor 테마적용 */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          color: "#9A939B",
          backgroundColor: "#4c3c4c",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "50px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <TagIcon />
            <Typography variant="h6" component="div">
              SLACK
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={handleOpenMenu}>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#9A939B" }}
              >
                {user.currentUser?.displayName}
              </Typography>
              <Avatar
                sx={{ ml: "10px" }}
                alt="profileImage"
                src={user.currentUser?.photoURL}
              />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem>
                {" "}
                <Typography textAlign="center">프로필</Typography>{" "}
              </MenuItem>
              <MenuItem onClick={handleLogOut}>
                {" "}
                <Typography textAlign="center">Log Out</Typography>{" "}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
