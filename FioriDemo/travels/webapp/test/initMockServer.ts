import mockserver from "../localService/mockserver";

// initialize the mock server
console.log("test");
mockserver.init();

// initialize the embedded component on the HTML page
import("sap/ui/core/ComponentSupport");