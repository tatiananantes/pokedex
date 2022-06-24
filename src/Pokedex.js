import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {
	render(){
		let title;
		if (this.props.isWinner) {
			title = <h3 className='font-bold text-green-800 text-center'>You Win!</h3>
		} else {
			title  = <h3 className='font-bold text-red-800 text-center'>You Loose!</h3>
		}
		return(
		
			<div className='Pokedex'>
					<h1 className="text-4xl m-10 text-center text-pink-500 font-sans Roboto font-bold"> POKEDEX </h1>
					<div className='ml-50 border'>
						{title}
						<p className='text-center text-gray-800 font-light '> Total Experience: {this.props.exp}</p>
					</div>
					<div className='center'>
						{this.props.pokemon.map((p)=> (
							<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
						))}
					</div>
			</div>
		)
	}
}

export default Pokedex;