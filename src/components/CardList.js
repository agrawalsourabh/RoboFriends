import React from 'react';
import Card from './Card'


const CardList = (props) => {

	const cardArray = props.robots.map((user, i) => {
		return <Card key={props.robots[i].id} id={props.robots[i].id} name={props.robots[i].name}  email={props.robots[i].email}/>
	});
	return (
		<>
			{cardArray}
		</>
	);
}
export default CardList;