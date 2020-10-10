import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import minifyHTML from "rollup-plugin-minify-html-literals";
import copy from "rollup-plugin-copy";
import commonjs from "rollup-plugin-commonjs";

const babelConfig = {
  babelrc: false,
  ...{
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            ie: "11"
          }
        }
      ]
    ]
  }
};

const filesizeConfig = {
  showGzippedSize: true,
  showBrotliSize: false,
  showMinifiedSize: false
};

const copyConfig = {
  targets: [
    { src: "node_modules/systemjs/dist/s.min.js", dest: "_site/js/systemjs/dist" }
  ]
};

const configs = [
  // The main JavaScript bundle for older browsers that don't support
  // JavaScript modules or ES2015+.
  {
    input: ["js/index.js"],
    output: {
      dir: "_site/js",
      format: "systemjs"
    },
    plugins: [minifyHTML(), babel(babelConfig), resolve(), copy(copyConfig)],
    preserveEntrySignatures: false
  },
  {
    input: "js/babel-polyfills-nomodule.js",
    output: {
      file: "_site/js/babel-polyfills-nomodule.js",
      format: "iife"
    },
    plugins: [commonjs({ include: ["node_modules/**"] }), resolve()]
  }
];

for (const config of configs) {
  if (process.env.NODE_ENV !== "development") {
    config.plugins.push(terser());
  }
  config.plugins.push(filesize(filesizeConfig));
}

export default configs;
