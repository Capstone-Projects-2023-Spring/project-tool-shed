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
        category,
        maker,
        video
    }) => {
	const s = name + " " + description;
    if(video == 'https://www.youtube.com/'){
        video = `https://www.youtube.com/results?search_query=${encodeURIComponent(s)}`
    }
    const realLink = video;


	const onDelete = () => {
		if (confirm(`Are you sure you want to delete ${name}?`)) { // TODO: something else
			fetch(`/api/tools/${id}`, {
				method: "DELETE"
			}).then(() => {
				window.location.reload();
			});
		} 
	}

        return <div style={style}>
            <h2>{name}</h2>
	    {maker && <h3>Maker: {maker.name}</h3>}
	    {category && <h3>Category: {category.name}</h3>}
            <p>{description}</p>
        
            <a href={`/tools/${id}/edit`}>
                <button>Edit Tool</button>
            </a>

            <a onClick={onDelete}>
                <button>Delete Tool</button>
            </a>

        <a href={realLink}target="_blank" rel="noopener noreferrer" ><button>Youtube Video</button></a>
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