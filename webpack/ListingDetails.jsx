import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F1F1F1",
    padding: 10,
    borderRadius: 4,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    width: "50%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
  },
  button: {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#0077ff",
    padding: "10px 15px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 5,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  videoContainer: {
    marginTop: 20,
  },
};

const Listing = ({
  owner,
  price,
  billingInterval,
  maxBillingIntervals,
  tool,
}) => {
  const s = tool.name + " " + tool.description;
  if (tool.video === 'https://www.youtube.com/') {
    tool.video = `https://www.youtube.com/results?search_query=${encodeURIComponent(s)}`;
  }
  const realLink = tool.video;
  const videoId = getVideoId(realLink);

  return (
    <div style={style.container}>
      <div style={style.header}>
        <h2 style={style.title}>
          {tool.name}
        </h2>
        <a href={`/inbox/${tool.owner_id}`}>
          <button style={style.button}>Contact Owner</button>
        </a>
      </div>
      <div>
        <p style={style.subtitle}>
          {tool.description}
        </p>
        <p style={style.info}>
          Price & Rate: ${price} {billingInterval}
        </p>
        <p style={style.info}>
          Available For: {maxBillingIntervals} units
        </p>
      </div>
      {videoId && (
        <div style={style.videoContainer}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListingDetails listings={window._listings} />);
