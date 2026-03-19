(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="162",Ps={ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},C_=0,Dd=1,P_=2,Fm=1,L_=2,nr=3,Gr=0,Xn=1,zn=2,ur=0,Fr=1,bu=2,Id=3,Ud=4,D_=5,ss=100,I_=101,U_=102,Nd=103,Fd=104,N_=200,F_=201,O_=202,B_=203,Tu=204,Au=205,k_=206,z_=207,G_=208,H_=209,V_=210,W_=211,X_=212,Y_=213,q_=214,j_=0,K_=1,Z_=2,Sc=3,$_=4,J_=5,Q_=6,t1=7,Om=0,e1=1,n1=2,Or=0,i1=1,r1=2,s1=3,o1=4,a1=5,c1=6,l1=7,Bm=300,so=301,oo=302,wu=303,Ru=304,Hc=306,Cu=1e3,Ei=1001,Pu=1002,kn=1003,Od=1004,No=1005,vn=1006,bl=1007,as=1008,Br=1009,u1=1010,h1=1011,uh=1012,km=1013,Nr=1014,or=1015,hr=1016,zm=1017,Gm=1018,ms=1020,d1=1021,bi=1023,f1=1024,p1=1025,gs=1026,ao=1027,m1=1028,Hm=1029,g1=1030,Vm=1031,Wm=1033,Tl=33776,Al=33777,wl=33778,Rl=33779,Bd=35840,kd=35841,zd=35842,Gd=35843,Xm=36196,Hd=37492,Vd=37496,Wd=37808,Xd=37809,Yd=37810,qd=37811,jd=37812,Kd=37813,Zd=37814,$d=37815,Jd=37816,Qd=37817,tf=37818,ef=37819,nf=37820,rf=37821,Cl=36492,sf=36494,of=36495,_1=36283,af=36284,cf=36285,lf=36286,v1=3200,x1=3201,y1=0,M1=1,Dr="",Si="srgb",Ti="srgb-linear",hh="display-p3",Vc="display-p3-linear",Ec="linear",Ge="srgb",bc="rec709",Tc="p3",Ds=7680,uf=519,S1=512,E1=513,b1=514,Ym=515,T1=516,A1=517,w1=518,R1=519,hf=35044,df="300 es",Lu=1035,lr=2e3,Ac=2001;class As{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ff=1234567;const qo=Math.PI/180,na=180/Math.PI;function ws(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[e&255]+Rn[e>>8&255]+Rn[e>>16&255]+Rn[e>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[n&63|128]+Rn[n>>8&255]+"-"+Rn[n>>16&255]+Rn[n>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function yn(e,t,n){return Math.max(t,Math.min(n,e))}function dh(e,t){return(e%t+t)%t}function C1(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)}function P1(e,t,n){return e!==t?(n-e)/(t-e):0}function jo(e,t,n){return(1-n)*e+n*t}function L1(e,t,n,i){return jo(e,t,1-Math.exp(-n*i))}function D1(e,t=1){return t-Math.abs(dh(e,t*2)-t)}function I1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function U1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function N1(e,t){return e+Math.floor(Math.random()*(t-e+1))}function F1(e,t){return e+Math.random()*(t-e)}function O1(e){return e*(.5-Math.random())}function B1(e){e!==void 0&&(ff=e);let t=ff+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function k1(e){return e*qo}function z1(e){return e*na}function Du(e){return(e&e-1)===0&&e!==0}function G1(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function wc(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function H1(e,t,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),d=o((t-i)/2),m=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":e.set(a*u,c*h,c*d,a*l);break;case"YZY":e.set(c*d,a*u,c*h,a*l);break;case"ZXZ":e.set(c*h,c*d,a*u,a*l);break;case"XZX":e.set(a*u,c*g,c*m,a*l);break;case"YXY":e.set(c*m,a*u,c*g,a*l);break;case"ZYZ":e.set(c*g,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zs(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function On(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const hc={DEG2RAD:qo,RAD2DEG:na,generateUUID:ws,clamp:yn,euclideanModulo:dh,mapLinear:C1,inverseLerp:P1,lerp:jo,damp:L1,pingpong:D1,smoothstep:I1,smootherstep:U1,randInt:N1,randFloat:F1,randFloatSpread:O1,seededRandom:B1,degToRad:k1,radToDeg:z1,isPowerOfTwo:Du,ceilPowerOfTwo:G1,floorPowerOfTwo:wc,setQuaternionFromProperEuler:H1,normalize:On,denormalize:Zs};class vt{constructor(t=0,n=0){vt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(yn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(t,n,i,r,s,o,a,c,l){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,c,l)}set(t,n,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],m=i[5],g=i[8],y=r[0],p=r[3],f=r[6],E=r[1],x=r[4],S=r[7],D=r[2],R=r[5],w=r[8];return s[0]=o*y+a*E+c*D,s[3]=o*p+a*x+c*R,s[6]=o*f+a*S+c*w,s[1]=l*y+u*E+h*D,s[4]=l*p+u*x+h*R,s[7]=l*f+u*S+h*w,s[2]=d*y+m*E+g*D,s[5]=d*p+m*x+g*R,s[8]=d*f+m*S+g*w,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return n*o*u-n*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*s,m=l*s-o*c,g=n*h+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=h*y,t[1]=(r*l-u*i)*y,t[2]=(a*i-r*o)*y,t[3]=d*y,t[4]=(u*n-r*c)*y,t[5]=(r*s-a*n)*y,t[6]=m*y,t[7]=(i*c-l*n)*y,t[8]=(o*n-i*s)*y,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Pl.makeScale(t,n)),this}rotate(t){return this.premultiply(Pl.makeRotation(-t)),this}translate(t,n){return this.premultiply(Pl.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pl=new de;function qm(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ia(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function V1(){const e=ia("canvas");return e.style.display="block",e}const pf={};function W1(e){e in pf||(pf[e]=!0,console.warn(e))}const mf=new de().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gf=new de().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wa={[Ti]:{transfer:Ec,primaries:bc,toReference:e=>e,fromReference:e=>e},[Si]:{transfer:Ge,primaries:bc,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Vc]:{transfer:Ec,primaries:Tc,toReference:e=>e.applyMatrix3(gf),fromReference:e=>e.applyMatrix3(mf)},[hh]:{transfer:Ge,primaries:Tc,toReference:e=>e.convertSRGBToLinear().applyMatrix3(gf),fromReference:e=>e.applyMatrix3(mf).convertLinearToSRGB()}},X1=new Set([Ti,Vc]),De={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!X1.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=wa[t].toReference,r=wa[n].fromReference;return r(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return wa[e].primaries},getTransfer:function(e){return e===Dr?Ec:wa[e].transfer}};function no(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ll(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Is;class jm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Is===void 0&&(Is=ia("canvas")),Is.width=t.width,Is.height=t.height;const i=Is.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Is}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ia("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=no(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(no(n[i]/255)*255):n[i]=no(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Y1=0;class Km{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Dl(r[o].image)):s.push(Dl(r[o]))}else s=Dl(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function Dl(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?jm.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let q1=0;class Tn extends As{constructor(t=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,i=Ei,r=Ei,s=vn,o=as,a=bi,c=Br,l=Tn.DEFAULT_ANISOTROPY,u=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=ws(),this.name="",this.source=new Km(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cu:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case Pu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cu:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case Pu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Bm;Tn.DEFAULT_ANISOTROPY=1;class Mn{constructor(t=0,n=0,i=0,r=1){Mn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],y=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(l+1)/2,S=(m+1)/2,D=(f+1)/2,R=(u+d)/4,w=(h+y)/4,B=(g+p)/4;return x>S&&x>D?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=w/i):S>D?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=B/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=w/s,r=B/s),this.set(i,r,s,n),this}let E=Math.sqrt((p-g)*(p-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-y)/E,this.z=(d-u)/E,this.w=Math.acos((l+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j1 extends As{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Mn(0,0,t,n),this.scissorTest=!1,this.viewport=new Mn(0,0,t,n);const r={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Km(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends j1{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Zm extends Tn{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K1 extends Tn{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],y=s[o+3];if(a===0){t[n+0]=c,t[n+1]=l,t[n+2]=u,t[n+3]=h;return}if(a===1){t[n+0]=d,t[n+1]=m,t[n+2]=g,t[n+3]=y;return}if(h!==y||c!==d||l!==m||u!==g){let p=1-a;const f=c*d+l*m+u*g+h*y,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const D=Math.sqrt(x),R=Math.atan2(D,f*E);p=Math.sin(p*R)/D,a=Math.sin(a*R)/D}const S=a*E;if(c=c*p+d*S,l=l*p+m*S,u=u*p+g*S,h=h*p+y*S,p===1-a){const D=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=D,l*=D,u*=D,h*=D}}t[n]=c,t[n+1]=l,t[n+2]=u,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[n]=a*g+u*h+c*m-l*d,t[n+1]=c*g+u*d+l*h-a*m,t[n+2]=l*g+u*m+a*d-c*h,t[n+3]=u*g-a*h-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yn(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,o=t._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-n)*u)/l,d=Math.sin(n*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,n=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(_f.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(_f.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Il.copy(this).projectOnVector(t),this.sub(Il)}reflect(t){return this.sub(Il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(yn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Il=new P,_f=new ys;class ha{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(xi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(xi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=xi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xi):xi.fromBufferAttribute(s,o),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ra.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(t.matrixWorld),this.union(Ra)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),Ca.subVectors(this.max,Fo),Us.subVectors(t.a,Fo),Ns.subVectors(t.b,Fo),Fs.subVectors(t.c,Fo),Er.subVectors(Ns,Us),br.subVectors(Fs,Ns),Zr.subVectors(Us,Fs);let n=[0,-Er.z,Er.y,0,-br.z,br.y,0,-Zr.z,Zr.y,Er.z,0,-Er.x,br.z,0,-br.x,Zr.z,0,-Zr.x,-Er.y,Er.x,0,-br.y,br.x,0,-Zr.y,Zr.x,0];return!Ul(n,Us,Ns,Fs,Ca)||(n=[1,0,0,0,1,0,0,0,1],!Ul(n,Us,Ns,Fs,Ca))?!1:(Pa.crossVectors(Er,br),n=[Pa.x,Pa.y,Pa.z],Ul(n,Us,Ns,Fs,Ca))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new P,new P,new P,new P,new P,new P,new P,new P],xi=new P,Ra=new ha,Us=new P,Ns=new P,Fs=new P,Er=new P,br=new P,Zr=new P,Fo=new P,Ca=new P,Pa=new P,$r=new P;function Ul(e,t,n,i,r){for(let s=0,o=e.length-3;s<=o;s+=3){$r.fromArray(e,s);const a=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),c=t.dot($r),l=n.dot($r),u=i.dot($r);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Z1=new ha,Oo=new P,Nl=new P;class Wc{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Z1.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const n=Oo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Oo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(Nl)),this.expandByPoint(Oo.copy(t.center).sub(Nl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new P,Fl=new P,La=new P,Tr=new P,Ol=new P,Da=new P,Bl=new P;class Xc{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ji.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,n),Ji.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){Fl.copy(t).add(n).multiplyScalar(.5),La.copy(n).sub(t).normalize(),Tr.copy(this.origin).sub(Fl);const s=t.distanceTo(n)*.5,o=-this.direction.dot(La),a=Tr.dot(this.direction),c=-Tr.dot(La),l=Tr.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Fl).addScaledVector(La,d),m}intersectSphere(t,n){Ji.subVectors(t.center,this.origin);const i=Ji.dot(this.direction),r=Ji.dot(Ji)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,n,i,r,s){Ol.subVectors(n,t),Da.subVectors(i,t),Bl.crossVectors(Ol,Da);let o=this.direction.dot(Bl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tr.subVectors(this.origin,t);const c=a*this.direction.dot(Da.crossVectors(Tr,Da));if(c<0)return null;const l=a*this.direction.dot(Ol.cross(Tr));if(l<0||c+l>o)return null;const u=-a*Tr.dot(Bl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,n,i,r,s,o,a,c,l,u,h,d,m,g,y,p){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,c,l,u,h,d,m,g,y,p)}set(t,n,i,r,s,o,a,c,l,u,h,d,m,g,y,p){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/Os.setFromMatrixColumn(t,0).length(),s=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,m=o*h,g=a*u,y=a*h;n[0]=c*u,n[4]=-c*h,n[8]=l,n[1]=m+g*l,n[5]=d-y*l,n[9]=-a*c,n[2]=y-d*l,n[6]=g+m*l,n[10]=o*c}else if(t.order==="YXZ"){const d=c*u,m=c*h,g=l*u,y=l*h;n[0]=d+y*a,n[4]=g*a-m,n[8]=o*l,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=m*a-g,n[6]=y+d*a,n[10]=o*c}else if(t.order==="ZXY"){const d=c*u,m=c*h,g=l*u,y=l*h;n[0]=d-y*a,n[4]=-o*h,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(t.order==="ZYX"){const d=o*u,m=o*h,g=a*u,y=a*h;n[0]=c*u,n[4]=g*l-m,n[8]=d*l+y,n[1]=c*h,n[5]=y*l+d,n[9]=m*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,g=a*c,y=a*l;n[0]=c*u,n[4]=y-d*h,n[8]=g*h+m,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=m*h+g,n[10]=d-y*h}else if(t.order==="XZY"){const d=o*c,m=o*l,g=a*c,y=a*l;n[0]=c*u,n[4]=-h,n[8]=l*u,n[1]=d*h+y,n[5]=o*u,n[9]=m*h-g,n[2]=g*h-m,n[6]=a*u,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose($1,t,J1)}lookAt(t,n,i){const r=this.elements;return $n.subVectors(t,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ar.crossVectors(i,$n),Ar.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ar.crossVectors(i,$n)),Ar.normalize(),Ia.crossVectors($n,Ar),r[0]=Ar.x,r[4]=Ia.x,r[8]=$n.x,r[1]=Ar.y,r[5]=Ia.y,r[9]=$n.y,r[2]=Ar.z,r[6]=Ia.z,r[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],m=i[13],g=i[2],y=i[6],p=i[10],f=i[14],E=i[3],x=i[7],S=i[11],D=i[15],R=r[0],w=r[4],B=r[8],ot=r[12],v=r[1],T=r[5],et=r[9],$=r[13],L=r[2],K=r[6],G=r[10],X=r[14],j=r[3],tt=r[7],J=r[11],lt=r[15];return s[0]=o*R+a*v+c*L+l*j,s[4]=o*w+a*T+c*K+l*tt,s[8]=o*B+a*et+c*G+l*J,s[12]=o*ot+a*$+c*X+l*lt,s[1]=u*R+h*v+d*L+m*j,s[5]=u*w+h*T+d*K+m*tt,s[9]=u*B+h*et+d*G+m*J,s[13]=u*ot+h*$+d*X+m*lt,s[2]=g*R+y*v+p*L+f*j,s[6]=g*w+y*T+p*K+f*tt,s[10]=g*B+y*et+p*G+f*J,s[14]=g*ot+y*$+p*X+f*lt,s[3]=E*R+x*v+S*L+D*j,s[7]=E*w+x*T+S*K+D*tt,s[11]=E*B+x*et+S*G+D*J,s[15]=E*ot+x*$+S*X+D*lt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],y=t[7],p=t[11],f=t[15];return g*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*m-i*c*m)+y*(+n*c*m-n*l*d+s*o*d-r*o*m+r*l*u-s*c*u)+p*(+n*l*h-n*a*m-s*o*h+i*o*m+s*a*u-i*l*u)+f*(-r*a*u-n*c*h+n*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],y=t[13],p=t[14],f=t[15],E=h*p*l-y*d*l+y*c*m-a*p*m-h*c*f+a*d*f,x=g*d*l-u*p*l-g*c*m+o*p*m+u*c*f-o*d*f,S=u*y*l-g*h*l+g*a*m-o*y*m-u*a*f+o*h*f,D=g*h*c-u*y*c-g*a*d+o*y*d+u*a*p-o*h*p,R=n*E+i*x+r*S+s*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=E*w,t[1]=(y*d*s-h*p*s-y*r*m+i*p*m+h*r*f-i*d*f)*w,t[2]=(a*p*s-y*c*s+y*r*l-i*p*l-a*r*f+i*c*f)*w,t[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*m-i*c*m)*w,t[4]=x*w,t[5]=(u*p*s-g*d*s+g*r*m-n*p*m-u*r*f+n*d*f)*w,t[6]=(g*c*s-o*p*s-g*r*l+n*p*l+o*r*f-n*c*f)*w,t[7]=(o*d*s-u*c*s+u*r*l-n*d*l-o*r*m+n*c*m)*w,t[8]=S*w,t[9]=(g*h*s-u*y*s-g*i*m+n*y*m+u*i*f-n*h*f)*w,t[10]=(o*y*s-g*a*s+g*i*l-n*y*l-o*i*f+n*a*f)*w,t[11]=(u*a*s-o*h*s-u*i*l+n*h*l+o*i*m-n*a*m)*w,t[12]=D*w,t[13]=(u*y*r-g*h*r+g*i*d-n*y*d-u*i*p+n*h*p)*w,t[14]=(g*a*r-o*y*r-g*i*c+n*y*c+o*i*p-n*a*p)*w,t[15]=(o*h*r-u*a*r+u*i*c-n*h*c-o*i*d+n*a*d)*w,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,u=o+o,h=a+a,d=s*l,m=s*u,g=s*h,y=o*u,p=o*h,f=a*h,E=c*l,x=c*u,S=c*h,D=i.x,R=i.y,w=i.z;return r[0]=(1-(y+f))*D,r[1]=(m+S)*D,r[2]=(g-x)*D,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(d+f))*R,r[6]=(p+E)*R,r[7]=0,r[8]=(g+x)*w,r[9]=(p-E)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=Os.set(r[0],r[1],r[2]).length();const o=Os.set(r[4],r[5],r[6]).length(),a=Os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],yi.copy(this);const l=1/s,u=1/o,h=1/a;return yi.elements[0]*=l,yi.elements[1]*=l,yi.elements[2]*=l,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=h,yi.elements[9]*=h,yi.elements[10]*=h,n.setFromRotationMatrix(yi),i.x=s,i.y=o,i.z=a,this}makePerspective(t,n,i,r,s,o,a=lr){const c=this.elements,l=2*s/(n-t),u=2*s/(i-r),h=(n+t)/(n-t),d=(i+r)/(i-r);let m,g;if(a===lr)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ac)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,r,s,o,a=lr){const c=this.elements,l=1/(n-t),u=1/(i-r),h=1/(o-s),d=(n+t)*l,m=(i+r)*u;let g,y;if(a===lr)g=(o+s)*h,y=-2*h;else if(a===Ac)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Os=new P,yi=new qe,$1=new P(0,0,0),J1=new P(1,1,1),Ar=new P,Ia=new P,$n=new P,vf=new qe,xf=new ys;class pr{constructor(t=0,n=0,i=0,r=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(yn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-yn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(yn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return vf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vf,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return xf.setFromEuler(this),this.setFromQuaternion(xf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class fh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Q1=0;const yf=new P,Bs=new ys,Qi=new qe,Ua=new P,Bo=new P,tv=new P,ev=new ys,Mf=new P(1,0,0),Sf=new P(0,1,0),Ef=new P(0,0,1),nv={type:"added"},iv={type:"removed"},kl={type:"childadded",child:null},zl={type:"childremoved",child:null};class An extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new P,n=new pr,i=new ys,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qe},normalMatrix:{value:new de}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Bs.setFromAxisAngle(t,n),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,n){return Bs.setFromAxisAngle(t,n),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(Mf,t)}rotateY(t){return this.rotateOnAxis(Sf,t)}rotateZ(t){return this.rotateOnAxis(Ef,t)}translateOnAxis(t,n){return yf.copy(t).applyQuaternion(this.quaternion),this.position.add(yf.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Mf,t)}translateY(t){return this.translateOnAxis(Sf,t)}translateZ(t){return this.translateOnAxis(Ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ua.copy(t):Ua.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Bo,Ua,this.up):Qi.lookAt(Ua,Bo,this.up),this.quaternion.setFromRotationMatrix(Qi),r&&(Qi.extractRotation(r.matrixWorld),Bs.setFromRotationMatrix(Qi),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(nv),kl.child=t,this.dispatchEvent(kl),kl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(iv),zl.child=t,this.dispatchEvent(zl),zl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,tv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,ev,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(n){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}An.DEFAULT_UP=new P(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new P,tr=new P,Gl=new P,er=new P,ks=new P,zs=new P,bf=new P,Hl=new P,Vl=new P,Wl=new P;class Hi{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),Mi.subVectors(t,n),r.cross(Mi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){Mi.subVectors(r,n),tr.subVectors(i,n),Gl.subVectors(t,n);const o=Mi.dot(Mi),a=Mi.dot(tr),c=Mi.dot(Gl),l=tr.dot(tr),u=tr.dot(Gl),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(t,n,i,r,s,o,a,c){return this.getBarycoord(t,n,i,r,er)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,er.x),c.addScaledVector(o,er.y),c.addScaledVector(a,er.z),c)}static isFrontFacing(t,n,i,r){return Mi.subVectors(i,n),tr.subVectors(t,n),Mi.cross(tr).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Mi.cross(tr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Hi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return Hi.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return Hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let o,a;ks.subVectors(r,i),zs.subVectors(s,i),Hl.subVectors(t,i);const c=ks.dot(Hl),l=zs.dot(Hl);if(c<=0&&l<=0)return n.copy(i);Vl.subVectors(t,r);const u=ks.dot(Vl),h=zs.dot(Vl);if(u>=0&&h<=u)return n.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(ks,o);Wl.subVectors(t,s);const m=ks.dot(Wl),g=zs.dot(Wl);if(g>=0&&m<=g)return n.copy(s);const y=m*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(zs,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return bf.subVectors(s,r),a=(h-u)/(h-u+(m-g)),n.copy(r).addScaledVector(bf,a);const f=1/(p+y+d);return o=y*f,a=d*f,n.copy(i).addScaledVector(ks,o).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Na={h:0,s:0,l:0};function Xl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class fe{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=De.workingColorSpace){return this.r=t,this.g=n,this.b=i,De.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=De.workingColorSpace){if(t=dh(t,1),n=yn(n,0,1),i=yn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Xl(o,s,t+1/3),this.g=Xl(o,s,t),this.b=Xl(o,s,t-1/3)}return De.toWorkingColorSpace(this,r),this}setStyle(t,n=Si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Si){const i=$m[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}copyLinearToSRGB(t){return this.r=Ll(t.r),this.g=Ll(t.g),this.b=Ll(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return De.fromWorkingColorSpace(Cn.copy(this),t),Math.round(yn(Cn.r*255,0,255))*65536+Math.round(yn(Cn.g*255,0,255))*256+Math.round(yn(Cn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=De.workingColorSpace){De.fromWorkingColorSpace(Cn.copy(this),n);const i=Cn.r,r=Cn.g,s=Cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,n=De.workingColorSpace){return De.fromWorkingColorSpace(Cn.copy(this),n),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=Si){De.fromWorkingColorSpace(Cn.copy(this),t);const n=Cn.r,i=Cn.g,r=Cn.b;return t!==Si?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(wr),this.setHSL(wr.h+t,wr.s+n,wr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(wr),t.getHSL(Na);const i=jo(wr.h,Na.h,n),r=jo(wr.s,Na.s,n),s=jo(wr.l,Na.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new fe;fe.NAMES=$m;let rv=0;class da extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Fr,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tu,this.blendDst=Au,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==Gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tu&&(i.blendSrc=this.blendSrc),this.blendDst!==Au&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(n){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class rr extends da{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=Om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new P,Fa=new vt;class Ye{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=hf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return W1("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fa.fromBufferAttribute(this,n),Fa.applyMatrix3(t),this.setXY(n,Fa.x,Fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix3(t),this.setXYZ(n,an.x,an.y,an.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(t),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(t),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.transformDirection(t),this.setXYZ(n,an.x,an.y,an.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Zs(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Zs(n,this.array)),n}setX(t,n){return this.normalized&&(n=On(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Zs(n,this.array)),n}setY(t,n){return this.normalized&&(n=On(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Zs(n,this.array)),n}setZ(t,n){return this.normalized&&(n=On(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Zs(n,this.array)),n}setW(t,n){return this.normalized&&(n=On(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array),r=On(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array),r=On(r,this.array),s=On(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hf&&(t.usage=this.usage),t}}class Jm extends Ye{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Qm extends Ye{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Sn extends Ye{constructor(t,n,i){super(new Float32Array(t),n,i)}}let sv=0;const ai=new qe,Yl=new An,Gs=new P,Jn=new ha,ko=new ha,mn=new P;class In extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qm(t)?Qm:Jm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new de().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,n,i){return ai.makeTranslation(t,n,i),this.applyMatrix4(ai),this}scale(t,n,i){return ai.makeScale(t,n,i),this.applyMatrix4(ai),this}lookAt(t){return Yl.lookAt(t),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const n=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(Jn.min,ko.min),Jn.expandByPoint(mn),mn.addVectors(Jn.max,ko.max),Jn.expandByPoint(mn)):(Jn.expandByPoint(ko.min),Jn.expandByPoint(ko.max))}Jn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)mn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(mn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)mn.fromBufferAttribute(a,l),c&&(Gs.fromBufferAttribute(t,l),mn.add(Gs)),r=Math.max(r,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<i.count;B++)a[B]=new P,c[B]=new P;const l=new P,u=new P,h=new P,d=new vt,m=new vt,g=new vt,y=new P,p=new P;function f(B,ot,v){l.fromBufferAttribute(i,B),u.fromBufferAttribute(i,ot),h.fromBufferAttribute(i,v),d.fromBufferAttribute(s,B),m.fromBufferAttribute(s,ot),g.fromBufferAttribute(s,v),u.sub(l),h.sub(l),m.sub(d),g.sub(d);const T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(T),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(T),a[B].add(y),a[ot].add(y),a[v].add(y),c[B].add(p),c[ot].add(p),c[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let B=0,ot=E.length;B<ot;++B){const v=E[B],T=v.start,et=v.count;for(let $=T,L=T+et;$<L;$+=3)f(t.getX($+0),t.getX($+1),t.getX($+2))}const x=new P,S=new P,D=new P,R=new P;function w(B){D.fromBufferAttribute(r,B),R.copy(D);const ot=a[B];x.copy(ot),x.sub(D.multiplyScalar(D.dot(ot))).normalize(),S.crossVectors(R,ot);const T=S.dot(c[B])<0?-1:1;o.setXYZW(B,x.x,x.y,x.z,T)}for(let B=0,ot=E.length;B<ot;++B){const v=E[B],T=v.start,et=v.count;for(let $=T,L=T+et;$<L;$+=3)w(t.getX($+0)),w(t.getX($+1)),w(t.getX($+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ye(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),y=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)mn.fromBufferAttribute(t,n),mn.normalize(),t.setXYZ(n,mn.x,mn.y,mn.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*u;for(let f=0;f<u;f++)d[g++]=l[m++]}return new Ye(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new In,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);n.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=t(d,i);c.push(m)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tf=new qe,Jr=new Xc,Oa=new Wc,Af=new P,Hs=new P,Vs=new P,Ws=new P,ql=new P,Ba=new P,ka=new vt,za=new vt,Ga=new vt,wf=new P,Rf=new P,Cf=new P,Ha=new P,Va=new P;class Ln extends An{constructor(t=new In,n=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ba.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(ql.fromBufferAttribute(h,t),o?Ba.addScaledVector(ql,u):Ba.addScaledVector(ql.sub(n),u))}n.add(Ba)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),Jr.copy(t.ray).recast(t.near),!(Oa.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Oa,Af)===null||Jr.origin.distanceToSquared(Af)>(t.far-t.near)**2))&&(Tf.copy(s).invert(),Jr.copy(t.ray).applyMatrix4(Tf),!(i.boundingBox!==null&&Jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Jr)))}_computeIntersections(t,n,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,D=x;S<D;S+=3){const R=a.getX(S),w=a.getX(S+1),B=a.getX(S+2);r=Wa(this,f,t,i,l,u,h,R,w,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){const E=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);r=Wa(this,o,t,i,l,u,h,E,x,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,D=x;S<D;S+=3){const R=S,w=S+1,B=S+2;r=Wa(this,f,t,i,l,u,h,R,w,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){const E=p,x=p+1,S=p+2;r=Wa(this,o,t,i,l,u,h,E,x,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function ov(e,t,n,i,r,s,o,a){let c;if(t.side===Xn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===Gr,a),c===null)return null;Va.copy(a),Va.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(Va);return l<n.near||l>n.far?null:{distance:l,point:Va.clone(),object:e}}function Wa(e,t,n,i,r,s,o,a,c,l){e.getVertexPosition(a,Hs),e.getVertexPosition(c,Vs),e.getVertexPosition(l,Ws);const u=ov(e,t,n,i,Hs,Vs,Ws,Ha);if(u){r&&(ka.fromBufferAttribute(r,a),za.fromBufferAttribute(r,c),Ga.fromBufferAttribute(r,l),u.uv=Hi.getInterpolation(Ha,Hs,Vs,Ws,ka,za,Ga,new vt)),s&&(ka.fromBufferAttribute(s,a),za.fromBufferAttribute(s,c),Ga.fromBufferAttribute(s,l),u.uv1=Hi.getInterpolation(Ha,Hs,Vs,Ws,ka,za,Ga,new vt)),o&&(wf.fromBufferAttribute(o,a),Rf.fromBufferAttribute(o,c),Cf.fromBufferAttribute(o,l),u.normal=Hi.getInterpolation(Ha,Hs,Vs,Ws,wf,Rf,Cf,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new P,materialIndex:0};Hi.getNormal(Hs,Vs,Ws,h.normal),u.face=h}return u}class fa extends In{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,i,n,t,o,s,0),g("z","y","x",1,-1,i,n,-t,o,s,1),g("x","z","y",1,1,t,i,n,r,o,2),g("x","z","y",1,-1,t,i,-n,r,o,3),g("x","y","z",1,-1,t,n,i,r,s,4),g("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Sn(l,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(h,2));function g(y,p,f,E,x,S,D,R,w,B,ot){const v=S/w,T=D/B,et=S/2,$=D/2,L=R/2,K=w+1,G=B+1;let X=0,j=0;const tt=new P;for(let J=0;J<G;J++){const lt=J*T-$;for(let Tt=0;Tt<K;Tt++){const Xt=Tt*v-et;tt[y]=Xt*E,tt[p]=lt*x,tt[f]=L,l.push(tt.x,tt.y,tt.z),tt[y]=0,tt[p]=0,tt[f]=R>0?1:-1,u.push(tt.x,tt.y,tt.z),h.push(Tt/w),h.push(1-J/B),X+=1}}for(let J=0;J<B;J++)for(let lt=0;lt<w;lt++){const Tt=d+lt+K*J,Xt=d+lt+K*(J+1),V=d+(lt+1)+K*(J+1),st=d+(lt+1)+K*J;c.push(Tt,Xt,st),c.push(Xt,V,st),j+=6}a.addGroup(m,j,ot),m+=j,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function co(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function Bn(e){const t={};for(let n=0;n<e.length;n++){const i=co(e[n]);for(const r in i)t[r]=i[r]}return t}function av(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function tg(e){return e.getRenderTarget()===null?e.outputColorSpace:De.workingColorSpace}const Rc={clone:co,merge:Bn};var cv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends da{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cv,this.fragmentShader=lv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=co(t.uniforms),this.uniformsGroups=av(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class eg extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=lr}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new P,Pf=new vt,Lf=new vt;class hi extends eg{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=na*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return na*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rr.x,Rr.y).multiplyScalar(-t/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rr.x,Rr.y).multiplyScalar(-t/Rr.z)}getViewSize(t,n){return this.getViewBounds(t,Pf,Lf),n.subVectors(Lf,Pf)}setViewOffset(t,n,i,r,s,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(qo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xs=-90,Ys=1;class uv extends An{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hi(Xs,Ys,t,n);r.layers=this.layers,this.add(r);const s=new hi(Xs,Ys,t,n);s.layers=this.layers,this.add(s);const o=new hi(Xs,Ys,t,n);o.layers=this.layers,this.add(o);const a=new hi(Xs,Ys,t,n);a.layers=this.layers,this.add(a);const c=new hi(Xs,Ys,t,n);c.layers=this.layers,this.add(c);const l=new hi(Xs,Ys,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,c]=n;for(const l of n)this.remove(l);if(t===lr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,o),t.setRenderTarget(i,2,r),t.render(n,a),t.setRenderTarget(i,3,r),t.render(n,c),t.setRenderTarget(i,4,r),t.render(n,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),t.render(n,u),t.setRenderTarget(h,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ng extends Tn{constructor(t,n,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],n=n!==void 0?n:so,super(t,n,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hv extends Ai{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new ng(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fa(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:ur});s.uniforms.tEquirect.value=n;const o=new Ln(r,s),a=n.minFilter;return n.minFilter===as&&(n.minFilter=vn),new uv(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,r);t.setRenderTarget(s)}}const jl=new P,dv=new P,fv=new de;class Lr{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=jl.subVectors(i,n).cross(dv.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(jl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||fv.getNormalMatrix(t),r=this.coplanarPoint(jl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Wc,Xa=new P;class ph{constructor(t=new Lr,n=new Lr,i=new Lr,r=new Lr,s=new Lr,o=new Lr){this.planes=[t,n,i,r,s,o]}set(t,n,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=lr){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],m=r[8],g=r[9],y=r[10],p=r[11],f=r[12],E=r[13],x=r[14],S=r[15];if(i[0].setComponents(c-s,d-l,p-m,S-f).normalize(),i[1].setComponents(c+s,d+l,p+m,S+f).normalize(),i[2].setComponents(c+o,d+u,p+g,S+E).normalize(),i[3].setComponents(c-o,d-u,p-g,S-E).normalize(),i[4].setComponents(c-a,d-h,p-y,S-x).normalize(),n===lr)i[5].setComponents(c+a,d+h,p+y,S+x).normalize();else if(n===Ac)i[5].setComponents(a,h,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(t){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xa.x=r.normal.x>0?t.max.x:t.min.x,Xa.y=r.normal.y>0?t.max.y:t.min.y,Xa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ig(){let e=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function pv(e,t){const n=t.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,d=l.usage,m=h.byteLength,g=e.createBuffer();e.bindBuffer(u,g),e.bufferData(u,h,d),l.onUploadCallback();let y;if(h instanceof Float32Array)y=e.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)y=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=e.SHORT;else if(h instanceof Uint32Array)y=e.UNSIGNED_INT;else if(h instanceof Int32Array)y=e.INT;else if(h instanceof Int8Array)y=e.BYTE;else if(h instanceof Uint8Array)y=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,h){const d=u.array,m=u._updateRange,g=u.updateRanges;if(e.bindBuffer(h,l),m.count===-1&&g.length===0&&e.bufferSubData(h,0,d),g.length!==0){for(let y=0,p=g.length;y<p;y++){const f=g[y];n?e.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):e.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(n?e.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):e.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(e.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);if(h===void 0)i.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}class pa extends In{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,d=n/c,m=[],g=[],y=[],p=[];for(let f=0;f<u;f++){const E=f*d-o;for(let x=0;x<l;x++){const S=x*h-s;g.push(S,-E,0),y.push(0,0,1),p.push(x/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const x=E+l*f,S=E+l*(f+1),D=E+1+l*(f+1),R=E+1+l*f;m.push(x,S,R),m.push(S,D,R)}this.setIndex(m),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(y,3)),this.setAttribute("uv",new Sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.width,t.height,t.widthSegments,t.heightSegments)}}var mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_v=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ev=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Av=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,r2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,c2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,p2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,M2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,S2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,L2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,D2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,I2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,X2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,J2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ex=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ox=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:mv,alphahash_pars_fragment:gv,alphamap_fragment:_v,alphamap_pars_fragment:vv,alphatest_fragment:xv,alphatest_pars_fragment:yv,aomap_fragment:Mv,aomap_pars_fragment:Sv,batching_pars_vertex:Ev,batching_vertex:bv,begin_vertex:Tv,beginnormal_vertex:Av,bsdfs:wv,iridescence_fragment:Rv,bumpmap_pars_fragment:Cv,clipping_planes_fragment:Pv,clipping_planes_pars_fragment:Lv,clipping_planes_pars_vertex:Dv,clipping_planes_vertex:Iv,color_fragment:Uv,color_pars_fragment:Nv,color_pars_vertex:Fv,color_vertex:Ov,common:Bv,cube_uv_reflection_fragment:kv,defaultnormal_vertex:zv,displacementmap_pars_vertex:Gv,displacementmap_vertex:Hv,emissivemap_fragment:Vv,emissivemap_pars_fragment:Wv,colorspace_fragment:Xv,colorspace_pars_fragment:Yv,envmap_fragment:qv,envmap_common_pars_fragment:jv,envmap_pars_fragment:Kv,envmap_pars_vertex:Zv,envmap_physical_pars_fragment:c2,envmap_vertex:$v,fog_vertex:Jv,fog_pars_vertex:Qv,fog_fragment:t2,fog_pars_fragment:e2,gradientmap_pars_fragment:n2,lightmap_fragment:i2,lightmap_pars_fragment:r2,lights_lambert_fragment:s2,lights_lambert_pars_fragment:o2,lights_pars_begin:a2,lights_toon_fragment:l2,lights_toon_pars_fragment:u2,lights_phong_fragment:h2,lights_phong_pars_fragment:d2,lights_physical_fragment:f2,lights_physical_pars_fragment:p2,lights_fragment_begin:m2,lights_fragment_maps:g2,lights_fragment_end:_2,logdepthbuf_fragment:v2,logdepthbuf_pars_fragment:x2,logdepthbuf_pars_vertex:y2,logdepthbuf_vertex:M2,map_fragment:S2,map_pars_fragment:E2,map_particle_fragment:b2,map_particle_pars_fragment:T2,metalnessmap_fragment:A2,metalnessmap_pars_fragment:w2,morphinstance_vertex:R2,morphcolor_vertex:C2,morphnormal_vertex:P2,morphtarget_pars_vertex:L2,morphtarget_vertex:D2,normal_fragment_begin:I2,normal_fragment_maps:U2,normal_pars_fragment:N2,normal_pars_vertex:F2,normal_vertex:O2,normalmap_pars_fragment:B2,clearcoat_normal_fragment_begin:k2,clearcoat_normal_fragment_maps:z2,clearcoat_pars_fragment:G2,iridescence_pars_fragment:H2,opaque_fragment:V2,packing:W2,premultiplied_alpha_fragment:X2,project_vertex:Y2,dithering_fragment:q2,dithering_pars_fragment:j2,roughnessmap_fragment:K2,roughnessmap_pars_fragment:Z2,shadowmap_pars_fragment:$2,shadowmap_pars_vertex:J2,shadowmap_vertex:Q2,shadowmask_pars_fragment:tx,skinbase_vertex:ex,skinning_pars_vertex:nx,skinning_vertex:ix,skinnormal_vertex:rx,specularmap_fragment:sx,specularmap_pars_fragment:ox,tonemapping_fragment:ax,tonemapping_pars_fragment:cx,transmission_fragment:lx,transmission_pars_fragment:ux,uv_pars_fragment:hx,uv_pars_vertex:dx,uv_vertex:fx,worldpos_vertex:px,background_vert:mx,background_frag:gx,backgroundCube_vert:_x,backgroundCube_frag:vx,cube_vert:xx,cube_frag:yx,depth_vert:Mx,depth_frag:Sx,distanceRGBA_vert:Ex,distanceRGBA_frag:bx,equirect_vert:Tx,equirect_frag:Ax,linedashed_vert:wx,linedashed_frag:Rx,meshbasic_vert:Cx,meshbasic_frag:Px,meshlambert_vert:Lx,meshlambert_frag:Dx,meshmatcap_vert:Ix,meshmatcap_frag:Ux,meshnormal_vert:Nx,meshnormal_frag:Fx,meshphong_vert:Ox,meshphong_frag:Bx,meshphysical_vert:kx,meshphysical_frag:zx,meshtoon_vert:Gx,meshtoon_frag:Hx,points_vert:Vx,points_frag:Wx,shadow_vert:Xx,shadow_frag:Yx,sprite_vert:qx,sprite_frag:jx},yt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},zi={basic:{uniforms:Bn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Bn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new fe(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Bn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Bn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Bn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new fe(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Bn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Bn([yt.points,yt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Bn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Bn([yt.common,yt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Bn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Bn([yt.sprite,yt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Bn([yt.common,yt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Bn([yt.lights,yt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};zi.physical={uniforms:Bn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Ya={r:0,b:0,g:0},ts=new pr,Kx=new qe;function Zx(e,t,n,i,r,s,o){const a=new fe(0);let c=s===!0?0:1,l,u,h=null,d=0,m=null;function g(p,f){let E=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?n:t).get(x)),x===null?y(a,c):x&&x.isColor&&(y(x,1),E=!0);const S=e.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||E)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Hc)?(u===void 0&&(u=new Ln(new fa(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:co(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ts.copy(f.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(ts)),u.material.toneMapped=De.getTransfer(x.colorSpace)!==Ge,(h!==x||d!==x.version||m!==e.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,m=e.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ln(new pa(2,2),new Un({name:"BackgroundMaterial",uniforms:co(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=De.getTransfer(x.colorSpace)!==Ge,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||m!==e.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,m=e.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,f){p.getRGB(Ya,tg(e)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,y(a,c)},render:g}}function $x(e,t,n,i){const r=e.getParameter(e.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null);let l=c,u=!1;function h(L,K,G,X,j){let tt=!1;if(o){const J=y(X,G,K);l!==J&&(l=J,m(l.object)),tt=f(L,X,G,j),tt&&E(L,X,G,j)}else{const J=K.wireframe===!0;(l.geometry!==X.id||l.program!==G.id||l.wireframe!==J)&&(l.geometry=X.id,l.program=G.id,l.wireframe=J,tt=!0)}j!==null&&n.update(j,e.ELEMENT_ARRAY_BUFFER),(tt||u)&&(u=!1,B(L,K,G,X),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(j).buffer))}function d(){return i.isWebGL2?e.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?e.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?e.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,K,G){const X=G.wireframe===!0;let j=a[L.id];j===void 0&&(j={},a[L.id]=j);let tt=j[K.id];tt===void 0&&(tt={},j[K.id]=tt);let J=tt[X];return J===void 0&&(J=p(d()),tt[X]=J),J}function p(L){const K=[],G=[],X=[];for(let j=0;j<r;j++)K[j]=0,G[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:G,attributeDivisors:X,object:L,attributes:{},index:null}}function f(L,K,G,X){const j=l.attributes,tt=K.attributes;let J=0;const lt=G.getAttributes();for(const Tt in lt)if(lt[Tt].location>=0){const V=j[Tt];let st=tt[Tt];if(st===void 0&&(Tt==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),Tt==="instanceColor"&&L.instanceColor&&(st=L.instanceColor)),V===void 0||V.attribute!==st||st&&V.data!==st.data)return!0;J++}return l.attributesNum!==J||l.index!==X}function E(L,K,G,X){const j={},tt=K.attributes;let J=0;const lt=G.getAttributes();for(const Tt in lt)if(lt[Tt].location>=0){let V=tt[Tt];V===void 0&&(Tt==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),Tt==="instanceColor"&&L.instanceColor&&(V=L.instanceColor));const st={};st.attribute=V,V&&V.data&&(st.data=V.data),j[Tt]=st,J++}l.attributes=j,l.attributesNum=J,l.index=X}function x(){const L=l.newAttributes;for(let K=0,G=L.length;K<G;K++)L[K]=0}function S(L){D(L,0)}function D(L,K){const G=l.newAttributes,X=l.enabledAttributes,j=l.attributeDivisors;G[L]=1,X[L]===0&&(e.enableVertexAttribArray(L),X[L]=1),j[L]!==K&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,K),j[L]=K)}function R(){const L=l.newAttributes,K=l.enabledAttributes;for(let G=0,X=K.length;G<X;G++)K[G]!==L[G]&&(e.disableVertexAttribArray(G),K[G]=0)}function w(L,K,G,X,j,tt,J){J===!0?e.vertexAttribIPointer(L,K,G,j,tt):e.vertexAttribPointer(L,K,G,X,j,tt)}function B(L,K,G,X){if(i.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const j=X.attributes,tt=G.getAttributes(),J=K.defaultAttributeValues;for(const lt in tt){const Tt=tt[lt];if(Tt.location>=0){let Xt=j[lt];if(Xt===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(Xt=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(Xt=L.instanceColor)),Xt!==void 0){const V=Xt.normalized,st=Xt.itemSize,Mt=n.get(Xt);if(Mt===void 0)continue;const kt=Mt.buffer,Pt=Mt.type,Et=Mt.bytesPerElement,Yt=i.isWebGL2===!0&&(Pt===e.INT||Pt===e.UNSIGNED_INT||Xt.gpuType===km);if(Xt.isInterleavedBufferAttribute){const jt=Xt.data,F=jt.stride,ze=Xt.offset;if(jt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<Tt.locationSize;Ut++)D(Tt.location+Ut,jt.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=jt.meshPerAttribute*jt.count)}else for(let Ut=0;Ut<Tt.locationSize;Ut++)S(Tt.location+Ut);e.bindBuffer(e.ARRAY_BUFFER,kt);for(let Ut=0;Ut<Tt.locationSize;Ut++)w(Tt.location+Ut,st/Tt.locationSize,Pt,V,F*Et,(ze+st/Tt.locationSize*Ut)*Et,Yt)}else{if(Xt.isInstancedBufferAttribute){for(let jt=0;jt<Tt.locationSize;jt++)D(Tt.location+jt,Xt.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Xt.meshPerAttribute*Xt.count)}else for(let jt=0;jt<Tt.locationSize;jt++)S(Tt.location+jt);e.bindBuffer(e.ARRAY_BUFFER,kt);for(let jt=0;jt<Tt.locationSize;jt++)w(Tt.location+jt,st/Tt.locationSize,Pt,V,st*Et,st/Tt.locationSize*jt*Et,Yt)}}else if(J!==void 0){const V=J[lt];if(V!==void 0)switch(V.length){case 2:e.vertexAttrib2fv(Tt.location,V);break;case 3:e.vertexAttrib3fv(Tt.location,V);break;case 4:e.vertexAttrib4fv(Tt.location,V);break;default:e.vertexAttrib1fv(Tt.location,V)}}}}R()}function ot(){et();for(const L in a){const K=a[L];for(const G in K){const X=K[G];for(const j in X)g(X[j].object),delete X[j];delete K[G]}delete a[L]}}function v(L){if(a[L.id]===void 0)return;const K=a[L.id];for(const G in K){const X=K[G];for(const j in X)g(X[j].object),delete X[j];delete K[G]}delete a[L.id]}function T(L){for(const K in a){const G=a[K];if(G[L.id]===void 0)continue;const X=G[L.id];for(const j in X)g(X[j].object),delete X[j];delete G[L.id]}}function et(){$(),u=!0,l!==c&&(l=c,m(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:et,resetDefaultState:$,dispose:ot,releaseStatesOfGeometry:v,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:S,disableUnusedAttributes:R}}function Jx(e,t,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){e.drawArrays(s,u,h),n.update(h,s,1)}function c(u,h,d){if(d===0)return;let m,g;if(r)m=e,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,h,d),n.update(h,s,d)}function l(u,h,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y];n.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Qx(e,t,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),y=e.getParameter(e.MAX_VERTEX_ATTRIBS),p=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),f=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=o||t.has("OES_texture_float"),D=x&&S,R=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:D,maxSamples:R}}function ty(e){const t=this;let n=null,i=0,r=!1,s=!1;const o=new Lr,a=new de,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,f=e.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const E=s?0:i,x=E*4;let S=f.clippingState||null;c.value=S,S=u(g,d,x,m);for(let D=0;D!==x;++D)S[D]=n[D];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,m,g){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=c.value,g!==!0||p===null){const f=m+y*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,S=m;x!==y;++x,S+=4)o.copy(h[x]).applyMatrix4(E,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function ey(e){let t=new WeakMap;function n(o,a){return a===wu?o.mapping=so:a===Ru&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===wu||a===Ru)if(t.has(o)){const c=t.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new hv(c.height);return l.fromEquirectangularTexture(e,o),t.set(o,l),o.addEventListener("dispose",r),n(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class mh extends eg{constructor(t=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const $s=4,Df=[.125,.215,.35,.446,.526,.582],os=20,Kl=new mh,If=new fe;let Zl=null,$l=0,Jl=0;const is=(1+Math.sqrt(5))/2,qs=1/is,Uf=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,is,qs),new P(0,is,-qs),new P(qs,0,is),new P(-qs,0,is),new P(is,qs,0),new P(-is,qs,0)];class Nf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){Zl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zl,$l,Jl),t.scissorTest=!1,qa(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===so||t.mapping===oo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:hr,format:bi,colorSpace:Ti,depthBuffer:!1},r=Ff(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ff(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ny(s)),this._blurMaterial=iy(s,t,n)}return r}_compileMaterial(t){const n=new Ln(this._lodPlanes[0],t);this._renderer.compile(n,Kl)}_sceneToCubeUV(t,n,i,r){const a=new hi(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(If),u.toneMapping=Or,u.autoClear=!1;const m=new rr({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),g=new Ln(new fa,m);let y=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,y=!0):(m.color.copy(If),y=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;qa(r,E*x,f>2?x:0,x,x),u.setRenderTarget(r),y&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===so||t.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;qa(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Kl)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Uf[(r-1)%Uf.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ln(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*os-1),y=s/g,p=isFinite(s)?1+Math.floor(u*y):os;p>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${os}`);const f=[];let E=0;for(let w=0;w<os;++w){const B=w/y,ot=Math.exp(-B*B/2);f.push(ot),w===0?E+=ot:w<p&&(E+=2*ot)}for(let w=0;w<f.length;w++)f[w]=f[w]/E;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const S=this._sizeLods[r],D=3*S*(r>x-$s?r-x+$s:0),R=4*(this._cubeSize-S);qa(n,D,R,3*S,2*S),c.setRenderTarget(n),c.render(h,Kl)}}function ny(e){const t=[],n=[],i=[];let r=e;const s=e-$s+1+Df.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let c=1/a;o>e-$s?c=Df[o-e+$s-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,y=3,p=2,f=1,E=new Float32Array(y*g*m),x=new Float32Array(p*g*m),S=new Float32Array(f*g*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,B=R>2?0:-1,ot=[w,B,0,w+2/3,B,0,w+2/3,B+1,0,w,B,0,w+2/3,B+1,0,w,B+1,0];E.set(ot,y*g*R),x.set(d,p*g*R);const v=[R,R,R,R,R,R];S.set(v,f*g*R)}const D=new In;D.setAttribute("position",new Ye(E,y)),D.setAttribute("uv",new Ye(x,p)),D.setAttribute("faceIndex",new Ye(S,f)),t.push(D),r>$s&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Ff(e,t,n){const i=new Ai(e,t,n);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function iy(e,t,n){const i=new Float32Array(os),r=new P(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Of(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Bf(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function gh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ry(e){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===wu||c===Ru,u=c===so||c===oo;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return n===null&&(n=new Nf(e)),h=l?n.fromEquirectangular(a,h):n.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){n===null&&(n=new Nf(e));const d=l?n.fromEquirectangular(a):n.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function sy(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oy(e,t,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let p=0,f=y.length;p<f;p++)t.remove(y[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],e.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const y=m[g];for(let p=0,f=y.length;p<f;p++)t.update(y[p],e.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let y=0;if(m!==null){const E=m.array;y=m.version;for(let x=0,S=E.length;x<S;x+=3){const D=E[x+0],R=E[x+1],w=E[x+2];d.push(D,R,R,w,w,D)}}else if(g!==void 0){const E=g.array;y=g.version;for(let x=0,S=E.length/3-1;x<S;x+=3){const D=x+0,R=x+1,w=x+2;d.push(D,R,R,w,w,D)}}else return;const p=new(qm(d)?Qm:Jm)(d,1);p.version=y;const f=s.get(h);f&&t.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ay(e,t,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,g){e.drawElements(s,g,a,m*c),n.update(g,s,1)}function h(m,g,y){if(y===0)return;let p,f;if(r)p=e,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*c,y),n.update(g,s,y)}function d(m,g,y){if(y===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<y;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,y);let f=0;for(let E=0;E<y;E++)f+=g[E];n.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function cy(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(s/3);break;case e.LINES:n.lines+=a*(s/2);break;case e.LINE_STRIP:n.lines+=a*(s-1);break;case e.LINE_LOOP:n.lines+=a*s;break;case e.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ly(e,t){return e[0]-t[0]}function uy(e,t){return Math.abs(t[1])-Math.abs(e[1])}function hy(e,t,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Mn,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==y){let $=function(){T.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var m=$;p!==void 0&&p.texture.dispose();const f=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let w=0;f===!0&&(w=1),E===!0&&(w=2),x===!0&&(w=3);let B=u.attributes.position.count*w,ot=1;B>t.maxTextureSize&&(ot=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const v=new Float32Array(B*ot*4*y),T=new Zm(v,B,ot,y);T.type=or,T.needsUpdate=!0;const et=w*4;for(let L=0;L<y;L++){const K=S[L],G=D[L],X=R[L],j=B*ot*4*L;for(let tt=0;tt<K.count;tt++){const J=tt*et;f===!0&&(o.fromBufferAttribute(K,tt),v[j+J+0]=o.x,v[j+J+1]=o.y,v[j+J+2]=o.z,v[j+J+3]=0),E===!0&&(o.fromBufferAttribute(G,tt),v[j+J+4]=o.x,v[j+J+5]=o.y,v[j+J+6]=o.z,v[j+J+7]=0),x===!0&&(o.fromBufferAttribute(X,tt),v[j+J+8]=o.x,v[j+J+9]=o.y,v[j+J+10]=o.z,v[j+J+11]=X.itemSize===4?o.w:1)}}p={count:y,texture:T,size:new vt(B,ot)},s.set(u,p),u.addEventListener("dispose",$)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(e,"morphTexture",l.morphTexture,n);else{let f=0;for(let x=0;x<d.length;x++)f+=d[x];const E=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(e,"morphTargetBaseInfluence",E),h.getUniforms().setValue(e,"morphTargetInfluences",d)}h.getUniforms().setValue(e,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let y=i[u.id];if(y===void 0||y.length!==g){y=[];for(let S=0;S<g;S++)y[S]=[S,0];i[u.id]=y}for(let S=0;S<g;S++){const D=y[S];D[0]=S,D[1]=d[S]}y.sort(uy);for(let S=0;S<8;S++)S<g&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(ly);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const D=a[S],R=D[0],w=D[1];R!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+S)!==p[R]&&u.setAttribute("morphTarget"+S,p[R]),f&&u.getAttribute("morphNormal"+S)!==f[R]&&u.setAttribute("morphNormal"+S,f[R]),r[S]=w,E+=w):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const x=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(e,"morphTargetBaseInfluence",x),h.getUniforms().setValue(e,"morphTargetInfluences",r)}}return{update:c}}function dy(e,t,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}class rg extends Tn{constructor(t,n,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:gs,u!==gs&&u!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gs&&(i=Nr),i===void 0&&u===ao&&(i=ms),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:kn,this.minFilter=c!==void 0?c:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const sg=new Tn,og=new rg(1,1);og.compareFunction=Ym;const ag=new Zm,cg=new K1,lg=new ng,kf=[],zf=[],Gf=new Float32Array(16),Hf=new Float32Array(9),Vf=new Float32Array(4);function xo(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=kf[r];if(s===void 0&&(s=new Float32Array(r),kf[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(s,a)}return s}function dn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function fn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Yc(e,t){let n=zf[t];n===void 0&&(n=new Int32Array(t),zf[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function fy(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function py(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;e.uniform2fv(this.addr,t),fn(n,t)}}function my(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(dn(n,t))return;e.uniform3fv(this.addr,t),fn(n,t)}}function gy(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;e.uniform4fv(this.addr,t),fn(n,t)}}function _y(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(dn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),fn(n,t)}else{if(dn(n,i))return;Vf.set(i),e.uniformMatrix2fv(this.addr,!1,Vf),fn(n,i)}}function vy(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(dn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),fn(n,t)}else{if(dn(n,i))return;Hf.set(i),e.uniformMatrix3fv(this.addr,!1,Hf),fn(n,i)}}function xy(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(dn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),fn(n,t)}else{if(dn(n,i))return;Gf.set(i),e.uniformMatrix4fv(this.addr,!1,Gf),fn(n,i)}}function yy(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function My(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;e.uniform2iv(this.addr,t),fn(n,t)}}function Sy(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dn(n,t))return;e.uniform3iv(this.addr,t),fn(n,t)}}function Ey(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;e.uniform4iv(this.addr,t),fn(n,t)}}function by(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ty(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;e.uniform2uiv(this.addr,t),fn(n,t)}}function Ay(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dn(n,t))return;e.uniform3uiv(this.addr,t),fn(n,t)}}function wy(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;e.uniform4uiv(this.addr,t),fn(n,t)}}function Ry(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);const s=this.type===e.SAMPLER_2D_SHADOW?og:sg;n.setTexture2D(t||s,r)}function Cy(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||cg,r)}function Py(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||lg,r)}function Ly(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||ag,r)}function Dy(e){switch(e){case 5126:return fy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return _y;case 35675:return vy;case 35676:return xy;case 5124:case 35670:return yy;case 35667:case 35671:return My;case 35668:case 35672:return Sy;case 35669:case 35673:return Ey;case 5125:return by;case 36294:return Ty;case 36295:return Ay;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}function Iy(e,t){e.uniform1fv(this.addr,t)}function Uy(e,t){const n=xo(t,this.size,2);e.uniform2fv(this.addr,n)}function Ny(e,t){const n=xo(t,this.size,3);e.uniform3fv(this.addr,n)}function Fy(e,t){const n=xo(t,this.size,4);e.uniform4fv(this.addr,n)}function Oy(e,t){const n=xo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function By(e,t){const n=xo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ky(e,t){const n=xo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function zy(e,t){e.uniform1iv(this.addr,t)}function Gy(e,t){e.uniform2iv(this.addr,t)}function Hy(e,t){e.uniform3iv(this.addr,t)}function Vy(e,t){e.uniform4iv(this.addr,t)}function Wy(e,t){e.uniform1uiv(this.addr,t)}function Xy(e,t){e.uniform2uiv(this.addr,t)}function Yy(e,t){e.uniform3uiv(this.addr,t)}function qy(e,t){e.uniform4uiv(this.addr,t)}function jy(e,t,n){const i=this.cache,r=t.length,s=Yc(n,r);dn(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(t[o]||sg,s[o])}function Ky(e,t,n){const i=this.cache,r=t.length,s=Yc(n,r);dn(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(t[o]||cg,s[o])}function Zy(e,t,n){const i=this.cache,r=t.length,s=Yc(n,r);dn(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(t[o]||lg,s[o])}function $y(e,t,n){const i=this.cache,r=t.length,s=Yc(n,r);dn(i,s)||(e.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(t[o]||ag,s[o])}function Jy(e){switch(e){case 5126:return Iy;case 35664:return Uy;case 35665:return Ny;case 35666:return Fy;case 35674:return Oy;case 35675:return By;case 35676:return ky;case 5124:case 35670:return zy;case 35667:case 35671:return Gy;case 35668:case 35672:return Hy;case 35669:case 35673:return Vy;case 5125:return Wy;case 36294:return Xy;case 36295:return Yy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return $y}}class Qy{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Dy(n.type)}}class t3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Jy(n.type)}}class e3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,n[a.id],i)}}}const Ql=/(\w+)(\])?(\[|\.)?/g;function Wf(e,t){e.seq.push(t),e.map[t.id]=t}function n3(e,t,n){const i=e.name,r=i.length;for(Ql.lastIndex=0;;){const s=Ql.exec(i),o=Ql.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Wf(n,l===void 0?new Qy(a,e,t):new t3(a,e,t));break}else{let h=n.map[a];h===void 0&&(h=new e3(a),Wf(n,h)),n=h}}}class dc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),o=t.getUniformLocation(n,s.name);n3(s,o,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in n&&i.push(o)}return i}}function Xf(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const i3=37297;let r3=0;function s3(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function o3(e){const t=De.getPrimaries(De.workingColorSpace),n=De.getPrimaries(e);let i;switch(t===n?i="":t===Tc&&n===bc?i="LinearDisplayP3ToLinearSRGB":t===bc&&n===Tc&&(i="LinearSRGBToLinearDisplayP3"),e){case Ti:case Vc:return[i,"LinearTransferOETF"];case Si:case hh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function Yf(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+s3(e.getShaderSource(t),o)}else return r}function a3(e,t){const n=o3(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function c3(e,t){let n;switch(t){case i1:n="Linear";break;case r1:n="Reinhard";break;case s1:n="OptimizedCineon";break;case o1:n="ACESFilmic";break;case c1:n="AgX";break;case l1:n="Neutral";break;case a1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function l3(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.alphaToCoverage||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function u3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function h3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function d3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),o=s.name;let a=1;s.type===e.FLOAT_MAT2&&(a=2),s.type===e.FLOAT_MAT3&&(a=3),s.type===e.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function Js(e){return e!==""}function qf(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jf(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(e){return e.replace(f3,m3)}const p3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function m3(e,t){let n=he[t];if(n===void 0){const i=p3.get(t);if(i!==void 0)n=he[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Iu(n)}const g3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(e){return e.replace(g3,_3)}function _3(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zf(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	`;return e.isWebGL2&&(t+=`precision ${e.precision} sampler3D;
		precision ${e.precision} sampler2DArray;
		precision ${e.precision} sampler2DShadow;
		precision ${e.precision} samplerCubeShadow;
		precision ${e.precision} sampler2DArrayShadow;
		precision ${e.precision} isampler2D;
		precision ${e.precision} isampler3D;
		precision ${e.precision} isamplerCube;
		precision ${e.precision} isampler2DArray;
		precision ${e.precision} usampler2D;
		precision ${e.precision} usampler3D;
		precision ${e.precision} usamplerCube;
		precision ${e.precision} usampler2DArray;
		`),e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function v3(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Fm?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===L_?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===nr&&(t="SHADOWMAP_TYPE_VSM"),t}function x3(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case so:case oo:t="ENVMAP_TYPE_CUBE";break;case Hc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y3(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case oo:t="ENVMAP_MODE_REFRACTION";break}return t}function M3(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Om:t="ENVMAP_BLENDING_MULTIPLY";break;case e1:t="ENVMAP_BLENDING_MIX";break;case n1:t="ENVMAP_BLENDING_ADD";break}return t}function S3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function E3(e,t,n,i){const r=e.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=v3(n),l=x3(n),u=y3(n),h=M3(n),d=S3(n),m=n.isWebGL2?"":l3(n),g=u3(n),y=h3(s),p=r.createProgram();let f,E,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Js).join(`
`),f.length>0&&(f+=`
`),E=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Js).join(`
`),E.length>0&&(E+=`
`)):(f=[Zf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),E=[m,Zf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Or?"#define TONE_MAPPING":"",n.toneMapping!==Or?he.tonemapping_pars_fragment:"",n.toneMapping!==Or?c3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,a3("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),o=Iu(o),o=qf(o,n),o=jf(o,n),a=Iu(a),a=qf(a,n),a=jf(a,n),o=Kf(o),a=Kf(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const S=x+f+o,D=x+E+a,R=Xf(r,r.VERTEX_SHADER,S),w=Xf(r,r.FRAGMENT_SHADER,D);r.attachShader(p,R),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function B(et){if(e.debug.checkShaderErrors){const $=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(R).trim(),K=r.getShaderInfoLog(w).trim();let G=!0,X=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,p,R,w);else{const j=Yf(r,R,"vertex"),tt=Yf(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+et.name+`
Material Type: `+et.type+`

Program Info Log: `+$+`
`+j+`
`+tt)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(L===""||K==="")&&(X=!1);X&&(et.diagnostics={runnable:G,programLog:$,vertexShader:{log:L,prefix:f},fragmentShader:{log:K,prefix:E}})}r.deleteShader(R),r.deleteShader(w),ot=new dc(r,p),v=d3(r,p)}let ot;this.getUniforms=function(){return ot===void 0&&B(this),ot};let v;this.getAttributes=function(){return v===void 0&&B(this),v};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(p,i3)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=r3++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=w,this}let b3=0;class T3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new A3(t),n.set(t,i)),i}}class A3{constructor(t){this.id=b3++,this.code=t,this.usedTimes=0}}function w3(e,t,n,i,r,s,o){const a=new fh,c=new T3,l=new Set,u=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,T,et,$,L){const K=$.fog,G=L.geometry,X=v.isMeshStandardMaterial?$.environment:null,j=(v.isMeshStandardMaterial?n:t).get(v.envMap||X),tt=j&&j.mapping===Hc?j.image.height:null,J=y[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Tt=lt!==void 0?lt.length:0;let Xt=0;G.morphAttributes.position!==void 0&&(Xt=1),G.morphAttributes.normal!==void 0&&(Xt=2),G.morphAttributes.color!==void 0&&(Xt=3);let V,st,Mt,kt;if(J){const ve=zi[J];V=ve.vertexShader,st=ve.fragmentShader}else V=v.vertexShader,st=v.fragmentShader,c.update(v),Mt=c.getVertexShaderID(v),kt=c.getFragmentShaderID(v);const Pt=e.getRenderTarget(),Et=L.isInstancedMesh===!0,Yt=L.isBatchedMesh===!0,jt=!!v.map,F=!!v.matcap,ze=!!j,Ut=!!v.aoMap,Nt=!!v.lightMap,Ot=!!v.bumpMap,Qt=!!v.normalMap,ee=!!v.displacementMap,ne=!!v.emissiveMap,be=!!v.metalnessMap,b=!!v.roughnessMap,_=v.anisotropy>0,q=v.clearcoat>0,Q=v.iridescence>0,at=v.sheen>0,it=v.transmission>0,Zt=_&&!!v.anisotropyMap,Dt=q&&!!v.clearcoatMap,ut=q&&!!v.clearcoatNormalMap,xt=q&&!!v.clearcoatRoughnessMap,$t=Q&&!!v.iridescenceMap,ht=Q&&!!v.iridescenceThicknessMap,we=at&&!!v.sheenColorMap,ie=at&&!!v.sheenRoughnessMap,mt=!!v.specularMap,Ct=!!v.specularColorMap,zt=!!v.specularIntensityMap,A=it&&!!v.transmissionMap,nt=it&&!!v.thicknessMap,It=!!v.gradientMap,C=!!v.alphaMap,dt=v.alphaTest>0,O=!!v.alphaHash,ct=!!v.extensions;let St=Or;v.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(St=e.toneMapping);const ue={isWebGL2:h,shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:V,fragmentShader:st,defines:v.defines,customVertexShaderID:Mt,customFragmentShaderID:kt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Yt,instancing:Et,instancingColor:Et&&L.instanceColor!==null,instancingMorph:Et&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Pt===null?e.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Ti,alphaToCoverage:!!v.alphaToCoverage,map:jt,matcap:F,envMap:ze,envMapMode:ze&&j.mapping,envMapCubeUVHeight:tt,aoMap:Ut,lightMap:Nt,bumpMap:Ot,normalMap:Qt,displacementMap:m&&ee,emissiveMap:ne,normalMapObjectSpace:Qt&&v.normalMapType===M1,normalMapTangentSpace:Qt&&v.normalMapType===y1,metalnessMap:be,roughnessMap:b,anisotropy:_,anisotropyMap:Zt,clearcoat:q,clearcoatMap:Dt,clearcoatNormalMap:ut,clearcoatRoughnessMap:xt,iridescence:Q,iridescenceMap:$t,iridescenceThicknessMap:ht,sheen:at,sheenColorMap:we,sheenRoughnessMap:ie,specularMap:mt,specularColorMap:Ct,specularIntensityMap:zt,transmission:it,transmissionMap:A,thicknessMap:nt,gradientMap:It,opaque:v.transparent===!1&&v.blending===Fr&&v.alphaToCoverage===!1,alphaMap:C,alphaTest:dt,alphaHash:O,combine:v.combine,mapUv:jt&&p(v.map.channel),aoMapUv:Ut&&p(v.aoMap.channel),lightMapUv:Nt&&p(v.lightMap.channel),bumpMapUv:Ot&&p(v.bumpMap.channel),normalMapUv:Qt&&p(v.normalMap.channel),displacementMapUv:ee&&p(v.displacementMap.channel),emissiveMapUv:ne&&p(v.emissiveMap.channel),metalnessMapUv:be&&p(v.metalnessMap.channel),roughnessMapUv:b&&p(v.roughnessMap.channel),anisotropyMapUv:Zt&&p(v.anisotropyMap.channel),clearcoatMapUv:Dt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:we&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ie&&p(v.sheenRoughnessMap.channel),specularMapUv:mt&&p(v.specularMap.channel),specularColorMapUv:Ct&&p(v.specularColorMap.channel),specularIntensityMapUv:zt&&p(v.specularIntensityMap.channel),transmissionMapUv:A&&p(v.transmissionMap.channel),thicknessMapUv:nt&&p(v.thicknessMap.channel),alphaMapUv:C&&p(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Qt||_),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(jt||C),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Xt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&et.length>0,shadowMapType:e.shadowMap.type,toneMapping:St,useLegacyLights:e._useLegacyLights,decodeVideoTexture:jt&&v.map.isVideoTexture===!0&&De.getTransfer(v.map.colorSpace)===Ge,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zn,flipSided:v.side===Xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ct&&v.extensions.derivatives===!0,extensionFragDepth:ct&&v.extensions.fragDepth===!0,extensionDrawBuffers:ct&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ct&&v.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function E(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const et in v.defines)T.push(et),T.push(v.defines[et]);return v.isRawShaderMaterial===!1&&(x(T,v),S(T,v),T.push(e.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.instancingMorph&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.normalMapObjectSpace&&a.enable(7),T.normalMapTangentSpace&&a.enable(8),T.clearcoat&&a.enable(9),T.iridescence&&a.enable(10),T.alphaTest&&a.enable(11),T.vertexColors&&a.enable(12),T.vertexAlphas&&a.enable(13),T.vertexUv1s&&a.enable(14),T.vertexUv2s&&a.enable(15),T.vertexUv3s&&a.enable(16),T.vertexTangents&&a.enable(17),T.anisotropy&&a.enable(18),T.alphaHash&&a.enable(19),T.batching&&a.enable(20),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function D(v){const T=y[v.type];let et;if(T){const $=zi[T];et=Rc.clone($.uniforms)}else et=v.uniforms;return et}function R(v,T){let et;for(let $=0,L=u.length;$<L;$++){const K=u[$];if(K.cacheKey===T){et=K,++et.usedTimes;break}}return et===void 0&&(et=new E3(e,T,v,s),u.push(et)),et}function w(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function B(v){c.remove(v)}function ot(){c.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:D,acquireProgram:R,releaseProgram:w,releaseShaderCache:B,programs:u,dispose:ot}}function R3(){let e=new WeakMap;function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function n(s){e.delete(s)}function i(s,o,a){e.get(s)[o]=a}function r(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function C3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function $f(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Jf(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,g,y,p){let f=e[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:y,group:p},e[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=y,f.group=p),t++,f}function a(h,d,m,g,y,p){const f=o(h,d,m,g,y,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function c(h,d,m,g,y,p){const f=o(h,d,m,g,y,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function l(h,d){n.length>1&&n.sort(h||C3),i.length>1&&i.sort(d||$f),r.length>1&&r.sort(d||$f)}function u(){for(let h=t,d=e.length;h<d;h++){const m=e[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function P3(){let e=new WeakMap;function t(i,r){const s=e.get(i);let o;return s===void 0?(o=new Jf,e.set(i,[o])):r>=s.length?(o=new Jf,s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function L3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new fe};break;case"SpotLight":n={position:new P,direction:new P,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":n={color:new fe,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function D3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let I3=0;function U3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function N3(e,t){const n=new L3,i=D3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new P);const s=new P,o=new qe,a=new qe;function c(u,h){let d=0,m=0,g=0;for(let et=0;et<9;et++)r.probe[et].set(0,0,0);let y=0,p=0,f=0,E=0,x=0,S=0,D=0,R=0,w=0,B=0,ot=0;u.sort(U3);const v=h===!0?Math.PI:1;for(let et=0,$=u.length;et<$;et++){const L=u[et],K=L.color,G=L.intensity,X=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=K.r*G*v,m+=K.g*G*v,g+=K.b*G*v;else if(L.isLightProbe){for(let tt=0;tt<9;tt++)r.probe[tt].addScaledVector(L.sh.coefficients[tt],G);ot++}else if(L.isDirectionalLight){const tt=n.get(L);if(tt.color.copy(L.color).multiplyScalar(L.intensity*v),L.castShadow){const J=L.shadow,lt=i.get(L);lt.shadowBias=J.bias,lt.shadowNormalBias=J.normalBias,lt.shadowRadius=J.radius,lt.shadowMapSize=J.mapSize,r.directionalShadow[y]=lt,r.directionalShadowMap[y]=j,r.directionalShadowMatrix[y]=L.shadow.matrix,S++}r.directional[y]=tt,y++}else if(L.isSpotLight){const tt=n.get(L);tt.position.setFromMatrixPosition(L.matrixWorld),tt.color.copy(K).multiplyScalar(G*v),tt.distance=X,tt.coneCos=Math.cos(L.angle),tt.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),tt.decay=L.decay,r.spot[f]=tt;const J=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,J.updateMatrices(L),L.castShadow&&B++),r.spotLightMatrix[f]=J.matrix,L.castShadow){const lt=i.get(L);lt.shadowBias=J.bias,lt.shadowNormalBias=J.normalBias,lt.shadowRadius=J.radius,lt.shadowMapSize=J.mapSize,r.spotShadow[f]=lt,r.spotShadowMap[f]=j,R++}f++}else if(L.isRectAreaLight){const tt=n.get(L);tt.color.copy(K).multiplyScalar(G),tt.halfWidth.set(L.width*.5,0,0),tt.halfHeight.set(0,L.height*.5,0),r.rectArea[E]=tt,E++}else if(L.isPointLight){const tt=n.get(L);if(tt.color.copy(L.color).multiplyScalar(L.intensity*v),tt.distance=L.distance,tt.decay=L.decay,L.castShadow){const J=L.shadow,lt=i.get(L);lt.shadowBias=J.bias,lt.shadowNormalBias=J.normalBias,lt.shadowRadius=J.radius,lt.shadowMapSize=J.mapSize,lt.shadowCameraNear=J.camera.near,lt.shadowCameraFar=J.camera.far,r.pointShadow[p]=lt,r.pointShadowMap[p]=j,r.pointShadowMatrix[p]=L.shadow.matrix,D++}r.point[p]=tt,p++}else if(L.isHemisphereLight){const tt=n.get(L);tt.skyColor.copy(L.color).multiplyScalar(G*v),tt.groundColor.copy(L.groundColor).multiplyScalar(G*v),r.hemi[x]=tt,x++}}E>0&&(t.isWebGL2?e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=yt.LTC_FLOAT_1,r.rectAreaLTC2=yt.LTC_FLOAT_2):(r.rectAreaLTC1=yt.LTC_HALF_1,r.rectAreaLTC2=yt.LTC_HALF_2):e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=yt.LTC_FLOAT_1,r.rectAreaLTC2=yt.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=yt.LTC_HALF_1,r.rectAreaLTC2=yt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==y||T.pointLength!==p||T.spotLength!==f||T.rectAreaLength!==E||T.hemiLength!==x||T.numDirectionalShadows!==S||T.numPointShadows!==D||T.numSpotShadows!==R||T.numSpotMaps!==w||T.numLightProbes!==ot)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=E,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+w-B,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=ot,T.directionalLength=y,T.pointLength=p,T.spotLength=f,T.rectAreaLength=E,T.hemiLength=x,T.numDirectionalShadows=S,T.numPointShadows=D,T.numSpotShadows=R,T.numSpotMaps=w,T.numLightProbes=ot,r.version=I3++)}function l(u,h){let d=0,m=0,g=0,y=0,p=0;const f=h.matrixWorldInverse;for(let E=0,x=u.length;E<x;E++){const S=u[E];if(S.isDirectionalLight){const D=r.directional[d];D.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(f),d++}else if(S.isSpotLight){const D=r.spot[g];D.position.setFromMatrixPosition(S.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const D=r.rectArea[y];D.position.setFromMatrixPosition(S.matrixWorld),D.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),D.halfWidth.set(S.width*.5,0,0),D.halfHeight.set(0,S.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const D=r.point[m];D.position.setFromMatrixPosition(S.matrixWorld),D.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){const D=r.hemi[p];D.direction.setFromMatrixPosition(S.matrixWorld),D.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:r}}function Qf(e,t){const n=new N3(e,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(h){n.setup(i,h)}function l(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function F3(e,t){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let c;return a===void 0?(c=new Qf(e,t),n.set(s,[c])):o>=a.length?(c=new Qf(e,t),a.push(c)):c=a[o],c}function r(){n=new WeakMap}return{get:i,dispose:r}}class O3 extends da{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=v1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class B3 extends da{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const k3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function G3(e,t,n){let i=new ph;const r=new vt,s=new vt,o=new Mn,a=new O3({depthPacking:x1}),c=new B3,l={},u=n.maxTextureSize,h={[Gr]:Xn,[Xn]:Gr,[zn]:zn},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:k3,fragmentShader:z3}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new In;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ln(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fm;let f=this.type;this.render=function(R,w,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const ot=e.getRenderTarget(),v=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),et=e.state;et.setBlending(ur),et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const $=f!==nr&&this.type===nr,L=f===nr&&this.type!==nr;for(let K=0,G=R.length;K<G;K++){const X=R[K],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const tt=j.getFrameExtents();if(r.multiply(tt),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/tt.x),r.x=s.x*tt.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/tt.y),r.y=s.y*tt.y,j.mapSize.y=s.y)),j.map===null||$===!0||L===!0){const lt=this.type!==nr?{minFilter:kn,magFilter:kn}:{};j.map!==null&&j.map.dispose(),j.map=new Ai(r.x,r.y,lt),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}e.setRenderTarget(j.map),e.clear();const J=j.getViewportCount();for(let lt=0;lt<J;lt++){const Tt=j.getViewport(lt);o.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),et.viewport(o),j.updateMatrices(X,lt),i=j.getFrustum(),S(w,B,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===nr&&E(j,B),j.needsUpdate=!1}f=this.type,p.needsUpdate=!1,e.setRenderTarget(ot,v,T)};function E(R,w){const B=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ai(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(w,null,B,d,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(w,null,B,m,y,null)}function x(R,w,B,ot){let v=null;const T=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)v=T;else if(v=B.isPointLight===!0?c:a,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const et=v.uuid,$=w.uuid;let L=l[et];L===void 0&&(L={},l[et]=L);let K=L[$];K===void 0&&(K=v.clone(),L[$]=K,w.addEventListener("dispose",D)),v=K}if(v.visible=w.visible,v.wireframe=w.wireframe,ot===nr?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,B.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const et=e.properties.get(v);et.light=B}return v}function S(R,w,B,ot,v){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===nr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);const $=t.update(R),L=R.material;if(Array.isArray(L)){const K=$.groups;for(let G=0,X=K.length;G<X;G++){const j=K[G],tt=L[j.materialIndex];if(tt&&tt.visible){const J=x(R,tt,ot,v);R.onBeforeShadow(e,R,w,B,$,J,j),e.renderBufferDirect(B,null,$,J,R,j),R.onAfterShadow(e,R,w,B,$,J,j)}}}else if(L.visible){const K=x(R,L,ot,v);R.onBeforeShadow(e,R,w,B,$,K,null),e.renderBufferDirect(B,null,$,K,R,null),R.onAfterShadow(e,R,w,B,$,K,null)}}const et=R.children;for(let $=0,L=et.length;$<L;$++)S(et[$],w,B,ot,v)}function D(R){R.target.removeEventListener("dispose",D);for(const B in l){const ot=l[B],v=R.target.uuid;v in ot&&(ot[v].dispose(),delete ot[v])}}}function H3(e,t,n){const i=n.isWebGL2;function r(){let C=!1;const dt=new Mn;let O=null;const ct=new Mn(0,0,0,0);return{setMask:function(St){O!==St&&!C&&(e.colorMask(St,St,St,St),O=St)},setLocked:function(St){C=St},setClear:function(St,ue,ve,Te,Pe){Pe===!0&&(St*=Te,ue*=Te,ve*=Te),dt.set(St,ue,ve,Te),ct.equals(dt)===!1&&(e.clearColor(St,ue,ve,Te),ct.copy(dt))},reset:function(){C=!1,O=null,ct.set(-1,0,0,0)}}}function s(){let C=!1,dt=null,O=null,ct=null;return{setTest:function(St){St?Et(e.DEPTH_TEST):Yt(e.DEPTH_TEST)},setMask:function(St){dt!==St&&!C&&(e.depthMask(St),dt=St)},setFunc:function(St){if(O!==St){switch(St){case j_:e.depthFunc(e.NEVER);break;case K_:e.depthFunc(e.ALWAYS);break;case Z_:e.depthFunc(e.LESS);break;case Sc:e.depthFunc(e.LEQUAL);break;case $_:e.depthFunc(e.EQUAL);break;case J_:e.depthFunc(e.GEQUAL);break;case Q_:e.depthFunc(e.GREATER);break;case t1:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}O=St}},setLocked:function(St){C=St},setClear:function(St){ct!==St&&(e.clearDepth(St),ct=St)},reset:function(){C=!1,dt=null,O=null,ct=null}}}function o(){let C=!1,dt=null,O=null,ct=null,St=null,ue=null,ve=null,Te=null,Pe=null;return{setTest:function(pe){C||(pe?Et(e.STENCIL_TEST):Yt(e.STENCIL_TEST))},setMask:function(pe){dt!==pe&&!C&&(e.stencilMask(pe),dt=pe)},setFunc:function(pe,me,nn){(O!==pe||ct!==me||St!==nn)&&(e.stencilFunc(pe,me,nn),O=pe,ct=me,St=nn)},setOp:function(pe,me,nn){(ue!==pe||ve!==me||Te!==nn)&&(e.stencilOp(pe,me,nn),ue=pe,ve=me,Te=nn)},setLocked:function(pe){C=pe},setClear:function(pe){Pe!==pe&&(e.clearStencil(pe),Pe=pe)},reset:function(){C=!1,dt=null,O=null,ct=null,St=null,ue=null,ve=null,Te=null,Pe=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,y=[],p=null,f=!1,E=null,x=null,S=null,D=null,R=null,w=null,B=null,ot=new fe(0,0,0),v=0,T=!1,et=null,$=null,L=null,K=null,G=null;const X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,tt=0;const J=e.getParameter(e.VERSION);J.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=tt>=1):J.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=tt>=2);let lt=null,Tt={};const Xt=e.getParameter(e.SCISSOR_BOX),V=e.getParameter(e.VIEWPORT),st=new Mn().fromArray(Xt),Mt=new Mn().fromArray(V);function kt(C,dt,O,ct){const St=new Uint8Array(4),ue=e.createTexture();e.bindTexture(C,ue),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ve=0;ve<O;ve++)i&&(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)?e.texImage3D(dt,0,e.RGBA,1,1,ct,0,e.RGBA,e.UNSIGNED_BYTE,St):e.texImage2D(dt+ve,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,St);return ue}const Pt={};Pt[e.TEXTURE_2D]=kt(e.TEXTURE_2D,e.TEXTURE_2D,1),Pt[e.TEXTURE_CUBE_MAP]=kt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pt[e.TEXTURE_2D_ARRAY]=kt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Pt[e.TEXTURE_3D]=kt(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Et(e.DEPTH_TEST),c.setFunc(Sc),ee(!1),ne(Dd),Et(e.CULL_FACE),Ot(ur);function Et(C){d[C]!==!0&&(e.enable(C),d[C]=!0)}function Yt(C){d[C]!==!1&&(e.disable(C),d[C]=!1)}function jt(C,dt){return m[C]!==dt?(e.bindFramebuffer(C,dt),m[C]=dt,i&&(C===e.DRAW_FRAMEBUFFER&&(m[e.FRAMEBUFFER]=dt),C===e.FRAMEBUFFER&&(m[e.DRAW_FRAMEBUFFER]=dt)),!0):!1}function F(C,dt){let O=y,ct=!1;if(C){O=g.get(dt),O===void 0&&(O=[],g.set(dt,O));const St=C.textures;if(O.length!==St.length||O[0]!==e.COLOR_ATTACHMENT0){for(let ue=0,ve=St.length;ue<ve;ue++)O[ue]=e.COLOR_ATTACHMENT0+ue;O.length=St.length,ct=!0}}else O[0]!==e.BACK&&(O[0]=e.BACK,ct=!0);if(ct)if(n.isWebGL2)e.drawBuffers(O);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(O);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ze(C){return p!==C?(e.useProgram(C),p=C,!0):!1}const Ut={[ss]:e.FUNC_ADD,[I_]:e.FUNC_SUBTRACT,[U_]:e.FUNC_REVERSE_SUBTRACT};if(i)Ut[Nd]=e.MIN,Ut[Fd]=e.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(Ut[Nd]=C.MIN_EXT,Ut[Fd]=C.MAX_EXT)}const Nt={[N_]:e.ZERO,[F_]:e.ONE,[O_]:e.SRC_COLOR,[Tu]:e.SRC_ALPHA,[V_]:e.SRC_ALPHA_SATURATE,[G_]:e.DST_COLOR,[k_]:e.DST_ALPHA,[B_]:e.ONE_MINUS_SRC_COLOR,[Au]:e.ONE_MINUS_SRC_ALPHA,[H_]:e.ONE_MINUS_DST_COLOR,[z_]:e.ONE_MINUS_DST_ALPHA,[W_]:e.CONSTANT_COLOR,[X_]:e.ONE_MINUS_CONSTANT_COLOR,[Y_]:e.CONSTANT_ALPHA,[q_]:e.ONE_MINUS_CONSTANT_ALPHA};function Ot(C,dt,O,ct,St,ue,ve,Te,Pe,pe){if(C===ur){f===!0&&(Yt(e.BLEND),f=!1);return}if(f===!1&&(Et(e.BLEND),f=!0),C!==D_){if(C!==E||pe!==T){if((x!==ss||R!==ss)&&(e.blendEquation(e.FUNC_ADD),x=ss,R=ss),pe)switch(C){case Fr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case bu:e.blendFunc(e.ONE,e.ONE);break;case Id:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ud:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Fr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case bu:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Id:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ud:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,D=null,w=null,B=null,ot.set(0,0,0),v=0,E=C,T=pe}return}St=St||dt,ue=ue||O,ve=ve||ct,(dt!==x||St!==R)&&(e.blendEquationSeparate(Ut[dt],Ut[St]),x=dt,R=St),(O!==S||ct!==D||ue!==w||ve!==B)&&(e.blendFuncSeparate(Nt[O],Nt[ct],Nt[ue],Nt[ve]),S=O,D=ct,w=ue,B=ve),(Te.equals(ot)===!1||Pe!==v)&&(e.blendColor(Te.r,Te.g,Te.b,Pe),ot.copy(Te),v=Pe),E=C,T=!1}function Qt(C,dt){C.side===zn?Yt(e.CULL_FACE):Et(e.CULL_FACE);let O=C.side===Xn;dt&&(O=!O),ee(O),C.blending===Fr&&C.transparent===!1?Ot(ur):Ot(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const ct=C.stencilWrite;l.setTest(ct),ct&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),b(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Et(e.SAMPLE_ALPHA_TO_COVERAGE):Yt(e.SAMPLE_ALPHA_TO_COVERAGE)}function ee(C){et!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),et=C)}function ne(C){C!==C_?(Et(e.CULL_FACE),C!==$&&(C===Dd?e.cullFace(e.BACK):C===P_?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Yt(e.CULL_FACE),$=C}function be(C){C!==L&&(j&&e.lineWidth(C),L=C)}function b(C,dt,O){C?(Et(e.POLYGON_OFFSET_FILL),(K!==dt||G!==O)&&(e.polygonOffset(dt,O),K=dt,G=O)):Yt(e.POLYGON_OFFSET_FILL)}function _(C){C?Et(e.SCISSOR_TEST):Yt(e.SCISSOR_TEST)}function q(C){C===void 0&&(C=e.TEXTURE0+X-1),lt!==C&&(e.activeTexture(C),lt=C)}function Q(C,dt,O){O===void 0&&(lt===null?O=e.TEXTURE0+X-1:O=lt);let ct=Tt[O];ct===void 0&&(ct={type:void 0,texture:void 0},Tt[O]=ct),(ct.type!==C||ct.texture!==dt)&&(lt!==O&&(e.activeTexture(O),lt=O),e.bindTexture(C,dt||Pt[C]),ct.type=C,ct.texture=dt)}function at(){const C=Tt[lt];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function it(){try{e.compressedTexImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Zt(){try{e.compressedTexImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Dt(){try{e.texSubImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{e.texSubImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $t(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{e.texStorage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{e.texStorage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{e.texImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function mt(){try{e.texImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ct(C){st.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),st.copy(C))}function zt(C){Mt.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),Mt.copy(C))}function A(C,dt){let O=h.get(dt);O===void 0&&(O=new WeakMap,h.set(dt,O));let ct=O.get(C);ct===void 0&&(ct=e.getUniformBlockIndex(dt,C.name),O.set(C,ct))}function nt(C,dt){const ct=h.get(dt).get(C);u.get(dt)!==ct&&(e.uniformBlockBinding(dt,ct,C.__bindingPointIndex),u.set(dt,ct))}function It(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),i===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},lt=null,Tt={},m={},g=new WeakMap,y=[],p=null,f=!1,E=null,x=null,S=null,D=null,R=null,w=null,B=null,ot=new fe(0,0,0),v=0,T=!1,et=null,$=null,L=null,K=null,G=null,st.set(0,0,e.canvas.width,e.canvas.height),Mt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Et,disable:Yt,bindFramebuffer:jt,drawBuffers:F,useProgram:ze,setBlending:Ot,setMaterial:Qt,setFlipSided:ee,setCullFace:ne,setLineWidth:be,setPolygonOffset:b,setScissorTest:_,activeTexture:q,bindTexture:Q,unbindTexture:at,compressedTexImage2D:it,compressedTexImage3D:Zt,texImage2D:ie,texImage3D:mt,updateUBOMapping:A,uniformBlockBinding:nt,texStorage2D:ht,texStorage3D:we,texSubImage2D:Dt,texSubImage3D:ut,compressedTexSubImage2D:xt,compressedTexSubImage3D:$t,scissor:Ct,viewport:zt,reset:It}}function V3(e,t,n,i,r,s,o){const a=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new vt,h=new WeakMap;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,_){return g?new OffscreenCanvas(b,_):ia("canvas")}function p(b,_,q,Q){let at=1;const it=be(b);if((it.width>Q||it.height>Q)&&(at=Q/Math.max(it.width,it.height)),at<1||_===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Zt=_?wc:Math.floor,Dt=Zt(at*it.width),ut=Zt(at*it.height);d===void 0&&(d=y(Dt,ut));const xt=q?y(Dt,ut):d;return xt.width=Dt,xt.height=ut,xt.getContext("2d").drawImage(b,0,0,Dt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Dt+"x"+ut+")."),xt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),b;return b}function f(b){const _=be(b);return Du(_.width)&&Du(_.height)}function E(b){return a?!1:b.wrapS!==Ei||b.wrapT!==Ei||b.minFilter!==kn&&b.minFilter!==vn}function x(b,_){return b.generateMipmaps&&_&&b.minFilter!==kn&&b.minFilter!==vn}function S(b){e.generateMipmap(b)}function D(b,_,q,Q,at=!1){if(a===!1)return _;if(b!==null){if(e[b]!==void 0)return e[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let it=_;if(_===e.RED&&(q===e.FLOAT&&(it=e.R32F),q===e.HALF_FLOAT&&(it=e.R16F),q===e.UNSIGNED_BYTE&&(it=e.R8)),_===e.RED_INTEGER&&(q===e.UNSIGNED_BYTE&&(it=e.R8UI),q===e.UNSIGNED_SHORT&&(it=e.R16UI),q===e.UNSIGNED_INT&&(it=e.R32UI),q===e.BYTE&&(it=e.R8I),q===e.SHORT&&(it=e.R16I),q===e.INT&&(it=e.R32I)),_===e.RG&&(q===e.FLOAT&&(it=e.RG32F),q===e.HALF_FLOAT&&(it=e.RG16F),q===e.UNSIGNED_BYTE&&(it=e.RG8)),_===e.RG_INTEGER&&(q===e.UNSIGNED_BYTE&&(it=e.RG8UI),q===e.UNSIGNED_SHORT&&(it=e.RG16UI),q===e.UNSIGNED_INT&&(it=e.RG32UI),q===e.BYTE&&(it=e.RG8I),q===e.SHORT&&(it=e.RG16I),q===e.INT&&(it=e.RG32I)),_===e.RGBA){const Zt=at?Ec:De.getTransfer(Q);q===e.FLOAT&&(it=e.RGBA32F),q===e.HALF_FLOAT&&(it=e.RGBA16F),q===e.UNSIGNED_BYTE&&(it=Zt===Ge?e.SRGB8_ALPHA8:e.RGBA8),q===e.UNSIGNED_SHORT_4_4_4_4&&(it=e.RGBA4),q===e.UNSIGNED_SHORT_5_5_5_1&&(it=e.RGB5_A1)}return(it===e.R16F||it===e.R32F||it===e.RG16F||it===e.RG32F||it===e.RGBA16F||it===e.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function R(b,_,q){return x(b,q)===!0||b.isFramebufferTexture&&b.minFilter!==kn&&b.minFilter!==vn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function w(b){return b===kn||b===Od||b===No?e.NEAREST:e.LINEAR}function B(b){const _=b.target;_.removeEventListener("dispose",B),v(_),_.isVideoTexture&&h.delete(_)}function ot(b){const _=b.target;_.removeEventListener("dispose",ot),et(_)}function v(b){const _=i.get(b);if(_.__webglInit===void 0)return;const q=b.source,Q=m.get(q);if(Q){const at=Q[_.__cacheKey];at.usedTimes--,at.usedTimes===0&&T(b),Object.keys(Q).length===0&&m.delete(q)}i.remove(b)}function T(b){const _=i.get(b);e.deleteTexture(_.__webglTexture);const q=b.source,Q=m.get(q);delete Q[_.__cacheKey],o.memory.textures--}function et(b){const _=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let at=0;at<_.__webglFramebuffer[Q].length;at++)e.deleteFramebuffer(_.__webglFramebuffer[Q][at]);else e.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)e.deleteFramebuffer(_.__webglFramebuffer[Q]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const q=b.textures;for(let Q=0,at=q.length;Q<at;Q++){const it=i.get(q[Q]);it.__webglTexture&&(e.deleteTexture(it.__webglTexture),o.memory.textures--),i.remove(q[Q])}i.remove(b)}let $=0;function L(){$=0}function K(){const b=$;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),$+=1,b}function G(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function X(b,_){const q=i.get(b);if(b.isVideoTexture&&ee(b),b.isRenderTargetTexture===!1&&b.version>0&&q.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(q,b,_);return}}n.bindTexture(e.TEXTURE_2D,q.__webglTexture,e.TEXTURE0+_)}function j(b,_){const q=i.get(b);if(b.version>0&&q.__version!==b.version){Mt(q,b,_);return}n.bindTexture(e.TEXTURE_2D_ARRAY,q.__webglTexture,e.TEXTURE0+_)}function tt(b,_){const q=i.get(b);if(b.version>0&&q.__version!==b.version){Mt(q,b,_);return}n.bindTexture(e.TEXTURE_3D,q.__webglTexture,e.TEXTURE0+_)}function J(b,_){const q=i.get(b);if(b.version>0&&q.__version!==b.version){kt(q,b,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture,e.TEXTURE0+_)}const lt={[Cu]:e.REPEAT,[Ei]:e.CLAMP_TO_EDGE,[Pu]:e.MIRRORED_REPEAT},Tt={[kn]:e.NEAREST,[Od]:e.NEAREST_MIPMAP_NEAREST,[No]:e.NEAREST_MIPMAP_LINEAR,[vn]:e.LINEAR,[bl]:e.LINEAR_MIPMAP_NEAREST,[as]:e.LINEAR_MIPMAP_LINEAR},Xt={[S1]:e.NEVER,[R1]:e.ALWAYS,[E1]:e.LESS,[Ym]:e.LEQUAL,[b1]:e.EQUAL,[w1]:e.GEQUAL,[T1]:e.GREATER,[A1]:e.NOTEQUAL};function V(b,_,q){if(_.type===or&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===vn||_.magFilter===bl||_.magFilter===No||_.magFilter===as||_.minFilter===vn||_.minFilter===bl||_.minFilter===No||_.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(e.texParameteri(b,e.TEXTURE_WRAP_S,lt[_.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,lt[_.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,lt[_.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,Tt[_.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,Tt[_.minFilter])):(e.texParameteri(b,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(b,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(_.wrapS!==Ei||_.wrapT!==Ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(b,e.TEXTURE_MAG_FILTER,w(_.magFilter)),e.texParameteri(b,e.TEXTURE_MIN_FILTER,w(_.minFilter)),_.minFilter!==kn&&_.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,Xt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===kn||_.minFilter!==No&&_.minFilter!==as||_.type===or&&t.has("OES_texture_float_linear")===!1||a===!1&&_.type===hr&&t.has("OES_texture_half_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function st(b,_){let q=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",B));const Q=_.source;let at=m.get(Q);at===void 0&&(at={},m.set(Q,at));const it=G(_);if(it!==b.__cacheKey){at[it]===void 0&&(at[it]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,q=!0),at[it].usedTimes++;const Zt=at[b.__cacheKey];Zt!==void 0&&(at[b.__cacheKey].usedTimes--,Zt.usedTimes===0&&T(_)),b.__cacheKey=it,b.__webglTexture=at[it].texture}return q}function Mt(b,_,q){let Q=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=e.TEXTURE_3D);const at=st(b,_),it=_.source;n.bindTexture(Q,b.__webglTexture,e.TEXTURE0+q);const Zt=i.get(it);if(it.version!==Zt.__version||at===!0){n.activeTexture(e.TEXTURE0+q);const Dt=De.getPrimaries(De.workingColorSpace),ut=_.colorSpace===Dr?null:De.getPrimaries(_.colorSpace),xt=_.colorSpace===Dr||Dt===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const $t=E(_)&&f(_.image)===!1;let ht=p(_.image,$t,!1,r.maxTextureSize);ht=ne(_,ht);const we=f(ht)||a,ie=s.convert(_.format,_.colorSpace);let mt=s.convert(_.type),Ct=D(_.internalFormat,ie,mt,_.colorSpace,_.isVideoTexture);V(Q,_,we);let zt;const A=_.mipmaps,nt=a&&_.isVideoTexture!==!0&&Ct!==Xm,It=Zt.__version===void 0||at===!0,C=it.dataReady,dt=R(_,ht,we);if(_.isDepthTexture)Ct=e.DEPTH_COMPONENT,a?_.type===or?Ct=e.DEPTH_COMPONENT32F:_.type===Nr?Ct=e.DEPTH_COMPONENT24:_.type===ms?Ct=e.DEPTH24_STENCIL8:Ct=e.DEPTH_COMPONENT16:_.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===gs&&Ct===e.DEPTH_COMPONENT&&_.type!==uh&&_.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Nr,mt=s.convert(_.type)),_.format===ao&&Ct===e.DEPTH_COMPONENT&&(Ct=e.DEPTH_STENCIL,_.type!==ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=ms,mt=s.convert(_.type))),It&&(nt?n.texStorage2D(e.TEXTURE_2D,1,Ct,ht.width,ht.height):n.texImage2D(e.TEXTURE_2D,0,Ct,ht.width,ht.height,0,ie,mt,null));else if(_.isDataTexture)if(A.length>0&&we){nt&&It&&n.texStorage2D(e.TEXTURE_2D,dt,Ct,A[0].width,A[0].height);for(let O=0,ct=A.length;O<ct;O++)zt=A[O],nt?C&&n.texSubImage2D(e.TEXTURE_2D,O,0,0,zt.width,zt.height,ie,mt,zt.data):n.texImage2D(e.TEXTURE_2D,O,Ct,zt.width,zt.height,0,ie,mt,zt.data);_.generateMipmaps=!1}else nt?(It&&n.texStorage2D(e.TEXTURE_2D,dt,Ct,ht.width,ht.height),C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ht.width,ht.height,ie,mt,ht.data)):n.texImage2D(e.TEXTURE_2D,0,Ct,ht.width,ht.height,0,ie,mt,ht.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){nt&&It&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,Ct,A[0].width,A[0].height,ht.depth);for(let O=0,ct=A.length;O<ct;O++)zt=A[O],_.format!==bi?ie!==null?nt?C&&n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,zt.width,zt.height,ht.depth,ie,zt.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,O,Ct,zt.width,zt.height,ht.depth,0,zt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?C&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,zt.width,zt.height,ht.depth,ie,mt,zt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,O,Ct,zt.width,zt.height,ht.depth,0,ie,mt,zt.data)}else{nt&&It&&n.texStorage2D(e.TEXTURE_2D,dt,Ct,A[0].width,A[0].height);for(let O=0,ct=A.length;O<ct;O++)zt=A[O],_.format!==bi?ie!==null?nt?C&&n.compressedTexSubImage2D(e.TEXTURE_2D,O,0,0,zt.width,zt.height,ie,zt.data):n.compressedTexImage2D(e.TEXTURE_2D,O,Ct,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?C&&n.texSubImage2D(e.TEXTURE_2D,O,0,0,zt.width,zt.height,ie,mt,zt.data):n.texImage2D(e.TEXTURE_2D,O,Ct,zt.width,zt.height,0,ie,mt,zt.data)}else if(_.isDataArrayTexture)nt?(It&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,Ct,ht.width,ht.height,ht.depth),C&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,ie,mt,ht.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ct,ht.width,ht.height,ht.depth,0,ie,mt,ht.data);else if(_.isData3DTexture)nt?(It&&n.texStorage3D(e.TEXTURE_3D,dt,Ct,ht.width,ht.height,ht.depth),C&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,ie,mt,ht.data)):n.texImage3D(e.TEXTURE_3D,0,Ct,ht.width,ht.height,ht.depth,0,ie,mt,ht.data);else if(_.isFramebufferTexture){if(It)if(nt)n.texStorage2D(e.TEXTURE_2D,dt,Ct,ht.width,ht.height);else{let O=ht.width,ct=ht.height;for(let St=0;St<dt;St++)n.texImage2D(e.TEXTURE_2D,St,Ct,O,ct,0,ie,mt,null),O>>=1,ct>>=1}}else if(A.length>0&&we){if(nt&&It){const O=be(A[0]);n.texStorage2D(e.TEXTURE_2D,dt,Ct,O.width,O.height)}for(let O=0,ct=A.length;O<ct;O++)zt=A[O],nt?C&&n.texSubImage2D(e.TEXTURE_2D,O,0,0,ie,mt,zt):n.texImage2D(e.TEXTURE_2D,O,Ct,ie,mt,zt);_.generateMipmaps=!1}else if(nt){if(It){const O=be(ht);n.texStorage2D(e.TEXTURE_2D,dt,Ct,O.width,O.height)}C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ie,mt,ht)}else n.texImage2D(e.TEXTURE_2D,0,Ct,ie,mt,ht);x(_,we)&&S(Q),Zt.__version=it.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function kt(b,_,q){if(_.image.length!==6)return;const Q=st(b,_),at=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+q);const it=i.get(at);if(at.version!==it.__version||Q===!0){n.activeTexture(e.TEXTURE0+q);const Zt=De.getPrimaries(De.workingColorSpace),Dt=_.colorSpace===Dr?null:De.getPrimaries(_.colorSpace),ut=_.colorSpace===Dr||Zt===Dt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const xt=_.isCompressedTexture||_.image[0].isCompressedTexture,$t=_.image[0]&&_.image[0].isDataTexture,ht=[];for(let O=0;O<6;O++)!xt&&!$t?ht[O]=p(_.image[O],!1,!0,r.maxCubemapSize):ht[O]=$t?_.image[O].image:_.image[O],ht[O]=ne(_,ht[O]);const we=ht[0],ie=f(we)||a,mt=s.convert(_.format,_.colorSpace),Ct=s.convert(_.type),zt=D(_.internalFormat,mt,Ct,_.colorSpace),A=a&&_.isVideoTexture!==!0,nt=it.__version===void 0||Q===!0,It=at.dataReady;let C=R(_,we,ie);V(e.TEXTURE_CUBE_MAP,_,ie);let dt;if(xt){A&&nt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,C,zt,we.width,we.height);for(let O=0;O<6;O++){dt=ht[O].mipmaps;for(let ct=0;ct<dt.length;ct++){const St=dt[ct];_.format!==bi?mt!==null?A?It&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+O,ct,0,0,St.width,St.height,mt,St.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+O,ct,zt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?It&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+O,ct,0,0,St.width,St.height,mt,Ct,St.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+O,ct,zt,St.width,St.height,0,mt,Ct,St.data)}}}else{if(dt=_.mipmaps,A&&nt){dt.length>0&&C++;const O=be(ht[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,C,zt,O.width,O.height)}for(let O=0;O<6;O++)if($t){A?It&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ht[O].width,ht[O].height,mt,Ct,ht[O].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,zt,ht[O].width,ht[O].height,0,mt,Ct,ht[O].data);for(let ct=0;ct<dt.length;ct++){const ue=dt[ct].image[O].image;A?It&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+O,ct+1,0,0,ue.width,ue.height,mt,Ct,ue.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+O,ct+1,zt,ue.width,ue.height,0,mt,Ct,ue.data)}}else{A?It&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,mt,Ct,ht[O]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,zt,mt,Ct,ht[O]);for(let ct=0;ct<dt.length;ct++){const St=dt[ct];A?It&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+O,ct+1,0,0,mt,Ct,St.image[O]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+O,ct+1,zt,mt,Ct,St.image[O])}}}x(_,ie)&&S(e.TEXTURE_CUBE_MAP),it.__version=at.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Pt(b,_,q,Q,at,it){const Zt=s.convert(q.format,q.colorSpace),Dt=s.convert(q.type),ut=D(q.internalFormat,Zt,Dt,q.colorSpace);if(!i.get(_).__hasExternalTextures){const $t=Math.max(1,_.width>>it),ht=Math.max(1,_.height>>it);at===e.TEXTURE_3D||at===e.TEXTURE_2D_ARRAY?n.texImage3D(at,it,ut,$t,ht,_.depth,0,Zt,Dt,null):n.texImage2D(at,it,ut,$t,ht,0,Zt,Dt,null)}n.bindFramebuffer(e.FRAMEBUFFER,b),Qt(_)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,at,i.get(q).__webglTexture,0,Ot(_)):(at===e.TEXTURE_2D||at>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Q,at,i.get(q).__webglTexture,it),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Et(b,_,q){if(e.bindRenderbuffer(e.RENDERBUFFER,b),_.depthBuffer&&!_.stencilBuffer){let Q=a===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(q||Qt(_)){const at=_.depthTexture;at&&at.isDepthTexture&&(at.type===or?Q=e.DEPTH_COMPONENT32F:at.type===Nr&&(Q=e.DEPTH_COMPONENT24));const it=Ot(_);Qt(_)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,it,Q,_.width,_.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,it,Q,_.width,_.height)}else e.renderbufferStorage(e.RENDERBUFFER,Q,_.width,_.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,b)}else if(_.depthBuffer&&_.stencilBuffer){const Q=Ot(_);q&&Qt(_)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Q,e.DEPTH24_STENCIL8,_.width,_.height):Qt(_)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Q,e.DEPTH24_STENCIL8,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,b)}else{const Q=_.textures;for(let at=0;at<Q.length;at++){const it=Q[at],Zt=s.convert(it.format,it.colorSpace),Dt=s.convert(it.type),ut=D(it.internalFormat,Zt,Dt,it.colorSpace),xt=Ot(_);q&&Qt(_)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,xt,ut,_.width,_.height):Qt(_)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xt,ut,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ut,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Yt(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const Q=i.get(_.depthTexture).__webglTexture,at=Ot(_);if(_.depthTexture.format===gs)Qt(_)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,at):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(_.depthTexture.format===ao)Qt(_)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,at):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function jt(b){const _=i.get(b),q=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Yt(_.__webglFramebuffer,b)}else if(q){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]=e.createRenderbuffer(),Et(_.__webglDepthbuffer[Q],b,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=e.createRenderbuffer(),Et(_.__webglDepthbuffer,b,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function F(b,_,q){const Q=i.get(b);_!==void 0&&Pt(Q.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),q!==void 0&&jt(b)}function ze(b){const _=b.texture,q=i.get(b),Q=i.get(_);b.addEventListener("dispose",ot);const at=b.textures,it=b.isWebGLCubeRenderTarget===!0,Zt=at.length>1,Dt=f(b)||a;if(Zt||(Q.__webglTexture===void 0&&(Q.__webglTexture=e.createTexture()),Q.__version=_.version,o.memory.textures++),it){q.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&_.mipmaps&&_.mipmaps.length>0){q.__webglFramebuffer[ut]=[];for(let xt=0;xt<_.mipmaps.length;xt++)q.__webglFramebuffer[ut][xt]=e.createFramebuffer()}else q.__webglFramebuffer[ut]=e.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){q.__webglFramebuffer=[];for(let ut=0;ut<_.mipmaps.length;ut++)q.__webglFramebuffer[ut]=e.createFramebuffer()}else q.__webglFramebuffer=e.createFramebuffer();if(Zt)if(r.drawBuffers)for(let ut=0,xt=at.length;ut<xt;ut++){const $t=i.get(at[ut]);$t.__webglTexture===void 0&&($t.__webglTexture=e.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Qt(b)===!1){q.__webglMultisampledFramebuffer=e.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ut=0;ut<at.length;ut++){const xt=at[ut];q.__webglColorRenderbuffer[ut]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,q.__webglColorRenderbuffer[ut]);const $t=s.convert(xt.format,xt.colorSpace),ht=s.convert(xt.type),we=D(xt.internalFormat,$t,ht,xt.colorSpace,b.isXRRenderTarget===!0),ie=Ot(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,ie,we,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,q.__webglColorRenderbuffer[ut])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(q.__webglDepthRenderbuffer=e.createRenderbuffer(),Et(q.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(it){n.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),V(e.TEXTURE_CUBE_MAP,_,Dt);for(let ut=0;ut<6;ut++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let xt=0;xt<_.mipmaps.length;xt++)Pt(q.__webglFramebuffer[ut][xt],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,xt);else Pt(q.__webglFramebuffer[ut],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);x(_,Dt)&&S(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let ut=0,xt=at.length;ut<xt;ut++){const $t=at[ut],ht=i.get($t);n.bindTexture(e.TEXTURE_2D,ht.__webglTexture),V(e.TEXTURE_2D,$t,Dt),Pt(q.__webglFramebuffer,b,$t,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,0),x($t,Dt)&&S(e.TEXTURE_2D)}n.unbindTexture()}else{let ut=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ut=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ut,Q.__webglTexture),V(ut,_,Dt),a&&_.mipmaps&&_.mipmaps.length>0)for(let xt=0;xt<_.mipmaps.length;xt++)Pt(q.__webglFramebuffer[xt],b,_,e.COLOR_ATTACHMENT0,ut,xt);else Pt(q.__webglFramebuffer,b,_,e.COLOR_ATTACHMENT0,ut,0);x(_,Dt)&&S(ut),n.unbindTexture()}b.depthBuffer&&jt(b)}function Ut(b){const _=f(b)||a,q=b.textures;for(let Q=0,at=q.length;Q<at;Q++){const it=q[Q];if(x(it,_)){const Zt=b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Dt=i.get(it).__webglTexture;n.bindTexture(Zt,Dt),S(Zt),n.unbindTexture()}}}function Nt(b){if(a&&b.samples>0&&Qt(b)===!1){const _=b.textures,q=b.width,Q=b.height;let at=e.COLOR_BUFFER_BIT;const it=[],Zt=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Dt=i.get(b),ut=_.length>1;if(ut)for(let xt=0;xt<_.length;xt++)n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let xt=0;xt<_.length;xt++){it.push(e.COLOR_ATTACHMENT0+xt),b.depthBuffer&&it.push(Zt);const $t=Dt.__ignoreDepthValues!==void 0?Dt.__ignoreDepthValues:!1;if($t===!1&&(b.depthBuffer&&(at|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&(at|=e.STENCIL_BUFFER_BIT)),ut&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Dt.__webglColorRenderbuffer[xt]),$t===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[Zt]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[Zt])),ut){const ht=i.get(_[xt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ht,0)}e.blitFramebuffer(0,0,q,Q,0,0,q,Q,at,e.NEAREST),l&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,it)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ut)for(let xt=0;xt<_.length;xt++){n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,Dt.__webglColorRenderbuffer[xt]);const $t=i.get(_[xt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,$t,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}}function Ot(b){return Math.min(r.maxSamples,b.samples)}function Qt(b){const _=i.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ee(b){const _=o.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function ne(b,_){const q=b.colorSpace,Q=b.format,at=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Lu||q!==Ti&&q!==Dr&&(De.getTransfer(q)===Ge?a===!1?t.has("EXT_sRGB")===!0&&Q===bi?(b.format=Lu,b.minFilter=vn,b.generateMipmaps=!1):_=jm.sRGBToLinear(_):(Q!==bi||at!==Br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),_}function be(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=K,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=tt,this.setTextureCube=J,this.rebindTextures=F,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Qt}function W3(e,t,n){const i=n.isWebGL2;function r(s,o=Dr){let a;const c=De.getTransfer(o);if(s===Br)return e.UNSIGNED_BYTE;if(s===zm)return e.UNSIGNED_SHORT_4_4_4_4;if(s===Gm)return e.UNSIGNED_SHORT_5_5_5_1;if(s===u1)return e.BYTE;if(s===h1)return e.SHORT;if(s===uh)return e.UNSIGNED_SHORT;if(s===km)return e.INT;if(s===Nr)return e.UNSIGNED_INT;if(s===or)return e.FLOAT;if(s===hr)return i?e.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===d1)return e.ALPHA;if(s===bi)return e.RGBA;if(s===f1)return e.LUMINANCE;if(s===p1)return e.LUMINANCE_ALPHA;if(s===gs)return e.DEPTH_COMPONENT;if(s===ao)return e.DEPTH_STENCIL;if(s===Lu)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===m1)return e.RED;if(s===Hm)return e.RED_INTEGER;if(s===g1)return e.RG;if(s===Vm)return e.RG_INTEGER;if(s===Wm)return e.RGBA_INTEGER;if(s===Tl||s===Al||s===wl||s===Rl)if(c===Ge)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Tl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Tl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Al)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bd||s===kd||s===zd||s===Gd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xm)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hd||s===Vd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Hd)return c===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vd)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wd||s===Xd||s===Yd||s===qd||s===jd||s===Kd||s===Zd||s===$d||s===Jd||s===Qd||s===tf||s===ef||s===nf||s===rf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wd)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xd)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yd)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qd)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jd)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kd)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zd)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$d)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jd)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qd)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tf)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ef)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nf)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rf)return c===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cl||s===sf||s===of)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Cl)return c===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===of)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_1||s===af||s===cf||s===lf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Cl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===af)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ms?i?e.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):e[s]!==void 0?e[s]:null}return{convert:r}}class X3 extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class cs extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y3={type:"move"};class tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const y of t.hand.values()){const p=n.getJointPose(y,i),f=this._getHandJoint(l,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Y3)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new cs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const q3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class K3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new Tn,s=t.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(t,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Un({extensions:{fragDepth:!0},vertexShader:q3,fragmentShader:j3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ln(new pa(20,20),r)}t.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class Z3 extends As{constructor(t,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const y=new K3,p=n.getContextAttributes();let f=null,E=null;const x=[],S=[],D=new vt;let R=null;const w=new hi;w.layers.enable(1),w.viewport=new Mn;const B=new hi;B.layers.enable(2),B.viewport=new Mn;const ot=[w,B],v=new X3;v.layers.enable(1),v.layers.enable(2);let T=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let st=x[V];return st===void 0&&(st=new tu,x[V]=st),st.getTargetRaySpace()},this.getControllerGrip=function(V){let st=x[V];return st===void 0&&(st=new tu,x[V]=st),st.getGripSpace()},this.getHand=function(V){let st=x[V];return st===void 0&&(st=new tu,x[V]=st),st.getHandSpace()};function $(V){const st=S.indexOf(V.inputSource);if(st===-1)return;const Mt=x[st];Mt!==void 0&&(Mt.update(V.inputSource,V.frame,l||o),Mt.dispatchEvent({type:V.type,data:V.inputSource}))}function L(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",K);for(let V=0;V<x.length;V++){const st=S[V];st!==null&&(S[V]=null,x[V].disconnect(st))}T=null,et=null,y.reset(),t.setRenderTarget(f),m=null,d=null,h=null,r=null,E=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",L),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const st={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,st),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Ai(m.framebufferWidth,m.framebufferHeight,{format:bi,type:Br,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let st=null,Mt=null,kt=null;p.depth&&(kt=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,st=p.stencil?ao:gs,Mt=p.stencil?ms:Nr);const Pt={colorFormat:n.RGBA8,depthFormat:kt,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Pt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Ai(d.textureWidth,d.textureHeight,{format:bi,type:Br,depthTexture:new rg(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const Et=t.properties.get(E);Et.__ignoreDepthValues=d.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Xt.setContext(r),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(V){for(let st=0;st<V.removed.length;st++){const Mt=V.removed[st],kt=S.indexOf(Mt);kt>=0&&(S[kt]=null,x[kt].disconnect(Mt))}for(let st=0;st<V.added.length;st++){const Mt=V.added[st];let kt=S.indexOf(Mt);if(kt===-1){for(let Et=0;Et<x.length;Et++)if(Et>=S.length){S.push(Mt),kt=Et;break}else if(S[Et]===null){S[Et]=Mt,kt=Et;break}if(kt===-1)break}const Pt=x[kt];Pt&&Pt.connect(Mt)}}const G=new P,X=new P;function j(V,st,Mt){G.setFromMatrixPosition(st.matrixWorld),X.setFromMatrixPosition(Mt.matrixWorld);const kt=G.distanceTo(X),Pt=st.projectionMatrix.elements,Et=Mt.projectionMatrix.elements,Yt=Pt[14]/(Pt[10]-1),jt=Pt[14]/(Pt[10]+1),F=(Pt[9]+1)/Pt[5],ze=(Pt[9]-1)/Pt[5],Ut=(Pt[8]-1)/Pt[0],Nt=(Et[8]+1)/Et[0],Ot=Yt*Ut,Qt=Yt*Nt,ee=kt/(-Ut+Nt),ne=ee*-Ut;st.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ne),V.translateZ(ee),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const be=Yt+ee,b=jt+ee,_=Ot-ne,q=Qt+(kt-ne),Q=F*jt/b*be,at=ze*jt/b*be;V.projectionMatrix.makePerspective(_,q,Q,at,be,b),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function tt(V,st){st===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(st.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;y.texture!==null&&(V.near=y.depthNear,V.far=y.depthFar),v.near=B.near=w.near=V.near,v.far=B.far=w.far=V.far,(T!==v.near||et!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,et=v.far,w.near=T,w.far=et,B.near=T,B.far=et,w.updateProjectionMatrix(),B.updateProjectionMatrix(),V.updateProjectionMatrix());const st=V.parent,Mt=v.cameras;tt(v,st);for(let kt=0;kt<Mt.length;kt++)tt(Mt[kt],st);Mt.length===2?j(v,w,B):v.projectionMatrix.copy(w.projectionMatrix),J(V,v,st)};function J(V,st,Mt){Mt===null?V.matrix.copy(st.matrixWorld):(V.matrix.copy(Mt.matrixWorld),V.matrix.invert(),V.matrix.multiply(st.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(st.projectionMatrix),V.projectionMatrixInverse.copy(st.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=na*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null};let lt=null;function Tt(V,st){if(u=st.getViewerPose(l||o),g=st,u!==null){const Mt=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let kt=!1;Mt.length!==v.cameras.length&&(v.cameras.length=0,kt=!0);for(let Et=0;Et<Mt.length;Et++){const Yt=Mt[Et];let jt=null;if(m!==null)jt=m.getViewport(Yt);else{const ze=h.getViewSubImage(d,Yt);jt=ze.viewport,Et===0&&(t.setRenderTargetTextures(E,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),t.setRenderTarget(E))}let F=ot[Et];F===void 0&&(F=new hi,F.layers.enable(Et),F.viewport=new Mn,ot[Et]=F),F.matrix.fromArray(Yt.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(Yt.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(jt.x,jt.y,jt.width,jt.height),Et===0&&(v.matrix.copy(F.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),kt===!0&&v.cameras.push(F)}const Pt=r.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Et=h.getDepthInformation(Mt[0]);Et&&Et.isValid&&Et.texture&&y.init(t,Et,r.renderState)}}for(let Mt=0;Mt<x.length;Mt++){const kt=S[Mt],Pt=x[Mt];kt!==null&&Pt!==void 0&&Pt.update(kt,st,l||o)}y.render(t,v),lt&&lt(V,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}const Xt=new ig;Xt.setAnimationLoop(Tt),this.setAnimationLoop=function(V){lt=V},this.dispose=function(){}}}const es=new pr,$3=new qe;function J3(e,t){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,tg(e)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,E,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),y(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,E,x):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Xn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Xn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=t.get(f),x=E.envMap,S=E.envMapRotation;if(x&&(p.envMap.value=x,es.copy(S),es.x*=-1,es.y*=-1,es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),p.envMapRotation.value.setFromMatrix4($3.makeRotationFromEuler(es)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const D=e._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*D,n(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=x*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Q3(e,t,n,i){let r={},s={},o=[];const a=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,x){const S=x.program;i.uniformBlockBinding(E,S)}function l(E,x){let S=r[E.id];S===void 0&&(g(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",p));const D=x.program;i.updateUBOMapping(E,D);const R=t.render.frame;s[E.id]!==R&&(d(E),s[E.id]=R)}function u(E){const x=h();E.__bindingPointIndex=x;const S=e.createBuffer(),D=E.__size,R=E.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,D,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,S),S}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const x=r[E.id],S=E.uniforms,D=E.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let R=0,w=S.length;R<w;R++){const B=Array.isArray(S[R])?S[R]:[S[R]];for(let ot=0,v=B.length;ot<v;ot++){const T=B[ot];if(m(T,R,ot,D)===!0){const et=T.__offset,$=Array.isArray(T.value)?T.value:[T.value];let L=0;for(let K=0;K<$.length;K++){const G=$[K],X=y(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,et+L,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,et,T.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(E,x,S,D){const R=E.value,w=x+"_"+S;if(D[w]===void 0)return typeof R=="number"||typeof R=="boolean"?D[w]=R:D[w]=R.clone(),!0;{const B=D[w];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return D[w]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function g(E){const x=E.uniforms;let S=0;const D=16;for(let w=0,B=x.length;w<B;w++){const ot=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,T=ot.length;v<T;v++){const et=ot[v],$=Array.isArray(et.value)?et.value:[et.value];for(let L=0,K=$.length;L<K;L++){const G=$[L],X=y(G),j=S%D;j!==0&&D-j<X.boundary&&(S+=D-j),et.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=S,S+=X.storage}}}const R=S%D;return R>0&&(S+=D-R),E.__size=S,E.__cache={},this}function y(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),e.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const E in r)e.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class ug{constructor(t={}){const{canvas:n=V1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let y=null,p=null;const f=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Si,this._useLegacyLights=!1,this.toneMapping=Or,this.toneMappingExposure=1;const x=this;let S=!1,D=0,R=0,w=null,B=-1,ot=null;const v=new Mn,T=new Mn;let et=null;const $=new fe(0);let L=0,K=n.width,G=n.height,X=1,j=null,tt=null;const J=new Mn(0,0,K,G),lt=new Mn(0,0,K,G);let Tt=!1;const Xt=new ph;let V=!1,st=!1,Mt=null;const kt=new qe,Pt=new vt,Et=new P,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function jt(){return w===null?X:1}let F=i;function ze(M,N){for(let H=0;H<M.length;H++){const W=M[H],k=n.getContext(W,N);if(k!==null)return k}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lh}`),n.addEventListener("webglcontextlost",It,!1),n.addEventListener("webglcontextrestored",C,!1),n.addEventListener("webglcontextcreationerror",dt,!1),F===null){const N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),F=ze(N,M),F===null)throw ze(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ut,Nt,Ot,Qt,ee,ne,be,b,_,q,Q,at,it,Zt,Dt,ut,xt,$t,ht,we,ie,mt,Ct,zt;function A(){Ut=new sy(F),Nt=new Qx(F,Ut,t),Ut.init(Nt),mt=new W3(F,Ut,Nt),Ot=new H3(F,Ut,Nt),Qt=new cy(F),ee=new R3,ne=new V3(F,Ut,Ot,ee,Nt,mt,Qt),be=new ey(x),b=new ry(x),_=new pv(F,Nt),Ct=new $x(F,Ut,_,Nt),q=new oy(F,_,Qt,Ct),Q=new dy(F,q,_,Qt),ht=new hy(F,Nt,ne),ut=new ty(ee),at=new w3(x,be,b,Ut,Nt,Ct,ut),it=new J3(x,ee),Zt=new P3,Dt=new F3(Ut,Nt),$t=new Zx(x,be,b,Ot,Q,d,c),xt=new G3(x,Q,Nt),zt=new Q3(F,Qt,Nt,Ot),we=new Jx(F,Ut,Qt,Nt),ie=new ay(F,Ut,Qt,Nt),Qt.programs=at.programs,x.capabilities=Nt,x.extensions=Ut,x.properties=ee,x.renderLists=Zt,x.shadowMap=xt,x.state=Ot,x.info=Qt}A();const nt=new Z3(x,F);this.xr=nt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Ut.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ut.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(K,G,!1))},this.getSize=function(M){return M.set(K,G)},this.setSize=function(M,N,H=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,G=N,n.width=Math.floor(M*X),n.height=Math.floor(N*X),H===!0&&(n.style.width=M+"px",n.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(K*X,G*X).floor()},this.setDrawingBufferSize=function(M,N,H){K=M,G=N,X=H,n.width=Math.floor(M*H),n.height=Math.floor(N*H),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,N,H,W){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,N,H,W),Ot.viewport(v.copy(J).multiplyScalar(X).round())},this.getScissor=function(M){return M.copy(lt)},this.setScissor=function(M,N,H,W){M.isVector4?lt.set(M.x,M.y,M.z,M.w):lt.set(M,N,H,W),Ot.scissor(T.copy(lt).multiplyScalar(X).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(M){Ot.setScissorTest(Tt=M)},this.setOpaqueSort=function(M){j=M},this.setTransparentSort=function(M){tt=M},this.getClearColor=function(M){return M.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(M=!0,N=!0,H=!0){let W=0;if(M){let k=!1;if(w!==null){const At=w.texture.format;k=At===Wm||At===Vm||At===Hm}if(k){const At=w.texture.type,Ht=At===Br||At===Nr||At===uh||At===ms||At===zm||At===Gm,Kt=$t.getClearColor(),Jt=$t.getClearAlpha(),se=Kt.r,te=Kt.g,oe=Kt.b;Ht?(m[0]=se,m[1]=te,m[2]=oe,m[3]=Jt,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=se,g[1]=te,g[2]=oe,g[3]=Jt,F.clearBufferiv(F.COLOR,0,g))}else W|=F.COLOR_BUFFER_BIT}N&&(W|=F.DEPTH_BUFFER_BIT),H&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",It,!1),n.removeEventListener("webglcontextrestored",C,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),Zt.dispose(),Dt.dispose(),ee.dispose(),be.dispose(),b.dispose(),Q.dispose(),Ct.dispose(),zt.dispose(),at.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Pe),nt.removeEventListener("sessionend",pe),Mt&&(Mt.dispose(),Mt=null),me.stop()};function It(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=Qt.autoReset,N=xt.enabled,H=xt.autoUpdate,W=xt.needsUpdate,k=xt.type;A(),Qt.autoReset=M,xt.enabled=N,xt.autoUpdate=H,xt.needsUpdate=W,xt.type=k}function dt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function O(M){const N=M.target;N.removeEventListener("dispose",O),ct(N)}function ct(M){St(M),ee.remove(M)}function St(M){const N=ee.get(M).programs;N!==void 0&&(N.forEach(function(H){at.releaseProgram(H)}),M.isShaderMaterial&&at.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,H,W,k,At){N===null&&(N=Yt);const Ht=k.isMesh&&k.matrixWorld.determinant()<0,Kt=Rs(M,N,H,W,k);Ot.setMaterial(W,Ht);let Jt=H.index,se=1;if(W.wireframe===!0){if(Jt=q.getWireframeAttribute(H),Jt===void 0)return;se=2}const te=H.drawRange,oe=H.attributes.position;let Ie=te.start*se,En=(te.start+te.count)*se;At!==null&&(Ie=Math.max(Ie,At.start*se),En=Math.min(En,(At.start+At.count)*se)),Jt!==null?(Ie=Math.max(Ie,0),En=Math.min(En,Jt.count)):oe!=null&&(Ie=Math.max(Ie,0),En=Math.min(En,oe.count));const We=En-Ie;if(We<0||We===1/0)return;Ct.setup(k,W,Kt,H,Jt);let Nn,Ae=we;if(Jt!==null&&(Nn=_.get(Jt),Ae=ie,Ae.setIndex(Nn)),k.isMesh)W.wireframe===!0?(Ot.setLineWidth(W.wireframeLinewidth*jt()),Ae.setMode(F.LINES)):Ae.setMode(F.TRIANGLES);else if(k.isLine){let ae=W.linewidth;ae===void 0&&(ae=1),Ot.setLineWidth(ae*jt()),k.isLineSegments?Ae.setMode(F.LINES):k.isLineLoop?Ae.setMode(F.LINE_LOOP):Ae.setMode(F.LINE_STRIP)}else k.isPoints?Ae.setMode(F.POINTS):k.isSprite&&Ae.setMode(F.TRIANGLES);if(k.isBatchedMesh)Ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Ae.renderInstances(Ie,We,k.count);else if(H.isInstancedBufferGeometry){const ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ii=Math.min(H.instanceCount,ae);Ae.renderInstances(Ie,We,Ii)}else Ae.render(Ie,We)};function ue(M,N,H){M.transparent===!0&&M.side===zn&&M.forceSinglePass===!1?(M.side=Xn,M.needsUpdate=!0,xr(M,N,H),M.side=Gr,M.needsUpdate=!0,xr(M,N,H),M.side=zn):xr(M,N,H)}this.compile=function(M,N,H=null){H===null&&(H=M),p=Dt.get(H),p.init(),E.push(p),H.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),M!==H&&M.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(x._useLegacyLights);const W=new Set;return M.traverse(function(k){const At=k.material;if(At)if(Array.isArray(At))for(let Ht=0;Ht<At.length;Ht++){const Kt=At[Ht];ue(Kt,H,k),W.add(Kt)}else ue(At,H,k),W.add(At)}),E.pop(),p=null,W},this.compileAsync=function(M,N,H=null){const W=this.compile(M,N,H);return new Promise(k=>{function At(){if(W.forEach(function(Ht){ee.get(Ht).currentProgram.isReady()&&W.delete(Ht)}),W.size===0){k(M);return}setTimeout(At,10)}Ut.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ve=null;function Te(M){ve&&ve(M)}function Pe(){me.stop()}function pe(){me.start()}const me=new ig;me.setAnimationLoop(Te),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(M){ve=M,nt.setAnimationLoop(M),M===null?me.stop():me.start()},nt.addEventListener("sessionstart",Pe),nt.addEventListener("sessionend",pe),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(N),N=nt.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,N,w),p=Dt.get(M,E.length),p.init(),E.push(p),kt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Xt.setFromProjectionMatrix(kt),st=this.localClippingEnabled,V=ut.init(this.clippingPlanes,st),y=Zt.get(M,f.length),y.init(),f.push(y),nn(M,N,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(j,tt),this.info.render.frame++,V===!0&&ut.beginShadows();const H=p.state.shadowsArray;if(xt.render(H,M,N),V===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1)&&$t.render(y,M),p.setupLights(x._useLegacyLights),N.isArrayCamera){const W=N.cameras;for(let k=0,At=W.length;k<At;k++){const Ht=W[k];Di(y,M,Ht,Ht.viewport)}}else Di(y,M,N);w!==null&&(ne.updateMultisampleRenderTarget(w),ne.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(x,M,N),Ct.resetDefaultState(),B=-1,ot=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function nn(M,N,H,W){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Xt.intersectsSprite(M)){W&&Et.setFromMatrixPosition(M.matrixWorld).applyMatrix4(kt);const Ht=Q.update(M),Kt=M.material;Kt.visible&&y.push(M,Ht,Kt,H,Et.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Xt.intersectsObject(M))){const Ht=Q.update(M),Kt=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Et.copy(M.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Et.copy(Ht.boundingSphere.center)),Et.applyMatrix4(M.matrixWorld).applyMatrix4(kt)),Array.isArray(Kt)){const Jt=Ht.groups;for(let se=0,te=Jt.length;se<te;se++){const oe=Jt[se],Ie=Kt[oe.materialIndex];Ie&&Ie.visible&&y.push(M,Ht,Ie,H,Et.z,oe)}}else Kt.visible&&y.push(M,Ht,Kt,H,Et.z,null)}}const At=M.children;for(let Ht=0,Kt=At.length;Ht<Kt;Ht++)nn(At[Ht],N,H,W)}function Di(M,N,H,W){const k=M.opaque,At=M.transmissive,Ht=M.transparent;p.setupLightsView(H),V===!0&&ut.setGlobalState(x.clippingPlanes,H),At.length>0&&ji(k,At,N,H),W&&Ot.viewport(v.copy(W)),k.length>0&&_r(k,N,H),At.length>0&&_r(At,N,H),Ht.length>0&&_r(Ht,N,H),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function ji(M,N,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const At=Nt.isWebGL2;Mt===null&&(Mt=new Ai(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")?hr:Br,minFilter:as,samples:At?4:0})),x.getDrawingBufferSize(Pt),At?Mt.setSize(Pt.x,Pt.y):Mt.setSize(wc(Pt.x),wc(Pt.y));const Ht=x.getRenderTarget();x.setRenderTarget(Mt),x.getClearColor($),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Kt=x.toneMapping;x.toneMapping=Or,_r(M,H,W),ne.updateMultisampleRenderTarget(Mt),ne.updateRenderTargetMipmap(Mt);let Jt=!1;for(let se=0,te=N.length;se<te;se++){const oe=N[se],Ie=oe.object,En=oe.geometry,We=oe.material,Nn=oe.group;if(We.side===zn&&Ie.layers.test(W.layers)){const Ae=We.side;We.side=Xn,We.needsUpdate=!0,vr(Ie,H,W,En,We,Nn),We.side=Ae,We.needsUpdate=!0,Jt=!0}}Jt===!0&&(ne.updateMultisampleRenderTarget(Mt),ne.updateRenderTargetMipmap(Mt)),x.setRenderTarget(Ht),x.setClearColor($,L),x.toneMapping=Kt}function _r(M,N,H){const W=N.isScene===!0?N.overrideMaterial:null;for(let k=0,At=M.length;k<At;k++){const Ht=M[k],Kt=Ht.object,Jt=Ht.geometry,se=W===null?Ht.material:W,te=Ht.group;Kt.layers.test(H.layers)&&vr(Kt,N,H,Jt,se,te)}}function vr(M,N,H,W,k,At){M.onBeforeRender(x,N,H,W,k,At),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(x,N,H,W,M,At),k.transparent===!0&&k.side===zn&&k.forceSinglePass===!1?(k.side=Xn,k.needsUpdate=!0,x.renderBufferDirect(H,N,W,k,M,At),k.side=Gr,k.needsUpdate=!0,x.renderBufferDirect(H,N,W,k,M,At),k.side=zn):x.renderBufferDirect(H,N,W,k,M,At),M.onAfterRender(x,N,H,W,k,At)}function xr(M,N,H){N.isScene!==!0&&(N=Yt);const W=ee.get(M),k=p.state.lights,At=p.state.shadowsArray,Ht=k.state.version,Kt=at.getParameters(M,k.state,At,N,H),Jt=at.getProgramCacheKey(Kt);let se=W.programs;W.environment=M.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(M.isMeshStandardMaterial?b:be).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,se===void 0&&(M.addEventListener("dispose",O),se=new Map,W.programs=se);let te=se.get(Jt);if(te!==void 0){if(W.currentProgram===te&&W.lightsStateVersion===Ht)return jr(M,Kt),te}else Kt.uniforms=at.getUniforms(M),M.onBuild(H,Kt,x),M.onBeforeCompile(Kt,x),te=at.acquireProgram(Kt,Jt),se.set(Jt,te),W.uniforms=Kt.uniforms;const oe=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(oe.clippingPlanes=ut.uniform),jr(M,Kt),W.needsLights=Ea(M),W.lightsStateVersion=Ht,W.needsLights&&(oe.ambientLightColor.value=k.state.ambient,oe.lightProbe.value=k.state.probe,oe.directionalLights.value=k.state.directional,oe.directionalLightShadows.value=k.state.directionalShadow,oe.spotLights.value=k.state.spot,oe.spotLightShadows.value=k.state.spotShadow,oe.rectAreaLights.value=k.state.rectArea,oe.ltc_1.value=k.state.rectAreaLTC1,oe.ltc_2.value=k.state.rectAreaLTC2,oe.pointLights.value=k.state.point,oe.pointLightShadows.value=k.state.pointShadow,oe.hemisphereLights.value=k.state.hemi,oe.directionalShadowMap.value=k.state.directionalShadowMap,oe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,oe.spotShadowMap.value=k.state.spotShadowMap,oe.spotLightMatrix.value=k.state.spotLightMatrix,oe.spotLightMap.value=k.state.spotLightMap,oe.pointShadowMap.value=k.state.pointShadowMap,oe.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=te,W.uniformsList=null,te}function yr(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=dc.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function jr(M,N){const H=ee.get(M);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Rs(M,N,H,W,k){N.isScene!==!0&&(N=Yt),ne.resetTextureUnits();const At=N.fog,Ht=W.isMeshStandardMaterial?N.environment:null,Kt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ti,Jt=(W.isMeshStandardMaterial?b:be).get(W.envMap||Ht),se=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,te=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),oe=!!H.morphAttributes.position,Ie=!!H.morphAttributes.normal,En=!!H.morphAttributes.color;let We=Or;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(We=x.toneMapping);const Nn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ae=Nn!==void 0?Nn.length:0,ae=ee.get(W),Ii=p.state.lights;if(V===!0&&(st===!0||M!==ot)){const Hn=M===ot&&W.id===B;ut.setState(W,M,Hn)}let Ue=!1;W.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Ii.state.version||ae.outputColorSpace!==Kt||k.isBatchedMesh&&ae.batching===!1||!k.isBatchedMesh&&ae.batching===!0||k.isInstancedMesh&&ae.instancing===!1||!k.isInstancedMesh&&ae.instancing===!0||k.isSkinnedMesh&&ae.skinning===!1||!k.isSkinnedMesh&&ae.skinning===!0||k.isInstancedMesh&&ae.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ae.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ae.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ae.instancingMorph===!1&&k.morphTexture!==null||ae.envMap!==Jt||W.fog===!0&&ae.fog!==At||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==ut.numPlanes||ae.numIntersection!==ut.numIntersection)||ae.vertexAlphas!==se||ae.vertexTangents!==te||ae.morphTargets!==oe||ae.morphNormals!==Ie||ae.morphColors!==En||ae.toneMapping!==We||Nt.isWebGL2===!0&&ae.morphTargetsCount!==Ae)&&(Ue=!0):(Ue=!0,ae.__version=W.version);let Ui=ae.currentProgram;Ue===!0&&(Ui=xr(W,N,k));let vi=!1,Mr=!1,Ro=!1;const pn=Ui.getUniforms(),Ki=ae.uniforms;if(Ot.useProgram(Ui.program)&&(vi=!0,Mr=!0,Ro=!0),W.id!==B&&(B=W.id,Mr=!0),vi||ot!==M){pn.setValue(F,"projectionMatrix",M.projectionMatrix),pn.setValue(F,"viewMatrix",M.matrixWorldInverse);const Hn=pn.map.cameraPosition;Hn!==void 0&&Hn.setValue(F,Et.setFromMatrixPosition(M.matrixWorld)),Nt.logarithmicDepthBuffer&&pn.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pn.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),ot!==M&&(ot=M,Mr=!0,Ro=!0)}if(k.isSkinnedMesh){pn.setOptional(F,k,"bindMatrix"),pn.setOptional(F,k,"bindMatrixInverse");const Hn=k.skeleton;Hn&&(Nt.floatVertexTextures?(Hn.boneTexture===null&&Hn.computeBoneTexture(),pn.setValue(F,"boneTexture",Hn.boneTexture,ne)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(pn.setOptional(F,k,"batchingTexture"),pn.setValue(F,"batchingTexture",k._matricesTexture,ne));const Co=H.morphAttributes;if((Co.position!==void 0||Co.normal!==void 0||Co.color!==void 0&&Nt.isWebGL2===!0)&&ht.update(k,H,Ui),(Mr||ae.receiveShadow!==k.receiveShadow)&&(ae.receiveShadow=k.receiveShadow,pn.setValue(F,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ki.envMap.value=Jt,Ki.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),Mr&&(pn.setValue(F,"toneMappingExposure",x.toneMappingExposure),ae.needsLights&&Sa(Ki,Ro),At&&W.fog===!0&&it.refreshFogUniforms(Ki,At),it.refreshMaterialUniforms(Ki,W,X,G,Mt),dc.upload(F,yr(ae),Ki,ne)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(dc.upload(F,yr(ae),Ki,ne),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pn.setValue(F,"center",k.center),pn.setValue(F,"modelViewMatrix",k.modelViewMatrix),pn.setValue(F,"normalMatrix",k.normalMatrix),pn.setValue(F,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Hn=W.uniformsGroups;for(let Po=0,Lo=Hn.length;Po<Lo;Po++)if(Nt.isWebGL2){const ba=Hn[Po];zt.update(ba,Ui),zt.bind(ba,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function Sa(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Ea(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,N,H){ee.get(M.texture).__webglTexture=N,ee.get(M.depthTexture).__webglTexture=H;const W=ee.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const H=ee.get(M);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,H=0){w=M,D=N,R=H;let W=!0,k=null,At=!1,Ht=!1;if(M){const Jt=ee.get(M);Jt.__useDefaultFramebuffer!==void 0?(Ot.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):Jt.__webglFramebuffer===void 0?ne.setupRenderTarget(M):Jt.__hasExternalTextures&&ne.rebindTextures(M,ee.get(M.texture).__webglTexture,ee.get(M.depthTexture).__webglTexture);const se=M.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Ht=!0);const te=ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(te[N])?k=te[N][H]:k=te[N],At=!0):Nt.isWebGL2&&M.samples>0&&ne.useMultisampledRTT(M)===!1?k=ee.get(M).__webglMultisampledFramebuffer:Array.isArray(te)?k=te[H]:k=te,v.copy(M.viewport),T.copy(M.scissor),et=M.scissorTest}else v.copy(J).multiplyScalar(X).floor(),T.copy(lt).multiplyScalar(X).floor(),et=Tt;if(Ot.bindFramebuffer(F.FRAMEBUFFER,k)&&Nt.drawBuffers&&W&&Ot.drawBuffers(M,k),Ot.viewport(v),Ot.scissor(T),Ot.setScissorTest(et),At){const Jt=ee.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,Jt.__webglTexture,H)}else if(Ht){const Jt=ee.get(M.texture),se=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Jt.__webglTexture,H||0,se)}B=-1},this.readRenderTargetPixels=function(M,N,H,W,k,At,Ht){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ht!==void 0&&(Kt=Kt[Ht]),Kt){Ot.bindFramebuffer(F.FRAMEBUFFER,Kt);try{const Jt=M.texture,se=Jt.format,te=Jt.type;if(se!==bi&&mt.convert(se)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const oe=te===hr&&(Ut.has("EXT_color_buffer_half_float")||Nt.isWebGL2&&Ut.has("EXT_color_buffer_float"));if(te!==Br&&mt.convert(te)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(te===or&&(Nt.isWebGL2||Ut.has("OES_texture_float")||Ut.has("WEBGL_color_buffer_float")))&&!oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-W&&H>=0&&H<=M.height-k&&F.readPixels(N,H,W,k,mt.convert(se),mt.convert(te),At)}finally{const Jt=w!==null?ee.get(w).__webglFramebuffer:null;Ot.bindFramebuffer(F.FRAMEBUFFER,Jt)}}},this.copyFramebufferToTexture=function(M,N,H=0){const W=Math.pow(2,-H),k=Math.floor(N.image.width*W),At=Math.floor(N.image.height*W);ne.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,M.x,M.y,k,At),Ot.unbindTexture()},this.copyTextureToTexture=function(M,N,H,W=0){const k=N.image.width,At=N.image.height,Ht=mt.convert(H.format),Kt=mt.convert(H.type);ne.setTexture2D(H,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment),N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,M.x,M.y,k,At,Ht,Kt,N.image.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,M.x,M.y,N.mipmaps[0].width,N.mipmaps[0].height,Ht,N.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,M.x,M.y,Ht,Kt,N.image),W===0&&H.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ot.unbindTexture()},this.copyTextureToTexture3D=function(M,N,H,W,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const At=Math.round(M.max.x-M.min.x),Ht=Math.round(M.max.y-M.min.y),Kt=M.max.z-M.min.z+1,Jt=mt.convert(W.format),se=mt.convert(W.type);let te;if(W.isData3DTexture)ne.setTexture3D(W,0),te=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)ne.setTexture2DArray(W,0),te=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const oe=F.getParameter(F.UNPACK_ROW_LENGTH),Ie=F.getParameter(F.UNPACK_IMAGE_HEIGHT),En=F.getParameter(F.UNPACK_SKIP_PIXELS),We=F.getParameter(F.UNPACK_SKIP_ROWS),Nn=F.getParameter(F.UNPACK_SKIP_IMAGES),Ae=H.isCompressedTexture?H.mipmaps[k]:H.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,M.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,M.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,M.min.z),H.isDataTexture||H.isData3DTexture?F.texSubImage3D(te,k,N.x,N.y,N.z,At,Ht,Kt,Jt,se,Ae.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(te,k,N.x,N.y,N.z,At,Ht,Kt,Jt,Ae.data):F.texSubImage3D(te,k,N.x,N.y,N.z,At,Ht,Kt,Jt,se,Ae),F.pixelStorei(F.UNPACK_ROW_LENGTH,oe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ie),F.pixelStorei(F.UNPACK_SKIP_PIXELS,En),F.pixelStorei(F.UNPACK_SKIP_ROWS,We),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Nn),k===0&&W.generateMipmaps&&F.generateMipmap(te),Ot.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?ne.setTextureCube(M,0):M.isData3DTexture?ne.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ne.setTexture2DArray(M,0):ne.setTexture2D(M,0),Ot.unbindTexture()},this.resetState=function(){D=0,R=0,w=null,Ot.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return lr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===hh?"display-p3":"srgb",n.unpackColorSpace=De.workingColorSpace===Vc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class tM extends ug{}tM.prototype.isWebGL1Renderer=!0;class _h{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(t),this.density=n}clone(){return new _h(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class eM extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Uu extends da{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tp=new qe,Nu=new Xc,ja=new Wc,Ka=new P;class Za extends An{constructor(t=new In,n=new Uu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),ja.radius+=s,t.ray.intersectsSphere(ja)===!1)return;tp.copy(r).invert(),Nu.copy(t.ray).applyMatrix4(tp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,y=m;g<y;g++){const p=l.getX(g);Ka.fromBufferAttribute(h,p),ep(Ka,p,c,r,t,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=d,y=m;g<y;g++)Ka.fromBufferAttribute(h,g),ep(Ka,g,c,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ep(e,t,n,i,r,s,o){const a=Nu.distanceSqToPoint(e);if(a<n){const c=new P;Nu.closestPointToPoint(e,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class nM extends Tn{constructor(t,n,i,r,s,o,a,c,l){super(t,n,i,r,s,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:vn,this.magFilter=s!==void 0?s:vn,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class $a extends Tn{constructor(t,n,i,r,s,o,a,c,l){super(t,n,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){const i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,m=(o-u)/d;return(r+m)/(s-1)}getTangent(t,n){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=n||(o.isVector2?new vt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,n){const i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n){const i=new P,r=[],s=[],o=[],a=new P,c=new qe;for(let m=0;m<=t;m++){const g=m/t;r[m]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(yn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(yn(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vh extends Xi{constructor(t=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,n=new vt){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*u-m*h+this.aX,l=d*h+m*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class iM extends vh{constructor(t,n,i,r,s,o){super(t,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xh(){let e=0,t=0,n=0,i=0;function r(s,o,a,c){e=s,t=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,m*=u,r(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return e+t*s+n*o+i*a}}}const Ja=new P,eu=new xh,nu=new xh,iu=new xh;class rM extends Xi{constructor(t=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=r}getPoint(t,n=new P){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Ja.subVectors(r[0],r[1]).add(r[0]),l=Ja);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ja.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ja),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),m),y=Math.pow(h.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(u),m);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),eu.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,y,p),nu.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,y,p),iu.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,y,p)}else this.curveType==="catmullrom"&&(eu.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),nu.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),iu.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(eu.calc(c),nu.calc(c),iu.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(new P().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function np(e,t,n,i,r){const s=(i-t)*.5,o=(r-n)*.5,a=e*e,c=e*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*e+n}function sM(e,t){const n=1-e;return n*n*t}function oM(e,t){return 2*(1-e)*e*t}function aM(e,t){return e*e*t}function Ko(e,t,n,i){return sM(e,t)+oM(e,n)+aM(e,i)}function cM(e,t){const n=1-e;return n*n*n*t}function lM(e,t){const n=1-e;return 3*n*n*e*t}function uM(e,t){return 3*(1-e)*e*e*t}function hM(e,t){return e*e*e*t}function Zo(e,t,n,i,r){return cM(e,t)+lM(e,n)+uM(e,i)+hM(e,r)}class hg extends Xi{constructor(t=new vt,n=new vt,i=new vt,r=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=r}getPoint(t,n=new vt){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Zo(t,r.x,s.x,o.x,a.x),Zo(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dM extends Xi{constructor(t=new P,n=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=r}getPoint(t,n=new P){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Zo(t,r.x,s.x,o.x,a.x),Zo(t,r.y,s.y,o.y,a.y),Zo(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dg extends Xi{constructor(t=new vt,n=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new vt){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new vt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fM extends Xi{constructor(t=new P,n=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new P){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new P){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fg extends Xi{constructor(t=new vt,n=new vt,i=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new vt){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ko(t,r.x,s.x,o.x),Ko(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pM extends Xi{constructor(t=new P,n=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new P){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ko(t,r.x,s.x,o.x),Ko(t,r.y,s.y,o.y),Ko(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pg extends Xi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new vt){const i=n,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(np(a,c.x,l.x,u.x,h.x),np(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(new vt().fromArray(r))}return this}}var ip=Object.freeze({__proto__:null,ArcCurve:iM,CatmullRomCurve3:rM,CubicBezierCurve:hg,CubicBezierCurve3:dM,EllipseCurve:vh,LineCurve:dg,LineCurve3:fM,QuadraticBezierCurve:fg,QuadraticBezierCurve3:pM,SplineCurve:pg});class mM extends Xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ip[i](n,t))}return this}getPoint(t,n){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,n)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const r=t.curves[n];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const r=t.curves[n];this.curves.push(new ip[r.type]().fromJSON(r))}return this}}class rp extends mM{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const i=new dg(this.currentPoint.clone(),new vt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,r){const s=new fg(this.currentPoint.clone(),new vt(t,n),new vt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,n,i,r,s,o){const a=new hg(this.currentPoint.clone(),new vt(t,n),new vt(i,r),new vt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),i=new pg(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,n+c,i,r,s,o),this}absarc(t,n,i,r,s,o){return this.absellipse(t,n,i,i,r,s,o),this}ellipse(t,n,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,n+u,i,r,s,o,a,c),this}absellipse(t,n,i,r,s,o,a,c){const l=new vh(t,n,i,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class mg extends rp{constructor(t){super(t),this.uuid=ws(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){const r=t.holes[n];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){const r=t.holes[n];this.holes.push(new rp().fromJSON(r))}return this}}const gM={triangulate:function(e,t,n=2){const i=t&&t.length,r=i?t[0]*n:e.length;let s=gg(e,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,d,m;if(i&&(s=MM(e,t,s,n)),e.length>80*n){a=l=e[0],c=u=e[1];for(let g=n;g<r;g+=n)h=e[g],d=e[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);m=Math.max(l-a,u-c),m=m!==0?32767/m:0}return ra(s,o,n,a,c,m,0),o}};function gg(e,t,n,i,r){let s,o;if(r===DM(e,t,n,i)>0)for(s=t;s<n;s+=i)o=sp(s,e[s],e[s+1],o);else for(s=n-i;s>=t;s-=i)o=sp(s,e[s],e[s+1],o);return o&&qc(o,o.next)&&(oa(o),o=o.next),o}function Ms(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(qc(n,n.next)||$e(n.prev,n,n.next)===0)){if(oa(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function ra(e,t,n,i,r,s,o){if(!e)return;!o&&s&&AM(e,i,r,s);let a=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,s?vM(e,i,r,s):_M(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),oa(e),e=l.next,a=l.next;continue}if(e=l,e===a){o?o===1?(e=xM(Ms(e),t,n),ra(e,t,n,i,r,s,2)):o===2&&yM(e,t,n,i,r,s):ra(Ms(e),t,n,i,r,s,1);break}}}function _M(e){const t=e.prev,n=e,i=e.next;if($e(t,n,i)>=0)return!1;const r=t.x,s=n.x,o=i.x,a=t.y,c=n.y,l=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=m&&Qs(r,a,s,c,o,l,g.x,g.y)&&$e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vM(e,t,n,i){const r=e.prev,s=e,o=e.next;if($e(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,y=a>c?a>l?a:l:c>l?c:l,p=u>h?u>d?u:d:h>d?h:d,f=Fu(m,g,t,n,i),E=Fu(y,p,t,n,i);let x=e.prevZ,S=e.nextZ;for(;x&&x.z>=f&&S&&S.z<=E;){if(x.x>=m&&x.x<=y&&x.y>=g&&x.y<=p&&x!==r&&x!==o&&Qs(a,u,c,h,l,d,x.x,x.y)&&$e(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=m&&S.x<=y&&S.y>=g&&S.y<=p&&S!==r&&S!==o&&Qs(a,u,c,h,l,d,S.x,S.y)&&$e(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=f;){if(x.x>=m&&x.x<=y&&x.y>=g&&x.y<=p&&x!==r&&x!==o&&Qs(a,u,c,h,l,d,x.x,x.y)&&$e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=E;){if(S.x>=m&&S.x<=y&&S.y>=g&&S.y<=p&&S!==r&&S!==o&&Qs(a,u,c,h,l,d,S.x,S.y)&&$e(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function xM(e,t,n){let i=e;do{const r=i.prev,s=i.next.next;!qc(r,s)&&_g(r,i,i.next,s)&&sa(r,s)&&sa(s,r)&&(t.push(r.i/n|0),t.push(i.i/n|0),t.push(s.i/n|0),oa(i),oa(i.next),i=e=s),i=i.next}while(i!==e);return Ms(i)}function yM(e,t,n,i,r,s){let o=e;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&CM(o,a)){let c=vg(o,a);o=Ms(o,o.next),c=Ms(c,c.next),ra(o,t,n,i,r,s,0),ra(c,t,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==e)}function MM(e,t,n,i){const r=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*i,c=s<o-1?t[s+1]*i:e.length,l=gg(e,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(RM(l));for(r.sort(SM),s=0;s<r.length;s++)n=EM(r[s],n);return n}function SM(e,t){return e.x-t.x}function EM(e,t){const n=bM(e,t);if(!n)return t;const i=vg(n,e);return Ms(i,i.next),Ms(n,n.next)}function bM(e,t){let n=t,i=-1/0,r;const s=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==t);if(!r)return null;const a=r,c=r.x,l=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=c&&s!==n.x&&Qs(o<l?s:i,o,c,l,o<l?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),sa(n,e)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&TM(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function TM(e,t){return $e(e.prev,e,t.prev)<0&&$e(t.next,e,e.next)<0}function AM(e,t,n,i){let r=e;do r.z===0&&(r.z=Fu(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,wM(r)}function wM(e){let t,n,i,r,s,o,a,c,l=1;do{for(n=e,e=null,s=null,o=0;n;){for(o++,i=n,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return e}function Fu(e,t,n,i,r){return e=(e-n)*r|0,t=(t-i)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function RM(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Qs(e,t,n,i,r,s,o,a){return(r-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(i-a)>=(n-o)*(t-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function CM(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!PM(e,t)&&(sa(e,t)&&sa(t,e)&&LM(e,t)&&($e(e.prev,e,t.prev)||$e(e,t.prev,t))||qc(e,t)&&$e(e.prev,e,e.next)>0&&$e(t.prev,t,t.next)>0)}function $e(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function qc(e,t){return e.x===t.x&&e.y===t.y}function _g(e,t,n,i){const r=tc($e(e,t,n)),s=tc($e(e,t,i)),o=tc($e(n,i,e)),a=tc($e(n,i,t));return!!(r!==s&&o!==a||r===0&&Qa(e,n,t)||s===0&&Qa(e,i,t)||o===0&&Qa(n,e,i)||a===0&&Qa(n,t,i))}function Qa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function tc(e){return e>0?1:e<0?-1:0}function PM(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&_g(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function sa(e,t){return $e(e.prev,e,e.next)<0?$e(e,t,e.next)>=0&&$e(e,e.prev,t)>=0:$e(e,t,e.prev)<0||$e(e,e.next,t)<0}function LM(e,t){let n=e,i=!1;const r=(e.x+t.x)/2,s=(e.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function vg(e,t){const n=new Ou(e.i,e.x,e.y),i=new Ou(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function sp(e,t,n,i){const r=new Ou(e,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function oa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ou(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function DM(e,t,n,i){let r=0;for(let s=t,o=n-i;s<n;s+=i)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}class $o{static area(t){const n=t.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return $o.area(t)<0}static triangulateShape(t,n){const i=[],r=[],s=[];op(t),ap(i,t);let o=t.length;n.forEach(op);for(let c=0;c<n.length;c++)r.push(o),o+=n[c].length,ap(i,n[c]);const a=gM.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function op(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function ap(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}class yh extends In{constructor(t=new mg([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Sn(r,3)),this.setAttribute("normal",new Sn(s,3)),this.setAttribute("uv",new Sn(o,2));function l(u){const h=r.length/3,d=u.extractPoints(n);let m=d.shape;const g=d.holes;$o.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=g.length;p<f;p++){const E=g[p];$o.isClockWise(E)===!0&&(g[p]=E.reverse())}const y=$o.triangulateShape(m,g);for(let p=0,f=g.length;p<f;p++){const E=g[p];m=m.concat(E)}for(let p=0,f=m.length;p<f;p++){const E=m[p];r.push(E.x,E.y,0),s.push(0,0,1),o.push(E.x,E.y)}for(let p=0,f=y.length;p<f;p++){const E=y[p],x=E[0]+h,S=E[1]+h,D=E[2]+h;i.push(x,S,D),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return IM(n,t)}static fromJSON(t,n){const i=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=n[t.shapes[r]];i.push(o)}return new yh(i,t.curveSegments)}}function IM(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){const r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}class Mh extends In{constructor(t=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new P,d=new P,m=[],g=[],y=[],p=[];for(let f=0;f<=i;f++){const E=[],x=f/i;let S=0;f===0&&o===0?S=.5/n:f===i&&c===Math.PI&&(S=-.5/n);for(let D=0;D<=n;D++){const R=D/n;h.x=-t*Math.cos(r+R*s)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(r+R*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),p.push(R+S,1-x),E.push(l++)}u.push(E)}for(let f=0;f<i;f++)for(let E=0;E<n;E++){const x=u[f][E+1],S=u[f][E],D=u[f+1][E],R=u[f+1][E+1];(f!==0||o>0)&&m.push(x,S,R),(f!==i-1||c<Math.PI)&&m.push(S,D,R)}this.setIndex(m),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(y,3)),this.setAttribute("uv",new Sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const cp={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class UM{constructor(t,n,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const NM=new UM;class Sh{constructor(t){this.manager=t!==void 0?t:NM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(r,s){i.load(t,r,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Sh.DEFAULT_MATERIAL_NAME="__DEFAULT";class FM extends Sh{constructor(t){super(t)}load(t,n,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=cp.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){n&&n(o),s.manager.itemEnd(t)},0),o;const a=ia("img");function c(){u(),cp.add(t,this),n&&n(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class OM extends Sh{constructor(t){super(t)}load(t,n,i,r){const s=new Tn,o=new FM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class xg extends An{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const ru=new qe,lp=new P,up=new P;class BM{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ph,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;lp.setFromMatrixPosition(t.matrixWorld),n.position.copy(lp),up.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(up),n.updateMatrixWorld(),ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ru)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kM extends BM{constructor(){super(new mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hp extends xg{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new kM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zM extends xg{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class yg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=dp();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function dp(){return(typeof performance>"u"?Date:performance).now()}const fp=new qe;class Mg{constructor(t,n,i=0,r=1/0){this.ray=new Xc(t,n),this.near=i,this.far=r,this.camera=null,this.layers=new fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return fp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fp),this}intersectObject(t,n=!0,i=[]){return Bu(t,this,i,n),i.sort(pp),i}intersectObjects(t,n=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Bu(t[r],this,i,n);return i.sort(pp),i}}function pp(e,t){return e.distance-t.distance}function Bu(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){const r=e.children;for(let s=0,o=r.length;s<o;s++)Bu(r[s],t,n,!0)}}class ku{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(yn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);var Ss=typeof self<"u"?self:{};function Cc(e,t){t:{for(var n=["CLOSURE_FLAGS"],i=Ss,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break t}n=i}return(e=n&&n[e])!=null?e:t}function ns(){throw Error("Invalid UTF8")}function mp(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let ec,su;const GM=typeof TextDecoder<"u";let HM;const VM=typeof TextEncoder<"u";function Sg(e){if(VM)e=(HM||(HM=new TextEncoder)).encode(e);else{let n=0;const i=new Uint8Array(3*e.length);for(let r=0;r<e.length;r++){var t=e.charCodeAt(r);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&r<e.length){const s=e.charCodeAt(++r);if(s>=56320&&s<=57343){t=1024*(t-55296)+s-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}r--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}var aa,Eg=Cc(610401301,!1),WM=Cc(653718497,Cc(1,!0)),bg=Cc(660014094,!1);const gp=Ss.navigator;function zu(e){return!!Eg&&!!aa&&aa.brands.some(({brand:t})=>t&&t.indexOf(e)!=-1)}function di(e){var t;return(t=Ss.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(e)!=-1}function Ir(){return!!Eg&&!!aa&&aa.brands.length>0}function ou(){return Ir()?zu("Chromium"):(di("Chrome")||di("CriOS"))&&!(!Ir()&&di("Edge"))||di("Silk")}function Eh(e){return Eh[" "](e),e}aa=gp&&gp.userAgentData||null,Eh[" "]=function(){};var XM=!Ir()&&(di("Trident")||di("MSIE"));!di("Android")||ou(),ou(),di("Safari")&&(ou()||!Ir()&&di("Coast")||!Ir()&&di("Opera")||!Ir()&&di("Edge")||(Ir()?zu("Microsoft Edge"):di("Edg/"))||Ir()&&zu("Opera"));var Tg={},Vo=null;function YM(e){var t=e.length,n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);var i=new Uint8Array(n),r=0;return function(s,o){function a(m){for(;c<s.length;){var g=s.charAt(c++),y=Vo[g];if(y!=null)return y;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return m}Ag();for(var c=0;;){var l=a(-1),u=a(0),h=a(64),d=a(64);if(d===64&&l===-1)break;o(l<<2|u>>4),h!=64&&(o(u<<4&240|h>>2),d!=64&&o(h<<6&192|d))}}(e,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function Ag(){if(!Vo){Vo={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],n=0;n<5;n++){var i=e.concat(t[n].split(""));Tg[n]=i;for(var r=0;r<i.length;r++){var s=i[r];Vo[s]===void 0&&(Vo[s]=r)}}}}var wg=typeof Uint8Array<"u",Rg=!XM&&typeof btoa=="function";function _p(e){if(!Rg){var t;t===void 0&&(t=0),Ag(),t=Tg[t];var n=Array(Math.floor(e.length/3)),i=t[64]||"";let c=0,l=0;for(;c<e.length-2;c+=3){var r=e[c],s=e[c+1],o=e[c+2],a=t[r>>2];r=t[(3&r)<<4|s>>4],s=t[(15&s)<<2|o>>6],o=t[63&o],n[l++]=a+r+s+o}switch(a=0,o=i,e.length-c){case 2:o=t[(15&(a=e[c+1]))<<2]||i;case 1:e=e[c],n[l]=t[e>>2]+t[(3&e)<<4|a>>4]+o+i}return n.join("")}for(t="",n=0,i=e.length-10240;n<i;)t+=String.fromCharCode.apply(null,e.subarray(n,n+=10240));return t+=String.fromCharCode.apply(null,n?e.subarray(n):e),btoa(t)}const vp=/[-_.]/g,qM={"-":"+",_:"/",".":"="};function jM(e){return qM[e]||""}function Cg(e){if(!Rg)return YM(e);vp.test(e)&&(e=e.replace(vp,jM)),e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function ma(e){return wg&&e!=null&&e instanceof Uint8Array}var lo={};let KM;function Pg(e){if(e!==lo)throw Error("illegal external caller")}function Es(){return KM||(KM=new dr(null,lo))}function bh(e){Pg(lo);var t=e.ba;return(t=t==null||ma(t)?t:typeof t=="string"?Cg(t):null)==null?t:e.ba=t}var dr=class{constructor(e,t){if(Pg(t),this.ba=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}ua(){return new Uint8Array(bh(this)||0)}};function Lg(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}let ZM;function bs(){const e=Error();Lg(e,"incident"),function(t){Ss.setTimeout(()=>{throw t},0)}(e)}function Gu(e){return Lg(e=Error(e),"warning"),e}function Th(){return typeof BigInt=="function"}function ii(e){return Array.prototype.slice.call(e)}var yo=typeof Symbol=="function"&&typeof Symbol()=="symbol";function jc(e){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():e}var ga=jc(),xp=jc("0di"),au=jc("2ex"),zo=jc("1oa"),Kc=yo?(e,t)=>{e[ga]|=t}:(e,t)=>{e.G!==void 0?e.G|=t:Object.defineProperties(e,{G:{value:t,configurable:!0,writable:!0,enumerable:!1}})},Pc=yo?(e,t)=>{e[ga]&=~t}:(e,t)=>{e.G!==void 0&&(e.G&=~t)},sn=yo?e=>0|e[ga]:e=>0|e.G,Re=yo?e=>e[ga]:e=>e.G,Je=yo?(e,t)=>{e[ga]=t}:(e,t)=>{e.G!==void 0?e.G=t:Object.defineProperties(e,{G:{value:t,configurable:!0,writable:!0,enumerable:!1}})};function Mo(e){return Kc(e,34),e}function $M(e,t){Je(t,-14591&(0|e))}function Hu(e,t){Je(t,-14557&(34|e))}var Ah,_a={},Dg={};function yp(e){return!(!e||typeof e!="object"||e.La!==Dg)}function Zc(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object}function wh(e,t,n){if(e!=null){if(typeof e=="string")e=e?new dr(e,lo):Es();else if(e.constructor!==dr)if(ma(e))e=e.length?new dr(n?e:new Uint8Array(e),lo):Es();else{if(!t)throw Error();e=void 0}}return e}function Lc(e){return!(!Array.isArray(e)||e.length)&&!!(1&sn(e))}const Mp=[];function gr(e){if(2&e)throw Error()}Je(Mp,55),Ah=Object.freeze(Mp);class Dc{constructor(t,n,i){this.l=0,this.g=t,this.h=n,this.m=i}next(){if(this.l<this.g.length){const t=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,t):t}}return{done:!0,value:void 0}}[Symbol.iterator](){return new Dc(this.g,this.h,this.m)}}let kr;function Ig(e,t){(t=kr?t[kr]:void 0)&&(e[kr]=ii(t))}var JM=Object.freeze({}),QM=Object.freeze({});function $c(e){return e.Sa=!0,e}var tS=$c(e=>typeof e=="number"),Sp=$c(e=>typeof e=="string"),eS=$c(e=>typeof e=="boolean"),Jc=typeof Ss.BigInt=="function"&&typeof Ss.BigInt(0)=="bigint",Vu=$c(e=>Jc?e>=iS&&e<=sS:e[0]==="-"?Ep(e,nS):Ep(e,rS));const nS=Number.MIN_SAFE_INTEGER.toString(),iS=Jc?BigInt(Number.MIN_SAFE_INTEGER):void 0,rS=Number.MAX_SAFE_INTEGER.toString(),sS=Jc?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Ep(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){const i=e[n],r=t[n];if(i>r)return!1;if(i<r)return!0}}const oS=typeof Uint8Array.prototype.slice=="function";let Ug,Fe=0,tn=0;function bp(e){const t=e>>>0;Fe=t,tn=(e-t)/4294967296>>>0}function uo(e){if(e<0){bp(-e);const[t,n]=Lh(Fe,tn);Fe=t>>>0,tn=n>>>0}else bp(e)}function Rh(e){const t=Ug||(Ug=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),tn=0,Fe=t.getUint32(0,!0)}function Ch(e,t){return 4294967296*t+(e>>>0)}function Ph(e,t){const n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),e=Ch(e,t),n?-e:e}function Ic(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else Th()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+Tp(n)+Tp(e));return n}function Tp(e){return e=String(e),"0000000".slice(e.length)+e}function Qc(e){if(e.length<16)uo(Number(e));else if(Th())e=BigInt(e),Fe=Number(e&BigInt(4294967295))>>>0,tn=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");tn=Fe=0;const n=e.length;for(let i=t,r=(n-t)%6+t;r<=n;i=r,r+=6){const s=Number(e.slice(i,r));tn*=1e6,Fe=1e6*Fe+s,Fe>=4294967296&&(tn+=Math.trunc(Fe/4294967296),tn>>>=0,Fe>>>=0)}if(t){const[i,r]=Lh(Fe,tn);Fe=i,tn=r}}}function Lh(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function Yr(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function Ng(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const aS=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function tl(e){const t=typeof e;switch(t){case"bigint":return!0;case"number":return Number.isFinite(e)}return t==="string"&&aS.test(e)}function So(e){if(e==null)return e;if(typeof e=="string"){if(!e)return;e=+e}return typeof e=="number"&&Number.isFinite(e)?0|e:void 0}function cS(e){if(e==null)return e;if(typeof e=="string"){if(!e)return;e=+e}return typeof e=="number"&&Number.isFinite(e)?e>>>0:void 0}function Ap(e){return e[0]!=="-"&&(e.length<20||e.length===20&&Number(e.substring(0,6))<184467)}function Dh(e){return e=Math.trunc(e),Number.isSafeInteger(e)||(uo(e),e=Ph(Fe,tn)),e}function Ih(e){var t=Math.trunc(Number(e));if(Number.isSafeInteger(t))return String(t);if((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),!(e[0]==="-"?e.length<20||e.length===20&&Number(e.substring(0,7))>-922337:e.length<19||e.length===19&&Number(e.substring(0,6))<922337))if(Qc(e),e=Fe,2147483648&(t=tn))if(Th())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,i]=Lh(e,t);e="-"+Ic(n,i)}else e=Ic(e,t);return e}function Uc(e){return e==null?e:typeof e=="bigint"?(Vu(e)?e=Number(e):(e=BigInt.asIntN(64,e),e=Vu(e)?Number(e):String(e)),e):tl(e)?typeof e=="number"?Dh(e):Ih(e):void 0}function lS(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(BigInt.asUintN(64,e));if(tl(e)){if(t==="string")return t=Math.trunc(Number(e)),Number.isSafeInteger(t)&&t>=0?e=String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Ap(e)||(Qc(e),e=Ic(Fe,tn))),e;if(t==="number")return(e=Math.trunc(e))>=0&&Number.isSafeInteger(e)?e:function(n){if(n<0){uo(n);const i=Ic(Fe,tn);return n=Number(i),Number.isSafeInteger(n)?n:i}return Ap(String(n))?n:(uo(n),Ch(Fe,tn))}(e)}}function Fg(e){if(typeof e!="string")throw Error();return e}function Eo(e){if(e!=null&&typeof e!="string")throw Error();return e}function zr(e){return e==null||typeof e=="string"?e:void 0}function Uh(e,t,n,i){if(e!=null&&typeof e=="object"&&e.Y===_a)return e;if(!Array.isArray(e))return n?2&i?(e=t[xp])?t=e:(Mo((e=new t).u),t=t[xp]=e):t=new t:t=void 0,t;let r=n=sn(e);return r===0&&(r|=32&i),r|=2&i,r!==n&&Je(e,r),new t(e)}function uS(e,t,n){if(t)t:{if(!tl(t=e))throw Gu("int64");switch(typeof t){case"string":t=Ih(t);break t;case"bigint":if(e=t=BigInt.asIntN(64,t),Sp(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(tS(e)&&!Number.isSafeInteger(e))throw Error(String(e));t=Jc?BigInt(t):eS(t)?t?"1":"0":Sp(t)?t.trim()||"0":String(t);break t;default:t=Dh(t)}}else t=Uc(e);return typeof(n=(e=t)==null?n?0:void 0:e)=="string"&&(t=+n,Number.isSafeInteger(t))?t:n}function Og(e){if(Go===void 0&&(Go=typeof Proxy=="function"?kg(Proxy):null),!Go||!Bg())return e;let t=Dn==null?void 0:Dn.get(e);return t||(Math.random()>.01?e:(function(n){if(cu===void 0){const i=new Go([],{});cu=Array.prototype.concat.call([],i).length===1}cu&&typeof Symbol=="function"&&Symbol.isConcatSpreadable&&(n[Symbol.isConcatSpreadable]=!0)}(e),t=new Go(e,{set:(n,i,r)=>(bs(),n[i]=r,!0)}),function(n,i){(Dn||(Dn=new _s)).set(n,i),(fc||(fc=new _s)).set(i,n)}(e,t),t))}let Dn,fc,Go,_s,cu,ni,Nc,hS,dS;function Bg(){return _s===void 0&&(_s=typeof WeakMap=="function"?kg(WeakMap):null),_s}function kg(e){try{return e.toString().indexOf("[native code]")!==-1?e:null}catch{return null}}function Nh(e,t,n){var o;if(WM&&Bg()){if((o=ni==null?void 0:ni.get(t))!=null&&o.get(e)){if(n)return}else if(Math.random()>.01)return;var i=e.length;n={length:i};for(var r=0;r<Math.min(i,10);r++){if(i<=10)var s=r;else{s=i/10;const a=Math.floor(r*s);s=a+Math.floor(Math.random()*(Math.floor((r+1)*s)-a))}n[s]=e[s]}zg(e,n)?((r=(i=ni||(ni=new _s)).get(t))||(r=new _s,i.set(t,r)),r.set(e,n)):(bs(),ca(e,t))}}function Fc(e,t){var i;const n=(i=ni==null?void 0:ni.get(t))==null?void 0:i.get(e);n&&!zg(e,n)&&(bs(),ca(e,t))}function zg(e,t){if(e.length!==t.length)return!1;for(const r in t){var n,i=Number(r);if((n=Number.isInteger(i))&&(n=e[i],i=t[i],n=!(Number.isNaN(n)?Number.isNaN(i):n===i)),n)return!1}return!0}function el(e){if(e&&(ni!=null&&ni.has(e))){var t=e.u;if(t)for(let n=0;n<t.length;n++){const i=t[n];if(n===t.length-1&&Zc(i))for(const r in i){const s=i[r];Array.isArray(s)&&Fc(s,e)}else Array.isArray(i)&&Fc(i,e)}}}function ca(e,t){var n;(n=ni==null?void 0:ni.get(t))==null||n.delete(e)}function vs(e,t){return e=Gg(e,t[0],t[1]),Kc(e,16384),e}function Gg(e,t,n){if(e==null&&(e=Nc),Nc=void 0,e==null){var i=96;n?(e=[n],i|=512):e=[],t&&(i=-33521665&i|(1023&t)<<15)}else{if(!Array.isArray(e))throw Error("narr");if(2048&(i=sn(e)))throw Error("farr");if(64&i)return e;if(i|=64,n&&(i|=512,n!==e[0]))throw Error("mid");t:{const r=(n=e).length;if(r){const s=r-1;if(Zc(n[s])){if((t=s-(+!!(512&(i|=256))-1))>=1024)throw Error("pvtlmt");i=-33521665&i|(1023&t)<<15;break t}}if(t){if((t=Math.max(t,r-(+!!(512&i)-1)))>1024)throw Error("spvt");i=-33521665&i|(1023&t)<<15}}}return Je(e,i),e}const fS={};let pS=function(){try{return Eh(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class lu{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const mS=pS?(Object.setPrototypeOf(lu.prototype,Map.prototype),Object.defineProperties(lu.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),lu):class extends Map{constructor(){super()}};function wp(e){return e}function uu(e){if(2&e.M)throw Error("Cannot mutate an immutable Map")}var pi=class extends mS{constructor(e,t,n=wp,i=wp){super();let r=sn(e);r|=64,Je(e,r),this.M=r,this.U=t,this.T=n,this.aa=this.U?gS:i;for(let s=0;s<e.length;s++){const o=e[s],a=n(o[0],!1,!0);let c=o[1];t?c===void 0&&(c=null):c=i(o[1],!1,!0,void 0,void 0,r),super.set(a,c)}}pa(e=Rp){if(this.size!==0)return this.Z(e)}Z(e=Rp){const t=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=e(i[0]),i[1]=e(i[1]),t.push(i);return t}clear(){uu(this),super.clear()}delete(e){return uu(this),super.delete(this.T(e,!0,!1))}entries(){var e=this.oa();return new Dc(e,_S,this)}keys(){return this.Ka()}values(){var e=this.oa();return new Dc(e,pi.prototype.get,this)}forEach(e,t){super.forEach((n,i)=>{e.call(t,this.get(i),i,this)})}set(e,t){return uu(this),(e=this.T(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.aa(t,!0,!0,this.U,!1,this.M))}Qa(e){const t=this.T(e[0],!1,!0);e=e[1],e=this.U?e===void 0?null:e:this.aa(e,!1,!0,void 0,!1,this.M),super.set(t,e)}has(e){return super.has(this.T(e,!1,!1))}get(e){e=this.T(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.U;return n?((n=this.aa(t,!1,!0,n,this.va,this.M))!==t&&super.set(e,n),n):t}}oa(){return Array.from(super.keys())}Ka(){return super.keys()}[Symbol.iterator](){return this.entries()}};function gS(e,t,n,i,r,s){return e=Uh(e,i,n,s),r&&(e=il(e)),e}function Rp(e){return e}function _S(e){return[e,this.get(e)]}let vS;function Cp(){return vS||(vS=new pi(Mo([]),void 0,void 0,void 0,fS))}function Fh(e,t,n,i,r){if(e!=null){if(Array.isArray(e))e=Lc(e)?void 0:r&&2&sn(e)?e:nl(e,t,n,i!==void 0,r);else if(Zc(e)){const s={};for(let o in e)s[o]=Fh(e[o],t,n,i,r);e=s}else e=t(e,i);return e}}function nl(e,t,n,i,r){const s=i||n?sn(e):0;i=i?!!(32&s):void 0;const o=ii(e);for(let a=0;a<o.length;a++)o[a]=Fh(o[a],t,n,i,r);return n&&(Ig(o,e),n(s,o)),o}function xS(e){return Fh(e,Oh,void 0,void 0,!1)}function Oh(e){return e.Y===_a?e.toJSON():e instanceof pi?e.pa(xS):function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"bigint":return Vu(t)?Number(t):String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(Lc(t))return}else{if(ma(t))return _p(t);if(t instanceof dr){const n=t.ba;return n==null?"":typeof n=="string"?n:t.ba=_p(n)}if(t instanceof pi)return t.pa()}}return t}(e)}function Wu(e,t,n=Hu){if(e!=null){if(wg&&e instanceof Uint8Array)return t?e:new Uint8Array(e);if(Array.isArray(e)){var i=sn(e);return 2&i?e:(t&&(t=i===0||!!(32&i)&&!(64&i||!(16&i))),t?(Je(e,-12293&(34|i)),e):nl(e,Wu,4&i?Hu:n,!0,!0))}return e.Y===_a?(n=e.u,e=2&(i=Re(n))?e:Bh(e,n,i,!0)):e instanceof pi&&!(2&e.M)&&(n=Mo(e.Z(Wu)),e=new pi(n,e.U,e.T,e.aa)),e}}function Bh(e,t,n,i){return el(e),e=e.constructor,Nc=t=Hg(t,n,i),t=new e(t),Nc=void 0,t}function Hg(e,t,n){const i=n||2&t?Hu:$M,r=!!(32&t);return e=function(s,o,a){const c=ii(s);var l=c.length;const u=256&o?c[l-1]:void 0;for(l+=u?-1:0,o=512&o?1:0;o<l;o++)c[o]=a(c[o]);if(u){o=c[o]={};for(const h in u)o[h]=a(u[h])}return Ig(c,s),c}(e,t,s=>Wu(s,r,i)),Kc(e,32|(n?2:0)),e}function il(e){const t=e.u,n=Re(t);return 2&n?Bh(e,t,n,!1):e}function Vg(e,t,n,i){return!(4&t)||n!=null}function Hr(e,t){return Yi(e=e.u,Re(e),t)}function Pp(e,t,n,i){if(!((t=i+(+!!(512&t)-1))<0||t>=e.length||t>=n))return e[t]}function Yi(e,t,n,i){if(n===-1)return null;const r=t>>15&1023||536870912;if(!(n>=r)){var s=e.length;return i&&256&t&&(i=e[s-1][n])!=null?(Pp(e,t,r,n)&&au!=null&&((t=(e=ZM??(ZM={}))[au]||0)>=4||(e[au]=t+1,bs())),i):Pp(e,t,r,n)}return 256&t?e[e.length-1][n]:void 0}function Be(e,t,n){const i=e.u;let r=Re(i);return gr(r),je(i,r,t,n),e}function je(e,t,n,i){const r=t>>15&1023||536870912;if(n>=r){let s,o=t;if(256&t)s=e[e.length-1];else{if(i==null)return o;s=e[r+(+!!(512&t)-1)]={},o|=256}return s[n]=i,n<r&&(e[n+(+!!(512&t)-1)]=void 0),o!==t&&Je(e,o),o}return e[n+(+!!(512&t)-1)]=i,256&t&&n in(e=e[e.length-1])&&delete e[n],t}function bo(e,t,n,i,r){var s=2&t;r=Yi(e,t,n,r),Array.isArray(r)||(r=Ah);const o=!(2&i);i=!(1&i);const a=!!(32&t);let c=sn(r);return c!==0||!a||s||o?1&c||(c|=1,Je(r,c)):(c|=33,Je(r,c)),s?(e=!1,2&c||(Mo(r),e=!!(4&c)),(i||e)&&Object.freeze(r)):(s=!!(2&c)||!!(2048&c),i&&s?(r=ii(r),s=1,a&&!o&&(s|=32),Je(r,s),je(e,t,n,r)):o&&32&c&&!s&&Pc(r,32)),r}function pc(e,t){e=e.u;let n=Re(e);const i=Yi(e,n,t),r=Yr(i);return r!=null&&r!==i&&je(e,n,t,r),r}function Wg(e){e=e.u;let t=Re(e);const n=Yi(e,t,1),i=wh(n,!0,!!(34&t));return i!=null&&i!==n&&je(e,t,1,i),i}function ls(){return JM===void 0?2:5}function us(e,t,n,i,r,s){const o=e.u;let a=Re(o);i=2&a?1:i,s=!!s,r=Xg(o,a,t,r);var c=sn(r),l=r;if(Fc(l,e),i!==2&&i!==1||ca(l,e),Vg(e,c,void 0)){4&c&&(r=ii(r),c=Ts(c,a),a=je(o,a,t,r));let h=l=0;for(;l<r.length;l++){const d=n(r[l]);d!=null&&(r[h++]=d)}h<l&&(r.length=h),c=-4097&(20|(c=Yg(c,a))),Je(r,c&=-8193),2&c&&Object.freeze(r)}let u;return i===1||i===4&&32&c?ar(c)||(e=c,(c|=2)!==e&&Je(r,c),Object.freeze(r)):(n=i===5&&(!!(32&c)||ar(c)||!!(Dn!=null&&Dn.get(r))),(i===2||n)&&ar(c)&&(r=ii(r),c=ho(c=Ts(c,a),a,s),Je(r,c),a=je(o,a,t,r)),ar(c)||(t=c,(c=ho(c,a,s))!==t&&Je(r,c)),n?(u=Og(r),Nh(r,e,!0)):i!==2||s||(Dn==null||Dn.delete(r))),u||r}function Xg(e,t,n,i){return e=Yi(e,t,n,i),Array.isArray(e)?e:Ah}function Yg(e,t){return e===0&&(e=Ts(e,t)),1|e}function ar(e){return!!(2&e)&&!!(4&e)||!!(2048&e)}function qg(e){e=ii(e);for(let t=0;t<e.length;t++){const n=e[t]=ii(e[t]);Array.isArray(n[1])&&(n[1]=Mo(n[1]))}return e}function Xu(e,t,n,i){e=e.u;let r=Re(e);gr(r),je(e,r,t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function hu(e,t){var n=w0;return zh(kh(e=e.u),e,Re(e),n)===t?t:-1}function kh(e){if(yo)return e[zo]??(e[zo]=new Map);if(zo in e)return e[zo];const t=new Map;return Object.defineProperty(e,zo,{value:t}),t}function jg(e,t,n,i){const r=kh(e),s=zh(r,e,t,n);return s!==i&&(s&&(t=je(e,t,s)),r.set(n,i)),t}function zh(e,t,n,i){let r=e.get(i);if(r!=null)return r;r=0;for(let s=0;s<i.length;s++){const o=i[s];Yi(t,n,o)!=null&&(r!==0&&(n=je(t,n,r)),r=o)}return e.set(i,r),r}function Gh(e,t,n,i){let r,s=Re(e);if((i=Yi(e,s,n,i))!=null&&i.Y===_a)return(t=il(i))!==i&&je(e,s,n,t),t.u;if(Array.isArray(i)){const o=sn(i);r=2&o?Hg(i,o,!1):i,r=vs(r,t)}else r=vs(void 0,t);return r!==i&&je(e,s,n,r),r}function Kg(e,t,n,i){e=e.u;let r=Re(e);return(t=Uh(i=Yi(e,r,n,i),t,!1,r))!==i&&t!=null&&je(e,r,n,t),t}function Se(e,t,n,i=!1){if((t=Kg(e,t,n,i))==null)return t;if(e=e.u,!(2&(i=Re(e)))){const r=il(t);r!==t&&je(e,i,n,t=r)}return t}function Zg(e,t,n,i,r,s,o){const a=e.u;var c=!!(2&t);r=c?1:r,s=!!s,o&&(o=!c),c=Xg(a,t,i);var l=sn(c),u=c;if(Fc(u,e),r!==2&&r!==1||ca(u,e),!(u=!!(4&l))){var h=c,d=t;const g=!!(2&(l=Yg(l,t)));g&&(d|=2);let y=!g,p=!0,f=0,E=0;for(;f<h.length;f++){const x=Uh(h[f],n,!1,d);if(x instanceof n){if(!g){const S=!!(2&sn(x.u));y&&(y=!S),p&&(p=S)}h[E++]=x}}E<f&&(h.length=E),l|=4,l=p?16|l:-17&l,Je(h,l=y?8|l:-9&l),g&&Object.freeze(h)}if(o&&!(8&l||!c.length&&(r===1||r===4&&32&l))){for(ar(l)?(c=ii(c),l=Ts(l,t),t=je(a,t,i,c)):ca(c,e),n=c,o=l,h=0;h<n.length;h++)(l=n[h])!==(d=il(l))&&(n[h]=d);o|=8,o=n.length?-17&o:16|o,Je(n,o),l=o}let m;return r===1||r===4&&32&l?ar(l)||(e=l,(l|=!c.length||16&l&&(!u||32&l)?2:2048)!==e&&Je(c,l),Object.freeze(c)):(u=r===5&&(!!(32&l)||ar(l)||!!(Dn!=null&&Dn.get(c))),(r===2||u)&&ar(l)&&(c=ii(c),l=ho(l=Ts(l,t),t,s),Je(c,l),t=je(a,t,i,c)),ar(l)||(i=l,(l=ho(l,t,s))!==i&&Je(c,l)),u?(m=Og(c),Nh(c,e,!0)):r!==2||s||(Dn==null||Dn.delete(c))),m||c}function mr(e,t,n){const i=Re(e.u);return Zg(e,i,t,n,ls(),!1,!(2&i))}function qt(e,t,n,i){return i==null&&(i=void 0),Be(e,n,i)}function Jo(e,t,n,i){i==null&&(i=void 0);t:{e=e.u;let r=Re(e);if(gr(r),i==null){const s=kh(e);if(zh(s,e,r,n)!==t)break t;s.set(n,0)}else r=jg(e,r,n,t);je(e,r,t,i)}}function Ts(e,t){return-2049&(e=32|(2&t?2|e:-3&e))}function ho(e,t,n){return 32&t&&n||(e&=-33),e}function Oc(e,t,n,i){const r=Re(e.u);gr(r),e=Zg(e,r,n,t,2,!0),n=i??new n,e.push(n),2&sn(n.u)?Pc(e,8):Pc(e,16)}function wi(e,t){return e??t}function fi(e,t){return So(Hr(e,t))}function rn(e,t){return wi(pc(e,t),0)}function Vi(e,t){return wi(zr(Hr(e,t)),"")}function la(e,t,n){if(n!=null&&typeof n!="boolean")throw e=typeof n,Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`);Be(e,t,n)}function Wi(e,t,n){if(n!=null){if(typeof n!="number"||!Number.isFinite(n))throw Gu("int32");n|=0}Be(e,t,n)}function Gt(e,t,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);Be(e,t,n)}function Bc(e,t,n){{const a=e.u;let c=Re(a);if(gr(c),n==null)je(a,c,t);else{n=(fc==null?void 0:fc.get(n))||n;var i,r=sn(n),s=r,o=!!(2&r)||Object.isFrozen(n);if((i=!o)&&(i=QM===void 0||!1),Vg(e,r)){r=21,o&&(n=ii(n),s=0,r=ho(r=Ts(r,c),c,!0));for(let l=0;l<n.length;l++)n[l]=Fg(n[l])}i?(n=ii(n),s=0,r=ho(r=Ts(r,c),c,!0)):o||Nh(n,e),r!==s&&Je(n,r),je(a,c,t,n)}}}function rl(e,t,n){gr(Re(e.u)),us(e,t,zr,2,void 0,!0).push(Fg(n))}function $g(e,t){return Error(`Invalid wire type: ${e} (at position ${t})`)}function Hh(){return Error("Failed to read varint, encoding is invalid.")}function Jg(e,t){return Error(`Tried to read past the end of the data ${t} > ${e}`)}function Vh(e){if(typeof e=="string")return{buffer:Cg(e),O:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),O:!1};if(e.constructor===Uint8Array)return{buffer:e,O:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),O:!1};if(e.constructor===dr)return{buffer:bh(e)||new Uint8Array(0),O:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Wh(e,t){let n,i=0,r=0,s=0;const o=e.h;let a=e.g;do n=o[a++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);for(s>32&&(r|=(127&n)>>4),s=3;s<32&&128&n;s+=7)n=o[a++],r|=(127&n)<<s;if(xs(e,a),n<128)return t(i>>>0,r>>>0);throw Hh()}function Xh(e){let t=0,n=e.g;const i=n+10,r=e.h;for(;n<i;){const s=r[n++];if(t|=s,(128&s)==0)return xs(e,n),!!(127&t)}throw Hh()}function Vr(e){const t=e.h;let n=e.g,i=t[n++],r=127&i;if(128&i&&(i=t[n++],r|=(127&i)<<7,128&i&&(i=t[n++],r|=(127&i)<<14,128&i&&(i=t[n++],r|=(127&i)<<21,128&i&&(i=t[n++],r|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Hh();return xs(e,n),r}function Wr(e){return Vr(e)>>>0}function Yu(e){var t=e.h;const n=e.g,i=t[n],r=t[n+1],s=t[n+2];return t=t[n+3],xs(e,e.g+4),(i<<0|r<<8|s<<16|t<<24)>>>0}function qu(e){var t=Yu(e);e=2*(t>>31)+1;const n=t>>>23&255;return t&=8388607,n==255?t?NaN:e*(1/0):n==0?1401298464324817e-60*e*t:e*Math.pow(2,n-150)*(t+8388608)}function yS(e){return Vr(e)}function du(e,t,{ea:n=!1}={}){e.ea=n,t&&(t=Vh(t),e.h=t.buffer,e.m=t.O,e.j=0,e.l=e.h.length,e.g=e.j)}function xs(e,t){if(e.g=t,t>e.l)throw Jg(e.l,t)}function Qg(e,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);const n=e.g,i=n+t;if(i>e.l)throw Jg(t,e.l-n);return e.g=i,n}function t0(e,t){if(t==0)return Es();var n=Qg(e,t);return e.ea&&e.m?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):oS?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?Es():new dr(n,lo)}pi.prototype.toJSON=void 0,pi.prototype.La=Dg;var Lp=[];function e0(e){var t=e.g;if(t.g==t.l)return!1;e.l=e.g.g;var n=Wr(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5))throw $g(n,e.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${e.l})`);return e.m=t,e.h=n,!0}function mc(e){switch(e.h){case 0:e.h!=0?mc(e):Xh(e.g);break;case 1:xs(e=e.g,e.g+8);break;case 2:if(e.h!=2)mc(e);else{var t=Wr(e.g);xs(e=e.g,e.g+t)}break;case 5:xs(e=e.g,e.g+4);break;case 3:for(t=e.m;;){if(!e0(e))throw Error("Unmatched start-group tag: stream EOF");if(e.h==4){if(e.m!=t)throw Error("Unmatched end-group tag");break}mc(e)}break;default:throw $g(e.h,e.l)}}function va(e,t,n){const i=e.g.l,r=Wr(e.g),s=e.g.g+r;let o=s-i;if(o<=0&&(e.g.l=s,n(t,e,void 0,void 0,void 0),o=s-e.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=s,e.g.l=i,t}function Yh(e){var t=Wr(e.g),n=Qg(e=e.g,t);if(e=e.h,GM){var i,r=e;(i=su)||(i=su=new TextDecoder("utf-8",{fatal:!0})),t=n+t,r=n===0&&t===r.length?r:r.subarray(n,t);try{var s=i.decode(r)}catch(a){if(ec===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),ec=!0}catch{ec=!1}}throw!ec&&(su=void 0),a}}else{t=(s=n)+t,n=[];let a,c=null;for(;s<t;){var o=e[s++];o<128?n.push(o):o<224?s>=t?ns():(a=e[s++],o<194||(192&a)!=128?(s--,ns()):n.push((31&o)<<6|63&a)):o<240?s>=t-1?ns():(a=e[s++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=e[s++]))!=128?(s--,ns()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?s>=t-2?ns():(a=e[s++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=e[s++]))!=128||(192&(r=e[s++]))!=128?(s--,ns()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&r,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):ns(),n.length>=8192&&(c=mp(c,n),n.length=0)}s=mp(c,n)}return s}function n0(e){const t=Wr(e.g);return t0(e.g,t)}function sl(e,t,n){var i=Wr(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var nc=[];let kc;function Ci(e,t,n){t.g?t.m(e,t.g,t.h,n,!0):t.m(e,t.h,n,!0)}var Ft=class{constructor(e,t){this.u=Gg(e,t)}toJSON(){return i0(this)}l(){var e=aE;return e.g?e.l(this,e.g,e.h,!0):e.l(this,e.h,e.defaultValue,!0)}clone(){const e=this.u;return Bh(this,e,Re(e),!1)}O(){return!!(2&sn(this.u))}};function i0(e){el(e),e=kc?e.u:nl(e.u,Oh,void 0,void 0,!1);{var t=!kc;let l=e.length;if(l){var n=e[l-1],i=Zc(n);i?l--:n=void 0;var r=e;if(i){t:{var s,o=n,a=!1;if(o)for(let u in o)isNaN(+u)?(s??(s={}))[u]=o[u]:(i=o[u],Array.isArray(i)&&(Lc(i)||yp(i)&&i.size===0)&&(i=null),i==null&&(a=!0),i!=null&&((s??(s={}))[u]=i));if(a||(s=o),s)for(let u in s){a=s;break t}a=null}o=a==null?n!=null:a!==n}for(;l>0&&((s=r[l-1])==null||Lc(s)||yp(s)&&s.size===0);l--)var c=!0;(r!==e||o||c)&&(t?(c||o||a)&&(r.length=l):r=Array.prototype.slice.call(r,0,l),a&&r.push(a)),c=r}else c=e}return c}function Dp(e){return e?/^\d+$/.test(e)?(Qc(e),new ju(Fe,tn)):null:MS||(MS=new ju(0,0))}Ft.prototype.Y=_a,Ft.prototype.toString=function(){try{return kc=!0,i0(this).toString()}finally{kc=!1}};var ju=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let MS;function Ip(e){return e?/^-?\d+$/.test(e)?(Qc(e),new Ku(Fe,tn)):null:SS||(SS=new Ku(0,0))}var Ku=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let SS;function io(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function xa(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function ol(e,t){if(t>=0)xa(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function ua(e,t){e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function fo(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function mi(e,t,n){xa(e.g,8*t+n)}function qh(e,t){return mi(e,t,2),t=e.g.end(),fo(e,t),t.push(e.h),t}function jh(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function al(e,t,n){mi(e,t,2),xa(e.g,n.length),fo(e,e.g.end()),fo(e,n)}function Zu(e,t,n,i){n!=null&&(t=qh(e,t),i(n,e),jh(e,t))}class To{constructor(t,n,i){this.g=t,this.h=n,this.qa=i}}function r0(e){return Array.isArray(e)?e[0]instanceof To?e:[DS,e]:[e,void 0]}function Ao(e,t){if(Array.isArray(t)){var n=sn(t);if(4&n)return t;for(var i=0,r=0;i<t.length;i++){const s=e(t[i]);s!=null&&(t[r++]=s)}return r<i&&(t.length=r),Je(t,-12289&(5|n)),2&n&&Object.freeze(t),t}}const Up=Symbol();function Kh(e){let t=e[Up];if(!t){const n=Zh(e),i=n.h;t=i?(r,s)=>i(r,s,n):(r,s)=>{var l;for(;e0(s)&&s.h!=4;){var o=s.m;let u=n[o];const h=!u;let d=!1;if(!u){var a=n.X;if(a){var c=a[o];c&&(d=(l=a.P)==null?void 0:l[o],(!bg||d)&&(a=ES(c))&&(u=n[o]=a))}}u&&u(s,r,o)||(o=(a=s).l,mc(a),a.ja?a=void 0:(c=a.g.g-o,a.g.g=o,a=t0(a.g,c)),o=r,a&&(kr||(kr=Symbol()),(c=o[kr])?c.push(a):o[kr]=[a])),h&&u&&!d&&$u++<5&&bs()}},e[Up]=t}return t}function ES(e){const t=(e=r0(e))[0].g;if(e=e[1]){const n=Kh(e),i=Zh(e).g;return(r,s,o)=>t(r,s,o,i,n)}return t}function bS(e,t,n){e[t]=n}function s0(e,t,n,i){var r=bS;t.g=function(h){switch(typeof h){case"boolean":return hS||(hS=[0,void 0,!0]);case"number":return h>0?void 0:h===0?dS||(dS=[0,void 0]):[-h,void 0];case"string":return[0,h];case"object":return h}}(e[0]);let s=0;var o=e[++s];o&&o.constructor===Object&&(t.X=o,typeof(o=e[++s])=="function"&&(t.h=o,t.l=e[++s],o=e[++s]));const a={};for(;Array.isArray(o)&&typeof o[0]=="number"&&o[0]>0;){for(var c=0;c<o.length;c++)a[o[c]]=o;o=e[++s]}for(c=1;o!==void 0;){let h;typeof o=="number"&&(c+=o,o=e[++s]);var l=void 0;if(o instanceof To?h=o:(h=IS,s--),h.qa){o=e[++s],l=e;var u=s;typeof o=="function"&&(o=o(),l[u]=o),l=o}for(u=c+1,typeof(o=e[++s])=="number"&&o<0&&(u-=o,o=e[++s]);c<u;c++){const d=a[c];r(t,c,l?i(h,l,d):n(h,d))}}return t}const Np=Symbol();function o0(e){let t=e[Np];if(!t){const n=cl(e);t=(i,r)=>a0(i,r,n),e[Np]=t}return t}const Fp=Symbol();function TS(e){return e.h}function AS(e,t){let n,i;const r=e.h;return(s,o,a)=>r(s,o,a,i||(i=cl(t).g),n||(n=o0(t)))}function cl(e){let t=e[Fp];return t||(t=s0(e,e[Fp]={},TS,AS))}const Op=Symbol();function wS(e,t){const n=e.g;return t?(i,r,s)=>n(i,r,s,t):n}function RS(e,t,n){const i=e.g;let r,s;return(o,a,c)=>i(o,a,c,s||(s=Zh(t).g),r||(r=Kh(t)),n)}function Zh(e){let t=e[Op];return t||(t=s0(e,e[Op]={},wS,RS))}function Bp(e,t){var s;var n=e[t];if(n)return n;if(n=e.X){var i=n[t];if(i){var r=(i=r0(i))[0].h;if(i=i[1],n=(s=n.P)==null?void 0:s[t],!bg||n){if(i){const o=o0(i),a=cl(i).g;n=(n=e.l)?n(a,o):(c,l,u)=>r(c,l,u,a,o)}else n=r;return e[t]=n}}}}function a0(e,t,n){var c,l,u;for(var i=Re(e),r=+!!(512&i)-1,s=e.length,o=512&i?1:0,a=s+(256&i?-1:0);o<a;o++){const h=e[o];if(h==null)continue;const d=o-r,m=Bp(n,d);if(!m)continue;const g=n.X;g!=null&&g[d]&&!((c=g==null?void 0:g.P)!=null&&c[d])&&$u++<5&&bs(),m(t,h,d)}if(256&i){i=e[s-1];for(let h in i)r=+h,!Number.isNaN(r)&&(s=i[h])!=null&&(a=Bp(n,r))&&((l=o=n.X)!=null&&l[r]&&!((u=o==null?void 0:o.P)!=null&&u[r])&&$u++<5&&bs(),a(t,s,r))}if(e=kr?e[kr]:void 0)for(fo(t,t.g.end()),n=0;n<e.length;n++)fo(t,bh(e[n])||new Uint8Array(0))}function qn(e,t){return new To(e,t,!1)}function wo(e,t){return new To(e,t,!1)}function ll(e,t){return new To(e,t,!0)}function jn(e,t,n){je(e,Re(e),t,n)}var CS=ll(function(e,t,n,i,r){return e.h===2&&(e=va(e,vs([void 0,void 0],i),r),gr(i=Re(t)),(r=Yi(t,i,n))instanceof pi?2&r.M?((r=r.Z()).push(e),je(t,i,n,r)):r.Qa(e):Array.isArray(r)?(2&sn(r)&&je(t,i,n,r=qg(r)),r.push(e)):je(t,i,n,[e]),!0)},function(e,t,n,i,r){if(t instanceof pi)t.forEach((s,o)=>{Zu(e,n,vs([o,s],i),r)});else if(Array.isArray(t))for(let s=0;s<t.length;s++){const o=t[s];Array.isArray(o)&&Zu(e,n,vs(o,i),r)}});let $u=0;function c0(e,t,n){if(t=function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(BigInt.asIntN(64,i));if(tl(i)){if(r==="string")return Ih(i);if(r==="number")return Dh(i)}}(t),t!=null&&(typeof t=="string"&&Ip(t),t!=null))switch(mi(e,n,0),typeof t){case"number":e=e.g,uo(t),io(e,Fe,tn);break;case"bigint":n=BigInt.asUintN(64,t),n=new Ku(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),io(e.g,n.h,n.g);break;default:n=Ip(t),io(e.g,n.h,n.g)}}function l0(e,t,n){(t=So(t))!=null&&t!=null&&(mi(e,n,0),ol(e.g,t))}function u0(e,t,n){(t=Ng(t))!=null&&(mi(e,n,0),e.g.g.push(t?1:0))}function h0(e,t,n){(t=zr(t))!=null&&al(e,n,Sg(t))}function ul(e,t,n,i,r){t instanceof Ft?(el(t),t=t.u):t=Array.isArray(t)?vs(t,i):void 0,Zu(e,n,t,r)}function d0(e,t,n){(t=t==null||typeof t=="string"||ma(t)||t instanceof dr?t:void 0)!=null&&al(e,n,Vh(t).buffer)}function f0(e,t,n){return(e.h===5||e.h===2)&&(t=bo(t,Re(t),n,2,!1),e.h==2?sl(e,qu,t):t.push(qu(e.g)),!0)}var cn,sr=qn(function(e,t,n){if(e.h!==1)return!1;var i=e.g;e=Yu(i);const r=Yu(i);i=2*(r>>31)+1;const s=r>>>20&2047;return e=4294967296*(1048575&r)+e,jn(t,n,s==2047?e?NaN:i*(1/0):s==0?5e-324*i*e:i*Math.pow(2,s-1075)*(e+4503599627370496)),!0},function(e,t,n){(t=Yr(t))!=null&&(mi(e,n,1),e=e.g,(n=Ug||(Ug=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),Fe=n.getUint32(0,!0),tn=n.getUint32(4,!0),ua(e,Fe),ua(e,tn))}),hn=qn(function(e,t,n){return e.h===5&&(jn(t,n,qu(e.g)),!0)},function(e,t,n){(t=Yr(t))!=null&&(mi(e,n,5),e=e.g,Rh(t),ua(e,Fe))}),PS=wo(f0,function(e,t,n){if((t=Ao(Yr,t))!=null)for(let o=0;o<t.length;o++){var i=e,r=n,s=t[o];s!=null&&(mi(i,r,5),i=i.g,Rh(s),ua(i,Fe))}}),$h=wo(f0,function(e,t,n){if((t=Ao(Yr,t))!=null&&t.length){mi(e,n,2),xa(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Rh(t[i]),ua(n,Fe)}}),Xr=qn(function(e,t,n){return e.h===0&&(jn(t,n,Wh(e.g,Ph)),!0)},c0),fu=qn(function(e,t,n){return e.h===0&&(jn(t,n,(e=Wh(e.g,Ph))===0?void 0:e),!0)},c0),LS=qn(function(e,t,n){return e.h===0&&(jn(t,n,Wh(e.g,Ch)),!0)},function(e,t,n){if((t=lS(t))!=null&&(typeof t=="string"&&Dp(t),t!=null))switch(mi(e,n,0),typeof t){case"number":e=e.g,uo(t),io(e,Fe,tn);break;case"bigint":n=BigInt.asUintN(64,t),n=new ju(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),io(e.g,n.h,n.g);break;default:n=Dp(t),io(e.g,n.h,n.g)}}),en=qn(function(e,t,n){return e.h===0&&(jn(t,n,Vr(e.g)),!0)},l0),hl=wo(function(e,t,n){return(e.h===0||e.h===2)&&(t=bo(t,Re(t),n,2,!1),e.h==2?sl(e,Vr,t):t.push(Vr(e.g)),!0)},function(e,t,n){if((t=Ao(So,t))!=null&&t.length){n=qh(e,n);for(let i=0;i<t.length;i++)ol(e.g,t[i]);jh(e,n)}}),to=qn(function(e,t,n){return e.h===0&&(jn(t,n,(e=Vr(e.g))===0?void 0:e),!0)},l0),Ze=qn(function(e,t,n){return e.h===0&&(jn(t,n,Xh(e.g)),!0)},u0),Qo=qn(function(e,t,n){return e.h===0&&(jn(t,n,(e=Xh(e.g))===!1?void 0:e),!0)},u0),Pn=wo(function(e,t,n){if(e.h!==2)return!1;e=Yh(e);const i=Re(t);return gr(i),bo(t,i,n,2).push(e),!0},function(e,t,n){if((t=Ao(zr,t))!=null)for(let o=0;o<t.length;o++){var i=e,r=n,s=t[o];s!=null&&al(i,r,Sg(s))}}),Ur=qn(function(e,t,n){return e.h===2&&(jn(t,n,(e=Yh(e))===""?void 0:e),!0)},h0),Ce=qn(function(e,t,n){return e.h===2&&(jn(t,n,Yh(e)),!0)},h0),DS=ll(function(e,t,n,i,r){return e.h===2&&(va(e,Gh(t,i,n,!0),r),!0)},ul),IS=ll(function(e,t,n,i,r){return e.h===2&&(va(e,Gh(t,i,n),r),!0)},ul);cn=new To(function(e,t,n,i,r){if(e.h!==2)return!1;i=vs(void 0,i);let s=Re(t);gr(s);let o=bo(t,s,n,3);return s=Re(t),4&sn(o)&&(o=ii(o),Je(o,-2079&(1|sn(o))),je(t,s,n,o)),o.push(i),va(e,i,r),!0},function(e,t,n,i,r){if(Array.isArray(t))for(let s=0;s<t.length;s++)ul(e,t[s],n,i,r)},!0);var Le=ll(function(e,t,n,i,r,s){return e.h===2&&(jg(t,Re(t),s,n),va(e,t=Gh(t,i,n),r),!0)},ul),p0=qn(function(e,t,n){return e.h===2&&(jn(t,n,n0(e)),!0)},d0),US=wo(function(e,t,n){return(e.h===0||e.h===2)&&(t=bo(t,Re(t),n,2,!1),e.h==2?sl(e,Wr,t):t.push(Wr(e.g)),!0)},function(e,t,n){if((t=Ao(cS,t))!=null)for(let o=0;o<t.length;o++){var i=e,r=n,s=t[o];s!=null&&(mi(i,r,0),xa(i.g,s))}}),Ri=qn(function(e,t,n){return e.h===0&&(jn(t,n,Vr(e.g)),!0)},function(e,t,n){(t=So(t))!=null&&(t=parseInt(t,10),mi(e,n,0),ol(e.g,t))});class NS{constructor(t,n){this.h=t,this.g=n,this.l=Se,this.m=qt,this.defaultValue=void 0}}function Pi(e,t){return new NS(e,t)}function qr(e,t){return(n,i)=>{if(nc.length){const s=nc.pop();s.o(i),du(s.g,n,i),n=s}else n=new class{constructor(s,o){if(Lp.length){const a=Lp.pop();du(a,s,o),s=a}else s=new class{constructor(a,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,du(this,a,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ea=!1}}(s,o);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ja:s=!1}={}){this.ja=s}}(n,i);try{const s=new e,o=s.u;Kh(t)(o,n);var r=s}finally{n.g.clear(),n.m=-1,n.h=-1,nc.length<100&&nc.push(n)}return r}}function dl(e){return function(){el(this);const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};a0(this.u,t,cl(e)),fo(t,t.g.end());const n=new Uint8Array(t.h),i=t.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];n.set(a,s),s+=a.length}return t.l=[n],n}}var kp=class extends Ft{constructor(e){super(e)}},zp=[0,Ur,qn(function(e,t,n){return e.h===2&&(jn(t,n,(e=n0(e))===Es()?void 0:e),!0)},function(e,t,n){if(t!=null){if(t instanceof Ft){const i=t.Ta;return void(i&&(t=i(t),t!=null&&al(e,n,Vh(t).buffer)))}if(Array.isArray(t))return}d0(e,t,n)})],m0=[0,en,Ri,Ze,-1,hl,Ri,-1],FS=class extends Ft{constructor(){super()}},g0=[0,Ze,Ce,Ze,Ri,-1,wo(function(e,t,n){return(e.h===0||e.h===2)&&(t=bo(t,Re(t),n,2,!1),e.h==2?sl(e,yS,t):t.push(Vr(e.g)),!0)},function(e,t,n){if((t=Ao(So,t))!=null&&t.length){n=qh(e,n);for(let i=0;i<t.length;i++)ol(e.g,t[i]);jh(e,n)}}),Ce,-1,[0,Ze,-1],Ri,Ze,-1],_0=[0,Ce,-2],Gp=class extends Ft{constructor(){super()}},v0=[0],x0=[0,en,Ze,1,Ze,-3],OS=[0,Ce,Ze,-1,en,[0,[1,2,3,4,5,6,7],Le,v0,Le,g0,Le,_0,Le,x0,Le,m0,Le,[0,Ce,-2],Le,[0,Ce,Ri]],[0,Ce],Ze,[0,[1,3],[2,4],Le,[0,hl],-1,Le,[0,Pn],-1,cn,[0,Ce,-1]],Ce],ri=class extends Ft{constructor(e){super(e,2)}},He={},un=He.P={};He[336783863]=OS,un[336783863]=1;var Hp=[0,fu,-1,Qo,-3,fu,hl,Ur,to,fu,-1,Qo,to,Qo,-2,Ur];function si(e,t){Xu(e,2,Eo(t),"")}function ke(e,t){rl(e,3,t)}function Me(e,t){rl(e,4,t)}var Gn=class extends Ft{constructor(e){super(e,500)}o(e){return qt(this,0,7,e)}},ta=[-1,{P:{}}],Vp=[0,Ce,1,ta],Wp=[0,Ce,Pn,ta];function oi(e,t){Oc(e,1,Gn,t)}function Ve(e,t){rl(e,10,t)}function Ee(e,t){rl(e,15,t)}var Kn=class extends Ft{constructor(e){super(e,500)}o(e){return qt(this,0,1001,e)}},y0=[-500,cn,[-500,Ur,-1,Pn,-3,[-2,He,Ze],cn,zp,to,-1,Vp,Wp,cn,[0,Ur,Qo],Ur,Hp,to,Pn,987,Pn],4,cn,[-500,Ce,-1,[-1,{P:{}}],998,Ce],cn,[-500,Ce,Pn,-1,[-2,{P:{}},Ze],997,Pn,-1],to,cn,[-500,Ce,Pn,ta,998,Pn],Pn,to,Vp,Wp,cn,[0,Ur,-1,ta],Pn,-2,Hp,Ur,-1,Qo,979,ta,cn,zp];Kn.prototype.g=dl(y0);var BS=qr(Kn,y0),kS=class extends Ft{constructor(e){super(e)}},M0=class extends Ft{constructor(e){super(e)}g(){return mr(this,kS,1)}},S0=[0,cn,[0,en,hn,Ce,-1]],fl=qr(M0,S0),zS=class extends Ft{constructor(e){super(e)}},GS=class extends Ft{constructor(e){super(e)}},pu=class extends Ft{constructor(e){super(e)}h(){return Se(this,zS,2)}g(){return mr(this,GS,5)}},E0=qr(class extends Ft{constructor(e){super(e)}},[0,Pn,hl,$h,[0,Ri,[0,en,-3],[0,hn,-3],[0,en,-1,[0,cn,[0,en,-2]]],cn,[0,hn,-1,Ce,hn]],Ce,-1,Xr,cn,[0,en,hn],Pn,Xr]),b0=class extends Ft{constructor(e){super(e)}},ro=qr(class extends Ft{constructor(e){super(e)}},[0,cn,[0,hn,-4]]),T0=class extends Ft{constructor(e){super(e)}},ya=qr(class extends Ft{constructor(e){super(e)}},[0,cn,[0,hn,-4]]),HS=class extends Ft{constructor(e){super(e)}},VS=[0,en,-1,$h,Ri],A0=class extends Ft{constructor(){super()}};A0.prototype.g=dl([0,hn,-4,Xr]);var WS=class extends Ft{constructor(e){super(e)}},XS=qr(class extends Ft{constructor(e){super(e)}},[0,cn,[0,1,en,Ce,S0],Xr]),Xp=class extends Ft{constructor(e){super(e)}},YS=class extends Ft{constructor(e){super(e)}ra(){const e=Wg(this);return e??Es()}},qS=class extends Ft{constructor(e){super(e)}},w0=[1,2],jS=qr(class extends Ft{constructor(e){super(e)}},[0,cn,[0,w0,Le,[0,$h],Le,[0,p0],en,Ce],Xr]),Jh=class extends Ft{constructor(e){super(e)}},R0=[0,Ce,en,hn,Pn,-1],Yp=class extends Ft{constructor(e){super(e)}},KS=[0,Ze,-1],qp=class extends Ft{constructor(e){super(e)}},gc=[1,2,3,4,5],zc=class extends Ft{constructor(e){super(e)}g(){return Wg(this)!=null}h(){return zr(Hr(this,2))!=null}},Ke=class extends Ft{constructor(e){super(e)}g(){return Ng(Hr(this,2))??!1}},C0=[0,p0,Ce,[0,en,Xr,-1],[0,LS,Xr]],on=[0,C0,Ze,[0,gc,Le,x0,Le,g0,Le,m0,Le,v0,Le,_0],Ri],pl=class extends Ft{constructor(e){super(e)}},Qh=[0,on,hn,-1,en],ZS=Pi(502141897,pl);He[502141897]=Qh,un[502141897]=1;var P0=[0,C0];He[512499200]=P0;var L0=[0,P0];He[515723506]=L0;var $S=qr(class extends Ft{constructor(e){super(e)}},[0,[0,Ri,-1,PS,US],VS]),D0=[0,on];He[508981768]=D0;var I0=class extends Ft{constructor(e){super(e)}},U0=class extends Ft{constructor(e){super(e)}},td=[0,on,hn,D0,Ze],N0=[0,on,Qh,td,hn,L0];He[508968149]=td;var JS=Pi(508968150,U0);He[508968150]=N0,un[508968150]=1,un[508968149]=1;var F0=class extends Ft{constructor(e){super(e)}},QS=Pi(513916220,F0);He[513916220]=[0,on,N0,en],un[513916220]=1;var js=class extends Ft{constructor(e){super(e)}h(){return Se(this,Jh,2)}g(){Be(this,2)}},O0=[0,on,R0];He[478825465]=O0,un[478825465]=1;var B0=[0,on];He[478825422]=B0;var tE=class extends Ft{constructor(e){super(e)}},k0=class extends Ft{constructor(e){super(e)}},ed=class extends Ft{constructor(e){super(e)}},nd=class extends Ft{constructor(e){super(e)}},z0=class extends Ft{constructor(e){super(e)}},G0=[0,on,B0,O0,-1],H0=[0,on,hn,en],id=[0,on,hn],V0=[0,on,H0,id,hn],eE=[0,on,V0,G0];He[463370452]=G0,He[464864288]=H0,He[474472470]=id;var nE=Pi(462713202,nd);He[462713202]=V0;var iE=Pi(479097054,z0);He[479097054]=eE,un[479097054]=1,un[463370452]=1,un[464864288]=1,un[462713202]=1,un[474472470]=1;var rE=class extends Ft{constructor(e){super(e)}},W0=class extends Ft{constructor(e){super(e)}},X0=class extends Ft{constructor(e){super(e)}},Y0=class extends Ft{constructor(){super()}},Ju=[0,on,hn,-1,en],Qu=[0,on,hn,Ze];Y0.prototype.g=dl([0,on,id,[0,on],Qh,td,Ju,Qu]),He[514774813]=Ju,He[518928384]=Qu;var q0=class extends Ft{constructor(e){super(e)}},sE=Pi(456383383,q0);He[456383383]=[0,on,R0],un[456383383]=1;var j0=class extends Ft{constructor(e){super(e)}},oE=Pi(476348187,j0);He[476348187]=[0,on,KS],un[476348187]=1;var K0=class extends Ft{constructor(e){super(e)}},jp=class extends Ft{constructor(e){super(e)}},Z0=[0,Ri,-1],aE=Pi(458105876,class extends Ft{constructor(e){super(e)}g(){var e=this.u;const t=Re(e),n=2&t;return e=function(i,r,s){var o=jp;const a=2&r;let c=!1;if(s==null){if(a)return Cp();s=[]}else if(s.constructor===pi){if(!(2&s.M)||a)return s;s=s.Z()}else Array.isArray(s)?c=!!(2&sn(s)):s=[];if(a){if(!s.length)return Cp();c||(c=!0,Mo(s))}else c&&(c=!1,s=qg(s));return c||(64&sn(s)?Pc(s,32):32&r&&Kc(s,32)),je(i,r,2,o=new pi(s,o,uS,void 0)),o}(e,t,Yi(e,t,2)),!n&&jp&&(e.va=!0),e}});He[458105876]=[0,Z0,CS,[!0,Xr,[0,Ce,-1,Pn]]],un[458105876]=1;var rd=class extends Ft{constructor(e){super(e)}},$0=Pi(458105758,rd);He[458105758]=[0,on,Ce,Z0],un[458105758]=1;var J0=class extends Ft{constructor(e){super(e)}},cE=Pi(443442058,J0);He[443442058]=[0,on,Ce,en,hn,Pn,-1],un[443442058]=1,un[514774813]=1;var Q0=class extends Ft{constructor(e){super(e)}},lE=Pi(516587230,Q0);function th(e,t){return t=t?t.clone():new Jh,e.displayNamesLocale!==void 0?Be(t,1,Eo(e.displayNamesLocale)):e.displayNamesLocale===void 0&&Be(t,1),e.maxResults!==void 0?Wi(t,2,e.maxResults):"maxResults"in e&&Be(t,2),e.scoreThreshold!==void 0?Gt(t,3,e.scoreThreshold):"scoreThreshold"in e&&Be(t,3),e.categoryAllowlist!==void 0?Bc(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&Be(t,4),e.categoryDenylist!==void 0?Bc(t,5,e.categoryDenylist):"categoryDenylist"in e&&Be(t,5),t}function sd(e,t=-1,n=""){return{categories:e.map(i=>({index:wi(fi(i,1),0)??-1,score:rn(i,2)??0,categoryName:Vi(i,3)??"",displayName:Vi(i,4)??""})),headIndex:t,headName:n}}function t_(e){var o,a;var t=us(e,3,Yr,ls()),n=us(e,2,So,ls()),i=us(e,1,zr,ls()),r=us(e,9,zr,ls());const s={categories:[],keypoints:[]};for(let c=0;c<t.length;c++)s.categories.push({score:t[c],index:n[c]??-1,categoryName:i[c]??"",displayName:r[c]??""});if((t=(o=Se(e,pu,4))==null?void 0:o.h())&&(s.boundingBox={originX:fi(t,1)??0,originY:fi(t,2)??0,width:fi(t,3)??0,height:fi(t,4)??0,angle:0}),(a=Se(e,pu,4))==null?void 0:a.g().length)for(const c of Se(e,pu,4).g())s.keypoints.push({x:pc(c,1)??0,y:pc(c,2)??0,score:pc(c,4)??0,label:zr(Hr(c,3))??""});return s}function ml(e){const t=[];for(const n of mr(e,T0,1))t.push({x:rn(n,1)??0,y:rn(n,2)??0,z:rn(n,3)??0,visibility:rn(n,4)??0});return t}function ea(e){const t=[];for(const n of mr(e,b0,1))t.push({x:rn(n,1)??0,y:rn(n,2)??0,z:rn(n,3)??0,visibility:rn(n,4)??0});return t}function Kp(e){return Array.from(e,t=>t>127?t-256:t)}function Zp(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,r=0;for(let s=0;s<e.length;s++)n+=e[s]*t[s],i+=e[s]*e[s],r+=t[s]*t[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let ic;He[516587230]=[0,on,Ju,Qu,hn],un[516587230]=1,un[518928384]=1;const uE=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function e_(){if(ic===void 0)try{await WebAssembly.instantiate(uE),ic=!0}catch{ic=!1}return ic}async function Ho(e,t=""){const n=await e_()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var rs=class{};function n_(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")}(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function $p(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise((n,i)=>{t.addEventListener("load",()=>{n()},!1),t.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(t)})}importScripts(e.toString())}function i_(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function Wt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function Jp(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=i_(t);return!e.l||i===e.i.canvas.width&&r===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=r),[i,r]}function Qp(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let r=0;r<t.length;r++)i[r]=e.i.stringToNewUTF8(t[r]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(const r of i)e.i._free(r);e.i._free(t)}function Fi(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function Cr(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(r,s,o)=>{s?(n(i,o),i=[]):i.push(r)}}rs.forVisionTasks=function(e){return Ho("vision",e)},rs.forTextTasks=function(e){return Ho("text",e)},rs.forGenAiExperimentalTasks=function(e){return Ho("genai_experimental",e)},rs.forGenAiTasks=function(e){return Ho("genai",e)},rs.forAudioTasks=function(e){return Ho("audio",e)},rs.isSimdSupported=function(){return e_()};async function hE(e,t,n,i){return e=await(async(r,s,o,a,c)=>{if(s&&await $p(s),!self.ModuleFactory||o&&(await $p(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,a)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await e.o(i),e}function mu(e,t){const n=Se(e.baseOptions,zc,1)||new zc;typeof t=="string"?(Be(n,2,Eo(t)),Be(n,1)):t instanceof Uint8Array&&(Be(n,1,wh(t,!1,!1)),Be(n,2)),qt(e.baseOptions,0,1,n)}function tm(e){try{const t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map(n=>n.message).join(", "))}finally{e.H=[]}}function Lt(e,t){e.B=Math.max(e.B,t)}function gl(e,t){e.A=new Gn,si(e.A,"PassThroughCalculator"),ke(e.A,"free_memory"),Me(e.A,"free_memory_unused_out"),Ve(t,"free_memory"),oi(t,e.A)}function po(e,t){ke(e.A,t),Me(e.A,t+"_unused_out")}function _l(e){e.g.addBoolToStream(!0,"free_memory",e.B)}var _c=class{constructor(e){this.g=e,this.H=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){var n,i,r,s,o,a;if(t){const c=e.baseOptions||{};if((n=e.baseOptions)!=null&&n.modelAssetBuffer&&((i=e.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=Se(this.baseOptions,zc,1))!=null&&r.g()||(s=Se(this.baseOptions,zc,1))!=null&&s.h()||(o=e.baseOptions)!=null&&o.modelAssetBuffer||(a=e.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(l,u){let h=Se(l.baseOptions,qp,3);if(!h){var d=h=new qp,m=new Gp;Jo(d,4,gc,m)}"delegate"in u&&(u.delegate==="GPU"?(u=h,d=new FS,Jo(u,2,gc,d)):(u=h,d=new Gp,Jo(u,4,gc,d))),qt(l.baseOptions,0,3,h)}(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then(l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)}).then(l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),mu(this,"/model.dat"),this.m(),this.J()});if(c.modelAssetBuffer instanceof Uint8Array)mu(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return async function(l){const u=[];for(var h=0;;){const{done:d,value:m}=await l.read();if(d)break;u.push(m),h+=m.length}if(u.length===0)return new Uint8Array(0);if(u.length===1)return u[0];l=new Uint8Array(h),h=0;for(const d of u)l.set(d,h),h+=d.length;return l}(c.modelAssetBuffer).then(l=>{mu(this,l),this.m(),this.J()})}return this.m(),this.J(),Promise.resolve()}J(){}ga(){let e;if(this.g.ga(t=>{e=BS(t)}),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener((n,i)=>{this.H.push(Error(i))}),this.g.Oa(),this.g.setGraph(e,t),this.A=void 0,tm(this)}finishProcessing(){this.g.finishProcessing(),tm(this)}close(){this.A=void 0,this.g.closeGraph()}};function fr(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}_c.prototype.close=_c.prototype.close,function(e,t){e=e.split(".");var n,i=Ss;for((e[0]in i)||i.execScript===void 0||i.execScript("var "+e[0]);e.length&&(n=e.shift());)e.length||t===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=t}("TaskRunner",_c);class dE{constructor(t,n,i,r){this.g=t,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function em(e,t,n){const i=e.g;if(n=fr(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function nm(e,t){const n=e.g,i=fr(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=fr(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.R),n.vertexAttribPointer(e.R,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=fr(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.J),n.vertexAttribPointer(e.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new dE(n,i,r,s)}function od(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function ad(e,t,n,i){return od(e,t),e.h||(e.m(),e.C()),n?(e.s||(e.s=nm(e,!0)),n=e.s):(e.v||(e.v=nm(e,!1)),n=e.v),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function vl(e,t,n){return od(e,t),e=fr(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function xl(e,t,n){od(e,t),e.A||(e.A=fr(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function cd(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var ld=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=fr(e.createProgram(),"Failed to create WebGL program"),this.da=em(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.ca=em(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.R=e.getAttribLocation(this.h,"aVertex"),this.J=e.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.da),e.deleteShader(this.ca)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function cr(e,t){switch(t){case 0:return e.g.find(n=>n instanceof Uint8Array);case 1:return e.g.find(n=>n instanceof Float32Array);case 2:return e.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function eh(e){var t=cr(e,1);if(!t){if(t=cr(e,0))t=new Float32Array(t).map(i=>i/255);else{t=new Float32Array(e.width*e.height);const i=mo(e);var n=ud(e);if(xl(n,i,r_(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<t.length;++r,s+=4)t[r]=n[s]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function r_(e){let t=cr(e,2);if(!t){const n=mo(e);t=o_(e);const i=eh(e),r=s_(e);n.texImage2D(n.TEXTURE_2D,0,r,e.width,e.height,0,n.RED,n.FLOAT,i),nh(e)}return t}function mo(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=fr(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function s_(e){if(e=mo(e),!rc)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))rc=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");rc=e.R16F}return rc}function ud(e){return e.l||(e.l=new ld),e.l}function o_(e){const t=mo(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=cr(e,2);return n||(n=vl(ud(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function nh(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var rc,gn=class{constructor(e,t,n,i,r,s,o){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=o,this.j&&--im===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ja(){return!!cr(this,0)}ma(){return!!cr(this,1)}S(){return!!cr(this,2)}la(){return(t=cr(e=this,0))||(t=eh(e),t=new Uint8Array(t.map(n=>255*n)),e.g.push(t)),t;var e,t}ka(){return eh(this)}N(){return r_(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=mo(this),r=ud(this);i.activeTexture(i.TEXTURE1),n=vl(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=s_(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),xl(r,i,n),ad(r,i,!1,()=>{o_(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),nh(this)}),cd(r),nh(this)}}e.push(n)}return new gn(e,this.m,this.S(),this.canvas,this.l,this.width,this.height)}close(){this.j&&mo(this).deleteTexture(cr(this,2)),im=-1}};gn.prototype.close=gn.prototype.close,gn.prototype.clone=gn.prototype.clone,gn.prototype.getAsWebGLTexture=gn.prototype.N,gn.prototype.getAsFloat32Array=gn.prototype.ka,gn.prototype.getAsUint8Array=gn.prototype.la,gn.prototype.hasWebGLTexture=gn.prototype.S,gn.prototype.hasFloat32Array=gn.prototype.ma,gn.prototype.hasUint8Array=gn.prototype.Ja;var im=250;function Gi(e,t){switch(t){case 0:return e.g.find(n=>n instanceof ImageData);case 1:return e.g.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return e.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function a_(e){var t=Gi(e,0);if(!t){t=go(e);const n=yl(e),i=new Uint8Array(e.width*e.height*4);xl(n,t,vc(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),cd(n),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function vc(e){let t=Gi(e,2);if(!t){const n=go(e);t=xc(e);const i=Gi(e,1)||a_(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Wo(e)}return t}function go(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return e.h||(e.h=fr(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function yl(e){return e.l||(e.l=new ld),e.l}function xc(e){const t=go(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Gi(e,2);return n||(n=vl(yl(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Wo(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function rm(e){const t=go(e);return ad(yl(e),t,!0,()=>function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,o=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=o,n}(e,()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))}var _n=class{constructor(e,t,n,i,r,s,o){this.g=e,this.j=t,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=o,(this.j||this.m)&&--sm===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ia(){return!!Gi(this,0)}na(){return!!Gi(this,1)}S(){return!!Gi(this,2)}Ga(){return a_(this)}Fa(){var e=Gi(this,1);return e||(vc(this),xc(this),e=rm(this),Wo(this),this.g.push(e),this.j=!0),e}N(){return vc(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){const i=go(this),r=yl(this);i.activeTexture(i.TEXTURE1),n=vl(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),xl(r,i,n),ad(r,i,!1,()=>{xc(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Wo(this)}),cd(r),Wo(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);vc(this),xc(this),n=rm(this),Wo(this)}e.push(n)}return new _n(e,this.na(),this.S(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Gi(this,1).close(),this.m&&go(this).deleteTexture(Gi(this,2)),sm=-1}};_n.prototype.close=_n.prototype.close,_n.prototype.clone=_n.prototype.clone,_n.prototype.getAsWebGLTexture=_n.prototype.N,_n.prototype.getAsImageBitmap=_n.prototype.Fa,_n.prototype.getAsImageData=_n.prototype.Ga,_n.prototype.hasWebGLTexture=_n.prototype.S,_n.prototype.hasImageBitmap=_n.prototype.na,_n.prototype.hasImageData=_n.prototype.Ia;var sm=250;function Li(...e){return e.map(([t,n])=>({start:t,end:n}))}const fE=function(e){return class extends e{Oa(){this.i._registerModelResourcesGraphService()}}}((om=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:n_()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Wt(this,i||"input_audio",s=>{Wt(this,r=r||"audio_header",o=>{this.i._configureAudio(s,o,e,t,n)})})}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ga(e){Fi(this,"__graph_config__",t=>{e(t)}),Wt(this,"__graph_config__",t=>{this.i._getGraphConfig(t,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,r){const s=4*e.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(e,this.g/4),Wt(this,i,o=>{this.i._addAudioToInputStream(this.g,t,n,o,r)})}addGpuBufferToStream(e,t,n){Wt(this,t,i=>{const[r,s]=Jp(this,e,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(e,t,n){Wt(this,t,i=>{this.i._addBoolToInputStream(e,i,n)})}addDoubleToStream(e,t,n){Wt(this,t,i=>{this.i._addDoubleToInputStream(e,i,n)})}addFloatToStream(e,t,n){Wt(this,t,i=>{this.i._addFloatToInputStream(e,i,n)})}addIntToStream(e,t,n){Wt(this,t,i=>{this.i._addIntToInputStream(e,i,n)})}addUintToStream(e,t,n){Wt(this,t,i=>{this.i._addUintToInputStream(e,i,n)})}addStringToStream(e,t,n){Wt(this,t,i=>{Wt(this,e,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(e,t,n){Wt(this,t,i=>{Qp(this,Object.keys(e),r=>{Qp(this,Object.values(e),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(e).length,i,n)})})})}addProtoToStream(e,t,n,i){Wt(this,n,r=>{Wt(this,t,s=>{const o=this.i._malloc(e.length);this.i.HEAPU8.set(e,o),this.i._addProtoToInputStream(o,e.length,s,r,i),this.i._free(o)})})}addEmptyPacketToStream(e,t){Wt(this,e,n=>{this.i._addEmptyPacketToInputStream(n,t)})}addBoolVectorToStream(e,t,n){Wt(this,t,i=>{const r=this.i._allocateBoolVector(e.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(e,t,n){Wt(this,t,i=>{const r=this.i._allocateDoubleVector(e.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(e,t,n){Wt(this,t,i=>{const r=this.i._allocateFloatVector(e.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(e,t,n){Wt(this,t,i=>{const r=this.i._allocateIntVector(e.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(e,t,n){Wt(this,t,i=>{const r=this.i._allocateUintVector(e.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(e,t,n){Wt(this,t,i=>{const r=this.i._allocateStringVector(e.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of e)Wt(this,s,o=>{this.i._addStringVectorEntry(r,o)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(e,t){Wt(this,t,n=>{this.i._addBoolToInputSidePacket(e,n)})}addDoubleToInputSidePacket(e,t){Wt(this,t,n=>{this.i._addDoubleToInputSidePacket(e,n)})}addFloatToInputSidePacket(e,t){Wt(this,t,n=>{this.i._addFloatToInputSidePacket(e,n)})}addIntToInputSidePacket(e,t){Wt(this,t,n=>{this.i._addIntToInputSidePacket(e,n)})}addUintToInputSidePacket(e,t){Wt(this,t,n=>{this.i._addUintToInputSidePacket(e,n)})}addStringToInputSidePacket(e,t){Wt(this,t,n=>{Wt(this,e,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(e,t,n){Wt(this,n,i=>{Wt(this,t,r=>{const s=this.i._malloc(e.length);this.i.HEAPU8.set(e,s),this.i._addProtoToInputSidePacket(s,e.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(e,t){Wt(this,t,n=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(e,t){Wt(this,t,n=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(e,t){Wt(this,t,n=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(e,t){Wt(this,t,n=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(e,t){Wt(this,t,n=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(e,t){Wt(this,t,n=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of e)Wt(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(e,t){Fi(this,e,t),Wt(this,e,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(e,t){Cr(this,e,t),Wt(this,e,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(e,t){Fi(this,e,t),Wt(this,e,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(e,t){Cr(this,e,t),Wt(this,e,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(e,t){Fi(this,e,t),Wt(this,e,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(e,t){Cr(this,e,t),Wt(this,e,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(e,t){Fi(this,e,t),Wt(this,e,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(e,t){Cr(this,e,t),Wt(this,e,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(e,t){Fi(this,e,t),Wt(this,e,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(e,t){Cr(this,e,t),Wt(this,e,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(e,t){Fi(this,e,t),Wt(this,e,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(e,t){Cr(this,e,t),Wt(this,e,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(e,t,n){Fi(this,e,t),Wt(this,e,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(e,t,n){Cr(this,e,t),Wt(this,e,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Fi(this,e,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,r)}),Wt(this,e,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends om{get ia(){return this.i}ta(e,t,n){Wt(this,t,i=>{const[r,s]=Jp(this,e,i);this.ia._addBoundTextureAsImageToStream(i,r,s,n)})}W(e,t){Fi(this,e,t),Wt(this,e,n=>{this.ia._attachImageListener(n)})}fa(e,t){Cr(this,e,t),Wt(this,e,n=>{this.ia._attachImageVectorListener(n)})}}));var om,gi=class extends fE{};async function ye(e,t,n){return async function(i,r,s,o){return hE(i,r,s,o)}(e,n.canvas??(n_()?void 0:document.createElement("canvas")),t,n)}function c_(e,t,n,i){if(e.V){const s=new A0;if(n!=null&&n.regionOfInterest){if(!e.sa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Gt(s,1,(r.left+r.right)/2),Gt(s,2,(r.top+r.bottom)/2),Gt(s,4,r.right-r.left),Gt(s,3,r.bottom-r.top)}else Gt(s,1,.5),Gt(s,2,.5),Gt(s,4,1),Gt(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Gt(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[o,a]=i_(t);n=rn(s,3)*a/o,r=rn(s,4)*o/a,Gt(s,4,n),Gt(s,3,r)}}e.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",e.V,i)}e.g.ta(t,e.da,i??performance.now()),e.finishProcessing()}function _i(e,t,n){var i;if((i=e.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");c_(e,t,n,e.B+1)}function qi(e,t,n,i){var r;if(!((r=e.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");c_(e,t,n,i)}function _o(e,t,n,i){var r=t.data;const s=t.width,o=s*(t=t.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==o)throw Error("Unsupported channel count: "+r.length/o);return e=new gn([r],n,!1,e.g.i.canvas,e.R,s,t),i?e.clone():e}var Yn=class extends _c{constructor(e,t,n,i){super(e),this.g=e,this.da=t,this.V=n,this.sa=i,this.R=new ld}l(e,t=!0){if("runningMode"in e&&la(this.baseOptions,2,!!e.runningMode&&e.runningMode!=="IMAGE"),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.R.close(),super.close()}};Yn.prototype.close=Yn.prototype.close;var ci=class extends Yn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},qt(e=this.h=new pl,0,1,t=new Ke),Gt(this.h,2,.5),Gt(this.h,3,.3)}get baseOptions(){return Se(this.h,Ke,1)}set baseOptions(e){qt(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&Gt(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&Gt(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}D(e,t){return this.j={detections:[]},_i(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},qi(this,e,n,t),this.j}m(){var e=new Kn;Ve(e,"image_in"),Ve(e,"norm_rect_in"),Ee(e,"detections");const t=new ri;Ci(t,ZS,this.h);const n=new Gn;si(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),ke(n,"IMAGE:image_in"),ke(n,"NORM_RECT:norm_rect_in"),Me(n,"DETECTIONS:detections"),n.o(t),oi(e,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=E0(s),this.j.detections.push(t_(i));Lt(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{Lt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ci.prototype.detectForVideo=ci.prototype.F,ci.prototype.detect=ci.prototype.D,ci.prototype.setOptions=ci.prototype.o,ci.createFromModelPath=async function(e,t){return ye(ci,e,{baseOptions:{modelAssetPath:t}})},ci.createFromModelBuffer=function(e,t){return ye(ci,e,{baseOptions:{modelAssetBuffer:t}})},ci.createFromOptions=function(e,t){return ye(ci,e,t)};var hd=Li([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),dd=Li([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),fd=Li([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),l_=Li([474,475],[475,476],[476,477],[477,474]),pd=Li([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),md=Li([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),u_=Li([469,470],[470,471],[471,472],[472,469]),gd=Li([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),h_=[...hd,...dd,...fd,...pd,...md,...gd],d_=Li([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function am(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Qe=class extends Yn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,qt(e=this.h=new U0,0,1,t=new Ke),this.v=new I0,qt(this.h,0,3,this.v),this.s=new pl,qt(this.h,0,2,this.s),Wi(this.s,4,1),Gt(this.s,2,.5),Gt(this.v,2,.5),Gt(this.h,4,.5)}get baseOptions(){return Se(this.h,Ke,1)}set baseOptions(e){qt(this.h,0,1,e)}o(e){return"numFaces"in e&&Wi(this.s,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&Gt(this.s,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&Gt(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&Gt(this.v,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}D(e,t){return am(this),_i(this,e,t),this.j}F(e,t,n){return am(this),qi(this,e,n,t),this.j}m(){var e=new Kn;Ve(e,"image_in"),Ve(e,"norm_rect"),Ee(e,"face_landmarks");const t=new ri;Ci(t,JS,this.h);const n=new Gn;si(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),ke(n,"IMAGE:image_in"),ke(n,"NORM_RECT:norm_rect"),Me(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),oi(e,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=ya(s),this.j.faceLandmarks.push(ml(i));Lt(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{Lt(this,i)}),this.outputFaceBlendshapes&&(Ee(e,"blendshapes"),Me(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=fl(s),this.j.faceBlendshapes.push(sd(i.g()??[]));Lt(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{Lt(this,i)})),this.outputFacialTransformationMatrixes&&(Ee(e,"face_geometry"),Me(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Se($S(s),HS,2))&&this.j.facialTransformationMatrixes.push({rows:wi(fi(i,1),0)??0,columns:wi(fi(i,2),0)??0,data:us(i,3,Yr,ls()).slice()??[]});Lt(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{Lt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Qe.prototype.detectForVideo=Qe.prototype.F,Qe.prototype.detect=Qe.prototype.D,Qe.prototype.setOptions=Qe.prototype.o,Qe.createFromModelPath=function(e,t){return ye(Qe,e,{baseOptions:{modelAssetPath:t}})},Qe.createFromModelBuffer=function(e,t){return ye(Qe,e,{baseOptions:{modelAssetBuffer:t}})},Qe.createFromOptions=function(e,t){return ye(Qe,e,t)},Qe.FACE_LANDMARKS_LIPS=hd,Qe.FACE_LANDMARKS_LEFT_EYE=dd,Qe.FACE_LANDMARKS_LEFT_EYEBROW=fd,Qe.FACE_LANDMARKS_LEFT_IRIS=l_,Qe.FACE_LANDMARKS_RIGHT_EYE=pd,Qe.FACE_LANDMARKS_RIGHT_EYEBROW=md,Qe.FACE_LANDMARKS_RIGHT_IRIS=u_,Qe.FACE_LANDMARKS_FACE_OVAL=gd,Qe.FACE_LANDMARKS_CONTOURS=h_,Qe.FACE_LANDMARKS_TESSELATION=d_;var Oi=class extends Yn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!0),qt(e=this.j=new F0,0,1,t=new Ke)}get baseOptions(){return Se(this.j,Ke,1)}set baseOptions(e){qt(this.j,0,1,e)}o(e){return super.l(e)}Ra(e,t,n){const i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:n,_i(this,e,i??{}),!this.h)return this.s}m(){var e=new Kn;Ve(e,"image_in"),Ve(e,"norm_rect"),Ee(e,"stylized_image");const t=new ri;Ci(t,QS,this.j);const n=new Gn;si(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),ke(n,"IMAGE:image_in"),ke(n,"NORM_RECT:norm_rect"),Me(n,"STYLIZED_IMAGE:stylized_image"),n.o(t),oi(e,n),this.g.W("stylized_image",(i,r)=>{var s=!this.h,o=i.data,a=i.width;const c=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*c){const l=new Uint8ClampedArray(4*c);for(let u=0;u<c;++u)l[4*u]=o[3*u],l[4*u+1]=o[3*u+1],l[4*u+2]=o[3*u+2],l[4*u+3]=255;o=new ImageData(l,a,i)}else{if(o.length!==4*c)throw Error("Unsupported channel count: "+o.length/c);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new _n([o],!1,!1,this.g.i.canvas,this.R,a,i),this.s=s=s?a.clone():a,this.h&&this.h(s),Lt(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.s=null,this.h&&this.h(null),Lt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Oi.prototype.stylize=Oi.prototype.Ra,Oi.prototype.setOptions=Oi.prototype.o,Oi.createFromModelPath=function(e,t){return ye(Oi,e,{baseOptions:{modelAssetPath:t}})},Oi.createFromModelBuffer=function(e,t){return ye(Oi,e,{baseOptions:{modelAssetBuffer:t}})},Oi.createFromOptions=function(e,t){return ye(Oi,e,t)};var _d=Li([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function cm(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function lm(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function um(e,t=!0){const n=[];for(const r of e){var i=fl(r);e=[];for(const s of i.g())i=t&&fi(s,1)!=null?wi(fi(s,1),0):-1,e.push({score:rn(s,2)??0,index:i,categoryName:Vi(s,3)??"",displayName:Vi(s,4)??""});n.push(e)}return n}var Qn=class extends Yn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],qt(e=this.j=new z0,0,1,t=new Ke),this.s=new nd,qt(this.j,0,2,this.s),this.C=new ed,qt(this.s,0,3,this.C),this.v=new k0,qt(this.s,0,2,this.v),this.h=new tE,qt(this.j,0,3,this.h),Gt(this.v,2,.5),Gt(this.s,4,.5),Gt(this.C,2,.5)}get baseOptions(){return Se(this.j,Ke,1)}set baseOptions(e){qt(this.j,0,1,e)}o(e){var r,s,o,a;if(Wi(this.v,3,e.numHands??1),"minHandDetectionConfidence"in e&&Gt(this.v,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Gt(this.s,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Gt(this.C,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new js,n=t,i=th(e.cannedGesturesClassifierOptions,(r=Se(this.h,js,3))==null?void 0:r.h());qt(n,0,2,i),qt(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((s=Se(this.h,js,3))==null||s.g());return e.customGesturesClassifierOptions?(qt(n=t=new js,0,2,i=th(e.customGesturesClassifierOptions,(o=Se(this.h,js,4))==null?void 0:o.h())),qt(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&((a=Se(this.h,js,4))==null||a.g()),this.l(e)}Ma(e,t){return cm(this),_i(this,e,t),lm(this)}Na(e,t,n){return cm(this),qi(this,e,n,t),lm(this)}m(){var e=new Kn;Ve(e,"image_in"),Ve(e,"norm_rect"),Ee(e,"hand_gestures"),Ee(e,"hand_landmarks"),Ee(e,"world_hand_landmarks"),Ee(e,"handedness");const t=new ri;Ci(t,iE,this.j);const n=new Gn;si(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),ke(n,"IMAGE:image_in"),ke(n,"NORM_RECT:norm_rect"),Me(n,"HAND_GESTURES:hand_gestures"),Me(n,"LANDMARKS:hand_landmarks"),Me(n,"WORLD_LANDMARKS:world_hand_landmarks"),Me(n,"HANDEDNESS:handedness"),n.o(t),oi(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=ya(s);const o=[];for(const a of mr(i,T0,1))o.push({x:rn(a,1)??0,y:rn(a,2)??0,z:rn(a,3)??0,visibility:rn(a,4)??0});this.landmarks.push(o)}Lt(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{Lt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=ro(s);const o=[];for(const a of mr(i,b0,1))o.push({x:rn(a,1)??0,y:rn(a,2)??0,z:rn(a,3)??0,visibility:rn(a,4)??0});this.worldLandmarks.push(o)}Lt(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{Lt(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...um(i,!1)),Lt(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{Lt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...um(i)),Lt(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{Lt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function hm(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}Qn.prototype.recognizeForVideo=Qn.prototype.Na,Qn.prototype.recognize=Qn.prototype.Ma,Qn.prototype.setOptions=Qn.prototype.o,Qn.createFromModelPath=function(e,t){return ye(Qn,e,{baseOptions:{modelAssetPath:t}})},Qn.createFromModelBuffer=function(e,t){return ye(Qn,e,{baseOptions:{modelAssetBuffer:t}})},Qn.createFromOptions=function(e,t){return ye(Qn,e,t)},Qn.HAND_CONNECTIONS=_d;var Wn=class extends Yn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],qt(e=this.h=new nd,0,1,t=new Ke),this.s=new ed,qt(this.h,0,3,this.s),this.j=new k0,qt(this.h,0,2,this.j),Wi(this.j,3,1),Gt(this.j,2,.5),Gt(this.s,2,.5),Gt(this.h,4,.5)}get baseOptions(){return Se(this.h,Ke,1)}set baseOptions(e){qt(this.h,0,1,e)}o(e){return"numHands"in e&&Wi(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&Gt(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Gt(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Gt(this.s,2,e.minHandPresenceConfidence??.5),this.l(e)}D(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],_i(this,e,t),hm(this)}F(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],qi(this,e,n,t),hm(this)}m(){var e=new Kn;Ve(e,"image_in"),Ve(e,"norm_rect"),Ee(e,"hand_landmarks"),Ee(e,"world_hand_landmarks"),Ee(e,"handedness");const t=new ri;Ci(t,nE,this.h);const n=new Gn;si(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),ke(n,"IMAGE:image_in"),ke(n,"NORM_RECT:norm_rect"),Me(n,"LANDMARKS:hand_landmarks"),Me(n,"WORLD_LANDMARKS:world_hand_landmarks"),Me(n,"HANDEDNESS:handedness"),n.o(t),oi(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=ya(s),this.landmarks.push(ml(i));Lt(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{Lt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=ro(s),this.worldLandmarks.push(ea(i));Lt(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{Lt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const c of i){i=fl(c);const l=[];for(const u of i.g())l.push({score:rn(u,2)??0,index:wi(fi(u,1),0)??-1,categoryName:Vi(u,3)??"",displayName:Vi(u,4)??""});a.push(l)}o.call(s,...a),Lt(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{Lt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Wn.prototype.detectForVideo=Wn.prototype.F,Wn.prototype.detect=Wn.prototype.D,Wn.prototype.setOptions=Wn.prototype.o,Wn.createFromModelPath=function(e,t){return ye(Wn,e,{baseOptions:{modelAssetPath:t}})},Wn.createFromModelBuffer=function(e,t){return ye(Wn,e,{baseOptions:{modelAssetBuffer:t}})},Wn.createFromOptions=function(e,t){return ye(Wn,e,t)},Wn.HAND_CONNECTIONS=_d;var f_=Li([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function dm(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function fm(e){try{if(!e.C)return e.h;e.C(e.h)}finally{_l(e)}}function sc(e,t){e=ya(e),t.push(ml(e))}var Xe=class extends Yn{constructor(e,t){super(new gi(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,qt(e=this.j=new Y0,0,1,t=new Ke),this.K=new ed,qt(this.j,0,2,this.K),this.ca=new rE,qt(this.j,0,3,this.ca),this.s=new pl,qt(this.j,0,4,this.s),this.I=new I0,qt(this.j,0,5,this.I),this.v=new W0,qt(this.j,0,6,this.v),this.L=new X0,qt(this.j,0,7,this.L),Gt(this.s,2,.5),Gt(this.s,3,.3),Gt(this.I,2,.5),Gt(this.v,2,.5),Gt(this.v,3,.3),Gt(this.L,2,.5),Gt(this.K,2,.5)}get baseOptions(){return Se(this.j,Ke,1)}set baseOptions(e){qt(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&Gt(this.s,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&Gt(this.s,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&Gt(this.I,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Gt(this.v,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&Gt(this.v,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&Gt(this.L,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Gt(this.K,2,e.minHandLandmarksConfidence??.5),this.l(e)}D(e,t,n){const i=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:n,dm(this),_i(this,e,i),fm(this)}F(e,t,n,i){const r=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,dm(this),qi(this,e,r,t),fm(this)}m(){var e=new Kn;Ve(e,"input_frames_image"),Ee(e,"pose_landmarks"),Ee(e,"pose_world_landmarks"),Ee(e,"face_landmarks"),Ee(e,"left_hand_landmarks"),Ee(e,"left_hand_world_landmarks"),Ee(e,"right_hand_landmarks"),Ee(e,"right_hand_world_landmarks");const t=new ri,n=new kp;Xu(n,1,Eo("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(r,s){if(s!=null)if(Array.isArray(s))Be(r,2,nl(s,Oh,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof dr||ma(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Xu(r,2,wh(s,!1,!1),Es())}}(n,this.j.g());const i=new Gn;si(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Oc(i,8,kp,n),ke(i,"IMAGE:input_frames_image"),Me(i,"POSE_LANDMARKS:pose_landmarks"),Me(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Me(i,"FACE_LANDMARKS:face_landmarks"),Me(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Me(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Me(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Me(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),oi(e,i),gl(this,e),this.g.attachProtoListener("pose_landmarks",(r,s)=>{sc(r,this.h.poseLandmarks),Lt(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{Lt(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var o=this.h.poseWorldLandmarks;r=ro(r),o.push(ea(r)),Lt(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{Lt(this,r)}),this.outputPoseSegmentationMasks&&(Me(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),po(this,"pose_segmentation_mask"),this.g.W("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[_o(this,r,!0,!this.C)],Lt(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],Lt(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{sc(r,this.h.faceLandmarks),Lt(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{Lt(this,r)}),this.outputFaceBlendshapes&&(Ee(e,"extra_blendshapes"),Me(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=fl(r),o.push(sd(r.g()??[]))),Lt(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{Lt(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{sc(r,this.h.leftHandLandmarks),Lt(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{Lt(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var o=this.h.leftHandWorldLandmarks;r=ro(r),o.push(ea(r)),Lt(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{Lt(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{sc(r,this.h.rightHandLandmarks),Lt(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{Lt(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var o=this.h.rightHandWorldLandmarks;r=ro(r),o.push(ea(r)),Lt(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{Lt(this,r)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Xe.prototype.detectForVideo=Xe.prototype.F,Xe.prototype.detect=Xe.prototype.D,Xe.prototype.setOptions=Xe.prototype.o,Xe.createFromModelPath=function(e,t){return ye(Xe,e,{baseOptions:{modelAssetPath:t}})},Xe.createFromModelBuffer=function(e,t){return ye(Xe,e,{baseOptions:{modelAssetBuffer:t}})},Xe.createFromOptions=function(e,t){return ye(Xe,e,t)},Xe.HAND_CONNECTIONS=_d,Xe.POSE_CONNECTIONS=f_,Xe.FACE_LANDMARKS_LIPS=hd,Xe.FACE_LANDMARKS_LEFT_EYE=dd,Xe.FACE_LANDMARKS_LEFT_EYEBROW=fd,Xe.FACE_LANDMARKS_LEFT_IRIS=l_,Xe.FACE_LANDMARKS_RIGHT_EYE=pd,Xe.FACE_LANDMARKS_RIGHT_EYEBROW=md,Xe.FACE_LANDMARKS_RIGHT_IRIS=u_,Xe.FACE_LANDMARKS_FACE_OVAL=gd,Xe.FACE_LANDMARKS_CONTOURS=h_,Xe.FACE_LANDMARKS_TESSELATION=d_;var li=class extends Yn{constructor(e,t){super(new gi(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},qt(e=this.h=new q0,0,1,t=new Ke)}get baseOptions(){return Se(this.h,Ke,1)}set baseOptions(e){qt(this.h,0,1,e)}o(e){return qt(this.h,0,2,th(e,Se(this.h,Jh,2))),this.l(e)}wa(e,t){return this.j={classifications:[]},_i(this,e,t),this.j}xa(e,t,n){return this.j={classifications:[]},qi(this,e,n,t),this.j}m(){var e=new Kn;Ve(e,"input_image"),Ve(e,"norm_rect"),Ee(e,"classifications");const t=new ri;Ci(t,sE,this.h);const n=new Gn;si(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),ke(n,"IMAGE:input_image"),ke(n,"NORM_RECT:norm_rect"),Me(n,"CLASSIFICATIONS:classifications"),n.o(t),oi(e,n),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const o={classifications:mr(s,WS,1).map(a=>{var c;return sd(((c=Se(a,M0,4))==null?void 0:c.g())??[],wi(fi(a,2),0),Vi(a,3))})};return Uc(Hr(s,2))!=null&&(o.timestampMs=wi(Uc(Hr(s,2)),0)),o}(XS(i)),Lt(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{Lt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};li.prototype.classifyForVideo=li.prototype.xa,li.prototype.classify=li.prototype.wa,li.prototype.setOptions=li.prototype.o,li.createFromModelPath=function(e,t){return ye(li,e,{baseOptions:{modelAssetPath:t}})},li.createFromModelBuffer=function(e,t){return ye(li,e,{baseOptions:{modelAssetBuffer:t}})},li.createFromOptions=function(e,t){return ye(li,e,t)};var ti=class extends Yn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!0),this.h=new j0,this.embeddings={embeddings:[]},qt(e=this.h,0,1,t=new Ke)}get baseOptions(){return Se(this.h,Ke,1)}set baseOptions(e){qt(this.h,0,1,e)}o(e){var t=this.h,n=Se(this.h,Yp,2);return n=n?n.clone():new Yp,e.l2Normalize!==void 0?la(n,1,e.l2Normalize):"l2Normalize"in e&&Be(n,1),e.quantize!==void 0?la(n,2,e.quantize):"quantize"in e&&Be(n,2),qt(t,0,2,n),this.l(e)}Da(e,t){return _i(this,e,t),this.embeddings}Ea(e,t,n){return qi(this,e,n,t),this.embeddings}m(){var e=new Kn;Ve(e,"image_in"),Ve(e,"norm_rect"),Ee(e,"embeddings_out");const t=new ri;Ci(t,oE,this.h);const n=new Gn;si(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),ke(n,"IMAGE:image_in"),ke(n,"NORM_RECT:norm_rect"),Me(n,"EMBEDDINGS:embeddings_out"),n.o(t),oi(e,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=jS(i),this.embeddings=function(s){return{embeddings:mr(s,qS,1).map(o=>{var c,l;const a={headIndex:wi(fi(o,3),0)??-1,headName:Vi(o,4)??""};if(Kg(o,Xp,hu(o,1))!==void 0)o=us(o=Se(o,Xp,hu(o,1)),1,Yr,ls()),a.floatEmbedding=o.slice();else{const u=new Uint8Array(0);a.quantizedEmbedding=((l=(c=Se(o,YS,hu(o,2)))==null?void 0:c.ra())==null?void 0:l.ua())??u}return a}),timestampMs:wi(Uc(Hr(s,2)),0)}}(i),Lt(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{Lt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ti.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=Zp(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=Zp(Kp(e.quantizedEmbedding),Kp(t.quantizedEmbedding))}return e},ti.prototype.embedForVideo=ti.prototype.Ea,ti.prototype.embed=ti.prototype.Da,ti.prototype.setOptions=ti.prototype.o,ti.createFromModelPath=function(e,t){return ye(ti,e,{baseOptions:{modelAssetPath:t}})},ti.createFromModelBuffer=function(e,t){return ye(ti,e,{baseOptions:{modelAssetBuffer:t}})},ti.createFromOptions=function(e,t){return ye(ti,e,t)};var ih=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};function pm(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function mm(e){try{const t=new ih(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{_l(e)}}ih.prototype.close=ih.prototype.close;var Vn=class extends Yn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new rd,this.v=new K0,qt(this.h,0,3,this.v),qt(e=this.h,0,1,t=new Ke)}get baseOptions(){return Se(this.h,Ke,1)}set baseOptions(e){qt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?Be(this.h,2,Eo(e.displayNamesLocale)):"displayNamesLocale"in e&&Be(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}J(){(function(e){var n,i;const t=mr(e.ga(),Gn,1).filter(r=>Vi(r,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(e.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((i=(n=Se(t[0],ri,7))==null?void 0:n.l())==null?void 0:i.g())??new Map).forEach((r,s)=>{e.s[Number(s)]=Vi(r,1)})})(this)}ha(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,pm(this),_i(this,e,i),mm(this)}Pa(e,t,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,pm(this),qi(this,e,r,t),mm(this)}Ha(){return this.s}m(){var e=new Kn;Ve(e,"image_in"),Ve(e,"norm_rect");const t=new ri;Ci(t,$0,this.h);const n=new Gn;si(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),ke(n,"IMAGE:image_in"),ke(n,"NORM_RECT:norm_rect"),n.o(t),oi(e,n),gl(this,e),this.outputConfidenceMasks&&(Ee(e,"confidence_masks"),Me(n,"CONFIDENCE_MASKS:confidence_masks"),po(this,"confidence_masks"),this.g.fa("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>_o(this,s,!0,!this.j)),Lt(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],Lt(this,i)})),this.outputCategoryMask&&(Ee(e,"category_mask"),Me(n,"CATEGORY_MASK:category_mask"),po(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=_o(this,i,!1,!this.j),Lt(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,Lt(this,i)})),Ee(e,"quality_scores"),Me(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,Lt(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,Lt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Vn.prototype.getLabels=Vn.prototype.Ha,Vn.prototype.segmentForVideo=Vn.prototype.Pa,Vn.prototype.segment=Vn.prototype.ha,Vn.prototype.setOptions=Vn.prototype.o,Vn.createFromModelPath=function(e,t){return ye(Vn,e,{baseOptions:{modelAssetPath:t}})},Vn.createFromModelBuffer=function(e,t){return ye(Vn,e,{baseOptions:{modelAssetBuffer:t}})},Vn.createFromOptions=function(e,t){return ye(Vn,e,t)};var rh=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};rh.prototype.close=rh.prototype.close;var pE=class extends Ft{constructor(e){super(e)}},Ks=[0,en,-2],Gc=[0,sr,-3,Ze,sr,-1],gm=[0,Gc],_m=[0,Gc,en,-1],gu=class extends Ft{constructor(e){super(e)}},vm=[0,sr,-1,Ze],mE=class extends Ft{constructor(){super()}},xm=class extends Ft{constructor(e){super(e)}},sh=[1,2,3,4,5,6,7,8,9,10,14,15],p_=class extends Ft{constructor(){super()}};p_.prototype.g=dl([0,cn,[0,sh,Le,Gc,Le,[0,Gc,Ks],Le,gm,Le,[0,gm,Ks],Le,vm,Le,[0,sr,-3,Ze,Ri],Le,[0,sr,-3,Ze],Le,[0,Ce,sr,-2,Ze,en,Ze,-1,2,sr,Ks],Le,_m,Le,[0,_m,Ks],sr,Ks,Ce,Le,[0,sr,-3,Ze,Ks,-1],Le,[0,cn,vm]],Ce,[0,Ce,en,-1,Ze]]);var Bi=class extends Yn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new rd,this.s=new K0,qt(this.h,0,3,this.s),qt(e=this.h,0,1,t=new Ke)}get baseOptions(){return Se(this.h,Ke,1)}set baseOptions(e){qt(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}ha(e,t,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new p_;const s=new xm;var o=new pE;if(Wi(o,1,255),qt(s,0,12,o),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var a=new gu;la(a,3,!0),Gt(a,1,t.keypoint.x),Gt(a,2,t.keypoint.y),Jo(s,5,sh,a)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new mE,t.scribble))la(t=new gu,3,!0),Gt(t,1,a.x),Gt(t,2,a.y),Oc(o,1,gu,t);Jo(s,15,sh,o)}Oc(i,1,xm,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),_i(this,e,r);t:{try{const l=new rh(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break t}this.j(l)}finally{_l(this)}c=void 0}return c}m(){var e=new Kn;Ve(e,"image_in"),Ve(e,"roi_in"),Ve(e,"norm_rect_in");const t=new ri;Ci(t,$0,this.h);const n=new Gn;si(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),ke(n,"IMAGE:image_in"),ke(n,"ROI:roi_in"),ke(n,"NORM_RECT:norm_rect_in"),n.o(t),oi(e,n),gl(this,e),this.outputConfidenceMasks&&(Ee(e,"confidence_masks"),Me(n,"CONFIDENCE_MASKS:confidence_masks"),po(this,"confidence_masks"),this.g.fa("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>_o(this,s,!0,!this.j)),Lt(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],Lt(this,i)})),this.outputCategoryMask&&(Ee(e,"category_mask"),Me(n,"CATEGORY_MASK:category_mask"),po(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=_o(this,i,!1,!this.j),Lt(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,Lt(this,i)})),Ee(e,"quality_scores"),Me(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,Lt(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,Lt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Bi.prototype.segment=Bi.prototype.ha,Bi.prototype.setOptions=Bi.prototype.o,Bi.createFromModelPath=function(e,t){return ye(Bi,e,{baseOptions:{modelAssetPath:t}})},Bi.createFromModelBuffer=function(e,t){return ye(Bi,e,{baseOptions:{modelAssetBuffer:t}})},Bi.createFromOptions=function(e,t){return ye(Bi,e,t)};var ui=class extends Yn{constructor(e,t){super(new gi(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},qt(e=this.h=new J0,0,1,t=new Ke)}get baseOptions(){return Se(this.h,Ke,1)}set baseOptions(e){qt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?Be(this.h,2,Eo(e.displayNamesLocale)):"displayNamesLocale"in e&&Be(this.h,2),e.maxResults!==void 0?Wi(this.h,3,e.maxResults):"maxResults"in e&&Be(this.h,3),e.scoreThreshold!==void 0?Gt(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&Be(this.h,4),e.categoryAllowlist!==void 0?Bc(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&Be(this.h,5),e.categoryDenylist!==void 0?Bc(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&Be(this.h,6),this.l(e)}D(e,t){return this.j={detections:[]},_i(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},qi(this,e,n,t),this.j}m(){var e=new Kn;Ve(e,"input_frame_gpu"),Ve(e,"norm_rect"),Ee(e,"detections");const t=new ri;Ci(t,cE,this.h);const n=new Gn;si(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),ke(n,"IMAGE:input_frame_gpu"),ke(n,"NORM_RECT:norm_rect"),Me(n,"DETECTIONS:detections"),n.o(t),oi(e,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=E0(s),this.j.detections.push(t_(i));Lt(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{Lt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ui.prototype.detectForVideo=ui.prototype.F,ui.prototype.detect=ui.prototype.D,ui.prototype.setOptions=ui.prototype.o,ui.createFromModelPath=async function(e,t){return ye(ui,e,{baseOptions:{modelAssetPath:t}})},ui.createFromModelBuffer=function(e,t){return ye(ui,e,{baseOptions:{modelAssetBuffer:t}})},ui.createFromOptions=function(e,t){return ye(ui,e,t)};var oh=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){var e;(e=this.segmentationMasks)==null||e.forEach(t=>{t.close()})}};function ym(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function Mm(e){try{const t=new oh(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.s)return t;e.s(t)}finally{_l(e)}}oh.prototype.close=oh.prototype.close;var ei=class extends Yn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,qt(e=this.h=new Q0,0,1,t=new Ke),this.v=new X0,qt(this.h,0,3,this.v),this.j=new W0,qt(this.h,0,2,this.j),Wi(this.j,4,1),Gt(this.j,2,.5),Gt(this.v,2,.5),Gt(this.h,4,.5)}get baseOptions(){return Se(this.h,Ke,1)}set baseOptions(e){qt(this.h,0,1,e)}o(e){return"numPoses"in e&&Wi(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&Gt(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&Gt(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&Gt(this.v,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}D(e,t,n){const i=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:n,ym(this),_i(this,e,i),Mm(this)}F(e,t,n,i){const r=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,ym(this),qi(this,e,r,t),Mm(this)}m(){var e=new Kn;Ve(e,"image_in"),Ve(e,"norm_rect"),Ee(e,"normalized_landmarks"),Ee(e,"world_landmarks"),Ee(e,"segmentation_masks");const t=new ri;Ci(t,lE,this.h);const n=new Gn;si(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),ke(n,"IMAGE:image_in"),ke(n,"NORM_RECT:norm_rect"),Me(n,"NORM_LANDMARKS:normalized_landmarks"),Me(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),oi(e,n),gl(this,e),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=ya(s),this.landmarks.push(ml(i));Lt(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],Lt(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=ro(s),this.worldLandmarks.push(ea(i));Lt(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],Lt(this,i)}),this.outputSegmentationMasks&&(Me(n,"SEGMENTATION_MASK:segmentation_masks"),po(this,"segmentation_masks"),this.g.fa("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>_o(this,s,!0,!this.s)),Lt(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],Lt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ei.prototype.detectForVideo=ei.prototype.F,ei.prototype.detect=ei.prototype.D,ei.prototype.setOptions=ei.prototype.o,ei.createFromModelPath=function(e,t){return ye(ei,e,{baseOptions:{modelAssetPath:t}})},ei.createFromModelBuffer=function(e,t){return ye(ei,e,{baseOptions:{modelAssetBuffer:t}})},ei.createFromOptions=function(e,t){return ye(ei,e,t)},ei.POSE_CONNECTIONS=f_;const le={active:!1,enabled:!1,x:0,y:0,landmarks:null,ready:!1,fingerCount:0};window.GESTURE=le;let hs=null,ds=null,oc=.5,ac=.5,cc=0;const Sm=.25,gE=.15,Em=2.5,_E=.35,vE=.3,bm=.008,Tm=3,Am=50;let Xo=0,Yo=0;const wm=.88,Rm=.6;let ir=0;const xE=.88;let _u="unknown",ah=0;const yE=5;let fs=null;const Cm=80;let vu=null,xn=null,yc=null,Mc=null,xu=-1;function ME(){const e=document.createElement("style");e.textContent=`
        #gesture-toggle {
            position: fixed; top: 16px; left: 16px; z-index: 3000;
            width: 48px; height: 48px; border-radius: 50%;
            border: 2px solid rgba(255,105,180,0.5);
            background: rgba(30,10,25,0.7);
            backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
            color: #fff; font-size: 22px; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 0 2px 12px rgba(255,105,180,0.2);
            -webkit-tap-highlight-color: transparent;
        }
        #gesture-toggle:hover { transform: scale(1.1); border-color: #ff69b4; }
        #gesture-toggle.active {
            background: rgba(255,105,180,0.3); border-color: #ff69b4;
            box-shadow: 0 0 20px rgba(255,105,180,0.5);
        }
        #gesture-video {
            position: fixed; bottom: 16px; left: 16px; z-index: 2500;
            width: 160px; height: 120px; border-radius: 12px;
            border: 2px solid rgba(255,105,180,0.4);
            background: #000; object-fit: cover;
            display: none !important; /* Ẩn video camera đi */
            transform: scaleX(-1);
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }
        #gesture-cursor {
            position: fixed; z-index: 2800; pointer-events: none;
            width: 28px; height: 28px; border-radius: 50%;
            background: radial-gradient(circle, rgba(255,105,180,0.8) 0%, rgba(255,105,180,0.2) 60%, transparent 100%);
            box-shadow: 0 0 20px rgba(255,105,180,0.6), 0 0 40px rgba(255,105,180,0.3);
            transform: translate(-50%, -50%);
            display: none; transition: opacity 0.15s;
        }
        #gesture-cursor.visible { display: block; }
        #gesture-status {
            position: fixed; top: 72px; left: 16px; z-index: 3000;
            font-size: 11px; color: rgba(255,182,193,0.8);
            font-family: -apple-system, sans-serif;
            background: rgba(30,10,25,0.6); padding: 4px 10px;
            border-radius: 8px; display: none;
            backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        }
        #gesture-status.visible { display: block; }
        #gesture-indicator {
            position: fixed; bottom: 16px; left: 190px; z-index: 2600;
            font-size: 28px; pointer-events: none;
            display: none; transition: opacity 0.2s;
            text-shadow: 0 0 12px rgba(255,105,180,0.8);
            filter: drop-shadow(0 2px 6px rgba(0,0,0,0.5));
        }
        #gesture-indicator.visible { display: block; }
        @media (max-width: 767px) {
            #gesture-video { width: 120px; height: 90px; bottom: 10px; left: 10px; }
            #gesture-toggle { width: 42px; height: 42px; font-size: 18px; top: 10px; left: 10px; }
            #gesture-status { top: 58px; left: 10px; font-size: 10px; }
            #gesture-indicator { left: 140px; bottom: 10px; font-size: 24px; }
        }
    `,document.head.appendChild(e)}function SE(){const e=document.createElement("button");e.id="gesture-toggle",e.type="button",e.innerHTML="✋",e.title="Bật/tắt điều khiển bằng tay",document.body.appendChild(e),xn=document.createElement("video"),xn.id="gesture-video",xn.autoplay=!0,xn.playsInline=!0,xn.muted=!0,document.body.appendChild(xn);const t=document.createElement("div");t.id="gesture-cursor",document.body.appendChild(t);const n=document.createElement("div");n.id="gesture-status",document.body.appendChild(n);const i=document.createElement("div");i.id="gesture-indicator",document.body.appendChild(i),e.addEventListener("click",EE)}function Pr(e,t){const n=document.getElementById("gesture-status");n&&(n.textContent=e,n.classList.toggle("visible",!!t))}function eo(e,t){const n=document.getElementById("gesture-indicator");n&&(n.textContent=e,n.classList.toggle("visible",!!t))}function yu(e){let t=0;return Math.abs(e[4].x-e[3].x)>.04&&Math.abs(e[4].x-e[2].x)>.06&&t++,e[8].y<e[6].y&&t++,e[12].y<e[10].y&&t++,e[16].y<e[14].y&&t++,e[20].y<e[18].y&&t++,t}function ch(e){return{x:(e[0].x+e[9].x)/2,y:(e[0].y+e[9].y)/2}}async function EE(){le.enabled?TE():await bE()}async function bE(){const e=document.getElementById("gesture-toggle");if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){!(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&location.protocol!=="https:"?alert(`📷 Camera yêu cầu HTTPS!

Trình duyệt chặn camera trên HTTP.

✅ Trên PC: Truy cập https://localhost:5173
✅ Trên điện thoại: Truy cập https://`+location.hostname+`:5173
(Bấm "Tiếp tục" nếu trình duyệt cảnh báo chứng chỉ)`):alert(`📷 Trình duyệt không hỗ trợ camera.
Hãy thử dùng Chrome hoặc Safari.`);return}Pr("Đang tải MediaPipe Tasks Vision...",!0);try{const t=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);if(!vu){const i=await rs.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm");vu=await Wn.createFromOptions(i,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:t?"CPU":"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:t?.4:.65,minHandPresenceConfidence:t?.4:.6,minTrackingConfidence:t?.3:.5})}Pr("Đang mở camera...",!0);const n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:320},height:{ideal:240}}});xn.srcObject=n,xn.addEventListener("loadeddata",async()=>{try{let r=function(){if(le.enabled){if(xn.currentTime!==xu){xu=xn.currentTime;try{const s=vu.detectForVideo(xn,performance.now());AE(s)}catch(s){console.error("HandLandmarker detect error:",s)}}Mc=requestAnimationFrame(r)}};var i=r;await xn.play(),le.enabled=!0,hs=null,ds=null,xu=-1,xn.classList.add("visible"),e&&e.classList.add("active"),Pr("✋ Đưa tay trước camera",!0),r(),wE(),setTimeout(()=>Pr("",!1),3e3)}catch(r){console.warn("Video play error:",r),Pr("❌ Không thể phát video camera",!0)}},{once:!0})}catch(t){console.error("Gesture control error:",t);let n=t.message||"Không rõ lỗi";t.name==="NotAllowedError"?n="Bạn cần cho phép truy cập camera":t.name==="NotFoundError"?n="Không tìm thấy camera trên thiết bị":t.name==="NotReadableError"&&(n="Camera đang được sử dụng bởi app khác"),Pr("❌ "+n,!0),alert("📷 Lỗi camera: "+n),setTimeout(()=>Pr("",!1),5e3)}}function TE(){le.enabled=!1,le.active=!1,hs=null,ds=null,yc&&(cancelAnimationFrame(yc),yc=null),Mc&&(cancelAnimationFrame(Mc),Mc=null),xn&&xn.srcObject&&(xn.srcObject.getTracks().forEach(n=>n.stop()),xn.srcObject=null),xn.classList.remove("visible");const e=document.getElementById("gesture-cursor");e&&e.classList.remove("visible");const t=document.getElementById("gesture-toggle");t&&t.classList.remove("active"),eo("",!1),Pr("",!1)}function AE(e){if(!le.enabled)return;const t=document.getElementById("gesture-cursor");let n=[];if(e.landmarks&&e.landmarks.length>0)for(let r=0;r<e.landmarks.length;r++){const s=e.handednesses&&e.handednesses[r]&&e.handednesses[r][0]?e.handednesses[r][0].score:0,o=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)?.4:.65;s>=o&&n.push(e.landmarks[r])}const i=n.length;if(i>0){const r=n[0],s=r[8];if(le.x=(1-s.x)*window.innerWidth,le.y=s.y*window.innerHeight,le.active=!0,le.landmarks=r,le.fingerCount=yu(r),i>=2){const o=n[1],a=yu(r),c=yu(o);if(a>=4&&c>=4){le.landmarks2=o,le.twoHands=!0;const l=ch(r),u=ch(o),h=l.x-u.x,d=l.y-u.y;le.twoHandDist=Math.sqrt(h*h+d*d)}else le.landmarks2=null,le.twoHands=!1,le.twoHandDist=0,fs=null}else le.landmarks2=null,le.twoHands=!1,le.twoHandDist=0,fs=null;t&&(t.style.left=le.x+"px",t.style.top=le.y+"px",t.classList.add("visible"))}else le.active=!1,le.landmarks=null,le.landmarks2=null,le.fingerCount=0,le.twoHands=!1,le.twoHandDist=0,fs=null,hs=null,ds=null,ah=0,Xo=0,Yo=0,ir=0,t&&t.classList.remove("visible"),eo("",!1)}function wE(){function e(){if(!le.enabled||(yc=requestAnimationFrame(e),!le.active||!le.landmarks)||(ah++,ah<yE))return;const n=window._appControls,i=window._appCamera;if(!n||!i)return;const r=le.landmarks,s=ch(r),o=1-s.x,a=s.y;if(le.twoHands&&le.twoHandDist>0){const u=le.twoHandDist;if(fs!==null){const h=u-fs,d=i.position.distanceTo(n.target);if(Math.abs(h)>.005){if(h>0&&d>Tm){const m=new P().subVectors(n.target,i.position).normalize();i.position.addScaledVector(m,h*Cm),n.update()}else if(h<0&&d<Am){const m=new P().subVectors(i.position,n.target).normalize();i.position.addScaledVector(m,Math.abs(h)*Cm),n.update()}}eo("🤲 Zoom 2 tay",!0)}fs=u,hs=o,ds=a;return}fs=null;const c=le.fingerCount;cc+=(c-cc)*gE,oc+=(o-oc)*Sm,ac+=(a-ac)*Sm;let l="mid";if(cc>=4?l="open":cc<=1.2&&(l="closed"),_u==="open"&&l==="closed"?(ir+=_E*.6,eo("✊ Zoom In",!0)):_u==="closed"&&l==="open"?(ir-=vE*.6,eo("🖐 Zoom Out",!0)):eo("👆 Xoay",!0),_u=l,hs!==null&&ds!==null){const u=oc-hs,h=ac-ds;Math.abs(u)>bm&&(Xo+=u*Em*Rm),Math.abs(h)>bm&&(Yo+=h*Em*Rm)}hs=oc,ds=ac}function t(){if(!le.enabled)return;requestAnimationFrame(t);const n=window._appControls,i=window._appCamera;if(!(!n||!i)){if(Math.abs(ir)>.001){const r=i.position.distanceTo(n.target);if(ir>0&&r>Tm){const s=new P().subVectors(n.target,i.position).normalize();i.position.addScaledVector(s,ir)}else if(ir<0&&r<Am){const s=new P().subVectors(i.position,n.target).normalize();i.position.addScaledVector(s,Math.abs(ir))}ir*=xE,n.update()}if(Math.abs(Xo)>5e-4||Math.abs(Yo)>5e-4){const r=new P().subVectors(i.position,n.target),s=new ku().setFromVector3(r);s.theta+=Xo,s.phi+=Yo,s.phi=Math.max(.15,Math.min(Math.PI-.15,s.phi)),r.setFromSpherical(s),i.position.copy(n.target).add(r),i.lookAt(n.target),n.update(),Xo*=wm,Yo*=wm}}}e(),t()}const Mu=new Mg,Pm=new vt;window.applyGestureForce=function(e,t,n,i){if(!le.active||!le.enabled)return;Pm.set(le.x/window.innerWidth*2-1,-(le.y/window.innerHeight)*2+1),Mu.setFromCamera(Pm,i);const r=Mu.ray.origin,s=Mu.ray.direction,o=4,a=3,c=o*o;for(let l=0;l<n;l++){const u=l*3,h=e[u]-r.x,d=e[u+1]-r.y,m=e[u+2]-r.z,g=h*s.x+d*s.y+m*s.z;if(g<0)continue;const y=r.x+s.x*g,p=r.y+s.y*g,f=r.z+s.z*g,E=e[u]-y,x=e[u+1]-p,S=e[u+2]-f,D=E*E+x*x+S*S;if(D<c&&D>.001){const R=Math.sqrt(D),w=a*Math.pow(1-R/o,2),B=1/R;e[u]+=E*B*w*.03,e[u+1]+=x*B*w*.03,e[u+2]+=S*B*w*.03}}};function Lm(){ME(),SE()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Lm):Lm();const Dm={type:"change"},Su={type:"start"},Im={type:"end"},lc=new Xc,Um=new Lr,RE=Math.cos(70*hc.DEG2RAD);class CE extends As{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Dt),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Dt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Dm),i.update(),s=r.NONE},this.update=function(){const A=new P,nt=new ys().setFromUnitVectors(t.up,new P(0,1,0)),It=nt.clone().invert(),C=new P,dt=new ys,O=new P,ct=2*Math.PI;return function(ue=null){const ve=i.object.position;A.copy(ve).sub(i.target),A.applyQuaternion(nt),a.setFromVector3(A),i.autoRotate&&s===r.NONE&&et(v(ue)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Te=i.minAzimuthAngle,Pe=i.maxAzimuthAngle;isFinite(Te)&&isFinite(Pe)&&(Te<-Math.PI?Te+=ct:Te>Math.PI&&(Te-=ct),Pe<-Math.PI?Pe+=ct:Pe>Math.PI&&(Pe-=ct),Te<=Pe?a.theta=Math.max(Te,Math.min(Pe,a.theta)):a.theta=a.theta>(Te+Pe)/2?Math.max(Te,a.theta):Math.min(Pe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let pe=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)a.radius=J(a.radius);else{const me=a.radius;a.radius=J(a.radius*l),pe=me!=a.radius}if(A.setFromSpherical(a),A.applyQuaternion(It),ve.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&R){let me=null;if(i.object.isPerspectiveCamera){const nn=A.length();me=J(nn*l);const Di=nn-me;i.object.position.addScaledVector(S,Di),i.object.updateMatrixWorld(),pe=!!Di}else if(i.object.isOrthographicCamera){const nn=new P(D.x,D.y,0);nn.unproject(i.object);const Di=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),pe=Di!==i.object.zoom;const ji=new P(D.x,D.y,0);ji.unproject(i.object),i.object.position.sub(ji).add(nn),i.object.updateMatrixWorld(),me=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;me!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(me).add(i.object.position):(lc.origin.copy(i.object.position),lc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(lc.direction))<RE?t.lookAt(i.target):(Um.setFromNormalAndCoplanarPoint(i.object.up,i.target),lc.intersectPlane(Um,i.target))))}else if(i.object.isOrthographicCamera){const me=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),me!==i.object.zoom&&(i.object.updateProjectionMatrix(),pe=!0)}return l=1,R=!1,pe||C.distanceToSquared(i.object.position)>o||8*(1-dt.dot(i.object.quaternion))>o||O.distanceToSquared(i.target)>o?(i.dispatchEvent(Dm),C.copy(i.object.position),dt.copy(i.object.quaternion),O.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",$t),i.domElement.removeEventListener("pointerdown",ne),i.domElement.removeEventListener("pointercancel",b),i.domElement.removeEventListener("wheel",Q),i.domElement.removeEventListener("pointermove",be),i.domElement.removeEventListener("pointerup",b),i.domElement.getRootNode().removeEventListener("keydown",it,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Dt),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new ku,c=new ku;let l=1;const u=new P,h=new vt,d=new vt,m=new vt,g=new vt,y=new vt,p=new vt,f=new vt,E=new vt,x=new vt,S=new P,D=new vt;let R=!1;const w=[],B={};let ot=!1;function v(A){return A!==null?2*Math.PI/60*i.autoRotateSpeed*A:2*Math.PI/60/60*i.autoRotateSpeed}function T(A){const nt=Math.abs(A*.01);return Math.pow(.95,i.zoomSpeed*nt)}function et(A){c.theta-=A}function $(A){c.phi-=A}const L=function(){const A=new P;return function(It,C){A.setFromMatrixColumn(C,0),A.multiplyScalar(-It),u.add(A)}}(),K=function(){const A=new P;return function(It,C){i.screenSpacePanning===!0?A.setFromMatrixColumn(C,1):(A.setFromMatrixColumn(C,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(It),u.add(A)}}(),G=function(){const A=new P;return function(It,C){const dt=i.domElement;if(i.object.isPerspectiveCamera){const O=i.object.position;A.copy(O).sub(i.target);let ct=A.length();ct*=Math.tan(i.object.fov/2*Math.PI/180),L(2*It*ct/dt.clientHeight,i.object.matrix),K(2*C*ct/dt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(L(It*(i.object.right-i.object.left)/i.object.zoom/dt.clientWidth,i.object.matrix),K(C*(i.object.top-i.object.bottom)/i.object.zoom/dt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function tt(A,nt){if(!i.zoomToCursor)return;R=!0;const It=i.domElement.getBoundingClientRect(),C=A-It.left,dt=nt-It.top,O=It.width,ct=It.height;D.x=C/O*2-1,D.y=-(dt/ct)*2+1,S.set(D.x,D.y,1).unproject(i.object).sub(i.object.position).normalize()}function J(A){return Math.max(i.minDistance,Math.min(i.maxDistance,A))}function lt(A){h.set(A.clientX,A.clientY)}function Tt(A){tt(A.clientX,A.clientX),f.set(A.clientX,A.clientY)}function Xt(A){g.set(A.clientX,A.clientY)}function V(A){d.set(A.clientX,A.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const nt=i.domElement;et(2*Math.PI*m.x/nt.clientHeight),$(2*Math.PI*m.y/nt.clientHeight),h.copy(d),i.update()}function st(A){E.set(A.clientX,A.clientY),x.subVectors(E,f),x.y>0?X(T(x.y)):x.y<0&&j(T(x.y)),f.copy(E),i.update()}function Mt(A){y.set(A.clientX,A.clientY),p.subVectors(y,g).multiplyScalar(i.panSpeed),G(p.x,p.y),g.copy(y),i.update()}function kt(A){tt(A.clientX,A.clientY),A.deltaY<0?j(T(A.deltaY)):A.deltaY>0&&X(T(A.deltaY)),i.update()}function Pt(A){let nt=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),nt=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),nt=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?et(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),nt=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?et(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),nt=!0;break}nt&&(A.preventDefault(),i.update())}function Et(A){if(w.length===1)h.set(A.pageX,A.pageY);else{const nt=Ct(A),It=.5*(A.pageX+nt.x),C=.5*(A.pageY+nt.y);h.set(It,C)}}function Yt(A){if(w.length===1)g.set(A.pageX,A.pageY);else{const nt=Ct(A),It=.5*(A.pageX+nt.x),C=.5*(A.pageY+nt.y);g.set(It,C)}}function jt(A){const nt=Ct(A),It=A.pageX-nt.x,C=A.pageY-nt.y,dt=Math.sqrt(It*It+C*C);f.set(0,dt)}function F(A){i.enableZoom&&jt(A),i.enablePan&&Yt(A)}function ze(A){i.enableZoom&&jt(A),i.enableRotate&&Et(A)}function Ut(A){if(w.length==1)d.set(A.pageX,A.pageY);else{const It=Ct(A),C=.5*(A.pageX+It.x),dt=.5*(A.pageY+It.y);d.set(C,dt)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const nt=i.domElement;et(2*Math.PI*m.x/nt.clientHeight),$(2*Math.PI*m.y/nt.clientHeight),h.copy(d)}function Nt(A){if(w.length===1)y.set(A.pageX,A.pageY);else{const nt=Ct(A),It=.5*(A.pageX+nt.x),C=.5*(A.pageY+nt.y);y.set(It,C)}p.subVectors(y,g).multiplyScalar(i.panSpeed),G(p.x,p.y),g.copy(y)}function Ot(A){const nt=Ct(A),It=A.pageX-nt.x,C=A.pageY-nt.y,dt=Math.sqrt(It*It+C*C);E.set(0,dt),x.set(0,Math.pow(E.y/f.y,i.zoomSpeed)),X(x.y),f.copy(E);const O=(A.pageX+nt.x)*.5,ct=(A.pageY+nt.y)*.5;tt(O,ct)}function Qt(A){i.enableZoom&&Ot(A),i.enablePan&&Nt(A)}function ee(A){i.enableZoom&&Ot(A),i.enableRotate&&Ut(A)}function ne(A){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",be),i.domElement.addEventListener("pointerup",b)),!ie(A)&&(ht(A),A.pointerType==="touch"?ut(A):_(A)))}function be(A){i.enabled!==!1&&(A.pointerType==="touch"?xt(A):q(A))}function b(A){switch(we(A),w.length){case 0:i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",be),i.domElement.removeEventListener("pointerup",b),i.dispatchEvent(Im),s=r.NONE;break;case 1:const nt=w[0],It=B[nt];ut({pointerId:nt,pageX:It.x,pageY:It.y});break}}function _(A){let nt;switch(A.button){case 0:nt=i.mouseButtons.LEFT;break;case 1:nt=i.mouseButtons.MIDDLE;break;case 2:nt=i.mouseButtons.RIGHT;break;default:nt=-1}switch(nt){case Ps.DOLLY:if(i.enableZoom===!1)return;Tt(A),s=r.DOLLY;break;case Ps.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;Xt(A),s=r.PAN}else{if(i.enableRotate===!1)return;lt(A),s=r.ROTATE}break;case Ps.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;lt(A),s=r.ROTATE}else{if(i.enablePan===!1)return;Xt(A),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Su)}function q(A){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;V(A);break;case r.DOLLY:if(i.enableZoom===!1)return;st(A);break;case r.PAN:if(i.enablePan===!1)return;Mt(A);break}}function Q(A){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(A.preventDefault(),i.dispatchEvent(Su),kt(at(A)),i.dispatchEvent(Im))}function at(A){const nt=A.deltaMode,It={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(nt){case 1:It.deltaY*=16;break;case 2:It.deltaY*=100;break}return A.ctrlKey&&!ot&&(It.deltaY*=10),It}function it(A){A.key==="Control"&&(ot=!0,i.domElement.getRootNode().addEventListener("keyup",Zt,{passive:!0,capture:!0}))}function Zt(A){A.key==="Control"&&(ot=!1,i.domElement.getRootNode().removeEventListener("keyup",Zt,{passive:!0,capture:!0}))}function Dt(A){i.enabled===!1||i.enablePan===!1||Pt(A)}function ut(A){switch(mt(A),w.length){case 1:switch(i.touches.ONE){case Ls.ROTATE:if(i.enableRotate===!1)return;Et(A),s=r.TOUCH_ROTATE;break;case Ls.PAN:if(i.enablePan===!1)return;Yt(A),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ls.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;F(A),s=r.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ze(A),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Su)}function xt(A){switch(mt(A),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ut(A),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Nt(A),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Qt(A),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ee(A),i.update();break;default:s=r.NONE}}function $t(A){i.enabled!==!1&&A.preventDefault()}function ht(A){w.push(A.pointerId)}function we(A){delete B[A.pointerId];for(let nt=0;nt<w.length;nt++)if(w[nt]==A.pointerId){w.splice(nt,1);return}}function ie(A){for(let nt=0;nt<w.length;nt++)if(w[nt]==A.pointerId)return!0;return!1}function mt(A){let nt=B[A.pointerId];nt===void 0&&(nt=new vt,B[A.pointerId]=nt),nt.set(A.pageX,A.pageY)}function Ct(A){const nt=A.pointerId===w[0]?w[1]:w[0];return B[nt]}i.domElement.addEventListener("contextmenu",$t),i.domElement.addEventListener("pointerdown",ne),i.domElement.addEventListener("pointercancel",b),i.domElement.addEventListener("wheel",Q,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",it,{passive:!0,capture:!0}),this.update()}}const m_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ma{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const PE=new mh(-1,1,1,-1,0,1);class LE extends In{constructor(){super(),this.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Sn([0,2,0,0,2,0],2))}}const DE=new LE;class g_{constructor(t){this._mesh=new Ln(DE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,PE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class IE extends Ma{constructor(t,n){super(),this.textureID=n!==void 0?n:"tDiffuse",t instanceof Un?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rc.clone(t.uniforms),this.material=new Un({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new g_(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nm extends Ma{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class UE extends Ma{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class NE{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const i=t.getSize(new vt);this._width=i.width,this._height=i.height,n=new Ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hr}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new IE(m_),this.copyPass.material.blending=ur,this.clock=new yg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nm!==void 0&&(o instanceof Nm?i=!0:o instanceof UE&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class FE extends Ma{constructor(t,n,i=null,r=null,s=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(t,n,i){const r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}}const OE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class vo extends Ma{constructor(t,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=t!==void 0?new vt(t.x,t.y):new vt(256,256),this.clearColor=new fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ai(s,o,{type:hr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Ai(s,o,{type:hr});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new Ai(s,o,{type:hr});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}const a=OE;this.highPassUniforms=Rc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Un({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new vt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=m_;this.copyUniforms=Rc.clone(u.uniforms),this.blendMaterial=new Un({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:bu,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new fe,this.oldClearAlpha=1,this.basic=new rr,this.fsQuad=new g_(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new vt(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(t,n,i,r,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=vo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=vo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const n=[];for(let i=0;i<t;i++)n.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Un({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new vt(.5,.5)},direction:{value:new vt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Un({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}vo.BlurDirectionX=new vt(1,0);vo.BlurDirectionY=new vt(0,1);const __=Math.sqrt(5),BE=1/3,ki=1/6,kE=(__-1)/4,bn=(5-__)/20,ps=e=>Math.floor(e)|0,Eu=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),uc=new Float64Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);function zE(e=Math.random){const t=v_(e),n=new Float64Array(t).map(s=>Eu[s%12*3]),i=new Float64Array(t).map(s=>Eu[s%12*3+1]),r=new Float64Array(t).map(s=>Eu[s%12*3+2]);return function(o,a,c){let l,u,h,d;const m=(o+a+c)*BE,g=ps(o+m),y=ps(a+m),p=ps(c+m),f=(g+y+p)*ki,E=g-f,x=y-f,S=p-f,D=o-E,R=a-x,w=c-S;let B,ot,v,T,et,$;D>=R?R>=w?(B=1,ot=0,v=0,T=1,et=1,$=0):D>=w?(B=1,ot=0,v=0,T=1,et=0,$=1):(B=0,ot=0,v=1,T=1,et=0,$=1):R<w?(B=0,ot=0,v=1,T=0,et=1,$=1):D<w?(B=0,ot=1,v=0,T=0,et=1,$=1):(B=0,ot=1,v=0,T=1,et=1,$=0);const L=D-B+ki,K=R-ot+ki,G=w-v+ki,X=D-T+2*ki,j=R-et+2*ki,tt=w-$+2*ki,J=D-1+3*ki,lt=R-1+3*ki,Tt=w-1+3*ki,Xt=g&255,V=y&255,st=p&255;let Mt=.6-D*D-R*R-w*w;if(Mt<0)l=0;else{const Yt=Xt+t[V+t[st]];Mt*=Mt,l=Mt*Mt*(n[Yt]*D+i[Yt]*R+r[Yt]*w)}let kt=.6-L*L-K*K-G*G;if(kt<0)u=0;else{const Yt=Xt+B+t[V+ot+t[st+v]];kt*=kt,u=kt*kt*(n[Yt]*L+i[Yt]*K+r[Yt]*G)}let Pt=.6-X*X-j*j-tt*tt;if(Pt<0)h=0;else{const Yt=Xt+T+t[V+et+t[st+$]];Pt*=Pt,h=Pt*Pt*(n[Yt]*X+i[Yt]*j+r[Yt]*tt)}let Et=.6-J*J-lt*lt-Tt*Tt;if(Et<0)d=0;else{const Yt=Xt+1+t[V+1+t[st+1]];Et*=Et,d=Et*Et*(n[Yt]*J+i[Yt]*lt+r[Yt]*Tt)}return 32*(l+u+h+d)}}function GE(e=Math.random){const t=v_(e),n=new Float64Array(t).map(o=>uc[o%32*4]),i=new Float64Array(t).map(o=>uc[o%32*4+1]),r=new Float64Array(t).map(o=>uc[o%32*4+2]),s=new Float64Array(t).map(o=>uc[o%32*4+3]);return function(a,c,l,u){let h,d,m,g,y;const p=(a+c+l+u)*kE,f=ps(a+p),E=ps(c+p),x=ps(l+p),S=ps(u+p),D=(f+E+x+S)*bn,R=f-D,w=E-D,B=x-D,ot=S-D,v=a-R,T=c-w,et=l-B,$=u-ot;let L=0,K=0,G=0,X=0;v>T?L++:K++,v>et?L++:G++,v>$?L++:X++,T>et?K++:G++,T>$?K++:X++,et>$?G++:X++;const j=L>=3?1:0,tt=K>=3?1:0,J=G>=3?1:0,lt=X>=3?1:0,Tt=L>=2?1:0,Xt=K>=2?1:0,V=G>=2?1:0,st=X>=2?1:0,Mt=L>=1?1:0,kt=K>=1?1:0,Pt=G>=1?1:0,Et=X>=1?1:0,Yt=v-j+bn,jt=T-tt+bn,F=et-J+bn,ze=$-lt+bn,Ut=v-Tt+2*bn,Nt=T-Xt+2*bn,Ot=et-V+2*bn,Qt=$-st+2*bn,ee=v-Mt+3*bn,ne=T-kt+3*bn,be=et-Pt+3*bn,b=$-Et+3*bn,_=v-1+4*bn,q=T-1+4*bn,Q=et-1+4*bn,at=$-1+4*bn,it=f&255,Zt=E&255,Dt=x&255,ut=S&255;let xt=.6-v*v-T*T-et*et-$*$;if(xt<0)h=0;else{const mt=it+t[Zt+t[Dt+t[ut]]];xt*=xt,h=xt*xt*(n[mt]*v+i[mt]*T+r[mt]*et+s[mt]*$)}let $t=.6-Yt*Yt-jt*jt-F*F-ze*ze;if($t<0)d=0;else{const mt=it+j+t[Zt+tt+t[Dt+J+t[ut+lt]]];$t*=$t,d=$t*$t*(n[mt]*Yt+i[mt]*jt+r[mt]*F+s[mt]*ze)}let ht=.6-Ut*Ut-Nt*Nt-Ot*Ot-Qt*Qt;if(ht<0)m=0;else{const mt=it+Tt+t[Zt+Xt+t[Dt+V+t[ut+st]]];ht*=ht,m=ht*ht*(n[mt]*Ut+i[mt]*Nt+r[mt]*Ot+s[mt]*Qt)}let we=.6-ee*ee-ne*ne-be*be-b*b;if(we<0)g=0;else{const mt=it+Mt+t[Zt+kt+t[Dt+Pt+t[ut+Et]]];we*=we,g=we*we*(n[mt]*ee+i[mt]*ne+r[mt]*be+s[mt]*b)}let ie=.6-_*_-q*q-Q*Q-at*at;if(ie<0)y=0;else{const mt=it+1+t[Zt+1+t[Dt+1+t[ut+1]]];ie*=ie,y=ie*ie*(n[mt]*_+i[mt]*q+r[mt]*Q+s[mt]*at)}return 27*(h+d+m+g+y)}}function v_(e){const n=new Uint8Array(512);for(let i=0;i<512/2;i++)n[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(e()*(256-i)),s=n[i];n[i]=n[r],n[r]=s}for(let i=256;i<512;i++)n[i]=n[i-256];return n}(async()=>{var Cd,Pd,Ld;let e;try{e=await(window.APP_CONFIG_PROMISE||Promise.resolve(window.APP_CONFIG||window.DEFAULT_APP_CONFIG||{}))}catch(I){console.error("Dừng khởi tạo vì không tải được config:",I);return}if(new URLSearchParams(location.search).get("preview")==="1"){if(!document.getElementById("previewModeWatermark")){const U=document.createElement("div");U.id="previewModeWatermark",U.textContent=`Chế độ xem thử
(Preview mode)`,Object.assign(U.style,{position:"fixed",inset:"0",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",pointerEvents:"none",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",fontSize:"min(8vw, 52px)",fontWeight:"700",letterSpacing:"0.3em",textTransform:"uppercase",color:"rgba(255,255,255,0.15)",textShadow:"0 0 30px rgba(0,0,0,0.7)",zIndex:"99998",whiteSpace:"pre-line",transform:"rotate(-25deg)",transformOrigin:"center center"}),document.body.appendChild(U)}if(!document.getElementById("previewBackButton")){const U=document.createElement("button");U.id="previewBackButton",U.textContent="← Quay lại trang tạo",Object.assign(U.style,{position:"fixed",top:"16px",left:"16px",zIndex:"99999",padding:"6px 12px",borderRadius:"999px",border:"1px solid rgba(255,255,255,0.35)",background:"rgba(15,23,42,0.72)",color:"#f9fafb",fontSize:"12px",fontWeight:"500",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",cursor:"pointer",backdropFilter:"blur(10px)",boxShadow:"0 8px 20px rgba(15,23,42,0.6)"}),U.addEventListener("mouseenter",()=>{U.style.background="rgba(15,23,42,0.9)"}),U.addEventListener("mouseleave",()=>{U.style.background="rgba(15,23,42,0.72)"}),U.addEventListener("click",()=>{window.history.length>1?window.history.back():window.location.href="config.html"}),document.body.appendChild(U)}}const i=e.enablePasscode!==!1,r=e.enableMorphEffect!==!1,s=e.enableSphere!==!1,o=e.enableSphereFlyingImages!==!1,a=e.enableLetter!==!1,c=e.enableWebsiteInfo!==!1;let l,u,h,d,m,g,y,p,f,E,x=null,S=null,D=null,R=null,w,B,ot,v,T,et,$,L=!1;const K=typeof window<"u"&&window.innerWidth>=768,G={textShapeSize:K?22:14,morphDuration:2,imageParticleSizeRange:[.042,.058],bloomStrength:1.4,bloomRadius:.7,bloomThreshold:.08};new P;const X=new P;new P,new P;function j(I,U,Y){let z=I.naturalWidth||I.width,rt=I.naturalHeight||I.height;const Z=2600;if(z>Z||rt>Z){const ce=Z/Math.max(z,rt);z=Math.round(z*ce),rt=Math.round(rt*ce)}const ft=document.createElement("canvas");ft.width=z,ft.height=rt;const _t=ft.getContext("2d");_t.imageSmoothingEnabled=!1,_t.drawImage(I,0,0,z,rt);const gt=_t.getImageData(0,0,z,rt).data,bt=[],wt=1;for(let ce=0;ce<rt;ce++)for(let Ne=0;Ne<z;Ne++){const ln=(ce*z+Ne)*4,Fn=gt[ln],Zi=gt[ln+1],Cs=gt[ln+2],xe=gt[ln+3],Oe=(Fn+Zi+Cs)/3;xe>10&&Oe>wt&&bt.push({x:Ne,y:ce,brightness:Oe,r:Fn,g:Zi,b:Cs,key:ce*z+Ne})}if(bt.length===0)return null;bt.sort((ce,Ne)=>ce.key-Ne.key);const Bt=Math.min(U,bt.length),pt=Y/Math.max(z,rt),Rt=z/2,Vt=rt/2,re=Y*.06,ge=new Float32Array(Bt*3),_e=new Float32Array(Bt*3);for(let ce=0;ce<Bt;ce++){const Ne=bt.length<=Bt?ce:Math.floor(ce*bt.length/Bt),ln=bt[Math.min(Ne,bt.length-1)],Fn=(ln.x-Rt)*pt,Zi=(Vt-ln.y)*pt,Cs=ln.brightness/255*re;ge[ce*3]=Fn,ge[ce*3+1]=Zi,ge[ce*3+2]=Cs;let xe=ln.r/255,Oe=ln.g/255,wn=ln.b/255;const Zn=.299*xe+.587*Oe+.114*wn;xe=Zn+(xe-Zn)*1.12,Oe=Zn+(Oe-Zn)*1.12,wn=Zn+(wn-Zn)*1.12;const Kr=.299*xe+.587*Oe+.114*wn;if(Kr>.5){const Uo=1-(Kr-.5)/.5*.4;xe*=Uo,Oe*=Uo,wn*=Uo}else Kr<.2&&(xe=Math.min(1,xe*1.25),Oe=Math.min(1,Oe*1.25),wn=Math.min(1,wn*1.25));_e[ce*3]=Math.max(0,Math.min(1,xe)),_e[ce*3+1]=Math.max(0,Math.min(1,Oe)),_e[ce*3+2]=Math.max(0,Math.min(1,wn))}return{positions:ge,colors:_e}}function tt(I,U,Y){if(!I||!I.trim())return null;const z=800,rt=680,Z=140,ft=170,_t=document.createElement("canvas").getContext("2d");_t.font=`bold ${Z}px "Pacifico", cursive`;const gt=I.trim().split(/\s+/),bt=[];let wt="";for(const xe of gt){const Oe=wt?wt+" "+xe:xe;_t.measureText(Oe).width<=rt?wt=Oe:(wt&&bt.push(wt),wt=(_t.measureText(xe).width<=rt,xe))}wt&&bt.push(wt);const Bt=Math.max(280,bt.length*ft+60),pt=document.createElement("canvas");pt.width=z,pt.height=Bt;const Rt=pt.getContext("2d");Rt.fillStyle="#000",Rt.fillRect(0,0,z,Bt),Rt.fillStyle="#fff",Rt.font=`bold ${Z}px "Pacifico", cursive`,Rt.textAlign="center",Rt.textBaseline="middle";const Vt=Bt/2-(bt.length-1)*(ft/2);bt.forEach((xe,Oe)=>{Rt.fillText(xe,z/2,Vt+Oe*ft)});const re=Rt.getImageData(0,0,z,Bt).data,ge=[];for(let xe=0;xe<Bt;xe++)for(let Oe=0;Oe<z;Oe++){const wn=(xe*z+Oe)*4,Zn=(re[wn]+re[wn+1]+re[wn+2])/3;Zn>20&&ge.push({x:Oe,y:xe,brightness:Zn,key:xe*z+Oe})}if(ge.length===0)return null;ge.sort((xe,Oe)=>xe.key-Oe.key);const _e=Y/Math.max(z,Bt),ce=z/2,Ne=Bt/2,ln=Y*.05,Fn=new Float32Array(U*3),Zi=new Float32Array(U*3),Cs=Y*.6;for(let xe=0;xe<U;xe++){const Oe=Math.min(Math.floor(xe*ge.length/U),ge.length-1),wn=ge[Oe],Zn=(wn.x-ce)*_e,Kr=(Ne-wn.y)*_e,Io=wn.brightness/255*ln;Fn[xe*3]=Zn,Fn[xe*3+1]=Kr,Fn[xe*3+2]=Io;const Uo=Math.sqrt(Zn*Zn+Kr*Kr+Io*Io),R_=hc.mapLinear(Uo,0,Cs,330,360),El=new fe().setHSL(R_/360,.82,.45);Zi[xe*3]=El.r,Zi[xe*3+1]=El.g,Zi[xe*3+2]=El.b}return{positions:Fn,colors:Zi}}let J=0,lt=!1,Tt=0;function Xt(I){const U=I.positions.length/3;J=U,E&&(l.remove(E),p.dispose(),f.dispose()),w=new Float32Array(I.positions),B=new Float32Array(I.positions),ot=[new Float32Array(I.positions)],p=new In,p.setAttribute("position",new Ye(w,3));const[Y,z]=G.imageParticleSizeRange;v=new Float32Array(U),T=new Float32Array(U),et=new Float32Array(U);for(let rt=0;rt<U;rt++)v[rt]=hc.randFloat(Y,z),T[rt]=1,et[rt]=0;p.setAttribute("size",new Ye(v,1)),p.setAttribute("opacity",new Ye(T,1)),p.setAttribute("aEffectStrength",new Ye(et,1)),p.setAttribute("color",new Ye(I.colors,3)),f=new Un({uniforms:{pointTexture:{value:kt()}},vertexShader:`
              attribute float size; attribute float opacity; attribute float aEffectStrength;
              varying vec3 vColor; varying float vOpacity; varying float vEffectStrength;
              void main() {
                   vColor = color; vOpacity = opacity; vEffectStrength = aEffectStrength;
                   vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                   float sizeScale = 1.0 - vEffectStrength * 0.5;
                   gl_PointSize = size * sizeScale * (650.0 / -mvPosition.z);
                   gl_Position = projectionMatrix * mvPosition;
              }`,fragmentShader:`
              uniform sampler2D pointTexture;
              varying vec3 vColor; varying float vOpacity; varying float vEffectStrength;
              void main() {
                   float alpha = texture2D(pointTexture, gl_PointCoord).a;
                   if (alpha < 0.05) discard;
                   gl_FragColor = vec4(vColor, alpha * vOpacity);
              }`,blending:Fr,depthTest:!0,depthWrite:!1,transparent:!0,vertexColors:!0}),E=new Za(p,f),l.add(E)}function V(I){I.positions.length/3;const U=p.attributes.position.array;B=new Float32Array(U),ot=[new Float32Array(I.positions)],p.attributes.color.array.set(I.colors),p.attributes.color.needsUpdate=!0,lt=!0,Tt=m.getElapsedTime()}function st(){let I=0;const U=document.getElementById("progress"),Y=document.getElementById("loading");function z(_t){I+=_t,U.style.width=`${Math.min(100,I)}%`,I>=100&&setTimeout(()=>{Y.style.opacity="0",setTimeout(()=>{Y.style.display="none"},600)},200)}m=new yg,$=zE(()=>Math.random()),GE(()=>Math.random()),l=new eM,l.background=new fe(0),l.fog=new _h(0,.03),z(5),u=new hi(70,window.innerWidth/window.innerHeight,.1,1e3),K?u.position.set(3,4,5):u.position.set(4,5,7),u.lookAt(l.position),z(5);const rt=document.getElementById("webglCanvas");h=new ug({canvas:rt,antialias:!1,alpha:!0,powerPreference:"high-performance"}),h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),z(10),d=new CE(u,h.domElement),d.enableDamping=!0,d.dampingFactor=.05,d.minDistance=1,d.maxDistance=80,d.autoRotate=!1,z(5),l.add(new zM(5587024));const Z=new hp(16773365,1.4);Z.position.set(15,20,10),l.add(Z);const ft=new hp(16758465,.9);ft.position.set(-15,-10,-15),l.add(ft),z(10),Mt(),z(10),z(25),window.addEventListener("resize",we),z(40),L=!0,window._appCamera=u,window._appControls=d,$t(),r?q():s?Md():a&&Ta()}function Mt(){g=new NE(h),g.addPass(new FE(l,u)),y=new vo(new vt(window.innerWidth,window.innerHeight),G.bloomStrength,G.bloomRadius,G.bloomThreshold),g.addPass(y)}function kt(){const U=document.createElement("canvas");U.width=128,U.height=128;const Y=U.getContext("2d"),z=Y.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return z.addColorStop(0,"rgba(255,255,255,1)"),z.addColorStop(.4,"rgba(255,255,255,0.98)"),z.addColorStop(.7,"rgba(255,255,255,0.6)"),z.addColorStop(.92,"rgba(255,255,255,0.15)"),z.addColorStop(1,"rgba(255,255,255,0)"),Y.fillStyle=z,Y.fillRect(0,0,128,128),new $a(U)}const Pt=8e4,Et=5e4,Yt=1e3,jt=2200,F=1200,ze=3800;let Ut=null,Nt=null,Ot=null;function Qt(I){return new Promise(U=>setTimeout(U,I))}function ee(I){const U=I.naturalWidth||I.width,Y=I.naturalHeight||I.height,z=G.textShapeSize,rt=U/Y,Z=rt>=1?z:z*rt,ft=rt>=1?z/rt:z,_t=I.naturalWidth||I.width,gt=I.naturalHeight||I.height,bt=document.createElement("canvas");bt.width=_t,bt.height=gt;const wt=bt.getContext("2d");wt.imageSmoothingEnabled=!0,wt.imageSmoothingQuality="high",wt.drawImage(I,0,0,_t,gt);const Bt=new pa(Z,ft,1,1),pt=new $a(bt);pt.generateMipmaps=!1,pt.minFilter=vn,pt.magFilter=vn,pt.anisotropy=h.capabilities.getMaxAnisotropy(),pt.colorSpace=Si,pt.needsUpdate=!0;const Rt=new rr({map:pt,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1,side:zn,alphaTest:.05}),Vt=new Ln(Bt,Rt);return Vt.position.set(0,0,0),Vt.lookAt(u.position),Vt.renderOrder=10,Vt.layers.set(1),l.add(Vt),Vt}function ne(){Ot=null,Nt&&(l.remove(Nt),Nt.geometry&&Nt.geometry.dispose(),Nt.material&&(Nt.material.map&&Nt.material.map.dispose(),Nt.material.dispose()),Nt=null)}function be(){const I=Et,U=new Float32Array(I*3),Y=new Float32Array(I*3),[z,rt]=G.imageParticleSizeRange,Z=new Float32Array(I),ft=new Float32Array(I),_t=new Float32Array(I);for(let wt=0;wt<I;wt++){const Bt=wt*3,pt=10+Math.random()*50,Rt=Math.random()*Math.PI*2,Vt=Math.acos(2*Math.random()-1);U[Bt]=pt*Math.sin(Vt)*Math.cos(Rt),U[Bt+1]=pt*Math.sin(Vt)*Math.sin(Rt),U[Bt+2]=pt*Math.cos(Vt);const re=330+Math.random()*30,ge=new fe().setHSL(re/360,.8,.4+Math.random()*.2);Y[Bt]=ge.r,Y[Bt+1]=ge.g,Y[Bt+2]=ge.b,Z[wt]=hc.randFloat(z*.8,rt*.8),ft[wt]=.85,_t[wt]=0}R=new Float32Array(U);const gt=new In;gt.setAttribute("position",new Ye(U,3)),gt.setAttribute("color",new Ye(Y,3)),gt.setAttribute("size",new Ye(Z,1)),gt.setAttribute("opacity",new Ye(ft,1)),gt.setAttribute("aEffectStrength",new Ye(_t,1));const bt=new Un({uniforms:{pointTexture:{value:kt()}},vertexShader:`
            attribute float size; attribute float opacity; attribute float aEffectStrength;
            varying vec3 vColor; varying float vOpacity; varying float vEffectStrength;
            void main() {
                vColor = color; vOpacity = opacity; vEffectStrength = aEffectStrength;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                float sizeScale = 1.0 - vEffectStrength * 0.5;
                gl_PointSize = size * sizeScale * (650.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }`,fragmentShader:`
            uniform sampler2D pointTexture;
            varying vec3 vColor; varying float vOpacity; varying float vEffectStrength;
            void main() {
                float alpha = texture2D(pointTexture, gl_PointCoord).a;
                if (alpha < 0.05) discard;
                gl_FragColor = vec4(vColor, alpha * vOpacity);
            }`,blending:Fr,depthTest:!0,depthWrite:!1,transparent:!0,vertexColors:!0});S=gt,D=bt,x=new Za(gt,bt),x.renderOrder=-1,l.add(x)}function b(){const I=Pt,U=new Float32Array(I*3),Y=new Float32Array(I*3),z=8;for(let rt=0;rt<I;){const Z=rt*3,ft=(Math.random()-.5)*3,_t=Math.random()*2.8-1.3,gt=(Math.random()-.5)*1.6,bt=ft*ft,wt=_t*_t,Bt=gt*gt,pt=bt+9/4*Bt+wt-1;if(pt*pt*pt-bt*wt*_t-9/80*Bt*wt*_t<=0){U[Z]=ft*z,U[Z+1]=_t*z,U[Z+2]=gt*z;const Vt=330+Math.random()*30,re=new fe().setHSL(Vt/360,.8,.45+Math.random()*.2);Y[Z]=re.r,Y[Z+1]=re.g,Y[Z+2]=re.b,rt++}}be(),y.strength=.5,y.threshold=.1,Xt({positions:U,colors:Y})}function _(I){const U=tt(I,Pt,G.textShapeSize);if(!U)return;y.strength=.28,y.threshold=.42;const Y=U.positions.length/3;E&&J===Y?V(U):Xt(U)}async function q(){await document.fonts.load('140px "Pacifico"');const I=e.particleImage&&String(e.particleImage).trim()?e.particleImage:null;if(I){const pt=new Image;pt.crossOrigin="anonymous",pt.src=I,await new Promise(Rt=>{pt.onload=Rt,pt.onerror=Rt}),Ut=pt}else Ut=null;b(),at=!0;const U=document.getElementById("start-wrap"),Y=document.getElementById("ring-fill"),z=document.getElementById("start-label");U.style.display="flex";var rt=/Android/i.test(navigator.userAgent||""),Z=null,ft=0,_t=1e3,gt=!1,bt=0;z&&(z.textContent=rt?"Chạm 2 lần để bắt đầu":"Giữ để bắt đầu");function wt(pt){if(pt.preventDefault(),!gt){if(rt){if(bt++,bt===1){z&&(z.textContent="Chạm 2 lần để bắt đầu");return}if(typeof Aa=="function")try{Aa()}catch{}gt=!0,U.style.display="none",Q();return}if(ft=Date.now(),typeof Aa=="function")try{Aa()}catch{}Y.style.transition="stroke-dashoffset 1s linear",Y.style.strokeDashoffset="163.36",Y.offsetHeight,Y.style.strokeDashoffset="0",Z=setInterval(function(){var Rt=Date.now()-ft;Rt>=500&&U.classList.add("held"),Rt>=_t&&(clearInterval(Z),Z=null,gt=!0,U.style.display="none",Q())},100)}}function Bt(pt){if(!rt){var Rt=!!Z;if(Z&&(clearInterval(Z),Z=null),!gt&&(U.classList.remove("held"),Rt)){if(typeof Sd=="function")try{Sd()}catch{}Y.style.transition="stroke-dashoffset 0.3s ease",Y.style.strokeDashoffset="163.36"}}}U.onpointerdown=wt,U.onpointerup=Bt,U.onpointercancel=Bt,U.onpointerleave=Bt}async function Q(){at=!1;const I=K?new P(0,6,18):new P(0,8,26),U=u.position.clone(),Y=2e3,z=Date.now();function rt(){const ft=Date.now()-z,_t=Math.min(1,ft/Y),gt=1-Math.pow(1-_t,3);u.position.lerpVectors(U,I,gt),u.lookAt(l.position),d.target.set(0,0,0),d.update(),_t<1&&requestAnimationFrame(rt)}rt();const Z=e.morphTexts&&e.morphTexts.length?e.morphTexts:["happy","women's day","em iu"];for(const ft of Z)_(ft),await Qt(jt+Yt);if(Ut){const ft=j(Ut,Pt,G.textShapeSize);if(ft){y.strength=.22,y.threshold=.35;const _t=ft.positions.length/3;E&&J===_t?V(ft):Xt(ft)}await Qt(jt+500),await new Promise(_t=>{const gt=document.getElementById("sphere-click-hint");gt&&(gt.innerText="Click để xem ảnh",gt.classList.add("visible"));const bt=h.domElement;let wt=!1,Bt=0,pt=0,Rt=!1;const Vt=Ne=>{var Fn;const ln=((Fn=Ne.touches)==null?void 0:Fn[0])||Ne;Bt=ln.clientX,pt=ln.clientY,wt=!0,Rt=!1},re=Ne=>{var Fn;if(!wt)return;const ln=((Fn=Ne.touches)==null?void 0:Fn[0])||Ne;Math.hypot(ln.clientX-Bt,ln.clientY-pt)>6&&(Rt=!0)},ge=Ne=>{if(wt=!1,Rt){Rt=!1;return}bt.removeEventListener("mousedown",Vt),bt.removeEventListener("mousemove",re),bt.removeEventListener("mouseup",ge),bt.removeEventListener("mouseleave",_e),bt.removeEventListener("touchstart",Vt),bt.removeEventListener("touchmove",re),bt.removeEventListener("touchend",ce),gt&&gt.classList.remove("visible"),_t()},_e=()=>{wt=!1},ce=Ne=>{Ne.cancelable&&Ne.preventDefault(),ge()};bt.addEventListener("mousedown",Vt),bt.addEventListener("mousemove",re),bt.addEventListener("mouseup",ge),bt.addEventListener("mouseleave",_e),bt.addEventListener("touchstart",Vt,{passive:!0}),bt.addEventListener("touchmove",re,{passive:!0}),bt.addEventListener("touchend",ce,{passive:!1})}),lt=!1,Nt=ee(Ut),Ot=m.getElapsedTime(),await Qt(F+ze)}else await Qt(600);xt(),s?Md():a&&(await Qt(3500),Ta())}let at=!1,it=!1,Zt=0,Dt=null,ut=null;function xt(){if(!(!E||J===0)){lt=!1,ne(),it=!0,Zt=m.getElapsedTime(),Dt=new Float32Array(J*3),ut=new Float32Array(B);for(let I=0;I<J;I++){const U=I*3,Y=new P((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.2)*2).normalize(),z=4+Math.random()*14;Dt[U]=Y.x*z,Dt[U+1]=Y.y*z,Dt[U+2]=Y.z*z}}}function $t(){if(requestAnimationFrame($t),!L)return;const I=m.getElapsedTime(),U=m.getDelta();if(d.update(),p&&J>0){const Y=p.attributes.position.array,z=p.attributes.aEffectStrength.array;ht(Y,z,I),window.applyGestureForce&&window.applyGestureForce(Y,B,J,u),p.attributes.position.needsUpdate=!0}if(S&&R){const Y=S.attributes.position.array;for(let z=0;z<Et;z++){const rt=z*3;X.fromArray(R,rt);const Z=.2;Y[rt]=X.x+$(X.x*.4,X.y*.4,I*.18)*Z,Y[rt+1]=X.y+$(X.y*.4,X.z*.4,I*.18)*Z,Y[rt+2]=X.z+$(X.z*.4,X.x*.4,I*.18)*Z}window.applyGestureForce&&window.applyGestureForce(Y,R,Et,u),S.attributes.position.needsUpdate=!0}if(Nt&&Ot!=null&&Nt.material){const Y=(I-Ot)/(F/1e3);Y>=1?(Nt.material.opacity=1,Ot=null):Nt.material.opacity=Y*Y*(3-2*Y)}Te&&b_(),vi==="flying"&&S_(),Te?h.render(l,u):Nt?(u.layers.disable(1),g.render(U),u.layers.enable(1),u.layers.disable(0),h.autoClear=!1,h.render(l,u),h.autoClear=!0,u.layers.enable(0)):g.render(U)}function ht(I,U,Y,z){if(it&&Dt&&ut){const ft=Y-Zt;for(let _t=0;_t<J;_t++){const gt=_t*3;I[gt]=ut[gt]+Dt[gt]*ft,I[gt+1]=ut[gt+1]+Dt[gt+1]*ft,I[gt+2]=ut[gt+2]+Dt[gt+2]*ft}return}if(lt&&ot&&ot[0]){const ft=Math.min(1,(Y-Tt)/G.morphDuration),_t=ft*ft*(3-2*ft),gt=ot[0];for(let bt=0;bt<J;bt++){const wt=bt*3;I[wt]=B[wt]+(gt[wt]-B[wt])*_t,I[wt+1]=B[wt+1]+(gt[wt+1]-B[wt+1])*_t,I[wt+2]=B[wt+2]+(gt[wt+2]-B[wt+2])*_t}ft>=1&&(lt=!1,B=new Float32Array(gt));return}const rt=at?.25:0;let Z=!1;for(let ft=0;ft<J;ft++){const _t=ft*3;X.fromArray(B,_t),rt>0?(I[_t]=X.x+$(X.x*.4,X.y*.4,Y*.18)*rt,I[_t+1]=X.y+$(X.y*.4,X.z*.4,Y*.18)*rt,I[_t+2]=X.z+$(X.z*.4,X.x*.4,Y*.18)*rt):(I[_t]=X.x,I[_t+1]=X.y,I[_t+2]=X.z),U[ft]!==0&&(U[ft]=0,Z=!0)}Z&&(p.attributes.aEffectStrength.needsUpdate=!0)}function we(){u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight),g.setSize(window.innerWidth,window.innerHeight)}const ie=e.sphereImages&&e.sphereImages.length?e.sphereImages:[],mt=6,Ct=5,zt=.15,A=16,nt=2800,It=900,C=5e3,dt=3e3,O=20,ct=.025,St=2e4,ue=6,ve=window.innerWidth<768;let Te=!1,Pe=null,pe=[],me=[],nn,Di,ji,_r=0,vr=!1,xr=0,yr=null,jr=null,Rs=null,Sa=!1,Ea=!1,M=!1,N=!1,H=0;const W=new P;let k=!1,At=0,Ht=0,Kt=0,Jt=[],se=null,te=0,oe=1,Ie=!1,En=0,We=null,Nn=null,Ae=null,ae=!1,Ii=!1,Ue=0,Ui=0,vi="hidden",Mr=0;const Ro=2e3,pn=e.letter&&e.letter.text?e.letter.text:`Happy Women's Day!

Em iu, chúc em luôn xinh đẹp và hạnh phúc.`;function Ki(I){const U=Math.random()*Math.PI*2,Y=Math.acos(2*Math.random()-1);return new P(I*Math.sin(Y)*Math.cos(U),I*Math.cos(Y),I*Math.sin(Y)*Math.sin(U))}function Co(I,U,Y,z,rt,Z,ft){const _t=new In,gt=[],bt=[],wt=[];for(let Bt=0;Bt<=ft;Bt++){const pt=Bt/ft,Rt=z+pt*(rt-z);for(let Vt=0;Vt<=Z;Vt++){const re=Vt/Z,ge=U+re*(Y-U);gt.push(I*Math.sin(Rt)*Math.cos(ge),I*Math.cos(Rt),I*Math.sin(Rt)*Math.sin(ge)),bt.push(re,1-pt)}}for(let Bt=0;Bt<ft;Bt++)for(let pt=0;pt<Z;pt++){const Rt=Bt*(Z+1)+pt,Vt=Rt+1,re=Rt+(Z+1),ge=re+1;wt.push(Rt,re,Vt,Vt,re,ge)}return _t.setAttribute("position",new Sn(gt,3)),_t.setAttribute("uv",new Sn(bt,2)),_t.setIndex(wt),_t.computeVertexNormals(),_t}function Hn(){let I=0;nn=Math.PI*zt,Di=Math.PI*(1-zt),ji=Di-nn;const U=me.length;for(let Y=0;Y<Ct;Y++){const z=nn+Y/Ct*ji,rt=nn+(Y+1)/Ct*ji,Z=(z+rt)/2,ft=2*Math.PI*mt*Math.sin(Z),_t=ji*mt/Ct,gt=Math.max(3,Math.round(ft/_t)),bt=2*Math.PI/gt;for(let wt=0;wt<gt;wt++){const Bt=wt*bt;let pt=me[I%U];I++;const Rt=Co(mt,Bt,Bt+bt,z,rt,12,12),Vt=new rr({map:pt,side:zn,transparent:!0,opacity:1,alphaTest:.05,depthWrite:!1}),re=new Ln(Rt,Vt),ge=Ki(A);re.userData.introStartPos=ge,re.userData.introDelay=Math.random()*It,re.position.copy(ge),Pe.add(re),pe.push(re)}}_r=Date.now()}function Po(I){const U=document.createElement("canvas");U.width=U.height=I;const Y=U.getContext("2d"),z=I/2,rt=Y.createRadialGradient(z,z,0,z,z,z);return rt.addColorStop(0,"rgba(255,105,180,1)"),rt.addColorStop(.2,"rgba(255,182,193,0.85)"),rt.addColorStop(.45,"rgba(255,105,180,0.5)"),rt.addColorStop(.7,"rgba(255,105,180,0.2)"),rt.addColorStop(1,"rgba(255,105,180,0)"),Y.fillStyle=rt,Y.fillRect(0,0,I,I),new $a(U)}function Lo(I,U,Y){const z=new mg,rt=-I/2,Z=-U/2;z.moveTo(rt+Y,Z),z.lineTo(rt+I-Y,Z),z.quadraticCurveTo(rt+I,Z,rt+I,Z+Y),z.lineTo(rt+I,Z+U-Y),z.quadraticCurveTo(rt+I,Z+U,rt+I-Y,Z+U),z.lineTo(rt+Y,Z+U),z.quadraticCurveTo(rt,Z+U,rt,Z+U-Y),z.lineTo(rt,Z+Y),z.quadraticCurveTo(rt,Z,rt+Y,Z);const ft=new yh(z),_t=ft.attributes.position,gt=[];for(let bt=0;bt<_t.count;bt++)gt.push((_t.getX(bt)+I/2)/I,(_t.getY(bt)+U/2)/U);return ft.setAttribute("uv",new Sn(gt,2)),ft}function ba(){se=new cs,l.add(se);const I=me.length,U=Po(128),Y=6,z=.6,rt=[];let Z=0;for(;Z<I;){const ft=(Math.random()-.5)*3,_t=Math.random()*2.8-1.3,gt=(Math.random()-.5)*3.2,bt=ft*ft,wt=_t*_t,Bt=gt*gt,pt=bt+z*Bt+wt-1;pt*pt*pt-bt*wt*_t-z/20*Bt*wt*_t<=0&&(rt.push({x:ft*Y,y:_t*Y,z:gt*Y}),Z++)}for(let ft=0;ft<I;ft++){const _t=me[ft%me.length],gt=1.2+Math.random()*1,bt=1.5*gt,wt=1*gt,Bt=.15*gt,pt=new cs,Rt=new rr({map:U,transparent:!0,opacity:0,side:zn,depthWrite:!1});pt.add(new Ln(Lo(bt*2.2,wt*2.2,Bt*2.2),Rt));const Vt=new rr({map:U,transparent:!0,opacity:0,side:zn,depthWrite:!1});pt.add(new Ln(Lo(bt*1.5,wt*1.5,Bt*1.5),Vt));const re=new rr({map:_t,side:zn,transparent:!0,opacity:0,alphaTest:.05,depthWrite:!1});pt.add(new Ln(Lo(bt,wt,Bt),re));const ge=Math.acos(2*Math.random()-1),_e=Math.random()*Math.PI*2;pt.position.set(mt*.5*Math.sin(ge)*Math.cos(_e),mt*.5*Math.cos(ge),mt*.5*Math.sin(ge)*Math.sin(_e));const ce=rt[ft];pt.userData={startPos:pt.position.clone(),targetPos:new P(ce.x,ce.y,ce.z),floatSpeedY:.3+Math.random()*.5,floatAmplY:.08+Math.random()*.12,floatPhase:Math.random()*Math.PI*2,delay:Math.random()*.5,basePos:new P(ce.x,ce.y,ce.z),iMat:re,gMat:Vt,goMat:Rt,driftSpeed:.003+Math.random()*.003,baseZ:ce.z,imageIndex:ft%me.length},se.add(pt),Jt.push(pt)}}function x_(){if(k)return;if(k=!0,At=0,Kt=0,pe.forEach(U=>{U.material&&(U.material.transparent=!0)}),Ht=Date.now(),d.autoRotate=!1,d.enableRotate=!0,d.maxDistance=30,d.minDistance=2,u.position.set(0,1,6),u.lookAt(0,1,0),d.target.set(0,1,0),d.update(),o&&ba(),a)if(o)document.getElementById("btn-flying-corner").classList.add("visible");else{const U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:radial-gradient(circle,rgba(255,105,180,0.8) 0%,transparent 70%);pointer-events:none;z-index:1000;animation:flashFade 1s ease-out forwards;",document.body.appendChild(U),setTimeout(()=>{U.remove(),Ta()},900);return}const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:radial-gradient(circle,rgba(255,105,180,0.8) 0%,transparent 70%);pointer-events:none;z-index:1000;animation:flashFade 1s ease-out forwards;",document.body.appendChild(I),setTimeout(()=>I.remove(),1e3)}function vd(I){const U=document.getElementById("sphere-click-hint");U&&(U.innerText=I,U.classList.add("visible"),setTimeout(()=>U.classList.remove("visible"),dt))}let Ml=!1;function y_(I){const U=document.getElementById("imageLightbox"),Y=document.getElementById("lightboxImage"),z=document.getElementById("lightboxVideo");if(!U||!Y||!z)return;I.toLowerCase().endsWith(".mp4")?(Y.style.display="none",Y.src="",z.src=I,z.style.display="block",z.play().catch(()=>{})):(z.style.display="none",z.pause(),z.src="",Y.src=I,Y.style.display="block"),U.style.display="flex",requestAnimationFrame(()=>{U.classList.add("visible")}),Ml=!0,d.enabled=!1}function xd(){const I=document.getElementById("imageLightbox"),U=document.getElementById("lightboxVideo");I&&(I.classList.remove("visible"),I.classList.add("hiding"),setTimeout(()=>{I.style.display="none",I.classList.remove("hiding"),U&&(U.pause(),U.src="")},400),Ml=!1,d.enabled=!0)}(Cd=document.getElementById("lightboxClose"))==null||Cd.addEventListener("click",xd),(Pd=document.querySelector(".lightbox-backdrop"))==null||Pd.addEventListener("click",xd);function M_(I,U){if(Ml)return;if(Rs.x=I/window.innerWidth*2-1,Rs.y=-(U/window.innerHeight)*2+1,jr.setFromCamera(Rs,u),Ii){Ii=!1;return}if(k&&Jt.length>0){const z=[];Jt.forEach(Z=>{Z.visible&&Z.children[2]&&z.push(Z.children[2])});const rt=jr.intersectObjects(z,!1);if(rt.length>0){const ft=rt[0].object.parent;if(ft&&ft.userData&&ft.userData.imageIndex!==void 0){const _t=me[ft.userData.imageIndex];if(_t&&_t.userData&&_t.userData.url){y_(_t.userData.url);return}}}return}if(!vr)return;if(jr.intersectObject(yr).length>0)if(document.getElementById("sphere-click-hint").classList.remove("visible"),M)x_();else{M=!0,H=Date.now(),N=!0;const z=u.position.clone().sub(d.target).normalize();W.copy(d.target).add(z.multiplyScalar(d.minDistance))}}function Ta(){var Z;const I=document.getElementById("cupid-letter-overlay"),U=document.getElementById("cupid-flying-img"),Y=document.getElementById("cupid-letter-frame");if(!I||!U||!Y)return;vi="flying",Mr=Date.now(),I.classList.add("visible"),U.style.display="";const z=window.innerWidth*.15,rt=window.innerHeight*.85;U.style.left=z+"px",U.style.top=rt+"px",U.style.opacity="1",U.style.transition="none",Y.classList.remove("visible"),(Z=document.getElementById("letter-envelope-img"))==null||Z.classList.remove("visible")}function S_(){if(vi!=="flying")return;const I=Date.now()-Mr,U=Math.min(1,I/Ro),Y=1-Math.pow(1-U,1.2),z=document.getElementById("cupid-flying-img");if(!z)return;const rt=window.innerWidth*.15,Z=window.innerHeight*.85,ft=window.innerWidth*.5,_t=window.innerHeight*.5;z.style.left=rt+(ft-rt)*Y+"px",z.style.top=Z+(_t-Z)*Y+"px",z.style.transition="none",U>=1&&(vi="letterImage",z.style.transition="opacity 0.5s ease-out",z.style.opacity="0",setTimeout(()=>{var gt;z.style.display="none",(gt=document.getElementById("letter-envelope-img"))==null||gt.classList.add("visible")},500))}function E_(I,U){const Y=pn,z=50,rt=250;let Z=0;function ft(){if(Z<Y.length){const _t=Y[Z];I.insertBefore(document.createTextNode(_t),U),Z++,U.scrollIntoView({block:"nearest",behavior:"auto"}),setTimeout(ft,_t===`
`?rt:z)}else setTimeout(()=>{U&&(U.style.display="none"),I.classList.add("typing-complete");const _t=e.letter&&e.letter.image&&String(e.letter.image).trim()?e.letter.image:"",gt=document.getElementById("letterImageWrap"),bt=document.getElementById("letterInlineImage"),wt=gt==null?void 0:gt.querySelector(".letter-image-caption");if(_t&&gt&&bt){bt.src=_t;const Bt=e.letter&&e.letter.caption!=null?String(e.letter.caption).trim():"";wt&&(wt.textContent=Bt||"",wt.style.display=Bt?"block":"none"),gt.style.display="block",gt.classList.remove("visible"),requestAnimationFrame(()=>{gt.classList.add("visible")})}},400)}setTimeout(ft,300)}function yd(){var rt;if(vi!=="letterImage")return;vi="showingLetter",(rt=document.getElementById("letter-envelope-img"))==null||rt.classList.remove("visible");const I=document.getElementById("cupid-letter-frame"),U=I==null?void 0:I.querySelector(".letter-content"),Y=document.getElementById("letterImageWrap"),z=document.getElementById("letterInlineImage");if(Y&&z&&(Y.style.display="none",Y.classList.remove("visible"),z.src=""),I&&U){U.textContent="",U.classList.remove("typing-complete");const Z=document.createElement("span");Z.className="letter-cursor",U.appendChild(Z),I.classList.add("visible"),E_(U,Z)}}async function Md(){r?await Qt(3400):await Qt(0);const I=document.getElementById("transition-overlay");I.style.opacity="1",await Qt(400),ne(),E&&(l.remove(E),p.dispose(),f.dispose()),E=null,J=0,x&&(l.remove(x),S.dispose(),D.dispose(),x=null,S=null,D=null,R=null),l.fog=null,l.background=new fe(0),y.strength=0,y.threshold=1,h.outputColorSpace=Ti,u.fov=75,u.updateProjectionMatrix(),ve?u.position.set(0,0,16):u.position.set(0,0,10),u.lookAt(0,0,0),d.target.set(0,0,0),d.enableRotate=!0,d.enableZoom=!0,d.enablePan=!1,d.minDistance=ve?5:6,d.maxDistance=ve?24:18,d.autoRotate=!0,d.autoRotateSpeed=.5,d.minPolarAngle=Math.PI*.1,d.maxPolarAngle=Math.PI*.9,d.minAzimuthAngle=-1/0,d.maxAzimuthAngle=1/0,d.update(),document.getElementById("start-wrap").style.display="none",document.getElementById("ui").style.display="none",Pe=new cs,l.add(Pe),yr=new Ln(new Mh(mt*1.1,32,32),new rr({transparent:!0,opacity:0,side:zn,depthWrite:!1})),yr.renderOrder=-1,l.add(yr),jr=new Mg,Rs=new vt;const U=600,Y=new Float32Array(U*3),z=new Float32Array(U*3);for(let pt=0;pt<U;pt++){const Rt=Math.random()*Math.PI*2,Vt=Math.acos(2*Math.random()-1),re=mt*1.2+Math.random()*3;Y[pt*3]=re*Math.sin(Vt)*Math.cos(Rt),Y[pt*3+1]=re*Math.cos(Vt),Y[pt*3+2]=re*Math.sin(Vt)*Math.sin(Rt),z[pt*3]=1,z[pt*3+1]=.4+Math.random()*.3,z[pt*3+2]=.7+Math.random()*.3}const rt=new In;rt.setAttribute("position",new Ye(Y,3)),rt.setAttribute("color",new Ye(z,3));const Z=new Uu({size:.1,vertexColors:!0,transparent:!0,opacity:.8,map:kt(),alphaTest:.05,depthWrite:!1});We=new Za(rt,Z),l.add(We);const ft=new Float32Array(St*3),_t=new Float32Array(St*3);for(let pt=0;pt<St;pt++)ft[pt*3]=(Math.random()-.5)*2*O,ft[pt*3+1]=-O+Math.random()*2*O,ft[pt*3+2]=(Math.random()-.5)*2*O,_t[pt*3]=1,_t[pt*3+1]=.4+Math.random()*.3,_t[pt*3+2]=.7+Math.random()*.3;Ae=ft;const gt=new In;gt.setAttribute("position",new Ye(ft,3)),gt.setAttribute("color",new Ye(_t,3));const bt=new Uu({size:.08,vertexColors:!0,transparent:!0,opacity:.75,map:kt(),alphaTest:.05,depthWrite:!1});Nn=new Za(gt,bt),Nn.renderOrder=998,l.add(Nn);const wt=document.getElementById("sphere-particles-bg");for(let pt=0;pt<30;pt++){const Rt=document.createElement("div");Rt.className="sp-particle",Rt.style.left=Math.random()*100+"%",Rt.style.animationDelay=Math.random()*15+"s",Rt.style.animationDuration=10+Math.random()*10+"s",wt.appendChild(Rt)}wt.style.opacity="1";const Bt=new OM;Bt.crossOrigin="anonymous",Promise.all(ie.map(pt=>new Promise(Rt=>{if(pt.toLowerCase().endsWith(".mp4")){const Vt=document.createElement("video");Vt.src=pt,Vt.crossOrigin="anonymous",Vt.loop=!0,Vt.muted=!0,Vt.playsInline=!0,Vt.autoplay=!0,Vt.play().catch(()=>{});const re=new nM(Vt);re.colorSpace=Ti,re.userData={url:pt},Vt.addEventListener("loadeddata",()=>{Rt(re)}),Vt.addEventListener("error",()=>Rt(null))}else Bt.load(pt,Vt=>{Vt.userData={url:pt},Rt(Vt)},void 0,()=>Rt(null))}))).then(pt=>{if(me=pt.filter(Boolean),!me.length){const _e=document.createElement("canvas");_e.width=_e.height=64,_e.getContext("2d").fillStyle="#ff69b4",_e.getContext("2d").fillRect(0,0,64,64),me=[new $a(_e)]}me.forEach(_e=>{_e.colorSpace=Ti,_e.needsUpdate=!0}),Hn(),Te=!0;const Rt=h.domElement;function Vt(_e){var Ne;const ce=((Ne=_e.touches)==null?void 0:Ne[0])||_e;Ue=ce.clientX,Ui=ce.clientY,ae=!0,Ii=!1}function re(_e){var Ne;const ce=((Ne=_e.touches)==null?void 0:Ne[0])||_e;ae&&Math.hypot(ce.clientX-Ue,ce.clientY-Ui)>ue&&(Ii=!0)}function ge(_e){if(ae=!1,!Ii&&_e){const ce=_e.changedTouches?_e.changedTouches[0]:_e;ce.clientX!==void 0&&M_(ce.clientX,ce.clientY)}Ii=!1}Rt.addEventListener("mousedown",Vt),Rt.addEventListener("mouseup",ge),Rt.addEventListener("mouseleave",()=>{ae=!1}),Rt.addEventListener("mousemove",re),Rt.addEventListener("touchstart",Vt,{passive:!0}),Rt.addEventListener("touchmove",re,{passive:!0}),Rt.addEventListener("touchend",_e=>{_e.cancelable&&_e.preventDefault(),ge(_e)},{passive:!1}),document.getElementById("btn-flying-corner").addEventListener("click",()=>{!k||Ie||(Ie=!0,document.getElementById("sphere-click-hint").classList.remove("visible"),document.getElementById("btn-flying-corner").classList.remove("visible"),wt.style.opacity="0",Ta())}),I.style.opacity="0"})}function b_(){if(En+=.01,vr&&!Sa&&xr>0&&Date.now()-xr>=C&&(Sa=!0,vd("Click vào nhé")),M&&!k&&!Ea&&H>0&&Date.now()-H>=C&&(Ea=!0,vd("Click lần nữa nào")),Nn&&Ae){for(let I=0;I<St;I++)Ae[I*3+1]+=ct,Ae[I*3+1]>O&&(Ae[I*3+1]=-O,Ae[I*3]=(Math.random()-.5)*2*O,Ae[I*3+2]=(Math.random()-.5)*2*O);Nn.geometry.attributes.position.needsUpdate=!0}if(k){At=Math.min(1,At+.018),Kt=Math.min(1,Kt+.04),Pe.children.forEach(z=>{z.material&&(z.material.opacity=Math.max(0,1-Kt),z.material.opacity<=0&&(z.visible=!1))}),yr.visible=!1,se&&(te+=oe*3e-4,te>=.25?(te=.25,oe=-1):te<=-.25&&(te=-.25,oe=1),se.rotation.y=te);const I=10,U=-10,Y=17;Jt.forEach((z,rt)=>{const Z=z.userData,ft=Math.max(0,(At-Z.delay)/(1-Z.delay));if(ft>0){const _t=Math.min(1,ft),gt=1-Math.pow(1-_t,2),bt=Ie?0:Math.sin(En*2*Z.floatSpeedY+Z.floatPhase)*Z.floatAmplY,wt=(Date.now()-Ht)/1e3,Bt=ve?25:18,pt=ve?4:2.5,Rt=ve?7:5;let Vt=Ie?80:wt<pt?Bt:wt<Rt?Bt-(Bt-1)*(wt-pt)/(Rt-pt):1;Z.basePos.y+=Z.driftSpeed*Vt,gt<1?(z.position.x=Z.startPos.x+(Z.targetPos.x-Z.startPos.x)*gt,z.position.z=Z.startPos.z+(Z.targetPos.z-Z.startPos.z)*gt,z.position.y=Z.startPos.y+(Z.targetPos.y-Z.startPos.y)*gt+(Z.basePos.y-Z.targetPos.y)+bt):(z.position.x=Z.basePos.x,z.position.y=Z.basePos.y+bt,z.position.z=Z.baseZ),Ie?Z.basePos.y>=Y&&(z.visible=!1):Z.basePos.y>I&&(Z.basePos.y=U,Z.basePos.x=(Math.random()-.5)*13,Z.baseZ=(Math.random()-.5)*13,gt>=1&&(z.position.x=Z.basePos.x,z.position.y=Z.basePos.y+bt,z.position.z=Z.baseZ));const re=Math.min(1,ft*2),ge=.65+Math.sin(En*3+rt*.5)*.25;Z.iMat.opacity=re,Z.gMat.opacity=Math.min(1,re*ge),Z.goMat.opacity=Math.min(1,re*ge*.75)}})}else vr&&(N&&(u.position.lerp(W,.08),u.position.distanceTo(d.target)<=d.minDistance+.05&&(N=!1)),Pe.rotation.y+=.001,We&&(We.rotation.y+=5e-4,We.rotation.x+=25e-5));if(!vr&&_r>0&&pe.length>0){const I=Date.now()-_r,U=nt/1e3;pe.forEach(Y=>{const z=(Y.userData.introDelay||0)/1e3,rt=Math.min(1,Math.max(0,(I/1e3-z)/U)),Z=1-Math.pow(1-rt,1.4);Y.position.lerpVectors(Y.userData.introStartPos,new P(0,0,0),Z),Y.material&&(Y.material.opacity=1)}),I>nt+It&&(vr=!0,xr=Date.now(),pe.forEach(Y=>{Y.position.set(0,0,0),Y.material&&(Y.material.opacity=1,Y.visible=!0)}))}}(function(){const U=c&&e.appTitle?e.appTitle:"Món Quà Nhỏ";document.title=U;const Y=document.querySelector('meta[name="apple-mobile-web-app-title"]');Y&&(Y.content=U);const z=c&&e.appIcon?e.appIcon:"assets/images/icons/couple.png";document.querySelectorAll('link[rel*="apple-touch-icon"], link[rel="icon"]').forEach(ft=>ft.href=z);const rt=document.querySelector(".passcode-title"),Z=document.querySelector(".passcode-subtitle");rt&&e.passcodeTitle&&(rt.textContent=e.passcodeTitle),Z&&e.passcodeSubtitle&&(Z.textContent=e.passcodeSubtitle)})(),function(){var I=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;if(!I){var U=document.createElement("link");U.rel="manifest",U.id="linkManifest",document.head.appendChild(U);var Y=e.appIcon||"assets/images/icons/couple.png",z=new URL(Y,window.location.href).href,rt=e.appTitle||"Món Quà Nhỏ",Z={name:rt,short_name:rt,description:"Món quà đặc biệt dành riêng cho bạn",start_url:"./",display:"standalone",orientation:"portrait",background_color:"#1b0a1c",theme_color:"#1b0a1c",scope:"./",icons:[{src:z,sizes:"192x192",type:"image/png",purpose:"any maskable"},{src:z,sizes:"512x512",type:"image/png",purpose:"any maskable"}]};try{var ft=new Blob([JSON.stringify(Z)],{type:"application/json"});U.href=URL.createObjectURL(ft)}catch{}}}();const Ni=new Audio(e.bgMusic||"assets/music/bgmucsic.mp3");Ni.loop=!0,Ni.volume=typeof e.bgVolume=="number"?e.bgVolume:.55,Ni.preload="auto";function Aa(){try{Ni.currentTime=0;var I=typeof e.bgVolume=="number"?e.bgVolume:.55;Ni.volume=0,Ni.play(),Ni.volume=I,Ni.play()}catch(U){console.warn("Không thể phát nhạc nền:",U)}}function Sd(){try{Ni.pause(),Ni.currentTime=0}catch(I){console.warn("Không thể dừng nhạc nền:",I)}}const T_=e.passcode||"0308";let Sr="";const Do=document.getElementById("passcodeScreen"),Ed=document.getElementById("passcodeDots"),bd=document.getElementById("passcodeBears"),Td=document.getElementById("bearLeft"),Ad=document.getElementById("bearRight");i?Do.classList.add("visible"):(Do.style.display="none",st());function wd(){Ed.querySelectorAll(".passcode-dot").forEach((U,Y)=>{U.classList.remove("filled","error"),Y<Sr.length&&U.classList.add("filled")})}function Rd(){const I=Sr.length;Td.className=`passcode-bear left pos-${I}`,Ad.className=`passcode-bear right pos-${I}`}function A_(){const I=Ed.querySelectorAll(".passcode-dot");I.forEach(U=>U.classList.add("error")),Td.className="passcode-bear left pos-0",Ad.className="passcode-bear right pos-0",setTimeout(()=>{Sr="",I.forEach(U=>U.classList.remove("filled","error"))},500)}function w_(){bd.classList.add("show-couple"),setTimeout(()=>{Do.classList.add("hiding"),setTimeout(()=>{Do.classList.remove("visible","hiding"),bd.classList.remove("show-couple"),st()},500)},2200)}document.querySelectorAll(".passcode-btn[data-num]").forEach(I=>{I.addEventListener("click",()=>{Sr.length>=4||(Sr+=I.dataset.num,wd(),Rd(),Sr.length===4&&(Sr===T_?w_():A_()))})}),document.getElementById("passcodeCancel").addEventListener("click",()=>{Sr="",wd(),Rd()}),Do.addEventListener("touchmove",I=>{I.touches.length>1&&I.preventDefault()},{passive:!1}),(Ld=document.getElementById("letter-envelope-img"))==null||Ld.addEventListener("click",yd);const Sl=document.getElementById("cupid-letter-overlay");if(Sl){let I=function(U){vi!=="showingLetter"&&(U.target.closest("#cupid-letter-frame")||yd())};var HE=I;Sl.addEventListener("click",I),Sl.addEventListener("touchend",function(U){vi==="letterImage"&&(U.preventDefault(),I(U))},{passive:!1})}})();
