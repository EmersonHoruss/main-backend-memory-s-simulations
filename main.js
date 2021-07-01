//Second try
function MainProcess() {
  idMemory = req.params(idMemory)(
    ({ partitions, events, typeMemory } = suppliesData(idMemory))
  );
  simulations = [];
  queue = [];

  events.forEach((event) => {
    const typeEvent = event.type;
    const simulation =
      typeEvent === "input"
        ? InputEvent(partitions, event, typeMemory, queue)
        : OutputEvent(partitions, event, typeMemory, queue);
    simulations.push(simulation);
  });
  res.send(simulations);
}
