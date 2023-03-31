import React from 'react';
import ReactDOM from 'react-dom';

const style = {
  backgroundColor: "#F1F1F1",
  padding: 5,
  borderRadius: 4,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
};

const Listing = ({
  owner,
  price,
  billingInterval,
  maxBillingIntervals,
  tool,
}) => {
  return <div style={style}>
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
};

const ListingList = ({ listings }) => {
  return <div>
    {listings.map(l => <Listing key={l.id} {...l} />)}
  </div>;
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<ListingList listings={window._listings} />
);

// ReactDOM.render(
//   <ListingDisplay listing={listing} />,
//   document.getElementById('root')
// );
