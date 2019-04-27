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
          <style include="shared-styles iron-flex iron-flex-alignment iron-flex-factors">
          :root {
            --accent-color:#4285f4;
            --light-primary-color: #4285f4;
          }

          app-toolbar {
              background-color: #4285f4;
              color: #fff;
              height: 64px;
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
    
          paper-tabs {
            color: blue;
            --paper-tabs-selection-bar-color: blue;
            background-color:#ffffff;
          }
       
          vertical-tabs {
            border: 1px dotted #ccc;
            color: blue;
            --paper-tabs-selection-bar-color: blue;
            background-color:#ffffff;
          }

          paper-item {
            cursor: pointer;
          }

          .l1 {
            width : 30%;
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
          <paper-icon-item>
            <iron-icon icon="done" slot="item-icon"></iron-icon> <span>Done</span>
          </paper-icon-item>
          <paper-icon-item>
            <iron-icon icon="drafts" slot="item-icon"></iron-icon> <span>Drafts</span>
          </paper-icon-item>
          <paper-icon-item>
            <iron-icon icon="send" slot="item-icon"></iron-icon> <span>Sent</span>
          </paper-icon-item>
          <paper-icon-item>
            <iron-icon icon="delete" slot="item-icon"></iron-icon> <span>Trash</span>
          </paper-icon-item>
          <paper-icon-item>
            <iron-icon icon="report" slot="item-icon"></iron-icon> <span>Spam</span>
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

            <div class="l1">
            <vertical-tabs>
              <paper-item>Inbox</paper-item>
              <paper-item>Starred</paper-item>
              <paper-item>Sent mail</paper-item>
              <paper-item>Drafts</paper-item>
            </vertical-tabs>
            <div>

          <paper-tabs selected="{{selected}}" scrollable>
            <paper-tab>Tab 0</paper-tab>
            <paper-tab>Tab 1</paper-tab>
            <paper-tab>Tab 2</paper-tab>
            <paper-tab>Tab 3</paper-tab>
          </paper-tabs>
          
          <div class="container" id="cont1">
            <iron-pages selected="{{selected}}">
              <div>
              <h3>All controls are vertically centered </h3>
              <fields-group type="auto">
                  <paper-input label="Name" value="Praveen"></paper-input>
                  <paper-input label="Age" value="47"></paper-input>
                  <div>text1</div>
                  <div>
                    <p>logn text sadasdasddasdadad for testing</p>
                    <p>asdasdasd</p>
                    <p>asdasdasd</p>
                    <p>asdasdasd</p>
                    <p>asdasdasd</p>
                  </div>
                  <paper-input label="Company" value="Infosys"></paper-input>
                  <paper-input label="Product" value="Finacle"></paper-input>
                  <paper-input label="Qualification" value="B.Tech."></paper-input>
                  <paper-input label="Solution" value="All"></paper-input>
              </fields-group>
              </div>
              <div>
                   <h3>Dummy Flex element to show 2 fields in second row of same width as first 3 in first row</h3>
                   <div class="layout horizontal justified" >
                          <div class="flex-1">
                              <div>Left Section</div>
                          </div>
                          <div class="flex-4">
                            right
                            </div>
                    </div>
                    <div class="layout horizontal justified" >
                        <div class="flex-2">
                            <div>Left Section</div>
                        </div>
                        <div class="flex-6" >
                          <div class="">
                            <fields-group type="auto">
                              <paper-input fld-m label="Name" value="Praveen"></paper-input>
                              <paper-input fld-l label="Description" value="Praveen"></paper-input>
                            </fields-group>

                            <fields-group type="auto">
                                <fields-row type="auto">
                                  <paper-input fld-xs label="Currency" value="USD"></paper-input>
                                  <paper-input fld-amt label="Amount" value="2000"></paper-input>
                                </fields-row>
                                
                                <fields-row type="auto">
                                  <paper-input fld-amt label="Start Date" value="2000"></paper-input>
                                  <paper-input fld-amt label="End Date" value="2000"></paper-input>
                                </fields-row>
                            </fields-group>

                            <fields-group type="auto">
                            <paper-input fld-xs label="Currency" value="USD"></paper-input>
                            <paper-input fld-l label="Amount" value="2000"></paper-input>
                            <paper-input fld-xl label="Description" value="2000"></paper-input>
                          </fields-group>

                            <fields-group type="auto">
                              <paper-input fld-m label="Product" value="Finacle"></paper-input>
                              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
                              <paper-input fld-m label="Company" value="Infosys"></paper-input>
                              <paper-dropdown-menu fld-m label="Dinosaurs">
                                <paper-listbox slot="dropdown-content" selected="1">
                                  <paper-item>allosaurus</paper-item>
                                  <paper-item>brontosaurus</paper-item>
                                  <paper-item>carcharodontosaurus</paper-item>
                                  <paper-item>diplodocus</paper-item>
                                </paper-listbox>
                              </paper-dropdown-menu>
                              <paper-input fld-m label="Product" value="Finacle"></paper-input>
                              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
                           </fields-group>
                           </div>
                        </div>
                        <div class="flex-1">
                        <div>Side Section</div>
                    </div>
                    </div>
              </div>
              <div>
              <paper-dropdown-menu label="Dinosaurs">
              <paper-listbox slot="dropdown-content" selected="1" close-on-activate>
                <paper-item>allosaurus</paper-item>
                <paper-item>brontosaurus</paper-item>
                <paper-item>carcharodontosaurus</paper-item>
                <paper-item>diplodocus</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
              </div>
              <div id="tab3">
              
           

              <div class="layout horizontal" >

             

              <div class="flex-3">
              <vertical-tabs>
              <paper-item>Inbox</paper-item>
              <paper-item>Starred</paper-item>
              <paper-item>Sent mail</paper-item>
              <paper-item>Drafts</paper-item>
            </vertical-tabs>

              </div>
              <div class="flex-4">

              <fields-group type="auto">
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <h4>xzdasdasd</h4>
              <div id="div2">aaa </div>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
              <paper-input fld-m label="Product" value="Finacle"></paper-input>
              <paper-input fld-m label="Qualification" value="B.Tech."></paper-input>
              <paper-input fld-m label="Company" value="Infosys"></paper-input>
           
              </fields-group>


              </div>

              </div>
            </iron-pages>
          </div>

      </app-header-layout>
  </app-drawer-layout>

            `;
      }

      constructor() {
        // If you override the constructor, always call the 
        // superconstructor first.
        super();
        this.selected = 3;
      }

      handleScroll() {
        console.log('handleScroll');
      }

      ready() {
        super.ready();
        console.log('add scroll listener')
        this.addEventListener('scroll', this.handleScroll);
        this.$.cont1.addEventListener('scroll', this.handleScroll);
       }

      static get properties () {
        return {
          selected: {
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

