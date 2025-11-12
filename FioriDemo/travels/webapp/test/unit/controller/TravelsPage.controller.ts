/*global QUnit*/
import Controller from "ns/travels/controller/Travels.controller";

QUnit.module("Travels Controller");

QUnit.test("I should test the Travels controller", function (assert: Assert) {
	const oAppController = new Controller("Travels");
	oAppController.onInit();
	assert.ok(oAppController);
});