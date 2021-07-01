// MAIN
function createdSimulation(event, work, partitions, condition, details) {
  return {
    event,
    work,
    partitions,
    condition,
    details,
  };
}

function pushSetCreatedSimulation(simulation, setCreatedSimulation = []) {
  return setCreatedSimulation.push(simulation);
}

function assignationStaticMemory(
  assignation,
  event,
  memory,
  partitions,
  work,
  typeMemory
) {
  ({ condition, result } = assignation);
  result.fragment = result.size - work.size;
  result.tpd = false;
  result.point = result.id;

  updateOriginalPartitions(partitions, result);
  const simulation = createdSimulation(
    event,
    work,
    partitions,
    condition,
    "assignation of a work"
  );
  return pushSetCreatedSimulation(simulation);
}

function createNewPartitions(position, size, partitions) {
  clonedPartition = partitions.find((partition) => partition.position === 0);
  clonedPartition.position = position;
  clonedPartition.size = size;
  clonedPartition.tpd = true;
  clonedPartition.point = "";
  clonedPartition.id = createId(partitionsIds);
  return clonedPartition;
}

function reactionPartition(clonedPartition, partitions) {
  partitions.forEach((partition) => {
    if (partition.position >= clonedPartition.position) partition.position += 1;
  });
}

function pushClonedPartitionInPartitions(clonedPartition, partitions) {
  const forwardClonedPartition = partitions.filter(
    (partition) => partition.position > clonedPartition.position
  );
  const backClonedPartitions = partitions.filter(
    (partition) => partition.position < clonedPartition.position
  );
  backClonedPartitions.push(clonedPartition);
  partitions = backClonedPartitions.concat(forwardClonedPartition);
}

function assignationDynamicMemory(
  assignation,
  event,
  memory,
  partitions,
  work,
  typeMemory
) {
  ({ condition, result } = assignation);

  if (condition === "first") {
    const size = result.size - work.size;
    if (size !== 0) {
      const position = result.position + 1;
      const clonedPartition = createNewPartitions(position, size, partitions);
      reactionPartitions(clonedPartition,partitions);
      pushClonedPartitionInPartitions(clonedPartition, partitions);
    }
    result.tpd = false;
    result.point = result.id;
    result.size = work.size;
    const simulation = createdSimulation(
      event,
      work,
      partitions,
      condition,
      "assignation of a work"
    );
    updateOriginalPartitions(partitions, result);
    return pushSetCreatedSimulation(simulation);
  } else if (condition === "second") {
  }
}

function assignationRelocatableDynamicMemory(
  assignation,
  event,
  memory,
  partitions,
  work,
  typeMemory
) {}

function eventAssignations(
  assignation,
  event,
  memory,
  partitions,
  work,
  typeMemory
) {
  return typeMemory === "static"
    ? assignationStaticMemory(
        assignation,
        event,
        memory,
        partitions,
        work,
        typeMemory
      )
    : typeMemory === "dynamic"
    ? assignationDynamicMemory(
        assignation,
        event,
        memory,
        partitions,
        work,
        typeMemory
      )
    : typeMemory === "relocatable"
    ? assignationRelocatableDynamicMemory(
        assignation,
        event,
        memory,
        partitions,
        work,
        typeMemory
      )
    : false;
  // : "no recognize " + typeMemory + " in memory's type";
}
