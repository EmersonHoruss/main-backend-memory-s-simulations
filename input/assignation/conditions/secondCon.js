function getCompactedPartition(result) {
  const compactedPartition = JSON.parse(JSON.stringify(result[0]));
  const setSizePartitions = [];
  result.forEach((partition) => setSizePartitions.push(partition.size));
  const sumatorySizePartitions = setSizePartitions.reduce(
    (acc, cur) => acc + cur
  );
  compactedPartition.size = sumatorySizePartitions;
  return compactedPartition;
}

function effectPartition(partitions, result, compactedPartition) {
  const lengthToExtractFromPartitions = result.length;
  const firstPositionToExtractFromPartitions = result[0].position;
  partitions.splice(
    firstPositionToExtractFromPartitions,
    lengthToExtractFromPartitions,
    compactedPartition
  );
}

function compactPartitions(partitions, result) {
  const compactedPartition = getcompactedPartition(result);
  effectPartitions(partitions, result, compactedPartition);
}

function executeFirstCondition(params, simulations) {
  ({ partitions, work, assignation, typeMemory } = params);
  ({ result, condition } = assignation);
  params.assignation = isAssignable(partitions, work.size, typeMemory);
  return firstCon(params, simulations);
}

// MAIN MODULE'S FUNCTION
function main(params) {
  ({ partitions, work, assignation, typeMemory } = params);
  ({ result, condition } = assignation);

  const detailCompactedSimulation = "Compacting partitions";

  compactPartitions(partitions, result);
  const simulations = createSimulations(params, detailCompactedPartitions);

  return executeFirstCondition(params, simulations);
}
