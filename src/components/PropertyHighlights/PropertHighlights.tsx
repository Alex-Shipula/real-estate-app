
import styles from './PropertyHighlights.module.css';
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { InfoIcon } from '../../UI/InfoIcon/InfoIcon';

interface PropertyHighlightsProps {
    titleProperty?: string;
    constrYear?: number;
    neighborhood?: string;
    squareFeet?: number;
    lotSize?: number;
    totalUnits?: number;
    bedroom?: string;
    bath?: string;
    rented?: string;
    section8?: string;
}
export const PropertyHighlights = ({ ...props }: PropertyHighlightsProps): JSX.Element => {

    return (
        <Box className={styles.wrapperPropertyHighlights}>
            <Paper className={styles.paper}>
                <div className={styles.wrapperContent}>
                    <div className={styles.wrapperTitle}>
                        <div className={styles.title}>Property Highlights</div>
                        <div className={styles.titleRight}>{props.titleProperty}</div>
                    </div>
                    <div className={styles.wrapperProperty}>
                        <div className={styles.content}>
                            <div className={styles.contentWrap}>
                                <div className={styles.contentTitle}>Construction Year</div>
                                <div className={styles.contentValue}>{props.constrYear}</div>
                            </div>
                            <div className={styles.contentWrap}>
                                <div className={styles.contentTitle}>Neighborhood</div>
                                <div className={styles.contentValue}>{props.neighborhood}</div>
                            </div>
                            <div className={styles.contentWrap}>
                                <div className={styles.contentTitle}>Square Feet</div>
                                <div className={styles.contentValue}>{props.squareFeet}</div>
                            </div>
                            <div className={styles.contentWrap}>
                                <div className={styles.contentTitle}>Lot Size</div>
                                <div className={styles.contentValue}>{props.lotSize}</div>
                            </div>
                            <div className={styles.contentWrap}>
                                <div className={styles.contentTitle}>Total Units</div>
                                <div className={styles.contentValue}>{props.totalUnits} Units</div>
                            </div>
                        </div>
                        <div></div>
                        <div className={styles.content}>
                            <div className={styles.contentWrap}>
                                <div className={styles.contentTitle}>Bedroom</div>
                                <div className={styles.contentValue}>{props.bedroom} Beds</div>
                            </div>
                            <div className={styles.contentWrap}>
                                <div className={styles.contentTitle}>Bath</div>
                                <div className={styles.contentValue}>{props.bath} Baths</div>
                            </div>
                            <div className={styles.contentWrap}>
                                <div className={styles.wrapperInfo}>
                                    <div className={styles.contentTitle}>Rented?</div>
                                    <InfoIcon textInfo="When not fully rented, this property may not pay full rent to token holders." />
                                </div>
                                <div className={styles.contentValue}>{props.rented}</div>
                            </div>
                            <div className={styles.contentWrap}>
                                <div className={styles.wrapperInfo}>
                                    <div className={styles.contentTitle}>Section 8?</div>
                                    <InfoIcon textInfo="Section 8 is part of the HUD assisted living and affordable housing program of the U.S. Federal Goverment. For details, visit www.HUD.gov." />
                                </div>
                                <div className={styles.contentValue}>{props.section8}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        </Box>
    )
}