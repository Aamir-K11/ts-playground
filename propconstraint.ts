
//This is a constraint based on property which means that only those subsets are allowed which have the 
//length property and those are string and arrays.
function longest<T extends { length : number }>(arg1: T, arg2: T) {

    if(arg1.length > arg2.length) return arg1;

    return arg2;
}

longest([1, 2], [2, 3]);

longest("alice", "bob");

//Throws error because number doesn't have a length property.
longest(1, 2);