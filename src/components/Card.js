import React from 'react';
import './Card.css';

class Card extends React.Component{
	render(){
		return(
			<div className='card bg-light-green dib br3 mr2 pa3 grow tc shadow-5 bw2'>
				<img src={`https://robohash.org/${this.props.id}?set=set2&size=200x200`}  alt='robots' />
				<div>
					<h2> {this.props.name} </h2>
					<p>	{this.props.email} </p>
				</div>
			</div>
		);
	}
}

export default Card