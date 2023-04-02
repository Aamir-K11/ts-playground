type PickKeys<T, K extends keyof T> = {
    [P in keyof T as P extends K ? P : never ]: T[P]
}

type Robot = {
    ID: string,
    name: string,
    action: boolean
}

type RoboID = PickKeys<Robot, 'ID'>;