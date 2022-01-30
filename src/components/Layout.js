import {
  AddCircleOutlineOutlined,
  SubjectOutlined,
} from "@mui/icons-material";
import {  Drawer, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useHistory, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Avatar from '@mui/material/Avatar';

import { makeStyles } from "@mui/styles";
const drawerWidth = 240;

const useStyles = makeStyles({
  active: {
    background: "#f4f4f4",
  },
});

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <>   
    <AppBar position="static" sx={{ background: "#f4f4f4", paddingLeft:"230px" }} elevation={0}>
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, color: "#1C6DD0" }}
      >
        Satwinder Notes
      </Typography>
     <Avatar sx={{bgcolor:'#1C6DD0'}}>SS</Avatar>
    </Toolbar>
  </AppBar>
    
      // drawer
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                className={
                  location.pathname === item.path ? classes.active : null
                }
                button
                key={item.text}
                onClick={() => history.push(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        {children}
      </Box>
    </>
  );
};

export default Layout;
