"use strict";

describe("shopAdministrationTool - Sample Test for Shop Administration Tool", () => {
  // const data = util.data.getData("template") as TemplateScriptData;
  // const references = util.data.getData("references") as ReferencesData;

  it("Step 01: Navigate to URL", async () => {
      await common.navigation.navigateToUrl("https://sapui5.hana.ondemand.com/test-resources/sap/tnt/demokit/toolpageapp/webapp/index.html?sap-ui-theme=sap_fiori_3");
  });

  it("Step 02: Click on the Settings button", async () => {
      const selector = {
          "elementProperties": {
              "viewName": "sap.ui.demo.toolpageapp.view.App",
              "metadata": "sap.tnt.NavigationListItem",
              "bindingContextPath": "/navigation/1"
          }
      };
      await ui5.userInteraction.click(selector);
  });

  it("Step 03: Fill First Name", async () => {
      const selector = {
          "elementProperties": {
              "viewName": "sap.ui.demo.toolpageapp.view.settings.DetailSettings",
              "metadata": "sap.m.Input",
              "id": "*firstNameInput"
          }
      };
      await ui5.userInteraction.fill(selector, "John");
  });

  it("Step 04: Fill Last Name", async () => {
      const selector = {
          "elementProperties": {
              "viewName": "sap.ui.demo.toolpageapp.view.settings.DetailSettings",
              "metadata": "sap.m.Input",
              "id": "*lastNameInput"
          }
      };
      await ui5.userInteraction.fill(selector, "Doe");
  });

  it("Step 05: Click Save", async () => {
      const selector = {
          "elementProperties": {
              "viewName": "sap.ui.demo.toolpageapp.view.settings.DetailSettings",
              "metadata": "sap.uxap.ObjectPageHeaderActionButton",
              "id": "*save"
          }
      };
      await ui5.userInteraction.click(selector);
  });

  it("Step 06: Verify Message Toast", async () => {
      await ui5.assertion.expectMessageToastTextToBe("Save was clicked");
  });
});
