var fontplusloadc21a2e2f=(function(){var G=['FOT-ニューロダン Pro B','I-OTF-UD新聞明朝Pro Mp','F+UD-筑紫明朝 E'],oth_fonts=[],nicknames=[],eot_files=['96b7f0965b4d1f48acbd5bd8de0e485fdec64a12','82ab7be05ed71fb3e3a94b02eadd3765e1ba604c','7828c5a29d545d8f6f5b67be463cab19d2d5de32'];var W=document.getElementsByTagName("script");var X2=W[W.length-1].src;var C8=X2.slice(0,X2.lastIndexOf("/")+1);var w=2;var u=String(document.location);var H=u.substring(0,u.indexOf(":"))+"://";var t="http://webfont.fontplus.jp/".replace("http://",H);var o=0;var F='6VtA768Q4TU';var a='https://s3-ap-northeast-1.amazonaws.com/fontplus-va/';var Q=10;var bl5=0;var C4=10*1000/Q;var C7=function(p,X,N){var y=p.toLowerCase();for(N=X.length;N--&&X[N].toLowerCase()!=y;);return N};var O=function(y){return y.replace(/^\s+|\s+$/g,'')};var bf=function(){var y=['MSIE','Firefox','Chrome','Safari','Opera'],agent=navigator.userAgent,name,ver,mode,n,i,os,fd='fontplus-unused';name=ver=mode=n='';for(i in y){if(!y.hasOwnProperty(i))continue;if(agent.indexOf(y[i])!=-1){name=y[i];n=y[i].substr(0,1);if(name=='Opera'&&agent.match(/; Opera (Mobi|Tablet)\/(.*) Version\/([0-9\.]+)/)){name+=' Mobile';ver=RegExp.$3;n='T'}else if(agent.match(/(iPad|iPhone); (.*) OS ([0-9_]+) like /)){name+=' iOS';ver=RegExp.$3.replace(/_/g,'.');n='I';os='iOS'}else if(agent.match(/Android ([0-9\.]+)/)){name=os='Android';ver=RegExp.$1;n='A'}else if(agent.match(/Version\/([0-9\.]+)/))ver=RegExp.$1;else if(agent.match(RegExp(name+"[\/ ]([0-9\.]+)")))ver=RegExp.$1;break}}if(!name){if(agent.indexOf('Trident')!=-1){if(agent.match(/rv:([\d\.]+)/)){name='MSIE';n='M';ver=RegExp.$1}}else{name='Unknown:'+agent;ver='99';n='U'}}if(!os){if(agent.match(/Windows Phone/))os='Windows Phone';else if(agent.match(/Windows/)){if(agent.match(/NT 5.(1|2; (Win|WOW)64)/)){os='WindowsXP'}else{os='Windows'}}else if(agent.match(/Macintosh/))os='Macintosh';else if(agent.match(/Linux/))os='Linux';else os='Unknown:'+agent}if(n=='M'){mode=document.documentMode?document.documentMode:5;if(parseInt(ver)<9)fd='Courier New'}else if(n=='O')fd='Courier New';else if(n=='T')fd='Droid Sans';return{'name':name,'ver':ver,'mode':mode,'os':os,'fd':fd,'n':n,'v':parseFloat(ver)}};var q=function(p,N){var y=new(window.XDomainRequest||window.ActiveXObject||XMLHttpRequest)('Microsoft.XMLHTTP');y.open('GET',p,1);try{y.setRequestHeader('Content-type','application/x-www-form-urlencoded');y.onreadystatechange=function(){y.readyState>3&&N&&N(y.responseText,y)}}catch(e){y.onerror=function(){y.status=404;N&&N(y.responseText,y)};y.onprogress=function(){};y.onload=function(){N&&N(y.responseText,y)}}y.send()};var bl1=function(y){var p=[],i=0,n=y.firstChild;while((y=n)){if(y.nodeType===1)p[i++]=y;n=y.firstChild||y.nextSibling;while(!n&&(y=y.parentNode))n=y.nextSibling}return p};var I=function(b){var B=new Array();if(!document.getElementsByTagName)return B;b=b.replace(/\s*([^\w])\s*/g,"$1");var L=b.split(",");var d=function(N,X){if(!X)X='*';var bl=new Array;for(var y=0,len=N.length;con=N[y],y<len;y++){var C;if(X=='*')C=con.all?con.all:con.getElementsByTagName("*");else C=con.getElementsByTagName(X);for(var p=0,leng=C.length;p<leng;p++)bl.push(C[p])}return bl};COMMA:for(var N0=0,len1=L.length;selector=L[N0],N0<len1;N0++){var p6=new Array(document);var m=selector.split(" ");SPACE:for(var p0=0,len2=m.length;element=m[p0],p0<len2;p0++){var p4=element.indexOf("[");var g=element.indexOf("]");var p9=element.indexOf("#");if(p9+1&&!(p9>p4&&p9<g)){var N5=element.split("#");var p8=N5[0];var p7=N5[1];var c=document.getElementById(p7);if(!c||(p8&&c.nodeName.toLowerCase()!=p8)){continue COMMA}p6=new Array(c);continue SPACE}p9=element.indexOf(".");if(p9+1&&!(p9>p4&&p9<g)){var N5=element.split('.');var p8=N5[0];var bj=N5[1];var bp=d(p6,p8);p6=new Array;for(var N4=0,len=bp.length;fnd=bp[N4],N4<len;N4++){if(fnd.className&&fnd.className.match(new RegExp('(^|\s)'+bj+'(\s|$)')))p6.push(fnd)}continue SPACE}if(element.indexOf('[')+1){if(element.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?['"]?([^\]'"]*)['"]?\]$/)){var p8=RegExp.$1;var R=RegExp.$2;var j=RegExp.$3;var N2=RegExp.$4}var bp=d(p6,p8);p6=new Array;for(var N4=0,len=bp.length;fnd=bp[N4],N4<len;N4++){if(j=='='&&fnd.getAttribute(R)!=N2)continue;if(j=='~'&&!fnd.getAttribute(R).match(new RegExp('(^|\\s)'+N2+'(\\s|$)')))continue;if(j=='|'&&!fnd.getAttribute(R).match(new RegExp('^'+N2+'-?')))continue;if(j=='^'&&fnd.getAttribute(R).indexOf(N2)!=0)continue;if(j=='$'&&fnd.getAttribute(R).lastIndexOf(N2)!=(fnd.getAttribute(R).length-N2.length))continue;if(j=='*'&&!(fnd.getAttribute(R).indexOf(N2)+1))continue;else if(!fnd.getAttribute(R))continue;p6.push(fnd)}continue SPACE}var bp=d(p6,element);p6=bp}for(var A=0,len=p6.length;A<len;A++)B.push(p6[A])}return B};var X3=function(){var p=document;var y=bl1(p);S(y);bl6(p)};var S=function(y){var p,k;for(k=y.length;k--;){if((p=l(y[k]))==null)continue;z(y[k],p)}};var bl6=function(y){for(var p=y.styleSheets.length;p--;)be(y.styleSheets[p])};var be=function(X){var y,sc,st,act,p_cls;try{y=X.cssRules?X.cssRules:X.rules}catch(e){y=null}if(!y)return;for(var p=y.length;p--;){try{sc=y[p].styleSheet}catch(e){sc=null}if(sc)be(sc);if(!y[p].selectorText)continue;var C=y[p].selectorText.match(/(:link|:visited|:hover|:active)/ig);if(C&&C.length&&y[p].style.fontFamily.length){act=y[p].selectorText.replace(/:link|:visited|:hover|:active/ig,"");p_cls=I(act);for(var N=p_cls.length;N--;){if((st=l(p_cls[N]))==null||O(st)==O(y[p].style.fontFamily)){continue}z(p_cls[N],y[p].style.fontFamily)}}}};var l=function(y){return y.currentStyle?y.currentStyle['fontFamily']:(document.defaultView?document.defaultView.getComputedStyle(y,null).getPropertyValue('fontFamily'):null)};var z=function(N,y){var p=y.replace(/'/g,"").replace(/"/g,"").split(","),idx,nst=false;for(var X=0;X<p.length;X++){p[X]=O(p[X]);if(C7(p[X],oth_fonts)>=0){continue}idx=C7(p[X],G);if(idx<0){oth_fonts.push(p[X]);continue}if(!nst)nst=y.replace(/'/g,"").replace(/"/g,"");if(nicknames[idx]==null)nicknames[idx]='FP-'+C2(16);ecp_fa=p[X].replace(/\+/g,"\\+").replace(/\^/g,"\\^").replace(/\$/g,"\\$").replace(/\*/g,"\\*").replace(/\?/g,"\\?").replace(/\./g,"\\.");nst=nst.replace(new RegExp(ecp_fa),nicknames[idx]);break}if(nst)N.style.fontFamily=nst};var C2=function(y){var p='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',rand='',i,n=p.length;for(i=y;i--;)rand+=p.charAt(Math.floor(Math.random()*n));return rand};var C5=function(){if(!bj2){var y=document.createElement("link");y.rel="stylesheet";y.type="text/css";y.charset="UTF-8";if(X9.os=='Windows'&&X9.n!='M'||X9.os=='WindowsXP'&&X9.n!='C'&&X9.n!='S'){y.href=C8+"SubFontCSS_h.css"}else{y.href=C8+"SubFontCSS.css"}document.getElementsByTagName("head")[0].appendChild(y)}};var x=function(){var y=document.createElement('style');y.setAttribute('type','text/css');y.setAttribute('id','fontplus_ie_css');document.getElementsByTagName("head")[0].appendChild(y);var p="";for(var N=0;N<nicknames.length;N++){if(nicknames[N]){p+="@font-face { font-family: '"+nicknames[N]+"'; src: url('"+C8+eot_files[N]+"'); }\n"}}y.styleSheet.cssText=p};var U=function(){var N=2,rsp=2,img=document.createElement('img'),s,tooltip='';img.setAttribute('src',t+"img/common/banner.gif");img.setAttribute('id','fontplus-trial-banner');img.setAttribute('class','fontplus-trial-banner');img.setAttribute('alt',tooltip);img.setAttribute('title',tooltip);s=img.style;s.position='fixed';s.bottom=N+'px';s.right=rsp+'px';s.cursor='pointer';s.zIndex=2147483647;s.textDecoration='none';s.verticalAlign='baseline';s.outline=s.padding=s.margin=s.border=0;if(X9.n=='M'&&(X9.v<7||parseInt(X9.mode)<7)||X9.n=='I'){other_scroll=function(){var y,cw,st,sl;if(X9.n=='I'){cw=window.innerWidth;y=window.innerHeight;st=window.scrollY;sl=window.scrollX}else{y=document.documentElement.clientHeight||document.body.clientHeight||document.clientHeight||0;cw=document.documentElement.clientWidth||document.body.clientWidth||document.clientWidth||0;st=document.documentElement.scrollTop||document.body.scrollTop||document.scrollTop||0;sl=document.documentElement.scrollLeft||document.body.scrollLeft||document.scrollLeft||0}s.top=(y+st-img.height-rsp)+'px';s.left=(cw+sl-img.width-N)+'px'};s.position='absolute';window.onscroll=window.onresize=other_scroll}var p=new Function("window.open('http://webfont.fontplus.jp/');");img.onclick=p;document.getElementsByTagName("BODY")[0].appendChild(img)};var h=function(y){var p=a+F+(y?'_j':'')+'?'+Math.floor(Math.random()*10000)+(new Date().getTime().toString());return p};var N8=function(p,y){if(p&&y.status==200){r(p)}else if(y.status==404){C3(true)}else if(y.status!=200&&(X9.n=='F'||X9.n=='S')){f()}};var f=function(){var p=document.createElement('script');p.setAttribute('id','fontplus_'+F+'_jsonp');p.charset='utf-8';p.src=h(true);if(document.all){p.onreadystatechange=function(){if(this.readyState=='loaded'){var y="typeof FontPlus_fp_"+F+"_loaded == 'undefined'";if(eval(y)){C3(true);p.parentNode.removeChild(p)}}}}else{p.onerror=function(){C3(true);p.parentNode.removeChild(p)}}document.getElementsByTagName("head")[0].appendChild(p)};var r=function(N){if(u.indexOf("http://localhost")===0||u.indexOf("file:///")===0){o=1}else{var y=N.split(',');var X=y.length;if(X>0){for(var p=0;p<X;p++){if(u.indexOf(y[p])===0){o=1;break}}}}if(o===1){C5()}else{C3(false)}};var X4=function(){if(o===1){if(bj2){X3();x()}var y=0;if(y){U()}if(w===2){var p=document.createElement('img');p.setAttribute('src',"https://s3-ap-northeast-1.amazonaws.com/fontplus-v/fontplus.gif?evt=tdKiduxUb1FlMNPquf9jmw%3D%3D&tm="+Math.floor(Math.random()*10000)+(new Date().getTime().toString()));p.setAttribute('width',0);p.setAttribute('height',0);p.style.display='none';p.onerror=function(){setTimeout(function(){p.parentNode.removeChild(p)},50)};p.onload=function(){setTimeout(function(){p.parentNode.removeChild(p)},50)};document.getElementsByTagName("BODY")[0].appendChild(p)}else if(w===1){var N=t+"download/access/fontplus.js?tdKiduxUb1FlMNPquf9jmw%3D%3D";document.write("<script type='text/javascript' src='"+N+"&lurl="+encodeURIComponent(document.location)+"'></script>")}}else if(o===0){if(bl5<C4){bl5++;setTimeout(X4,Q)}else{C3(true)}}};var C3=function(y){o=2;if(window.console&&window.console.log){console.log('FONTPLUS '+(y?'User':'URL')+' Authentication Error')}};var v ={receiveAuthOther:function(y){if(y){r(y)}else{C3(true)}}};var X9=bf();var bj2=(X9.n=='M'&&X9.v<=8&&eot_files.length>0);if(o===1){C5()}else{if(X9.n=='O'||X9.n=='T'||X9.n=='S'&&X9.v<5||X9.n=='M'){f()}else{q(h(false),N8)}}if(window.attachEvent){window.attachEvent("onload",X4)}else if(window.addEventListener){window.addEventListener("load",X4,false)}else{window.onload=X4}return v})();