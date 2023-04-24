'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">table-base documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NgMainModule.html" data-type="entity-link" >NgMainModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-95c2204343cb7764c826d68ac0aefeefe001f8b96662531caf289f68ee006e5bc6697f26b157032f1a13a162e53d7c708897874efd9114df3135ee1bf8f3e66c"' : 'data-target="#xs-components-links-module-UiModule-95c2204343cb7764c826d68ac0aefeefe001f8b96662531caf289f68ee006e5bc6697f26b157032f1a13a162e53d7c708897874efd9114df3135ee1bf8f3e66c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-95c2204343cb7764c826d68ac0aefeefe001f8b96662531caf289f68ee006e5bc6697f26b157032f1a13a162e53d7c708897874efd9114df3135ee1bf8f3e66c"' :
                                            'id="xs-components-links-module-UiModule-95c2204343cb7764c826d68ac0aefeefe001f8b96662531caf289f68ee006e5bc6697f26b157032f1a13a162e53d7c708897874efd9114df3135ee1bf8f3e66c"' }>
                                            <li class="link">
                                                <a href="components/UiBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiBtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiBtnIconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiBtnIconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiDialogCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiDialogCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiLayoutDefaultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiLayoutDefaultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiPaginationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiPaginationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-UiModule-95c2204343cb7764c826d68ac0aefeefe001f8b96662531caf289f68ee006e5bc6697f26b157032f1a13a162e53d7c708897874efd9114df3135ee1bf8f3e66c"' : 'data-target="#xs-pipes-links-module-UiModule-95c2204343cb7764c826d68ac0aefeefe001f8b96662531caf289f68ee006e5bc6697f26b157032f1a13a162e53d7c708897874efd9114df3135ee1bf8f3e66c"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-UiModule-95c2204343cb7764c826d68ac0aefeefe001f8b96662531caf289f68ee006e5bc6697f26b157032f1a13a162e53d7c708897874efd9114df3135ee1bf8f3e66c"' :
                                            'id="xs-pipes-links-module-UiModule-95c2204343cb7764c826d68ac0aefeefe001f8b96662531caf289f68ee006e5bc6697f26b157032f1a13a162e53d7c708897874efd9114df3135ee1bf8f3e66c"' }>
                                            <li class="link">
                                                <a href="pipes/ObjectKeysPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ObjectKeysPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtilsModule.html" data-type="entity-link" >UtilsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UtilsModule-da92f5b49afe179c30e590e943115e11f6452a2f5f666d27970a4b289f4c9142491c1182b93d374a46acae88a5e1a3ad3ace10c7a7f9a35ac5d494799fd31621"' : 'data-target="#xs-injectables-links-module-UtilsModule-da92f5b49afe179c30e590e943115e11f6452a2f5f666d27970a4b289f4c9142491c1182b93d374a46acae88a5e1a3ad3ace10c7a7f9a35ac5d494799fd31621"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UtilsModule-da92f5b49afe179c30e590e943115e11f6452a2f5f666d27970a4b289f4c9142491c1182b93d374a46acae88a5e1a3ad3ace10c7a7f9a35ac5d494799fd31621"' :
                                        'id="xs-injectables-links-module-UtilsModule-da92f5b49afe179c30e590e943115e11f6452a2f5f666d27970a4b289f4c9142491c1182b93d374a46acae88a5e1a3ad3ace10c7a7f9a35ac5d494799fd31621"' }>
                                        <li class="link">
                                            <a href="injectables/ToastService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToastService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TableComponent.html" data-type="entity-link" >TableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/XpComponent.html" data-type="entity-link" >XpComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthorizedGuard.html" data-type="entity-link" >AuthorizedGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableDataSource.html" data-type="entity-link" >TableDataSource</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormBuilderService.html" data-type="entity-link" >FormBuilderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HobbiesService.html" data-type="entity-link" >HobbiesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToastService.html" data-type="entity-link" >ToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilsMainService.html" data-type="entity-link" >UtilsMainService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/IsLoggedInterceptor.html" data-type="entity-link" >IsLoggedInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ItHobby.html" data-type="entity-link" >ItHobby</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItSchema.html" data-type="entity-link" >ItSchema</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/ObjectKeysPipe.html" data-type="entity-link" >ObjectKeysPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});