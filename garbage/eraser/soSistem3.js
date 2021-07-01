ASSIGNACIÓN DE MEMORIA
Interface respuestaAsignación{
typoMemoria: '',
respuesta: ''
}

assignaciónEstática(sizeWork number, partitions: Partition array){
	const typoMemoria = 'staticCondition';
	const availablePartitions = getAvailablePartitions(partitions);
	if (availablePartitions===[]) 
		return respuestaAsiganación{typoMemoria,respues:availablePartitions};

	const respuesta = availablePartitions.find(p=>p.size>=sizeWork)
	return  respuestaAsignación{typoMemoria,respuesta}
}

assignaciónDinámica(sizeWork number, partitions: Partition array){
	const estaticaAsignable=assignaciónEstática(number, partitions)
	if(estaticaAsignable)
		return estaticaAsignable;
	
	const typoMemoria = 'dinamicCondition'
	for(int i =0; i<partitions.lenght; i++){
		if(partitions[i].estado=='disponible'){
			const suma = 
		}
	}
}



//First condition: Static Memory, Dynamic Memory and Compacted Dynamic Memory
isPartitionMoreOrEqualWork(sizeWork: number, partitions: ){
}

//Second condition: Dynamic Memory and Compacted Dynamic Memory
isAddAdjacentPartitionsMoreOrEqualWork(){}

//Third condition: Compacted Dynamic Memory
isAddAllPartitionsMoreOrEqualWork(){}

//Match memory type with its conditions
matchMemoryWithConditions(typeMemory:string){
	if(typeMemory==='static')
		isPartitionMoreOrEqualWork()
	else if (type==='dynamic')
		isPartitionMoreOrEqualWork()
		isAddAdjacentPartitionsMoreOrEqualWork()
	else 
		isPartitionMoreOrEqualWork()
		isAddAdjacentPartitionsMoreOrEqualWork()
		isAddAllPartitionsMoreOrEqualWork()
}

//general process
generalProcess(...){
	const availablePartitions = getAvailablePartitions(partitions)
	matchMemoryWithConditions(memoryType)	
}

*********** ALGORITHM IN CODE OF THE MAIN SIMULATION ***********
//get just available partitions
getAvailablePartitions(partitions: Partition array){
    const availablePartitions = [];
    partitions.forEach(partition => {
        partition.estate==='available'?availablePartitions.push(partition):null
    });
    return availablePartitions;
}

//allocate a partition to work
allocatePartitionToWork(){

}

//add work to queue
addWorkToQueue(){

}

getFormatSimulation(partitions,_event,queue){
	const simulation:Simulation = {
		nameEvent: _event.name,
		memory: partitions,
		queue: queue
	}
	return simulation
}

//process an input event
inputEvent(supplies,_event,queue,customisedSimulation:string){
    const availablePartitions = getAvailablePartitions(supplies.partitions)
    const work = mysql.get('select *from twork where idWork ===_event.idWork')
	availablePartitions?allocatePartitionToWork(availablePartitions):addWorkToQueue(queue,work)
    //dont forget to change queue's state at the beggining and at the end
	const simulation = getFormatSimulation(supplies.partitions,_event,queue);
	return simulation;
}

findPartitionHasWork(partitions,idWork){
	const partitionHasWork={}
	partitions.forEach(partition=>partition.idWork===idWork?partitionHasWork=partition:null)
	return partitionHasWork;
}

deallocatePartition(){

}

getFormatOutputSimulation(){

}

//process an output event
outputEvent(supplies,_event,customisedSimulation:string){
	partitionHasWork = findPartitionHasWork(supplies.partitions,_event.idWork);
	partitionHasWork.id===undefined?res.send(error):null
	deallocatedPartition=deallocatePartition()
	allocatedPartitionQueueWork=allocatePartitionQueueWork(customisedSimulation)
	const simulation = getFormatOutputSimulation(_event,deallocatedPartition,
		allocatedPartitionQueueWork);
	return simulation
}

//validate an input event
const isInputEvent=(type: typeof Event.type) => type==='input'? true:false

//validate an output event
const isOutputEvent=(type: typeof Event.type) => type==='output'? true:false

//execute the simulation
mainSimulation(supplies,customisedSimulation:string){
	const simulations: Simulation[] = [];
	supplies.events.forEach((event)=>{
		const simulationsInEvent = isInputEvent(event.type)
			?inputEvent(supplies,event,customisedSimulation)
			:outputEvent(supplies,event,customisedSimulation)
		simulationsInEvent.forEach((sIV)=>{simulations.push(sIV)});
	});
	return simulations;
}

//let custom simulations
validateCustomisedSimulation(customised:string='especific'){
	return customised==='specific'
		?true
		:customised==='general'
		?false
		:null
}

//get supplies for simulation
getSuppliesSimulation(idMemory:string){
	//get date from database
	const events = mysql.get('select * from tevent where idMemory');
	const memory = mysql.get('select * from tmemory where idMemory');
    const partitions = mysql.get('select * from tpartition where idMemory');
    const supplies = {memory,events,partitions}
    return supplies;
}

//prepare simulation
main(customisedSimulation){
	//get customisedSimulation: there're two kind of simulations, the first called specific and the second is general. specific includes all details for an event and the general dosen't include
	if(validateCustomisedSimulation(customisedSimulation)===null)
		http.res(error);
    //get items from request
	const idMemory = req.params('idMemory');
    const supplies = getSuppliesSimulation(idMemory);
	const simulations = mainSimulation(supplies,customisedSimulation);
	http.res(simulations);
}

//excecute or use the main()
//first: if you use this kind you're going to get an specific simulation of all the event
main()

//second: if you use the second option you're going to get a general simulation without all details for each event
main('general')


export interface Simulation{
	nameEvent: string,
	memory: partition[],
	tpd: partition[],
	tpa: partition[],
	queue: work[]
}

export interface

























