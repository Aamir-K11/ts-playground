const name = "Aamir"; //Inferred as literal type 'Aamir' than string.


//But literal type inference doesn't work that way for array and objects.

/*
const people = [
    "Aamir",
    "Aaron",
    "Shawn"
]; 

const positions = {
 product: true,
 dev: true
}
*/


//Instead we can use "as const" to do literal type inference. Literal type inference helps us in auto-complete and helps us use the members
// of arrays and objects without accidentally introducing new values.

//The type is read-only ["Aamir", "Aaron", "Shawn"]
const people = [
    "Aamir",
    "Aaron",
    "Shawn"
] as const;

const positions = {
    product: true,
    dev: false
} as const;