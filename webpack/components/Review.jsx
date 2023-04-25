import React from 'react';

const styleFlex = {
  display: "flex",
  alignItems: "center"
};

const style = {
  alignItems: "center",
  backgroundColor: "#F1F1F1",
  padding: 5,
  borderRadius: 4,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  marginBottom: 50
};

const warningStyle = {
  color: "#FF4F4F",
  fontWeight: "bold",
  padding: "10px",
  backgroundColor: "#FFD1D1",
  border: "2px solid #FF4F4F",
  borderRadius: "4px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  textAlign: "center",
  lineHeight: "1.5"
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
            <p>{stars}</p>
              <div style={styleFlex}>
		            {ratings === 1 && <p style={warningStyle}>&#128295; &#128295; WARNING &#128295; &#128295;  You have received a 1/5 rating and now have an infraction on your account due to possible misconduct</p>}
              </div>
          </div>
        );
};

export default Review;
