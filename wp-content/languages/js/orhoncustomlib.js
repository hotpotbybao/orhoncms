window.alert=function(txt){if(typeof(Unicode2M)=="function"){txt=Unicode2M(txt);};var timestamp=Date.parse(new Date());var shield=document.createElement("DIV");shield.id="shield";shield.style.position="fixed";shield.style.left="0px";shield.style.top="0px";shield.style.width="100%";shield.style.height=document.body.scrollHeight+"px";shield.style.background="#333";shield.style.textAlign="center";shield.style.zIndex="10000";shield.style.filter="alpha(opacity=0)";shield.style.opacity="0.8";var alertFram=document.createElement("DIV");alertFram.id="alertFram"+timestamp;alertFram.className="alertFramclass";alertFram.style.position="fixed";alertFram.style.left="50%";alertFram.style.top="50%";alertFram.style.marginLeft="-225px";alertFram.style.marginTop="-75px";alertFram.style.width="400px";alertFram.style.height="150px";alertFram.style.background="#ccc";alertFram.style.textAlign="center";alertFram.style.lineHeight="1.8";alertFram.style.zIndex="10001";strHtml="<ul style=\"list-style:none;margin:0px;padding:0px;width:100%\">\n";strHtml+=" <li style=\"background:#96BDC7;margin: 0;text-align:left;padding-left:20px;font-size:25px;font-weight:normal;height:25px;line-height:25px;border:1px solid #96BDC7;\"></li>\n";strHtml+=" <li style=\"background:#fff;margin: 0;text-align:center;font-size:25px;height:120px;line-height:1.8;border-left:1px solid #96BDC7;border-right:1px solid #96BDC7;\">"+txt+"</li>\n";strHtml+=" <li style=\"background:#96BDC7;margin: 0;text-align:center;font-weight:normal;height:25px;line-height:25px; border:1px solid #96BDC7;\"><span style=\"font-size:25px;cursor:pointer;width:100%;display:block\" type=\"button\" onclick=\"doOk()\">OK</span></li>\n";strHtml+="</ul>\n";alertFram.innerHTML=strHtml;document.body.appendChild(alertFram);document.body.appendChild(shield);var c=0;this.doAlpha=function(){if(c++>20){clearInterval(ad);return 0;}
shield.style.filter="alpha(opacity="+c+");";}
var ad=setInterval("doAlpha()",5);this.doOk=function(){alertFram.style.display="none";shield.style.display="none";}
alertFram.focus();document.body.onselectstart=function(){return false;};}