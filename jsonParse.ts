//Creates a wrapper over json.parse() to handle "undefined"
const improvedJSONParse = <T>(value: string | null) : T | undefined {

    try {
        return value === "undefined" ? undefined : JSON.parse(value ?? '');
    }
    catch(e) {
        console.log(e);
        return undefined;
    }
}

improvedJSONParse(null); //undefined
improvedJSONParse('undefined'); //undefined