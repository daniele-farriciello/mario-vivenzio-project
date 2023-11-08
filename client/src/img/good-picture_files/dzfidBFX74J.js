;/*FB_PKG_DELIM*/

__d("IGDSTabGroupContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);c=b;g["default"]=c}),98);
__d("useBoolean",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useState;function a(a){a=j(a);var b=a[0],c=a[1];return{value:b,set:c,toggle:i(function(){return c(function(a){return!a})},[]),setTrue:i(function(){return c(!0)},[]),setFalse:i(function(){return c(!1)},[])}}g["default"]=a}),98);
__d("IGDSTabBase.react",["BaseButton.react","IGDSTabGroupContext","IGDSText.react","PolarisFastLink.react","nullthrows","react","stylex","useBoolean"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useContext,l={bottomBorder:{borderBottomColor:"x1bs97v6",borderBottomStyle:"x1q0q8m5",borderBottomWidth:"xso031l",$$css:!0},bottomBorderSelected:{borderBottomColor:"x1rx6pd",borderBottomStyle:"x1q0q8m5",borderBottomWidth:"xso031l",$$css:!0},hiddenLabel:{gridColumn:"xgkxs2y",gridRow:"x1ms6mhf",visibility:"xlshs6z",$$css:!0},iconContainer:{fontSize:"xgxxoiu",height:"xxk0z11",$$css:!0},iconContainerWithMarginEnd:{marginEnd:"x1emribx",marginLeft:null,marginRight:null,$$css:!0},labelContainer:{alignItems:"x6s0dn4",display:"xrvj5dj",gridTemplateColumns:"xa74l3y",$$css:!0},root:{alignItems:"x6s0dn4",display:"x78zum5",flexGrow:"x1iyjqo2",height:"xsdox4t",justifyContent:"xl56j7k",lineHeight:"x17ydfre",textAlign:"x2b8uid",$$css:!0},visibleLabel:{gridColumn:"xgkxs2y",gridRow:"x1ms6mhf",$$css:!0}};function a(a){a.__tabType;var b=a.bottomBorder,d=a.linkXStyle,e=a.size;a=babelHelpers.objectWithoutPropertiesLoose(a,["__tabType","bottomBorder","linkXStyle","size"]);var f=a.href,g=a.icon,i=a.label,m=a.value;a=c("useBoolean")(!1);var n=a.setFalse,o=a.setTrue;a=a.value;var p=c("nullthrows")(k(c("IGDSTabGroupContext"))),q=p.selectedValue,r=p.setSelectedValue;p=p.showLabels;var s=m===q;function t(){s||r(m)}q=g==null?null:j.jsx("span",{className:(h||(h=c("stylex")))(l.iconContainer,p&&l.iconContainerWithMarginEnd),children:j.jsx(g,{alt:i,color:a||s?"ig-primary-icon":"ig-secondary-icon",size:24})});g=j.jsxs(j.Fragment,{children:[q,p&&j.jsxs("span",{"aria-hidden":!0,className:"x6s0dn4 xrvj5dj xa74l3y",children:[j.jsx("span",{className:"xgkxs2y x1ms6mhf",children:j.jsx(c("IGDSText.react"),{color:s?"primaryText":"tertiaryText",size:e,weight:"bold",children:i})}),j.jsx("span",{className:"xgkxs2y x1ms6mhf xlshs6z",children:j.jsx(c("IGDSText.react"),{size:e,weight:"bold",children:i})})]})]});return f!=null?j.jsx(c("PolarisFastLink.react"),{href:f,xstyle:[l.root,d,b===!0&&(s?l.bottomBorderSelected:l.bottomBorder)],children:g}):j.jsx(c("BaseButton.react"),{"aria-label":i,onClick:t,onHoverEnd:n,onHoverStart:o,xstyle:[l.root,d,b===!0&&(s?l.bottomBorderSelected:l.bottomBorder)],children:g})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("IGDSHeroTab.react",["IGDSTabBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={leftAligned:{flexGrow:"x1c4vz4f",$$css:!0}};function a(a){return i.jsx(c("IGDSTabBase.react"),babelHelpers["extends"]({},a,{linkXStyle:j.leftAligned,size:"label"}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("IGDSTabGroup.react",["IGDSTabGroupContext","emptyFunction","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useMemo,l={leftAligned:{alignItems:"x7a106z",display:"x78zum5",rowGap:"xp1r0qw",columnGap:"xtqikln",justifyContent:"x1nhvcw1",$$css:!0},root:{alignItems:"x6s0dn4",display:"xrvj5dj",gridTemplateColumns:"x1lp0lgv",width:"xh8yej3",$$css:!0}};function a(a){var b=a.children,d=a.leftAlign,e=a.onChange,f=a.showLabels,g=f===void 0?!0:f,i=a.value;f=c("IGDSTabGroupContext");a=k(function(){var a;return{selectedValue:i,setSelectedValue:(a=e)!=null?a:c("emptyFunction"),showLabels:g}},[e,g,i]);var m=j.Children.toArray(b).length,n=k(function(){return{"--igdstabgroup-column-count":m}},[m]);return j.jsx(f.Provider,{value:a,children:j.jsx("div",{className:(h||(h=c("stylex")))(d===!0?l.leftAligned:l.root),style:n,children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("IGDSHeroTabGroup.react",["IGDSDivider.react","IGDSTabGroup.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.hasDivider;b=b===void 0?!0:b;a=babelHelpers.objectWithoutPropertiesLoose(a,["hasDivider"]);return i.jsxs(i.Fragment,{children:[i.jsx(c("IGDSTabGroup.react"),babelHelpers["extends"]({},a,{leftAlign:!0})),b&&i.jsx(c("IGDSDivider.react"),{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("IGDSTab.react",["IGDSTabBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsx(c("IGDSTabBase.react"),babelHelpers["extends"]({bottomBorder:!0},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDSACommonStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__u0Be1d57Mpf__JHASH__");b=h._("__JHASH__3_D4NdH98Lo__JHASH__");c=h._("__JHASH__qDRbI_FRuW6__JHASH__");d=h._("__JHASH__boI5WtRuQ86__JHASH__");e=h._("__JHASH__zRp2s1FeNY5__JHASH__");f=h._("__JHASH___BqkzgA1P3H__JHASH__");g.SUGGESTED_FOR_YOU_HEADER=a;g.MORE_ACCOUNTS_HEADER=b;g.SEARCH_NOT_PERSONALIZED_HEADER=c;g.SEARCH_FOR_YOU_HEADER=d;g.FOR_YOU_HEADER=e;g.FOLLOWING_HEADER=f}),98);
__d("PolarisScrollawayHeaderWrapper.react",["PolarisEventListener","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useEffect,m=b.useRef,n={root:{backgroundColor:"xvbhtw8",position:"xixxii4",top:"x13vifvy",zIndex:"xk3oba8",$$css:!0},takesFullPageWidth:{end:"xds687c",left:null,right:null,"@media (max-width:767px)_paddingTop":"xa39lb5","@media (max-width:767px)_start":"xn9dbyl","@media (max-width:767px)_left":null,"@media (max-width:767px)_right":null,"@media (min-width:1264px) and (max-width:1919px)_start":"x19elr03","@media (min-width:1264px) and (max-width:1919px)_left":null,"@media (min-width:1264px) and (max-width:1919px)_right":null,"@media (min-width:1920px)_start":"x19hu032","@media (min-width:1920px)_left":null,"@media (min-width:1920px)_right":null,"@media (min-width:768px) and (max-width: 1263px)_start":"x1w2ply9","@media (min-width:768px) and (max-width: 1263px)_left":null,"@media (min-width:768px) and (max-width: 1263px)_right":null,$$css:!0}};function a(a){var b=a.children,d=a.target;a=a.xstyle;var e=m(null),f=m({headerTop:0,lastScrollOffset:0}),g=f.current,i=k(function(){var a=e.current;if(a==null)return;var b=a.clientHeight,c=d!=null?d.scrollTop:window.pageYOffset;if(c<0)return;var f=c-g.lastScrollOffset,h=g.headerTop;f>0?h=Math.max(g.headerTop-f,-b):h=Math.min(g.headerTop-f,0);g.headerTop!==h&&(g.headerTop=h,window.requestAnimationFrame(function(){a.style.top=h+"px"}));g.lastScrollOffset=c},[g,d]);l(function(){var a,b=c("PolarisEventListener").add((a=d)!=null?a:window,"scroll",i);return function(){b.remove()}},[i,d]);return j.jsx("div",{className:(h||(h=c("stylex")))(n.root,(f=a)!=null?f:n.takesFullPageWidth),ref:e,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("usePolarisNonPersonalizedTabsImpressionLogger",["PolarisLogger","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("useSinglePartialViewImpression")({onImpressionStart:function(){d("PolarisLogger").logAction("dsaTabImpression",{source:a})}})}g["default"]=a}),98);
__d("PolarisTabbedFeedHeader.react",["IGDSHeroTab.react","IGDSHeroTabGroup.react","PolarisDSACommonStrings","PolarisNavigationLayoutContext","PolarisPanavisionQEHelpers","PolarisScrollawayHeaderWrapper.react","react","stylex","usePolarisNonPersonalizedTabsImpressionLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useContext,l={hasBottomNavTopMargin:{marginTop:"xvkph5b",$$css:!0},headerFamiliarFeed:{maxWidth:"x1mcj5oc",$$css:!0},headerNotFamiliarFeed:{maxWidth:"x1rva566",$$css:!0},headerSpacingFamiliarFeed:{marginTop:"x1muwf4h",$$css:!0},headerSpacingNotFamilarFeed:{marginTop:"x1pdq3kb",$$css:!0},headerTopMargin:{marginTop:"x11fxgd9",$$css:!0},root:{width:"xh8yej3",$$css:!0}};function a(a){var b=a.currentFeed;a=a.onChange;var e=k(c("PolarisNavigationLayoutContext"));e=e.navigationPosition;e=e==="bottom";var f=d("PolarisPanavisionQEHelpers").hasFamiliarFeed(),g=c("usePolarisNonPersonalizedTabsImpressionLogger")("feedPage");return j.jsxs("div",{children:[j.jsx(c("PolarisScrollawayHeaderWrapper.react"),{xstyle:[l.root,f?l.headerFamiliarFeed:l.headerNotFamiliarFeed],children:j.jsx("div",{className:(h||(h=c("stylex")))(l.headerTopMargin,e&&l.hasBottomNavTopMargin),ref:g,children:j.jsxs(c("IGDSHeroTabGroup.react"),{onChange:a,value:b,children:[j.jsx(c("IGDSHeroTab.react"),{label:d("PolarisDSACommonStrings").FOR_YOU_HEADER,value:"home"}),j.jsx(c("IGDSHeroTab.react"),{label:d("PolarisDSACommonStrings").FOLLOWING_HEADER,value:"following"})]})})}),j.jsx("div",{className:h(f?l.headerSpacingFamiliarFeed:l.headerSpacingNotFamilarFeed)})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisForYouFeedHeader.react",["IGDSText.react","PolarisDSACommonStrings","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(){return i.jsx("div",{className:"x1qjc9v5 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdt5ytf x2lah0s xr9ek0c x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x11njtxf",children:i.jsx(c("IGDSText.react"),{size:"headline2",weight:"bold",children:d("PolarisDSACommonStrings").FOR_YOU_HEADER})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSearchTabs.react",["IGDSTab.react","IGDSTabGroup.react","PolarisDSACommonStrings","PolarisLogger","PolarisReactRedux","PolarisSearchActions","PolarisSearchConstants","react","usePolarisNonPersonalizedTabsImpressionLogger","usePolarisSelector"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.pendingQuery;a=c("usePolarisSelector")(function(a){return a.search});var e=d("PolarisReactRedux").useDispatch(),f=function(a){e(d("PolarisSearchActions").switchSearchTab(a,b)),d("PolarisLogger").logAction("dsaTabSwitch",{intent_source:a===d("PolarisSearchConstants").SearchTabConstants["default"]?"default":"non_profiled",source:"search"})},g=c("usePolarisNonPersonalizedTabsImpressionLogger")("search");return i.jsx("div",{className:"x4afe7t x127lhb5",ref:g,children:i.jsxs(c("IGDSTabGroup.react"),{onChange:f,value:a.currentSearchTab,children:[i.jsx(c("IGDSTab.react"),{label:d("PolarisDSACommonStrings").SEARCH_FOR_YOU_HEADER,value:d("PolarisSearchConstants").SearchTabConstants["default"]}),i.jsx(c("IGDSTab.react"),{label:d("PolarisDSACommonStrings").SEARCH_NOT_PERSONALIZED_HEADER,value:d("PolarisSearchConstants").SearchTabConstants.notPersonalized})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);