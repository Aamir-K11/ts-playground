
type Letters = 'a' | 'b' | 'c'; //This is a union type.

type RemoveLetter<Letters, Union> = Letters extends Union ? never : Letters; //Adding never to a union removes itself.

type ReplaceLetter<Letters, Union, Replacement> = Letters extends Union ? Replacement : Letters;

const a : RemoveLetter<Letters, 'c'> = 'a';

const d : ReplaceLetter<Letters, 'c', 'd'> = 'd';