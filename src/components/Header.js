import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";


const pages = ["Notes", "Reminders", "Labels", "About"];

const Header = ({height='65'}) => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        // <BrowserRouter>
        <AppBar
            sx={{
                position: "absolute",
                height: `${height}px`,
                marginLeft: "0",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <DescriptionOutlinedIcon />
                        </Link>
                    </IconButton>

                    <Typography variant="h5" component="div" noWrap>
                        Notes App
                    </Typography>

                    <Box
                        component="div"
                        sx={{
                            display: "flex",
                            flexGrow: 1,
                            flexDirection: "row",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 0,
                                        color: "white",
                                        display: "block",
                                    }}
                                >
                                    <Link
                                        to={`/${page.toLowerCase()}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        {page}
                                    </Link>
                                </Button>
                            ))}
                        </Box>

                        <Box
                            sx={{
                                justifyContent: "flex-end",
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography textAlign="center">
                                            <Link
                                                to={`/${page.toLowerCase()}`}
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                {page}
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        // </BrowserRouter>
    );
};
export default Header;
