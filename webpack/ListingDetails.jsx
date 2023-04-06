import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

/**
 * A Listing object on this page represents a listing a user is interested in seeing details for
 * 
 */

const style = {
  backgroundColor: "#F1F1F1",
  padding: 5,
  borderRadius: 4,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  button: {
    background: "#1e90ff",
    color: "#fff",
    fontSize: "1.2em",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    textDecoration: "none",
    cursor: "pointer"
  }
};

/*
     * Creates a new Listing component with the given information
     */

const Listing = ({
  owner,
  price,
  billingInterval,
  maxBillingIntervals,
  tool,
}) => {
	const s = tool.name + " " + tool.description;
    if(tool.video == 'https://www.youtube.com/'){
        tool.video = `https://www.youtube.com/results?search_query=${encodeURIComponent(s)}`
    }
    const realLink = tool.video;
    const videoId = getVideoId(realLink);

    return (
      <div style={style}>
        <h2 style={{ fontWeight: "bold" }}>
          <p>
            {tool.name} {owner}
          </p>
        </h2>
        <p>Tool Description: {tool.description}</p>
        <p>Price & Rate : ${price} {billingInterval}</p>
        <p>Available For: {maxBillingIntervals} units</p>
        <div>
          {videoId ? (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <a href={realLink}target="_blank" rel="noopener noreferrer">
            <button style={style.button}>Recommended Videos</button>
          </a>
          
          )}
        </div>
        <a href={`/inbox/${tool.owner_id}`}>
          <button style={{fontWeight: "bold", color: "white", backgroundColor: "#0077ff", padding: "10px 15px", borderRadius: "4px", border: "none", cursor: "pointer"}}>Contact Owner</button>
        </a>
      </div>
    );
  };

function getVideoId(videoUrl) {
  const regex = /(?:\/|v=)([\w-]{11})(?:\?|&|$)/;
  const match = videoUrl.match(regex);
  return match ? match[1] : null;
}

const ListingDetails = ({ listings }) => {
  return <div>
    <Listing {...listings} />
  </div>;
};

// use ReactDOM.createRoot to render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListingDetails listings={window._listings} />);
