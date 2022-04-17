/**
 * @jest-environment node
 */
import compiler from "./compiler.js";

test("Less compiler", async () => {
  const stats = await compiler("index.less");
  const output = stats.toJson({ source: true }).modules[0].source;

});
