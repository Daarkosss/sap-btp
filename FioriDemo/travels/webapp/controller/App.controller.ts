import Controller from "sap/ui/core/mvc/Controller";
import Component from "../Component";

/**
 * @namespace ns.travels.controller
 */
export default class App extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        this.getView()?.addStyleClass((<Component> this.getOwnerComponent()).getContentDensityClass())
    }
}