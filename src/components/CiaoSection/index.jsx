import { Component } from "react";
import CiaoList from "./CiaoList";
import { USERS } from "../../constants";

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS,
      isSortIdUp: true,
      isSortFirstNameUp: true,
      isSortLastNameUp: true,
    };
  }
  sortUserById = () => {
    const { users, isSortIdUp } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (isSortIdUp) {
        return a.id - b.id;
      }
      return b.id - a.id;
    });
    this.setState({ users: users, isSortIdUp: !isSortIdUp });
  };
  sortUsersByFirstName = () => {
    const { users, isSortFirstNameUp } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      const nameA = a.firstName.toUpperCase();
      const nameB = b.firstName.toUpperCase();

      if (nameA < nameB) {
        return isSortFirstNameUp ? 1 : -1;
      }
      if (nameA > nameB) {
        return isSortFirstNameUp ? -1 : 1;
      }
      return 0;
    });
    this.setState({ users: newUsers, isSortFirstNameUp: !isSortFirstNameUp });
  };
  sortUsersByLastName = () => {
    const { users, isSortLastNameUp } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      const nameA = a.lastName.toUpperCase();
      const nameB = b.lastName.toUpperCase();

      if (nameA < nameB) {
        return isSortLastNameUp ? 1 : -1;
      }
      if (nameA > nameB) {
        return isSortLastNameUp ? -1 : 1;
      }
      return 0;
    });
    this.setState({ users: newUsers, isSortLastNameUp: !isSortLastNameUp });
  };

  render() {
    const { users, isSortIdUp, isSortFirstNameUp, isSortLastNameUp } =
      this.state;
    return (
      <>
        <div>
          <button onClick={this.sortUserById}>
            sort id {isSortIdUp ? "up" : "down"}
          </button>
          <button onClick={this.sortUsersByFirstName}>
            sort first name{isSortFirstNameUp ? "A-Z" : "Z-A"}
          </button>
          <button onClick={this.sortUsersByLastName}>
            sort last name {isSortLastNameUp ? "A-Z" : "Z-A"}
          </button>
        </div>
        <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
