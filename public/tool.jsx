
const Tool = (function() {
	const style = {
		backgroundColor: "#F1F1F1",
		padding: 5,
		borderRadius: 4,
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
	};

	return ({name, description, id, detailed=false, owner}) => {
		if (detailed) {
			return "TODO";
		}

        // Only display tools owned by the specific user
        if (owner && owner !== id) {
            return null;
        }

		return <div style={style}>
			<h2>{name} {description} {id} {owner}</h2>
			<p>Price: {price}</p>
			<form action="/users/:user_id/tools/edit" method="post">
            <label for="tool_name">Tool:</label>
            <input type="text" id="tool_name" name="tool_name" value={ name }/>
            <label for="description">Tool Description:</label>
            <input type="text" id="tool_type" name="tool_type" value={ type }/>
            <label for="owner">User ID:</label>
            <input type="text" id="user_id" name="user_id" value={ owner }/>

{/* 
        <label for="tool_img">Price:</label>
        <input type="image" id="tool_img" name="tool_img value="{{ tools.tool_img }}">
 */}

			</form>
		</div>
	};
})();
