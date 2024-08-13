import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  output: {
    target: 'node',
    minify: false,
  },
  // tools: {
  //   rspack(config) {
  //     if(config.output){
  //       config.output.publicPath = ''
  //     }
  //   }
  // }
});
