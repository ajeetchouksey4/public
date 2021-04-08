const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "commonUI"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        // name: "commonUI",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/common-ui/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        remotes: {
            "ruleEngine": "ruleEngine@http://localhost:4200/ruleEngineRemoteEntry.js",
            "workflowEngine": "workflowEngine@http://localhost:4400/workflowEngineRemoteEntry.js",
            "mfe1": "mfe1@http://localhost:4500/mfe1RemoteEntry.js",

        },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true }, 
          "@angular/common": { singleton: true, strictVersion: true }, 
          "@angular/router": { singleton: true, strictVersion: true },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin(),
  ],
};
