import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>

        <label htmlFor="input-name">
          <h3>Nome</h3>
          <input
            type="text"
            data-testid="name-input"
            id="input-name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          <h3>Descrição</h3>
          <textarea
            data-testid="description-input"
            id="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="input-attr1">
          <h3>Attr01</h3>
          <input
            type="number"
            data-testid="attr1-input"
            id="input-attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="input-attr2">
          <h3>Attr02</h3>
          <input
            type="number"
            data-testid="attr2-input"
            id="input-attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="input-attr3">
          <h3>Attr03</h3>
          <input
            type="number"
            data-testid="attr3-input"
            id="input-attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="input-image">
          <h3>Imagem</h3>
          <input
            type="text"
            data-testid="image-input"
            id="input-image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="input-rare">
          <h3>Raridade</h3>
          <select
            data-testid="rare-input"
            id="input-rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="input-trunfo">
          <br />
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="input-trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>

        <label htmlFor="button-save">
          <br />
          <input
            type="submit"
            value="Salvar"
            data-testid="save-button"
            id="button-save"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </label>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
