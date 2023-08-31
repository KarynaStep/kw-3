import React, { Component } from "react";

const CiaoSort = (props) => {
  const {
    users,
    isSortIdUp,
    isSortFirstNameUp,
    isSortLastNameUp,
    setSelectUsers,
  } = props;

  const sortUsersById = () => {
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (isSortIdUp) {
        return a.id - b.id;
      }
      return b.id - a.id;
    });

    setSelectUsers(newUsers, !isSortIdUp, isSortFirstNameUp, isSortLastNameUp);
    // this.setState({ users: newUsers, isSortIdUp: !isSortIdUp });
  };

  const sortUsersByFirstName = () => {
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return isSortFirstNameUp ? 1 : -1;
      }
      if (a.firstName < b.firstName) {
        return isSortFirstNameUp ? -1 : 1;
      }
      return 0;
    });
    setSelectUsers(newUsers, isSortIdUp, !isSortFirstNameUp, isSortLastNameUp);
    //виклик батьківської функції
    // this.setState({ users: newUsers, isSortFirstNameUp : !isSortFirstNameUp });
  };

  const sortUsersByLastName = () => {
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.sort((a, b) => {
      const nameA = a.lastName.toUpperCase();
      const nameB = b.lastName.toUpperCase();

      if (nameA > nameB) {
        return isSortLastNameUp ? 1 : -1;
      }
      if (nameA < nameB) {
        return isSortLastNameUp ? -1 : 1;
      }
      return 0;
    });
    setSelectUsers(newUsers, isSortIdUp, isSortFirstNameUp, !isSortLastNameUp);
    // this.setState({ users: newUsers, isSortLastNameUp : !isSortLastNameUp });
  };

  return (
    <div>
      <button onClick={sortUsersById}>
        sort id {isSortIdUp ? "(up)" : "(down)"}
      </button>
      <button onClick={sortUsersByFirstName}>
        sort first name {isSortFirstNameUp ? "(A-Z)" : "(Z-A)"}
      </button>
      <button onClick={sortUsersByLastName}>
        sort last name {isSortLastNameUp ? "(A-Z)" : "(Z-A)"}
      </button>
    </div>
  );
};

export default CiaoSort;
