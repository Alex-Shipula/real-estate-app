import { useState } from 'react';
import styles from "./StylesUI.module.css";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from '@mui/material/Avatar';
import menuUp from "../../src/img/icons/menuUp.svg";
import menuDown from "../../src/img/icons/menuDown.svg";


export const InfoPopup = () => {

    const [anchorElPopup, setAnchorElPopup] = useState(null);
    const openPopup = Boolean(anchorElPopup);

    const handleClickPopup = (event) => {
        setAnchorElPopup(event.currentTarget);
    };
    const handleClosePopup = () => {
        setAnchorElPopup(null);
    };

    return (
        <div className={styles.infoPopup}>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Property">
                    <IconButton onClick={handleClickPopup} size="small" sx={{ ml: 2 }}>
                        {openPopup ? <Avatar sx={{ width: 20, height: 20 }}><img src={menuUp}></img></Avatar> :
                            <Avatar sx={{ width: 20, height: 20 }}><img src={menuDown}></img></Avatar>}
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorElPopup}
                open={openPopup}
                onClose={handleClosePopup}
                onClick={handleClosePopup}
                PaperProps={{
                    elevation: 0,
                    sx: {
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
                <div className={styles.textPopupMenu}>

                </div>
            </Menu>
        </div>
    )
}