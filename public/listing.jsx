import React from "react";
import Tool from "./tool.jsx";

/**
 * A tool listing represents a physical tool that is mapped to be viewed by the public.
 * It contains information such as the tool, name, description, owner ID, category ID,
 * and maker ID
 */
const Listing = (function () {
    const style = {
        backgroundColor: "#F1F1F1",
        padding: 5,
        borderRadius: 4,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
    };

    /**
    * Creates a new Listing component with the given name, description, id, etc.
    */
    return ({ 
        id=Tool.id,
        name=Tool.name,
        description=Tool.description,
        owner=Tool.owner,
        tool_category_id=Tool.ool_category_id,
        tool_maker_id=Tool.tool_maker_id,
        search=Tool.search,
        owner_id=Tool.owner_id,
        price,
        billingInterval,
        maxBillingIntervals
    })=> {

    return <div style={style}>
        <h2>{name} {owner}</h2>
        <p>Description: {description}</p>
        <p>Category ID: {tool_category_id}</p>
        <p>Maker ID: {tool_maker_id}</p>
        <p>Price & Rate : {price} {billingInterval}</p>
        <p>Available Till: {maxBillingIntervals}</p>
    </div>
    };
})();
