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
