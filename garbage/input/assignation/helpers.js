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
  