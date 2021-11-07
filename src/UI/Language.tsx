import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Language():JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [lang, setLang] = React.useState("EN");
 
  const open = Boolean(anchorEl);
  const handleClickEN = () => {
    setLang("EN");
  };
  const handleClickRU = () => {
    setLang("RU");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Language">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              {open ? <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}><div>{lang}</div><Box sx={{ width: 20, height: 20 }}><ExpandLessIcon /></Box></Box>
              : <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}><div>{lang}</div><Box sx={{ width: 20, height: 20 }}><ExpandMoreIcon /></Box></Box>}
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
        <MenuItem onClick={handleClickEN}>
          ENG
        </MenuItem>
        <MenuItem onClick={handleClickRU}>
          RUS
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
