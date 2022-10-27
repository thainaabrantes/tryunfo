import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <section>
        <h1 data-testid="name-card">
          { cardName }
        </h1>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <spam data-testid="attr1-card">
          { cardAttr1 }
        </spam>
        <spam data-testid="attr2-card">
          { cardAttr2 }
        </spam>
        <spam data-testid="attr3-card">
          { cardAttr3 }
        </spam>
        <spam data-testid="rare-card">
          { cardRare }
        </spam>
        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
