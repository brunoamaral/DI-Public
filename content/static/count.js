!function(global,document){"use strict";var origin="https://commento.brunoamaral.eu";function post(t,e,n){var o=new XMLHttpRequest;o.open("POST",t,!0),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.onload=function(){n(JSON.parse(o.response))},o.send(JSON.stringify(e))}function main(){for(var paths=[],doms=[],as=document.getElementsByTagName("a"),i=0;i<as.length;i++){var href=as[i].href;if(void 0===href)return;if(href=href.replace(/^.*\/\/[^\/]+/,""),href.endsWith("#commento")){var path=href.substr(0,href.indexOf("#commento"));path.startsWith(parent.location.host)&&(path=path.substr(parent.location.host.length)),paths.push(path),doms.push(as[i])}}var json={domain:parent.location.host,paths:paths};post(origin+"/api/comment/count",json,function(resp){if(resp.success)for(var i=0;i<paths.length;i++){var count=0;paths[i]in resp.commentCounts&&(count=resp.commentCounts[paths[i]]);var useCustomCommentsText=null!==doms[i].getAttribute("data-custom-comments-text");doms[i].innerText=useCustomCommentsText?eval(doms[i].getAttribute("data-custom-comments-text"))(count):count+" "+(1===count?"comment":"comments")}else console.log("[commento] error: "+resp.message)})}var initted=!1;function init(){initted||(initted=!0,main(void 0))}var readyLoad=function(){var t=document.readyState;"loading"===t?document.addEventListener("readystatechange",readyLoad):"interactive"===t?init():"complete"===t&&init()};readyLoad()}(window,document);