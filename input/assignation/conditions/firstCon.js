function existsSurplusSpace(workSize, partitionSize) {
  return workSize === partitionSize ? false : true;
}

function getSurplusPartition(partitions, result, workSize) {
  const copyResult = JSON.parse(JSON.stringify(result));
  copyResult.id = generateId(partitions);
  copyResult.tpd = true;
  copyResult.point = "";
  copyResult.size -= workSize;
  copyResult.position += 1;
  return copyResult;
}

function updateResult(result, workSize, noStaticMem) {
  result.point = result.id;
  result.tpd = false;

  if (noStaticMem) result.size = workSize;
  else result.fragment = result.size - workSize;
}

function reactionPartition(partitions, clonedPartition) {
  partitions.forEach((partition) => {
    if (partition.position >= clonedPartition.position) partition.position += 1;
  });
}

function pushClonedPartitionInPartitions(partitions, clonedPartition) {
  const forwardClonedPartition = partitions.filter(
    (partition) => partition.position > clonedPartition.position
  );
  const backClonedPartitions = partitions.filter(
    (partition) => partition.position < clonedPartition.position
  );
  backClonedPartitions.push(clonedPartition);
  partitions = backClonedPartitions.concat(forwardClonedPartition);
}

function updatePartitions(
  partitions,
  result,
  noStaticCondition,
  clonedPartition
) {
  updateOriginalPartitions(partitions, result);
  if (noStaticCondition) {
    reactionPartition(partitions, clonedPartition);
    pushClonedPartitionInPartitions(partitions, clonedPartition);
  }
}

// MAIN MODULE'S FUNCTION
function main(params, simulations) {
  ({ partitions, work, assignation, typeMemory } = params);
  ({ result, condition } = assignation);

  const detailCondition = "assignation of a partition to work";
  const surplus = existsSurplusSpace(work.size, result.size);
  const noStaticMem = typeMemory === "dynamic" || typeMemory === "relocatable";
  const noStaticCondition = surplus && noStaticMem;

  if (noStaticCondition) {
    const surplusPartition = getSurplusPartition(partitions, result, work.size);
  }
  updateResult(result, workSize, noStaticMem);
  updatePartitions(partitions, result, noStaticCondition, surplusPartition);

  return createSimulations(params, detailCondition, simulations);
}
