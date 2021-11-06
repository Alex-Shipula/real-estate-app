import { sliderUnstyledClasses } from '@mui/core';
import React from 'react';
import { Header } from '../../components/Header/Header';
import styles from './HomePage.module.css';

function HomePage(): JSX.Element {
	return (
		<>
		<Header />
			<h1 className={styles.pageTitle}>HomePage</h1>
		</>
	);
}
export default HomePage