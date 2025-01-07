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

  baseUrl: "https://sss-ccc.wdf.sap.corp/ui",

  specs: [[
    "specs/01_template.spec.js", 
    "specs/02_template.spec.js"
  ]]
});
