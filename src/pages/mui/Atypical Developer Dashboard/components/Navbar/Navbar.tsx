import React, {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Box, Button,
    ClickAwayListener,
    Divider,
    Drawer, Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, SwipeableDrawer,
    Toolbar
} from "@mui/material";
import {navbarStyles} from "./styles";
import {mainNavbarItems} from "./items";

const Navbar: FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)


    return (
        <Grid item xs={4}>
            <Button onClick={() => setIsOpen(true)}>жми</Button>

            {/*закомментировать variant чтобы сделать выдвигающимся*/}
            <Drawer
                sx={navbarStyles.drawer}

                variant="permanent"
                anchor="left"
                open={isOpen}
                onClose={() => setIsOpen(false)}>

                <Toolbar/>
                <Divider sx={{backgroundColor: "red"}}/>
                <List>
                    {mainNavbarItems.map((item, index) => (
                        <ListItem
                            button
                            key={item.id}
                            onClick={() => navigate(item.route)}
                        >
                            <ListItemIcon
                                sx={navbarStyles.icons}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                sx={navbarStyles.text}
                                primary={item.label}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Grid>
    );
}

export default Navbar;