import React from "react";
import renderComponent from './util/renderComponent';

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

const Review = ({
    reviewer_id,
    content,
    ratings
}) => {
    let warning1 = '';
    let warning2 = '';
    if(ratings == 0){
        warning1 = <p style={warningStyle}>&#128295; &#128295; WARNING &#128295; &#128295; </p>
        warning2 = <p style={warningStyle}> You have received a 0/5 rating and now have an infraction on your account </p>
    }

    return <div style={style}>
        <h2>{reviewer_id}</h2>
        <p>{content}</p>
        <p>Ratings: {ratings}/5</p>
        {warning1}
        {warning2}
    </div>

};

const ReviewList = ({reviews}) => {
	return <div>
		{reviews.map(r => <Review key={r.id} {...r} />)}
	</div>
};

renderComponent('#root', <ReviewList reviews={window._reviews} />)


