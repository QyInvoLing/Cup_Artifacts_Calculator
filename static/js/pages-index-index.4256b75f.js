(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1a0f":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=[{label:"火",value:"PYRO",options:[{value:"diluc",label:"迪卢克"},{value:"amber",label:"安柏"},{value:"xiangling",label:"香菱"},{value:"klee",label:"可莉"},{value:"bennett",label:"班尼特"},{value:"xinyan",label:"辛焱"},{value:"hu-tao",label:"胡桃"},{value:"yanfei",label:"烟绯"},{value:"yoimiya",label:"宵宫"},{value:"thoma",label:"托马"}]},{label:"水",value:"HYDRO",options:[{value:"barbara",label:"芭芭拉"},{value:"xingqiu",label:"行秋"},{value:"tartaglia",label:"达达利亚"},{value:"mona",label:"莫娜"},{value:"sangonomiya-kokomi",label:"珊瑚宫心海"},{value:"kamisato-ayato",label:"神里绫人"}]},{label:"雷",value:"ELECTRO",options:[{value:"lisa",label:"丽莎"},{value:"razor",label:"雷泽"},{value:"beidou",label:"北斗"},{value:"fischl",label:"菲谢尔"},{value:"keqing",label:"刻晴"},{value:"raiden-shogun",label:"雷电将军"},{value:"kujou-sara",label:"九条裟罗"},{value:"yae-miko",label:"八重神子"}]},{label:"冰",value:"CYRO",options:[{value:"kamisato-ayaka",label:"神里绫华"},{value:"kaeya",label:"凯亚"},{value:"qiqi",label:"七七"},{value:"chongyun",label:"重云"},{value:"ganyu",label:"甘雨"},{value:"diona",label:"迪奥娜"},{value:"rosaria",label:"罗莎莉亚"},{value:"eula",label:"优菈"},{value:"aloy",label:"埃洛伊"},{value:"shenhe",label:"申鹤"}]},{label:"风",value:"ANEMO",options:[{value:"jean",label:"琴"},{value:"venti",label:"温迪"},{value:"xiao",label:"魈"},{value:"sucrose",label:"砂糖"},{value:"kaedehara-kazuha",label:"枫原万叶"},{value:"sayu",label:"早柚"}]},{label:"岩",value:"GEO",options:[{value:"ningguang",label:"凝光"},{value:"zhongli",label:"钟离"},{value:"noelle",label:"诺艾尔"},{value:"albedo",label:"阿贝多"},{value:"gorou",label:"五郎"},{value:"arataki-itto",label:"荒泷一斗"},{value:"yun-jin",label:"云堇"}]},{label:"草",value:"DENDRO",options:[]},{label:"旅行者",value:"TRAVELLER",options:[{value:"aether",label:"空"},{value:"lumine",label:"荧"}]}],s={options:l};t.default=s},"2eb1":function(e,t,a){"use strict";var l=a("4135"),s=a.n(l);s.a},"3ed0":function(e,t,a){var l=a("24fb");t=l(!1),t.push([e.i,"@media screen and (min-width:400px){#main[data-v-9697aab4]{width:400px;margin:0 auto}}.el-message-box[data-v-9697aab4]{width:400px}.el-select[data-v-9697aab4]{height:36px}.el-row[data-v-9697aab4]{margin-bottom:0;&:last-child{margin-bottom:0}}.el-col[data-v-9697aab4]{border-radius:4px}.bg-purple-dark[data-v-9697aab4]{background:#99a9bf}.bg-purple[data-v-9697aab4]{background:#d3dce6}.bg-purple-light[data-v-9697aab4]{background:#e5e9f2}.grid-content[data-v-9697aab4]{border-radius:4px;min-height:36px}.row-bg[data-v-9697aab4]{padding:10px 0;background-color:#f9fafc}",""]),e.exports=t},4135:function(e,t,a){var l=a("3ed0");"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var s=a("4f06").default;s("8b45ca0c",l,!0,{sourceMap:!1,shadowMode:!1})},"418e":function(e,t,a){"use strict";a.r(t);var l=a("c629"),s=a.n(l);for(var r in l)"default"!==r&&function(e){a.d(t,e,(function(){return l[e]}))}(r);t["default"]=s.a},"77f41":function(e,t,a){"use strict";a.r(t);var l=a("dd70"),s=a("418e");for(var r in s)"default"!==r&&function(e){a.d(t,e,(function(){return s[e]}))}(r);a("2eb1");var n,i=a("f0c5"),o=Object(i["a"])(s["default"],l["b"],l["c"],!1,null,"9697aab4",null,!1,l["a"],n);t["default"]=o.exports},c629:function(module,exports,__webpack_require__){"use strict";(function(__f__){var _interopRequireDefault=__webpack_require__("4ea4");__webpack_require__("a9e3"),__webpack_require__("b64b"),__webpack_require__("d3b7"),__webpack_require__("acd8"),__webpack_require__("25f0"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _character_info=_interopRequireDefault(__webpack_require__("b3da")),_character_option=_interopRequireDefault(__webpack_require__("1a0f")),_default={data:function(){return{weaponatk:"",hp:"",atk:"",def:"",elemastry:"",critrate:"",critdmg:"",er:"",options_sand:[{value:"atk",label:"攻击力"},{value:"def",label:"防御力"},{value:"em",label:"元素精通"},{value:"er",label:"元素充能效率"},{value:"hp",label:"生命值"}],options_glass:[{value:"dmg",label:"属性伤害加成"},{value:"atk",label:"攻击力"},{value:"def",label:"防御力"},{value:"em",label:"元素精通"},{value:"hp",label:"生命值"}],options_head:[{value:"critr",label:"暴击率"},{value:"critd",label:"暴击伤害"},{value:"atk",label:"攻击力"},{value:"def",label:"防御力"},{value:"em",label:"元素精通"},{value:"reb",label:"治疗加成"},{value:"hp",label:"生命值"}],options:_character_option.default.options,selected_character:"diluc",level:80,selected_sand:"atk",selected_glass:"dmg",selected_head:"critr",selected_attr:[],selected_preset:"",saved_presets:{}}},mounted:function(){this.refreshStorageInfo()},methods:{refreshStorageInfo:function(){var e=uni.getStorageSync("saved_presets");e?(this.saved_presets=e,__f__("log","Successfully refresh storage.Current saved_presets:"+Object.keys(this.saved_presets)," at pages/index/index.vue:214")):(__f__("log","No saved presets found.Established index and loaded..."," at pages/index/index.vue:216"),this.saved_presets={},uni.setStorageSync("saved_presets",{}))},saveCurrentPresets:function(){uni.setStorageSync("saved_presets",this.saved_presets)},saveSelectedPreset:function(){this.$set(this.saved_presets,this.selected_preset,this.data_to_save),__f__("log",JSON.stringify(this.saved_presets)," at pages/index/index.vue:227"),this.saveCurrentPresets(),this.$message({type:"success",message:"保存预设成功!"})},savePreset:function(){var e=this;this.$prompt("请输入预设名","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputErrorMessage:"预设名非法",center:!0}).then((function(t){var a=t.value;e.$set(e.saved_presets,a,e.data_to_save),__f__("log",JSON.stringify(e.saved_presets)," at pages/index/index.vue:243"),e.saveCurrentPresets(),e.$message({type:"success",message:"保存预设成功!"})})).catch()},loadPreset:function loadPreset(presetname){if(""!=presetname){var ps=eval(this.saved_presets)[presetname.toString()];this.weaponatk=ps.weaponatk,this.hp=ps.hp,this.atk=ps.atk,this.def=ps.def,this.elemastry=ps.elemastry,this.critrate=ps.critrate,this.critdmg=ps.critdmg,this.er=ps.er,this.selected_character=ps.selected_character,this.level=ps.level,this.selected_sand=ps.selected_sand,this.selected_glass=ps.selected_glass,this.selected_head=ps.selected_head,this.$message({message:"读取预设成功!",type:"success"})}},clearAllPreset:function(){var e=this;this.$confirm("此操作将永久删除所有预设, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){uni.clearStorageSync(),e.refreshStorageInfo()})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},delCurrentPreset:function delCurrentPreset(){var _this3=this;this.$confirm("此操作将永久删除该预设, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){var ps=eval(_this3.saved_presets);delete ps[_this3.selected_preset.toString()],_this3.saved_presets=ps,_this3.saveCurrentPresets(),_this3.selected_preset="",_this3.$message({type:"success",message:"删除成功!"})})).catch((function(){_this3.$message({type:"info",message:"已取消删除"})}))}},computed:{main_er:function(){return Number("er"==this.selected_sand)},main_critr:function(){return Number("critr"==this.selected_head)},main_critd:function(){return Number("critd"==this.selected_head)},main_hp:function(){return Number("hp"==this.selected_head)+Number("hp"==this.selected_glass)+Number("hp"==this.selected_sand)},main_atk:function(){return Number("atk"==this.selected_head)+Number("atk"==this.selected_glass)+Number("atk"==this.selected_sand)},main_def:function(){return Number("def"==this.selected_head)+Number("def"==this.selected_glass)+Number("def"==this.selected_sand)},main_em:function(){return Number("em"==this.selected_head)+Number("em"==this.selected_glass)+Number("em"==this.selected_sand)},hp_amount:function(){var e=Number(this.hp-4780),t=Number(_character_info.default.characters[this.selected_character][this.level].hp),a=Number(.466*this.main_hp);return parseFloat(((e/t-a)/.05).toFixed(2))},atk_amount:function(){var e=Number(this.atk-311),t=Number(_character_info.default.characters[this.selected_character][this.level].atk+Number(this.weaponatk)),a=Number(.466*this.main_atk);return parseFloat(((e/t-a)/.05).toFixed(2))},def_amount:function(){var e=Number(this.def),t=Number(_character_info.default.characters[this.selected_character][this.level].def),a=Number(.583*this.main_def);return parseFloat(((e/t-a)/.06).toFixed(2))},elemastry_amount:function(){return parseFloat(((this.elemastry-187*this.main_em)/20).toFixed(2))},critrate_amount:function(){return parseFloat(((this.critrate-31.1*this.main_critr)/3.3).toFixed(2))},critdmg_amount:function(){return parseFloat(((this.critdmg-62.2*this.main_critd)/6.6).toFixed(2))},er_amount:function(){return parseFloat((Number(this.er-51.8*this.main_er)/5.5).toFixed(2))},total:function(){var e=0;for(var t in this.selected_attr)e+=this.displaylist[this.selected_attr[t]].value;return parseFloat(e.toFixed(2))},selected_character_displayname:function(){for(var e in this.options)for(var t in this.options[e].options)if(__f__("log","2："+this.options[e].options[t].value," at pages/index/index.vue:384"),this.options[e].options[t].value==this.selected_character)return this.options[e].options[t].label},totalmessage:function(){return this.total>0&&this.total<50?this.level+"级"+this.selected_character_displayname+"-已选词条数:"+this.total:"等待数据输入..."},displaylist:function(){return[{index:0,name:"生:",value:this.hp_amount},{index:1,name:"攻:",value:this.atk_amount},{index:2,name:"防:",value:this.def_amount},{index:3,name:"精:",value:this.elemastry_amount},{index:4,name:"充:",value:this.er_amount},{index:5,name:"暴:",value:this.critrate_amount},{index:6,name:"爆:",value:this.critdmg_amount}]},data_to_save:function(){return{weaponatk:this.weaponatk,hp:this.hp,atk:this.atk,def:this.def,elemastry:this.elemastry,critrate:this.critrate,critdmg:this.critdmg,er:this.er,selected_character:this.selected_character,level:this.level,selected_sand:this.selected_sand,selected_glass:this.selected_glass,selected_head:this.selected_head}},is_save_available:function(){return!!(this.selected_preset="")}}};exports.default=_default}).call(this,__webpack_require__("0de9")["log"])},dd70:function(e,t,a){"use strict";var l;a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return l}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"container",attrs:{id:"main"}},[a("el-row"),a("el-row",[a("el-col",{attrs:{span:13}},[a("el-cascader",{attrs:{options:e.options,"show-all-levels":!0,props:{expandTrigger:"hover",children:"options",emitPath:!1}},model:{value:e.selected_character,callback:function(t){e.selected_character=t},expression:"selected_character"}})],1),a("el-col",{attrs:{span:6}},[a("v-uni-view",{staticClass:"block"},[a("el-input-number",{attrs:{min:80,max:90,label:"描述文字"},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}})],1)],1)],1),a("br"),a("el-input",{attrs:{placeholder:"Weapon ATK"},model:{value:e.weaponatk,callback:function(t){e.weaponatk=t},expression:"weaponatk"}},[a("template",{slot:"prepend"},[e._v("武器基础攻击力")])],2),a("el-input",{attrs:{placeholder:"HP"},model:{value:e.hp,callback:function(t){e.hp=t},expression:"hp"}},[a("template",{slot:"prepend"},[e._v("+生命值")])],2),a("el-input",{attrs:{placeholder:"DEF"},model:{value:e.def,callback:function(t){e.def=t},expression:"def"}},[a("template",{slot:"prepend"},[e._v("+防御力")])],2),a("el-input",{attrs:{placeholder:"ATK"},model:{value:e.atk,callback:function(t){e.atk=t},expression:"atk"}},[a("template",{slot:"prepend"},[e._v("+攻击力")])],2),a("el-input",{attrs:{placeholder:"Elemental Mastry"},model:{value:e.elemastry,callback:function(t){e.elemastry=t},expression:"elemastry"}},[a("template",{slot:"prepend"},[e._v("+元素精通")])],2),a("el-input",{attrs:{placeholder:"Energy Recharge"},model:{value:e.er,callback:function(t){e.er=t},expression:"er"}},[a("template",{slot:"prepend"},[e._v("+元素充能效率")]),a("template",{slot:"append"},[e._v("%")])],2),a("el-input",{attrs:{placeholder:"Crit Rate"},model:{value:e.critrate,callback:function(t){e.critrate=t},expression:"critrate"}},[a("template",{slot:"prepend"},[e._v("+暴击率")]),a("template",{slot:"append"},[e._v("%")])],2),a("el-input",{attrs:{placeholder:"Crit Damage"},model:{value:e.critdmg,callback:function(t){e.critdmg=t},expression:"critdmg"}},[a("template",{slot:"prepend"},[e._v("+暴击伤害")]),a("template",{slot:"append"},[e._v("%")])],2),a("el-card",{staticClass:"box-card"},[a("v-uni-view",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"el-icon-magic-stick"}),a("span",[e._v("主属性")])]),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-select",{attrs:{placeholder:"时之沙"},model:{value:e.selected_sand,callback:function(t){e.selected_sand=t},expression:"selected_sand"}},e._l(e.options_sand,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-col",{attrs:{span:8}},[a("el-select",{attrs:{placeholder:"空之杯"},model:{value:e.selected_glass,callback:function(t){e.selected_glass=t},expression:"selected_glass"}},e._l(e.options_glass,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-col",{attrs:{span:8}},[a("el-select",{attrs:{placeholder:"理之冠"},model:{value:e.selected_head,callback:function(t){e.selected_head=t},expression:"selected_head"}},e._l(e.options_head,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),a("el-card",{staticClass:"box-card"},[a("v-uni-view",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"el-icon-data-analysis"}),a("span",[e._v("词条数")])]),a("el-checkbox-group",{model:{value:e.selected_attr,callback:function(t){e.selected_attr=t},expression:"selected_attr"}},e._l(e.displaylist,(function(t){return a("el-checkbox",{key:t.name,attrs:{label:t.index}},[e._v(e._s(t.name)+e._s(t.value))])})),1)],1),a("el-alert",{attrs:{title:e.totalmessage,type:"success",closable:!1}}),a("el-card",{staticClass:"box-card"},[a("v-uni-view",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"el-icon-star-off"}),a("span",[e._v("预设")])]),a("el-row",[a("el-col",{attrs:{span:7}},[a("el-button",{attrs:{icon:"el-icon-folder-add"},nativeOn:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.savePreset.apply(void 0,arguments)}}},[e._v("新建")])],1),a("el-select",{attrs:{clearable:!0,placeholder:"选择预设"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.loadPreset(e.selected_preset)}},model:{value:e.selected_preset,callback:function(t){e.selected_preset=t},expression:"selected_preset"}},e._l(e.saved_presets,(function(e,t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),a("el-col",{attrs:{span:7}},[a("el-button",{attrs:{icon:"el-icon-folder-delete"},nativeOn:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearAllPreset.apply(void 0,arguments)}}},[e._v("清空")])],1),a("el-button",{attrs:{icon:"el-icon-delete"},nativeOn:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delCurrentPreset.apply(void 0,arguments)}}},[e._v("删除当前")]),a("el-button",{attrs:{icon:"el-icon-document",disabled:""==e.selected_preset},nativeOn:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveSelectedPreset.apply(void 0,arguments)}}},[e._v("保存")]),a("el-alert",{attrs:{title:"提示",type:"info","show-icon":!0}},[e._v("预设并不是响应式更新的。也就是说，在选择了某个预设后，想修改它，需要保存。")])],1)],1)},r=[]}}]);