
const User = (function() {
	const style = {
		backgroundColor: "#F1F1F1",
		padding: 5,
		borderRadius: 4,
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
	};

	return ({first_name, last_name, email, id, active, detailed=false}) => {
		if (detailed) {
			return "TODO";
		}
		return <div style={style}>
			<h2>{first_name} {last_name} {id} {active}</h2>
			<p>Email: {email}</p>
			<form action={`/users/${id}/edit`} method="post">
				<label for="first_name">First Name:</label>
				<input type="text" id="first_name" name="first_name" value={first_name} />
				<label for="last_name">Last Name:</label>
				<input type="text" id="last_name" name="last_name" value={last_name} />
				<label for="email">Email:</label>
				<input type="email" id="email" name="email" value={email} />
				<label for="active">Active:</label>
				<input type="checkbox" id="active" name="active" checked={active} />
				<button type="submit">Submit</button>
			</form>
		</div>
	};
})();
