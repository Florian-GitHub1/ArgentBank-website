import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserFirstName, selectUserLastName, selectUserUserName } from '../../Store/selectors/selectors';
import { triggerUpdateProfile } from '../../slices/userSlice';

import './userEditForm.scss';

function UserEditForm({ setIsEditing }) {
	const dispatch = useDispatch();
	const userUserName = useSelector(selectUserUserName());
	const userFirstName = useSelector(selectUserFirstName());
	const userLastName = useSelector(selectUserLastName());
	const inputUserName = useRef();
	const inputFirstName = useRef();
	const inputLastName = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(triggerUpdateProfile(inputUserName.current.value, inputFirstName.current.value, inputLastName.current.value));
		setIsEditing(false);
	};

	return (
		<form className='profile-form' onSubmit={(e) => handleSubmit(e)}>
			<h1>Edit user info</h1>
			<div className='input-wrapper'>
				<label htmlFor='userName'>Username :</label>
				<input type='text' id='userName' ref={inputUserName} defaultValue={userUserName} />
			</div>
			<div className='input-wrapper'>
				<label htmlFor='firstName'>Firstname :</label>
				<input type='text' id='firstName' ref={inputFirstName} defaultValue={userFirstName} disabled='disabled' />
			</div>
			<div className='input-wrapper'>
				<label htmlFor='lastName'>Lastname :</label>
				<input type='text' id='lastName' ref={inputLastName} defaultValue={userLastName} disabled='disabled' />
			</div>
			<div className='buttons'>
				<button className='button btn-save' type='submit'>
					Save
				</button>
				<button className='button btn-cancel' onClick={() => setIsEditing(false)}>
					Cancel
				</button>
			</div>
		</form>
	);
}

export default UserEditForm;
