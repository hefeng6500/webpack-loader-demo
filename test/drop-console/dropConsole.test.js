/**
 * @jest-environment node
 */
import compiler from "./compiler.js";
import fs from "fs";
import path from "path";

test("Drop JavaScript Console", async () => {
  const stats = await compiler("index.js");
  const output = stats.toJson({ source: true }).modules[0].source;
  const name = path.resolve(
    __dirname,
    "../../test/drop-console/drop-console.js"
  );

  writeFile(name, output);
});

function writeFile(name, content) {
  fs.writeFile(name, content, function (error) {
    if (error) {
      console.log(error);
    }
    console.log("success!");
  });
}
