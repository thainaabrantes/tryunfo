import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            data-testid="name-input"
            id="name-input"
            // value={ name }
            // name={ name }
            type="text"
          />
        </label>
        <label htmlFor="name-input">
          Descrição
          <textarea
            data-testid="description-input"
            id="description-input"
            // value={ name }
            // name={ name }
            rows="5"
            cols="33"
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            data-testid="attr1-input"
            id="attr1-input"
            // value={ name }
            name="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            data-testid="attr2-input"
            id="attr2-input"
            // value={ name }
            name="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            data-testid="attr3-input"
            id="attr3-input"
            // value={ name }
            name="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            id="image-input"
            // value={ name }
            name="image-input"
            type="text"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            id="rare-input"
            name="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input
            data-testid="trunfo-input"
            id="trunfo-input"
            name="trunfo-input"
            type="checkbox"
          />
          Super Trybe Trunfo
        </label>
        <button
          data-testid="save-button"
          id="save-button"
          type="button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
