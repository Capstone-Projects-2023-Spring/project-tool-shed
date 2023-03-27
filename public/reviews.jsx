const Review = (function () {
    const style = {
        backgroundColor: "#F1F1F1",
        padding: 5,
        borderRadius: 4,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
    };

    const warningStyle = {
        color: "red",
        fontWeight: "bold",
        fontSize: "1.2rem",
        padding: "10px",
        backgroundColor: "#FFD1D1",
        border: "2px solid #FF4F4F",
        borderRadius: "4px"
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

        let warning1 = '';
        let warning2 = '';
        if (ratings == 0) {
            warning1 = <p style={warningStyle}>&#128295; &#128295; WARNING &#128295; &#128295; </p>
            warning2 = <p style={warningStyle}> You have received a 0/5 rating and now have an infraction on your account </p>
        }

        return (
            <div style={style}>
                <h2>Reviewer: {email} {reviewer_id}</h2>
                <p>{content}</p>
                <p>ratings: {ratings}/5</p>
                {warning1}
                {warning2}
            </div>
        );
    };
})();
