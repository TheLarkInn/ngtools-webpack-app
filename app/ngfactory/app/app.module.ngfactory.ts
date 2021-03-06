/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '../../app-routing.module';
import * as import7 from '@angular/common/src/localization';
import * as import8 from '@angular/core/src/application_init';
import * as import9 from '@angular/core/src/testability/testability';
import * as import10 from '@angular/core/src/application_ref';
import * as import11 from '@angular/core/src/linker/compiler';
import * as import12 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import13 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import14 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import15 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import16 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import17 from '@angular/core/src/linker/view_utils';
import * as import18 from '@angular/platform-browser/src/browser/title';
import * as import19 from '@angular/common/src/location/location';
import * as import20 from '@angular/router/src/url_tree';
import * as import21 from '@angular/router/src/router_outlet_map';
import * as import22 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import23 from '@angular/core/src/di/injector';
import * as import24 from './home-view.component.ngfactory';
import * as import25 from './app.component.ngfactory';
import * as import26 from '@angular/core/src/application_tokens';
import * as import27 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import28 from '@angular/platform-browser/src/dom/events/key_events';
import * as import29 from '@angular/core/src/zone/ng_zone';
import * as import30 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import31 from '@angular/common/src/location/platform_location';
import * as import32 from '@angular/common/src/location/location_strategy';
import * as import33 from '../../home-view.component';
import * as import34 from '@angular/router/src/router';
import * as import35 from '@angular/core/src/console';
import * as import36 from '@angular/core/src/i18n/tokens';
import * as import37 from '@angular/core/src/error_handler';
import * as import38 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import39 from '@angular/platform-browser/src/dom/animation_driver';
import * as import40 from '@angular/core/src/render/api';
import * as import41 from '@angular/core/src/security';
import * as import42 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import43 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import44 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import45 from '@angular/router/src/router_config_loader';
import * as import46 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _ROUTER_FORROOT_GUARD_3:any;
  _RouterModule_4:import5.RouterModule;
  _AppRoutingModule_5:import6.AppRoutingModule;
  _AppModule_6:import1.AppModule;
  __LOCALE_ID_7:any;
  __NgLocalization_8:import7.NgLocaleLocalization;
  _ErrorHandler_9:any;
  _ApplicationInitStatus_10:import8.ApplicationInitStatus;
  _Testability_11:import9.Testability;
  _ApplicationRef__12:import10.ApplicationRef_;
  __ApplicationRef_13:any;
  __Compiler_14:import11.Compiler;
  __APP_ID_15:any;
  __DOCUMENT_16:any;
  __HAMMER_GESTURE_CONFIG_17:import12.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_18:any[];
  __EventManager_19:import13.EventManager;
  __DomSharedStylesHost_20:import14.DomSharedStylesHost;
  __AnimationDriver_21:any;
  __DomRootRenderer_22:import15.DomRootRenderer_;
  __RootRenderer_23:any;
  __DomSanitizer_24:import16.DomSanitizerImpl;
  __Sanitizer_25:any;
  __ViewUtils_26:import17.ViewUtils;
  __IterableDiffers_27:any;
  __KeyValueDiffers_28:any;
  __SharedStylesHost_29:any;
  __Title_30:import18.Title;
  __ROUTER_CONFIGURATION_31:any;
  __LocationStrategy_32:any;
  __Location_33:import19.Location;
  __UrlSerializer_34:import20.DefaultUrlSerializer;
  __RouterOutletMap_35:import21.RouterOutletMap;
  __NgModuleFactoryLoader_36:import22.SystemJsNgModuleLoader;
  __ROUTES_37:any[];
  __Router_38:any;
  __ActivatedRoute_39:any;
  __APP_BOOTSTRAP_LISTENER_40:any[];
  constructor(parent:import23.Injector) {
    super(parent,[
      import24.HomeViewNgFactory,
      import25.AppComponentNgFactory
    ]
    ,[import25.AppComponentNgFactory]);
  }
  get _LOCALE_ID_7():any {
    if ((this.__LOCALE_ID_7 == (null as any))) { (this.__LOCALE_ID_7 = 'en-US'); }
    return this.__LOCALE_ID_7;
  }
  get _NgLocalization_8():import7.NgLocaleLocalization {
    if ((this.__NgLocalization_8 == (null as any))) { (this.__NgLocalization_8 = new import7.NgLocaleLocalization(this._LOCALE_ID_7)); }
    return this.__NgLocalization_8;
  }
  get _ApplicationRef_13():any {
    if ((this.__ApplicationRef_13 == (null as any))) { (this.__ApplicationRef_13 = this._ApplicationRef__12); }
    return this.__ApplicationRef_13;
  }
  get _Compiler_14():import11.Compiler {
    if ((this.__Compiler_14 == (null as any))) { (this.__Compiler_14 = new import11.Compiler()); }
    return this.__Compiler_14;
  }
  get _APP_ID_15():any {
    if ((this.__APP_ID_15 == (null as any))) { (this.__APP_ID_15 = import26._appIdRandomProviderFactory()); }
    return this.__APP_ID_15;
  }
  get _DOCUMENT_16():any {
    if ((this.__DOCUMENT_16 == (null as any))) { (this.__DOCUMENT_16 = import4._document()); }
    return this.__DOCUMENT_16;
  }
  get _HAMMER_GESTURE_CONFIG_17():import12.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_17 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_17 = new import12.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_17;
  }
  get _EVENT_MANAGER_PLUGINS_18():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_18 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_18 = [
      new import27.DomEventsPlugin(),
      new import28.KeyEventsPlugin(),
      new import12.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_17)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_18;
  }
  get _EventManager_19():import13.EventManager {
    if ((this.__EventManager_19 == (null as any))) { (this.__EventManager_19 = new import13.EventManager(this._EVENT_MANAGER_PLUGINS_18,this.parent.get(import29.NgZone))); }
    return this.__EventManager_19;
  }
  get _DomSharedStylesHost_20():import14.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_20 == (null as any))) { (this.__DomSharedStylesHost_20 = new import14.DomSharedStylesHost(this._DOCUMENT_16)); }
    return this.__DomSharedStylesHost_20;
  }
  get _AnimationDriver_21():any {
    if ((this.__AnimationDriver_21 == (null as any))) { (this.__AnimationDriver_21 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_21;
  }
  get _DomRootRenderer_22():import15.DomRootRenderer_ {
    if ((this.__DomRootRenderer_22 == (null as any))) { (this.__DomRootRenderer_22 = new import15.DomRootRenderer_(this._DOCUMENT_16,this._EventManager_19,this._DomSharedStylesHost_20,this._AnimationDriver_21)); }
    return this.__DomRootRenderer_22;
  }
  get _RootRenderer_23():any {
    if ((this.__RootRenderer_23 == (null as any))) { (this.__RootRenderer_23 = import30._createConditionalRootRenderer(this._DomRootRenderer_22,this.parent.get(import30.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_23;
  }
  get _DomSanitizer_24():import16.DomSanitizerImpl {
    if ((this.__DomSanitizer_24 == (null as any))) { (this.__DomSanitizer_24 = new import16.DomSanitizerImpl()); }
    return this.__DomSanitizer_24;
  }
  get _Sanitizer_25():any {
    if ((this.__Sanitizer_25 == (null as any))) { (this.__Sanitizer_25 = this._DomSanitizer_24); }
    return this.__Sanitizer_25;
  }
  get _ViewUtils_26():import17.ViewUtils {
    if ((this.__ViewUtils_26 == (null as any))) { (this.__ViewUtils_26 = new import17.ViewUtils(this._RootRenderer_23,this._APP_ID_15,this._Sanitizer_25)); }
    return this.__ViewUtils_26;
  }
  get _IterableDiffers_27():any {
    if ((this.__IterableDiffers_27 == (null as any))) { (this.__IterableDiffers_27 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_27;
  }
  get _KeyValueDiffers_28():any {
    if ((this.__KeyValueDiffers_28 == (null as any))) { (this.__KeyValueDiffers_28 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_28;
  }
  get _SharedStylesHost_29():any {
    if ((this.__SharedStylesHost_29 == (null as any))) { (this.__SharedStylesHost_29 = this._DomSharedStylesHost_20); }
    return this.__SharedStylesHost_29;
  }
  get _Title_30():import18.Title {
    if ((this.__Title_30 == (null as any))) { (this.__Title_30 = new import18.Title()); }
    return this.__Title_30;
  }
  get _ROUTER_CONFIGURATION_31():any {
    if ((this.__ROUTER_CONFIGURATION_31 == (null as any))) { (this.__ROUTER_CONFIGURATION_31 = {}); }
    return this.__ROUTER_CONFIGURATION_31;
  }
  get _LocationStrategy_32():any {
    if ((this.__LocationStrategy_32 == (null as any))) { (this.__LocationStrategy_32 = import5.provideLocationStrategy(this.parent.get(import31.PlatformLocation),this.parent.get(import32.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_31)); }
    return this.__LocationStrategy_32;
  }
  get _Location_33():import19.Location {
    if ((this.__Location_33 == (null as any))) { (this.__Location_33 = new import19.Location(this._LocationStrategy_32)); }
    return this.__Location_33;
  }
  get _UrlSerializer_34():import20.DefaultUrlSerializer {
    if ((this.__UrlSerializer_34 == (null as any))) { (this.__UrlSerializer_34 = new import20.DefaultUrlSerializer()); }
    return this.__UrlSerializer_34;
  }
  get _RouterOutletMap_35():import21.RouterOutletMap {
    if ((this.__RouterOutletMap_35 == (null as any))) { (this.__RouterOutletMap_35 = new import21.RouterOutletMap()); }
    return this.__RouterOutletMap_35;
  }
  get _NgModuleFactoryLoader_36():import22.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_36 == (null as any))) { (this.__NgModuleFactoryLoader_36 = new import22.SystemJsNgModuleLoader(this._Compiler_14,this.parent.get(import22.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_36;
  }
  get _ROUTES_37():any[] {
      if ((this.__ROUTES_37 == (null as any))) { (this.__ROUTES_37 = [[
        {
          path: 'lazy',
          loadChildren: './lazy.module#LazyModule'
        }
        ,
        {
          path: '',
          component: import33.HomeView
        }

      ]
    ]); }
    return this.__ROUTES_37;
  }
  get _Router_38():any {
    if ((this.__Router_38 == (null as any))) { (this.__Router_38 = import5.setupRouter(this._ApplicationRef_13,this._UrlSerializer_34,this._RouterOutletMap_35,this._Location_33,this,this._NgModuleFactoryLoader_36,this._Compiler_14,this._ROUTES_37,this._ROUTER_CONFIGURATION_31)); }
    return this.__Router_38;
  }
  get _ActivatedRoute_39():any {
    if ((this.__ActivatedRoute_39 == (null as any))) { (this.__ActivatedRoute_39 = import5.rootRoute(this._Router_38)); }
    return this.__ActivatedRoute_39;
  }
  get _APP_BOOTSTRAP_LISTENER_40():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_40 == (null as any))) { (this.__APP_BOOTSTRAP_LISTENER_40 = [import5.initialRouterNavigation(this._Router_38,this._ROUTER_CONFIGURATION_31)]); }
    return this.__APP_BOOTSTRAP_LISTENER_40;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._ROUTER_FORROOT_GUARD_3 = import5.provideForRootGuard(this.parent.get(import34.Router,(null as any)));
    this._RouterModule_4 = new import5.RouterModule(this._ROUTER_FORROOT_GUARD_3);
    this._AppRoutingModule_5 = new import6.AppRoutingModule();
    this._AppModule_6 = new import1.AppModule();
    this._ErrorHandler_9 = import4.errorHandler();
    this._ApplicationInitStatus_10 = new import8.ApplicationInitStatus(this.parent.get(import8.APP_INITIALIZER,(null as any)));
    this._Testability_11 = new import9.Testability(this.parent.get(import29.NgZone));
    this._ApplicationRef__12 = new import10.ApplicationRef_(this.parent.get(import29.NgZone),this.parent.get(import35.Console),this,this._ErrorHandler_9,this,this._ApplicationInitStatus_10,this.parent.get(import9.TestabilityRegistry,(null as any)),this._Testability_11);
    return this._AppModule_6;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_3; }
    if ((token === import5.RouterModule)) { return this._RouterModule_4; }
    if ((token === import6.AppRoutingModule)) { return this._AppRoutingModule_5; }
    if ((token === import1.AppModule)) { return this._AppModule_6; }
    if ((token === import36.LOCALE_ID)) { return this._LOCALE_ID_7; }
    if ((token === import7.NgLocalization)) { return this._NgLocalization_8; }
    if ((token === import37.ErrorHandler)) { return this._ErrorHandler_9; }
    if ((token === import8.ApplicationInitStatus)) { return this._ApplicationInitStatus_10; }
    if ((token === import9.Testability)) { return this._Testability_11; }
    if ((token === import10.ApplicationRef_)) { return this._ApplicationRef__12; }
    if ((token === import10.ApplicationRef)) { return this._ApplicationRef_13; }
    if ((token === import11.Compiler)) { return this._Compiler_14; }
    if ((token === import26.APP_ID)) { return this._APP_ID_15; }
    if ((token === import38.DOCUMENT)) { return this._DOCUMENT_16; }
    if ((token === import12.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_17; }
    if ((token === import13.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_18; }
    if ((token === import13.EventManager)) { return this._EventManager_19; }
    if ((token === import14.DomSharedStylesHost)) { return this._DomSharedStylesHost_20; }
    if ((token === import39.AnimationDriver)) { return this._AnimationDriver_21; }
    if ((token === import15.DomRootRenderer)) { return this._DomRootRenderer_22; }
    if ((token === import40.RootRenderer)) { return this._RootRenderer_23; }
    if ((token === import16.DomSanitizer)) { return this._DomSanitizer_24; }
    if ((token === import41.Sanitizer)) { return this._Sanitizer_25; }
    if ((token === import17.ViewUtils)) { return this._ViewUtils_26; }
    if ((token === import42.IterableDiffers)) { return this._IterableDiffers_27; }
    if ((token === import43.KeyValueDiffers)) { return this._KeyValueDiffers_28; }
    if ((token === import14.SharedStylesHost)) { return this._SharedStylesHost_29; }
    if ((token === import18.Title)) { return this._Title_30; }
    if ((token === import5.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_31; }
    if ((token === import32.LocationStrategy)) { return this._LocationStrategy_32; }
    if ((token === import19.Location)) { return this._Location_33; }
    if ((token === import20.UrlSerializer)) { return this._UrlSerializer_34; }
    if ((token === import21.RouterOutletMap)) { return this._RouterOutletMap_35; }
    if ((token === import44.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_36; }
    if ((token === import45.ROUTES)) { return this._ROUTES_37; }
    if ((token === import34.Router)) { return this._Router_38; }
    if ((token === import46.ActivatedRoute)) { return this._ActivatedRoute_39; }
    if ((token === import26.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_40; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__12.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);