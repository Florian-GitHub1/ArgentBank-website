import { useSelector } from 'react-redux';
import { selectUserFirstName, selectUserLastName } from '../../Store/selectors/selectors.js';
import { useState } from 'react';

import Account from '../../components/Account/Account.jsx';
import AccountCardData from '../../DataAccounts/AccountData.json';
import UserInfos from '../../components/userInfos/userInfos.jsx';
import UserEditForm from '../../components/userEditForm/userEditForm.jsx';

import './Profile.scss';

function Profile() {
	const userFirstName = useSelector(selectUserFirstName());
	const userLastName = useSelector(selectUserLastName());
	const [isEditing, setIsEditing] = useState(false);

	const displayEditForm = (e) => {
		e.preventDefault();
		setIsEditing(!isEditing);
	};
	return (
		<main className='main bg-dark'>
			<div className='header'>
				{!isEditing ? (
					<>
						<UserInfos firstName={userFirstName} lastName={userLastName} />
						<button className='edit-button' onClick={(e) => displayEditForm(e)}>
							Edit Name
						</button>
					</>
				) : (
					<>
						<UserEditForm setIsEditing={setIsEditing} />
					</>
				)}
			</div>
			{AccountCardData.map((data) => (
				<Account key={data.id} title={data.title} amount={data.amount} description={data.description} />
			))}
		</main>
	);
}

export default Profile;
