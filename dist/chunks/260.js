(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[260],{80260:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Colorize:()=>a});s(95830),s(5627);var i=s(8634),r=(s(84570),s(23244));class a{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:{a_position:0}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,s){const{width:i,height:r}=t;this._createOrResizeResources(e,i,r);const{context:a,painter:n}=e,{materialManager:o}=n,l=this._programDesc,c=this._quad,h=s.colorMatrix;c.bind();const u=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,i,r,0,0,u),a.setBlendingEnabled(!1),a.setStencilTestEnabled(!1);const d=o.getProgram(e,l);a.bindProgram(d),a.bindTexture(u,2),d.setUniformMatrix4fv("u_coefficients",h),d.setUniform1i("u_colorTexture",2),c.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0),c.unbind()}_createOrResizeResources(e,t,s){const{context:a}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===s||(this._size[0]=t,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(t,s):this._layerFBOTexture=new i.Z(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:t,height:s}),this._quad||(this._quad=new r.Z(a,[-1,-1,1,-1,-1,1,1,1])))}}}}]);
//# sourceMappingURL=260.js.map