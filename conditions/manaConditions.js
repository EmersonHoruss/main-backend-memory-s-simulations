// MANAGEMENT CONDITIONS
// MODULE CONSISTS IN: We select just the respectible condition depending the kind of memory

// HELPERS TO MEMORY
// let us to know the result of each memory
function conditionResult(condition, nameCondition) {
  return condition === false
    ? false
    : { condition: nameCondition, result: condition };
}

// STATIC MEMORY
// Main Function: let us to know with wich condition works a static memory
function conditionStaticMemory(sizeWork, freePartitions) {
  const condition = firstCondition(sizeWork, freePartitions);
  return conditionResult(condition, "first");
}
// DYNAMIC MEMORY
// Main Function: let us to know with wich condition works a dynamic memory
function conditionDynamicMemory(sizeWork, freePartitions) {
  let condition = conditionStaticMemory(sizeWork, freePartitions);
  if (condition !== false) return condition;
  condition = secondCondition(sizeWork, freePartitions);
  return conditionResult(condition, "second");
}

// RELOCATABLE DYNAMIC MEMORY
// Main Function: let us to know with wich condition works a relocatable dynamic memory
function conditionRelocatableDynamicMemory(sizeWork, freePartitions) {
  let condition = conditionDynamicMemory(sizeWork, freePartitions);
  if (condition !== false) return condition;
  condition = thirdCondition(sizeWork, freePartitions);
  return conditionResult(condition, "third");
}

// MAIN
function managementConditions(sizeWork, freePartitions, typeMemory) {
  return typeMemory === "static"
    ? conditionStaticMemory(sizeWork, freePartitions)
    : typeMemory === "dynamic"
    ? conditionDynamicMemory(sizeWork, freePartitions)
    : typeMemory === "relocatable"
    ? conditionRelocatableDynamicMemory(sizeWork, freePartitions)
    : false;
  // : "no recognize " + typeMemory + " in memory's type";
}
