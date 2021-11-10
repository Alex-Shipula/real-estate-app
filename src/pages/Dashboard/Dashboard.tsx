import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
//import styles from './Dashboard.module.css';

function Dashboard(): JSX.Element {
	return (
		<>
		<Header /> 
			<h1>Dashboard</h1>
			<Footer />
		</>
	);
}
export default Dashboard