import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
// import postcss from "rollup-plugin-postcss-modules";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import url from "rollup-plugin-url";
import { uglify } from "rollup-plugin-uglify";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

export default (input, packageMain, packageModule) => ({
  input: input || "index.ts",
  output: [
    {
      file: packageMain || pkg.main,
      format: "cjs",
      exports: "named",
      // plugins: [uglify()],
      sourcemap: true
    },
    {
      file: packageModule || pkg.module,
      format: "es",
      exports: "named",
      // plugins: [uglify()],
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    commonjs()
  ]
});
