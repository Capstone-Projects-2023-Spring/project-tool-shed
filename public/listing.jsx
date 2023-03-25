/**
 * A Listing is an object a user can add to their inventory.
 */
const Listing = ({
  name,
  description,
  id,
  detailed = false,
  owner,
  price,
  billingInterval,
  maxBillingIntervals,
  tools = [],
}) => {
  return (
    <div>
      <h2>
        {name} {owner}
      </h2>
      <p>Description: {description}</p>
      <p>Price & Rate : ${price} {billingInterval}</p>
      <p>Available For: {maxBillingIntervals} units</p>

      {detailed && (
        <div>
          <h3>Tool:</h3>
          {tools.map((tool) => (
            <div key={tool.id}>
              <p>{tool.name}</p>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      )}
    </div >
  );
};
