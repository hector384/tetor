define(["events"],function(n){function e(n,e){if(e.requireNamedIdentifier){var o="jarvis",t=n.toLowerCase().indexOf(o);if(-1==t)return null;n=n.substring(t+o.length)}return n}function o(o){return new Promise(function(u,c){t();var s=new(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.oSpeechRecognition||window.msSpeechRecognition);s.lang=o.lang,s.continuous=o.continuous||!1;var a=0;s.onresult=function(t){if(t.results.length>0){var r=t.results[a][0].transcript||"";a++,r=e(r,o),r&&(o.continuous?n.trigger(i,"input",[{text:r}]):u(r))}},s.onerror=function(){c({error:event.error,message:event.message})},s.onnomatch=function(){c({error:"no-match"})},r=s,r.start()})}function t(){r&&(r.abort(),r=null)}var i={},r=null;return i.listen=o,i.cancel=t,i});