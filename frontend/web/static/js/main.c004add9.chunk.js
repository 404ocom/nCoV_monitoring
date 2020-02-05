(this["webpackJsonpncov-analysis"]=this["webpackJsonpncov-analysis"]||[]).push([[0],{114:function(e,a,t){e.exports={label:"Partner_label__1Vm9x"}},136:function(e,a,t){e.exports=t(248)},247:function(e,a,t){},248:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(10),i=t.n(n),o=t(298),s=t(17),c=t(116),m=t.n(c),u=t(43),d=t.n(u),E=t(290),f=t(282),g=t(286),p=t(287),v=t(250),b=t(297),h=t(295),_=t(288),y=t(62),z=t.n(y),x=t(256),T=t(296),W=t(254),V=t(255),O=t(251),C=t(109),P=t.n(C),k=function(e){var a=e.title,t=e.form,n=e.address,i=t.getFieldDecorator,o=t.getFieldValue,c=t.getFieldError,m=t.resetFields,u=Object(l.useState)(""),d=Object(s.a)(u,2),y=d[0],C=d[1];Object(l.useEffect)((function(){var e=P.a.parse(window.location.search.slice(1));C(e.get)}),[]);return r.a.createElement(f.a,{style:{marginBottom:10}},r.a.createElement(g.a,{title:a||"\u57fa\u672c\u4fe1\u606f"}),r.a.createElement(p.a,null,r.a.createElement(v.a,{fullWidth:!0,size:"small",error:!!c("type")},i("type",{initialValue:"",trigger:"onChange",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u51fa\u884c\u72b6\u6001"}],validateFirst:!0})(r.a.createElement(b.a,{row:!0},r.a.createElement(_.a,{value:"0",control:r.a.createElement(h.a,{size:"small",color:"primary"}),classes:{labelPlacementStart:z.a.label},label:"\u8fdb\u5165",labelPlacement:"start"}),r.a.createElement(_.a,{value:"1",control:r.a.createElement(h.a,{size:"small",color:"primary"}),label:"\u5916\u51fa",labelPlacement:"start"}))),r.a.createElement(O.a,null,c("type"))),i("name",{initialValue:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d"},{validator:function(e,a,t){if(a.length<=8)return t();t("\u59d3\u540d\u4e0d\u5f97\u8d85\u8fc78\u4e2a\u5b57\u7b26")}}],validateTrigger:"onBlur"})(r.a.createElement(E.a,{error:!!c("name"),helperText:c("name"),variant:"outlined",size:"small",fullWidth:!0,label:"\u8bf7\u586b\u5199\u60a8\u7684\u59d3\u540d\uff08\u5fc5\u586b\uff09"})),r.a.createElement(v.a,{fullWidth:!0,size:"small"},i("card",{initialValue:"0",trigger:"onChange"})(r.a.createElement(b.a,{name:"position",row:!0,onChange:function(){m(["card_detail"])}},r.a.createElement(_.a,{value:"0",control:r.a.createElement(h.a,{size:"small",color:"primary"}),classes:{labelPlacementStart:z.a.label},label:"\u8eab\u4efd\u8bc1",labelPlacement:"start"}),r.a.createElement(_.a,{value:"1",control:r.a.createElement(h.a,{size:"small",color:"primary"}),label:"\u5176\u4ed6",labelPlacement:"start"})))),i("card_detail",{initialValue:"",rules:"0"===o("card")?[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u8eab\u4efd\u8bc1"},{pattern:/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,message:"\u8bf7\u8f93\u5165\u5408\u6cd5\u7684\u8eab\u4efd\u8bc1"}]:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u62a4\u7167/\u56de\u4e61\u8bc1/\u53f0\u80de\u8bc1\u53f7\u7801"}],validateTrigger:"onBlur"})(r.a.createElement(E.a,{error:!!c("card_detail"),helperText:c("card_detail"),variant:"outlined",size:"small",fullWidth:!0,label:"0"===o("card")?"\u586b\u519918\u4f4d\u8eab\u4efd\u8bc1\uff08\u5fc5\u586b\uff09":"\u586b\u5199\u62a4\u7167/\u56de\u4e61\u8bc1/\u53f0\u80de\u8bc1\u53f7\u7801\uff08\u5fc5\u586b\uff09"})),r.a.createElement(v.a,{size:"small",fullWidth:!0,error:!!c("address")},r.a.createElement(W.a,{id:"address",variant:"outlined",style:{backgroundColor:"#fff"}},"\u6240\u5c5e\u5730\u533a\uff08\u5fc5\u586b\uff09"),i("address",{initialValue:y||"",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4f60\u5f53\u524d\u7684\u6240\u5c5e\u5730\u533a"}],validateTrigger:"onChange"})(r.a.createElement(x.a,{labelId:"address",variant:"outlined"},n.map((function(e){return r.a.createElement(T.a,{value:""+e.id,key:e.id},e.label)})))),r.a.createElement(O.a,null,c("address"))),i("unit",{initialValue:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5355\u5143\u53f7\u53ca\u95e8\u724c\u53f7"}],validateTrigger:"onBlur"})(r.a.createElement(E.a,{error:!!c("unit"),helperText:c("unit"),variant:"outlined",size:"small",fullWidth:!0,label:"\u5355\u5143\u53f7\u53ca\u95e8\u724c\u53f7\uff08\u5fc5\u586b\uff09"})),i("phone",{initialValue:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"},{pattern:/^1[0123456789]\d{9}$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u624b\u673a\u53f7"}],validateTrigger:"onBlur"})(r.a.createElement(E.a,{type:"tel",error:!!c("phone"),helperText:c("phone"),variant:"outlined",size:"small",fullWidth:!0,label:"\u624b\u673a\u53f7\uff08\u5fc5\u586b\uff09"})),r.a.createElement(v.a,{size:"small",fullWidth:!0,error:!!c("transport")},r.a.createElement(W.a,{id:"transport",variant:"outlined",style:{backgroundColor:"#fff"}},"\u51fa\u884c\u65b9\u5f0f\uff08\u5fc5\u586b\uff09"),i("transport",{initialValue:"",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u51fa\u884c\u65b9\u5f0f"}],validateTrigger:"onChange"})(r.a.createElement(x.a,{labelId:"transport",variant:"outlined"},r.a.createElement(T.a,{value:"0"},"\u6c7d\u8f66"),r.a.createElement(T.a,{value:"1"},"\u5176\u4ed6"))),r.a.createElement(O.a,null,c("transport"))),"0"===o("transport")&&i("transport_detail",{initialValue:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8f66\u724c\u53f7"}],validateTrigger:"onBlur"})(r.a.createElement(E.a,{error:!!c("transport_detail"),helperText:c("transport_detail"),variant:"outlined",size:"small",fullWidth:!0,label:"\u8bf7\u8f93\u5165\u8f66\u724c\u53f7\uff08\u5fc5\u586b\uff09"})),r.a.createElement(v.a,{size:"small",fullWidth:!0,error:!!c("reason")},r.a.createElement(W.a,{id:"reason",variant:"outlined",style:{backgroundColor:"#fff"}},"\u5916\u51fa\u4e8b\u7531\uff08\u5fc5\u586b\uff09"),i("reason",{initialValue:"",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5916\u51fa\u4e8b\u7531"}],validateTrigger:"onChange"})(r.a.createElement(x.a,{labelId:"reason",variant:"outlined"},r.a.createElement(T.a,{value:"0"},"\u91c7\u8d2d"),r.a.createElement(T.a,{value:"1"},"\u5de5\u4f5c"),r.a.createElement(T.a,{value:"2"},"\u5176\u4ed6"))),r.a.createElement(O.a,null,c("reason"))),"2"===o("reason")&&i("reason_detail",{initialValue:""})(r.a.createElement(E.a,{error:!!c("reason_detail"),helperText:c("reason_detail"),variant:"outlined",size:"small",fullWidth:!0,label:"\u8bf7\u8f93\u5165\u5177\u4f53\u4e8b\u7531"})),r.a.createElement(v.a,{fullWidth:!0,size:"small",error:!!c("status")},r.a.createElement(V.a,{component:"legend"},"\u4f53\u6e29\u662f\u5426\u6b63\u5e38"),i("status",{initialValue:"",trigger:"onChange",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4f53\u6e29\u72b6\u6001"},{validator:function(e,a,t){if("0"===a)return t();t("\u4f53\u6e29\u5f02\u5e38\uff0c\u65e0\u6cd5\u51fa\u884c")}}],validateFirst:!0})(r.a.createElement(b.a,{row:!0},r.a.createElement(_.a,{value:"0",control:r.a.createElement(h.a,{size:"small",color:"primary"}),classes:{labelPlacementStart:z.a.label},label:"\u6b63\u5e38",labelPlacement:"start"}),r.a.createElement(_.a,{value:"1",control:r.a.createElement(h.a,{size:"small",color:"primary"}),label:"\u5f02\u5e38",labelPlacement:"start"}))),r.a.createElement(O.a,null,c("status")))))},q=t(117),j=t(289),F=t(115),w=t.n(F),B=t(114),S=t.n(B),N=function(e){var a=e.title,t=e.form,l=e.index,n=e.onDelete,i=t.getFieldDecorator,o=t.getFieldError;return r.a.createElement(f.a,{style:{marginBottom:10}},r.a.createElement(g.a,{title:a||"\u540c\u884c\u4eba\u5458",action:r.a.createElement(j.a,{size:"small",onClick:function(){return n(l)}},r.a.createElement(w.a,{fontSize:"small"}))}),r.a.createElement(p.a,null,i("name:".concat(l),{initialValue:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d"},{validator:function(e,a,t){if(a.length<=8)return t();t("\u59d3\u540d\u4e0d\u5f97\u8d85\u8fc78\u4e2a\u5b57\u7b26")}}],validateTrigger:"onBlur"})(r.a.createElement(E.a,{error:!!o("name:".concat(l)),helperText:o("name:".concat(l)),variant:"outlined",size:"small",fullWidth:!0,label:"\u8bf7\u586b\u5199\u60a8\u7684\u59d3\u540d\uff08\u5fc5\u586b\uff09"})),i("phone:".concat(l),{initialValue:"",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"},{pattern:/^1[0123456789]\d{9}$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u624b\u673a\u53f7"}],validateTrigger:"onBlur"})(r.a.createElement(E.a,{type:"tel",error:!!o("phone:".concat(l)),helperText:o("phone:".concat(l)),variant:"outlined",size:"small",fullWidth:!0,label:"\u624b\u673a\u53f7\uff08\u5fc5\u586b\uff09"})),r.a.createElement(v.a,{fullWidth:!0,size:"small",error:!!o("status:".concat(l))},r.a.createElement(V.a,{component:"legend"},"\u4f53\u6e29\u662f\u5426\u6b63\u5e38"),i("status:".concat(l),{initialValue:"",trigger:"onChange",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4f53\u6e29\u72b6\u6001"},{validator:function(e,a,t){if("0"===a)return t();t("\u4f53\u6e29\u5f02\u5e38\uff0c\u65e0\u6cd5\u51fa\u884c")}}]})(r.a.createElement(b.a,{row:!0},r.a.createElement(_.a,{value:"0",control:r.a.createElement(h.a,{size:"small",color:"primary"}),classes:{labelPlacementStart:S.a.label},label:"\u6b63\u5e38",labelPlacement:"start"}),r.a.createElement(_.a,{value:"1",control:r.a.createElement(h.a,{size:"small",color:"primary"}),label:"\u5f02\u5e38",labelPlacement:"start"}))),r.a.createElement(O.a,null,o("status:".concat(l))))))},I=t(293),D=t(64),L=t.n(D),J=t(292),$=t(291),Z=Object(l.memo)((function(e){var a=e.show,t=e.text;return a?r.a.createElement("div",{className:L.a.mask},r.a.createElement($.a,null),r.a.createElement("div",{className:L.a.loading},r.a.createElement(J.a,null),t&&r.a.createElement("p",{className:L.a.info},t))):null})),A=Object(q.a)()((function(e){var a=e.form,t=Object(l.useState)([]),n=Object(s.a)(t,2),i=n[0],c=n[1],u=a.validateFields,E=Object(l.useState)(!1),f=Object(s.a)(E,2),g=f[0],p=f[1],v=Object(l.useState)([]),b=Object(s.a)(v,2),h=b[0],_=b[1];Object(l.useEffect)((function(){setTimeout((function(){_([{id:12,label:"\u5475\u5475"}])}),2e3)}),[]);var y=function(e){var a=i.findIndex((function(a){return a===e})),t=i.slice();t.splice(a,1),c(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{show:g}),r.a.createElement(o.a,null),r.a.createElement("header",{className:d.a.header},r.a.createElement("h1",null,"\u65b0\u5bc6\u5e02\u5185\u75ab\u60c5\u51fa\u5165\u767b\u8bb0\u8868"),r.a.createElement("div",{className:d.a.tip},r.a.createElement(m.a,{color:"secondary"}),r.a.createElement("span",{className:d.a.info},"\u5e94\u75ab\u60c5\u9632\u63a7\u8981\u6c42\uff0c\u8bf7\u65b0\u5bc6\u5e02\u5185\u51fa\u884c\u4eba\u5458\u8fdb\u884c\u586b\u62a5\u767b\u8bb0\uff0c\u4e2a\u4eba\u4fe1\u606f\u4e0d\u4f1a\u5bf9\u5916\u6cc4\u9732\uff0c\u8bf7\u5982\u5b9e\u586b\u5199\u3002"))),r.a.createElement("main",{className:d.a.main},r.a.createElement(k,{title:"\u57fa\u672c\u4fe1\u606f",form:a,address:h}),i.map((function(e){return r.a.createElement(N,{form:a,key:e,index:e,onDelete:y})})),r.a.createElement(I.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){c((function(e){return e.concat(e[e.length-1]+1||0)}))},style:{marginBottom:4},size:"large"},"\u65b0\u589e\u540c\u884c\u4eba\u5458"),r.a.createElement(I.a,{variant:"contained",color:"secondary",fullWidth:!0,size:"large",onClick:function(){u((function(e,a){if(!e){var t=Object.keys(a),l=[];for(var r in t.forEach((function(e){if(e.indexOf("name:")>-1){var t=+e.split(":")[1];l.push({name:a[e],phone:a["phone:".concat(t)]})}})),a)r.indexOf(":")>-1&&delete a[r];a.partners=l,p(!0),console.log(a)}}))}},"\u63d0\u4ea4")))}));t(247);i.a.render(r.a.createElement(A,null),document.getElementById("root"))},43:function(e,a,t){e.exports={header:"app_header__2g4Pw",tip:"app_tip__3CsLJ",info:"app_info__3At5F",main:"app_main__1NOZK"}},62:function(e,a,t){e.exports={label:"Form_label__1Y_bT"}},64:function(e,a,t){e.exports={mask:"Loading_mask__2ZTdE",loading:"Loading_loading__38WPi",info:"Loading_info__2-Mlp"}}},[[136,1,2]]]);
//# sourceMappingURL=main.c004add9.chunk.js.map