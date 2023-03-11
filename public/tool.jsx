
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
            <form action="/users/{id}/tools/edit" method="post">
                <label for="description">Description:</label>
                <input type="text" id="description" name="description"/>

                <label for="category">Category:</label>
                <input type="text" id="category" name="category"/>

                <label for="maker">Maker:</label>
                <input type="text" id="maker" name="maker"/>
            </form>
                    </div>
	};
})();
