import React, { useContext, useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../../context/auth";

// Material-UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AppLogo from "../../assets/images/yinyang.png";

// Create custom styles with Material-UI
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#f5f5f5",
    marginBottom: "50px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Alegreya",
    fontWeight: 600,
    color: "#353535",
    textAlign: "left",
    padding: 5,
  },
  menuButton: {
    fontWeight: 700,
    size: "20px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "1000px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  // Import the custom styles created above
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  // Detect Window change and set responsiveness
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  // To display on Desktop with No User
  const displayDesktopNoUser = () => {
    return (
      <Toolbar className={toolbar}>
        <Typography variant="h5" component="h1" className={logo}>
          <IconButton component={RouterLink} to="/dashboard">
            <img src={AppLogo} style={{ width: 35 }} />
          </IconButton>
          Philosophypster
        </Typography>
        <div>
          <Button
            color="primary"
            className={menuButton}
            component={RouterLink}
            to="/login"
          >
            Login
          </Button>
          <Button
            color="primary"
            className={menuButton}
            component={RouterLink}
            to="/register"
            variant="contained"
          >
            Register
          </Button>
        </div>
      </Toolbar>
    );
  };

  // To display on Mobile with No User
  const displayMobileNoUser = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon style={{ fill: "#353535" }} />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <Link
              component={RouterLink}
              to="/login"
              color="primary"
              key="login"
            >
              <MenuItem>Login</MenuItem>
            </Link>
            <Link
              component={RouterLink}
              to="/register"
              color="primary"
              key="register"
            >
              <MenuItem>Register</MenuItem>
            </Link>
          </div>
        </Drawer>
        <Typography variant="h5" component="h1" className={logo}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
          >
            <img src={AppLogo} style={{ width: 35 }} />
          </IconButton>
          Philosophypster
        </Typography>
      </Toolbar>
    );
  };

  // To display on Desktop with Auth User
  const displayDesktopYesUser = () => {
    return (
      <Toolbar className={toolbar}>
        <Typography variant="h5" component="h1" className={logo}>
          <IconButton component={RouterLink} to="/dashboard">
            <img src={AppLogo} style={{ width: 35 }} />
          </IconButton>
          Philosophypster
        </Typography>
        <div>
          <Button color="primary" className={menuButton} onClick={logout}>
            Logout
          </Button>
        </div>
      </Toolbar>
    );
  };

  // To display on Mobile with Auth User
  const displayMobileYesUser = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon style={{ fill: "#353535" }} />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <Link onClick={logout} color="primary">
              <MenuItem>Logout</MenuItem>
            </Link>
          </div>
        </Drawer>
        <Typography variant="h5" component="h1" className={logo}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
          >
            <img src={AppLogo} style={{ width: 35 }} />
          </IconButton>
          Philosophypster
        </Typography>
      </Toolbar>
    );
  };

  const menuBar = user ? (
    // If User is Active
    <AppBar className={header} position="fixed">
      {mobileView ? displayMobileYesUser() : displayDesktopYesUser()}
    </AppBar>
  ) : (
    // If there is no user
    <AppBar className={header} position="fixed">
      {mobileView ? displayMobileNoUser() : displayDesktopNoUser()}
    </AppBar>
  );

  return menuBar;
}

{
  /*<Menu pointing secondary size="massive" color="teal">
  <Menu.Item name={user.username} active as={Link} to="/" />

  <Menu.Menu position="right">
    <Menu.Item name="logout" onClick={logout} />
  </Menu.Menu>
</Menu>;


<Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="dashboard"
        active={activeItem === "dashboard"}
        onClick={handleItemClick}
        as={Link}
        to="/dashboard"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>*/
}

export default MenuBar;
