import { Tool } from './public/tool.jsx';


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
      <p>Price & Rate : {price} {billingInterval}</p>
      <p>Available Till: {maxBillingIntervals}</p>

      <div>
        <h3>Tools:</h3>
        {tools.map((tool) => (
          <Tool key={tool.id} {...tool} />
        ))}
      </div>
    </div >
  );
};

export { Listing };
