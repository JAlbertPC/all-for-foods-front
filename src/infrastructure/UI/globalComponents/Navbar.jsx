import React, {useEffect, useState} from "react";
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Tooltip, Avatar, Button } from '@mui/material';
import LoggedUserMenu from "./LoggedUserMenu.navBar";
import {IsLogged} from "../../controllers/LoginController";
import '../CSS/Navbar.css';

const pages = ['Home', 'Search'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const a = (IsLogged() ? <LoggedUserMenu />: "");

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="fixed" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: "inherit",
                            textDecoration: 'none',
                        }}
                    >
                        Food for All
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                        </IconButton>
                        <Menu className="icon-menu"
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            href={"/"+page}
                          >
                            {page}
                          </Button>
                        ))}
                    </Box>
                    {a}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Navbar;