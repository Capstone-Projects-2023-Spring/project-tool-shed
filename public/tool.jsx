
const Tool = (function () {
    const style = {
        backgroundColor: "#F1F1F1",
        padding: 5,
        borderRadius: 4,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
    };

    return ({ name, description, id, detailed = false, owner }) => {
        if (detailed) {
            return "TODO";
        }

        // Only display tools owned by the specific user
        // if (owner && owner !== id) {
        //     return null;
        // }

        return <div style={style}>
            <h2>{id} {name} {description} {owner}</h2>
            <form action="/users/{owner}/tools/edit" method="post">
                <label for="tool_name">Tool:</label>
                <input type="text" id="tool_name" name="tool_name" value={ name }/>
                <label for="description">Description of Tool:</label>
                <input type="text" id="description" name="description" value={ description }/>
            </form>
        </div>
	};
})();
