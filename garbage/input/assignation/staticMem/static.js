function static(params) {
  ({} = params);
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
