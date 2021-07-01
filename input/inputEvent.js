// INPUT EVENT
// MODULE CONSISTS IN: Management when there an input event

// is possible assignate partitions to work
function isAssignable(partitions, sizeWork, typeMemory) {
  const freePartitions = existsFreePartitions(partitions);
  return freePartitions
    ? managementConditions(sizeWork, freePartitions, typeMemory)
    : false;
}

// we are going to assignate a partition to a work and get a simulation or a set of
// simulation if it's the case
function assignatePartitionToWork(assignation) {
  assignation.main()
}

// queue updated for the pushed work
function addWorkToQueue(work, queue) {
  queue.push(work);
}

function InputEvent(partitions, event, typeMemory, queue) {
  const work = getWork(event.idWork);
  const sizeWork = work.size;
  const assignation = isAssignable(partitions, sizeWork, typeMemory);

  return assignation === false
    ? addWorkToQueue()
    : assignatePartitionToWork(
        partitions,
        event,
        work,
        assignation,
        typeMemory
      );
}

// const simulation = {name:'',partitions:'',queue:''}

//
//
//function createSimulation(){
// const simulation = {order:'',nameSimulation:'',currentMemory:'',currentQueue:''}
// }
