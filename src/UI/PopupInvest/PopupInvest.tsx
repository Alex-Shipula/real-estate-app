import { useState } from 'react';
import styles from './PopupInvest.module.css';
import Web3 from 'web3';
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import investNow from '../../img/buttons/buttonInvestNow.svg';
import cancelButton from '../../img/buttons/cancelButton.svg';
import continueButton from '../../img/buttons/continueButton.svg';


const TEST_PURSE = "0x522E733dED01C4fE514420Fdfc1da6f69C2D896D";


function isMetaMaskInstalled(): boolean {
    return Boolean(window.ethereum.isMetaMask)
}

async function tokenPurchasePurse(valueEth) {
    if (isMetaMaskInstalled() === true) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(Web3.givenProvider);
            const gas = await web3.eth.estimateGas({ to: TEST_PURSE });
            const result = await web3.eth.sendTransaction(
                {
                    gas,
                    to: TEST_PURSE,
                    from: accounts[0],
                    value: valueEth
                }
            );
            return result;
        } catch {
            console.error('Error token purchase operation');
        }
    }
}


export const PopupInvest = ({ ...props }): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();
    const [amount, setAmount] = useState({ value: '' });

    const handleChangeAmount = (prop) => (event) => {
        setAmount({ ...amount, [prop]: event.target.value });
    };

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const handleCancel = () => {
        setAmount({ value: '' });
    };
    const handleClose = () => {
        setOpen(false)
    };

    const dollarCourse = 0.00023;
    const priceWEI = String(Number(amount.value) * dollarCourse * 1000000000000000000);

    const handlerTokenPurchase = () => {
        if (Number(priceWEI) > 0) {
            try {
                tokenPurchasePurse(priceWEI).then(res => { props.setTransactionHash(res.transactionHash) });
                props.setAmountInvest(amount.value);
            } catch {
                console.error('Error Token Purchase');
            }
        }
    };

    return (
        <Box className={styles.wrapperPopper}>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper className={styles.paper}>
                            <div className={styles.wrapperContent}>
                                <div className={styles.wrapperTop}>
                                    <div className={styles.title}>Invest</div>
                                    <CloseIcon className={styles.close} onClick={handleClose} />
                                </div>
                                <div className={styles.titleRoad}>{props.neighborhood}</div>
                                <div className={styles.address}>
                                    {props.address}
                                </div>
                                <div className={styles.titleHowMach}>
                                    How much money do you want to invest?
                                </div>
                                <div className={styles.wrapperAmount}>
                                    <div className={styles.titleAmount}>Amount of money</div>
                                    <div className={styles.formAmount}>
                                        <FormControl sx={{ m: 1, width: "49ch" }} variant="outlined">
                                            <OutlinedInput
                                                type='number'
                                                value={amount.value}
                                                onChange={handleChangeAmount('value')}
                                                placeholder="enter amount of money"
                                                inputProps={{
                                                    'aria-label': 'value',
                                                }}
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                                <div className={styles.wrapperButtons}>
                                    <img className={styles.cancelButton} src={cancelButton} onClick={handleCancel}></img>
                                    <img className={styles.continueButton} src={continueButton} onClick={handlerTokenPurchase}></img>
                                </div>
                            </div>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <img className={styles.buttonInvest} src={investNow} onClick={handleClick('bottom-end')}>
            </img>
        </Box>
    )
}