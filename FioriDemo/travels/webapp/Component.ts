import { createDeviceModel } from "./model/models";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import Control from "sap/ui/core/Control";
import XMLView from "sap/ui/core/mvc/XMLView";
import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace ns.travels
 */
export default class Component extends UIComponent {

	public static metadata = {
		manifest: "json",
        interfaces: [
            "sap.ui.core.IAsyncContentCreation"
        ]
	};

	public init() : void {
		// call the base component's init function
		super.init();

        const data = {
            recipient: {
                name: "World"
            }
        };
        const dataModel = new JSONModel(data);
        this.setModel(dataModel);

        const i18nModel = new ResourceModel({
            bundleName: "ns.travels.i18n.i18n"
        });
        this.setModel(i18nModel, "i18n");
        // set the device model
        this.setModel(createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();
	}

    createContent(): Control | Promise<Control | null> | null {
        return XMLView.create({
            "viewName": "ns.travels.view.App",
            "id": "app"
        })
    }
}