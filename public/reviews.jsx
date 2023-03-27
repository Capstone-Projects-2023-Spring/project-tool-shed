const Review = (function () {
    const style = {
        backgroundColor: "#F1F1F1",
        padding: 5,
        borderRadius: 4,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
    };

    return ({ 
        email,
        reviewer_id,
        content,
        ratings,
        detailed = false, 

    }) => {
        if (detailed) {
            return "TODO";
        }

        return <div style={style}>
            <h2>Reviewer: {email} {reviewer_id}</h2>
            <p>{content}</p>
            <p>ratings: {ratings}/5</p>
        </div>
    };
})();