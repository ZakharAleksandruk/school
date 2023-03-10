import fsPromises from "fs/promises";
import path from "path";

const fetchPages = async () => {
    const filePath = path.join(process.cwd(), "data.json");
    const jsonData = await fsPromises.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
};

export default fetchPages;
