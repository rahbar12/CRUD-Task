const fs = require("fs");
const path = require("path");
const routes = []
for(let folder of fs.readdirSync(__dirname))
{
    const pathToFolder = path.join(__dirname, folder)
    if (fs.lstatSync(pathToFolder).isDirectory())
    {
        routes.push(require(path.join(pathToFolder, "routes")))
    }
}

module.exports = routes