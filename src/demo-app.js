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
import './aggrid-demo.js';
import './vgrid-demo.js';
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

          app-header paper-icon-button {
            --paper-icon-button-ink-color: white;
          }

          app-drawer-layout:not([narrow]) [drawer-toggle] {
            display: none;
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

            <vgrid-demo></vgrid-demo>

      </app-header-layout>
  </app-drawer-layout>

            `;
      }
}

customElements.define('demo-app', DemoApp);

