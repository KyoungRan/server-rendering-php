import React, { Component } from 'react';
import utils from './utils';
import List from './List';
import Detail from './Detail';

class App extends Component {
  state = {
    users: this.props.users || [],
    info: this.props.info
  };

  componentDidMount() {
    utils.subscribe(this.onChange);

    if (this.state.users.length === 0) {
      utils.fetchDetail('');
    }

    if (this.state.info === null) {
      utils.onPopState();
    }
  }

  onChange(data, dataType) {
    const state = this.state;
    state[dataType] = data;
    this.setState(state);
  }

  render() {
    return (
      <div>
        {this.state.info && <Detail {...this.state.info} />}
        <List users={this.state.users} active={this.state.info} />
      </div>
    );
  }
}

export default App;
