(this["webpackJsonpmy-apps"]=this["webpackJsonpmy-apps"]||[]).push([[0],{180:function(e,t,a){e.exports={container:"Dashboard_container__3gC9U"}},181:function(e,t,a){e.exports=a.p+"static/media/chart-icon.4a80ad29.svg"},183:function(e,t,a){e.exports={graphContainer:"LineGraph_graphContainer__gypLd"}},193:function(e,t,a){e.exports=a(339)},336:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=336},337:function(e,t,a){},339:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(67),l=a.n(s),o=a(64),i=a(82),c=a(48),u=a(49),d=a(46),p=a(51),m=a(50),h=a(124),v=a.n(h),b=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).state={CPU_total:e.server.CPU_total,temp:e.server.temp,memory_used:e.server.memory_used,id:e.id,curTemp:e.server.current_temp,acTemp:e.server.acTemp,disabled:!0},n.onChangeInputValue=n.onChangeInputValue.bind(Object(d.a)(n)),n.HandleOnUpdate=n.HandleOnUpdate.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state.curTemp);var t=setInterval((function(){e.state.curTemp>e.state.acTemp?e.setState({curTemp:e.state.curTemp-1}):clearInterval(t)}),1e3)}},{key:"onChangeInputValue",value:function(e){var t;this.setState((t={},Object(i.a)(t,e.target.name,e.target.value),Object(i.a)(t,"disabled",!1),t))}},{key:"HandleOnUpdate",value:function(){var e=this;this.setState({disabled:!0},(function(){var t={id:e.state.id,CPU_total:e.state.CPU_total,temp:e.state.temp,memory_used:e.state.memory_used};e.props.onChangeUpdate(t)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"Card_button"},r.a.createElement("input",{type:"button",disabled:this.state.disabled,value:"Update",onClick:this.HandleOnUpdate}),r.a.createElement("input",{type:"button",value:"Delete",onClick:function(){return e.props.onDeleteButton(e.state.id)}})),r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"Current Temperature : ",this.state.curTemp),r.a.createElement("h4",null,"AC Tempeature : ",this.state.acTemp),r.a.createElement("label",{for:""},"CPU_TOTAL : "),r.a.createElement("input",{type:"number",step:"0.01",min:"0.01",max:"6.0",name:"CPU_total",value:this.state.CPU_total,onChange:function(t){return e.onChangeInputValue(t)}}),r.a.createElement("br",null),r.a.createElement("label",{for:""},"Memory Used : "),r.a.createElement("input",{type:"number",required:!0,step:"0.01",min:"0.01",max:"6.0",name:"memory_used",value:this.state.memory_used,onChange:function(t){return e.onChangeInputValue(t)}}),r.a.createElement("br",null),r.a.createElement("label",{for:""},"Room Tempeature : "),r.a.createElement("input",{type:"number",required:!0,step:"0.1",min:"18.0",max:"50.0",name:"temp",value:this.state.temp,onChange:function(t){return e.onChangeInputValue(t)}})),r.a.createElement("div",{className:"idplacement"},r.a.createElement("h1",null,this.props.id)))}}]),a}(r.a.Component);a(346),a(184),a(347);var f,g=function(){return r.a.createElement("header",{className:"navbar"},"Smart Server Cooling System")},y=(r.a.Component,a(180)),C=a.n(y),O=a(181),E=a.n(O),_=a(103),U=a.n(_),T=a(183),j=a.n(T);U.a.defaults.global.defaultFontFamily="'PT Sans', sans-serif",U.a.defaults.global.legend.display=!1;var A=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).chartRef=r.a.createRef(),e.buildChart=function(){var t=e.chartRef.current.getContext("2d"),a=e.props,n=a.data,r=a.average,s=a.labels;"undefined"!==typeof f&&f.destroy(),f=new U.a(t,{type:"line",data:{labels:s,datasets:[{fill:"origin"},{label:"1.3kwh Constant",data:n,fill:!1,borderColor:"#6610f2"},{fill:"1"},{label:"Current Consumption in Kwh",data:r,fill:!0,borderColor:"#E0E0E0"}]},options:{title:{display:!0,text:"Comparsion of Electricity Cosumptions"},plugins:{filler:{propagate:!0}}}})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.buildChart()}},{key:"componentDidUpdate",value:function(){this.buildChart()}},{key:"render",value:function(){return r.a.createElement("div",{className:j.a.graphContainer},r.a.createElement("canvas",{id:"myChart",ref:this.chartRef}))}}]),a}(n.Component),k=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:e.props.const,average:e.props.average,labels:e.props.labels},e}return Object(u.a)(a,[{key:"render",value:function(){console.log("Average",this.state.average),console.log("Labels",this.state.labels),console.log("Data",this.state.data);var e=this.state,t=e.data,a=e.average,n=e.labels;return r.a.createElement("div",{className:C.a.container},r.a.createElement("header",null,r.a.createElement("img",{src:E.a,alt:"bar chart icon"}),r.a.createElement("h1",null,"Current Saving is : ",this.props.savings.toFixed(2),"% in ",this.props.days," Days")),r.a.createElement("h2",null,"Number of Servers : ",this.props.count),r.a.createElement(A,{data:t,average:a,labels:n}))}}]),a}(n.Component),D=(a(337),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).v=0,e.state={servers:[],labels:[0],average:[1.3],const:[1.3],total:0,total_used:0,total_saving:0,AddUpdatePanel:!1,CPU_TOTAL:0,memory_used:0,temp:0,CoolerTemperature:"OFF"},e.handleAddUpdate=e.handleAddUpdate.bind(Object(d.a)(e)),e.onAdditionOfData=e.onAdditionOfData.bind(Object(d.a)(e)),e.addToStateArray=e.addToStateArray.bind(Object(d.a)(e)),e.onDeleteButton=e.onDeleteButton.bind(Object(d.a)(e)),e.onChangeUpdate=e.onChangeUpdate.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"handleAddUpdate",value:function(){this.setState((function(e){return{AddUpdatePanel:!e.AddUpdatePanel}}))}},{key:"onAdditionOfData",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"newtonLaw",value:function(e,t){return t-.4*(e-t)}},{key:"calculateReduce",value:function(e){if(e-18<=0)return 1.3;var t=e-18;return t*=3.5,1.3*(1-(t/=100))}},{key:"calculateSavings",value:function(e){var t=this.state.total+1.3;return(t-(this.state.total_used+e))/t*100}},{key:"addToStateArray",value:function(e){var t=this,a={CPU_total:this.state.CPU_TOTAL,temp:this.state.temp,memory_used:this.state.memory_used};v.a.post("predict",a).then((function(e){var n=e.data;a.current_temp=n,a.acTemp=t.newtonLaw(n,t.state.temp);var r=t.calculateReduce(a.acTemp),s=t.state.labels.length,l=t.calculateSavings(r);t.setState({servers:[].concat(Object(o.a)(t.state.servers),[a]),labels:[].concat(Object(o.a)(t.state.labels),[s]),const:[].concat(Object(o.a)(t.state.const),[1.3]),average:[].concat(Object(o.a)(t.state.average),[r]),total:t.state.total+1.3,total_used:t.state.total_used+r,total_saving:l})})).catch((function(e){console.log(e.response)})),e.preventDefault()}},{key:"onDeleteButton",value:function(e){var t=this.state.servers;t.splice(e,1),this.setState({servers:t,CoolerTemperature:t.length>0?this.state.CoolerTemperature:"OFF"})}},{key:"onChangeUpdate",value:function(e){var t,a,n,r=this,s=this.state.servers;s[e.id]=e,v.a.post("multiple",s).then((function(l){l.data.forEach((function(l,o){s[o].current_temp=l,s[o].acTemp=r.newtonLaw(l,e.temp),t=r.calculateReduce(s[o].acTemp),a=r.state.labels.length,n=r.calculateSavings(t)})),r.setState({servers:s,labels:[].concat(Object(o.a)(r.state.labels),[a]),const:[].concat(Object(o.a)(r.state.const),[1.3]),average:[].concat(Object(o.a)(r.state.average),[t]),total:r.state.total+1.3,total_used:r.state.total_used+t,total_saving:n})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;console.log(this.state.servers);var t={display:"none"},a=this.state.AddUpdatePanel?"Return Back":"Update/Add",n=[];return this.state.servers.forEach((function(t,a){n.push(r.a.createElement(b,{key:e.v,id:a,server:t,onDeleteButton:function(t){return e.onDeleteButton(t)},onChangeUpdate:function(t){return e.onChangeUpdate(t)}})),e.v+=1})),r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{style:this.state.AddUpdatePanel?t:null},r.a.createElement(k,{key:this.v,savings:this.state.total_saving,days:this.state.labels.length-1,count:this.state.servers.length,labels:this.state.labels,const:this.state.const,average:this.state.average})),r.a.createElement("div",{style:this.state.AddUpdatePanel?null:t,className:"server-list"},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.addToStateArray},r.a.createElement("input",{type:"number",required:!0,step:"0.01",min:"0.01",name:"CPU_TOTAL",placeholder:"CPU_TOTAL",onChange:this.onAdditionOfData}),r.a.createElement("input",{type:"number",required:!0,step:"0.01",min:"0.01",name:"memory_used",placeholder:"Memory Used",onChange:this.onAdditionOfData}),r.a.createElement("input",{type:"number",required:!0,step:"0.01",min:"0",name:"temp",placeholder:"Add Tempeature in \xb0C",onChange:this.onAdditionOfData}),r.a.createElement("input",{type:"submit",value:"Add"}))),n),r.a.createElement("div",{style:this.state.AddUpdatePanel?{marginTop:"20px"}:null,className:"button-style"},r.a.createElement("button",{onClick:this.handleAddUpdate},a)))}}]),a}(r.a.Component));l.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.823ca85a.chunk.js.map