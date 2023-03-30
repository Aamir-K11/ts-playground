//Generic type defined.
//FirstKey are all the keys inside the object
//SecondKey are all the keys inside object[firstKey] object
//Values are assigned the generic type. The computation happens on values.
//Remember that this is different than type derivation where only generic and types are involved.
function deepCopy<Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]>(obj: Obj, firstKey: FirstKey, secondKey: SecondKey) {
  
    return obj[firstKey][secondKey];
}

const foo = {
    "a": {
        "aa": true
    },
    "b": {
        "bb": "false"
    }
}

//Autocomplete feature & dynamic return type
const value = deepCopy(foo, "b", "bb");