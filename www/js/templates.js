angular.module('starter').run(['$templateCache', function($templateCache) {$templateCache.put('addVehicule.html','<ion-view title="" class="">\n    \n    <ion-content  \n\t\tclass="S"\n    \tpadding="false">\n\n \n\t\t\tWiesz gdzie znajduje si\u0119 VIN auta kt\xF3rego nie ma w naszej bazie? Podziel si\u0119 z nami swoj\u0105 wiedz\u0105 i pom\xF3\u017C na rozwijac ten projekt.\n\n \t\t\t<form \n                class=""\n                name="addVehiculeForm"\n                ng-submit="authenticate( \'email\', credentials )"  \n                >\n                \n                <div class="new-form-style">\n\n \t\t\t\t\t<label class="item item-input item-floating-label">\n\n                        <span class="input-label">Brand</span>\n\n                        <input \n                            type="text" \n                            placeholder="Brand..." \n                            ng-model="data.brand" \n                            name="brand"\n                            ng-minlength="1"\n                            ng-maxlength="126"\n                            ng-class="{\'has-error\': !addVehiculeForm.brand.$valid && !addVehiculeForm.brand.$pristine }"\n                            required>\n                    </label>\n\n                    <label class="item item-input item-floating-label">\n\n                        <span class="input-label">Model</span>\n\n                        <input \n                            type="text" \n                            placeholder="Model..." \n                            ng-model="data.model"\n                            name="password"\n                            ng-class="{\'has-error\': !addVehiculeForm.model.$valid && !addVehiculeForm.model.$pristine }"\n                            ng-minlength="1"\n                            ng-maxlength="126"\n                            required>\n\n                    </label>\n\n\n                    <label class="item item-input item-floating-label">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<span class="input-label">Volume</span>\n                        \n                        <input \n                            type="text" \n                            placeholder="Volume..." \n                            ng-model="data.volume"\n                            name="password"\n                            ng-class="{\'has-error\': !addVehiculeForm.volume.$valid && !addVehiculeForm.volume.$pristine }"\n                            ng-minlength="1"\n                            ng-maxlength="126"\n                            required>\n\n                    </label>\n\n                    <label class="item item-input item-floating-label">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<span class="input-label">Description</span>\n                    \t\n                    \t<textarea \n                    \t\tplaceholder="Description..."\n                    \t\tname="description"\n                    \t\trows="4"\n                    \t\tng-model="data.description"></textarea>\n                    \n                    </label>\n\n                </div>\n                \n                <div class="cl"></div>\n\n                <div class="signup-form-button mt15 mb15">\n                    \n                    <button\n                        menu-close \n                        nav-clear\n                        type="submit" \n                        id="submit" \n                        class="button button-block pure-button button-trans mt0 mb0"\n                        ng-disabled="loginForm.$invalid">Sign In with Email</button>\n                    \n                    </div>\n                \n                \n                <a class="reset-password-link mt20" ng-click="forgotPassword()">\n                    Forgot your password? <span class="icn ion-arrow-right-b"></span>\n                </a>\n                \n\n            </form>\t\t\n\n    </ion-content>\n\n</ion-view>\n');
$templateCache.put('info.html','<!-- title="{{title}}" -->\n<ion-view class="">\n    \n    <ion-content  \n\t\tclass="S"\n    \tpadding="false">\n\n\t\t{{info.marka}}\n\t\t<br>\n\t\t{{info.model}}\n\t\t<br>\n\t\t{{info.typ}}\n\t\t<br>\n\t\t{{info.opis}}\n\t\t<br>\n\t\t\n\n\n\t\t<div class="imageContainer">\n\t\t\t\n\t\t\t<ion-spinner \n\t\t\t\tng-if="!ready" \n\t\t\t\ticon="spiral"\n\t\t\t\tng-class="{\'spinerBgHide\':ready == true}" \n\t\t\t\tclass="spinerBg imageAnimation"></ion-spinner>\n\t\t\t\n\t\t\t<img \n\t\t\t\tng-if="ready"\n\t\t\t\timage-on-load\n\t\t\t\tclass="loadingImage imageAnimation"\n\t\t\t\tng-class="{showImage: showThis == true}"\n\t\t\t\tng-src="http://www.gdziejestvin.pl/file/{{info.foto1}}" alt="">\t\n\t\t</div>\n\t\t\n\t\t<br>\n\n\t\t<div class="imageContainer">\n\t\t\t\n\t\t\t<ion-spinner \n\t\t\t\tng-if="!ready" \n\t\t\t\ticon="spiral"\n\t\t\t\tng-class="{\'spinerBgHide\':ready == true}" \n\t\t\t\tclass="spinerBg imageAnimation"></ion-spinner>\n\t\t\t\n\t\t\t<img \n\t\t\t\tng-if="ready"\n\t\t\t\timage-on-load\n\t\t\t\tclass="loadingImage imageAnimation"\n\t\t\t\tng-class="{showImage: showThis == true}"\n\t\t\t\tng-src="http://www.gdziejestvin.pl/file/{{info.foto2}}" alt="">\t\n\t\t</div>\n\t\t\t<ion-gallery ion-gallery-items="items" ion-gallery-row="2"></ion-gallery>\n\n    </ion-content>\n\n</ion-view>\n');
$templateCache.put('list.html','<!-- title="{{title}}"  -->\n<ion-view class="">\n    \n    <ion-content  \n    \tpadding="false"\n    \tclass="list-content">\n\t\n\t\t<div class="listEmpty repeated-item" ng-if="listEmpty">\n\t\t\t<br><br><br>\n\t\t\tLOADING <ion-spinner icon="ios"></ion-spinner>\n\t\t\t<br><br><br>\n\t\t</div>\n\n\t\t<ion-list class="animate-blinds" id="item-list">\n\t\t  \t\n\t\t  \t<ion-item\n\t\t  \t\tmenu-close \n\t\t  \t\tng-repeat="item in items"\n\t\t      class="item repeated-item ink"\n\t\t      ng-click="selectItem(this,item.name)"\n\t\t      list-item="">\n\n\t\t\t\t\t{{item.name}}\n\n\t\t    \t<i class="ion-chevron-right move-icon-to-right"></i>\n\n\t\t  \t</ion-item>\n\n\t\t</ion-list>\n\n    </ion-content>\n\n</ion-view>\n');
$templateCache.put('menu.html','<ion-side-menus enable-menu-with-back-views="true">\n  \t\n  \t<ion-side-menu-content>\n    \n    \t<ion-nav-bar class="blue-bg logo-in-header"  align-title="center">\n       \t\n<!--        \t<ion-nav-title >\n          VIN Finder\n      \t</ion-nav-title> -->\n\n        <ion-nav-back-button class="button-clear">\n          <i class="icon ion-ios-arrow-back"></i>\n        </ion-nav-back-button>\n\n     \t\t<ion-nav-buttons side="right">\n       \t\n          <span class="right-buttons">\n            <button class="button button-icon button-clear ion-navicon" menu-toggle="right">\n            </button>\n          </span>\n        \t\n     \t\t</ion-nav-buttons>\n\t\t\n    \t</ion-nav-bar>\n    \t\n    \t<ion-nav-view name="menuContent"></ion-nav-view>\n  \t\n  \t</ion-side-menu-content>\n\n  <ion-side-menu side="right">\n    <ion-header-bar class="expanded bar bar-header disable-user-behavior bar-royal-900">\n      <img src="img/logo.png" class="avatar motion spin fade">\n      <div class="menu-bottom">\n        Gdzie Jest VIN?\n      </div>\n    </ion-header-bar>\n    <ion-content class="stable-bg has-expanded-header scroll-content ionic-scroll  has-header">\n      <ion-list>\n        \n          <!-- <ion-item nav-clear menu-close ng-click="redirect(\'menu.brands\')">\n            Vin finder\n          </ion-item> -->\n          \n          <!-- <ion-item nav-clear menu-close ng-click="redirect(\'menu.share\')">\n             \n          </ion-item> -->\n\n          <ion-item nav-clear>\n            <div class="shareTitle">Share</div>\n            <table class="share-table">\n              <tr>\n                <td>\n                  <span ng-click="share(\'fb\')" class="circle facebook"><i class="ion-social-facebook"></i></span>\n                </td>\n                <td>\n                  <span class="circle twitter" ng-click="share(\'twitter\')"><i class="ion-social-twitter"></i></span>\n                </td>\n                <td>\n                  <span class="circle email" ng-click="share(\'email\')"><i class="ion-android-mail"></i></span>\n                </td>\n                <td>\n                  <span class="circle sms" ng-click="share(\'sms\')"><i class="ion-android-textsms"></i></span>\n                </td>\n              </tr>\n\n            </table>  \n          </ion-item>\n\n          <ion-item nav-clear menu-close ng-click="rateapp()">\n              Rate the app  \n          </ion-item>\n\n          <ion-item nav-clear menu-close id="logout-button-side-menu" ng-click="logout()">\n              Log Out\n          </ion-item>\n\n\n          <!-- <ion-item nav-clear menu-close href="#/app/playlists"></ion-item> -->\n\n\n      </ion-list>\n    </ion-content>\n  </ion-side-menu>\n</ion-side-menus>\n');
$templateCache.put('start.html','<ion-view title="start" class="">\n    \n    <ion-content  \n\t\tclass="gjv-bg"\n    \tpadding="false"\n        scroll="false">\n\n\n        <div class="halves top">\n            <div id="top-wrapper">\n              <div class="car-bg"></div>\n              <div class="logo-wrapper">\n                <div class="logo"></div>\n                <div class="phrase">Look up Vehicle Identification Number</div>\n              </div>\n            </div>\n        </div>\n        <div class="halves bottom">\n            \n                \n  \n\n            <div id="bottom-wrapper">\n\n                <button menu-close \n                    class="button button-block button-positive ink button-fb" \n                    ng-click="authenticate(\'facebook\')">\n                    <!--  <i class="ion-social-facebook"></i>  -->\n                    <span class="connect">{{ \'BUTTON_CONNECT\' | translate }}</span>\n                    <span class="provider-name">Facebook</span>\n                </button>\n\n                <button menu-close \n                    class="button button-block button-assertive button-google ink" \n                    ng-click="authenticate(\'google\')">\n                    <!-- <i class="ion-social-google"></i> -->\n                    <span class="connect">{{ \'BUTTON_CONNECT\' | translate }}</span>\n                    <span class="provider-name">Google</span>\n                </button>  \n\n                <button menu-close id="open-signup-modal"\n                    class="button button-block button-light button-email ink " \n                    ng-click="openModal()"\n                    ng-click="authenticate(\'google\')">\n                    <span class="connect">Sign up with</span>\n                    <span class="provider-name">Email</span>\n                </button>                  \n\n                <table class="signup-line">\n                    <tr>\n                        <td>\n                            <span id="open-signin-modal" ng-click="openModal2()">Have an account? \n                                <span class="bold">Log In</span>\n                            </span>\n                        </td>\n                    </tr>\n                </table>\n\n            </div>\n        </div>\n     \n    </ion-content>\n\n</ion-view>\n\n\n\n\n<script id="my-modal.html" type="text/ng-template">\n    \n    <ion-modal-view class="signup-modal" >\n        <div id="close-signup-modal" class="button button-clear" ng-click="closeModal()"><span class="icon ion-close"></span></div>\n        <ion-content scroll="false">\n            <div id="signup-modal" class="modal-content-wrapper">\n\n                <div class="inner-modal-content-wrapper">\n                <div class="title-name">\n                    Sign Up\n                </div>\n                <form \n                    class=""\n                    name="joinForm"\n                    ng-submit="submit(credentials)">\n                \n                    <div class="new-form-style">\n\n                        <label class="item item-input user-svg">\n                            <input \n                                id="sign-up-username"\n                                type="text" \n                                placeholder="Username..." \n                                ng-model="credentials.username" \n                                name="username"\n                                ng-minlength="3"\n                                ng-maxlength="20"\n                                ng-class="{\'has-error\': !joinForm.username.$valid && !joinForm.username.$pristine }"\n                                required>\n                        </label>\n\n\n                        <label class="item item-input email-svg">\n\n                            <input \n                                id="sign-up-email"\n                                type="text" \n                                placeholder="Email..." \n                                name="email" \n                                ng-pattern="/^([a-zA-Z0-9!#$%&\'*+-/=?^_`{|}~_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$/"\n                                ng-class="{\'has-error\': !joinForm.email.$valid && !joinForm.email.$pristine }"\n                                ng-model="credentials.email"\n                                required>\n\n                        </label>\n\n                        <label class="item item-input password-svg">\n\n                            <input \n                                id="sign-up-password"\n                                type="password" \n                                placeholder="Password..." \n                                ng-model="credentials.password"\n                                name="password"\n                                ng-class="{\'has-error\': !joinForm.password.$valid && !joinForm.password.$pristine }"\n                                ng-minlength="6"\n                                ng-maxlength="126"\n                                required>\n\n                        </label>\n                    \n                    </div>\n                    \n                    <button \n                        type="submit" \n                        id="sign-up-submit" \n                        class="button submit-button ink"\n                        ng-disabled="joinForm.$invalid">Sign Up</button>\n                 \n                \n                    <div class="clear"></div>\n\n                </form> \n                \n            </div>     \n            </div>     \n        </ion-content>\n        <span id="switch-modal-to-signin" class="bottomLink" ng-click="switchTo(2)">Already have an account? Sign In!</span>  \n      </ion-modal-view>\n    </script>\n\n\n<script id="my-modal2.html" type="text/ng-template">\n\n    <ion-modal-view class="signup-modal" >\n        <div id="close-signin-modal" class="button button-clear" ng-click="closeModal()"><span class="icon ion-close"></span></div>\n        <ion-content scroll="false">\n            <div id="signin-modal" class="modal-content-wrapper">\n\n                <div class="inner-modal-content-wrapper">\n                <div class="title-name">\n                    Sign In\n                </div>\n                <form \n                    class=""\n                    name="loginForm"\n                    ng-submit="authenticate( \'email\', credentials )">\n                \n                <div class="new-form-style">\n\n                    <label class="item item-input user-svg">\n                         <input id="sign-in-email"\n                            type="text" \n                            placeholder="{{ \'INPUT_PLACEHOLDER_EMAIL\' | translate }}" \n                            ng-model="credentials.email" \n                            name="email"\n                            ng-minlength="3"\n                            ng-maxlength="20"\n                            ng-class="{\'has-error\': !loginForm.email.$valid && !loginForm.email.$pristine }"\n                            required>\n                    </label>\n\n\n                    <label class="item item-input email-svg">\n\n                        <input id="sign-in-password"\n                            type="password" \n                            placeholder="{{ \'INPUT_PLACEHOLDER_PASSWORD\' | translate }}" \n                            ng-model="credentials.password"\n                            name="password"\n                            ng-class="{\'has-error\': !loginForm.password.$valid && !loginForm.password.$pristine }"\n                            ng-minlength="6"\n                            ng-maxlength="126"\n                            required>\n\n                    </label>\n\n                   \n                \n                </div>\n                <button \n                    type="submit" \n                    id="submit" \n                    class="button submit-button ink"\n                    ng-disabled="loginForm.$invalid">Sign Up</button>\n             \n            \n               <div class="clear"></div>\n\n            </form> \n\n            \n\n            </div>\n            </div>     \n        </ion-content>\n        <span id="switch-modal-to-signup" class="bottomLink"  ng-click="switchTo(1)">Don\'t have an account yet? Sign Up!</span>\n      </ion-modal-view>\n\n    </script>');}]);