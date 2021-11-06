import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { NotificationProps } from './Notification.props';
import BellBadge from '../BellBadge';

const options = [
  'Payment',
  'Payment',
  'Payment',
  'Payment',
  'Payment',
  'Payment',
  'Payment'
];
const ITEM_HEIGHT = 48;

export default function Notification({...props}:NotificationProps):JSX.Element {
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
          <IconButton onClick={handleClick}>
           <BellBadge call={3} />
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
          style: {
            maxHeight: ITEM_HEIGHT * 10,
            width: '40ch',
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div>Notification</div>
        <div> Mark all as read </div>
        <Divider />
        {options.map((option) => (
          <div>
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
           {option}
            </MenuItem>
         <Divider />
         </div>
          ))}
        </Menu>
    </React.Fragment>
  );
}