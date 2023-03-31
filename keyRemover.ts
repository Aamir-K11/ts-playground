//Generics are locked in the execution context just as variables do.
//So the Key Generic will propagate to the inner function as well.
const makeKeyRemover = <Key extends string>(key: Key[]) => <Obj>(obj: Obj): Omit<Obj, Key> => {
        return {} as any;
} 

const keyRemover = makeKeyRemover(["a", "b"]);

const dummy = keyRemover({"a": 1, "b":2, "c":3});
