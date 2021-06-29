/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"find_child_control/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
