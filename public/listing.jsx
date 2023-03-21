import React from "react";
import Tool from "./Tool";

/**
 * A tool listing represents a physical tool that is mapped to be viewed by the public.
 * It contains information such as the tool, name, description, owner ID, category ID,
 * and maker ID
 */
const style = {
    backgroundColor: "#F1F1F1",
    padding: 5,
    borderRadius: 4,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
};

const Listing = ({ tools }) => {

/**
 * Creates a new Listing component with the given name, description, id, etc.
*/
  return (
    <div>
      {tools.map((tool) => (
        <><Listing
            key={tool.id}
            name={tool.name}
            description={tool.description}
            id={tool.id}
            owner={tool.owner}
            tool_category_id={tool.tool_category_id}
            tool_maker_id={tool.tool_maker_id}
            searchVector={tool.searchVector}
            owner_id={tool.owner_id}
            price // The amount the listing costs per `billingInterval`
            billingInterval // The interval at which you're going to pay `price`
            maxBillingIntervals // The maximum number of billing intervals the tool is available for
        />

        <div style={style}>
            <h2>{tool.name} {tool.owner}</h2>
            <p>Description: {tool.description}</p>
            <p>Category ID: {tool.tool_category_id}</p>
            <p>Maker ID: {tool.tool_maker_id}</p>
            <p>Price & Rate : {price} {billingInterval}</p>
            <p>Available Till: {maxBillingIntervals}</p>
        </div></>
      ))}
    </div>
  );
};
