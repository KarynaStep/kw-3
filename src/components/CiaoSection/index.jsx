import { Component } from "react";
import CiaoList from "./CiaoList";
import { USERS } from "../../constants";
import CiaoSort from "./CiaoSort";

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS.map((user) => ({ ...user, isSelect: false })),
      isSortIdUp: true,
      isSortFirstNameUp: true,
      isSortLastNameUp: true,
    };
  }
  setSelectUsers = (
    newUsers,
    isSortIdUp,
    isSortFirstNameUp,
    isSortLastNameUp
  ) => {
    this.setState({
      users: newUsers,
      isSortIdUp: isSortIdUp,
      isSortFirstNameUp: isSortFirstNameUp,
      isSortLastNameUp: isSortLastNameUp,
    });
  };

  render() {
    const { users, isSortIdUp, isSortFirstNameUp, isSortLastNameUp } =
      this.state;
    return (
      <>
        <CiaoSort
          users={users}
          isSortIdUp={isSortIdUp}
          isSortFirstNameUp={isSortFirstNameUp}
          isSortLastNameUp={isSortLastNameUp}
          setSelectUsers={this.setSelectUsers}
        />
        <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
