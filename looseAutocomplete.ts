//Defining it this way looses the autocomplete feature because the universal set of string take over. 
//type IconSize = 'sm' | 'xs' | string;

type IconSize = LooseAutocomplete<'sm' | 'lg'>;

//Defines a subset of T and a disjoint set of all the strings.
type LooseAutocomplete<T extends string> = T | Omit<T, string>;

const iconSize : IconSize = 'sm';