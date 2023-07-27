var Page={IsSetup:!1,body:document.getElementsByTagName("body")[0],cvs:document.createElement("canvas"),ctx:0,unitSize:0,AreaArr:[],WindowChanged:function(){var t=document.documentElement.clientWidth,e=document.documentElement.clientHeight,i=(t-t%80)/16,r=(e-e%100)/20,a=Math.max(Math.min(i,r),20);this.unitSize=a;for(var s=0,n=0,h=0;h<Page.AreaArr.length;h++){Page.AreaArr[h].CalculateBounds();var o=Page.AreaArr[h].left+Page.AreaArr[h].W,c=Page.AreaArr[h].top+Page.AreaArr[h].H;s=Math.max(o,s),n=Math.max(c,n)}this.cvs.width=s,this.cvs.height=n;var l=(e-n)/2,g=t/2-this.Game.W/2,u=t-(g+s)-.5*this.unitSize;u<0&&(g=Math.max(.5*this.unitSize,g+u)),this.cvs.style.left=g+"px",this.cvs.style.top=l+"px"},Initialize:function(){!1===this.IsSetup&&(document.body.appendChild(Page.cvs),this.body.style.overflow="hidden",this.body.style.backgroundColor="rgb(19,21,25)",this.cvs.style.position="absolute",this.ctx=this.cvs.getContext("2d"),this.IsSetup=!0),this.WindowChanged();for(var t=0;t<Page.AreaArr.length;t++)Page.AreaArr[t].IsDirty=!0},Update:function(){for(var t=0;t<Page.AreaArr.length;t++)Page.AreaArr[t].IsDirty&&(Page.AreaArr[t].Draw(),Page.AreaArr[t].IsDirty=!1)}};function DrawAreaObj(t,e,i,r,a){this.leftBase=t,this.topBase=e,this.widthBase=i,this.heightBase=r,this.left=0,this.top=0,this.W=0,this.H=0,this.IsDirty=!1,this.CalculateBounds=function(){this.left=this.leftBase*Page.unitSize,this.top=this.topBase*Page.unitSize,this.W=this.widthBase*Page.unitSize,this.H=this.heightBase*Page.unitSize,this.IsDirty=!0},this.Draw=a,Page.AreaArr.push(this)}Page.Game=new DrawAreaObj(0,0,10,20,(function(){var t,e,i=Page.unitSize-2;Page.ctx.fillStyle="rgb(28,30,34)",Page.ctx.fillRect(this.left,this.top,this.W,this.H);for(var r=0;r<GM.StaticUnits.length;r++)for(var a=0;a<GM.StaticUnits[r].length;a++){var s=GM.StaticUnits[r][a];0!==s&&(t=r*Page.unitSize+1,e=a*Page.unitSize+1,Page.ctx.fillStyle=GM.IsAlive?s:"rgb(34,36,42)",Page.ctx.fillRect(t,e,i,i),Page.ctx.shadowBlur=0,Page.ctx.shadowColor="transparent")}if(0!==GM.Pc.Cur&&GM.IsAlive)for(var n=ColorWithAlpha(GM.Pc.Cur.color,.1),h=0;h<GM.Pc.Cur.UO.arr.length;h++)t=(GM.Pc.Cur.x+GM.Pc.Cur.UO.arr[h].x)*Page.unitSize+1,e=(GM.Pc.Cur.y+GM.Pc.Cur.UO.arr[h].y)*Page.unitSize+1,Page.ctx.fillStyle=GM.Pc.Cur.color,Page.ctx.fillRect(t,e,i,i),GM.IsAlive&&0!==GM.Pc.ProjY&&(e+=GM.Pc.ProjY*Page.unitSize,Page.ctx.fillStyle=n,Page.ctx.fillRect(t,e,i,i));GM.IsAlive||(DrawText("GAME OVER 😓","rgb(255,255,255)","500","center",i,this.W/2,this.H/4),DrawText("PRESS 'R' TO RETRY","rgb(255,255,255)","400","center",25,this.W/2,this.H/2))})),Page.UpcomingA=new DrawAreaObj(10.5,2.6,2.5,2.5,(function(){var t=Math.floor(Page.unitSize/2),e=GM.Pc.Upcoming[0];if(Page.ctx.fillStyle="rgb(0,0,0)",Page.ctx.fillRect(this.left,this.top,this.W,this.H),0!==e){Page.ctx.fillStyle=e.color;for(var i=0,r=0,a=[],s=[],n=0;n<e.UO.arr.length;n++){var h=e.UO.arr[n].x,o=e.UO.arr[n].y;a.indexOf(h)<0&&(a.push(h),i+=h),s.indexOf(o)<0&&(s.push(o),r+=o)}for(var c=t*(i/a.length+.5),l=t*(r/s.length+.5),g=this.left+this.W/2,u=this.top+this.H/2,f=0;f<e.UO.arr.length;f++){var P=Math.floor(g-c+e.UO.arr[f].x*t),M=Math.floor(u-l+e.UO.arr[f].y*t);Page.ctx.fillRect(P,M,t-1,t-1)}}})),Page.UpcomingB=new DrawAreaObj(10.5,5.2,2.5,2.5,(function(){var t=Math.floor(Page.unitSize/2),e=GM.Pc.Upcoming[1];if(Page.ctx.fillStyle="rgb(28,30,34)",Page.ctx.fillRect(this.left,this.top,this.W,this.H),0!==e){Page.ctx.fillStyle=e.color;for(var i=0,r=0,a=[],s=[],n=0;n<e.UO.arr.length;n++){var h=e.UO.arr[n].x,o=e.UO.arr[n].y;a.indexOf(h)<0&&(a.push(h),i+=h),s.indexOf(o)<0&&(s.push(o),r+=o)}for(var c=t*(i/a.length+.5),l=t*(r/s.length+.5),g=this.left+this.W/2,u=this.top+this.H/2,f=0;f<e.UO.arr.length;f++){var P=Math.floor(g-c+e.UO.arr[f].x*t),M=Math.floor(u-l+e.UO.arr[f].y*t);Page.ctx.fillRect(P,M,t-1,t-1)}}})),Page.UpcomingC=new DrawAreaObj(10.5,7.8,2.5,2.5,(function(){var t=Math.floor(Page.unitSize/2),e=GM.Pc.Upcoming[2];if(Page.ctx.fillStyle="rgb(28,30,34)",Page.ctx.fillRect(this.left,this.top,this.W,this.H),0!==e){Page.ctx.fillStyle=e.color;for(var i=0,r=0,a=[],s=[],n=0;n<e.UO.arr.length;n++){var h=e.UO.arr[n].x,o=e.UO.arr[n].y;a.indexOf(h)<0&&(a.push(h),i+=h),s.indexOf(o)<0&&(s.push(o),r+=o)}for(var c=t*(i/a.length+.5),l=t*(r/s.length+.5),g=this.left+this.W/2,u=this.top+this.H/2,f=0;f<e.UO.arr.length;f++){var P=Math.floor(g-c+e.UO.arr[f].x*t),M=Math.floor(u-l+e.UO.arr[f].y*t);Page.ctx.fillRect(P,M,t-1,t-1)}}})),Page.ScoreBarHigh=new DrawAreaObj(10.5,0,4.5,1,(function(){var t,e,i,r,a;Page.ctx.fillStyle="rgb(28,30,34)",Page.ctx.fillRect(this.left,this.top,this.W,this.H),t=.01*Page.unitSize,Page.ctx.fillStyle="rgb(255,232,96)",e=Math.floor(this.left+33*t),i=Math.floor(this.top+this.H-28*t),r=Math.floor(30*t),a=Math.floor(12*t),Page.ctx.fillRect(e,i,r,a),e=Math.floor(this.left+42*t),i=Math.floor(this.top+this.H-50*t),r=Math.floor(12*t),a=Math.floor(32*t),Page.ctx.fillRect(e,i,r,a),e=Math.floor(this.left+48*t),i=Math.floor(this.top+this.H-68*t),Page.ctx.arc(e,i,24*t,0,Math.PI),Page.ctx.fill(),text=("00000000"+GM.ScoreHigh).slice(-7),e=this.left+this.W-4,i=this.top+.8*Page.unitSize,size=Math.floor(.8*Page.unitSize)+.5,DrawText(text,"rgb(255,232,96)","500","right",size,e,i)})),Page.ScoreBarCur=new DrawAreaObj(10.5,1.1,4.5,1,(function(){var t,e,i,r;Page.ctx.fillStyle="rgb(28,30,34)",Page.ctx.fillRect(this.left,this.top,this.W,this.H),r=.01*Page.unitSize,t=("00"+GM.Level).slice(-2),e=this.left+Math.floor(50*r),i=this.top+.8*Page.unitSize,DrawText(t,"rgb(128,128,128)","900","center",Math.floor(.5*Page.unitSize),e,i),t=("00000000"+GM.ScoreCur).slice(-7),e=this.left+this.W-4,i=this.top+.8*Page.unitSize,DrawText(t,"rgb(255,255,255)","500","right",Math.floor(.8*Page.unitSize)+.5,e,i)}));var GM={TimeCur:0,TimeEvent:0,TickRate:0,IsAlive:0,Level:0,PiecesRemaining:0,ScoreHigh:0,ScoreCur:0,ScoreBonus:0,DifficultFlag:0,StaticUnits:[],Initialize:function(){this.Pc.Next=this.Pc.Cur=this.Pc.ProjY=0;for(var t=0;t<10;t++){this.StaticUnits[t]=[];for(var e=0;e<20;e++)this.StaticUnits[t][e]=0}this.TimeCur=this.TimeEvent=0,this.TickRate=500,this.PiecesRemaining=10,this.Level=1,this.ScoreCur=0,this.IsAlive=!0},Update:function(){this.TimeCur=(new Date).getTime(),this.TimeCur>=this.TimeEvent&&(0===GM.Pc.Cur&&this.IsAlive?this.Pc.Generate():(this.Pc.DoGravity(),this.Pc.ProjY=this.Pc.TryProject(),Page.Game.IsDirty=!0),this.RefreshTimer())},RefreshTimer:function(){this.TimeEvent=(new Date).getTime()+this.TickRate},PieceSpawned:function(){this.PiecesRemaining--,this.PiecesRemaining<=0&&this.AdvanceLevel()},AdvanceLevel:function(){function t(){var t=this.TickRate+"ms",e=document.createElement("span");e.textContent=t;var i=document.getElementById("tickRateDisplay");i.innerHTML="",i.appendChild(e)}this.Level++,this.TickRate=Math.floor(310*Math.exp(this.Level/-10)),this.PiecesRemaining=Math.floor(5e3/this.TickRate),t(),setInterval(t.bind(this),10),Page.ScoreBarCur.IsDirty=!0},CheckUnits:function(t){var e=0,i=0,r=[];this.ScoreBonus>0&&(i+=this.ScoreBonus);for(var a=0;a<20;a++)t.indexOf(a)>=0&&r.push(a);for(var s=0,n=0;n<r.length;n++){for(var h=!1,o=r[n],c=0;c<GM.StaticUnits.length;c++)if(0===GM.StaticUnits[c][o]){h=!0;break}if(!1===h){for(var l=0;l<GM.StaticUnits.length;l++)GM.StaticUnits[l].splice(o,1),GM.StaticUnits[l].unshift(0);i+=100+200*e,e>2&&(i+=100),e++,s++}}if(1===this.DifficultFlag&&(i=Math.floor(1.5*i),this.DifficultFlag=0),i>0){if(s>0){var g=new Audio("/sounds/clear.mp3");g.volume=.7,g.play()}this.ScoreCur+=i,Page.ScoreBarCur.IsDirty=!0,this.ScoreBonus=0,e>3&&(this.DifficultFlag=1)}},GameOver:function(){var t=new Audio("/sounds/game-over.mp3");t.volume=.3,t.play(),document.getElementById("audio").pause(),Page.Game.IsDirty=Page.ScoreBarCur.IsDirty=!0,this.ScoreCur>this.ScoreHigh&&(this.ScoreHigh=this.ScoreCur,Page.ScoreBarHigh.IsDirty=!0),this.IsAlive=!1}};function Init(){Page.Initialize(),GM.Initialize()}function Loop(){Page.Update(),GM.IsAlive&&GM.Update(),window.requestAnimationFrame(Loop)}function DrawText(t,e,i,r,a,s,n){Page.ctx.font=i+" "+a+'px "JetBrains Mono", monospace',Page.ctx.textAlign=r,Page.ctx.fillStyle=e,Page.ctx.fillText(t,s,n)}function ColorWithAlpha(t,e){var i="rgba"+t.substring(3,t.length-1);return i+=","+e+")"}GM.PcObj=function(t,e,i){this.x=5,this.y=0,this.color=t,this.UO={},this.Rotate=function(){this.UO=this.UO.nextUO},this.SetUO=function(t,e){var i=[];i[0]={nextUO:0,arr:[]},i[0].arr=e;for(var r=0;r<t;r++){i[r]={nextUO:0,arr:[]},r>0&&(i[r-1].nextUO=i[r]);for(var a=0;a<e.length;a++){var s,n;0===r?(s=e[a].x,n=e[a].y):(s=-1*i[r-1].arr[a].y,n=i[r-1].arr[a].x),i[r].arr[a]={x:s,y:n}}}i[t-1].nextUO=i[0],this.UO=i[0]},this.SetUO(e,i)},GM.O=function(){return new GM.PcObj("rgb(255, 255, 0)",1,[{x:-1,y:0},{x:0,y:0},{x:-1,y:1},{x:0,y:1}])},GM.I=function(){return new GM.PcObj("rgb(0, 255, 255)",2,[{x:-2,y:0},{x:-1,y:0},{x:0,y:0},{x:1,y:0}])},GM.S=function(){return new GM.PcObj("rgb(0, 128, 0)",2,[{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1}])},GM.Z=function(){return new GM.PcObj("rgb(255, 0, 0)",2,[{x:-1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1}])},GM.L=function(){return new GM.PcObj("rgb(255, 165, 0)",4,[{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:-1}])},GM.J=function(){return new GM.PcObj("rgb(0, 0, 255)",4,[{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:1,y:-1}])},GM.T=function(){return new GM.PcObj("rgb(160, 62, 255)",4,[{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:-1}])},GM.Pc={Cur:0,ProjY:0,Upcoming:[0,0,0],Generate:function(){(this.Cur=this.Upcoming[0],this.Upcoming[0]=this.Upcoming[1],this.Upcoming[1]=this.Upcoming[2],0!==this.Cur)&&(this.CheckCollisions(0,0,0)>0&&(GM.GameOver(),this.Freeze()));if(0!==GM.IsAlive){switch(Math.floor(7*Math.random())){case 0:this.Upcoming[2]=GM.O();break;case 1:this.Upcoming[2]=GM.I();break;case 2:this.Upcoming[2]=GM.S();break;case 3:this.Upcoming[2]=GM.Z();break;case 4:this.Upcoming[2]=GM.L();break;case 5:this.Upcoming[2]=GM.J();break;case 6:this.Upcoming[2]=GM.T()}0!==this.Cur&&(GM.PieceSpawned(),Page.Game.IsDirty=!0),Page.UpcomingA.IsDirty=Page.UpcomingB.IsDirty=Page.UpcomingC.IsDirty=!0}},Freeze:function(){if(GM.IsAlive){for(var t=[],e=0;e<this.Cur.UO.arr.length;e++){var i=this.Cur.x+this.Cur.UO.arr[e].x,r=this.Cur.y+this.Cur.UO.arr[e].y;r>=0&&r<=GM.StaticUnits[0].length&&(GM.StaticUnits[i][r]=this.Cur.color),t.indexOf(r)<0&&t.push(r)}GM.CheckUnits(t),new Audio("/sounds/drop.wav").play(),this.Generate()}},DoGravity:function(){0!==this.Cur&&(0===this.CheckCollisions(0,0,1)?this.Cur.y++:this.Freeze());GM.RefreshTimer()},TryRotate:function(){if(0!==this.Cur&&0===this.CheckCollisions(1,0,0))return this.Cur.Rotate(),new Audio("/sounds/rotate.wav").play(),!0;return!1},TryMove:function(t,e){if(0!==this.Cur&&0===this.CheckCollisions(0,t,e))return this.Cur.x+=t,this.Cur.y+=e,e>0&&(GM.RefreshTimer(),GM.ScoreBonus++),!0;return!1},TryDrop:function(){var t=0;if(0!==this.Cur)for(;!0===this.TryMove(0,1)&&t<22;)t++;return t>0&&(GM.ScoreBonus+=2*t,this.Freeze(),!0)},TryProject:function(){var t=0;if(0!==this.Cur)for(;0===this.CheckCollisions(0,0,t)&&t<22;)t++;return t-1},CheckCollisions:function(t,e,i){var r,a=0;r=1===t?this.Cur.UO.nextUO.arr:this.Cur.UO.arr;for(var s=0;s<r.length;s++){var n=this.Cur.x+r[s].x+e,h=this.Cur.y+r[s].y+i,o=GM.StaticUnits.length,c=GM.StaticUnits[0].length;if(n<0||n>=o||h>=c)return-1;h>0&&0!==GM.StaticUnits[n][h]&&a++}return a}},document.addEventListener("keydown",(function(t){var e=event.keyCode||event.which;if(GM.IsAlive){switch(e){case 38:case 87:Page.Game.IsDirty=GM.Pc.TryRotate();break;case 37:case 65:Page.Game.IsDirty=GM.Pc.TryMove(-1,0);break;case 39:case 68:Page.Game.IsDirty=GM.Pc.TryMove(1,0);break;case 40:case 83:Page.Game.IsDirty=GM.Pc.TryMove(0,1);break;case 32:Page.Game.IsDirty=GM.Pc.TryDrop()}Page.Game.IsDirty&&(GM.Pc.ProjY=GM.Pc.TryProject())}}),!1),window.onresize=function(t){Page.WindowChanged()},Init(),Loop();