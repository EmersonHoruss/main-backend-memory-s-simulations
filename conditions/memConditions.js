// MEMORY'S CONDITIONS
// MODULE CONSISTS IN: Just create each conditions for all memories' type

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
  return result.length === 0 ? false : result;
}

// FIRST CONDITION
// first condition: exists a free partition's size geater than the inputed work's size
function firstCondition(sizeWork, freePartitions) {
  const result = freePartitions.find((partition) => partition.size >= sizeWork);
  return result === undefined ? false : result;
}

// SECOND CONDITION
// get the last partition assignate to the contiguos partittions
function areContiguos(freePartitions, currentIndex) {
  const currentPartition = freePartitions[currentIndex];
  const beforeCurrentPartition = freePartitions[currentIndex - 1];
  return currentPartition.position === beforeCurrentPartition.position + 1
    ? true
    : false;
}

// let us to add a new item to the contiguos partitions and its respectible
// partitioin when we send add OR just let us to update the last item of
// contiguos partitions with a partition
// let us to be posible the grouping of just the contiguos partitions
function manageContiguosPartitions(
  contiguosPartitions,
  partition,
  action = "update"
) {
  if (action === "add") contiguosPartitions.push([]);
  const lastGroup = contiguosPartitions.length - 1;
  contiguosPartitions[lastGroup].push(partition);
}

// create groups of just contiguos partitions
function getGroupContiguosPartitions(freePartitions) {
  const contiguosPartitions = [];

  freePartitions.forEach((partition, index) => {
    if (index === 0)
      manageContiguosPartitions(contiguosPartitions, partition, "add");
    else {
      areContiguos(freePartitions, index)
        ? manageContiguosPartitions(contiguosPartitions, partition)
        : manageContiguosPartitions(contiguosPartitions, partition, "add");
    }
  });

  return contiguosPartitions;
}

// second condition: the sumatory of just contiguos free partitions is
// greater than work's size
function secondCondition(sizeWork, freePartitions) {
  const groupContiguosPartitions = getGroupContiguosPartitions(freePartitions);
  let groupComplySecondCondition = false;
  groupContiguosPartitions.forEach((groupPartitions, index) => {
    let sum = 0;
    groupPartitions.forEach((partition) => (sum += partition.size));
    if (sum >= sizeWork && groupComplySecondCondition === false)
      groupComplySecondCondition = index;
  });
  return groupComplySecondCondition === false
    ? false
    : groupContiguosPartitions[groupComplySecondCondition];
}

// THIRD CONDITION
// third condition
function thirdCondition(sizeWork, freePartitions) {
  let sum = 0;
  freePartitions.forEach((partition) => (sum += partition.size));
  return sum >= sizeWork ? freePartitions : false;
}
