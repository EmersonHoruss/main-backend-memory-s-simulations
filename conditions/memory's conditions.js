// Memory's Conditions

// FIRST MAIN CONTITION TO MEMORY'S CONDITIONS
// exists free partitions
function existsFreePartitions(partitions) {
  // const result = []
  // for (let index = 0; index < partitions.length; index++) {
  //   const partition = partitions[index];
  //   if (partition.tpd === true) result.push(partition);
  // }
  // return result.length === 0 ? false : true;
  const result = partitions.filter((partition) => partition.tpd === true);
  return result === false ? [] : result;
}

// FIRST CONDITION
// first condition: exists a free partition's size geater than the inputed work's size
function firstCondition(sizeWork, freePartitions) {
  const result = freePartitions.find((partition) => partition.size >= sizeWork);
  return result === undefined ? false : true;
}

// SECOND CONDITION
// assignate an addition to the sumatory of the contiguos partitions
function assignateOneSumatoryContiguosPartitions(sumatoryContiguosPartitions) {
  sumatoryContiguosPartitions.push({
    position: partition.position,
    size: partition.size,
  });
}

// update the contiguos partitions
function updatePartitionOfContiguosPartitions(lastSumatory) {
  lastSumatory.position = partition.position;
  lastSumatory.size += partition.size;
}

// get sumatory of the contiguos partitions
function getSumatoryContiguosParitions(freePartitions) {
  const sumatoryContiguosPartitions = [];

  freePartitions.forEach((partition, index) => {
    if (index === 0)
      assignateOneSumatoryContiguosPartitions(sumatoryContiguosPartitions);
    else {
      const lastSumatory =
        sumatoryContiguosPartitions[sumatoryContiguosPartitions.length - 1];

      partition.position - 1 === lastSumatory.position
        ? updatePartitionOfContiguosPartitions(lastSumatory)
        : assignateOneSumatoryContiguosPartitions(sumatoryContiguosPartitions);
    }
  });

  return sumatoryContiguosPartitions;
}

// get result second condition
function getResultSecondConditions(sizeWork, sumatoryContiguosParititons) {
  const result = sumatoryContiguosParititons.find(
    (partition) => partition.size >= sizeWork
  );
  return result;
}

// second condition: the sumatory of just contiguos free partitions is greater than work's size
function secondCondition(sizeWork, freePartitions) {
  const sumatoryContiguosPartitions =
    getSumatoryContiguosParitions(freePartitions);
  const result = getResultSecondConditions(
    sizeWork,
    sumatoryContiguosPartitions
  );

  return result === undefined ? false : true;
}

// THIRD CONDITION
// third condition
function thirdCondition(sizeWork, freePartitions) {
  let sum = 0;
  freePartitions.forEach((partition) => (sum += partition.size));
  return sum >= sizeWork ? true : false;
}
