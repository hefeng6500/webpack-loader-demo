const { writeFile } = require("./utils/index.js");

async function loader(source) {
  const callback = this.async();
  const implementation = require("less");
  let result;

  try {
    result = await implementation.render(source);
  } catch (error) {
    console.log(error);
  }

  const { css, imports } = result;

  console.log("css", css);
  console.log("imports", imports);

  writeFile("./test.css", css);

  callback(null, css);
}

module.exports = loader;
