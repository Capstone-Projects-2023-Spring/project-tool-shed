import React from 'react';
import User from './components/User';
import renderComponent from './util/renderComponent';

const UsersList = ({users}) => {
	return (
		<div>
			{users.map(u => <User key={u.id} {...u} />)}
		</div>
	);
};

renderComponent('#root', <UsersList {...window._UsersListProps} />);

 

