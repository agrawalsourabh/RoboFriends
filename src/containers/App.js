import React from 'react'
import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox'
import Scrollbar from '../components/Scrollbar'

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: ""
		};
	}

	onSearchChange = (event) => {
		
		this.setState({searchField: event.target.value});
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json()
			})
			.then((users) => {
				this.setState({robots: users});
			})
	}

	render(){

		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		});
		return (
			<>
				<div className='tc'>
					<h1> Robot Friends </h1>
					< Searchbox searchChange={this.onSearchChange}/>
					<Scrollbar>
						< CardList robots={filteredRobots}/>
					</Scrollbar>
					
				</div>
			</>
		);
	}
}
export default App