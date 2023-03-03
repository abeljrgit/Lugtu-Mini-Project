import { SwipeableDrawer, Drawer, List, ListItemButton } from '@mui/material';
import React, { useState } from 'react';

export const DrawerComponent = (props) => {
  // const [drawerState, setDrawerState] = useState(true);

  const listItemButtonStyle = { fontFamily: 'Poppins' };
  return (
    <Drawer open={props.isOpen} onClose={props.onClose} anchor="right">
      <List>
        <ListItemButton sx={listItemButtonStyle} href="/">
          Dashboard
        </ListItemButton>
        <ListItemButton sx={listItemButtonStyle} href="/player">
          Popular Player
        </ListItemButton>
        <ListItemButton sx={listItemButtonStyle} href="/contact-us">
          Contact Us
        </ListItemButton>
        <ListItemButton sx={listItemButtonStyle} href="/about-us">
          About Us
        </ListItemButton>
        <ListItemButton sx={listItemButtonStyle} href="/score">
          Score
        </ListItemButton>
      </List>
    </Drawer>
  );
};
