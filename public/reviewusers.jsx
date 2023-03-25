const User = (function() {
	const {useState} = React;
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

	return ({first_name, last_name, email: _email, id, active: _active, detailed=false}) => {
		if (detailed) {
			return "TODO";
		}

		const [firstName, setFirstName] = useState(first_name);
		const [lastName, setLastName] = useState(last_name);
		const [email, setEmail] = useState(_email);
		const [active, setActive] = useState(_active);
		return <div style={style}>
			<h2>{firstName} {lastName} {active}</h2>
			<p>Email: {email}</p>
            <a href={`/review/new/${id}`}>
                <button>Review User</button>
            </a>
		</div>
	};
})();