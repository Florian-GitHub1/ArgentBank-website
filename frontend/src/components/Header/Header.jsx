import { NavLink, Link } from 'react-router-dom';
import { LockOpen } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../slices/userSlice';
import { selectUserIsConnected, selectUserFirstName } from '../../Store/selectors/selectors';

import logo from '../../assets/argentBankLogo.webp';

import '../Header/Header.scss';
import '../../main.scss';

function Header() {
	const userIsConnected = useSelector(selectUserIsConnected());
	const userFirstName = useSelector(selectUserFirstName());
	const dispatch = useDispatch();

	return (
		<nav className='main-nav'>
			<Link className='main-nav-logo' to='/'>
				<h1 className='main-nav-logo-header'>
					<img src={logo} alt='' />
				</h1>
			</Link>
			<div>
				{userIsConnected ? (
					<>
						<NavLink className='main-nav-item' to='/profile'>
							<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 496 512' fill='#2c3e50'>
								<path
									d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 
									88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 
									98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 
									0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z'
								/>
							</svg>
							<span>{userFirstName}</span>
						</NavLink>
						<NavLink className='main-nav-item' to='/' onClick={() => dispatch(logout())}>
							<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512' fill='#2c3e50'>
								<path
									d='M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 
									0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 
									3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 
									32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z'
								/>
							</svg>
							Sign Out
						</NavLink>
					</>
				) : (
					<>
						<NavLink className='main-nav-item' to='/login'>
							<p>Sign In</p>
						</NavLink>
					</>
				)}
			</div>
		</nav>
	);
}

export default Header;
