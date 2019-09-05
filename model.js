clear();

// People dropping off a form (action creator)
// One action creator for each type of form
const createPolicy = (name, amount) => {
  return {
    //Action (a form in the analogy)
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = name => {
  return {
    //Action (a form in the analogy)
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountClaim) => {
  return {
    //Action (a form in the analogy)
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountClaim: amountClaim
    }
  };
};

// Reducers (departaments in the analogy)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // we care about this action
    return [oldListOfClaims, action.payload];
  }

  // we dont care about this action
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    // we care about this action
    return bagOfMoney - action.payload.amountClaim;
  } else if (action.type === "CREATE_POLICY") {
    // we care about
    return bagOfMoney + action.payload.amount;
  }
  // we dont care about this action
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }

  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

// Example
const action = createPolicy("Alex", 20);
store.dispatch(action);

// to get our repository of data and verify that the dispatch function worked
console.log(store.getState());

// So, now 1) we can call all of our different action creators
// 2) we can pass the action thats are returned to the store.dispatch() function
// 3) and that is going to modify the store of the application

// another examples
store.dispatch(createPolicy("Anna", 50));
store.dispatch(createPolicy("Bob", 45));
store.dispatch(createPolicy("Milton", 50));

store.dispatch(createClaim("Bob", 120));
store.dispatch(createPolicy("Anna", 30));

store.dispatch(deletePolicy("Alex"));

// to get our repository of data and verify that the dispatch function worked
console.log(store.getState());
