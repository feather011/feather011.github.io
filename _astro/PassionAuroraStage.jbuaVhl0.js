import{r as L,R as I}from"./index.CHQCpkZ9.js";/* empty css                         */const fe={initialSlideId:"photo",slides:[{id:"photo",titleText:"篮球",subtitle:"每个人都是自己生活里的乔丹",titleGradient:"linear-gradient(92deg, #8d3f2c 0%, #c96a4e 100%)",buttons:[],illustration:{type:"text",cards:[{title:"街头",subtitle:"城市缝隙里的偶然"},{title:"自然",subtitle:"山与海的时间切片"},{title:"人像",subtitle:"陌生人此刻的表情"}]},showcase:[{id:"nba-01",title:"NBA",subtitle:"回到球场",image:"/passion/nba-01.jpg",video:"/passion/showcase/nba-01.mp4"}],bg:{fallbackGradient:"linear-gradient(180deg,#f7b9a4 0%,#f3d9c4 55%,#ffffff 100%)",poster:"/passion/slide-photo.jpg"}},{id:"kitchen",titleText:"足球",subtitle:"四年之约",titleGradient:"linear-gradient(92deg, #1d6b52 0%, #2e9b73 100%)",buttons:[],mobilePrimaryButtonIndex:0,illustration:{type:"text",cards:[{title:"快手",subtitle:"十分钟能端上桌"},{title:"家常",subtitle:"反复做也不腻"},{title:"烘焙",subtitle:"秤上的精确游戏"}]},showcase:[{id:"fifa-01",title:"FIFA世界杯",subtitle:"2026",image:"/passion/fifa-cover.png",video:"/passion/showcase/fifa-2026.webm"}],bg:{fallbackGradient:"linear-gradient(180deg,#c9bcf0 0%,#e4dcf9 55%,#ffffff 100%)",poster:"/passion/slide-kitchen.jpg"}},{id:"travel",titleText:"FPS游戏",subtitle:"别瞎想任务开始了",titleGradient:"linear-gradient(92deg, #1d5a78 0%, #3f92b8 100%)",buttons:[],illustration:{type:"text",cards:[{title:"周末",subtitle:"两天的逃离方案"},{title:"长途",subtitle:"一路向前的慢性子"},{title:"一个人",subtitle:"不必等同伴"}]},showcase:[{id:"travel-01",title:"CS2",subtitle:"反恐精英",image:"/passion/images.jpg",video:"/passion/showcase/cs2-launch.webm"}],bg:{fallbackGradient:"linear-gradient(180deg,#8fd0e8 0%,#d6ecf2 55%,#ffffff 100%)",poster:"/passion/slide-travel.jpg"}}]};function H(t){let e=t[0],i=t[1],r=t[2];return Math.sqrt(e*e+i*i+r*r)}function he(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Pe(t,e,i,r){return t[0]=e,t[1]=i,t[2]=r,t}function de(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t}function ge(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t}function Ge(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t}function Ue(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t[2]=e[2]/i[2],t}function re(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function Ve(t,e){let i=e[0]-t[0],r=e[1]-t[1],s=e[2]-t[2];return Math.sqrt(i*i+r*r+s*s)}function ke(t,e){let i=e[0]-t[0],r=e[1]-t[1],s=e[2]-t[2];return i*i+r*r+s*s}function me(t){let e=t[0],i=t[1],r=t[2];return e*e+i*i+r*r}function We(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function $e(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function ce(t,e){let i=e[0],r=e[1],s=e[2],n=i*i+r*r+s*s;return n>0&&(n=1/Math.sqrt(n)),t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function Be(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function pe(t,e,i){let r=e[0],s=e[1],n=e[2],a=i[0],l=i[1],o=i[2];return t[0]=s*o-n*l,t[1]=n*a-r*o,t[2]=r*l-s*a,t}function Xe(t,e,i,r){let s=e[0],n=e[1],a=e[2];return t[0]=s+r*(i[0]-s),t[1]=n+r*(i[1]-n),t[2]=a+r*(i[2]-a),t}function Ye(t,e,i,r,s){const n=Math.exp(-r*s);let a=e[0],l=e[1],o=e[2];return t[0]=i[0]+(a-i[0])*n,t[1]=i[1]+(l-i[1])*n,t[2]=i[2]+(o-i[2])*n,t}function He(t,e,i){let r=e[0],s=e[1],n=e[2],a=i[3]*r+i[7]*s+i[11]*n+i[15];return a=a||1,t[0]=(i[0]*r+i[4]*s+i[8]*n+i[12])/a,t[1]=(i[1]*r+i[5]*s+i[9]*n+i[13])/a,t[2]=(i[2]*r+i[6]*s+i[10]*n+i[14])/a,t}function Ze(t,e,i){let r=e[0],s=e[1],n=e[2],a=i[3]*r+i[7]*s+i[11]*n+i[15];return a=a||1,t[0]=(i[0]*r+i[4]*s+i[8]*n)/a,t[1]=(i[1]*r+i[5]*s+i[9]*n)/a,t[2]=(i[2]*r+i[6]*s+i[10]*n)/a,t}function Qe(t,e,i){let r=e[0],s=e[1],n=e[2];return t[0]=r*i[0]+s*i[3]+n*i[6],t[1]=r*i[1]+s*i[4]+n*i[7],t[2]=r*i[2]+s*i[5]+n*i[8],t}function je(t,e,i){let r=e[0],s=e[1],n=e[2],a=i[0],l=i[1],o=i[2],h=i[3],c=l*n-o*s,f=o*r-a*n,u=a*s-l*r,g=l*u-o*f,d=o*c-a*u,m=a*f-l*c,p=h*2;return c*=p,f*=p,u*=p,g*=2,d*=2,m*=2,t[0]=r+c+g,t[1]=s+f+d,t[2]=n+u+m,t}const Ke=(function(){const t=[0,0,0],e=[0,0,0];return function(i,r){he(t,i),he(e,r),ce(t,t),ce(e,e);let s=Be(t,e);return s>1?0:s<-1?Math.PI:Math.acos(s)}})();function Je(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class N extends Array{constructor(e=0,i=e,r=e){return super(e,i,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,i=e,r=e){return e.length?this.copy(e):(Pe(this,e,i,r),this)}copy(e){return he(this,e),this}add(e,i){return i?de(this,e,i):de(this,this,e),this}sub(e,i){return i?ge(this,e,i):ge(this,this,e),this}multiply(e){return e.length?Ge(this,this,e):re(this,this,e),this}divide(e){return e.length?Ue(this,this,e):re(this,this,1/e),this}inverse(e=this){return $e(this,e),this}len(){return H(this)}distance(e){return e?Ve(this,e):H(this)}squaredLen(){return me(this)}squaredDistance(e){return e?ke(this,e):me(this)}negate(e=this){return We(this,e),this}cross(e,i){return i?pe(this,e,i):pe(this,this,e),this}scale(e){return re(this,this,e),this}normalize(){return ce(this,this),this}dot(e){return Be(this,e)}equals(e){return Je(this,e)}applyMatrix3(e){return Qe(this,this,e),this}applyMatrix4(e){return He(this,this,e),this}scaleRotateMatrix4(e){return Ze(this,this,e),this}applyQuaternion(e){return je(this,this,e),this}angle(e){return Ke(this,e)}lerp(e,i){return Xe(this,this,e,i),this}smoothLerp(e,i,r){return Ye(this,this,e,i,r),this}clone(){return new N(this[0],this[1],this[2])}fromArray(e,i=0){return this[0]=e[i],this[1]=e[i+1],this[2]=e[i+2],this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e}transformDirection(e){const i=this[0],r=this[1],s=this[2];return this[0]=e[0]*i+e[4]*r+e[8]*s,this[1]=e[1]*i+e[5]*r+e[9]*s,this[2]=e[2]*i+e[6]*r+e[10]*s,this.normalize()}}const ve=new N;let et=1,tt=1,xe=!1;class it{constructor(e,i={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=i,this.id=et++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in i)this.addAttribute(r,i[r])}addAttribute(e,i){if(this.attributes[e]=i,i.id=tt++,i.size=i.size||1,i.type=i.type||(i.data.constructor===Float32Array?this.gl.FLOAT:i.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),i.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,i.normalized=i.normalized||!1,i.stride=i.stride||0,i.offset=i.offset||0,i.count=i.count||(i.stride?i.data.byteLength/i.stride:i.data.length/i.size),i.divisor=i.instanced||0,i.needsUpdate=!1,i.usage=i.usage||this.gl.STATIC_DRAW,i.buffer||this.updateAttribute(i),i.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==i.count*i.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,i.count*i.divisor);this.instancedCount=i.count*i.divisor}else e==="index"?this.drawRange.count=i.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,i.count))}updateAttribute(e){const i=!e.buffer;i&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),i?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((i,{name:r,type:s})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}const n=this.attributes[r];this.gl.bindBuffer(n.target,n.buffer),this.glState.boundBuffer=n.buffer;let a=1;s===35674&&(a=2),s===35675&&(a=3),s===35676&&(a=4);const l=n.size/a,o=a===1?0:a*a*4,h=a===1?0:a*4;for(let c=0;c<a;c++)this.gl.vertexAttribPointer(i+c,l,n.type,n.normalized,n.stride+o,n.offset+c*h),this.gl.enableVertexAttribArray(i+c),this.gl.renderer.vertexAttribDivisor(i+c,n.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:i=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((s,{name:n})=>{const a=this.attributes[n];a.needsUpdate&&this.updateAttribute(a)});let r=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(r=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(i,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r,this.instancedCount):this.gl.renderer.drawArraysInstanced(i,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(i,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r):this.gl.drawArrays(i,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!xe)return console.warn("No position buffer data found to compute bounds"),xe=!0}computeBoundingBox(e){e||(e=this.getPosition());const i=e.data,r=e.size;this.bounds||(this.bounds={min:new N,max:new N,center:new N,scale:new N,radius:1/0});const s=this.bounds.min,n=this.bounds.max,a=this.bounds.center,l=this.bounds.scale;s.set(1/0),n.set(-1/0);for(let o=0,h=i.length;o<h;o+=r){const c=i[o],f=i[o+1],u=i[o+2];s.x=Math.min(c,s.x),s.y=Math.min(f,s.y),s.z=Math.min(u,s.z),n.x=Math.max(c,n.x),n.y=Math.max(f,n.y),n.z=Math.max(u,n.z)}l.sub(n,s),a.add(s,n).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const i=e.data,r=e.size;this.bounds||this.computeBoundingBox(e);let s=0;for(let n=0,a=i.length;n<a;n+=r)ve.fromArray(i,n),s=Math.max(s,this.bounds.center.squaredDistance(ve));this.bounds.radius=Math.sqrt(s)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let rt=1;const ye={};class K{constructor(e,{vertex:i,fragment:r,uniforms:s={},transparent:n=!1,cullFace:a=e.BACK,frontFace:l=e.CCW,depthTest:o=!0,depthWrite:h=!0,depthFunc:c=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=s,this.id=rt++,i||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=n,this.cullFace=a,this.frontFace=l,this.depthTest=o,this.depthWrite=h,this.depthFunc=c,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:i,fragment:r})}setShaders({vertex:e,fragment:i}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${we(e)}`)),i&&(this.gl.shaderSource(this.fragmentShader,i),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${we(i)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<r;a++){let l=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(l,this.gl.getUniformLocation(this.program,l.name));const o=l.name.match(/(\w+)/g);l.uniformName=o[0],l.nameComponents=o.slice(1)}this.attributeLocations=new Map;const s=[],n=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const l=this.gl.getActiveAttrib(this.program,a),o=this.gl.getAttribLocation(this.program,l.name);o!==-1&&(s[o]=l.name,this.attributeLocations.set(l,o))}this.attributeOrder=s.join("")}setBlendFunc(e,i,r,s){this.blendFunc.src=e,this.blendFunc.dst=i,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=s,e&&(this.transparent=!0)}setBlendEquation(e,i){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=i}setStencilFunc(e,i,r){this.stencilRef=i,this.stencilFunc.func=e,this.stencilFunc.ref=i,this.stencilFunc.mask=r}setStencilOp(e,i,r){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=i,this.stencilOp.depthPass=r}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let i=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((s,n)=>{let a=this.uniforms[n.uniformName];for(const l of n.nameComponents){if(!a)break;if(l in a)a=a[l];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return be(`Active uniform ${n.name} has not been supplied`);if(a&&a.value===void 0)return be(`${n.name} uniform is missing a value parameter`);if(a.value.texture)return i=i+1,a.value.update(i),se(this.gl,n.type,s,i);if(a.value.length&&a.value[0].texture){const l=[];return a.value.forEach(o=>{i=i+1,o.update(i),l.push(i)}),se(this.gl,n.type,s,l)}se(this.gl,n.type,s,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function se(t,e,i,r){r=r.length?st(r):r;const s=t.renderer.state.uniformLocations.get(i);if(r.length)if(s===void 0||s.length!==r.length)t.renderer.state.uniformLocations.set(i,r.slice(0));else{if(nt(s,r))return;s.set?s.set(r):at(s,r),t.renderer.state.uniformLocations.set(i,s)}else{if(s===r)return;t.renderer.state.uniformLocations.set(i,r)}switch(e){case 5126:return r.length?t.uniform1fv(i,r):t.uniform1f(i,r);case 35664:return t.uniform2fv(i,r);case 35665:return t.uniform3fv(i,r);case 35666:return t.uniform4fv(i,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return r.length?t.uniform1iv(i,r):t.uniform1i(i,r);case 35671:case 35667:return t.uniform2iv(i,r);case 35672:case 35668:return t.uniform3iv(i,r);case 35673:case 35669:return t.uniform4iv(i,r);case 35674:return t.uniformMatrix2fv(i,!1,r);case 35675:return t.uniformMatrix3fv(i,!1,r);case 35676:return t.uniformMatrix4fv(i,!1,r)}}function we(t){let e=t.split(`
`);for(let i=0;i<e.length;i++)e[i]=i+1+": "+e[i];return e.join(`
`)}function st(t){const e=t.length,i=t[0].length;if(i===void 0)return t;const r=e*i;let s=ye[r];s||(ye[r]=s=new Float32Array(r));for(let n=0;n<e;n++)s.set(t[n],n*i);return s}function nt(t,e){if(t.length!==e.length)return!1;for(let i=0,r=t.length;i<r;i++)if(t[i]!==e[i])return!1;return!0}function at(t,e){for(let i=0,r=t.length;i<r;i++)t[i]=e[i]}let ne=0;function be(t){ne>100||(console.warn(t),ne++,ne>100&&console.warn("More than 100 program warnings - stopping logs."))}const ae=new N;let lt=1;class J{constructor({canvas:e=document.createElement("canvas"),width:i=300,height:r=150,dpr:s=1,alpha:n=!1,depth:a=!0,stencil:l=!1,antialias:o=!1,premultipliedAlpha:h=!1,preserveDrawingBuffer:c=!1,powerPreference:f="default",autoClear:u=!0,webgl:g=2}={}){const d={alpha:n,depth:a,stencil:l,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:f};this.dpr=s,this.alpha=n,this.color=!0,this.depth=a,this.stencil=l,this.premultipliedAlpha=h,this.autoClear=u,this.id=lt++,g===2&&(this.gl=e.getContext("webgl2",d)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",d)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(i,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,i){this.width=e,this.height=i,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=i*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:i+"px"})}setViewport(e,i,r=0,s=0){this.state.viewport.width===e&&this.state.viewport.height===i||(this.state.viewport.width=e,this.state.viewport.height=i,this.state.viewport.x=r,this.state.viewport.y=s,this.gl.viewport(r,s,e,i))}setScissor(e,i,r=0,s=0){this.gl.scissor(r,s,e,i)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,i,r,s){this.state.blendFunc.src===e&&this.state.blendFunc.dst===i&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===s||(this.state.blendFunc.src=e,this.state.blendFunc.dst=i,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=s,r!==void 0?this.gl.blendFuncSeparate(e,i,r,s):this.gl.blendFunc(e,i))}setBlendEquation(e,i){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===i)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=i,i!==void 0?this.gl.blendEquationSeparate(e,i):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,i,r){this.state.stencilFunc===e&&this.state.stencilRef===i&&this.state.stencilFuncMask===r||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=i||0,this.state.stencilFuncMask=r||0,this.gl.stencilFunc(e||this.gl.ALWAYS,i||0,r||0))}setStencilOp(e,i,r){this.state.stencilFail===e&&this.state.stencilDepthFail===i&&this.state.stencilDepthPass===r||(this.state.stencilFail=e,this.state.stencilDepthFail=i,this.state.stencilDepthPass=r,this.gl.stencilOp(e,i,r))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:i=null}={}){this.state.framebuffer!==i&&(this.state.framebuffer=i,this.gl.bindFramebuffer(e,i))}getExtension(e,i,r){return i&&this.gl[i]?this.gl[i].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),i?this.extensions[e]?this.extensions[e][r].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,i){return e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.program.id!==i.program.id?e.program.id-i.program.id:e.zDepth!==i.zDepth?e.zDepth-i.zDepth:i.id-e.id}sortTransparent(e,i){return e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.zDepth!==i.zDepth?i.zDepth-e.zDepth:i.id-e.id}sortUI(e,i){return e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.program.id!==i.program.id?e.program.id-i.program.id:i.id-e.id}getRenderList({scene:e,camera:i,frustumCull:r,sort:s}){let n=[];if(i&&r&&i.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(r&&a.frustumCulled&&i&&!i.frustumIntersectsMesh(a)||n.push(a))}),s){const a=[],l=[],o=[];n.forEach(h=>{h.program.transparent?h.program.depthTest?l.push(h):o.push(h):a.push(h),h.zDepth=0,!(h.renderOrder!==0||!h.program.depthTest||!i)&&(h.worldMatrix.getTranslation(ae),ae.applyMatrix4(i.projectionViewMatrix),h.zDepth=ae.z)}),a.sort(this.sortOpaque),l.sort(this.sortTransparent),o.sort(this.sortUI),n=a.concat(l,o)}return n}render({scene:e,camera:i,target:r=null,update:s=!0,sort:n=!0,frustumCull:a=!0,clear:l}){r===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(l||this.autoClear&&l!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!r||r.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),s&&e.updateMatrixWorld(),i&&i.updateMatrixWorld(),this.getRenderList({scene:e,camera:i,frustumCull:a,sort:n}).forEach(h=>{h.draw({camera:i})})}}function ot(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function ht(t,e,i,r,s){return t[0]=e,t[1]=i,t[2]=r,t[3]=s,t}function ct(t,e){let i=e[0],r=e[1],s=e[2],n=e[3],a=i*i+r*r+s*s+n*n;return a>0&&(a=1/Math.sqrt(a)),t[0]=i*a,t[1]=r*a,t[2]=s*a,t[3]=n*a,t}function ut(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function ft(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function dt(t,e,i){i=i*.5;let r=Math.sin(i);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(i),t}function Me(t,e,i){let r=e[0],s=e[1],n=e[2],a=e[3],l=i[0],o=i[1],h=i[2],c=i[3];return t[0]=r*c+a*l+s*h-n*o,t[1]=s*c+a*o+n*l-r*h,t[2]=n*c+a*h+r*o-s*l,t[3]=a*c-r*l-s*o-n*h,t}function gt(t,e,i){i*=.5;let r=e[0],s=e[1],n=e[2],a=e[3],l=Math.sin(i),o=Math.cos(i);return t[0]=r*o+a*l,t[1]=s*o+n*l,t[2]=n*o-s*l,t[3]=a*o-r*l,t}function mt(t,e,i){i*=.5;let r=e[0],s=e[1],n=e[2],a=e[3],l=Math.sin(i),o=Math.cos(i);return t[0]=r*o-n*l,t[1]=s*o+a*l,t[2]=n*o+r*l,t[3]=a*o-s*l,t}function pt(t,e,i){i*=.5;let r=e[0],s=e[1],n=e[2],a=e[3],l=Math.sin(i),o=Math.cos(i);return t[0]=r*o+s*l,t[1]=s*o-r*l,t[2]=n*o+a*l,t[3]=a*o-n*l,t}function vt(t,e,i,r){let s=e[0],n=e[1],a=e[2],l=e[3],o=i[0],h=i[1],c=i[2],f=i[3],u,g,d,m,p;return g=s*o+n*h+a*c+l*f,g<0&&(g=-g,o=-o,h=-h,c=-c,f=-f),1-g>1e-6?(u=Math.acos(g),d=Math.sin(u),m=Math.sin((1-r)*u)/d,p=Math.sin(r*u)/d):(m=1-r,p=r),t[0]=m*s+p*o,t[1]=m*n+p*h,t[2]=m*a+p*c,t[3]=m*l+p*f,t}function xt(t,e){let i=e[0],r=e[1],s=e[2],n=e[3],a=i*i+r*r+s*s+n*n,l=a?1/a:0;return t[0]=-i*l,t[1]=-r*l,t[2]=-s*l,t[3]=n*l,t}function yt(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function wt(t,e){let i=e[0]+e[4]+e[8],r;if(i>0)r=Math.sqrt(i+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{let s=0;e[4]>e[0]&&(s=1),e[8]>e[s*3+s]&&(s=2);let n=(s+1)%3,a=(s+2)%3;r=Math.sqrt(e[s*3+s]-e[n*3+n]-e[a*3+a]+1),t[s]=.5*r,r=.5/r,t[3]=(e[n*3+a]-e[a*3+n])*r,t[n]=(e[n*3+s]+e[s*3+n])*r,t[a]=(e[a*3+s]+e[s*3+a])*r}return t}function bt(t,e,i="YXZ"){let r=Math.sin(e[0]*.5),s=Math.cos(e[0]*.5),n=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),l=Math.sin(e[2]*.5),o=Math.cos(e[2]*.5);return i==="XYZ"?(t[0]=r*a*o+s*n*l,t[1]=s*n*o-r*a*l,t[2]=s*a*l+r*n*o,t[3]=s*a*o-r*n*l):i==="YXZ"?(t[0]=r*a*o+s*n*l,t[1]=s*n*o-r*a*l,t[2]=s*a*l-r*n*o,t[3]=s*a*o+r*n*l):i==="ZXY"?(t[0]=r*a*o-s*n*l,t[1]=s*n*o+r*a*l,t[2]=s*a*l+r*n*o,t[3]=s*a*o-r*n*l):i==="ZYX"?(t[0]=r*a*o-s*n*l,t[1]=s*n*o+r*a*l,t[2]=s*a*l-r*n*o,t[3]=s*a*o+r*n*l):i==="YZX"?(t[0]=r*a*o+s*n*l,t[1]=s*n*o+r*a*l,t[2]=s*a*l-r*n*o,t[3]=s*a*o-r*n*l):i==="XZY"&&(t[0]=r*a*o-s*n*l,t[1]=s*n*o-r*a*l,t[2]=s*a*l+r*n*o,t[3]=s*a*o+r*n*l),t}const Mt=ot,Ct=ht,At=ut,Et=ct;class St extends Array{constructor(e=0,i=0,r=0,s=1){super(e,i,r,s),this.onChange=()=>{},this._target=this;const n=["0","1","2","3"];return new Proxy(this,{set(a,l){const o=Reflect.set(...arguments);return o&&n.includes(l)&&a.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return ft(this._target),this.onChange(),this}set(e,i,r,s){return e.length?this.copy(e):(Ct(this._target,e,i,r,s),this.onChange(),this)}rotateX(e){return gt(this._target,this._target,e),this.onChange(),this}rotateY(e){return mt(this._target,this._target,e),this.onChange(),this}rotateZ(e){return pt(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return xt(this._target,e),this.onChange(),this}conjugate(e=this._target){return yt(this._target,e),this.onChange(),this}copy(e){return Mt(this._target,e),this.onChange(),this}normalize(e=this._target){return Et(this._target,e),this.onChange(),this}multiply(e,i){return i?Me(this._target,e,i):Me(this._target,this._target,e),this.onChange(),this}dot(e){return At(this._target,e)}fromMatrix3(e){return wt(this._target,e),this.onChange(),this}fromEuler(e,i){return bt(this._target,e,e.order),i||this.onChange(),this}fromAxisAngle(e,i){return dt(this._target,e,i),this.onChange(),this}slerp(e,i){return vt(this._target,this._target,e,i),this.onChange(),this}fromArray(e,i=0){return this._target[0]=e[i],this._target[1]=e[i+1],this._target[2]=e[i+2],this._target[3]=e[i+3],this.onChange(),this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e[i+3]=this[3],e}}const _t=1e-6;function Ft(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function zt(t,e,i,r,s,n,a,l,o,h,c,f,u,g,d,m,p){return t[0]=e,t[1]=i,t[2]=r,t[3]=s,t[4]=n,t[5]=a,t[6]=l,t[7]=o,t[8]=h,t[9]=c,t[10]=f,t[11]=u,t[12]=g,t[13]=d,t[14]=m,t[15]=p,t}function Rt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Lt(t,e){let i=e[0],r=e[1],s=e[2],n=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],f=e[9],u=e[10],g=e[11],d=e[12],m=e[13],p=e[14],v=e[15],w=i*l-r*a,x=i*o-s*a,y=i*h-n*a,b=r*o-s*l,M=r*h-n*l,E=s*h-n*o,z=c*m-f*d,S=c*p-u*d,F=c*v-g*d,R=f*p-u*m,C=f*v-g*m,_=u*v-g*p,A=w*_-x*C+y*R+b*F-M*S+E*z;return A?(A=1/A,t[0]=(l*_-o*C+h*R)*A,t[1]=(s*C-r*_-n*R)*A,t[2]=(m*E-p*M+v*b)*A,t[3]=(u*M-f*E-g*b)*A,t[4]=(o*F-a*_-h*S)*A,t[5]=(i*_-s*F+n*S)*A,t[6]=(p*y-d*E-v*x)*A,t[7]=(c*E-u*y+g*x)*A,t[8]=(a*C-l*F+h*z)*A,t[9]=(r*F-i*C-n*z)*A,t[10]=(d*M-m*y+v*w)*A,t[11]=(f*y-c*M-g*w)*A,t[12]=(l*S-a*R-o*z)*A,t[13]=(i*R-r*S+s*z)*A,t[14]=(m*x-d*b-p*w)*A,t[15]=(c*b-f*x+u*w)*A,t):null}function Ie(t){let e=t[0],i=t[1],r=t[2],s=t[3],n=t[4],a=t[5],l=t[6],o=t[7],h=t[8],c=t[9],f=t[10],u=t[11],g=t[12],d=t[13],m=t[14],p=t[15],v=e*a-i*n,w=e*l-r*n,x=e*o-s*n,y=i*l-r*a,b=i*o-s*a,M=r*o-s*l,E=h*d-c*g,z=h*m-f*g,S=h*p-u*g,F=c*m-f*d,R=c*p-u*d,C=f*p-u*m;return v*C-w*R+x*F+y*S-b*z+M*E}function Ce(t,e,i){let r=e[0],s=e[1],n=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],f=e[8],u=e[9],g=e[10],d=e[11],m=e[12],p=e[13],v=e[14],w=e[15],x=i[0],y=i[1],b=i[2],M=i[3];return t[0]=x*r+y*l+b*f+M*m,t[1]=x*s+y*o+b*u+M*p,t[2]=x*n+y*h+b*g+M*v,t[3]=x*a+y*c+b*d+M*w,x=i[4],y=i[5],b=i[6],M=i[7],t[4]=x*r+y*l+b*f+M*m,t[5]=x*s+y*o+b*u+M*p,t[6]=x*n+y*h+b*g+M*v,t[7]=x*a+y*c+b*d+M*w,x=i[8],y=i[9],b=i[10],M=i[11],t[8]=x*r+y*l+b*f+M*m,t[9]=x*s+y*o+b*u+M*p,t[10]=x*n+y*h+b*g+M*v,t[11]=x*a+y*c+b*d+M*w,x=i[12],y=i[13],b=i[14],M=i[15],t[12]=x*r+y*l+b*f+M*m,t[13]=x*s+y*o+b*u+M*p,t[14]=x*n+y*h+b*g+M*v,t[15]=x*a+y*c+b*d+M*w,t}function Tt(t,e,i){let r=i[0],s=i[1],n=i[2],a,l,o,h,c,f,u,g,d,m,p,v;return e===t?(t[12]=e[0]*r+e[4]*s+e[8]*n+e[12],t[13]=e[1]*r+e[5]*s+e[9]*n+e[13],t[14]=e[2]*r+e[6]*s+e[10]*n+e[14],t[15]=e[3]*r+e[7]*s+e[11]*n+e[15]):(a=e[0],l=e[1],o=e[2],h=e[3],c=e[4],f=e[5],u=e[6],g=e[7],d=e[8],m=e[9],p=e[10],v=e[11],t[0]=a,t[1]=l,t[2]=o,t[3]=h,t[4]=c,t[5]=f,t[6]=u,t[7]=g,t[8]=d,t[9]=m,t[10]=p,t[11]=v,t[12]=a*r+c*s+d*n+e[12],t[13]=l*r+f*s+m*n+e[13],t[14]=o*r+u*s+p*n+e[14],t[15]=h*r+g*s+v*n+e[15]),t}function Ot(t,e,i){let r=i[0],s=i[1],n=i[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Bt(t,e,i,r){let s=r[0],n=r[1],a=r[2],l=Math.hypot(s,n,a),o,h,c,f,u,g,d,m,p,v,w,x,y,b,M,E,z,S,F,R,C,_,A,O;return Math.abs(l)<_t?null:(l=1/l,s*=l,n*=l,a*=l,o=Math.sin(i),h=Math.cos(i),c=1-h,f=e[0],u=e[1],g=e[2],d=e[3],m=e[4],p=e[5],v=e[6],w=e[7],x=e[8],y=e[9],b=e[10],M=e[11],E=s*s*c+h,z=n*s*c+a*o,S=a*s*c-n*o,F=s*n*c-a*o,R=n*n*c+h,C=a*n*c+s*o,_=s*a*c+n*o,A=n*a*c-s*o,O=a*a*c+h,t[0]=f*E+m*z+x*S,t[1]=u*E+p*z+y*S,t[2]=g*E+v*z+b*S,t[3]=d*E+w*z+M*S,t[4]=f*F+m*R+x*C,t[5]=u*F+p*R+y*C,t[6]=g*F+v*R+b*C,t[7]=d*F+w*R+M*C,t[8]=f*_+m*A+x*O,t[9]=u*_+p*A+y*O,t[10]=g*_+v*A+b*O,t[11]=d*_+w*A+M*O,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function It(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Ne(t,e){let i=e[0],r=e[1],s=e[2],n=e[4],a=e[5],l=e[6],o=e[8],h=e[9],c=e[10];return t[0]=Math.hypot(i,r,s),t[1]=Math.hypot(n,a,l),t[2]=Math.hypot(o,h,c),t}function Nt(t){let e=t[0],i=t[1],r=t[2],s=t[4],n=t[5],a=t[6],l=t[8],o=t[9],h=t[10];const c=e*e+i*i+r*r,f=s*s+n*n+a*a,u=l*l+o*o+h*h;return Math.sqrt(Math.max(c,f,u))}const qe=(function(){const t=[1,1,1];return function(e,i){let r=t;Ne(r,i);let s=1/r[0],n=1/r[1],a=1/r[2],l=i[0]*s,o=i[1]*n,h=i[2]*a,c=i[4]*s,f=i[5]*n,u=i[6]*a,g=i[8]*s,d=i[9]*n,m=i[10]*a,p=l+f+m,v=0;return p>0?(v=Math.sqrt(p+1)*2,e[3]=.25*v,e[0]=(u-d)/v,e[1]=(g-h)/v,e[2]=(o-c)/v):l>f&&l>m?(v=Math.sqrt(1+l-f-m)*2,e[3]=(u-d)/v,e[0]=.25*v,e[1]=(o+c)/v,e[2]=(g+h)/v):f>m?(v=Math.sqrt(1+f-l-m)*2,e[3]=(g-h)/v,e[0]=(o+c)/v,e[1]=.25*v,e[2]=(u+d)/v):(v=Math.sqrt(1+m-l-f)*2,e[3]=(o-c)/v,e[0]=(g+h)/v,e[1]=(u+d)/v,e[2]=.25*v),e}})();function qt(t,e,i,r){let s=H([t[0],t[1],t[2]]);const n=H([t[4],t[5],t[6]]),a=H([t[8],t[9],t[10]]);Ie(t)<0&&(s=-s),i[0]=t[12],i[1]=t[13],i[2]=t[14];const o=t.slice(),h=1/s,c=1/n,f=1/a;o[0]*=h,o[1]*=h,o[2]*=h,o[4]*=c,o[5]*=c,o[6]*=c,o[8]*=f,o[9]*=f,o[10]*=f,qe(e,o),r[0]=s,r[1]=n,r[2]=a}function Dt(t,e,i,r){const s=t,n=e[0],a=e[1],l=e[2],o=e[3],h=n+n,c=a+a,f=l+l,u=n*h,g=n*c,d=n*f,m=a*c,p=a*f,v=l*f,w=o*h,x=o*c,y=o*f,b=r[0],M=r[1],E=r[2];return s[0]=(1-(m+v))*b,s[1]=(g+y)*b,s[2]=(d-x)*b,s[3]=0,s[4]=(g-y)*M,s[5]=(1-(u+v))*M,s[6]=(p+w)*M,s[7]=0,s[8]=(d+x)*E,s[9]=(p-w)*E,s[10]=(1-(u+m))*E,s[11]=0,s[12]=i[0],s[13]=i[1],s[14]=i[2],s[15]=1,s}function Pt(t,e){let i=e[0],r=e[1],s=e[2],n=e[3],a=i+i,l=r+r,o=s+s,h=i*a,c=r*a,f=r*l,u=s*a,g=s*l,d=s*o,m=n*a,p=n*l,v=n*o;return t[0]=1-f-d,t[1]=c+v,t[2]=u-p,t[3]=0,t[4]=c-v,t[5]=1-h-d,t[6]=g+m,t[7]=0,t[8]=u+p,t[9]=g-m,t[10]=1-h-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Gt(t,e,i,r,s){let n=1/Math.tan(e/2),a=1/(r-s);return t[0]=n/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(s+r)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*s*r*a,t[15]=0,t}function Ut(t,e,i,r,s,n,a){let l=1/(e-i),o=1/(r-s),h=1/(n-a);return t[0]=-2*l,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+i)*l,t[13]=(s+r)*o,t[14]=(a+n)*h,t[15]=1,t}function Vt(t,e,i,r){let s=e[0],n=e[1],a=e[2],l=r[0],o=r[1],h=r[2],c=s-i[0],f=n-i[1],u=a-i[2],g=c*c+f*f+u*u;g===0?u=1:(g=1/Math.sqrt(g),c*=g,f*=g,u*=g);let d=o*u-h*f,m=h*c-l*u,p=l*f-o*c;return g=d*d+m*m+p*p,g===0&&(h?l+=1e-6:o?h+=1e-6:o+=1e-6,d=o*u-h*f,m=h*c-l*u,p=l*f-o*c,g=d*d+m*m+p*p),g=1/Math.sqrt(g),d*=g,m*=g,p*=g,t[0]=d,t[1]=m,t[2]=p,t[3]=0,t[4]=f*p-u*m,t[5]=u*d-c*p,t[6]=c*m-f*d,t[7]=0,t[8]=c,t[9]=f,t[10]=u,t[11]=0,t[12]=s,t[13]=n,t[14]=a,t[15]=1,t}function Ae(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t[3]=e[3]+i[3],t[4]=e[4]+i[4],t[5]=e[5]+i[5],t[6]=e[6]+i[6],t[7]=e[7]+i[7],t[8]=e[8]+i[8],t[9]=e[9]+i[9],t[10]=e[10]+i[10],t[11]=e[11]+i[11],t[12]=e[12]+i[12],t[13]=e[13]+i[13],t[14]=e[14]+i[14],t[15]=e[15]+i[15],t}function Ee(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t[3]=e[3]-i[3],t[4]=e[4]-i[4],t[5]=e[5]-i[5],t[6]=e[6]-i[6],t[7]=e[7]-i[7],t[8]=e[8]-i[8],t[9]=e[9]-i[9],t[10]=e[10]-i[10],t[11]=e[11]-i[11],t[12]=e[12]-i[12],t[13]=e[13]-i[13],t[14]=e[14]-i[14],t[15]=e[15]-i[15],t}function kt(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*i,t[9]=e[9]*i,t[10]=e[10]*i,t[11]=e[11]*i,t[12]=e[12]*i,t[13]=e[13]*i,t[14]=e[14]*i,t[15]=e[15]*i,t}class j extends Array{constructor(e=1,i=0,r=0,s=0,n=0,a=1,l=0,o=0,h=0,c=0,f=1,u=0,g=0,d=0,m=0,p=1){return super(e,i,r,s,n,a,l,o,h,c,f,u,g,d,m,p),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,i,r,s,n,a,l,o,h,c,f,u,g,d,m,p){return e.length?this.copy(e):(zt(this,e,i,r,s,n,a,l,o,h,c,f,u,g,d,m,p),this)}translate(e,i=this){return Tt(this,i,e),this}rotate(e,i,r=this){return Bt(this,r,e,i),this}scale(e,i=this){return Ot(this,i,typeof e=="number"?[e,e,e]:e),this}add(e,i){return i?Ae(this,e,i):Ae(this,this,e),this}sub(e,i){return i?Ee(this,e,i):Ee(this,this,e),this}multiply(e,i){return e.length?i?Ce(this,e,i):Ce(this,this,e):kt(this,this,e),this}identity(){return Rt(this),this}copy(e){return Ft(this,e),this}fromPerspective({fov:e,aspect:i,near:r,far:s}={}){return Gt(this,e,i,r,s),this}fromOrthogonal({left:e,right:i,bottom:r,top:s,near:n,far:a}){return Ut(this,e,i,r,s,n,a),this}fromQuaternion(e){return Pt(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return Lt(this,e),this}compose(e,i,r){return Dt(this,e,i,r),this}decompose(e,i,r){return qt(this,e,i,r),this}getRotation(e){return qe(e,this),this}getTranslation(e){return It(e,this),this}getScaling(e){return Ne(e,this),this}getMaxScaleOnAxis(){return Nt(this)}lookAt(e,i,r){return Vt(this,e,i,r),this}determinant(){return Ie(this)}fromArray(e,i=0){return this[0]=e[i],this[1]=e[i+1],this[2]=e[i+2],this[3]=e[i+3],this[4]=e[i+4],this[5]=e[i+5],this[6]=e[i+6],this[7]=e[i+7],this[8]=e[i+8],this[9]=e[i+9],this[10]=e[i+10],this[11]=e[i+11],this[12]=e[i+12],this[13]=e[i+13],this[14]=e[i+14],this[15]=e[i+15],this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e[i+3]=this[3],e[i+4]=this[4],e[i+5]=this[5],e[i+6]=this[6],e[i+7]=this[7],e[i+8]=this[8],e[i+9]=this[9],e[i+10]=this[10],e[i+11]=this[11],e[i+12]=this[12],e[i+13]=this[13],e[i+14]=this[14],e[i+15]=this[15],e}}function Wt(t,e,i="YXZ"){return i==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):i==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):i==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):i==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):i==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):i==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const Se=new j;class $t extends Array{constructor(e=0,i=e,r=e,s="YXZ"){super(e,i,r),this.order=s,this.onChange=()=>{},this._target=this;const n=["0","1","2"];return new Proxy(this,{set(a,l){const o=Reflect.set(...arguments);return o&&n.includes(l)&&a.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,i=e,r=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=i,this._target[2]=r,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,i=this.order){return Wt(this._target,e,i),this.onChange(),this}fromQuaternion(e,i=this.order,r){return Se.fromQuaternion(e),this._target.fromRotationMatrix(Se,i),r||this.onChange(),this}fromArray(e,i=0){return this._target[0]=e[i],this._target[1]=e[i+1],this._target[2]=e[i+2],this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e}}class Xt{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new j,this.worldMatrix=new j,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new N,this.quaternion=new St,this.scale=new N(1),this.rotation=new $t,this.up=new N(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,i=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,i&&e&&e.addChild(this,!1)}addChild(e,i=!0){~this.children.indexOf(e)||this.children.push(e),i&&e.setParent(this,!1)}removeChild(e,i=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),i&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let i=0,r=this.children.length;i<r;i++)this.children[i].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let i=0,r=this.children.length;i<r;i++)this.children[i].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,i=!1){i?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function Yt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function Ht(t,e){let i=e[0],r=e[1],s=e[2],n=e[3],a=i+i,l=r+r,o=s+s,h=i*a,c=r*a,f=r*l,u=s*a,g=s*l,d=s*o,m=n*a,p=n*l,v=n*o;return t[0]=1-f-d,t[3]=c-v,t[6]=u+p,t[1]=c+v,t[4]=1-h-d,t[7]=g-m,t[2]=u-p,t[5]=g+m,t[8]=1-h-f,t}function Zt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Qt(t,e,i,r,s,n,a,l,o,h){return t[0]=e,t[1]=i,t[2]=r,t[3]=s,t[4]=n,t[5]=a,t[6]=l,t[7]=o,t[8]=h,t}function jt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Kt(t,e){let i=e[0],r=e[1],s=e[2],n=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],f=c*a-l*h,u=-c*n+l*o,g=h*n-a*o,d=i*f+r*u+s*g;return d?(d=1/d,t[0]=f*d,t[1]=(-c*r+s*h)*d,t[2]=(l*r-s*a)*d,t[3]=u*d,t[4]=(c*i-s*o)*d,t[5]=(-l*i+s*n)*d,t[6]=g*d,t[7]=(-h*i+r*o)*d,t[8]=(a*i-r*n)*d,t):null}function _e(t,e,i){let r=e[0],s=e[1],n=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],f=e[8],u=i[0],g=i[1],d=i[2],m=i[3],p=i[4],v=i[5],w=i[6],x=i[7],y=i[8];return t[0]=u*r+g*a+d*h,t[1]=u*s+g*l+d*c,t[2]=u*n+g*o+d*f,t[3]=m*r+p*a+v*h,t[4]=m*s+p*l+v*c,t[5]=m*n+p*o+v*f,t[6]=w*r+x*a+y*h,t[7]=w*s+x*l+y*c,t[8]=w*n+x*o+y*f,t}function Jt(t,e,i){let r=e[0],s=e[1],n=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],f=e[8],u=i[0],g=i[1];return t[0]=r,t[1]=s,t[2]=n,t[3]=a,t[4]=l,t[5]=o,t[6]=u*r+g*a+h,t[7]=u*s+g*l+c,t[8]=u*n+g*o+f,t}function ei(t,e,i){let r=e[0],s=e[1],n=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],f=e[8],u=Math.sin(i),g=Math.cos(i);return t[0]=g*r+u*a,t[1]=g*s+u*l,t[2]=g*n+u*o,t[3]=g*a-u*r,t[4]=g*l-u*s,t[5]=g*o-u*n,t[6]=h,t[7]=c,t[8]=f,t}function ti(t,e,i){let r=i[0],s=i[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=s*e[3],t[4]=s*e[4],t[5]=s*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function ii(t,e){let i=e[0],r=e[1],s=e[2],n=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],f=e[9],u=e[10],g=e[11],d=e[12],m=e[13],p=e[14],v=e[15],w=i*l-r*a,x=i*o-s*a,y=i*h-n*a,b=r*o-s*l,M=r*h-n*l,E=s*h-n*o,z=c*m-f*d,S=c*p-u*d,F=c*v-g*d,R=f*p-u*m,C=f*v-g*m,_=u*v-g*p,A=w*_-x*C+y*R+b*F-M*S+E*z;return A?(A=1/A,t[0]=(l*_-o*C+h*R)*A,t[1]=(o*F-a*_-h*S)*A,t[2]=(a*C-l*F+h*z)*A,t[3]=(s*C-r*_-n*R)*A,t[4]=(i*_-s*F+n*S)*A,t[5]=(r*F-i*C-n*z)*A,t[6]=(m*E-p*M+v*b)*A,t[7]=(p*y-d*E-v*x)*A,t[8]=(d*M-m*y+v*w)*A,t):null}class ri extends Array{constructor(e=1,i=0,r=0,s=0,n=1,a=0,l=0,o=0,h=1){return super(e,i,r,s,n,a,l,o,h),this}set(e,i,r,s,n,a,l,o,h){return e.length?this.copy(e):(Qt(this,e,i,r,s,n,a,l,o,h),this)}translate(e,i=this){return Jt(this,i,e),this}rotate(e,i=this){return ei(this,i,e),this}scale(e,i=this){return ti(this,i,e),this}multiply(e,i){return i?_e(this,e,i):_e(this,this,e),this}identity(){return jt(this),this}copy(e){return Zt(this,e),this}fromMatrix4(e){return Yt(this,e),this}fromQuaternion(e){return Ht(this,e),this}fromBasis(e,i,r){return this.set(e[0],e[1],e[2],i[0],i[1],i[2],r[0],r[1],r[2]),this}inverse(e=this){return Kt(this,e),this}getNormalMatrix(e){return ii(this,e),this}}let si=0;class ee extends Xt{constructor(e,{geometry:i,program:r,mode:s=e.TRIANGLES,frustumCulled:n=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=si++,this.geometry=i,this.program=r,this.mode=s,this.frustumCulled=n,this.renderOrder=a,this.modelViewMatrix=new j,this.normalMatrix=new ri,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}));let i=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:i}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}))}}const Fe={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function ze(t){t.length===4&&(t=t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e||console.warn(`Unable to convert hex string ${t} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function ni(t){return t=parseInt(t),[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function Re(t){return t===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(t)?t[0]==="#"?ze(t):Fe[t.toLowerCase()]?ze(Fe[t.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):ni(t)}class Le extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...Re(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(Re(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}class te extends it{constructor(e,{attributes:i={}}={}){Object.assign(i,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,i)}}function Te(t){const e=t.replace("#","");return[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]}const ai=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,li=`
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform float uSpeed;
uniform float uScale;
uniform float uBrightness;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uNoiseFreq;
uniform float uNoiseAmp;
uniform float uBandHeight;
uniform float uBandSpread;
uniform float uOctaveDecay;
uniform float uLayerOffset;
uniform float uColorSpeed;
uniform vec2 uMouse;
uniform float uMouseInfluence;
uniform bool uEnableMouse;
uniform float uLightMode;

#define TAU 6.28318

vec3 gradientHash(vec3 p) {
  p = vec3(
    dot(p, vec3(127.1, 311.7, 234.6)),
    dot(p, vec3(269.5, 183.3, 198.3)),
    dot(p, vec3(169.5, 283.3, 156.9))
  );
  vec3 h = fract(sin(p) * 43758.5453123);
  float phi = acos(2.0 * h.x - 1.0);
  float theta = TAU * h.y;
  return vec3(cos(theta) * sin(phi), sin(theta) * sin(phi), cos(phi));
}

float quinticSmooth(float t) {
  float t2 = t * t;
  float t3 = t * t2;
  return 6.0 * t3 * t2 - 15.0 * t2 * t2 + 10.0 * t3;
}

vec3 cosineGradient(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(TAU * (c * t + d));
}

float perlin3D(float amplitude, float frequency, float px, float py, float pz) {
  float x = px * frequency;
  float y = py * frequency;

  float fx = floor(x); float fy = floor(y); float fz = floor(pz);
  float cx = ceil(x);  float cy = ceil(y);  float cz = ceil(pz);

  vec3 g000 = gradientHash(vec3(fx, fy, fz));
  vec3 g100 = gradientHash(vec3(cx, fy, fz));
  vec3 g010 = gradientHash(vec3(fx, cy, fz));
  vec3 g110 = gradientHash(vec3(cx, cy, fz));
  vec3 g001 = gradientHash(vec3(fx, fy, cz));
  vec3 g101 = gradientHash(vec3(cx, fy, cz));
  vec3 g011 = gradientHash(vec3(fx, cy, cz));
  vec3 g111 = gradientHash(vec3(cx, cy, cz));

  float d000 = dot(g000, vec3(x - fx, y - fy, pz - fz));
  float d100 = dot(g100, vec3(x - cx, y - fy, pz - fz));
  float d010 = dot(g010, vec3(x - fx, y - cy, pz - fz));
  float d110 = dot(g110, vec3(x - cx, y - cy, pz - fz));
  float d001 = dot(g001, vec3(x - fx, y - fy, pz - cz));
  float d101 = dot(g101, vec3(x - cx, y - fy, pz - cz));
  float d011 = dot(g011, vec3(x - fx, y - cy, pz - cz));
  float d111 = dot(g111, vec3(x - cx, y - cy, pz - cz));

  float sx = quinticSmooth(x - fx);
  float sy = quinticSmooth(y - fy);
  float sz = quinticSmooth(pz - fz);

  float lx00 = mix(d000, d100, sx);
  float lx10 = mix(d010, d110, sx);
  float lx01 = mix(d001, d101, sx);
  float lx11 = mix(d011, d111, sx);

  float ly0 = mix(lx00, lx10, sy);
  float ly1 = mix(lx01, lx11, sy);

  return amplitude * mix(ly0, ly1, sz);
}

float auroraGlow(float t, vec2 shift) {
  vec2 uv = gl_FragCoord.xy / uResolution.y;
  uv += shift;

  float noiseVal = 0.0;
  float freq = uNoiseFreq;
  float amp = uNoiseAmp;
  vec2 samplePos = uv * uScale;

  for (float i = 0.0; i < 3.0; i += 1.0) {
    noiseVal += perlin3D(amp, freq, samplePos.x, samplePos.y, t);
    amp *= uOctaveDecay;
    freq *= 2.0;
  }

  float yBand = uv.y * 10.0 - uBandHeight * 10.0;
  return 0.3 * max(exp(uBandSpread * (1.0 - 1.1 * abs(noiseVal + yBand))), 0.0);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float t = uSpeed * 0.4 * uTime;

  vec2 shift = vec2(0.0);
  if (uEnableMouse) {
    shift = (uMouse - 0.5) * uMouseInfluence;
  }

  float glow1 = auroraGlow(t, shift);
  float glow2 = auroraGlow(t + uLayerOffset, shift);
  vec3 gradient1 = cosineGradient(uv.x + uTime * uSpeed * 0.2 * uColorSpeed, vec3(0.5), vec3(0.5), vec3(1.0), vec3(0.3, 0.20, 0.20));
  vec3 gradient2 = cosineGradient(uv.x + uTime * uSpeed * 0.1 * uColorSpeed, vec3(0.5), vec3(0.5), vec3(2.0, 1.0, 0.0), vec3(0.5, 0.20, 0.25));

  vec3 col = 0.99 * glow1 * gradient1 * uColor1;
  col += 0.99 * glow2 * gradient2 * uColor2;

  col *= uBrightness;
  float alpha = clamp(length(col), 0.0, 1.0);
  if (uLightMode > 0.5) {
    float phase1 = dot(gradient1, vec3(0.299, 0.587, 0.114));
    float phase2 = dot(gradient2, vec3(0.299, 0.587, 0.114));
    float weight1 = pow(max(glow1 * (0.62 + 0.38 * phase1), 0.0), 1.35);
    float weight2 = pow(max(glow2 * (0.62 + 0.38 * phase2), 0.0), 1.35);
    float weightSum = max(weight1 + weight2, 0.0001);

    vec3 chroma = (weight1 * uColor1 + weight2 * uColor2) / weightSum;
    float neutral = min(chroma.r, min(chroma.g, chroma.b));
    chroma = max(chroma - vec3(neutral * 0.78), vec3(0.0));
    float peak = max(chroma.r, max(chroma.g, chroma.b));
    chroma = pow(clamp(chroma / max(peak, 0.0001), 0.0, 1.0), vec3(1.08));

    float ink = clamp((weight1 + weight2) * uBrightness * 1.55, 0.0, 0.82);
    gl_FragColor = vec4(mix(vec3(1.0), chroma, ink), 1.0);
  } else {
    gl_FragColor = vec4(col, alpha);
  }
}
`;function oi({speed:t=.6,scale:e=1.5,brightness:i=1,color1:r="#f7f7f7",color2:s="#e100ff",noiseFrequency:n=2.5,noiseAmplitude:a=1,bandHeight:l=.5,bandSpread:o=1,octaveDecay:h=.1,layerOffset:c=0,colorSpeed:f=1,enableMouseInteraction:u=!0,mouseInfluence:g=.25,lightMode:d=!1}){const m=L.useRef(null);return L.useEffect(()=>{if(!m.current)return;const p=m.current,v=new J({alpha:!0,premultipliedAlpha:!1}),w=v.gl;w.clearColor(0,0,0,0);let x,y=[.5,.5],b=[.5,.5];function M(_){const A=w.canvas.getBoundingClientRect();b=[(_.clientX-A.left)/A.width,1-(_.clientY-A.top)/A.height]}function E(){b=[.5,.5]}function z(){v.setSize(p.offsetWidth,p.offsetHeight),x&&(x.uniforms.uResolution.value=[w.canvas.width,w.canvas.height,w.canvas.width/w.canvas.height])}window.addEventListener("resize",z),z();const S=new te(w);x=new K(w,{vertex:ai,fragment:li,uniforms:{uTime:{value:0},uResolution:{value:[w.canvas.width,w.canvas.height,w.canvas.width/w.canvas.height]},uSpeed:{value:t},uScale:{value:e},uBrightness:{value:i},uColor1:{value:Te(r)},uColor2:{value:Te(s)},uNoiseFreq:{value:n},uNoiseAmp:{value:a},uBandHeight:{value:l},uBandSpread:{value:o},uOctaveDecay:{value:h},uLayerOffset:{value:c},uColorSpeed:{value:f},uMouse:{value:new Float32Array([.5,.5])},uMouseInfluence:{value:g},uEnableMouse:{value:u},uLightMode:{value:d?1:0}}});const F=new ee(w,{geometry:S,program:x});p.appendChild(w.canvas),u&&(w.canvas.addEventListener("mousemove",M),w.canvas.addEventListener("mouseleave",E));let R;function C(_){R=requestAnimationFrame(C),x.uniforms.uTime.value=_*.001,u?(y[0]+=.05*(b[0]-y[0]),y[1]+=.05*(b[1]-y[1]),x.uniforms.uMouse.value[0]=y[0],x.uniforms.uMouse.value[1]=y[1]):(x.uniforms.uMouse.value[0]=.5,x.uniforms.uMouse.value[1]=.5),v.render({scene:F})}return R=requestAnimationFrame(C),()=>{cancelAnimationFrame(R),window.removeEventListener("resize",z),u&&(w.canvas.removeEventListener("mousemove",M),w.canvas.removeEventListener("mouseleave",E)),p.removeChild(w.canvas),w.getExtension("WEBGL_lose_context")?.loseContext()}},[t,e,i,r,s,n,a,l,o,h,c,f,u,g,d]),I.createElement("div",{ref:m,className:"soft-aurora-container"})}const hi=t=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,.5,.2]},ci=`#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,ui=60,fi=t=>`#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;   
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
uniform float uQuality;
uniform float uStepScale;
uniform float uLightMode;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < 60.0; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z += d = (abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4) * uStepScale;
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
    if (i >= uQuality) break;
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  if (uLightMode > 0.5) {
    vec3 source = clamp(finalColor, 0.0, 1.0);
    float peak = max(source.r, max(source.g, source.b));
    float floorColor = min(source.r, min(source.g, source.b));
    vec3 chroma = (source - vec3(floorColor)) / max(peak - floorColor, 0.0001);
    vec3 pigment = mix(source / max(peak, 0.0001), chroma, 0.68) * 0.72;
    float energy = clamp(length(rgb) / 1.7320508, 0.0, 1.0);
    float coverage = pow(smoothstep(0.035, 0.72, energy), 0.76) * min(uOpacity, 1.0) * 0.9;
    fragColor = vec4(mix(vec3(1.0), pigment, coverage), 1.0);
  } else {
    fragColor = vec4(finalColor, alpha);
  }
}`,di=({color:t="#ffffff",speed:e=1,direction:i="forward",scale:r=1,opacity:s=1,mouseInteractive:n=!0,renderScale:a=.55,maxDpr:l=1.5,targetFps:o=60,iterations:h=60,lightMode:c=!1})=>{const f=L.useRef(null),u=L.useRef({x:0,y:0}),g=L.useRef(null);return L.useEffect(()=>{if(!f.current)return;const d=f.current,m=typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,p=t?1:0,v=t?hi(t):[1,1,1],w=i==="reverse"?-1:1;let x;try{x=new J({webgl:2,alpha:!0,antialias:!1,dpr:Math.min(window.devicePixelRatio||1,l)})}catch{return}const y=x.gl;if(!y)return;const b=y.canvas;b.style.display="block",b.style.width="100%",b.style.height="100%",d.appendChild(b);const M=new te(y),E=new K(y,{vertex:ci,fragment:fi(),uniforms:{iTime:{value:0},iResolution:{value:new Float32Array([1,1])},uCustomColor:{value:new Float32Array(v)},uUseCustomColor:{value:p},uSpeed:{value:e*.4},uDirection:{value:w},uScale:{value:r},uOpacity:{value:s},uMouse:{value:new Float32Array([0,0])},uMouseInteractive:{value:n?1:0},uQuality:{value:h},uStepScale:{value:ui/h},uLightMode:{value:c?1:0}}}),z=new ee(y,{geometry:M,program:E}),S=B=>{if(!n)return;const T=d.getBoundingClientRect();g.current={x:B.clientX-T.left,y:B.clientY-T.top}};n&&d.addEventListener("mousemove",S,{passive:!0});let F=!1;const R=()=>{const B=d.getBoundingClientRect(),T=Math.max(1,Math.floor(B.width*a)),U=Math.max(1,Math.floor(B.height*a));x.setSize(T,U),b.style.width="100%",b.style.height="100%";const W=E.uniforms.iResolution.value;W[0]=y.drawingBufferWidth,W[1]=y.drawingBufferHeight},C=new ResizeObserver(()=>{F||(F=!0,requestAnimationFrame(()=>{F=!1,R()}))});C.observe(d),R();let _=0,A=!1,O=!0,q=document.visibilityState!=="hidden";const Z=performance.now(),D=1e3/o;let G=0;const $=()=>{E.uniforms.iTime.value=0,x.render({scene:z})},P=B=>{if(A||!O||!q)return;if(B-G<D){_=requestAnimationFrame(P);return}if(G=B,g.current){u.current=g.current,g.current=null;const U=E.uniforms.uMouse.value;U[0]=u.current.x,U[1]=u.current.y}let T=(B-Z)*.001;if(i==="pingpong"){const W=T%10,Q=Math.floor(T/10)%2===0,ie=W/10,ue=ie*ie*(3-2*ie),De=Q?ue*10:(1-ue)*10;E.uniforms.uDirection.value=1,E.uniforms.iTime.value=De}else E.uniforms.iTime.value=T;x.render({scene:z}),_=requestAnimationFrame(P)},X=B=>{B.preventDefault(),A=!0,cancelAnimationFrame(_)},V=()=>{A=!1,O&&q&&!m&&(cancelAnimationFrame(_),_=requestAnimationFrame(P))};b.addEventListener("webglcontextlost",X),b.addEventListener("webglcontextrestored",V);const k=new IntersectionObserver(([B])=>{const T=O;O=B.isIntersecting,O&&!T&&!A&&q&&!m&&(cancelAnimationFrame(_),_=requestAnimationFrame(P))},{threshold:0});k.observe(d);const Y=()=>{q=document.visibilityState!=="hidden",q&&O&&!A&&!m?(cancelAnimationFrame(_),G=0,_=requestAnimationFrame(P)):cancelAnimationFrame(_)};return document.addEventListener("visibilitychange",Y),m?$():_=requestAnimationFrame(P),()=>{cancelAnimationFrame(_),C.disconnect(),k.disconnect(),document.removeEventListener("visibilitychange",Y),b.removeEventListener("webglcontextlost",X),b.removeEventListener("webglcontextrestored",V),n&&d&&d.removeEventListener("mousemove",S);try{d?.removeChild(b)}catch{}}},[t,e,i,r,s,n,a,l,o,h,c]),I.createElement("div",{ref:f,className:"plasma-container"})},le=t=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]},gi=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,mi=`#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uLightMode;
out vec4 fragColor;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);} 
vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);} 
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}
void mainImage(out vec4 o, vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);

  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;

  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);

  vec3 colLav=uColor1;
  vec3 colOrg=uColor2;
  vec3 colDark=uColor3;
  float b=uColorBalance;
  float s=max(uBlendSoftness,0.0);
  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendX=(tuv*blendRot).x;
  float edge0=-0.3-b-s;
  float edge1=0.2-b+s;
  float v0=0.5-b+s;
  float v1=-0.3-b-s;
  vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));

  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05);} 
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;

  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);
  if(uLightMode>0.5){
    float energy=max(max(col.r,col.g),col.b);
    vec3 hue=col/max(energy,0.001);
    float chroma=length(col-vec3(dot(col,vec3(0.333333))));
    float coverage=clamp(0.12+chroma*1.15+energy*0.18,0.0,0.88);
    col=mix(vec3(1.0),clamp(hue*0.58+col*0.18,0.0,1.0),coverage);
  }

  o=vec4(col,1.0);
}
void main(){
  vec4 o=vec4(0.0);
  mainImage(o,gl_FragCoord.xy);
  fragColor=o;
}
`,oe=new WeakMap,pi=({timeSpeed:t=.25,colorBalance:e=0,warpStrength:i=1,warpFrequency:r=5,warpSpeed:s=2,warpAmplitude:n=50,blendAngle:a=0,blendSoftness:l=.05,rotationAmount:o=500,noiseScale:h=2,grainAmount:c=.1,grainScale:f=2,grainAnimated:u=!1,contrast:g=1.5,gamma:d=1,saturation:m=1,centerX:p=0,centerY:v=0,zoom:w=.9,color1:x="#FF9FFC",color2:y="#5227FF",color3:b="#B497CF",lightMode:M=!1,className:E=""})=>{const z=L.useRef(null);return L.useEffect(()=>{const S=z.current;if(!S)return;const F=new J({webgl:2,alpha:!0,antialias:!1,dpr:Math.min(window.devicePixelRatio||1,2)}),R=F.gl,C=R.canvas;C.style.width="100%",C.style.height="100%",C.style.display="block",S.appendChild(C);const _=new te(R),A=new K(R,{vertex:gi,fragment:mi,uniforms:{iTime:{value:0},iResolution:{value:new Float32Array([1,1])},uTimeSpeed:{value:.25},uColorBalance:{value:0},uWarpStrength:{value:1},uWarpFrequency:{value:5},uWarpSpeed:{value:2},uWarpAmplitude:{value:50},uBlendAngle:{value:0},uBlendSoftness:{value:.05},uRotationAmount:{value:500},uNoiseScale:{value:2},uGrainAmount:{value:.1},uGrainScale:{value:2},uGrainAnimated:{value:0},uContrast:{value:1.5},uGamma:{value:1},uSaturation:{value:1},uCenterOffset:{value:new Float32Array([0,0])},uZoom:{value:.9},uColor1:{value:new Float32Array([1,1,1])},uColor2:{value:new Float32Array([1,1,1])},uColor3:{value:new Float32Array([1,1,1])},uLightMode:{value:0}}}),O=new ee(R,{geometry:_,program:A});oe.set(S,{renderer:F,program:A,mesh:O});const q=()=>{const T=S.getBoundingClientRect(),U=Math.max(1,Math.floor(T.width)),W=Math.max(1,Math.floor(T.height));F.setSize(U,W);const Q=A.uniforms.iResolution.value;Q[0]=R.drawingBufferWidth,Q[1]=R.drawingBufferHeight,F.render({scene:O})},Z=new ResizeObserver(q);Z.observe(S),q();let D=0,G=!0,$=!document.hidden;const P=performance.now(),X=T=>{A.uniforms.iTime.value=(T-P)*.001,F.render({scene:O}),D=requestAnimationFrame(X)},V=()=>{G&&$&&D===0&&(D=requestAnimationFrame(X))},k=()=>{D!==0&&(cancelAnimationFrame(D),D=0)},Y=new IntersectionObserver(([T])=>{G=T.isIntersecting,G?V():k()},{threshold:0});Y.observe(S);const B=()=>{$=!document.hidden,$?V():k()};return document.addEventListener("visibilitychange",B),V(),()=>{k(),Z.disconnect(),Y.disconnect(),document.removeEventListener("visibilitychange",B),oe.delete(S);try{S.removeChild(C)}catch{}}},[]),L.useEffect(()=>{const S=z.current;if(!S)return;const F=oe.get(S);if(!F)return;const{program:R}=F,C=R.uniforms;C.uTimeSpeed.value=t,C.uColorBalance.value=e,C.uWarpStrength.value=i,C.uWarpFrequency.value=r,C.uWarpSpeed.value=s,C.uWarpAmplitude.value=n,C.uBlendAngle.value=a,C.uBlendSoftness.value=l,C.uRotationAmount.value=o,C.uNoiseScale.value=h,C.uGrainAmount.value=c,C.uGrainScale.value=f,C.uGrainAnimated.value=u?1:0,C.uContrast.value=g,C.uGamma.value=d,C.uSaturation.value=m,C.uCenterOffset.value=new Float32Array([p,v]),C.uZoom.value=w,C.uColor1.value=new Float32Array(le(x)),C.uColor2.value=new Float32Array(le(y)),C.uColor3.value=new Float32Array(le(b)),C.uLightMode.value=M?1:0},[t,e,i,r,s,n,a,l,o,h,c,f,u,g,d,m,p,v,w,x,y,b,M]),I.createElement("div",{ref:z,className:`grainient-container ${E}`.trim()})},vi=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,xi=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
uniform float uLightMode;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                    ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  if (uLightMode > 0.5) {
    float energy = clamp(max(intensity, 0.0), 0.0, 1.0);
    float coverage = clamp(auroraAlpha * (0.55 + 0.45 * energy), 0.0, 0.86);
    vec3 chroma = pow(clamp(rampColor, 0.0, 1.0), vec3(1.2));
    float chromaPeak = max(chroma.r, max(chroma.g, chroma.b));
    chroma /= max(chromaPeak, 0.0001);
    fragColor = vec4(mix(vec3(1.0), chroma, min(coverage * 1.08, 0.94)), 1.0);
  } else {
    fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
  }
}
`;function yi(t){const{colorStops:e=["#5227FF","#7cff67","#5227FF"],amplitude:i=1,blend:r=.5,lightMode:s=!1}=t,n=L.useRef(t);n.current=t;const a=L.useRef(null);return L.useEffect(()=>{const l=a.current;if(!l)return;const o=new J({alpha:!0,premultipliedAlpha:!0,antialias:!0}),h=o.gl;h.clearColor(0,0,0,0),h.enable(h.BLEND),h.blendFunc(h.ONE,h.ONE_MINUS_SRC_ALPHA),h.canvas.style.backgroundColor="transparent";let c;function f(){if(!l)return;const v=l.offsetWidth,w=l.offsetHeight;o.setSize(v,w),c&&(c.uniforms.uResolution.value=[v,w])}window.addEventListener("resize",f);const u=new te(h);u.attributes.uv&&delete u.attributes.uv;const g=e.map(v=>{const w=new Le(v);return[w.r,w.g,w.b]});c=new K(h,{vertex:vi,fragment:xi,uniforms:{uTime:{value:0},uAmplitude:{value:i},uColorStops:{value:g},uResolution:{value:[l.offsetWidth,l.offsetHeight]},uBlend:{value:r},uLightMode:{value:s?1:0}}});const d=new ee(h,{geometry:u,program:c});l.appendChild(h.canvas);let m=0;const p=v=>{m=requestAnimationFrame(p);const{time:w=v*.01,speed:x=1}=n.current;c.uniforms.uTime.value=w*x*.1,c.uniforms.uAmplitude.value=n.current.amplitude??1,c.uniforms.uBlend.value=n.current.blend??r,c.uniforms.uLightMode.value=n.current.lightMode??s?1:0;const y=n.current.colorStops??e;c.uniforms.uColorStops.value=y.map(b=>{const M=new Le(b);return[M.r,M.g,M.b]}),o.render({scene:d})};return m=requestAnimationFrame(p),f(),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",f),l&&h.canvas.parentNode===l&&l.removeChild(h.canvas),h.getExtension("WEBGL_lose_context")?.loseContext()}},[i,r,s]),I.createElement("div",{ref:a,className:"aurora-container"})}const Oe=t=>{switch(t){case"photo":return I.createElement(oi,{color1:"#f7b9a4",color2:"#c96a4e",brightness:.9,lightMode:!0});case"kitchen":return I.createElement(di,{color:"#8f79e2",speed:.6,scale:1.1,opacity:.75,lightMode:!0});case"travel":return I.createElement(pi,{color1:"#bfe6f5",color2:"#3f92b8",color3:"#7cc3e0",lightMode:!0});case"reading":return I.createElement(yi,{colorStops:["#6d7fd4","#9aa8e0","#c3cbf0"],speed:.5,lightMode:!0});default:return null}},wi=800,bi=()=>{try{const t=document.createElement("canvas");return!!(t.getContext("webgl2")||t.getContext("webgl"))}catch{return!1}};function Ai({effect:t}={}){const e=L.useRef(null),[i,r]=L.useState(!1),[s,n]=L.useState(!1),[a,l]=L.useState(null),[o,h]=L.useState(null),c=L.useRef(null);return L.useEffect(()=>{window.matchMedia("(prefers-reduced-motion: reduce)").matches||!bi()||r(!0)},[]),L.useEffect(()=>{const f=e.current;if(!f||typeof IntersectionObserver>"u"){n(!0);return}const u=new IntersectionObserver(g=>n(g.some(d=>d.isIntersecting)),{threshold:.01});return u.observe(f),()=>u.disconnect()},[]),L.useEffect(()=>{t&&l(t)},[t]),L.useEffect(()=>{if(t)return;const f=e.current;if(!f)return;const u=fe.slides,d=Array.from(document.querySelectorAll(".carousel__bg")).findIndex(M=>M.classList.contains("is-active")),m=u[d>=0?d:0]?.id??fe.initialSlideId;l(m);let p=m;const v=f.closest(".carousel"),w=M=>{const z=M.detail?.index;if(typeof z!="number")return;const S=u[z]?.id;if(!S||S===p)return;const F=p;p=S,l(S),h(F),c.current!==null&&window.clearTimeout(c.current),c.current=window.setTimeout(()=>{h(null),c.current=null},wi)};v?.addEventListener("carousel:change",w);const x=(M,E)=>{if(!E.isTrusted)return;const z=f.querySelector(".passion-aurora__layer.is-active canvas");z&&z.dispatchEvent(new MouseEvent(M,{clientX:E.clientX,clientY:E.clientY,bubbles:!0,cancelable:!0,view:window}))},y=M=>x("mousemove",M),b=M=>x("mouseleave",M);return v?.addEventListener("mousemove",y),v?.addEventListener("mouseleave",b),()=>{v?.removeEventListener("carousel:change",w),v?.removeEventListener("mousemove",y),v?.removeEventListener("mouseleave",b),c.current!==null&&(window.clearTimeout(c.current),c.current=null)}},[t]),!i||!s||!a?I.createElement("div",{ref:e,className:"passion-aurora","aria-hidden":"true"}):I.createElement("div",{ref:e,className:"passion-aurora","aria-hidden":"true"},o&&I.createElement("div",{key:o,className:"passion-aurora__layer passion-aurora__layer--prev"},Oe(o)),I.createElement("div",{key:a,className:"passion-aurora__layer is-active"},Oe(a)))}export{Ai as default};
