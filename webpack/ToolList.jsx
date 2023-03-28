import React from "react";
import ReactDOM from "react-dom";
/**
 * A tool object represents a physical tool that a user can add to their inventory.
 * It contains information such as the tool's name, description, owner ID, category ID,
 * maker ID, and a search vector for fulltext search purposes.
 */
const style = {
        backgroundColor: "#F1F1F1",
        padding: 5,
        borderRadius: 4,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
};

    /**
     * Creates a new Tool component with the given name, description, id, detailed flag, owner,
     * search vector, owner ID, category ID, and maker ID. If the detailed flag is set to true, 
     * a more detailed view of the tool is shown.
     */
const Tool = ({ 
        name, 
        description, 
        id, 
        detailed = false, 
        owner,
        searchVector,
        owner_id,
        tool_category_id,
        tool_maker_id
    }) => {
        if (detailed) {
            return "TODO";
        }

	const s = name + " " + description;

        return <div style={style}>
            <h2>{name} {owner}</h2>
            <p>Description: {description}</p>
            <p>Category ID: {tool_category_id}</p>
            <p>Maker ID: {tool_maker_id}</p>
        
            <a href={`/tool/edit/${id}`}>
                <button>Edit Tool</button>
            </a>

            <a href={`/tool/delete/${id}`}>
                <button>Delete Tool</button>
            </a>
	    <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(s)}`}><button>View on Youtube</button></a>
        </div>
};

const ToolList = ({tools}) => {
	return <div>
		{tools.map(t => <Tool key={t.id} {...t} />)}
	</div>
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<ToolList tools={window._tools} />
);