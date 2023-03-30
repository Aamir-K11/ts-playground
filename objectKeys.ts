function objectKeys<Obj extends {}, K extends keyof Obj>(obj: Obj): K[] {

    return Object.keys(obj)as K[];
}

const foo = {
    "a": 1,
    "b": 2,
    "c": 3
}

objectKeys(foo);