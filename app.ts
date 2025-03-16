import { log } from "console";
import { readFileSync, writeFileSync, readFile, writeFile } from "fs";


const data=readFile('./Content/Huh/Brotha.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    log(data);
});

log(data)