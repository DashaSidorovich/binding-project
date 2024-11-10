/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/bindingApp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/bindingApp/test/integration/pages/Worklist",
	"zjblessons/bindingApp/test/integration/pages/Object",
	"zjblessons/bindingApp/test/integration/pages/NotFound",
	"zjblessons/bindingApp/test/integration/pages/Browser",
	"zjblessons/bindingApp/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.bindingApp.view."
	});

	sap.ui.require([
		"zjblessons/bindingApp/test/integration/WorklistJourney",
		"zjblessons/bindingApp/test/integration/ObjectJourney",
		"zjblessons/bindingApp/test/integration/NavigationJourney",
		"zjblessons/bindingApp/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});