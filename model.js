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
