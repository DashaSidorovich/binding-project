sap.ui.define([
		"zjblessons/bindingApp/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zjblessons.bindingApp.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);