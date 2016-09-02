import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon, createPokemon } from '../actions/PokemonActions';
import { changeSort } from '../actions/UiActions';

import FormModal from './FormModal';
import PokemonList from './PokemonList';
import SortSelect from './SortSelect';

// @connect(state => ({
//   pokemon: state.pokemon
// }))
@connect(
  state => ({
    pokemon: state.pokemon,
    sort: state.ui.sort
  }),
  dispatch => ({
    fetchPokemon() {
      dispatch(fetchPokemon());
    },
    createPokemon(pokemon) {
      dispatch(createPokemon(pokemon));
    },
    changeSort(value) {
      dispatch(changeSort(value));
    }
  })
)
export default class PokemonPage extends Component {
  constructor() {
    super();

    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm(pokemon) {

    pokemon.types = pokemon.types.split(',').map(type => type.trim()).filter(type => type) //only keeps truthy types

    this.props.createPokemon(pokemon);
  }

  componentWillMount() {
    this.props.fetchPokemon();
  }

  render() {
    let { pokemon, sort, changeSort } = this.props;

    let modalId = 'NewPokemonModal';
    let schema = {
      name: { type: 'text', label: 'Name:', required: true },
      number: { type: 'number', label: 'Pokedex Number:', required: true },
      image: { type: 'text', label: 'Image URL:', required: true },
      types: { type: 'text', label: 'Types: (Enter types separated by commas)' }
    }

    return (
      <div>
        <h1 className="text-center">PokemonPage</h1>

        <button
          className="btn btn-success"
          data-toggle='modal'
          data-target={'#' + modalId}>
          Create New Pokemon
        </button>

        <SortSelect changeSort={changeSort}/>

        <PokemonList pokemon={pokemon} sort={sort}/>

        <FormModal
          modalId={modalId}
          title={'New Pokemon'}
          submitForm={this._submitForm}
          schema={schema}
        />
      </div>
    )
  }
}

// export default connect(
//   state => ({
//     pokemon: state.pokemon
//   }),
//   dispatch => ({
//     fetchPokemon() {
//       dispatch(fetchPokemon());
//     }
//   })
// )(PokemonPage)
