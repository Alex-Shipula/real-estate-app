import { useState } from 'react';
import styles from './InfoIcon.module.css';
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import iconInfo from '../../img/icons/infoIcon.svg';

interface InfoIconProps {
    textInfo: string;
}

export const InfoIcon = (props: InfoIconProps): JSX.Element => {

    const [anchorElIcon, setAnchorElIcon] = useState(null);
    const openIcon = Boolean(anchorElIcon);

    const handleClickIcon = (event) => {
        setAnchorElIcon(event.currentTarget);
    };
    const handleCloseIcon = () => {
        setAnchorElIcon(null);
    };

    return (
        <div className={styles.infoIcon}>
            <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                <Tooltip title="Info">
                    <IconButton onClick={handleClickIcon}>
                        <img className={styles.infoIcon} src={iconInfo}></img>
                    </IconButton>
                </Tooltip>
            </Box>

            <Menu
                anchorEl={anchorElIcon}
                open={openIcon}
                onClose={handleCloseIcon}
                onClick={handleCloseIcon}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 10,
                            width: 15,
                            height: 15,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                    style: {
                        width: "35ch",
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}

            > <div className={styles.textInfo}>{props.textInfo}</div></Menu>
        </div>
    )
}