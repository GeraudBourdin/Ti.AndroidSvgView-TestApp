function __processArg(t,e){var i=null;return t&&(i=t[e]||null,delete t[e]),i}function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="listView",this.args=arguments[0]||{},arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,e={};t.__views.listView=Ti.UI.createWindow({title:"Demo: SVG + ListView",id:"listView"}),t.__views.listView&&t.addTopLevelView(t.__views.listView);var i={},r=[],s={type:"Alloy.Globals.uiModules.SvgView",bindId:"svgImage",properties:{bindId:"svgImage"}};r.push(s);var n={properties:{name:"customTemplate"},childTemplates:r};i.customTemplate=n;var o=[];t.__views.__alloyId10={svgImage:{image:"/1.svg"},properties:{id:"__alloyId10"}},o.push(t.__views.__alloyId10),t.__views.__alloyId11={svgImage:{image:"/2.svg"},properties:{id:"__alloyId11"}},o.push(t.__views.__alloyId11),t.__views.__alloyId12={svgImage:{image:"/3.svg"},properties:{id:"__alloyId12"}},o.push(t.__views.__alloyId12),t.__views.__alloyId7=Ti.UI.createListSection({id:"__alloyId7"}),t.__views.__alloyId7.items=o;var a=[];a.push(t.__views.__alloyId7),t.__views.__alloyId0=Ti.UI.createListView({sections:a,templates:i,defaultItemTemplate:"customTemplate",id:"__alloyId0"}),t.__views.listView.add(t.__views.__alloyId0),e.destroy=function(){},_.extend(t,t.__views);var l={createSvgView:function(t){var e=require("com.geraudbourdin.svgview");return e.createView(t)}};module.exports=l,Alloy.Globals.uiModules=l,_.extend(t,e)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;