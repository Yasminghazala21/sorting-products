(this["webpackJsonpapp-name"]=this["webpackJsonpapp-name"]||[]).push([[0],{32:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(23),r=n.n(c),i=n(5),o=n(3),l=n(10),d=n.n(l),j=n(12),u=n(13),b=n(14),m=n(16),p=n(15),h=n(9),g=n.n(h),O=(n(32),n(0)),x=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",showSubmitError:!1,errorMsg:""},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onChangePassword=function(t){e.setState({password:t.target.value})},e.onSubmitSuccess=function(t){var n=e.props.history;g.a.set("jwt_token",t,{expires:30}),n.replace("/")},e.onSubmitFailure=function(t){e.setState({showSubmitError:!0,errorMsg:t})},e.submitForm=function(){var t=Object(j.a)(d.a.mark((function t(n){var s,a,c,r,i,o,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s=e.state,a=s.username,c=s.password,r={username:a,password:c},"https://apis.ccbp.in/login",i={method:"POST",body:JSON.stringify(r)},t.next=7,fetch("https://apis.ccbp.in/login",i);case 7:return o=t.sent,t.next=10,o.json();case 10:l=t.sent,!0===o.ok?e.onSubmitSuccess(l.jwt_token):e.onSubmitFailure(l.error_msg);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderPasswordField=function(){var t=e.state.password;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("label",{className:"input-label",htmlFor:"password",children:"PASSWORD"}),Object(O.jsx)("input",{type:"password",id:"password",className:"password-input-field",value:t,onChange:e.onChangePassword})]})},e.renderUsernameField=function(){var t=e.state.username;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("label",{className:"input-label",htmlFor:"username",children:"USERNAME"}),Object(O.jsx)("input",{type:"text",id:"username",className:"username-input-field",value:t,onChange:e.onChangeUsername})]})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.showSubmitError,n=e.errorMsg;return void 0!==g.a.get("jwt_token")?Object(O.jsx)(o.a,{to:"/"}):Object(O.jsxs)("div",{className:"login-form-container",children:[Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",className:"login-website-logo-mobile-image",alt:"website logo"}),Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png",className:"login-image",alt:"website login"}),Object(O.jsxs)("form",{className:"form-container",onSubmit:this.submitForm,children:[Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",className:"login-website-logo-desktop-image",alt:"website logo"}),Object(O.jsx)("div",{className:"input-container",children:this.renderUsernameField()}),Object(O.jsx)("div",{className:"input-container",children:this.renderPasswordField()}),Object(O.jsx)("button",{type:"submit",className:"login-button",children:"Login"}),t&&Object(O.jsxs)("p",{className:"error-message",children:["*",n]})]})]})}}]),n}(s.Component),f=(n(39),Object(o.g)((function(e){var t=function(){g.a.remove("jwt_token"),e.history.replace("/login")};return Object(O.jsxs)("nav",{className:"nav-header",children:[Object(O.jsxs)("div",{className:"nav-content",children:[Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)("img",{className:"website-logo",src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",alt:"website logo"})}),Object(O.jsxs)("ul",{className:"nav-menu",children:[Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/",className:"nav-link",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/products",className:"nav-link",children:"Products"})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/cart",className:"nav-link",children:"Cart"})})]}),Object(O.jsx)("button",{type:"button",className:"logout-desktop-btn",onClick:t,children:"Logout"}),Object(O.jsx)("button",{type:"button",className:"logout-mobile-btn",onClick:t,children:Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png",alt:"logout icon",className:"logout-icon"})})]}),Object(O.jsx)("div",{className:"nav-menu-mobile",children:Object(O.jsxs)("ul",{className:"nav-menu-list-mobile",children:[Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)("li",{className:"nav-menu-item-mobile",children:Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png",alt:"nav home",className:"nav-bar-image"})})}),Object(O.jsx)(i.b,{to:"/products",children:Object(O.jsx)("li",{className:"nav-menu-item-mobile",children:Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png",alt:"nav products",className:"nav-bar-image"})})}),Object(O.jsx)(i.b,{to:"/cart",children:Object(O.jsx)("li",{className:"nav-menu-item-mobile",children:Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png",alt:"nav cart",className:"nav-bar-image"})})})]})})]})}))),v=(n(40),function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsxs)("div",{className:"home-container",children:[Object(O.jsxs)("div",{className:"home-content",children:[Object(O.jsx)("h1",{className:"home-heading",children:"Clothes That Get YOU Noticed"}),Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png",alt:"clothes to be noticed",className:"home-mobile-img"}),Object(O.jsx)("p",{className:"home-description",children:"Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way."}),Object(O.jsx)(i.b,{to:"/products",children:Object(O.jsx)("button",{type:"button",className:"shop-now-button",children:"Shop Now"})})]}),Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png",alt:"dresses to be noticed",className:"home-desktop-img"})]})]})}),N=n(17),w=n.n(N),y=(n(59),function(e){var t=e.productData,n=t.title,s=t.brand,a=t.imageUrl,c=t.rating,r=t.price;return Object(O.jsxs)("li",{className:"product-item",children:[Object(O.jsx)("img",{src:a,alt:"product",className:"thumbnail"}),Object(O.jsx)("h1",{className:"title",children:n}),Object(O.jsxs)("p",{className:"brand",children:["by ",s]}),Object(O.jsxs)("div",{className:"product-details",children:[Object(O.jsxs)("p",{className:"price",children:["Rs ",r,"/-"]}),Object(O.jsxs)("div",{className:"rating-container",children:[Object(O.jsx)("p",{className:"rating",children:c}),Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/star-img.png",alt:"star",className:"star"})]})]})]})}),S=n(25),k=(n(60),function(e){var t=e.sortbyOptions,n=e.activeOptionId,s=e.updateActiveOptionId;return Object(O.jsxs)("div",{className:"products-header",children:[Object(O.jsx)("h1",{className:"products-list-heading",children:"All Products"}),Object(O.jsxs)("div",{className:"sort-by-container",children:[Object(O.jsx)(S.a,{className:"sort-by-icon"}),Object(O.jsx)("h1",{className:"sort-by",children:"Sort by"}),Object(O.jsx)("select",{className:"sort-by-select",value:n,onChange:function(e){s(e.target.value)},children:t.map((function(e){return Object(O.jsx)("option",{value:e.optionId,className:"select-option",children:e.displayText},e.optionId)}))})]})]})}),P=(n(61),[{optionId:"PRICE_HIGH",displayText:"Price (High-Low)"},{optionId:"PRICE_LOW",displayText:"Price (Low-High)"}]);console.log(P);var I=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={activeOptionId:P[0].optionId,productsList:[],isLoading:!1},e.getProducts=Object(j.a)(d.a.mark((function t(){var n,s,a,c,r,i,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.activeOptionId,e.setState({isLoading:!0}),s=g.a.get("jwt_token"),a="https://apis.ccbp.in/products?sort_by=".concat(n),c={headers:{Authorization:"Bearer ".concat(s)},method:"GET"},t.next=7,fetch(a,c);case 7:if(!(r=t.sent).ok){t.next=14;break}return t.next=11,r.json();case 11:i=t.sent,o=i.products.map((function(e){return{title:e.title,brand:e.brand,price:e.price,id:e.id,imageUrl:e.image_url,rating:e.rating}})),e.setState({productsList:o,isLoading:!1});case 14:case"end":return t.stop()}}),t)}))),e.updateActiveOptionId=function(t){e.setState({activeOptionId:t},e.getProducts)},e.renderProductsList=function(){var t=e.state,n=t.productsList,s=t.activeOptionId;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(k,{sortbyOptions:P,activeOptionId:s,updateActiveOptionId:e.updateActiveOptionId}),Object(O.jsx)("ul",{className:"products-list",children:n.map((function(e){return Object(O.jsx)(y,{productData:e},e.id)}))})]})},e.renderLoader=function(){return Object(O.jsx)("div",{className:"products-loader-container",children:Object(O.jsx)(w.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"render",value:function(){return this.state.isLoading?this.renderLoader():this.renderProductsList()}}]),n}(s.Component),L=(n(62),"INITIAL"),F="SUCCESS",C="FAILURE",D="IN_PROGRESS",_=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={primeDeals:[],apiStatus:L},e.getPrimeDeals=Object(j.a)(d.a.mark((function t(){var n,s,a,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:D}),n=g.a.get("jwt_token"),"https://apis.ccbp.in/prime-deals",s={headers:{Authorization:"Bearer ".concat(n)},method:"GET"},t.next=6,fetch("https://apis.ccbp.in/prime-deals",s);case 6:if(!0!==(a=t.sent).ok){t.next=13;break}return t.next=10,a.json();case 10:c=t.sent,r=c.prime_deals.map((function(e){return{title:e.title,brand:e.brand,price:e.price,id:e.id,imageUrl:e.image_url,rating:e.rating}})),e.setState({primeDeals:r,apiStatus:F});case 13:401===a.status&&e.setState({apiStatus:C});case 14:case"end":return t.stop()}}),t)}))),e.renderPrimeDealsList=function(){var t=e.state.primeDeals;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"primedeals-list-heading",children:"Exclusive Prime Deals"}),Object(O.jsx)("ul",{className:"products-list",children:t.map((function(e){return Object(O.jsx)(y,{productData:e},e.id)}))})]})},e.renderPrimeDealsFailureView=function(){return Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png",alt:"Register Prime",className:"register-prime-image"})},e.renderLoadingView=function(){return Object(O.jsx)("div",{className:"products-loader-container",children:Object(O.jsx)(w.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getPrimeDeals()}},{key:"render",value:function(){switch(this.state.apiStatus){case F:return this.renderPrimeDealsList();case C:return this.renderPrimeDealsFailureView();case D:return this.renderLoadingView();default:return null}}}]),n}(s.Component),A=(n(63),function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsxs)("div",{className:"product-sections",children:[Object(O.jsx)(_,{}),Object(O.jsx)(I,{})]})]})}),E=(n(64),function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsx)("div",{className:"cart-container",children:Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png",alt:"cart",className:"cart-img"})})]})}),z=(n(65),function(){return Object(O.jsx)("div",{className:"not-found-container",children:Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png",alt:"not-found",className:"not-found-img"})})}),U=n(26),T=function(e){return void 0===g.a.get("jwt_token")?Object(O.jsx)(o.a,{to:"/login"}):Object(O.jsx)(o.b,Object(U.a)({},e))},R=(n(66),function(){return Object(O.jsx)(i.a,{children:Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{exact:!0,path:"/login",component:x}),Object(O.jsx)(T,{exact:!0,path:"/",component:v}),Object(O.jsx)(T,{exact:!0,path:"/products",component:A}),Object(O.jsx)(T,{exact:!0,path:"/cart",component:E}),Object(O.jsx)(o.b,{path:"/not-found",component:z}),Object(O.jsx)(o.a,{to:"not-found"})]})})});r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.2a5c90d1.chunk.js.map