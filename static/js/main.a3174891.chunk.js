(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{38:function(e,t,n){e.exports=n(72)},43:function(e,t,n){},45:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},46:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(29),l=n.n(r),c=(n(43),n(11)),s=n.n(c),m=n(15),u=n(30),i=n(31),p=n(12),d=n(36),h=n(37),k=n(32),f=n(10),v=(n(45),n(46),n(74)),E=n(75);n(47);function P(e){return o.a.createElement("div",{className:"showing"},o.a.createElement("img",{src:e.completePokemon.sprites.front_default,alt:e.completePokemon.name}),o.a.createElement("div",null,o.a.createElement("h3",null,"Name"),o.a.createElement("p",null,e.completePokemon.name)),o.a.createElement("div",null,o.a.createElement("h3",null,"HP"),o.a.createElement("p",null,e.completePokemon.stats[5].base_stat)),o.a.createElement("div",null,o.a.createElement("h3",null,"Types"),o.a.createElement("p",null,e.completePokemon.types[0].type.name)))}var g=n(48),b=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={listOfPokemons:[],random:null,completePokemon:null},a.updateRandomPokemon=a.updateRandomPokemon.bind(Object(p.a)(a)),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.get("https://pokeapi.co/api/v2/pokemon?limit=150");case 3:return t=e.sent,n=t.data.results[Math.floor(150*Math.random())],e.next=7,g.get(n.url);case 7:a=e.sent,this.setState({listOfPokemons:t.data.results,random:n,completePokemon:a.data}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"updateRandomPokemon",value:function(){var e=Object(m.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=this.state.listOfPokemons[Math.floor(150*Math.random())],e.next=5,g.get(n.url);case 5:a=e.sent,this.setState({completePokemon:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;this.state.completePokemon;return o.a.createElement("div",{className:"App"},o.a.createElement(k.a,null,o.a.createElement("h1",null,"Pokemon"),this.state.completePokemon&&o.a.createElement(o.a.Fragment,null,o.a.createElement(f.c,null,o.a.createElement(f.a,{path:"*",render:function(t){return o.a.createElement(P,Object.assign({completePokemon:e.state.completePokemon},t))}})),o.a.createElement(v.a,null,o.a.createElement(E.a,{onClick:this.updateRandomPokemon},"Outro Pokemon?")))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.a3174891.chunk.js.map