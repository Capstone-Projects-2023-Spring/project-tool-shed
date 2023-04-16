import React from 'react';
import renderComponent from './util/renderComponent';

/**
 * A Listing is an object a user can add to their inventory.
 */
const Listing = ({
  name,
  description,
  id,
  owner,
  price,
  billingInterval,
  maxBillingIntervals,
  tool,
}) => {
  return (
    <div>
      <h2>
        <p>{tool.name} {owner}</p>
      </h2>
      <p>Tool Description: {tool.description}</p>
      <p>Price & Rate : ${price} {billingInterval}</p>
      <p>Available For: {maxBillingIntervals} units</p>

      <a href={`/listing/${id}/edit`}> 
          <button>Edit Listing</button> 
      </a>
    </div >
  );
};

const ListingsList = ({ listings }) => {
	return (
		<div>
			{listings.map(l => <Listing key={l.id} {...l} />)}
		</div>
	);
};

/**
 * Note: button only goes to /me
 */

renderComponent("#root", <ListingsList {...window._ListingsListProps} />);
