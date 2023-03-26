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
  console.log('tools:', tool)
  return (
    <div>
      <h2>
        <p>{tool.name} {owner}</p>
      </h2>
      <p>Tool Description: {tool.description}</p>
      <p>Price & Rate : ${price} {billingInterval}</p>
      <p>Available For: {maxBillingIntervals} units</p>

      <a href={`/user/me/edit/${id}`}> 
          <button>Edit Listing</button> 
      </a>
    </div >
  );
};

/**
 * Note: button only goes to /me
 */
