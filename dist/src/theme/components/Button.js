Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _platform=require("./../variables/platform");var _platform2=_interopRequireDefault(_platform);var _commonColor=require("./../variables/commonColor");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;var platformStyle=variables.platformStyle;var platform=variables.platform;var darkCommon={"NativeBase.Text":{color:variables.brandDark},"NativeBase.Icon":{color:variables.brandDark},"NativeBase.IconNB":{color:variables.brandDark}};var lightCommon={"NativeBase.Text":{color:variables.brandLight},"NativeBase.Icon":{color:variables.brandLight},"NativeBase.IconNB":{color:variables.brandLight}};var primaryCommon={"NativeBase.Text":{color:variables.buttonPrimaryBg},"NativeBase.Icon":{color:variables.buttonPrimaryBg},"NativeBase.IconNB":{color:variables.buttonPrimaryBg}};var successCommon={"NativeBase.Text":{color:variables.buttonSuccessBg},"NativeBase.Icon":{color:variables.buttonSuccessBg},"NativeBase.IconNB":{color:variables.buttonSuccessBg}};var infoCommon={"NativeBase.Text":{color:variables.buttonInfoBg},"NativeBase.Icon":{color:variables.buttonInfoBg},"NativeBase.IconNB":{color:variables.buttonInfoBg}};var warningCommon={"NativeBase.Text":{color:variables.buttonWarningBg},"NativeBase.Icon":{color:variables.buttonWarningBg},"NativeBase.IconNB":{color:variables.buttonWarningBg}};var dangerCommon={"NativeBase.Text":{color:variables.buttonDangerBg},"NativeBase.Icon":{color:variables.buttonDangerBg},"NativeBase.IconNB":{color:variables.buttonDangerBg}};var buttonTheme={".disabled":{".transparent":{backgroundColor:null,"NativeBase.Text":{color:variables.buttonDisabledBg},"NativeBase.Icon":{color:variables.buttonDisabledBg},"NativeBase.IconNB":{color:variables.buttonDisabledBg}},"NativeBase.Icon":{color:variables.brandLight},"NativeBase.IconNB":{color:variables.brandLight},backgroundColor:variables.buttonDisabledBg},".bordered":_extends({".dark":_extends({},darkCommon,{backgroundColor:"transparent",borderColor:variables.brandDark,borderWidth:variables.borderWidth*2}),".light":_extends({},lightCommon,{backgroundColor:"transparent",borderColor:variables.brandLight,borderWidth:variables.borderWidth*2}),".primary":_extends({},primaryCommon,{backgroundColor:"transparent",borderColor:variables.buttonPrimaryBg,borderWidth:variables.borderWidth*2}),".success":_extends({},successCommon,{backgroundColor:"transparent",borderColor:variables.buttonSuccessBg,borderWidth:variables.borderWidth*2}),".info":_extends({},infoCommon,{backgroundColor:"transparent",borderColor:variables.buttonInfoBg,borderWidth:variables.borderWidth*2}),".warning":_extends({},warningCommon,{backgroundColor:"transparent",borderColor:variables.buttonWarningBg,borderWidth:variables.borderWidth*2}),".danger":_extends({},dangerCommon,{backgroundColor:"transparent",borderColor:variables.buttonDangerBg,borderWidth:variables.borderWidth*2}),".disabled":{backgroundColor:null,borderColor:variables.buttonDisabledBg,borderWidth:variables.borderWidth*2,"NativeBase.Text":{color:variables.buttonDisabledBg}}},primaryCommon,{borderWidth:variables.borderWidth*2,elevation:null,shadowColor:null,shadowOffset:null,shadowOpacity:null,shadowRadius:null,backgroundColor:"transparent"}),".dark":{".bordered":_extends({},darkCommon),backgroundColor:variables.brandDark},".light":_extends({".transparent":_extends({},lightCommon,{backgroundColor:null}),".bordered":_extends({},lightCommon)},darkCommon,{backgroundColor:variables.brandLight}),".primary":{".bordered":_extends({},primaryCommon),backgroundColor:variables.buttonPrimaryBg},".success":{".bordered":_extends({},successCommon),backgroundColor:variables.buttonSuccessBg},".info":{".bordered":_extends({},infoCommon),backgroundColor:variables.buttonInfoBg},".warning":{".bordered":_extends({},warningCommon),backgroundColor:variables.buttonWarningBg},".danger":{".bordered":_extends({},dangerCommon),backgroundColor:variables.buttonDangerBg},".block":{justifyContent:"center",alignSelf:"stretch"},".full":{justifyContent:"center",alignSelf:"stretch",borderRadius:0},".rounded":{borderRadius:variables.borderRadiusLarge},".transparent":_extends({backgroundColor:"transparent",elevation:0,shadowColor:null,shadowOffset:null,shadowRadius:null,shadowOpacity:null},primaryCommon,{".dark":_extends({},darkCommon,{backgroundColor:null}),".danger":_extends({},dangerCommon,{backgroundColor:null}),".warning":_extends({},warningCommon,{backgroundColor:null}),".info":_extends({},infoCommon,{backgroundColor:null}),".primary":_extends({},primaryCommon,{backgroundColor:null}),".success":_extends({},successCommon,{backgroundColor:null}),".light":_extends({},lightCommon,{backgroundColor:null}),".disabled":{backgroundColor:"transparent",borderColor:variables.buttonDisabledBg,borderWidth:variables.borderWidth*2,"NativeBase.Text":{color:variables.buttonDisabledBg},"NativeBase.Icon":{color:variables.buttonDisabledBg},"NativeBase.IconNB":{color:variables.buttonDisabledBg}}}),".small":{height:30,"NativeBase.Text":{fontSize:14},"NativeBase.Icon":{fontSize:20,paddingTop:0},"NativeBase.IconNB":{fontSize:20,paddingTop:0}},".large":{height:60,"NativeBase.Text":{fontSize:22}},".capitalize":{},".vertical":{flexDirection:"column",height:null},"NativeBase.Text":{fontFamily:variables.buttonFontFamily,marginLeft:0,marginRight:0,color:variables.inverseTextColor,fontSize:variables.buttonTextSize,paddingHorizontal:16,backgroundColor:"transparent"},"NativeBase.Icon":{color:variables.inverseTextColor,fontSize:24,marginHorizontal:16,paddingTop:platform===_commonColor.PLATFORM.IOS?2:undefined},"NativeBase.IconNB":{color:variables.inverseTextColor,fontSize:24,marginHorizontal:16,paddingTop:platform===_commonColor.PLATFORM.IOS?2:undefined},".iconLeft":{"NativeBase.Text":{marginLeft:0},"NativeBase.IconNB":{marginRight:0,marginLeft:16},"NativeBase.Icon":{marginRight:0,marginLeft:16}},".iconRight":{"NativeBase.Text":{marginRight:0},"NativeBase.IconNB":{marginLeft:0,marginRight:16},"NativeBase.Icon":{marginLeft:0,marginRight:16}},".picker":{"NativeBase.Text":{".note":{fontSize:16,lineHeight:null}}},paddingVertical:variables.buttonPadding,backgroundColor:variables.buttonPrimaryBg,borderRadius:variables.borderRadiusBase,borderColor:variables.buttonPrimaryBg,borderWidth:null,height:45,flexDirection:"row",elevation:2,shadowColor:platformStyle===_commonColor.PLATFORM.MATERIAL?variables.brandDark:undefined,shadowOffset:platformStyle===_commonColor.PLATFORM.MATERIAL?{width:0,height:2}:undefined,shadowOpacity:platformStyle===_commonColor.PLATFORM.MATERIAL?0.2:undefined,shadowRadius:platformStyle===_commonColor.PLATFORM.MATERIAL?1.2:undefined,alignItems:"center",justifyContent:"space-between"};return buttonTheme;};
//# sourceMappingURL=Button.js.map