const fs = require("fs");

function writeFile(path, content) {
  fs.writeFileSync(path, content, function (error) {
    if (error) {
      console.log(error);
    }
    console.log("success!");
  });
}

module.exports = {
  writeFile,
};
