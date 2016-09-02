import React, { Component } from 'react';

const styles = {
  card: {
    height: '300px',
    border: '1px solid black'
  }
}

export default class PokemonList extends Component {
  render() {
    let { pokemon, sort } = this.props;


    if (pokemon) {

      if (sort) {
        pokemon.sort((a, b) => {
          if (typeof a[sort] === 'string') {
            a[sort] = a[sort].toLowerCase();
            b[sort] = b[sort].toLowerCase();
          }

          if (a[sort] < b[sort]) {
            return -1
          } else if (a[sort] > b[sort]) {
            return 1;
          } else {
            return 0;
          }
        })
      }

      let Pokemon = pokemon.map(pokemon => {
        let { _id, name, number, types, image } = pokemon;

        return (
          <div className="col-xs-12 col-md-4" key={_id}>
            <div>
              <img style={styles.card} src={image} />
            </div>
            <div>
              <h3>{name}</h3>
              <p>Id: {number}</p>
            </div>
          </div>
        )
      })

      return (
        <div>
        {Pokemon}
        </div>
      )
    } else {
      <h1>Loading...</h1>
    }
  }
}
