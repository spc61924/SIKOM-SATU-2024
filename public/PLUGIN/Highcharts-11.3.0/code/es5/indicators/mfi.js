/**
 * Highstock JS v11.3.0 (2024-01-10)
 *
 * Money Flow Index indicator for Highcharts Stock
 *
 * (c) 2010-2024 Grzegorz Blachliński
 *
 * License: www.highcharts.com/license
 */!function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/indicators/mfi",["highcharts","highcharts/modules/stock"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function o(t,e,o,r){t.hasOwnProperty(e)||(t[e]=r.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}o(e,"Stock/Indicators/MFI/MFIIndicator.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e){var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),n=t.seriesTypes.sma,i=e.extend,s=e.merge,u=e.error,a=e.isArray;function c(t){return t.reduce(function(t,e){return t+e})}function f(t){return(t[1]+t[2]+t[3])/3}var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.getValues=function(t,e){var o,r,n,i,s,p,h=e.period,l=t.xData,d=t.yData,y=d?d.length:0,m=e.decimals,v=t.chart.get(e.volumeSeriesID),g=v&&v.yData,_=[],x=[],S=[],D=[],I=[],j=!1,w=1;if(!v){u("Series "+e.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,t.chart);return}if(!(l.length<=h)&&a(d[0])&&4===d[0].length&&g){for(o=f(d[w]);w<h+1;)r=o,j=(o=f(d[w]))>=r,n=o*g[w],D.push(j?n:0),I.push(j?0:n),w++;for(p=w-1;p<y;p++)p>w-1&&(D.shift(),I.shift(),r=o,j=(o=f(d[p]))>r,n=o*g[p],D.push(j?n:0),I.push(j?0:n)),i=c(I),s=parseFloat((100-100/(1+c(D)/i)).toFixed(m)),_.push([l[p],s]),x.push(l[p]),S.push(s);return{values:_,xData:x,yData:S}}},e.defaultOptions=s(n.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",decimals:4}}),e}(n);return i(p.prototype,{nameBase:"Money Flow Index"}),t.registerSeriesType("mfi",p),p}),o(e,"masters/indicators/mfi.src.js",[],function(){})});