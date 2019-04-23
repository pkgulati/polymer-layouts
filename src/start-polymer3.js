/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-input/paper-input.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';
import './fields-group.js';

class StartPolymer3 extends PolymerElement {
  static get properties () {
    return {
      message: {
        type: String,
        value: ''
      },
      pie: {
        type: Boolean,
        value: false,
        observer: 'togglePie'
      },
      loadComplete: {
        type: Boolean,
        value: false
      }
    };
  }

  constructor() {
    // If you override the constructor, always call the 
    // superconstructor first.
    super();
    // Resolve warning about scroll performance 
    // See https://developers.google.com/web/updates/2016/06/passive-event-listeners
    setPassiveTouchGestures(true);
    this.message = 'Hello World! I\'m a Polymer element :)';
  }

  ready(){
    // If you override ready, always call super.ready() first.
    super.ready();
    // Output the custom element's HTML tag to the browser console.
    // Open your browser's developer tools to view the output.
    console.log(this.tagName);
  }
  
  // <vaadin-horizontal-layout theme="spacing-xs">
  // :host([theme~="spacing-xs"]) ::slotted(*) {
  //   margin-left: var(--lumo-space-xs);
  // }


  togglePie(){
    if(this.pie && !this.loadComplete) {
      // See https://developers.google.com/web/updates/2017/11/dynamic-import
      import('./lazy-element.js').then((LazyElement) => {
        console.log("LazyElement loaded");
      }).catch((reason) => {
        console.log("LazyElement failed to load", reason);
      });
      this.loadComplete = true;
    }
  }

  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`

    <custom-style>
  <style is="custom-style">
 
    paper-input.custom2:hover {
      border: 1px solid #29B6F6;
    }

    paper-input.custom2 {
      border: 1px solid #BDBDBD;
      border-radius: 5px;
      margin-bottom: 14px;
      --paper-input-container: { 
          padding: 8px 0px;
        };

      --paper-input-container-underline-focus: { 
          margin-left : 8px;
          margin-right : 8px
      };
      --paper-input-container-label: {
          top: -16px;
          padding: 4px 4px 4px 4px;
          left: 8px;
          background: white;
          font-weight: bold;
      }
      --paper-input-container-underline: { display: none; };
      --paper-input-container-input:{
        padding-left: 8px;
        box-sizing: border-box;
     }

     --paper-input-container-label-floating: {
      width: auto;
    };

    }

    paper-input.custom {
      margin-bottom: 14px;
      --primary-text-color: #01579B;
      --paper-input-container-color: black;
      --paper-input-container-focus-color: black;
      --paper-input-container-invalid-color: black;
      border: 1px solid #BDBDBD;
      border-radius: 5px;

      /* Reset some defaults */
      --paper-input-container: { padding: 0;};
      --paper-input-container-underline: { display: none; height: 0;};
      --paper-input-container-underline-focus: { display: none; };

      /* New custom styles */
      --paper-input-container-input: {
        box-sizing: border-box;
        font-size: inherit;
        padding: 4px;
      };
      --paper-input-container-input-focus: {
        background: rgba(0, 0, 0, 0.1);
      };
      --paper-input-container-input-invalid: {
        background: rgba(255, 0, 0, 0.3);
      };
      --paper-input-container-label: {
        top: -8px;
        left: 4px;
        background: white;
        padding: 2px;
        font-weight: bold;
      };
      --paper-input-container-label-floating: {
        width: auto;
      };
    }
  </style>
</custom-style>

      <style>
        paper-checkbox {
          --paper-checkbox-checked-ink-color: #FFFFFF;
          --paper-checkbox-unchecked-ink-color: #FFFFFF;
        }

        .container3 {
          position: relative;
          display: flex;
          flex-flow: row wrap;
          padding-left:8px;
          padding-right:8px;
          margin-bottom : 16px;
          border : solid 1px yellow;
        }

        .container3 > paper-input {
          min-width: 200px;
          max-width: 400px;
          flex-basis: auto; /* default value */
          flex-grow: 1;
          margin-left:8px;
          margin-right:8px  
          margin-bottom : 8px;
        }

        .container {
          position: relative;
          display: flex;
          flex-flow: row wrap;
          padding-left:8px;
          padding-right:8px;
          
        }

        .container > paper-input {
          min-width: 200px;
          max-width: 400px;
          flex-basis: auto; /* default value */
          flex-grow: 1;
          margin-left:8px;
          margin-right:8px  
        }
      
        .container2 {
          position: relative;
          display: flex;
          flex-flow: row wrap;
          padding-left:8px;
          padding-right:8px;
        }

        .container2 > paper-input {
          min-width: 300px;
          max-width: 400px;
          flex-basis: auto; /* default value */
          flex-grow: 1;
          margin-left:8px;
          margin-right:8px  
        }
        
        .container2 > paper-input {
          --paper-input-container: {
            padding : 0px 0px 16px 0px;
          }
        }

        .oe-custom {
          --paper-input-container-input: {
            border: 1px solid var(--secondary-text-color);
            border-radius: 4px;
            padding: 12px 8px 4px 8px;
            box-sizing: border-box;
          }
          --paper-input-container-input-focus: {
            border-bottom-color: var(--primary-color);
          }
          --paper-input-container-input-invalid: {
            border-bottom-color: var(--error-color);
          }
          --paper-input-container-label: {
            top: 12px;
            left: 8px;
          }
          --paper-input-container-label-floating: {
            z-index: 2;
            top: 10px;
            display: flex;
            background:white;
            width:auto;
          }
          --paper-input-container-underline: {
            display: none;
          }
          --paper-input-container-underline-focus: {
            display: none;
          }
        }
      </style>

      <h1>Form Layout</h1>

      <div class="container3">
          <paper-input class="oe-custom" label="Solution" value="All" invalid error-message="In error"></paper-input>
          <paper-input class="oe-custom" label="Solution" value="All"></paper-input>
          <paper-input class="oe-custom" label="Solution" value="All"></paper-input>
      </div>
        <div style="min-heght:16px">
        </div>
      <div class="container">
        <paper-input class="custom" always-float-label label="Name" value="Praveen"></paper-input>
        <paper-input label="Company" value="Infosys"></paper-input>
        <paper-input class="custom2" always-float-label label="Age" value="47"></paper-input>
      </div>
      <div class="container">
        <paper-input label="Company" value="Infosys"></paper-input>
        <paper-input label="Product" value="Finacle"></paper-input>
      </div>
      <div class="container">
      <paper-input label="Qualification" value="B.Tech."></paper-input>
      <paper-input label="Solution" value="All"></paper-input>
      </div>
     

      <div class="container2">
        <paper-input label="Name" value="Praveen"></paper-input>
        <paper-input label="Age" value="47"></paper-input>
        <paper-input label="Company" value="Infosys"></paper-input>
        <paper-input label="Product" value="Finacle"></paper-input>
        <paper-input label="Qualification" value="B.Tech."></paper-input>
        <paper-input label="Solution" value="All"></paper-input>
      </div>

      <fields-group>
          <paper-input label="Name" value="Praveen"></paper-input>
          <paper-input label="Age" value="47"></paper-input>
          <paper-input label="Company" value="Infosys"></paper-input>
          <paper-input label="Product" value="Finacle"></paper-input>
          <paper-input label="Qualification" value="B.Tech."></paper-input>
          <paper-input label="Solution" value="All"></paper-input>
      </fields-group>

    `;
  }
}

// Register the element with the browser.
customElements.define('start-polymer3', StartPolymer3);
