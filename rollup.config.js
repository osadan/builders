import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const external = [
  'react',
  'react-dom'
];

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    sourcemap: true,
    globals:{
       react: 'React' ,
      'react-dom': 'ReactDOM' ,
      '@freightos/design-system': 'FDS'
    }
  },
  external,
  plugins: [
    nodeResolve({
      extensions: [".js",".jsx"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    babel({
      exclude: 'node_modules/**',
      presets: [
        '@babel/env',
        "@babel/preset-react"
      ],
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public"],
      host: "localhost",
      port: 3060,
    }),
    livereload({ watch: "dist" }),
  ]
};