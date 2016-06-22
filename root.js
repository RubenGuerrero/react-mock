import './components/common.scss';
import React from 'react';

import Input from './components/Input';

import style from './app.scss';

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      a: 'Rubén',
      b: '',
      c: '',
      d: ''
    }
  }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render() {

    return (
      <div className={style.app}>
        <h1>Test</h1>
        <Input
          label="Nombre de la empresa"
          value={this.state.a}
          onChange={this.handleChange.bind(this, 'a')}
        />
        <hr />
        <Input
          label="Campo de prueba"
          value={this.state.b}
          onChange={this.handleChange.bind(this, 'b')}
        />
        <hr />
        <Input
          label="Campo disabled"
          value={this.state.c}
          onChange={this.handleChange.bind(this, 'c')}
          disabled
        />
        <hr />
        <Input
          label="Campo con error"
          error="Falta esto :-)"
          value={this.state.d}
          onChange={this.handleChange.bind(this, 'd')}
        />
      </div>
    );

  }

};

export default Root;
