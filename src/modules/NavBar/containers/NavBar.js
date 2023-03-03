import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DrawerComponent, Links } from '../components';
import { Icons } from '../../../assets';
const NavBar = () => {
  const [drawerState, setDrawerState] = useState(false);
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.up('md'));
  const onCloseDrawerHandler = () => {
    setDrawerState(false);
  };

  const onOpenDrawerHandler = () => {
    setDrawerState(true);
  };

  return (
    <AppBar sx={{ backgroundColor: 'transparent' }} elevation={0}>
      <Container>
        <Box
          sx={{
            height: '80px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <IconButton children={<img src={Icons.basketballIcon} />} href="/" />
          {mediaQuery ? (
            <Links />
          ) : (
            <IconButton
              children={<img src={Icons.burgerIcon} />}
              onClick={() => onOpenDrawerHandler()}
            />
          )}

          <DrawerComponent
            isOpen={drawerState}
            onClose={onCloseDrawerHandler}
          />
        </Box>
      </Container>
    </AppBar>
  );
};
export default NavBar;
