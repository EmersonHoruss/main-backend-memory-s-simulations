// Input event
function selectAvailablePartitions(partitions){
	const availablePartitions = [];
    partitions.forEach(partition => {
        partition.state==='free'?availablePartitions.push(partition):null;
    });
    return availablePartitions.length!==0?availablePartitions:null;
}

//Create new partition
function createNewPartition(partitions,position,workSize){
    for (let i = partitions.length-1; i<=position; i--) {
        
        if(i===position){
            partitions[i+1] = {id:generateId(),
                position: partitions[i].position+1,
                size: partitions[i].size-workSize,
                tpd:'available',
                tpa:''}
            break;
        }
        const partition = partitions[i];
        partition.position += 1;
    }
}

//First condition: Static Memory, Dynamic Memory and Compacted Dynamic Memory
function isPartitionMoreOrEqualWork(typeMemory,work,availablePartitions,partitions){
    if(typeMemory==='static'){
        for (let partition of availablePartitions) {
            if(partition.size>=work.size){
                work.idPartition=partition.idPartition
                partition.fragmen=partition.size-work.size
                partition.tpd='not available'
                partition.tpa=partition.idPartition
                break;
            }
        }
    }else{
		for (let partition of availablePartitions) {
            let i = 0;
            if(partition.size===work.size){
                work.idPartition=partition.idPartition
                partition.tpd='not available'
                partition.tpa=partition.idPartition
                break;
            }else if(partition.size>work.size){
                work.idPartition=partition.idPartition
                partition.tpd='not available'
                partition.tpa=partition.idPartition
                createNewPartition(partitions,i,work.size)
                partition.size=work.size
                break;
            }
            i++;
        }
    }
}

//Second condition: Dynamic Memory and Compacted Dynamic Memory
function isAddAdjacentPartitionsMoreOrEqualWork(){

}

//Third condition: Compacted Dynamic Memory
function isAddAllPartitionsMoreOrEqualWork(){

}

//Match memory type with its conditions
function assignatePartitionToWork(typeMemory){
	if(typeMemory==='static')
		isPartitionMoreOrEqualWork()
	else if (type==='dynamic'){
		isPartitionMoreOrEqualWork()
		isAddAdjacentPartitionsMoreOrEqualWork()
        }else {
		isPartitionMoreOrEqualWork()
		isAddAdjacentPartitionsMoreOrEqualWork()
		isAddAllPartitionsMoreOrEqualWork()
    }
}

// function assignatePartitionToWork(typeMemory){

// }

//queue updated for the pushed work
function addWorkToQueue(work,queue){
    queue.push(work)
}

function createSimulation(){
    const simulation = {order:'',nameSimulation:'',currentMemory:'',currentQueue:''}
}

function InputEvent(event,memory,partitions,queue,typeMemory){
    const selectedAvailablePartitions = selectAvailablePartitions(partitions);
    if(selectedAvailablePartitions)
        assignatePartitionToWork()
    else
        addWorkToQueue()  
    return createSimulation();  
}

// const simulation = {name:'',partitions:'',queue:''}

// 
// 
//