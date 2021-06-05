// import axios from 'axios';
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import { data } from "./data";

class App extends Component {
	state = {
		users: [],
		loading: false,
	};
	async componentDidMount() {
		this.setState({ loading: true });
		// const res = await axios.get('https://api.github.com/users');
		const res = data;
		debugger;
		console.log(res);
		this.setState({ users: res, loading: false });
	}
	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
