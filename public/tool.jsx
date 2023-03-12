
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
            <h2>{name} {owner}</h2>
            <form action={`/users/${id}/tools/edit`} method="post">
                <label for="description">Description:</label>
                <input type="text" id="description" name="description" value={description} />

                {/* <label for="maker">Owner:</label>
                <input type="text" id="maker" name="maker" value={owner}/> */}
            </form>
                    </div>
	};
})();
