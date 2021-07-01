// dynamic

function existsSurplusSpace(workSize, partitionSize) {
  return workSize === partitionSize ? false : true;
}

function createPartitionToSurplus(partitions, result, workSize) {
  const copyResult = JSON.parse(JSON.stringify(result));
  copyResult.id = generateId(partitions);
  copyResult.tpd = true;
  copyResult.point = "";
  copyResult.size -= workSize;
  copyResult.position += 1;
  return copyResult;
}

function updateResult(result, workSize) {
  result.point = result.id;
  result.tpd = false;
  result.size = workSize;
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

function updatePartitions(partitions, result, surplus, clonedPartition) {
  if (surplus) {
    reactionPartition(partitions, clonedPartition);
    pushClonedPartitionInPartitions(partitions, clonedPartition);
  } else {
    updateOriginalPartitions(partitions, result);
  }
}

function first(partitions, result, workSize) {
  const surplus = existsSurplusSpace(workSize, partitionSize);
  if (surplus) {
    const partitionToSurplus = createPartitionToSurplus(
      partitions,
      result,
      workSize
    );
  }
  updateResult(result, workSize);
  updatePartitions(partitions, result, surplus, partitionToSurplus);
}

function main() {
  const simulation = first(partitions, result, workSize);
  //   prepare to set simulation
  // return simulation
}
