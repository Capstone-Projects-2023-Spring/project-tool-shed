import React from "react";
import Listing from "./listing.jsx";

const MyListings = ({ listings }) => {
  return (
    <div>
      <h2>My Listings</h2>
      {listings.map((listing) => (
        <Listing key={listing.id} {...listing} />
      ))}
    </div>
  );
};

export default MyListings;
