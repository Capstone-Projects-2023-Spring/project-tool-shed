import React, { useState } from "react";
import Tool from "./tool.jsx";

const Listing = ({
  id = Tool.id,
  name = Tool.name,
  description = Tool.description,
  owner = Tool.owner,
  tool_category_id = Tool.ool_category_id,
  tool_maker_id = Tool.tool_maker_id,
  search = Tool.search,
  owner_id = Tool.owner_id,
  price,
  billingInterval,
  maxBillingIntervals,
}) => {
  const [showAddToolForm, setShowAddToolForm] = useState(false);
  const [tools, setTools] = useState([]);

  const handleAddTool = (event) => {
    event.preventDefault();
    const toolName = event.target.elements.toolName.value;
    const toolDescription = event.target.elements.toolDescription.value;
    const tool = { name: toolName, description: toolDescription };
    setTools([...tools, tool]);
    event.target.reset();
  };

  return (
    <div>
      <h2>
        {name} {owner}
      </h2>
      <p>Description: {description}</p>
      <p>Category ID: {tool_category_id}</p>
      <p>Maker ID: {tool_maker_id}</p>
      <p>Price & Rate : {price} {billingInterval}</p>
      <p>Available Till: {maxBillingIntervals}</p>
      <button onClick={() => setShowAddToolForm(true)}>Add Tool</button>
      {showAddToolForm && (
        <form onSubmit={handleAddTool}>
          <div>
            <label htmlFor="toolName">Tool Name:</label>
            <input type="text" id="toolName" />
          </div>
          <div>
            <label htmlFor="toolDescription">Tool Description:</label>
            <textarea id="toolDescription"></textarea>
          </div>
          <button type="submit">Add</button>
        </form>
      )}
      <div>
        <h3>Tools:</h3>
        {tools.map((tool, index) => (
          <div key={index}>
            <h4>{tool.name}</h4>
            <p>{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
