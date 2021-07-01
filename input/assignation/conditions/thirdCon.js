function relocatePartitions(partitions, result) {
  const partitionsOutResult = partitions.filter(
    (partition) => partition.tpd === true
  );
  const constantAditionIndexResult = partitionsOutResult.length;
  partitionsOutResult.forEach(
    (partition, index) => (partition.position = index)
  );
  result.forEach(
    (partition, index) =>
      (partition.position = index + constantAditionIndexResult)
  );
  partitions = partitionsOutResult.concat(result)
}

function executeSecondCondition(params, simulations) {
  ({ partitions, work, assignation, typeMemory } = params);
  ({ result, condition } = assignation);
  params.assignation = isAssignable(partitions, work.size, typeMemory);
  return secondCon(params, simulations);
}

// MAIN MODULE'S FUNCTION
function main(params) {
  ({ partitions, work, assignation, typeMemory } = params);
  ({ result, condition } = assignation);

  const detailCompactedSimulation = "Relocating partitions";

  relocatePartitions(partitions, result);
  const simulations = createSimulations(params, detailCompactedPartitions);

  return executeSecondCondition(params, simulations);
}
