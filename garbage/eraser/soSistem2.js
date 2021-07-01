//Required data
function required(idMemory){
    memory = mysql.get('select * from tmemory where idMemory')
    typeMemory = mysql.get('select name from ttype where idMemory')
    events = mysql.get('select * from tevent where idMemory')
    partitions = mysql.get('select * from tpartition where idMemory')
    return {memory,typeMemory,events,partitions}
}