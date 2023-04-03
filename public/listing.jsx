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
      <h2 style={{ fontWeight: "bold" }}>
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

/**
 * Note: button only goes to /me
 */
