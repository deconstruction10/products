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
                    <a href="index.html" data-type="index-link">products documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d1cac5dddb78889b0df7dd86071b73589314f61f28c182dd11fc821d52c5d320b6f4ba6db59f00c40c3571b39197f4883146d6a565530308f8f98f06b91e2c62"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d1cac5dddb78889b0df7dd86071b73589314f61f28c182dd11fc821d52c5d320b6f4ba6db59f00c40c3571b39197f4883146d6a565530308f8f98f06b91e2c62"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d1cac5dddb78889b0df7dd86071b73589314f61f28c182dd11fc821d52c5d320b6f4ba6db59f00c40c3571b39197f4883146d6a565530308f8f98f06b91e2c62"' :
                                            'id="xs-controllers-links-module-AppModule-d1cac5dddb78889b0df7dd86071b73589314f61f28c182dd11fc821d52c5d320b6f4ba6db59f00c40c3571b39197f4883146d6a565530308f8f98f06b91e2c62"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d1cac5dddb78889b0df7dd86071b73589314f61f28c182dd11fc821d52c5d320b6f4ba6db59f00c40c3571b39197f4883146d6a565530308f8f98f06b91e2c62"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d1cac5dddb78889b0df7dd86071b73589314f61f28c182dd11fc821d52c5d320b6f4ba6db59f00c40c3571b39197f4883146d6a565530308f8f98f06b91e2c62"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d1cac5dddb78889b0df7dd86071b73589314f61f28c182dd11fc821d52c5d320b6f4ba6db59f00c40c3571b39197f4883146d6a565530308f8f98f06b91e2c62"' :
                                        'id="xs-injectables-links-module-AppModule-d1cac5dddb78889b0df7dd86071b73589314f61f28c182dd11fc821d52c5d320b6f4ba6db59f00c40c3571b39197f4883146d6a565530308f8f98f06b91e2c62"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BrandsModule.html" data-type="entity-link" >BrandsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BrandsModule-f2132df0d34d3e4ad198d22f0a00d71156a9fc46f26046e179a7f0c9dbcd0a0dda127dd4210fae85a7a0e7680c473aa621a65f5edf3e88dad4ae67f2a6f1bc29"' : 'data-bs-target="#xs-controllers-links-module-BrandsModule-f2132df0d34d3e4ad198d22f0a00d71156a9fc46f26046e179a7f0c9dbcd0a0dda127dd4210fae85a7a0e7680c473aa621a65f5edf3e88dad4ae67f2a6f1bc29"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BrandsModule-f2132df0d34d3e4ad198d22f0a00d71156a9fc46f26046e179a7f0c9dbcd0a0dda127dd4210fae85a7a0e7680c473aa621a65f5edf3e88dad4ae67f2a6f1bc29"' :
                                            'id="xs-controllers-links-module-BrandsModule-f2132df0d34d3e4ad198d22f0a00d71156a9fc46f26046e179a7f0c9dbcd0a0dda127dd4210fae85a7a0e7680c473aa621a65f5edf3e88dad4ae67f2a6f1bc29"' }>
                                            <li class="link">
                                                <a href="controllers/BrandsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrandsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BrandsModule-f2132df0d34d3e4ad198d22f0a00d71156a9fc46f26046e179a7f0c9dbcd0a0dda127dd4210fae85a7a0e7680c473aa621a65f5edf3e88dad4ae67f2a6f1bc29"' : 'data-bs-target="#xs-injectables-links-module-BrandsModule-f2132df0d34d3e4ad198d22f0a00d71156a9fc46f26046e179a7f0c9dbcd0a0dda127dd4210fae85a7a0e7680c473aa621a65f5edf3e88dad4ae67f2a6f1bc29"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BrandsModule-f2132df0d34d3e4ad198d22f0a00d71156a9fc46f26046e179a7f0c9dbcd0a0dda127dd4210fae85a7a0e7680c473aa621a65f5edf3e88dad4ae67f2a6f1bc29"' :
                                        'id="xs-injectables-links-module-BrandsModule-f2132df0d34d3e4ad198d22f0a00d71156a9fc46f26046e179a7f0c9dbcd0a0dda127dd4210fae85a7a0e7680c473aa621a65f5edf3e88dad4ae67f2a6f1bc29"' }>
                                        <li class="link">
                                            <a href="injectables/BrandsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrandsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeriesModule.html" data-type="entity-link" >SeriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SeriesModule-7758b6d13f95bd0358b1b218c6b58bc90fc8a82d17074991f12d07fb75ddb7c871480c7a8e3d2cbde5f4aaa171d3bdee52a33e6e3642adb631b3f1522c24bff0"' : 'data-bs-target="#xs-controllers-links-module-SeriesModule-7758b6d13f95bd0358b1b218c6b58bc90fc8a82d17074991f12d07fb75ddb7c871480c7a8e3d2cbde5f4aaa171d3bdee52a33e6e3642adb631b3f1522c24bff0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SeriesModule-7758b6d13f95bd0358b1b218c6b58bc90fc8a82d17074991f12d07fb75ddb7c871480c7a8e3d2cbde5f4aaa171d3bdee52a33e6e3642adb631b3f1522c24bff0"' :
                                            'id="xs-controllers-links-module-SeriesModule-7758b6d13f95bd0358b1b218c6b58bc90fc8a82d17074991f12d07fb75ddb7c871480c7a8e3d2cbde5f4aaa171d3bdee52a33e6e3642adb631b3f1522c24bff0"' }>
                                            <li class="link">
                                                <a href="controllers/SeriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SeriesModule-7758b6d13f95bd0358b1b218c6b58bc90fc8a82d17074991f12d07fb75ddb7c871480c7a8e3d2cbde5f4aaa171d3bdee52a33e6e3642adb631b3f1522c24bff0"' : 'data-bs-target="#xs-injectables-links-module-SeriesModule-7758b6d13f95bd0358b1b218c6b58bc90fc8a82d17074991f12d07fb75ddb7c871480c7a8e3d2cbde5f4aaa171d3bdee52a33e6e3642adb631b3f1522c24bff0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeriesModule-7758b6d13f95bd0358b1b218c6b58bc90fc8a82d17074991f12d07fb75ddb7c871480c7a8e3d2cbde5f4aaa171d3bdee52a33e6e3642adb631b3f1522c24bff0"' :
                                        'id="xs-injectables-links-module-SeriesModule-7758b6d13f95bd0358b1b218c6b58bc90fc8a82d17074991f12d07fb75ddb7c871480c7a8e3d2cbde5f4aaa171d3bdee52a33e6e3642adb631b3f1522c24bff0"' }>
                                        <li class="link">
                                            <a href="injectables/SeriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BrandsController.html" data-type="entity-link" >BrandsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SeriesController.html" data-type="entity-link" >SeriesController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Brands.html" data-type="entity-link" >Brands</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Series.html" data-type="entity-link" >Series</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BrandRepository.html" data-type="entity-link" >BrandRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBrandDto.html" data-type="entity-link" >CreateBrandDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSeriesDto.html" data-type="entity-link" >CreateSeriesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SeriesRepository.html" data-type="entity-link" >SeriesRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBrandDto.html" data-type="entity-link" >UpdateBrandDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSeriesDto.html" data-type="entity-link" >UpdateSeriesDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BrandsService.html" data-type="entity-link" >BrandsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeriesService.html" data-type="entity-link" >SeriesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});