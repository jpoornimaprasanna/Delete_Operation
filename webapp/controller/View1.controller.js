sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ElementBinding.Element_Binding.controller.View1", {
		getEmpData: function (oEvent) {
			/*	var oItem = oEvent.getSource();
	var model=this.getView().getModel("details");
//	var path = oEvent.getSource();
	//var path1 = path.getParent();
	var text = oEvent.getParameters().listItem.getBindingContext("details").getObject();

		// Routing 
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var oObj=oEvent.getParameter("listItem").getBindingContext("details").getPath();
			oRouter.navTo("View2" , { 
			//	obj:text,
			obj:oObj.substr(11)
				
				
			});*/

			/*	var oSelectedItem = oEvent.getParamater("items");*/
			var oSelectedItem = oEvent.getParameters("Items").listItem;
			var oContext = oSelectedItem.getBindingContext();
			/*var sPath = oContext.getPath();*/
			var sPath = oEvent.getParameters("Items").listItem.getBindingContextPath();
			var oPanel = this.getView().byId("myPanel");
			oPanel.bindElement("details>"+sPath);
			oPanel.setVisible(true);
		},
		onDelete: function(oEvent){
			var sPath = oEvent.getParameters("Items").listItem.getBindingContextPath();
			var index = parseInt(sPath.substring(sPath.lastIndexOf('/')+1));
			/*var arrLngth = this.getView().getModel("details").oData.Employees.length;*/
			var array = this.getView().getModel("details").oData.Employees;
			var del = array.splice(index,1);
			
			this.getView().getModel("details").setProperty("/Employees",array);
		
		/*	this.getView().getModel("details").oData.Employees.refresh();
		*/
		
		}
	});
});