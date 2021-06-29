sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("findchildcontrol.controller.View1", {
			onInit: function () {

            },
            onPress : function(){
        
                var oChild = this.getView().byId("idChild").getValue();
                debugger;
                try
                    {
                        var obj = (Function('return new ' + oChild))()
                    }
                    catch(ex)
                    {
                        this.getView().byId("idMsg").setText(ex);
                        process.exit(0);
                    }
                
                    if (obj instanceof sap.ui.core.Element){
                        this.getView().byId("idMsg").setText("You can use this control within SimpleForm");
                    }
                    else{
                        this.getView().byId("idMsg").setText("You can not use this control within SimpleForm");
                    }
            }
		});
	});
