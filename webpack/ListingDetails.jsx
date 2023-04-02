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
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
};



// const Recommendations = ({
//   owner,
//   price,
//   billingInterval,
//   maxBillingIntervals,
//   tool,
// }) => {
//   return (
//     <div style={style}>
//       <h2>
//         <p>{tool.name} {owner}</p>
//       </h2>
//       <p>Tool Description: {tool.description}</p>
//       <p>Price & Rate : ${price} {billingInterval}</p>
//       <p>Available For: {maxBillingIntervals} units</p>

//       <a href={`/inbox/${tool.owner_id}`}>
//         <button>Contact Owner</button>
//       </a>
//     </div>
//   );
// };

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
  return (
    <div style={style}>
      <h2>
        <p>{tool.name} {owner}</p>
      </h2>
      <p>Tool Description: {tool.description}</p>
      <p>Price & Rate : ${price} {billingInterval}</p>
      <p>Available For: {maxBillingIntervals} units</p>

      <a href={`/inbox/${tool.owner_id}`}>
        <button>Contact Owner</button>
      </a>
    </div>
  );
};

const ListingDetails = ({ listings }) => {
  return <div>
     <Listing {...listings} />
  </div>;
};



// const RecommendationDetails = ({ recommendations }) => {
//   return <div>
//     {recommendations.map(r => <Recommendations key={r.id} {...r} />)}
//   </div>;
// };

// use ReactDOM.createRoot to render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListingDetails listings={window._listings} />);
//root.render(<ListingDetails listings={[window._listings.listing]} />
