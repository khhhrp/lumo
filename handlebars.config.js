import { resolve } from "path";
import { dirname } from "path";

const __dirname = dirname(new URL(import.meta.url).pathname);

export default {
  partialDirectory: resolve(__dirname, "src/partials"),
};
