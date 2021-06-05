import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
	render() {
		return (
			<div className="user-wrapper">
				{this.props.users.map((user) => {
					return <UserItem key={user.id} user={user} />;
				})}
			</div>
		);
	}
}

export default Users;
