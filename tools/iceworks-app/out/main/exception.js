const{dialog:r}=require("electron"),e=require("events");class o extends e{constructor(){super(),this.on("did-error",e=>{r.showErrorBox("Error",e.message)})}catch(r){return this.emit("did-error",r)}}module.exports=new o;