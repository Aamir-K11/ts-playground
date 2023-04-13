type OmitKeys<T extends {}, K extends keyof T> = { [P in keyof T as P extends K ? never: P]: T[P]  };



type Person = {
    id: string,
    firstName: string,
    lastName: string
}

type ID = OmitKeys<Person, 'firstName' | 'lastName'>

