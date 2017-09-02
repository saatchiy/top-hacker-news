//////////////////////////////////////////////////////////
//  Common paths module (webpack.academy)
//////////////////////////////////////////////////////////
//  author: Jose Quinto - https://blog.josequinto.com
//////////////////////////////////////////////////////////

const resolve = require("path").resolve;
module.exports = {
    outputPath: resolve(__dirname, "../", "build"),
    contentBasePath: resolve(__dirname, "../", "public" ),
    srcPath: resolve(__dirname, "../src"),
    stylesheetsPath: resolve(__dirname, "../src/gui"),
    corePath: resolve(__dirname, "../src/core"),
    guiPath: resolve(__dirname, "../src/gui"),
    bundleVisualizerStatsPath: "../dist/stats" // we can't use resolve here because the plugin fails
};
