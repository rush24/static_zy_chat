webpackJsonp([1,2],[,,,,,,,,function(e,t,r){"use strict";var s=r(2);r.d(t,"a",function(){return n});var n=new s.default},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";var s=r(100),n=r.n(s),a=r(69),o=r.n(a),i="http://112.74.36.107:9000",u="http://git.oschina.net/uploads/39/516039_vengeancehuang.png",c=o.a.create({baseURL:i,withCredentials:!0}),l=function(e){n()(e.prototype,{$request:{get:function(){return c}},$hostname:{get:function(){return i}},$avatar:{get:function(){return u}},$socket:{get:function(){return socket}}})};t.a=l},function(e,t,r){"use strict";var s=r(2),n=r(171),a=r(97);s.default.use(n.a);var o=new n.a({routes:a.a});o.beforeEach(function(e,t,r){"/login"==e.path&&sessionStorage.removeItem("user"),JSON.parse(sessionStorage.getItem("user"))||"/login"==e.path||"/register"==e.path?r():r({path:"/login"})}),t.a=o},function(e,t,r){"use strict";var s=r(2),n=r(173),a=r(99),o=r(98);s.default.use(n.a),t.a=new n.a.Store({state:a.a,mutations:o.a})},function(e,t){!function(){Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in t)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[r]:("00"+t[r]).substr((""+t[r]).length)));return e},Array.prototype.remove=function(e,t){var r=this.slice((t||e)+1||this.length);return this.length=e<0?this.length+e:e,this.push.apply(this,r)}}()},,,function(e,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(8);t.default={computed:{items:function e(){var e=this.$root.msgs[this.$store.state.currUser];return e&&e.sort(function(e,t){return e.create_at-t.create_at}),e},defaultAvatar:function(){return this.$avatar},self:function(){return JSON.parse(sessionStorage.getItem("user")).user_name}},filters:{filterUsers:function(){},filterDate:function(e){return new Date(1e3*e).Format("yyyy-MM-dd hh:mm:ss")}},methods:{del:function(e,t){console.log(e,t);var r=this.items;for(var n in r)if(r[n].id==t){s.a.$emit("send",{type:"delete_message",friend_name:r[n].from_user,id:r[n].id}),r.splice(n,1);break}}},directives:{}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(8);t.default={data:function(){return{content:""}},methods:{enter:function(e){13===e.keyCode&&this.content.length&&(s.a.$emit("send",{type:"send_message",friend_name:this.$store.state.currUser,content:this.content}),this.content="")}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{logout:function(){var e=this;this.$confirm("退出登录?","提示",{}).then(function(){sessionStorage.removeItem("user"),e.$router.push("/login")}).catch(function(){})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{target:""}},computed:{user:function(){return JSON.parse(sessionStorage.getItem("user"))},defaultAvatar:function(){return this.$avatar}},methods:{enter:function(e){var t=this;13===e.keyCode&&this.target.length>0&&this.$request.get("/api/find_friend/"+this.target).then(function(e){var r=e.data;r&&t.$store.state.users.push({user_name:r.user_name})}).catch(function(e){t.$alert("该用户不存在","提示",{})})}},mounted:function(){}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(8);t.default={computed:{users:function(){return this.$store.state.users},currUser:function(){return this.$store.state.currUser},defaultAvatar:function(){return this.$avatar}},methods:{selectChat:function(e,t){if(e){this.$store.state.currUser=e;var r=this.$root.msgs[e];(null==r||r.length<=0)&&s.a.$emit("send",{type:"get_messages",friend_name:e});var n=this.$store.state.users[t];n.unread_count>0&&(n.unread_count=0,s.a.$emit("send",{type:"read_message",friend_name:e}))}},getFriends:function(){var e=this;this.$request.get("/api/friends").then(function(t){console.log(t);var r=t.data;r&&e.$store.commit("storeTalkers",r)}).catch(function(t){e.$alert("获取聊天列表失败","提示",{})})}},mounted:function(){this.selectChat(this.$store.state.currUser),this.getFriends()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(157),n=r.n(s),a=r(158),o=r.n(a),i=r(156),u=r.n(i),c=r(154),l=r.n(c),f=r(155),d=r.n(f);t.default={components:{userCard:n.a,userList:o.a,chatHeader:u.a,chatContent:l.a,chatEntry:d.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(11),n=r.n(s);t.default={data:function(){return{logining:!1,form:{user_name:"",password:""},rules:{user_name:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.logining=!0,e.$request.post("/api/login",e.form).then(function(t){var r=t.data;r&&"success"==r.message&&(sessionStorage.setItem("user",n()(e.form)),e.$router.push({path:"/home"})),e.logining=!1}).catch(function(t){return e.logining=!1,e.$alert("账号密码不正确","提示",{}),console.error(t),!1})})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(11),n=r.n(s);t.default={data:function(){return{logining:!1,form:{user_name:"",password:""},rules:{user_name:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{register:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.logining=!0;e.form;e.$request.post("/api/register",e.form).then(function(t){var r=t.data;r&&r.user_name&&r.user_name==e.form.user_name&&(sessionStorage.setItem("user",n()(e.form)),e.$router.push({path:"/home"})),e.logining=!1}).catch(function(t){return e.$alert("用户已存在","提示",{}),console.error(t),e.logining=!1,!1})})}}}},function(e,t,r){"use strict";var s=r(153),n=r.n(s),a=r(159),o=r.n(a),i=r(160),u=r.n(i),c=r(161),l=r.n(c),f=[{path:"/",component:n.a,children:[{path:"",redirect:"/home"},{path:"/home",component:o.a},{path:"/login",component:u.a},{path:"/register",component:l.a}]}];t.a=f},function(e,t,r){"use strict";t.a={storeTalkers:function(e,t){console.log(t),t&&(e.users=t,t.length>0&&(e.currUser=e.users[0].user_name))},selectChat:function(e,t){e.currUser=t;for(var r=e.talkers,s=0;s<r.length;s++)if(e.currUser==r[s].user_name)return void(e.curMsgs=r[s].last_msg)}}},function(e,t,r){"use strict";t.a={talkers:[],currUser:"",curMsgs:[],users:[],msgs:[]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t,r){r(145);var s=r(4)(r(88),r(164),null,null);e.exports=s.exports},function(e,t,r){r(147);var s=r(4)(r(89),r(166),"data-v-38320f8a",null);e.exports=s.exports},function(e,t,r){r(146);var s=r(4)(r(90),r(165),"data-v-20722943",null);e.exports=s.exports},function(e,t,r){r(149);var s=r(4)(r(91),r(168),"data-v-491312e8",null);e.exports=s.exports},function(e,t,r){r(148);var s=r(4)(r(92),r(167),"data-v-3f8118c2",null);e.exports=s.exports},function(e,t,r){r(151);var s=r(4)(r(93),r(170),"data-v-df985160",null);e.exports=s.exports},function(e,t,r){r(150);var s=r(4)(r(94),r(169),"data-v-a25e7222",null);e.exports=s.exports},function(e,t,r){r(143);var s=r(4)(r(95),r(162),"data-v-020a5522",null);e.exports=s.exports},function(e,t,r){r(144);var s=r(4)(r(96),r(163),"data-v-061c990d",null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("el-form",{ref:"form",staticClass:"demo-ruleForm login-container",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"0px"}},[r("h3",{staticClass:"title"},[e._v("ZY-Chat")]),e._v(" "),r("el-form-item",{attrs:{prop:"user_name"}},[r("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.form.user_name,callback:function(t){e.form.user_name=t},expression:"form.user_name"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.form.password,callback:function(t){e.form.password=t},expression:"form.password"}})],1),e._v(" "),r("el-form-item",{staticStyle:{width:"100%"}},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(t){t.preventDefault(),e.login(t)}}},[e._v("登录")])],1),e._v(" "),r("router-link",{attrs:{to:"/register"}},[e._v("注册")])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("el-form",{ref:"form",staticClass:"demo-ruleForm login-container",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"0px"}},[r("h3",{staticClass:"title"},[e._v("ZY-Chat")]),e._v(" "),r("el-form-item",{attrs:{prop:"user_name"}},[r("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.form.user_name,callback:function(t){e.form.user_name=t},expression:"form.user_name"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.form.password,callback:function(t){e.form.password=t},expression:"form.password"}})],1),e._v(" "),r("el-form-item",{staticStyle:{width:"100%"}},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(t){t.preventDefault(),e.register(t)}}},[e._v("注册")])],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"entry"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{placeholder:"Enter 发送"},domProps:{value:e.content},on:{keyup:e.enter,input:function(t){t.target.composing||(e.content=t.target.value)}}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e.items?r("ul",{staticClass:"msg-ul"},e._l(e.items,function(t,s){return r("li",[r("p",{staticClass:"time"},[r("span",[e._v(e._s(e._f("filterDate")(t.create_at)))])]),e._v(" "),r("div",{staticClass:"main",class:t.from_user==e.self?"self":""},[r("img",{attrs:{src:t.avatar?t.avatar:e.defaultAvatar}}),e._v(" "),r("div",{staticClass:"text",on:{click:function(r){e.del(s,t.id)}}},[e._v(e._s(t.content))])])])})):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("header",[r("img",{staticClass:"avatar",attrs:{src:e.user.avatar?e.user.avatar:e.defaultAvatar}}),e._v(" "),r("p",[e._v(e._s(e.user.user_name))])]),e._v(" "),r("footer",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.target,expression:"target"}],attrs:{type:"text",placeholder:"search user..."},domProps:{value:e.target},on:{keyup:e.enter,input:function(t){t.target.composing||(e.target=t.target.value)}}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chat-header"},[r("span",{on:{click:e.logout}},[e._v("退出")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"home-container"},[r("div",{staticClass:"sidebar"},[r("user-card"),e._v(" "),r("user-list")],1),e._v(" "),r("div",{staticClass:"main"},[r("chat-header"),e._v(" "),r("chat-content"),e._v(" "),r("chat-entry")],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list"},[r("ul",e._l(e.users,function(t,s){return r("li",{class:t.user_name==e.currUser?"active":"",on:{click:function(r){e.selectChat(t.user_name,s)}}},[r("img",{attrs:{src:t.avatar?t.avatar:e.defaultAvatar}}),e._v(" "),r("p",[e._v(e._s(t.user_name)+" +"+e._s(t.unread_count))])])}))])},staticRenderFns:[]}},,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(45),n=r.n(s),a=r(11),o=r.n(a),i=r(2),u=r(46),c=r.n(u),l=r(47),f=(r.n(l),r(42)),d=r(43),m=r(44),p=(r.n(m),r(41)),v=r(8);i.default.config.productionTip=!1,i.default.use(c.a),i.default.use(p.a);var h={data:{socket:{},msgs:{}},methods:{send:function(e){this.socket.send(o()(e))}},mounted:function(){var e=this;this.socket=new WebSocket("ws://112.74.36.107:9000/api/message"),this.socket.addEventListener("open",function(e){console.log("mixin open")}),this.socket.addEventListener("message",function(t){var r=JSON.parse(t.data),s=new Date;if(console.log("server response: "+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds(),r),"get_friends"==r.type)e.$store.state.users=r.friends;else if("get_messages"==r.type){for(var a=e.$store.state.users,o=0;o<a.length;o++)if(r.friend_name==a[o].user_name){e.$set(e.msgs,r.friend_name,r.messages);break}}else if("message"==r.type){var i,u=(i=r,n()(i),i);console.log(u);var c=e.msgs[u.from_user];c.push(u);var l=u.from_user,f=e.$store.state.users;if(f&&f.length>0&&e.$store.state.currUser!=l)for(var d=0;d<f.length;d++)l==f[d].user_name&&(f[d].unread_count+=1);u.from_user&&u.to_user&&u.from_user==u.to_user&&(u.from_user=JSON.parse(sessionStorage.getItem("user")).user_name)}})},created:function(){var e=this;v.a.$on("send",function(t){e.send(t)})}};new i.default({router:f.a,store:d.a,mixins:[h]}).$mount("#app")}],[175]);
//# sourceMappingURL=app.43c3f6e0bd51fcee7937.js.map