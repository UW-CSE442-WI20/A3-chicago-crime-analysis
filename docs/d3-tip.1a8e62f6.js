parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jqJE":[function(require,module,exports) {
d3.functor=function(t){return"function"==typeof t?t:function(){return t}},d3.tip=function(){var t=function(){return"n"},e=function(){return[0,0]},n=function(){return" "},r=a(),o=null,l=null,f=null;function i(t){var e;o="svg"===(e=(e=t).node()).tagName.toLowerCase()?e:e.ownerSVGElement,l=o.createSVGPoint(),document.body.appendChild(r)}i.show=function(){var r=Array.prototype.slice.call(arguments);r[r.length-1]instanceof SVGElement&&(f=r.pop());var o,l=n.apply(this,r),a=e.apply(this,r),p=t.apply(this,r),y=c(),d=u.length,m=document.documentElement.scrollTop||document.body.scrollTop,h=document.documentElement.scrollLeft||document.body.scrollLeft;for(y.html(l).style("position","absolute").style("opacity",1).style("pointer-events","all");d--;)y.classed(u[d],!1);return o=s[p].apply(this),y.classed(p,!0).style("top",o.top+a[0]+m+"px").style("left",o.left+a[1]+h+"px"),i},i.hide=function(){return c().style("opacity",0).style("pointer-events","none"),i},i.attr=function(t,e){if(arguments.length<2&&"string"==typeof t)return c().attr(t);var n=Array.prototype.slice.call(arguments);return d3.selection.prototype.attr.apply(c(),n),i},i.style=function(t,e){if(arguments.length<2&&"string"==typeof t)return c().style(t);var n=Array.prototype.slice.call(arguments);if(1===n.length){var r=n[0];Object.keys(r).forEach(function(t){return d3.selection.prototype.style.apply(c(),[t,r[t]])})}return i},i.direction=function(e){return arguments.length?(t=null==e?e:d3.functor(e),i):t},i.offset=function(t){return arguments.length?(e=null==t?t:d3.functor(t),i):e},i.html=function(t){return arguments.length?(n=null==t?t:d3.functor(t),i):n},i.destroy=function(){return r&&(c().remove(),r=null),i};var s={n:function(){var t=p();return{top:t.n.y-r.offsetHeight,left:t.n.x-r.offsetWidth/2}},s:function(){var t=p();return{top:t.s.y,left:t.s.x-r.offsetWidth/2}},e:function(){var t=p();return{top:t.e.y-r.offsetHeight/2,left:t.e.x}},w:function(){var t=p();return{top:t.w.y-r.offsetHeight/2,left:t.w.x-r.offsetWidth}},nw:function(){var t=p();return{top:t.nw.y-r.offsetHeight,left:t.nw.x-r.offsetWidth}},ne:function(){var t=p();return{top:t.ne.y-r.offsetHeight,left:t.ne.x}},sw:function(){var t=p();return{top:t.sw.y,left:t.sw.x-r.offsetWidth}},se:function(){var t=p();return{top:t.se.y,left:t.e.x}}},u=Object.keys(s);function a(){var t=d3.select(document.createElement("div"));return t.style("position","absolute").style("top","0").style("opacity","0").style("pointer-events","none").style("box-sizing","border-box"),t.node()}function c(){return null===r&&(r=a(),document.body.appendChild(r)),d3.select(r)}function p(){for(var t=f||d3.event.target;void 0===t.getScreenCTM&&"undefined"===t.parentNode;)t=t.parentNode;var e={},n=t.getScreenCTM(),r=t.getBBox(),o=r.width,i=r.height,s=r.x,u=r.y;return l.x=s,l.y=u,e.nw=l.matrixTransform(n),l.x+=o,e.ne=l.matrixTransform(n),l.y+=i,e.se=l.matrixTransform(n),l.x-=o,e.sw=l.matrixTransform(n),l.y-=i/2,e.w=l.matrixTransform(n),l.x+=o,e.e=l.matrixTransform(n),l.x-=o/2,l.y-=i/2,e.n=l.matrixTransform(n),l.y+=i,e.s=l.matrixTransform(n),e}return i};
},{}]},{},["jqJE"], null)
//# sourceMappingURL=https://uw-cse442-wi20.github.io/A3-chicago-crime-analysis/d3-tip.1a8e62f6.js.map