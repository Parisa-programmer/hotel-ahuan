"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[7297],{87297:function(t,e,s){s.r(e),s.d(e,{default:function(){return k}});var i=s(16190),a=s(79582),r=s(63486),l=s(60266),o=s(34061),n=s(99223),c=s(65005),h=s(4324),d=s(11713),u=s(17808),m=s(67678);const p=(0,m.Z)(u.Z);var x=p.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...u.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"},genInput(){const t=u.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){u.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-sm-12 pt-2 pt-sm-12"},[e(d.Z,{attrs:{justify:"center"}},[e("div",{staticClass:"indexDiv my-12 my-sm-0 my-md-12"},[e(d.Z,{staticClass:"relative mt-5 mt-sm-0",attrs:{justify:"center"}},[e(l.Z,{staticClass:"order-2 order-md-1",attrs:{cols:"12",md:"6"}},[e("h3",{staticClass:"red--text"},[t._v("دفتر حافظ منافع مشتری")]),e("p",{staticClass:"mt-6 text-justify pl-4 font-small-xs",staticStyle:{"line-height":"40px"}},[t._v(" برند رسمی آژانس مسافرتی آهوان به خوبی از جنس دغدغه‌های مسافرین آگاه است. نیاز ضروری کسب اعتماد به محصولات عرضه شده و اطمینان خاطر مسافرین از دریافت خدمات تورهایی در عالی ترین سطح منجر به تشکیل دفتر حافظ منافع مشتریان شد. این دپارتمان در حقیقت یک سیستم پیشرفته PTS (Passenger Tracking System) است که خدمات عرضه شده به مسافرین را از اولین نقطه تماس آنان با برند "),e("b",[t._v("آهوان")]),t._v(" تا بازگشت از سفر و مرور خاطرات لذت‌بخش آن دنبال می‌کند. بازوی اجرایی مهم این سیستم مرکز تماس آنلاین مستقر در تهران است. ")])]),e(l.Z,{staticClass:"order-1 order-md-2",attrs:{cols:"12",md:"6"}},[e("img",{attrs:{width:"100%",src:s(29187),alt:""}})]),e(l.Z,{staticClass:"order-3",attrs:{cols:"12"}},[e("p",{staticClass:"mt-1 text-justify pa-4 grey lighten-2 font-small-xs",staticStyle:{"line-height":"40px"}},[e("b",{staticClass:"red--text"},[t._v("دفتر حافظ منافع مشتریان")]),t._v(" به مسافرین اطمینان خاطر می‌دهد که صدای آنان توسط برگزارکنندگان تور شنیده می‌شود و دغدغه‌های آنان در طراحی و اجرای پکیج‌ها لحاظ می‌گردد. شما در هر لحظه از شبانه ­روز می‌توانید نظرات، انتقادات و پیشنهادات خود را از طریق فرم ذیل به اطلاع تصمیم گیران پروژه برسانید و در حین لذت بردن از تورهای ویژه آهوان نیز نمایندگان تام الختیار این برند را همگام و همراه در کنار خود داشته باشید. ")])])],1)],1)]),e(d.Z,{staticClass:"grey lighten-2",attrs:{justify:"center"}},[e("div",{staticClass:"indexDiv"},[e(c.Z,{ref:"sendTextForm",attrs:{"lazy-validation":""}},[e(a.Z,{staticClass:"my-6",attrs:{outlined:""}},[e(d.Z,{attrs:{align:"center"}},[e("h4",{staticClass:"ma-3"},[t._v(" دفتر حافظ منافع مشتری ")])]),e(n.Z),e(d.Z,{},[e(l.Z,{staticClass:"px-2 px-md-4 py-2 ticketForm",attrs:{cols:"12",sm:"4"}},[e("label",{staticClass:"mr-4",attrs:{for:""}},[t._v("نام و نام خانوادگی "),e("span",{staticClass:"red--text"},[t._v("*")])]),e(u.Z,{attrs:{filled:"",clsss:"grey",rules:t.nameRules},model:{value:t.theUser.name,callback:function(e){t.$set(t.theUser,"name",e)},expression:"theUser.name"}})],1),e(l.Z,{staticClass:"px-2 px-md-4 py-2 ticketForm",attrs:{cols:"12",sm:"4"}},[e("label",{staticClass:"mr-4",attrs:{for:""}},[t._v("تلفن همراه "),e("span",{staticClass:"red--text"},[t._v("*")])]),e(u.Z,{attrs:{filled:"",clsss:"grey",rules:t.phoneRules},model:{value:t.theUser.phone,callback:function(e){t.$set(t.theUser,"phone",e)},expression:"theUser.phone"}})],1),e(l.Z,{staticClass:"px-2 px-md-4 py-2 ticketForm",attrs:{cols:"12",sm:"4"}},[e("label",{staticClass:"mr-4",attrs:{for:""}},[t._v("ایمیل")]),e(u.Z,{attrs:{filled:"",clsss:"grey",rules:t.emailRules2},model:{value:t.theUser.mail,callback:function(e){t.$set(t.theUser,"mail",e)},expression:"theUser.mail"}})],1),e(l.Z,{staticClass:"px-4 my-4",attrs:{cols:"12"}},[e("label",{staticClass:"mr-4 d-block",attrs:{for:""}},[t._v("پیشنهاد شما مربوط می شود به: "),e("span",{staticClass:"red--text"},[t._v("*")])]),e(d.Z,[e(r.Z,{staticClass:"mx-3 checkboxFormOpinian",attrs:{label:"قبل سفر",color:"red","hide-details":""},model:{value:t.theUser.about.first,callback:function(e){t.$set(t.theUser.about,"first",e)},expression:"theUser.about.first"}}),e(r.Z,{staticClass:"mx-3 checkboxFormOpinian",attrs:{label:"هنگام ثبت نام",color:"red","hide-details":""},model:{value:t.theUser.about.twice,callback:function(e){t.$set(t.theUser.about,"twice",e)},expression:"theUser.about.twice"}}),e(r.Z,{staticClass:"mx-3 checkboxFormOpinian",attrs:{label:"در حین سفر",color:"red","hide-details":""},model:{value:t.theUser.about.Third,callback:function(e){t.$set(t.theUser.about,"Third",e)},expression:"theUser.about.Third"}}),e(r.Z,{staticClass:"mx-3 checkboxFormOpinian",attrs:{label:"هنگام برگشت",color:"red","hide-details":""},model:{value:t.theUser.about.Fourth,callback:function(e){t.$set(t.theUser.about,"Fourth",e)},expression:"theUser.about.Fourth"}})],1)],1),e(l.Z,{staticClass:"px-4 my-6",attrs:{cols:"12"}},[e("label",{staticClass:"mr-4 d-block",attrs:{for:""}},[t._v("موضوع طرح شده توسط شما: "),e("span",{staticClass:"red--text"},[t._v("*")])]),e(d.Z,{},[e(r.Z,{staticClass:"mx-3 checkboxFormOpinian",attrs:{label:"نحوه ثبت نام",color:"red","hide-details":""},model:{value:t.theUser.title.first,callback:function(e){t.$set(t.theUser.title,"first",e)},expression:"theUser.title.first"}}),e(r.Z,{staticClass:"mx-3 checkboxFormOpinian",attrs:{label:"خدمات پرواز",color:"red","hide-details":""},model:{value:t.theUser.title.twice,callback:function(e){t.$set(t.theUser.title,"twice",e)},expression:"theUser.title.twice"}}),e(r.Z,{staticClass:"mx-3 checkboxFormOpinian",attrs:{label:"نحوه برخورد کانتر",color:"red","hide-details":""},model:{value:t.theUser.title.Third,callback:function(e){t.$set(t.theUser.title,"Third",e)},expression:"theUser.title.Third"}}),e(r.Z,{staticClass:"mx-3 checkboxFormOpinian",attrs:{label:"ارتباط با تور لیدر",color:"red","hide-details":""},model:{value:t.theUser.title.Fourth,callback:function(e){t.$set(t.theUser.title,"Fourth",e)},expression:"theUser.title.Fourth"}}),e(r.Z,{staticClass:"mx-3 checkboxFormOpinian",attrs:{label:"نحوه اطلاع رسانی",color:"red","hide-details":""},model:{value:t.theUser.title.fifth,callback:function(e){t.$set(t.theUser.title,"fifth",e)},expression:"theUser.title.fifth"}}),e(r.Z,{staticClass:"mx-3 checkboxFormOpinian",attrs:{label:"خدمات هتل",color:"red","hide-details":""},model:{value:t.theUser.title.sixth,callback:function(e){t.$set(t.theUser.title,"sixth",e)},expression:"theUser.title.sixth"}}),e(r.Z,{staticClass:"mx-3 checkboxFormOpinian",attrs:{label:"خدمات بیمه",color:"red","hide-details":""},model:{value:t.theUser.title.seventh,callback:function(e){t.$set(t.theUser.title,"seventh",e)},expression:"theUser.title.seventh"}}),e(r.Z,{staticClass:"mr-3",attrs:{label:"سایر",color:"red","hide-details":""},model:{value:t.theUser.title.Eighth,callback:function(e){t.$set(t.theUser.title,"Eighth",e)},expression:"theUser.title.Eighth"}})],1)],1),e(l.Z,{staticClass:"px-4 py-2 ticketForm",attrs:{cols:"12"}},[e("label",{staticClass:"mr-4",attrs:{for:""}},[t._v("در صورت عقد قرار داد "),e("span",{staticClass:"red--text"},[t._v("(شماره قرار داد وارد شود)")])]),e(u.Z,{attrs:{filled:"",clsss:"grey"},model:{value:t.theUser.contractNumber,callback:function(e){t.$set(t.theUser,"contractNumber",e)},expression:"theUser.contractNumber"}})],1),e(l.Z,{staticClass:"px-4 py-2 ticketForm",attrs:{cols:"12"}},[e("label",{staticClass:"mr-4",attrs:{for:""}},[t._v("پیام شما: "),e("span",{staticClass:"red--text"},[t._v("( حداکثر دو خط )")])]),e(x,{attrs:{name:"input-7-1",rules:t.emptyRules,variant:"filled","auto-grow":"","model-value":"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."},model:{value:t.theUser.text,callback:function(e){t.$set(t.theUser,"text",e)},expression:"theUser.text"}})],1)],1),e(d.Z,{attrs:{justify:"end"}},[e(i.Z,{staticClass:"px-12 float-left ma-4",attrs:{color:"red",dark:""},on:{click:t.sendFormOpinion}},[t._v("ارسال")])],1)],1)],1),t.sendTextDialog?e(o.Z,{staticClass:"rounded-lg loginDialog",staticStyle:{"z-index":"9999999999998"},attrs:{width:"450"},model:{value:t.sendTextDialog,callback:function(e){t.sendTextDialog=e},expression:"sendTextDialog"}},[e(a.Z,{staticClass:"pa-2 hideOver relative",staticStyle:{"border-radius":"10px"}},[e("div",{staticClass:"rounded-xl absolute grey lighten-4",staticStyle:{height:"50px",width:"50px",bottom:"20px",right:"-20px"}}),e("div",{staticClass:"rounded-circle absolute red lighten-5",staticStyle:{height:"50px",width:"50px",top:"-20px",left:"-20px"}}),e("div",{staticClass:"rounded-xl absolute grey lighten-4",staticStyle:{height:"45px",width:"106px",bottom:"-38px",right:"50%"}}),e(h.Z,{staticClass:"absolute black--text",staticStyle:{top:"5px",right:"5px"},on:{click:function(e){t.sendTextDialog=!1}}},[t._v("mdi-close")]),e(d.Z,{attrs:{justify:"center"}},[e("img",{staticClass:"my-6",attrs:{src:s(94493),alt:"",width:"130px"}}),e("h4",{staticClass:"green--text text--darken-2 my-3 widthAll text-center"},[t._v("ارسال نظر با موفقیت انجام شد.")])])],1)],1):t._e()],1)])],1)},b=[],v={name:"office-protector",metaInfo:{title:"دفتر حافظ منافع مشتری",meta:[{name:"description",content:""}]},data(){return{nameRules:[t=>!!t||"پر کردن فیلد نام اجباریست.",t=>(t||"").indexOf(0)<0||"فرمت صحیح نیست",t=>(t||"").indexOf(1)<0||"فرمت صحیح نیست",t=>(t||"").indexOf(2)<0||"فرمت صحیح نیست",t=>(t||"").indexOf(3)<0||"فرمت صحیح نیست",t=>(t||"").indexOf(4)<0||"فرمت صحیح نیست",t=>(t||"").indexOf(5)<0||"فرمت صحیح نیست",t=>(t||"").indexOf(6)<0||"فرمت صحیح نیست",t=>(t||"").indexOf(7)<0||"فرمت صحیح نیست",t=>(t||"").indexOf(8)<0||"فرمت صحیح نیست",t=>(t||"").indexOf(9)<0||"فرمت صحیح نیست"],theUser:{name:"",phone:"",mail:"",about:{first:!1,twice:!1,Third:!1,Fourth:!1},title:{first:!1,twice:!1,Third:!1,Fourth:!1,fifth:!1,sixth:!1,seventh:!1,Eighth:!1},contractNumber:"",text:""},phoneRules:[t=>!!t||"پر کردن فیلد تلفن اجباریست.",t=>11==t.length||"شماره تلفن صحیح نیست."],emailRules2:[t=>!t||/.+@.+\..+/.test(t)||"ایمیل نادرست میباشد."],emptyRules:[t=>!!t||"پر کردن این فیلد اجباریست."],sendTextDialog:!1}},components:{},computed:{destination(){return StorageEvent.destinations.find((t=>t.slug===this.slug))}},methods:{disabelDate(t,e,s){return t===new Date||4===e.jMonth()||"Friday"===e.locale("en").format("dddd")},sendFormOpinion(){this.showAlert=!1;let t=this;this.$refs.sendTextForm.validate(),0==this.theUser.about.first&&0==this.theUser.about.twice&&0==this.theUser.about.Third&&0==this.theUser.about.Fourth||0==t.theUser.title.first&&0==t.theUser.title.twice&&0==t.theUser.title.Third&&0==t.theUser.title.Fourth&&0==t.theUser.title.fifth&&0==t.theUser.title.sixth&&0==t.theUser.title.seventh&&0==t.theUser.title.Eighth||!t.$refs.sendTextForm.validate()?(t.alertType="error",t.alertText="لطفا فیلدهای اجباری را بدرستی تکمیل کنید.",t.showAlert=!0):(t.isLoadingAxios=!0,setTimeout((()=>{t.isLoadingAxios=!1,t.theUser={name:"",phone:"",mail:"",about:{first:!1,twice:!1,Third:!1,Fourth:!1},title:{first:!1,twice:!1,Third:!1,Fourth:!1,fifth:!1,sixth:!1,seventh:!1,Eighth:!1},contractNumber:"",text:""},t.sendTextDialog=!0,t.$refs.sendTextForm.resetValidation(),setTimeout((()=>{t.sendTextDialog=!1}),3e3)}),500))}},created(){window.scrollTo(0,0)}},g=v,C=s(1001),U=(0,C.Z)(g,f,b,!1,null,null,null),k=U.exports},63486:function(t,e,s){s.d(e,{Z:function(){return l}});s(47393);var i=s(42240),a=s(40573),r=s(29022),l=r.Z.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...a.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},29187:function(t,e,s){t.exports=s.p+"img/2حافظ-منافع-مشتری.edcdbb43.png"}}]);
//# sourceMappingURL=7297.3f35aff9.js.map