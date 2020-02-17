import * as config from "../../rollup.config";
import pkg from "./package.json";

export default config.default("index.ts", pkg.main, pkg.module);
