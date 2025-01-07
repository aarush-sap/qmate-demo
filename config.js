// for more information visit https://pages.github.tools.sap/sProcurement/qmate-profiles/

const path = require("path");
const qmateProfiles = require(path.resolve(process.env.QMATE_PROFILES));
const profile = qmateProfiles.report;
// const profile = qmateProfiles.reportHeadless;

exports.config = qmateProfiles.merge(profile, {
  params: {
    import: {
      data: "./data/"
    }
  },

  baseUrl: "https://sapui5.hana.ondemand.com",

  specs: [[
    //"specs/01_ERX.spec.js", 
    "specs/shopAdministrationTool.spec.js"
  ]]
});
