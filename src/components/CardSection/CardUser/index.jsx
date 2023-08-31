import React from "react";

const CardUser = (props) => {
  const {
    user: { id, firstName, isSelect },
    selectorUser,
  } = props;

  const selectHandler = () => {
    selectorUser(id);
  };
  const style = {
    backgroundColor: isSelect ? "pink" : "grey",
  };
  return (
    <article onClick={selectHandler} style={style}>
      <h3>{firstName}</h3>
    </article>
  );
};

// class CardUser extends Component {
//   selectHandler = () => {
//     const {
//       user, selectorUser
//     } = this.props;
//     selectorUser(user.id)
//   };
//   render() {
//     const {
//       user: { firstName, isSelect },
//     } = this.props;
//     const style = {
//       backgroundColor: isSelect ? "pink" : "grey",
//     };
//     return (
//       <article onClick={this.selectHandler} style={style}>
//         <h3>{firstName}</h3>
//       </article>
//     );
//   }
// }

export default CardUser;
