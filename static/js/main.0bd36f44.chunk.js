(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),s=n.n(c),l=n(1),o=n(2),i=n(4),u=n(3),d=(n(12),n(13),function(e){return fetch("".concat("https://mate-api.herokuapp.com/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))}),m=(n(14),function(e){var t=e.todos,n=e.titleFilter,a=e.selectedUserId,c=e.selectUser,s=e.inputHandler,l=e.selectHandler;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("div",{className:"search-bar"},r.a.createElement("label",{htmlFor:""},r.a.createElement("input",{className:"search-bar-input",placeholder:"Enter ToDo title",type:"text",value:n,onChange:s})),r.a.createElement("select",{onChange:l},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:!0},"Finished"),r.a.createElement("option",{value:!1},"Unfinished"))),r.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"TodoList__item TodoList__item--".concat(e.completed?"checked":"unchecked")},r.a.createElement("label",null,e.completed?r.a.createElement("input",{type:"checkbox",checked:!0,readOnly:!0}):r.a.createElement("input",{type:"checkbox",readOnly:!0}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:a===e.userId?"TodoList__user-button--selected button":"TodoList__user-button button",type:"button",onClick:function(){c(e.userId)}},"User\xa0#",e.userId))})))))}),p=(n(15),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedUser:{}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;d("".concat("users","/").concat(this.props.userId)).then((function(t){e.setState({selectedUser:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this;e.userId!==this.props.userId&&d("".concat("users","/").concat(this.props.userId)).then((function(e){t.setState({selectedUser:e})}))}},{key:"render",value:function(){var e=this.state.selectedUser;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user"," : #",e.id)),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone),r.a.createElement("button",{className:"CurrentUser__clear-btn",type:"button",onClick:this.props.clearUser},"Clear")))}}]),n}(r.a.Component)),h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,titleFilter:"",todoStatus:"all"},e.selectUser=function(t){t!==e.state.selectedUserId&&e.setState({selectedUserId:t})},e.clearUser=function(){e.setState({selectedUserId:0})},e.inputHandler=function(t){e.setState({titleFilter:t.target.value})},e.selectHandler=function(t){e.setState({todoStatus:t.target.value})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;d("todos").then((function(t){e.setState({todos:t})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId,a=e.titleFilter,c=e.todoStatus,s=t.filter((function(e){return!Object.values(e).includes(null)})).filter((function(e){return e.title.includes(a)})).filter((function(e){switch(c){case"all":case e.completed.toString():return!0;default:return!1}}));return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(m,{todos:s,titleFilter:a,selectedUserId:n,selectUser:this.selectUser,inputHandler:this.inputHandler,selectHandler:this.selectHandler})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(p,{userId:n,clearUser:this.clearUser}):"No user selected")))}}]),n}(r.a.Component);s.a.render(r.a.createElement(h,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.0bd36f44.chunk.js.map