import React, { Component } from 'react';
// const POKE_API = 
// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const POKE_API = 
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)

class Pokecard extends Component {
	render() {
		let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
		return (
			<div className='Pokecard inline-flex font-mono align-center'>
				<div className=" p-10 m-10 bg-gray-100 rounded-lg shadow-md shadow-pink-200">

					<h2 className='text-md font-large font-bold text-pink-600 text-center'>{this.props.name}</h2>
					
						<img src={imgSrc} alt={this.props.name} />
			
					<div className='text-center'>
						<p className='text-gray-600 capitalize'>Type: {this.props.type}</p>
						<p className='text-gray-600'>Exp: {this.props.exp}</p>
					</div>
					
				</div>
			</div>
		);
	}
}

export default Pokecard;

