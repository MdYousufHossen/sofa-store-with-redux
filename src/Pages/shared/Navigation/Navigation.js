
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import logo from "../../../../images/logo2.png";
import useAuth from "../../../hook/useAuth";
import { CardMedia } from "@mui/material";

const  ElevationScroll=(props)=> {
  const { children, window } = props;
  
  

  
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
    const { user, logOut } = useAuth();
    console.log(user);
    const cart = useSelector((state) => state.cart.cart);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const StyledBadge = styled(Badge)(({ theme }) => ({
          "& .MuiBadge-badge": {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: "0 4px",
          },
        }));

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
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{backgroundColor:'rgb(220, 219, 217)'}}>
        <Container maxWidth="xl">
       <Toolbar disableGutters>
      <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/home">
              {/* <img width="100px" height="70px" src={logo} alt="" /> */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia

component="img"
style={{ width: '160px' }}
image="data:image/png;base64,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"
alt="green iguana"
/>
              </Box>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: '#F59C41'}} />
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
                a: { textDecoration: "none", color: "black" },
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/home"}>Home</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/products"}>Products</Link>
              </MenuItem>
            { user.email?<MenuItem onClick={handleCloseNavMenu}>
                <Typography onClick={logOut} >Log-Out</Typography>
              </MenuItem> 
            :<MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/Login"}>Login</Link>
              </MenuItem>
              }
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <CardMedia

                            component="img"
                            style={{ width: '160px' }}
                            image="data:image/png;base64,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"
                            alt="green iguana"
                        />
          </Typography>

          <Box
            sx={{
              a: { textDecoration: "none",color: '#F59C41',fontWeight:'bold' },
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent:'flex-end'
            }}
          >
            <MenuItem>
              <Link to={"/home"}>Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/Products"}>Products</Link>
            </MenuItem>
            {/* { user.email?<MenuItem onClick={handleCloseNavMenu}>
                <Typography onClick={logOut} sx={{color: '#F59C41',fontWeight:'bold'}} >Log-Out</Typography>
              </MenuItem> 
            :<MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/Login"}>Login</Link>
              </MenuItem>
              } */}

            <MenuItem>
              {!user.email && <Link to={"/Login"}>Login</Link>}
            </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Typography sx={{fontWeight:'bold',color:'#F59C41',display:{xs:'none',md:'block'}}}>{user?.displayName}</Typography>
            <Link to="/cart">
              <IconButton aria-label="cart" sx={{ mr: 3 }}>
                <StyledBadge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user?.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ a: { textDecoration: "none", color: "black" }, mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/Profile"}>Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/Account"}>Account</Link>
              </MenuItem> */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/Dashboard"}>Dashboard</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                {user.email && (
                  <Button varient="contained" color="error" onClick={logOut}>
                    Logout
                  </Button>
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}



// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import Badge from "@mui/material/Badge";
// import { styled } from "@mui/material/styles";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// // import logo from "../../../../images/logo2.png";
// import useAuth from "../../../hook/useAuth";
// import { CardMedia } from "@mui/material";

// const pages = ["Products", "Registration", "Upcomming"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: "0 4px",
//   },
// }));

// const Navbar = () => {
//   const { user, logOut } = useAuth();
//   console.log(user);
//   const cart = useSelector((state) => state.cart.cart);
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" style={{ color: '#F37539 !important',backgroundColor: 'white !important',fontWeight: "900 !important", marginBottom: '20px'}}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
//           >
//             <Link style={{ textDecoration: "none", color: "white" }} to="/home">
//               {/* <img width="100px" height="70px" src={logo} alt="" /> */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <CardMedia

// component="img"
// style={{ width: '160px' }}
// image="data:image/png;base64,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"
// alt="green iguana"
// />
//               </Box>
//             </Link>
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 a: { textDecoration: "none", color: "black" },
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to={"/home"}>Home</Link>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to={"/login"}>Login</Link>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to={"/dashboard"}>Dashboard</Link>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to={"/Login"}>Login</Link>
//               </MenuItem>
//             </Menu>
//           </Box>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
//           >
//             <CardMedia

//                             component="img"
//                             style={{ width: '160px' }}
//                             image="data:image/png;base64,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"
//                             alt="green iguana"
//                         />
//           </Typography>

//           <Box
//             sx={{
//               a: { textDecoration: "none", color: "white" },
//               flexGrow: 1,
//               display: { xs: "none", md: "flex" },
//             }}
//           >
//             <MenuItem>
//               <Link to={"/products"}>Products</Link>
//             </MenuItem>
//             <MenuItem>
//               <Link to={"/registration"}>Registration</Link>
//             </MenuItem>
//             <MenuItem>
//               <Link to={"/upcomming"}>Upcomming</Link>
//             </MenuItem>

//             <MenuItem>
//               {/* <Button onClick={loginWithGoogle} color="error">
//                 Login
//               </Button> */}
//               {!user.email && <Link to={"/Login"}>Login</Link>}
//             </MenuItem>
//           </Box>

//           <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
//             <Typography>{user?.displayName}</Typography>
//             <Link to="/cart">
//               <IconButton aria-label="cart" sx={{ mr: 3 }}>
//                 <StyledBadge badgeContent={cart.length} color="secondary">
//                   <ShoppingCartIcon />
//                 </StyledBadge>
//               </IconButton>
//             </Link>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src={user?.photoURL} />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ a: { textDecoration: "none", color: "black" }, mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to={"/Profile"}>Profile</Link>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to={"/Account"}>Account</Link>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Link to={"/Dashboard"}>Dashboard</Link>
//               </MenuItem>
//               <MenuItem onClick={handleCloseNavMenu}>
//                 {user.email && (
//                   <Button varient="contained" color="error" onClick={logOut}>
//                     Logout
//                   </Button>
//                 )}
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default Navbar;

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { makeStyles } from '@mui/styles';
// import { CardMedia, Menu, MenuItem, useTheme } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import useAuth from '../../../hook/useAuth';

// const Navigation = () => {
//     const theme = useTheme()
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);
  
//     const handleOpenNavMenu = (event) => {
//       setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//       setAnchorElUser(event.currentTarget);
//     };
  
//     const handleCloseNavMenu = () => {
//       setAnchorElNav(null);
//     };
  
//     const handleCloseUserMenu = () => {
//       setAnchorElUser(null);
//     };
  
//     const styleNav = makeStyles({
//         nav: {
//             color: '#F37539 !important',
//             backgroundColor: 'white !important',
//             fontWeight: "900 !important",
//             marginBottom: '20px'

//         },
//         navIcon: {
//             [theme.breakpoints.up('sm')]: {
//                 display: 'none !important'
//             }
//         },
//         navLogo: {
//             [theme.breakpoints.down('sm')]: {
//                 justifyContent: 'flex-end !important'
//             }
//         },
//         navItem: {
//             [theme.breakpoints.down('sm')]: {
//                 display: 'none !important'
//             }
//         },
//         cartIconText: {
//             position: 'absolute',
//             right: '13px',
//             bottom: '40px',
//             fontSize: ' 0.75rem !important',
//             backgroundColor: 'gray',
//             padding: '0px 6px',
//             borderRadius: '10px',
//             color: 'white'

//         },
//         sNav: {
//             textDecoration: "none",
//             color: "#F37539",
//             marginLeft: "10px"
//         }
//     })
//     const { nav, navItem, navIcon, navLogo, cartIconText, sNav } = styleNav()
//     const { user, logOut } = useAuth();
//     const cart = useSelector(state => state.cart.cart)
//     console.log(user.displayName, "jink")
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="fixed" className={nav}>
//                 <Toolbar>
//                     <IconButton

//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ mr: 2 }}
//                         className={navIcon}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Menu
//                         id="menu-appbar"
//                         anchorEl={anchorElNav}
//                         anchorOrigin={{
//                             vertical: "bottom",
//                             horizontal: "left",
//                         }}
//                         keepMounted
//                         transformOrigin={{
//                             vertical: "top",
//                             horizontal: "left",
//                         }}
//                         open={Boolean(anchorElNav)}
//                         onClose={handleCloseNavMenu}
//                         sx={{
//                             a: { textDecoration: "none", color: "black" },
//                             display: { xs: "block", md: "none" },
//                         }}
//                     >
//                         <MenuItem onClick={handleCloseNavMenu}>
//                             <Link to={"/products"}>Products</Link>
//                         </MenuItem>
//                         <MenuItem onClick={handleCloseNavMenu}>
//                             <Link to={"/registration"}>Registration</Link>
//                         </MenuItem>
//                         <MenuItem onClick={handleCloseNavMenu}>
//                             <Link to={"/upcomming"}>Upcomming</Link>
//                         </MenuItem>
//                         <MenuItem onClick={handleCloseNavMenu}>
//                             <Link to={"/Login"}>Login</Link>
//                             {/* <Button onClick={loginWithGoogle}>Login</Button> */}
//                         </MenuItem>
//                     </Menu>
//                     <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                         <CardMedia

//                             component="img"
//                             style={{ width: '160px' }}
//                             image="data:image/png;base64,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"
//                             alt="green iguana"
//                         />
//                     </Typography>

//                     <Box className={navItem}  >
//                         <Link className={sNav} to="/home">Home</Link>
//                         <Link className={sNav} to="/products">Products</Link>
//                         {user.email ? <Button color="inherit" className={sNav} sx={{ fontWeight: 'bold' }} onClick={logOut} >Log-Out</Button>
//                             : <Link className={sNav} to="/login">Login</Link>
//                         }
//                         {
//                             user.email && <Typography variant="body3">{user.displayName}</Typography>
//                         }
//                         {
//                             user.email && <Link className={sNav} to="/dashboard">Dashboard</Link>
//                         }
//                         {/* <Button color="inherit"><Button color="inherit">Login</Button></Button> */}

//                         <Link className={sNav} to="/cart" ><AddShoppingCartIcon sx={{ fontSize: 'large' }} />
//                             <Typography variant="h6" className={cartIconText}>{cart.length}</Typography></Link>

//                     </Box>

//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// };

// export default Navigation;