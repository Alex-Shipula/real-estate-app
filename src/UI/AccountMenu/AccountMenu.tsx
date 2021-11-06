import * as React from 'react';
import { AccountMenuProps } from './AccountMenu.props';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import myAccount from "../../img/icons/myAccount.svg";
import menuVerification from "../../img/icons/menuVerification.svg";
import logOut from "../../img/icons/logOut.svg";
import menuUp from "../../img/icons/menuUp.svg";
import menuDown from "../../img/icons/menuDown.svg";


export default function AccountMenu({...props}:AccountMenuProps):JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState(null); 
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
      { open ? <Avatar sx={{ width: 20, height: 20 }}><img src={menuUp}></img></Avatar> :
            <Avatar sx={{ width: 20, height: 20 }}><img src={menuDown}></img></Avatar>}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       <MenuItem>
          <ListItemIcon>
          <img src={myAccount}></img>
          </ListItemIcon>
          My account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <img src={menuVerification}></img>
          </ListItemIcon>
          ID Verification
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <img src={logOut}></img>
          </ListItemIcon>
          Log Out
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
