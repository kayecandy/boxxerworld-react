"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{3089:function(e,t,r){r.d(t,{H:function(){return w}});let i={NoInvert:1},s={strength:.5,level:5.9,blur:-14,type:1,invertR:i.NoInvert,invertG:i.NoInvert,invertH:i.NoInvert};var a=r(1973),v={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};class n{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}let l=new a.iKG(-1,1,1,-1,0,1),h=new a.u9r;h.setAttribute("position",new a.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new a.a$l([0,2,0,0,2,0],2));class o{constructor(e){this._mesh=new a.Kj0(h,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,l)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class u extends n{constructor(e,t){super(),this.textureID=void 0!==t?t:"tDiffuse",e instanceof a.jyz?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=a.rDY.clone(e.uniforms),this.material=new a.jyz({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new o(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this.fsQuad.render(e)}}class c extends n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let i,s;let a=e.getContext(),v=e.state;v.buffers.color.setMask(!1),v.buffers.depth.setMask(!1),v.buffers.color.setLocked(!0),v.buffers.depth.setLocked(!0),this.inverse?(i=0,s=1):(i=1,s=0),v.buffers.stencil.setTest(!0),v.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),v.buffers.stencil.setFunc(a.ALWAYS,i,4294967295),v.buffers.stencil.setClear(s),v.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),v.buffers.color.setLocked(!1),v.buffers.depth.setLocked(!1),v.buffers.stencil.setLocked(!1),v.buffers.stencil.setFunc(a.EQUAL,1,4294967295),v.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),v.buffers.stencil.setLocked(!0)}}class d extends n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class f{constructor(e,t){if(this.renderer=e,void 0===t){let r={minFilter:a.wem,magFilter:a.wem,format:a.wk1},i=e.getSize(new a.FM8);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,(t=new a.dd2(this._width*this._pixelRatio,this._height*this._pixelRatio,r)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===v&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===u&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new u(v),this.clock=new a.SUY}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let t=0,i=this.passes.length;t<i;t++){let i=this.passes[t];if(!1!==i.enabled){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),i.needsSwap){if(r){let t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==c&&(i instanceof c?r=!0:i instanceof d&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new a.FM8);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new a.iKG(-1,1,1,-1,0,1);let m=new a.u9r;m.setAttribute("position",new a.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new a.a$l([0,2,0,0,2,0],2));class x extends n{constructor(e,t,r,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=void 0!==s?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new a.Ilk}render(e,t,r){let i,s;let a=e.autoClear;e.autoClear=!1,void 0!==this.overrideMaterial&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),i=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,i),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=s),e.autoClear=a}}var p={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`};let g={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};class y extends a.jyz{uniforms={type:{type:"1i",value:0},invertR:{type:"1f",value:1},invertG:{type:"1f",value:1},invertH:{type:"1f",value:1},dz:{type:"1f",value:0},dimensions:{type:"fv",value:[0,0,0]},tHeightMap:{type:"t",value:null}};vertexShader="precision mediump float;\nvarying vec2 vUv;\nvarying vec2 step;\nuniform vec3 dimensions;\nvoid main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\nstep = vec2(-1.0 / dimensions.x, -1.0 / dimensions.y);\nvUv = uv;\n}";fragmentShader="precision mediump float;\nuniform vec3 dimensions;\nvarying vec2 vUv;\nvarying vec2 step;\nuniform float dz;\nuniform float invertR;\nuniform float invertG;\nuniform float invertH;\nuniform int type;\nuniform sampler2D tHeightMap;\nvoid main(void) {\n	vec2 tlv = vec2(vUv.x - step.x, vUv.y + step.y );\n	vec2 lv  = vec2(vUv.x - step.x, vUv.y 		   );\n	vec2 blv = vec2(vUv.x - step.x, vUv.y - step.y);\n	vec2 tv  = vec2(vUv.x 		  , vUv.y + step.y );\n	vec2 bv  = vec2(vUv.x 		  , vUv.y - step.y);\n	vec2 trv = vec2(vUv.x + step.x, vUv.y + step.y );\n	vec2 rv  = vec2(vUv.x + step.x, vUv.y 		   );\n	vec2 brv = vec2(vUv.x + step.x, vUv.y - step.y);\n	tlv = vec2(tlv.x >= 0.0 ? tlv.x : (1.0 + tlv.x), 	tlv.y >= 0.0	? tlv.y : (1.0  + tlv.y));\n	tlv = vec2(tlv.x < 1.0  ? tlv.x : (tlv.x - 1.0 ), 	tlv.y < 1.0   	? tlv.y : (tlv.y - 1.0 ));\n	lv  = vec2( lv.x >= 0.0 ?  lv.x : (1.0 + lv.x),  	lv.y  >= 0.0 	?  lv.y : (1.0  +  lv.y));\n	lv  = vec2( lv.x < 1.0  ?  lv.x : ( lv.x - 1.0 ),   lv.y  < 1.0  	?  lv.y : ( lv.y - 1.0 ));\n	blv = vec2(blv.x >= 0.0 ? blv.x : (1.0 + blv.x), 	blv.y >= 0.0 	? blv.y : (1.0  + blv.y));\n	blv = vec2(blv.x < 1.0  ? blv.x : (blv.x - 1.0 ), 	blv.y < 1.0 	? blv.y : (blv.y - 1.0 ));\n	tv  = vec2( tv.x >= 0.0 ?  tv.x : (1.0 + tv.x),  	tv.y  >= 0.0 	?  tv.y : (1.0  +  tv.y));\n	tv  = vec2( tv.x < 1.0  ?  tv.x : ( tv.x - 1.0 ),   tv.y  < 1.0 	?  tv.y : ( tv.y - 1.0 ));\n	bv  = vec2( bv.x >= 0.0 ?  bv.x : (1.0 + bv.x),  	bv.y  >= 0.0 	?  bv.y : (1.0  +  bv.y));\n	bv  = vec2( bv.x < 1.0  ?  bv.x : ( bv.x - 1.0 ),   bv.y  < 1.0 	?  bv.y : ( bv.y - 1.0 ));\n	trv = vec2(trv.x >= 0.0 ? trv.x : (1.0 + trv.x), 	trv.y >= 0.0 	? trv.y : (1.0  + trv.y));\n	trv = vec2(trv.x < 1.0  ? trv.x : (trv.x - 1.0 ), 	trv.y < 1.0   	? trv.y : (trv.y - 1.0 ));\n	rv  = vec2( rv.x >= 0.0 ?  rv.x : (1.0 + rv.x),  	rv.y  >= 0.0 	?  rv.y : (1.0  +  rv.y));\n	rv  = vec2( rv.x < 1.0  ?  rv.x : ( rv.x - 1.0 ),   rv.y  < 1.0   	?  rv.y : ( rv.y - 1.0 ));\n	brv = vec2(brv.x >= 0.0 ? brv.x : (1.0 + brv.x), 	brv.y >= 0.0 	? brv.y : (1.0  + brv.y));\n	brv = vec2(brv.x < 1.0  ? brv.x : (brv.x - 1.0 ), 	brv.y < 1.0   	? brv.y : (brv.y - 1.0 ));\n	float tl = abs(texture2D(tHeightMap, tlv).r);\n	float l  = abs(texture2D(tHeightMap, lv ).r);\n	float bl = abs(texture2D(tHeightMap, blv).r);\n	float t  = abs(texture2D(tHeightMap, tv ).r);\n	float b  = abs(texture2D(tHeightMap, bv ).r);\n	float tr = abs(texture2D(tHeightMap, trv).r);\n	float r  = abs(texture2D(tHeightMap, rv ).r);\n	float br = abs(texture2D(tHeightMap, brv).r);\n   float dx = 0.0, dy = 0.0;\n   if(type == 0){\n		dx = tl + l*2.0 + bl - tr - r*2.0 - br;\n		dy = tl + t*2.0 + tr - bl - b*2.0 - br;\n   }\n   else{\n		dx = tl*3.0 + l*10.0 + bl*3.0 - tr*3.0 - r*10.0 - br*3.0;\n		dy = tl*3.0 + t*10.0 + tr*3.0 - bl*3.0 - b*10.0 - br*3.0;\n   }\n	vec4 normal = vec4(normalize(vec3(dx * invertR * invertH * 255.0, dy * invertG * invertH * 255.0, dz)), texture2D(tHeightMap, vUv).a);\n	gl_FragColor = vec4(normal.xy * 0.5 + 0.5, normal.zw);\n}"}class b{static _instance;canvas;renderer;rendererTarget;camera;scene;composer;material;texture;geometry;mesh;hBlurEffect;vBlurEffect;constructor(){this.__initThree(),this.__initPostProcessing()}static instance(){return b._instance||(b._instance=new b),b._instance}__initThree(){this.renderer=new a.CP7({alpha:!0,antialias:!0}),this.canvas=this.renderer.domElement,this.renderer.setClearColor(0,0),this.rendererTarget=new a.dd2(0,0,{minFilter:a.TyD,magFilter:a.TyD,format:a.wk1,stencilBuffer:!1}),this.renderer.setRenderTarget(this.rendererTarget),this.camera=new a.iKG(-.5,.5,.5,-.5,0,1),this.scene=new a.xsS,this.material=new y,this.material.transparent=!0,this.texture=new a.xEZ,this.texture.wrapS=this.texture.wrapT=a.uWy,this.texture.minFilter=this.texture.magFilter=a.TyD,this.texture.anisotropy=2,this.mesh=new a.Kj0(new a.BKK(1,1,1,1),this.material),this.scene.add(this.mesh)}__initPostProcessing(){this.composer=new f(this.renderer),this.hBlurEffect=new u(p),this.vBlurEffect=new u(g),this.hBlurEffect.renderToScreen=!0,this.vBlurEffect.renderToScreen=!0,this.composer.addPass(new x(this.scene,this.camera)),this.composer.addPass(this.hBlurEffect),this.composer.addPass(this.vBlurEffect)}calculateDz(e,t){return 1/e*(1+Math.pow(2,t))}calculateBlurH(e,t){return e/t.width/5}calculateBlurV(e,t){return e/t.height/5}imageToBlackAndWhite(e){let t=e;typeof e!==HTMLCanvasElement&&((t=document.createElement("canvas")).width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0));let r=t.getContext("2d"),i=r.getImageData(0,0,e.width,e.height,{colorSpace:"srgb"});for(let e=0;e<i.data.length;e+=4){let t=i.data[e]+i.data[e+1]+i.data[e+2],r=0;t<100&&(r=255),i.data[e]=r,i.data[e+1]=r,i.data[e+2]=r,i.data[e+3]=255}r.putImageData(i,0,0)}renderNormalImage(e,t){this.renderer.setSize(e.width,e.height),this.composer.setSize(e.width,e.height),this.rendererTarget.setSize(e.width,e.height),this.texture.image=e,this.material.uniforms.tHeightMap.value=this.texture,this.hBlurEffect.uniforms.h.value=this.calculateBlurH(t.blur,e),this.vBlurEffect.uniforms.v.value=this.calculateBlurV(t.blur,e),this.texture.needsUpdate=!0,this.material.uniformsNeedUpdate=!0,this.material.needsUpdate=!0,this.composer.render();let r=document.createElement("canvas"),i=r.getContext("2d");return r.width=this.canvas.width,r.height=this.canvas.height,i.fillStyle="white",i.fillRect(0,0,r.width,r.height),i.drawImage(this.canvas,0,0),this.imageToBlackAndWhite(r),this.texture.image=r,this.hBlurEffect.uniforms.h.value=0,this.vBlurEffect.uniforms.v.value=0,this.material.uniforms.tHeightMap.value=this.texture,this.material.uniforms.dimensions.value=[e.width,e.height,0],this.material.uniforms.dz.value=this.calculateDz(t.strength,t.level),this.material.uniforms.invertG.value=t.invertG,this.material.uniforms.invertR.value=t.invertR,this.material.uniforms.invertH.value=t.invertH,this.material.uniforms.type.value=t.type,this.texture.needsUpdate=!0,this.material.uniformsNeedUpdate=!0,this.material.needsUpdate=!0,this.composer.render(),this.canvas}}class w{static _instance;threeManager;constructor(){this.threeManager=new b}static instance=function(){return w._instance||(w._instance=new w),w._instance};generateFromImage(e,t=s){let r={...s,...t};return this.threeManager.renderNormalImage(e,r)}}}}]);