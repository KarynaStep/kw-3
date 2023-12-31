import React from "react";
import CardUser from "../CardUser";

const CardList = (props) => {
  const { users, setSelectUsers } = props;

  const selectorUser = (id) => {
    const newUsers = JSON.parse(JSON.stringify(users)).map((user) => ({
      ...user,
      isSelect: user.id === id ? !user.isSelect : user.isSelect,
    }));
    setSelectUsers(newUsers);
  };

  const createCard = (user) => (
    <CardUser key={user.id} user={user} selectorUser={selectorUser} />
  );

  return <section>{users.map(createCard)}</section>;
};

export default CardList;
