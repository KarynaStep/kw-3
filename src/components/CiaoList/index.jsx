import React, { Component } from 'react';
import Ciao from '../Ciao';


class CiaoList extends Component {
  createList = ({ firstName, lastName, id }, index) => (
    <Ciao key={id} id={id} name={firstName} lname={lastName} />
  );
  render() {
      const { users } = this.props;
      return <sertion>{users.map(this.createList)}</sertion>
  }
}

export default CiaoList;
