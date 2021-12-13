import { useState } from 'react';
import styles from "./StylesUI.module.css";
import { makeStyles } from '@mui/styles';
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from '@mui/material/Avatar';
import menuUp from "../../src/img/icons/menuUp.svg";
import menuDown from "../../src/img/icons/menuDown.svg";
import { InfoProps } from './TypesUI.props';

const useStyles = makeStyles({
    root: {
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
    },

});

export const InfoPopup = ({ ...props }: InfoProps): JSX.Element => {

    const classes = useStyles();

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
                className={classes.root}
                anchorEl={anchorElPopup}
                open={openPopup}
                onClose={handleClosePopup}
                onClick={handleClosePopup}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <div className={styles.textPopupMenu}>
                    {props.assetPrice ? <div className={styles.textPopupMenuWrapper}>
                        <div className={styles.textPopupMenuTitle}>Underlying Asset Price</div>
                        <div className={styles.textPopupMenuValue}>{props.assetPrice} $</div>
                    </div> : <div></div>}
                    {props.listingFee ? <div className={styles.textPopupMenuWrapper}>
                        <div className={styles.textPopupMenuTitle}>RealT Listing Fee (10%)</div>
                        <div className={styles.textPopupMenuValue}>{props.listingFee} $</div>
                    </div> : <div></div>}
                    {props.initialMain ? <div className={styles.textPopupMenuWrapper}>
                        <div className={styles.textPopupMenuTitle}>Initial Maintenance Reserve</div>
                        <div className={styles.textPopupMenuValue}>{props.initialMain} $</div>
                    </div> : <div></div>}
                    {props.initialRenov ? <div className={styles.textPopupMenuWrapper}>
                        <div className={styles.textPopupMenuTitle}>Initial Renovation Reserve</div>
                        <div className={styles.textPopupMenuValue}>{props.initialRenov} $</div>
                    </div> : <div></div>}
                    {props.propertyManag ? <div className={styles.textPopupMenuWrapper}>
                        <div className={styles.textPopupMenuTitle}>Property Management (8.00%)</div>
                        <div className={styles.textPopupMenuValue}>{props.propertyManag} $</div>
                    </div> : <div></div>}
                    {props.realtPlatf ? <div className={styles.textPopupMenuWrapper}>
                        <div className={styles.textPopupMenuTitle}>RealT Platform (2.00%)</div>
                        <div className={styles.textPopupMenuValue}>{props.realtPlatf} $</div>
                    </div> : <div></div>}
                    {props.maintenance ? <div className={styles.textPopupMenuWrapper}>
                        <div className={styles.textPopupMenuTitle}>Maintenance Expenses</div>
                        <div className={styles.textPopupMenuValue}>{props.maintenance} $</div>
                    </div> : <div></div>}
                    {props.propertyTaxes ? <div className={styles.textPopupMenuWrapper}>
                        <div className={styles.textPopupMenuTitle}>Property Taxes</div>
                        <div className={styles.textPopupMenuValue}>{props.propertyTaxes} $</div>
                    </div> : <div></div>}
                    {props.incurance ? <div className={styles.textPopupMenuWrapper}>
                        <div className={styles.textPopupMenuTitle}>Insurance</div>
                        <div className={styles.textPopupMenuValue}>{props.incurance} $</div>
                    </div> : <div></div>}
                    {props.utilities ? <div className={styles.textPopupMenuWrapper}>
                        <div className={styles.textPopupMenuTitle}>Utilities</div>
                        <div className={styles.textPopupMenuValue}>{props.utilities}</div>
                    </div> : <div></div>}
                </div>
            </Menu >
        </div>
    )
}