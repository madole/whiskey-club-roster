import React, { Component, PropTypes } from 'react';

class AddPerson extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  addPerson() {
    const { actions } = this.props;
    const addPersonInput = document.getElementById('addPersonInput');
    actions.addPerson(addPersonInput.value);
    addPersonInput.innerHTML = '';
  }

  render() {
    return (
      <div>
        <input id="addPersonInput" type="text" />
        <button value="click" onClick={() => this.addPerson()}>Add Person</button>
      </div>
    );
  }
}

export default AddPerson;
