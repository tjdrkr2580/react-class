import React from "react";
import { connect } from "react-redux";
import { addSubscribers } from "./../redux/subscribers/actions";

const Subscribers = ({ count, addSubscribers }) => {
  return (
    <div className="items">
      <h2>구독자 수 : {count}</h2>
      <button onClick={() => addSubscribers()}>구독하기</button>
    </div>
  );
};

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscribers: () => dispatch(addSubscribers()),
//   };
// };

const mapDispatchToProps = {
  addSubscribers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
