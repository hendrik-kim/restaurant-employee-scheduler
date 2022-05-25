import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

function Header() {
	return (
		<div className='header'>
			<div className='wrap'>
				<h1>Logo</h1>
				<div className='nav'>
					<ul>
						<li>menu1</li>
						<li>menu2</li>
						<li>menu3</li>
					</ul>
				</div>
				<DensityMediumIcon />
			</div>
		</div>
	);
}

export default Header;
