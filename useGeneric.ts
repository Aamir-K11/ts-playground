interface Animal {
    name: string
}

interface Human {
    firstName: string,
    lastName: string
}

/*
Entity is a generic. Use generics when you don't know beforehand what types would be used. 
Or use generics when you internals of your function depends on knowing the types.
*/

function returnName<Entity extends Animal | Human >(entity: Entity) :  Entity extends Animal ? {animalName: string} : {humanName: string} {

    if('name' in entity) {
        return {
            animalName: entity.name
        }
    }

    return {
        humanName: `${entity.firstName} ${entity.lastName}`
    }
}

//We get humanName based on the parameter
returnName({
    firstName: 'Aamir',
    lastName: 'Khan'
})

//We get animalName based on the parameter
returnName({
    name: 'Tonny'
})