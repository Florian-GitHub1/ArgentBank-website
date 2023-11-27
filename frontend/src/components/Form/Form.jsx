import './Form.scss';

function Form() {
	return (
		<form>
			<div className='input-wrapper'>
				<label htmlFor='username'>Username</label>
				<input id='username' type='text' />
			</div>
			<div className='input-wrapper'>
				<label htmlFor='password'>Password</label>
				<input id='password' type='password' />
			</div>
			<div className='input-remember'>
				<input id='remember-me' type='checkbox' />
				<label htmlFor='remember-me'>Remember me</label>
			</div>
			<button className='sign-in-button'>Sign In</button>
		</form>
	);
}

export default Form;
