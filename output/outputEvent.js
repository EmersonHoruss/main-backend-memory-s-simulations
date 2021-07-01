// function isWorkInPartition(partitions, work) {
//   const looking = partitions.find(
//     (partition) => JSON.stringify(partition) === JSON.stringify(work)
//   );
//   return work === undefined ? false : true;
// }

function getPartitionByEvent(_event) {
  const work = getWork(_event.idWork);
  const idPartition = work.idPartition;
  return getPartitionById(idPartition);
}

function deallocatePartition(partition) {
  partition.tpd = true;
  partition.point = "";
  partition.fragment = 0;
}

function fixSimulations(simulations) {
  const auxSimulations = simulations[0];

  simulations.forEach((simulation, index) => {
    if (index !== 0) {
      simulation.forEach((simulationChildren) =>
        auxSimulations.push(simulationChildren)
      );
    }
  });
  return auxSimulations;
}

function allocatePartitionQueueWork(params, simulations) {
  ({ partitions, _event, typeMemory, queue } = params);
  queue.forEach((work) => {
    const assignation = isAssignable(partitions, work.size, typeMemory);
    if (assignation !== false)
      simulations.push(assignatePartitionToWork(params, assignation));
  });
  fixSimulations(simulations);
  return simulations;
}

// Output event
function OutputEvent(params) {
  ({ partitions, _event, typeMemory, queue } = params);
  const detailDeallocatePartition = "Deallocating partition";
  const partition = getPartition(_event);
  const deallocatedPartition = deallocatePartition(partition);

  updateOriginalPartitions(partitions, deallocatedPartition);
  const simulations = createSimulations(params, detailDeallocatePartition);

  return allocatePartitionQueueWork(params, simulations);
}

// get works as events and partitions in the main process of all
// update the work in the input
// create references for files
// test destructuring

// checkIfIsAssignable
// Assignate
// PassNextPartition
