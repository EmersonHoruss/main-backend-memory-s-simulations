// HELPERS

function updateOriginalPartitions(originalPartitions, fakePartition) {
  originalPartitions.forEach((partition, index) => {
    if (partition.id === fakePartition.id)
      partition = fakePartition;
  });
}

//Required data
function suppliesData(idMemory) {
  memory = mysql.get("select * from tmemory where idMemory");
  typeMemory = mysql.get("select name from ttype where idMemory");
  events = mysql.get("select * from tevent where idMemory");
  partitions = mysql.get("select * from tpartition where idMemory");
  return { memory, typeMemory, events, partitions };
}

function getWork(idWork) {
  return mysql.get("select * from twork where idWork");
}



// USE IN ASSIGNATIONS
function createSimulations(params, detailSimulation, simulations = []) {
  ({ partitions, work, _event, assignation } = params);
  ({ condition } = assignation);
  const simulation = {
    partitions,
    work,
    _event,
    condition,
    detail: detailSimulation,
  };
  simulations.push(simulation);
  return simulations;
}
