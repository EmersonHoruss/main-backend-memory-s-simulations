// INPUT EVENT
// MODULE CONSISTS IN: Management when there an input event

// is possible assignate partitions to work
function isAssignable(sizeWork, partitions, typeMemory) {
  const freePartitions = existsFreePartitions(partitions);
  return freePartitions
    ? managementConditions(sizeWork, freePartitions, typeMemory)
    : false;
}

// we are going to assignate a partition to a work and get a simulation or a set of
// simulation if it's the case
function assignatePartitionToWork(assignation) {

}

// queue updated for the pushed work
function addWorkToQueue(work, queue) {
  queue.push(work);
}

function InputEvent(event, memory, partitions, queue, typeMemory) {
  const work = getWork(event.idWork);
  const sizeWork = work.size;
  const assignation = isAssignable(sizeWork, partitions, typeMemory);

  return assignation === false
    ? addWorkToQueue()
    : assignatePartitionToWork(
        assignation,
        event,
        memory,
        partitions,
        work,
        typeMemory
      );
}

// const simulation = {name:'',partitions:'',queue:''}

//
//
//function createSimulation(){
// const simulation = {order:'',nameSimulation:'',currentMemory:'',currentQueue:''}
// }
