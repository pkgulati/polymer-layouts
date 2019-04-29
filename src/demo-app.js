import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import './aggrid-demo.js';
// loads lumo theme by default
// import './vgrid-demo.js';

import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-input/paper-input.js';
import './fields-group.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import './fields-row.js';
import './vertical-tabs.js';
import './vertical-tab.js';
import './form2-demo.js';
import './page-toolbar.js';
import './content-header.js';

class DemoApp extends PolymerElement {
 
    static get template2 () {
     return html`
     <paper-icon-button icon="menu" onclick="startDrawer.toggle()"></paper-icon-button>
      `
    }

      openDrawer() {
        this.$.drawerLayout.drawer.toggle();
        console.log(this.$.drawerLayout.drawer.opened);
      }

      static get template () {
          return html`
          <style include="iron-flex iron-flex-alignment iron-flex-factors">
          :root {
            --accent-color:#4285f4;
            --light-primary-color: #4285f4;
          }

          app-toolbar {
            background-color: #4285f4;
            color: #fff;
            height: 64px;
         }

         #search-input {
            border: 1px solid #dedede;
            padding: 12px 16px;
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 16px;
            width: 100%;
         }
         #search-input:focus {
          background: white;
        }
        #search-input::-webkit-input-placeholder {
          font-family: var(--theme-font);
          font-size: 16px;
          color: var(--theme-blue-grey);
        }
        #search-input::-moz-placeholder {
          font-family: var(--theme-font);
          font-size: 16px;
          color: var(--theme-blue-grey);
        }
        #search-input:-ms-input-placeholder {
          font-family: var(--theme-font);
          font-size: 16px;
          color: var(--theme-blue-grey);
        }

          body {
            background-color:#e5e5e5;
          }

          app-header paper-icon-button {
            --paper-icon-button-ink-color: white;
          }

          app-drawer-layout:not([narrow]) [drawer-toggle] {
            display: none;
          }

          .container  {
            padding:16px;
          }
          
          .main-content {
            height: calc(100vh - 64px);
          }

          .leftmainbox {
            height: calc(100vh - 64px);
            background-color:black;
            width:64px;
         }
  
          .rightmainbox {
              height: calc(100vh - 64px);
              margin:0px 16px 0px 16px;
              border : 1px solid green;
          }

          .dummy1{
            background-color:yellow;
          }

          .page-content {
            background-color:#ffffff;
            border : 1px solid red;
          }

          .page-divider {
            box-sizing: border-box;
            border-bottom : 1px solid rgb(0, 130, 2, var(--light-divider-opacity));
          }
        </style>

        <app-drawer-layout id="drawerLayout" force-narrow>

        <app-drawer slot="drawer">
        <div class="drawer-content">
          <paper-icon-item>
            <iron-icon icon="inbox" slot="item-icon"></iron-icon> <span>Inbox</span>
          </paper-icon-item>
          <paper-icon-item>
            <iron-icon icon="query-builder" slot="item-icon"></iron-icon> <span>Snoozed</span>
          </paper-icon-item>
        </div>
      </app-drawer>
    

        <app-header-layout>

          <app-header fixed effects="waterfall" slot="header">
            <app-toolbar>
              <paper-icon-button id="toggle" icon="menu" on-click="openDrawer"></paper-icon-button>
              <div main-title>Inbox</div>
            </app-toolbar>
          </app-header>

          <div class="main-content">
              <div class="layout horizontal">
                  <div class="leftmainbox">
                      LEFT BLACK
                  </div>
                  <div class="flex-9 rightmainbox">
                      <page-toolbar>
                          <div maintitle class="flex-1">
                            <div class="flex">
                                My Page2
                            </div>
                          </div>
                         
                          <div>
                              <div class="layout horizontal center justified">
                                  <paper-input lable="Top"></paper-input>
                                  <paper-icon-button icon="add"></paper-icon-button>
                              </div>
                          </div>
                      </page-toolbar>
                      <div class="page-divider"></div>
                      <div class="page-content">
                            <content-header></content-header>
                            <div class="layout horizontal">
                            <vertical-tabs class="flex-1">
                                <vertical-tab>Inbox</vertical-tab>
                                <vertical-tab>Starred</vertical-tab>
                                <vertical-tab>Sent Items</vertical-tab>
                                <vertical-tab>Official</vertical-tab>
                            </vertical-tabs>
                            <div class="flex-7 form-container">
                                Form Container
                                <div class="dummy1">
                                dummy1
                                </div>
                            </div>
                        </div>
                      </div>

                     
                    </div>
              </div>
         </div>

      </app-header-layout>
  </app-drawer-layout>

            `;
      }

      constructor() {
        // If you override the constructor, always call the 
        // superconstructor first.
        super();
        this.currenttab = 4;
      }

      handleScroll() {
        console.log('handleScroll');
      }

      ready() {
        super.ready();
        //console.log('add scroll listener')
        //this.addEventListener('scroll', this.handleScroll);
        //this.$.cont1.addEventListener('scroll', this.handleScroll);
       }

      static get properties () {
        return {
          currenttab: {
            type: Number,
            value: 3
          }, 
          sel2 : {
            type: Number,
            value: 0,
            observer : 'sel2change'
          }
        }
      }

      sel2change(newval, oldval) {
          return;
          console.log('sel2change', newval, oldval);
         
          console.log('this.$.div2.offsetTop ', this.$.div2.getBoundingClientRect());
          console.log('this.$.div2.offsetHeight ', this.$.div2.offsetHeight);
          
          this.$.div2.scrollIntoView();
          console.log('this.$.div2.offsetTop ', this.$.div2.getBoundingClientRect());
          console.log('this.$.div2.offsetHeight ', this.$.div2.offsetHeight);
          

      }
}

customElements.define('demo-app', DemoApp);

