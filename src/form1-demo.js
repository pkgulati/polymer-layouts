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
import 'ag-grid-polymer';

class Form1Demo extends PolymerElement {
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

    this.columnDefs = [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" },
      ];
  
      this.rowData = [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
      ];

  }

  firstDataRendered(params) {
    params.api.sizeColumnsToFit()
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

      <link rel="stylesheet" href="../../node_modules/ag-grid-community/dist/styles/ag-grid.css">
      <link rel="stylesheet" href="../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css">
      <h1>Form Layout</h1>
      <ag-grid-polymer style="width: 100%; height: 350px;"
                         class="ag-theme-balham"
                           rowData="{{rowData}}"
                           columnDefs="{{columnDefs}}"
                           on-first-data-rendered="{{firstDataRendered}}">
      </ag-grid-polymer>

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
customElements.define('form1-demo', Form1Demo);
