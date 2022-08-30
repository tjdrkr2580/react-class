const redux = require("redux");
const createStore = redux.createStore;

//actions와 reducer를 통해서 store를 제어하는 것.
const ADD_SUBSCRIBER = "ADD_SUBSCRIBER";
const ADD_VIEW = "ADD_VIEW";

const addSubscriber = () => {
  //type을 reducer로 핸들링함.
  return {
    type: ADD_SUBSCRIBER,
  };
};

const addView = () => {
  //type을 reducer로 핸들링함.
  return {
    type: ADD_VIEW,
  };
};

const subscriberState = {
  //subscribers 기본값 세팅
  subscribers: 50,
};

const subscriberReducer = (state = subscriberState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        //스프레드 연산자를 통해서 state를 받아오고 action을 이용해 subscribers를 데이터를 변형해줌.
        ...state,
        subscribers: state.subscribers + 1,
      };
    default:
      return state;
  }
};

const store = createStore(subscriberReducer);
console.log(store.getState());
store.dispatch(addSubscriber());
console.log(store.getState());

//subscribe - view - dispatch
