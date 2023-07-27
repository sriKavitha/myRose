const fs = require("node:fs/promises");
class Utils {

  // read jsonfile
  async readData() {
    const data = await fs.readFile("./test/data/creds.json");
    
    var userData = [];
    try {
       userData = JSON.parse(data);
    } catch (error) {
      console.log("File not found", error);
    }
    return userData;
  }

 
}
module.exports = new Utils();
