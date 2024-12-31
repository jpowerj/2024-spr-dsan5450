"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d"],{94831:(e,t,r)=>{r.d(t,{i:()=>n});var o=r(76006),i=r(16852);function s(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}let n=class ClientDefinedProviderElement extends i.b{static build(e,t){let r=new ClientDefinedProviderElement;return r.providerId=e,r.provider=t,r}connectedCallback(){this.setAttribute("data-targets","command-palette.clientDefinedProviderElements")}};s([o.Lj],n.prototype,"providerId",void 0),n=s([o.Ih],n)},7667:(e,t,r)=>{r.d(t,{Z:()=>i,o:()=>g});var o,i,s=r(76006),n=r(94831),a=r(25543),l=r(48084),c=r(50034),p=r(80425),d=r(3447),u=r(52418);function h(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}let m=()=>navigator.platform.match(/Mac/),y=m()?"metaKey":"ctrlKey",f=m()?"Meta":"Control",g=e=>e instanceof KeyboardEvent&&e[y];(o=class CommandPalette extends HTMLElement{setup(){this.modes=Array.from(this.querySelectorAll("command-palette-mode")),this.defaultMode=this.querySelector(".js-command-palette-default-mode"),this.commandPaletteInput=this.querySelector("command-palette-input"),this.groups=this.querySelectorAll("command-palette-item-group"),this.defaultOpen&&(this.manualToggle(!0),this.clearReturnToParams()),window.commandPalette=this,this.setupComplete=!0;let e=new Event("command-palette-ready",{bubbles:!0,cancelable:!0});this.dispatchEvent(e)}connectedCallback(){this.setupComplete||this.setup()}clear(e=!0){this.clearProviderCaches(),this.pageStack.reset(),e&&this.resetInput()}clearCommands(e=!0){return this.everActivated&&(this.clearCommandProviderCaches(),e&&this.resetInput()),Promise.resolve()}resetInput(){this.commandPaletteInput.inputValue=""}activate(){this.sessionId=this.generateSessionId(),this.commandPaletteInput.scopeElement.smallDisplay=this.offsetWidth<450,this.commandPaletteInput.focus(),this.setActiveModeElement(),this.setQuery(),this.toggleTips(),this.pageStack.commandPaletteActivated(),this.dispatchEvent(new CustomEvent("command-palette-activated",{detail:{previouslyActivated:this.everActivated}})),this.activated=!0,this.everActivated=!0,(0,u.j)("session_initiated")}deactivate(){this.activated=!1,this.pageStack.unbindListeners(),this.clear(),this.previouslyActiveElement&&this.previouslyActiveElement.focus(),(0,u.j)("session_terminated")}generateSessionId(){return(0,p.k)(`${Date.now()}_${this.userId}_${this.query.path}`).toString()}manualToggle(e){let t=this.closest("details");e?t.open=!0:t.removeAttribute("open")}dismiss(){this.manualToggle(!1),this.clear()}get secondaryActivationHotkey(){let e=this.activationHotkey.split(",");return e.length>1?e[e.length-1]:""}get platformActivationHotkey(){return this.platformHotkey(this.activationHotkey)}get platformSecondaryActivationHotkey(){return this.platformHotkey(this.secondaryActivationHotkey)}get platformCommandModeHotkey(){return this.platformHotkey(this.commandModeHotkey)}platformHotkey(e){if("none"===e)return"";let t=e;return m()&&(t=t.replace(/Mod\+Alt/g,"Alt+Mod")),t.replace(/Mod/g,f)}onInput(){this.everActivated&&(this.commandPaletteInput.typeahead="",this.setActiveModeElement(),this.setQuery(),this.toggleTips(),this.updateOverlay())}updateOverlay(){let e=this.getMode();for(let t of(this.commandPaletteInput.overlay=e,this.groups))t.renderElement(e);if(e&&""===this.getTextWithoutMode()){let e=this.getModeElement().placeholder||"";this.commandPaletteInput.showModePlaceholder(e)}else this.commandPaletteInput.showModePlaceholder("")}itemsUpdated(e){if(!(e instanceof CustomEvent))return;let t=e.detail.items,r=t.filter(e=>e.group!==a.O.footerGroupId),o=r.filter(e=>!e.group||!a.O.helpGroupIds.includes(e.group)),i=r.length>o.length,s=0===o.length&&this.activated;o.length>0?this.toggleEmptyState(!1,i):s&&(this.toggleEmptyState(!0,i),this.toggleTips()),this.toggleErrorTips()}loadingStateChanged(e){e instanceof CustomEvent&&(this.commandPaletteInput.loading=e.detail.loading)}pageFetchError(e){e instanceof CustomEvent&&(this.error=!0,this.toggleErrorTips())}selectedItemChanged(e){if(!(e instanceof CustomEvent))return;let t=e.detail.item,r=e.detail.isDefaultSelection;this.updateTypeahead(t,r)}setActiveModeElement(){let e=this.commandPaletteInput.inputValue.substring(0,1),t=this.modes.filter(t=>t.active(this.query.scope,e)).find(t=>t.character()===e);this.activeMode=t||this.defaultMode,this.pageStack.currentMode=this.activeMode.character()}setQuery(){this.query=new c.A(this.getTextWithoutMode().trimStart(),this.getMode(),{scope:this.commandPaletteInput.scope,subjectId:this.pageStack.defaultScopeId,subjectType:this.pageStack.defaultScopeType,returnTo:this.returnTo}),this.pageStack.currentQueryText=this.getTextWithoutMode().trimStart()}getModeElement(){return this.activeMode}getMode(){return this.getModeElement()?.character()}getTextWithoutMode(){if(!this.commandPaletteInput)return"";let e=this.commandPaletteInput.inputValue,t=this.getMode();return t&&e.startsWith(t)?e.substring(1):e}get selectedItem(){return this.pageStack.currentPage.selectedItem}onSelect(e){this.selectedItem?this.selectedItem.item.select(this):e.preventDefault()}autocomplete(e){(0,u.j)("autocompleted",e);let t=this.commandPaletteInput;void 0!==e.typeahead?t.inputValue=t.overlay+e.typeahead:t.inputValue=t.overlay+e.title}setScope(e){(0,u.j)("scoped");let t=e||this.commandPaletteInput.scope;for(let e of t.tokens){let r=e===t.tokens[t.tokens.length-1],o=new l.j({title:e.value,scopeId:e.id,scopeType:e.type});this.pageStack.push(o,!r)}this.commandPaletteInput.inputValue=""}onDescope(){this.toggleEmptyState(!1,!1),this.pageStack.pop(),this.toggleTips()}onInputClear(){this.pageStack.clear()}onKeydown(e){"Enter"===e.key&&this.selectedItem?(this.selectedItem?.activate(this,e),e.preventDefault(),e.stopPropagation()):"ArrowDown"===e.key?(this.navigateToItem(1),e.preventDefault(),e.stopPropagation()):"ArrowUp"===e.key?(this.navigateToItem(-1),e.preventDefault(),e.stopPropagation()):this.isCopyEvent(e)&&this.selectedItem&&(this.selectedItem.copy(this),e.preventDefault(),e.stopPropagation())}close(e){if(e instanceof KeyboardEvent&&"Enter"!==e.key)return;let t=document.querySelector(".command-palette-details-dialog");t.toggle(!1),e.stopImmediatePropagation(),e.preventDefault()}navigateToItem(e){this.pageStack.navigate(e)}toggleTips(){let e=this.modeTips.filter(e=>e.available(this.query)),t=e[Math.floor(Math.random()*e.length)];for(let e of this.modeTips)e.hidden=t!==e;this.pageStack.hasVisibleTip=!!t,this.pageStack.currentPage.recomputeStyles()}toggleEmptyState(e,t){for(let t of this.emptyStateElements)t.toggle(this.query,e);if(!t&&e){let e=this.serverDefinedProviderElements.find(e=>"help"===e.type);e&&this.pageStack.currentPage.fetch([e.provider],{isEmpty:!0})}}toggleErrorTips(){for(let e of this.errorStateTips)e.toggle(this.query,!1,this.error)}inputReady(e){e instanceof CustomEvent&&(this.resizeObserver||(this.resizeObserver=new ResizeObserver(e=>{for(let t of e)this.commandPaletteInput.scopeElement.smallDisplay=t.contentRect.width<450}),this.resizeObserver.observe(this)))}updateInputScope(e){e instanceof CustomEvent&&(this.commandPaletteInput.scope=this.pageStack.scope,this.setQuery())}updateTypeahead(e,t=!1){""===this.getTextWithoutMode()&&(!e||t)?this.commandPaletteInput.typeahead="":e&&(this.commandPaletteInput.typeahead=e.typeahead??e.title??"")}isCopyEvent(e){return!this.commandPaletteInput.textSelected()&&(m()?e.metaKey&&"c"===e.key:e.ctrlKey&&"c"===e.key)}setQueryScope(){this.query.scope=this.commandPaletteInput.scope}get providerElements(){return[...this.serverDefinedProviderElements,...this.clientDefinedProviderElements]}get commandsProviderElements(){return this.providerElements.filter(e=>e.provider?.hasCommands)}clearProviderCaches(){for(let e of this.providerElements)e.provider?.clearCache()}clearCommandProviderCaches(){for(let e of this.commandsProviderElements)e.provider?.clearCache()}registerProvider(e,t){let r=this.querySelector(`client-defined-provider[data-provider-id="${e}"]`);r&&r.remove();let o=n.i.build(e,t);this.appendChild(o)}pushPage(e,t=!1){t&&this.pageStack.clear(!1),this.pageStack.push(e),this.resetInput()}get tipElements(){let e=this.querySelectorAll("command-palette-tip");return Array.from(e)}get modeTips(){return this.tipElements.filter(e=>!e.onEmpty&&!e.onError)}get emptyStateElements(){return this.tipElements.filter(e=>e.onEmpty)}get errorStateTips(){return this.tipElements.filter(e=>e.onError)}get placeholder(){return this.getAttribute("placeholder")||""}clearReturnToParams(){let e=new URLSearchParams(location.search);e.delete("command_palette_open"),e.delete("command_query"),e.delete("command_mode"),e.delete("clear_command_scope"),history.replaceState(null,"",`?${e}${location.hash}`)}displayFlash(e,t,r=5e3){let o=document.querySelector(".js-command-palette-toasts");if(!o)return;let i=o.querySelectorAll(".Toast");for(let e of i)e.hidden=!0;let s=o.querySelector(`.Toast.Toast--${e}`);if(!s)return;let n=s.querySelector(".Toast-content");n.textContent=t,s.hidden=!1,setTimeout(()=>{s.hidden=!0},r)}constructor(...e){super(...e),this.everActivated=!1,this.activated=!1,this.error=!1,this.query=new c.A("",""),this.setupComplete=!1,this.sessionId="",this.returnTo="",this.userId="",this.defaultOpen=!1,this.activationHotkey="Mod+k,Mod+Alt+k",this.commandModeHotkey="Mod+Shift+K"}}).tagName="command-palette",o.attrPrefix="",i=o,h([s.Lj],i.prototype,"returnTo",void 0),h([s.Lj],i.prototype,"userId",void 0),h([s.Lj],i.prototype,"defaultOpen",void 0),h([s.Lj],i.prototype,"activationHotkey",void 0),h([s.Lj],i.prototype,"commandModeHotkey",void 0),h([s.fA],i.prototype,"pageStack",void 0),h([s.GO],i.prototype,"clientDefinedProviderElements",void 0),h([s.GO],i.prototype,"serverDefinedProviderElements",void 0),h([(0,d.D)(250)],i.prototype,"clearCommands",null),i=h([s.Ih],i)},25543:(e,t,r)=>{r.d(t,{O:()=>a});var o,i=r(76006),s=r(45974);function n(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}let a=((o=class CommandPaletteItemGroupElement extends HTMLElement{connectedCallback(){this.classList.add("py-2","border-top"),this.setAttribute("hidden","true"),this.skipTemplate||this.renderElement(""),this.skipTemplate=!0}prepareForNewItems(){this.list.textContent="",this.setAttribute("hidden","true"),this.classList.contains("border-top")||this.classList.add("border-top")}hasItem(e){return this.list.querySelectorAll(`[data-item-id="${e.id}"]`).length>0}renderElement(e){(0,s.sY)(this.hasTitle?(0,s.dy)`
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              ${this.groupTitle}
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              ${e?"":this.groupHint}
            </span>
          </div>
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `:(0,s.dy)`
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `,this)}push(e){this.removeAttribute("hidden"),this.topGroup&&this.atLimit?e.itemId!==this.firstItem.itemId&&this.replaceTopGroupItem(e):this.list.append(e)}replaceTopGroupItem(e){this.list.replaceChild(e,this.firstItem)}groupLimitForScope(){let e=this.closest("command-palette");if(e){let t=e.query.scope.type;return JSON.parse(this.groupLimits)[t]}}get limit(){let e=this.groupLimitForScope();return this.topGroup?1:this.isModeActive()?50:e||CommandPaletteItemGroupElement.defaultGroupLimit}get atLimit(){return this.list.children.length>=this.limit}parsedGroupLimits(){return this.groupLimits?JSON.parse(this.groupLimits):{}}limitForScopeType(e){let t=this.parsedGroupLimits(),r=t[e];return this.topGroup?1:this.isModeActive()?CommandPaletteItemGroupElement.activeModeLimit:r||0===r?r:CommandPaletteItemGroupElement.defaultGroupLimit}atLimitForScopeType(e){return this.list.children.length>=this.limitForScopeType(e)}isModeActive(){let e=this.closest("command-palette");return!!e&&e.getMode()}get topGroup(){return this.groupId===CommandPaletteItemGroupElement.topGroupId}get hasTitle(){return this.groupId!==CommandPaletteItemGroupElement.footerGroupId&&this.groupId!==CommandPaletteItemGroupElement.defaultGroupId}get itemNodes(){return this.list.querySelectorAll("command-palette-item")}get firstItem(){return this.itemNodes[0]}get lastItem(){return this.itemNodes[this.itemNodes.length-1]}constructor(...e){super(...e),this.groupLimits="",this.defaultPriority=0,this.skipTemplate=!1}}).defaultGroupLimit=5,o.activeModeLimit=50,o.topGroupId="top",o.defaultGroupId="default",o.footerGroupId="footer",o.helpGroupIds=["modes_help","filters_help"],o.commandGroupIds=["commands"],o.topGroupScoreThreshold=9,o);n([i.Lj],a.prototype,"groupTitle",void 0),n([i.Lj],a.prototype,"groupHint",void 0),n([i.Lj],a.prototype,"groupId",void 0),n([i.Lj],a.prototype,"groupLimits",void 0),n([i.Lj],a.prototype,"defaultPriority",void 0),n([i.Lj],a.prototype,"skipTemplate",void 0),n([i.fA],a.prototype,"list",void 0),n([i.fA],a.prototype,"header",void 0),a=n([i.Ih],a)},64316:(e,t,r)=>{r.d(t,{v:()=>a});var o,i=r(76006),s=r(45974);function n(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}let a=((o=class CommandPaletteScopeElement extends HTMLElement{connectedCallback(){this.classList.add("d-inline-flex")}get lastToken(){return this.tokens[this.tokens.length-1]}get text(){return this.tokens.map(e=>e.text).join("/")}get id(){return this.lastToken?this.lastToken.id:CommandPaletteScopeElement.emptyScope.id}get type(){return this.lastToken?this.lastToken.type:CommandPaletteScopeElement.emptyScope.type}get scope(){return this.hasScope()?{text:this.text,type:this.type,id:this.id,tokens:this.tokens}:CommandPaletteScopeElement.emptyScope}set scope(e){this.renderTokens(e.tokens)}renderTokens(e){this.clearScope();let t=0,r=e.length,o=this.smallDisplay?14:20,i=this.smallDisplay?20:55;for(let s=e.length-1;s>=0&&!(t+Math.min(e[s].text.length,o)+5>i);s--)t+=Math.min(e[s].text.length,o)+5,r=s;(0,s.sY)((0,s.dy)`${e.map((e,t)=>{let i=e.text.length>o?`${e.text.substring(0,o-3)}...`:e.text;return(0,s.dy)`
        <command-palette-token
          data-text="${e.text}"
          data-id="${e.id}"
          data-type="${e.type}"
          data-value="${e.value}"
          data-targets="command-palette-scope.tokens"
          hidden="${t<r}"
          class="color-fg-default text-semibold"
          style="white-space:nowrap;line-height:20px;"
          >${i}<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        </command-palette-token>
      `})}`,this),this.hidden=!this.hasScope(),0!==r&&(this.placeholder.hidden=!1)}removeToken(){this.lastToken&&(this.lastRemovedToken=this.lastToken,this.lastToken.remove(),this.renderTokens(this.tokens))}hasScope(){return this.tokens.length>0&&this.type&&this.id&&this.text}clearScope(){for(let e of this.tokens)e.remove();this.placeholder.hidden=!0}attributeChangedCallback(e,t,r){this.isConnected&&"data-small-display"===e&&t!==r&&this.renderTokens(this.tokens)}constructor(...e){super(...e),this.smallDisplay=!1}}).emptyScope={type:"",text:"",id:"",tokens:[]},o.observedAttributes=["data-small-display"],o);n([i.Lj],a.prototype,"smallDisplay",void 0),n([i.fA],a.prototype,"placeholder",void 0),n([i.GO],a.prototype,"tokens",void 0),a=n([i.Ih],a)},98950:(e,t,r)=>{r.d(t,{z:()=>o});function o(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e);let t=document.body;if(!t)return Promise.reject(Error());let r=function(e){let t=document.createElement("pre");return t.style.width="1px",t.style.height="1px",t.style.position="fixed",t.style.top="5px",t.textContent=e,t}(e);return t.appendChild(r),!function(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e.textContent||"");let t=getSelection();if(null==t)return Promise.reject(Error());t.removeAllRanges();let r=document.createRange();r.selectNodeContents(e),t.addRange(r),document.execCommand("copy"),t.removeAllRanges(),Promise.resolve()}(r),t.removeChild(r),Promise.resolve()}},24728:(e,t,r)=>{r.d(t,{i:()=>s});var o=r(7667),i=r(34106);let s=class AccessPolicyItem extends i.g{activate(e,t){t instanceof PointerEvent?super.activate(e,t):t instanceof KeyboardEvent&&this.activateLinkBehavior(e,t,(0,o.o)(t))}get key(){return this.title}};s=function(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}([i.O],s)},776:(e,t,r)=>{r.d(t,{d:()=>s});var o=r(34106),i=r(89445);let s=class CommandItem extends o.g{get action(){return this._action}async activate(e){super.activate(e);let t=e.getAttribute("commands-path");if(!t)return;let r=e.query.params();r.set("command",this.action.id),e.commandPaletteInput.loading=!0;let o=await (0,i.Q)(t,{method:"POST",body:r});if(e.commandPaletteInput.loading=!1,o.ok){let t=await o.json();this.handleResponse(e,t.action,t.arguments)}else e.displayFlash("error","Failed to run command")}handleResponse(e,t,r){"displayFlash"===t&&(e.displayFlash(r.type,r.message),e.dismiss())}constructor(e){super(e),this.typeahead=e.title,this.group="commands"}};s=function(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}([o.O],s)},4328:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(34106),i=r(98950);let s=class CopyableItem extends o.g{get action(){return this._action}async activate(e){super.activate(e);try{await (0,i.z)(this.action.text),e.displayFlash("success",this.action.message),e.dismiss()}catch{e.displayFlash("error","Copy failed")}}constructor(e){super(e),this.priority=11,this.score=1,this.typeahead=e.title,this.group="commands"}};s=function(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}([o.O],s)},79922:(e,t,r)=>{r.d(t,{B:()=>i});var o=r(34106);let i=class HelpItem extends o.g{static from(e){return new HelpItem({title:e.title,typeahead:"",priority:-10-e.index,score:-10,group:e.group,action:{type:"help",description:"",prefix:e.prefix},persistentHint:e.persistentHint})}activate(e,t){e.commandPaletteInput.inputValue=this.action.prefix+e.getTextWithoutMode()}autocomplete(e){e.commandPaletteInput.inputValue=this.action.prefix+e.getTextWithoutMode()}calculateScore(e){return 0}get action(){return this._action}constructor(e){super(e),this.persistentHint=e.persistentHint}};i=function(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}([o.O],i)},8407:(e,t,r)=>{r.d(t,{s:()=>s});var o=r(7667),i=r(34106);let s=class JumpToItem extends i.g{static from(e){return new JumpToItem({title:e.title,typeahead:e.title,priority:1,score:1,group:e.group,action:{type:"jump_to",description:"",path:e.path},icon:{type:"octicon",id:e.icon}})}activate(e,t){t instanceof PointerEvent?super.activate(e,t):t instanceof KeyboardEvent&&this.activateLinkBehavior(e,t,(0,o.o)(t))}copy(e){super.copy(e);let t=new URL(this.action.path,window.location.origin);return this.copyToClipboardAndAnnounce(t.toString()),t.toString()}get key(){return`${super.key}/${this.action.path}`}get action(){return this._action}};s=function(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}([i.O],s)},73072:(e,t,r)=>{r.d(t,{V:()=>s});var o=r(8407),i=r(34106);let s=class JumpToOrgItem extends o.s{};s=function(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}([i.O],s)},35446:(e,t,r)=>{r.d(t,{W:()=>s});var o=r(8407),i=r(34106);let s=class JumpToTeamItem extends o.s{};s=function(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}([i.O],s)},63927:(e,t,r)=>{r.d(t,{U:()=>MainWindowCommandItem});var o=r(93345);let MainWindowCommandItem=class MainWindowCommandItem extends o.ck{get path(){}copy(e){}activate(e){this.command.run(e),this.command.dismissAfterRun&&e.dismiss()}isApplicable(e){return this.command.isApplicable(e)}select(e){this.command.select?this.command.select(e):e.autocomplete(this)}constructor(e,t){super({title:t.title??e.title,subtitle:t.subtitle??e.subtitle,typeahead:t.title??e.title,priority:t.priority??e.priority,group:t.group??e.group,icon:{type:t.iconType??e.iconType,id:t.icon??e.icon},hint:"Run command"}),this.command=e}}},95639:(e,t,r)=>{r.d(t,{K:()=>a});var o,i=r(34106),s=r(25543),n=r(8407);let a=((o=class SearchLinkItem extends n.s{static create(e){let t,r,o;let i=[...e.scope.tokens];for(;i.length>0&&!this.searchableScopeTypes.includes(i[i.length-1].type);)i.pop();if((o=i.length>0?i[i.length-1]:void 0)&&"repository"===o.type){let o=i.map(e=>e.text).join("/");t=`in ${o}`,r=`/${o}/search?q=${e.text}`}else if(o&&"owner"===o.type){let i=`org:${o.text} ${e.text}`;t=`in ${o.text}`,r=`/search?q=${i}`}else t="across all of GitHub",r=`/search?q=${e.text}`;return new SearchLinkItem({title:`Search ${e.text}${t}`,typeahead:"",priority:-10,score:-10,group:s.O.footerGroupId,action:{type:"jump_to",description:"",path:r},icon:{type:"octicon",id:"search-color-fg-muted"},titleScope:t})}autocomplete(e){}calculateScore(e){return 0}constructor(e){super(e),this.titleScope=e.titleScope}}).searchableScopeTypes=["owner","repository"],o);a=function(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}([i.O],a)},34106:(e,t,r)=>{r.d(t,{O:()=>s,g:()=>ServerDefinedItem});var o=r(93345),i=r(25543);function s(e){ServerDefinedItem.register(e)}let ServerDefinedItem=class ServerDefinedItem extends o.ck{static register(e){this.itemClasses[e.itemType]=e}static get itemType(){return this.buildItemType(this.name)}static buildItemType(e){return e.replace(/([A-Z]($|[a-z]))/g,"_$1").replace(/(^_|_Item$)/g,"").toLowerCase()}static build(e){let t=this.itemClasses[e.action.type];if(t)return new t(e);throw Error(`No item handler for ${e.action.type}`)}get action(){return this._action}get key(){return`${this.action.type}/${this.title}/${this.group}`}get path(){return this.action.path||""}get itemType(){return ServerDefinedItem.buildItemType(this.constructor.name)}select(e){this.scope?e.setScope(this.scope):e.autocomplete(this)}activate(e,t){}activateLinkBehavior(e,t,r){this.element?.activateLinkBehavior(e,t,r)}copy(e){}copyToClipboardAndAnnounce(e,t){this.element?.copyToClipboardAndAnnounce(e,t)}constructor(e){super(e),this.position="",this.score=e.score,this.scope=e.scope,this.matchFields=e.match_fields,this._action=e.action}};ServerDefinedItem.itemClasses={},ServerDefinedItem.defaultData={title:"",score:1,priority:1,action:{type:"",path:""},icon:{type:"octicon",id:"dash-color-fg-muted"},group:i.O.defaultGroupId}},48084:(e,t,r)=>{r.d(t,{j:()=>GlobalProvidersPage});let GlobalProvidersPage=class GlobalProvidersPage{get providers(){let e=[];for(let t of this._providerElements)t.provider&&e.push(t.provider);return e}get _providerElements(){return[...this.serverDefinedProviderElements,...this.clientDefinedProviderElements]}get serverDefinedProviderElements(){let e=document.querySelectorAll("server-defined-provider");return Array.from(e)}get clientDefinedProviderElements(){let e=document.querySelectorAll("client-defined-provider");return Array.from(e)}constructor(e){this.title=e.title,this.scopeId=e.scopeId,this.scopeType=e.scopeType}}},16852:(e,t,r)=>{r.d(t,{b:()=>ProviderElement});let ProviderElement=class ProviderElement extends HTMLElement{async fetchWithDebounce(e,t){return this.provider?(this._lastFetchQuery=e,await this.delay(this.provider.debounce),this._lastFetchQuery!==e)?{results:[]}:this.provider.fetch(e,t):{results:[]}}delay(e){return new Promise(t=>setTimeout(t,e))}}},97165:(e,t,r)=>{r.d(t,{B:()=>ProviderBase});var o=r(93345);let ProviderBase=class ProviderBase extends o.BX{fuzzyFilter(e,t,r=0){if(t.isBlank())return e;let o=[];for(let i of e){let e=i.calculateScore(t.text);e>r&&o.push(i)}return o}}},89803:(e,t,r)=>{r.d(t,{j:()=>ServerDefinedProvider});var o=r(97165);let ServerDefinedProvider=class ServerDefinedProvider extends o.B{get type(){return this.element.type}get modes(){return this.element.modes}get debounce(){return this.element.debounce}get scopeTypes(){return this.element.scopeTypes}get src(){return this.element.src}get hasWildCard(){return this.element.hasWildCard}get hasCommands(){return this.element.hasCommands}fetch(e,t){throw Error("Method not implemented.")}enabledFor(e){throw Error("Method not implemented.")}clearCache(){throw Error("Method not implemented.")}constructor(e){super(),this.element=e}}},50034:(e,t,r)=>{r.d(t,{A:()=>Query});var o=r(64316);let Query=class Query{get text(){return this.queryText}get mode(){return this.queryMode}get path(){return this.buildPath(this)}buildPath(e,t=e.text){return`scope:${e.scope.type}-${e.scope.id}/mode:${e.mode}/query:${t}`}clearScope(){this.scope=o.v.emptyScope}hasScope(){return this.scope.id!==o.v.emptyScope.id}isBlank(){return 0===this.text.trim().length}isPresent(){return!this.isBlank()}immutableCopy(){let e=this.text,t=this.mode,r={...this.scope};return new Query(e,t,{scope:r,subjectId:this.subjectId,subjectType:this.subjectType,returnTo:this.returnTo})}hasSameScope(e){return this.scope.id===e.scope.id}params(){let e=new URLSearchParams;return this.isPresent()&&e.set("q",this.text),this.hasScope()&&e.set("scope",this.scope.id),this.mode&&e.set("mode",this.mode),this.returnTo&&e.set("return_to",this.returnTo),this.subjectId&&e.set("subject",this.subjectId),e}constructor(e,t,{scope:r,subjectId:i,subjectType:s,returnTo:n}={}){this.queryText=e,this.queryMode=t,this.scope=r??o.v.emptyScope,this.subjectId=i,this.subjectType=s,this.returnTo=n}}},52418:(e,t,r)=>{r.d(t,{j:()=>p});var o=r(24728),i=r(776),s=r(4328),n=r(8407),a=r(63927),l=r(34106),c=r(95253);function p(e,t){let r;let p=document.querySelector("command-palette"),d="";t&&("commands"===t.group||"global_commands"===t.group)&&(d=t.title);let u={command_palette_session_id:p.sessionId,command_palette_scope:p.query.scope.type,command_palette_mode:p.getMode(),command_palette_title:d,command_palette_position:t?.position,command_palette_score:t?.score,command_palette_group:t?.group,command_palette_item_type:t instanceof l.g?t?.itemType:t?.constructor.name};r="activate"===e?t instanceof o.i?"access_policy_executed":t instanceof i.d||t instanceof a.U||t instanceof s.Z?"command_executed":t instanceof n.s?t.element?.newTabOpened?"jump_to_new_tab":"jump_to":"activate":e,(0,c.qP)(`command_palette_${r}`,u)}},89359:(e,t,r)=>{function o(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function i(){return`${window.location.protocol}//${window.location.host}${function(){let e=o("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=o("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let r=o("meta[name=analytics-location-params]");for(let e of(r&&(t+=(t?"&":"?")+r.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let r=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${r[0]}($|=)`,"g"),`$1${r[1]}$2`)}return t}()}`}r.d(t,{S:()=>i})},93345:(e,t,r)=>{r.d(t,{BX:()=>ProviderBase,Z4:()=>StaticItemsPage,ck:()=>Item});var o=r(47142),i=r(80425);let StaticItemsPage=class StaticItemsPage{constructor(e,t,r){this.providers=[],this.scopeType="static_items_page",this.title=e,this.scopeId=t,this.providers=[new StaticItemsProvider(r)]}};let StaticItemsProvider=class StaticItemsProvider{async fetch(e){let t=this.fuzzyFilter(this.items,e);return{results:t}}enabledFor(){return!0}clearCache(){}fuzzyFilter(e,t,r=0){if(t.isBlank())return e;let o=[];for(let i of e){let e=i.calculateScore(t.text);e>r&&o.push(i)}return o}constructor(e){this.hasCommands=!0,this.debounce=0;let t=e.length;this.items=e.map((e,r)=>(e.priority=t-r,e))}};let Item=class Item{get matchingFields(){return this.matchFields?this.matchFields:[this.title]}get key(){return`${this.title}-${this.group}-${this.subtitle}-${this.matchFields?.join("-")}`}get id(){return this._id||(this._id=(0,i.k)(this.key).toString()),this._id}calculateScore(e){let t=this.matchingFields.map(t=>this.calculateScoreForField({field:t,queryText:e}));return Math.max(...t)}calculateScoreForField({field:e,queryText:t}){return(0,o.CD)(t,e)?(0,o.Gs)(t,e):-1/0}constructor(e){this.score=0,this.position="",this.title=e.title,this.priority=e.priority,this.group=e.group,this.subtitle=e.subtitle,this.matchFields=e.matchFields,this.typeahead=e.typeahead,this.hint=e.hint,this.icon=e.icon}};let ProviderBase=class ProviderBase{fuzzyFilter(e,t,r=0){if(t.isBlank())return e;let o=[];for(let i of e){let e=i.calculateScore(t.text);e>r&&o.push(i)}return o}}},24601:(e,t,r)=>{r.d(t,{aJ:()=>P,cI:()=>S,eK:()=>f});var o=r(82918),i=r(49237),s=r(28382),n=r(89359),a=r(15981),l=r(53729),c=r(86283),p=r(46426);let d=!1,u=0,h=Date.now(),m=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function y(e){return!!("AbortError"===e.name||"TypeError"===e.name&&m.has(e.message)||e.name.startsWith("ApiError")&&m.has(e.message))}function f(e,t={}){if((0,p.c)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(E.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let r=Error(),o=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e),i={type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${o}`,stacktrace:S(r)};g(b(i,t));return}y(e)||g(b(v(e),t))}else y(e)||g(b(v(e),t))}async function g(e){if(!(!I&&!d&&u<10&&(0,i.Gb)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>T.test(e.filename)||T.test(e.function))){d=!0;return}u++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function v(e){return{type:e.name,value:e.message,stacktrace:S(e)}}function b(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,n.S)()||window.location.href,readyState:document.readyState,referrer:(0,a.wP)(),timeSinceLoad:Math.round(Date.now()-h),user:P()||void 0,bundler:l.A7,ui:!!document.querySelector('meta[name="ui"]')},t)}function S(e){return(0,s.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let T=/(chrome|moz|safari)-extension:\/\//;function P(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,o.b)();return`anonymous-${t}`}let I=!1;if(c.iG?.addEventListener("pageshow",()=>I=!1),c.iG?.addEventListener("pagehide",()=>I=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{f(e.data.error)})}let E=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},95253:(e,t,r)=>{let o;r.d(t,{YT:()=>u,qP:()=>h,yM:()=>m});var i=r(88149),s=r(86058),n=r(44544),a=r(71643);let{getItem:l}=(0,n.Z)("localStorage"),c="dimension_",p=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,i.n)("octolytics");delete e.baseContext,o=new s.R(e)}catch(e){}function d(e){let t=(0,i.n)("octolytics").baseContext||{};if(t)for(let[e,r]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=r,delete t[e]);let r=document.querySelector("meta[name=visitor-payload]");if(r){let e=JSON.parse(atob(r.content));Object.assign(t,e)}let o=new URLSearchParams(window.location.search);for(let[e,r]of o)p.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,a.B)().toString(),Object.assign(t,e)}function u(e){o?.sendPageView(d(e))}function h(e,t={}){let r=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,i=r?{service:r}:{};for(let[e,r]of Object.entries(t))null!=r&&(i[e]=`${r}`);if(o){let t=e||"unknown";d(i),o.sendEvent(t,d(i))}}function m(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},45974:(e,t,r)=>{r.d(t,{dy:()=>a.dy,sY:()=>a.sY,Au:()=>a.Au});var o=r(22490),i=r(7180);let s="jtml-no-op",n=o.ZO.createPolicy(s,{createHTML:e=>i.O.apply({policy:()=>e,policyName:s,fallback:e,fallbackOnError:!0})});var a=r(20845);a.js.setCSPTrustedTypesPolicy(n)},7180:(e,t,r)=>{r.d(t,{O:()=>c,d:()=>TrustedTypesPolicyError});var o=r(46426),i=r(71643),s=r(24601),n=r(27856),a=r.n(n),l=r(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let c={apply:function({policy:e,policyName:t,fallback:r,fallbackOnError:n=!1,sanitize:c,silenceErrorReporting:p=!1}){try{if((0,o.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return r;(0,i.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let s=e();return c&&new Promise(e=>{let r=window.performance.now(),o=a().sanitize(s,{FORBID_ATTR:[]}),i=window.performance.now();if(s.length!==o.length){let n=Error("Trusted Types policy output sanitized"),a=n.stack?.slice(0,1e3),c=s.slice(0,250);(0,l.qP)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:a,outputLength:s.length,sanitizedLength:o.length,executionTime:i-r}),e(s)}}),s}catch(e){if(e instanceof TrustedTypesPolicyError||(p||(0,s.eK)(e),(0,i.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!n))throw e}return r}}},22490:(e,t,r)=>{r.d(t,{ZO:()=>c});var o=r(86283),i=r(71643);function s(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let n={createHTML:s("createHTML"),createScript:s("createScript"),createScriptURL:s("createScriptURL")},a=new Map,l=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...n,...t})},c={createPolicy:(e,t)=>{if(a.has(e))return(0,i.b)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),a.get(e);{let r=l.createPolicy(e,t);return a.set(e,r),r}}},p=!1;o.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||p||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),p=!0)})},89445:(e,t,r)=>{function o(e,t={}){if(e.match(/^(https?:|\/\/)/))throw Error("Can not make cross-origin requests from verifiedFetch");let r={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:r})}function i(e,t){let r=t?.headers??{},i={...r,Accept:"application/json","Content-Type":"application/json"},s=t?.body?JSON.stringify(t.body):void 0;return o(e,{...t,body:s,headers:i})}r.d(t,{Q:()=>o,v:()=>i})}}]);
//# sourceMappingURL=app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d-347697322fcf.js.map