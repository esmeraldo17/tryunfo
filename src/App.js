import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const value = target.type === 'checbox' ? target.checked : target.value;
    console.log(value);
    this.setState({
      [target.name]: value,
    }, this.handleChangeBtn);
  };

  handleChangeBtn = () => {
    const maxSum = 210;
    const maxAttr = 90;

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    if ((cardName
      && cardDescription
      && cardImage
      && cardAttr1
      && cardAttr2
      && cardAttr3)
      && (+cardAttr1 >= 0 && +cardAttr2 >= 0 && +cardAttr3 >= 0)
      && (+cardAttr1 + +cardAttr2 + +cardAttr3 <= maxSum)
      && (+cardAttr1 <= maxAttr
        && +cardAttr2 <= maxAttr
        && +cardAttr3 <= maxAttr
      )
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else this.setState({ isSaveButtonDisabled: true });
  };

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
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
