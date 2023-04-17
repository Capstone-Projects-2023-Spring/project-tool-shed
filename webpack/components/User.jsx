import React, {useState} from 'react';

const User = (function() {
	const style = {
		backgroundColor: "#F1F1F1",
		padding: 5,
		borderRadius: 4,
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
	};

	const FormInput = ({type='text', name, label: l, value, setter}) => {
		const ps = {
			type, id: name, name
		};
		if (type === 'checkbox') {
			ps.checked = value;
		} else {
			ps.value = value;
		}
		return <React.Fragment>
			<label for={name}>{l}</label>
			<input type={type} value={value} id={name} name={name} />
		</React.Fragment>;
	};

	return ({isEditable, first_name, last_name, email: _email, id, active: _active, detailed=false}) => {
		if (detailed) {
			return "TODO";
		}

		const [firstName, setFirstName] = useState(first_name);
		const [lastName, setLastName] = useState(last_name);
		const [email, setEmail] = useState(_email);
		const [active, setActive] = useState(_active);
		return <div style={style}>
			<h2>{firstName} {lastName} {id} {active}</h2>
			<p>Email: {email}</p>
			<a href={`/inbox/${id}`}>Send Message</a>
			<a href={`/review/new/${id}`}>Review User</a>
			{isEditable && 
			<form action="/users/edit" method="post" style={{display: 'flex', flexFlow: 'column nowrap'}}>
				<FormInput name='first_name' label="First Name:" value={firstName} setter={setFirstName} />
				<FormInput name='last_name' label="Last Name:" value={lastName} setter={setLastName} />
				<FormInput name='email' label="Email:" value={email} setter={setEmail} />
				<FormInput name='active' label='Active:' value={active} setter={setActive} />
				<button type="submit">Submit</button>
			</form>}
		</div>
	};
})();

export default User;
