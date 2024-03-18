const {
  share,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");
module.exports = withModuleFederationPlugin({
  name: "mfe2",
  exposes: {
    "./Chart1": "./mfe2/src/app/chart1/chart1.component.ts",
    "./Chart2": "./mfe2/src/app/chart2/chart2.component.ts",
    "./Chart3": "./mfe2/src/app/chart3/chart3.component.ts",
    "./Chart4": "./mfe2/src/app/chart4/chart4.component.ts",
  },
  shared: share({
    "@angular/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
  }),
});
