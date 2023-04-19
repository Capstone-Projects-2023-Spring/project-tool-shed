import React from 'react';

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

const Review = ({ email, reviewee_id, content, ratings, detailed = false }) => {
        if (detailed) {
            return "TODO";
        }

        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= ratings) {
              stars.push(<img key={i} src="/public/FilledStar.png" alt="Star filled"  style={{display: 'inline-block', width: '1em'}}/>);
            } else {
              stars.push(<img key={i} src="/public/EmptyStar.png" alt="Star empty"  style={{display: 'inline-block', width: '1em'}}/>);
            }
        }

        return (
            <div style={style}>
                <h2>Reviewer: {email} {reviewee_id}</h2>
                <p>{content}</p>
                <p>Rating: {stars}</p>
		{ratings === 0 && <p style={warningStyle}>&#128295; &#128295; WARNING &#128295; &#128295;</p>}
		{ratings === 0 && <p style={warningStyle}>You have received a 0/5 rating and now have an infraction on your account</p>}
            </div>
        );
};

export default Review;
