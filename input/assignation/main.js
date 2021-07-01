function eventAssignations(params) {
  ({ assignation } = params);
  ({ condition } = assignation);
  return condition === "first"
    ? first(params)
    : condition === "second"
    ? second(params)
    : condition === "third"
    ? third(params)
    : "error: no find conditions in the assignation";
}
