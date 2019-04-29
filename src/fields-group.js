import {PolymerElement, html} from '@polymer/polymer';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {IronResizableBehavior} from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import {FlattenedNodesObserver} from '@polymer/polymer/lib/utils/flattened-nodes-observer.js';

class FieldsGroup extends mixinBehaviors([IronResizableBehavior], PolymerElement) {
  static get template() {
    return html`
      <style>
      
        :host {
          width:100%;
          min-height:16px;
          position: relative;
          display: flex;
          flex-flow: row wrap;
          box-sizing:border-box;
          justify-content:space-around;
          margin-right:16px;
        }

        :host ::slotted(*) {
            flex-basis: 300px; /* default value */
            flex-grow: 1;
            margin-right:16px;
        }

        :host ::slotted([fld-xs]) {
          flex-basis: 90px; /* default value */
          min-width:90px;
          max-width : 120px;
        }

        :host ::slotted([fld-amt]) {
          flex-basis: 150px; /* default value */
          min-width:140px;
          max-width : 160px;
        }

        :host ::slotted([fld-date]) {
          flex-basis: 150px; /* default value */
          min-width:140px;
          max-width : 160px;
        }

        :host ::slotted([fld-s]) {
          flex-basis: 150px; /* default value */
          min-width:150px;
          max-width : 230px;
        }

        :host ::slotted([fld-m]) {
          flex-basis: 300px; /* default value */
          min-width:250px;
        }

        :host ::slotted([fld-l]) {
          flex-basis: 400px; /* default value */
          min-width:320px;
        }

        :host ::slotted([fld-xl]) {
          flex-basis: 600px; /* default value */
          min-width:300px;
          max-width:600px;
        }

        :host > fields-row {
            flex-basis: 300px;
            min-width : 220px;
            max-width:600px;
            flex-grow: 1;
            margin-left:8px;
            margin-right:8px;
        }

      </style>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      columns : {
        type : String,
        reflectToAttribute: true
      },
      width: Number,
      height: Number,
    }
  }

  constructor() {
    super();
    this.columns = "multi";
  }

  connectedCallback() {
     super.connectedCallback();
    this.addEventListener('iron-resize', this.onIronResize.bind(this));
  }

  onIronResize() {
    this.width = this.offsetWidth;
    this.height = this.offsetHeight;
  }


}
customElements.define('fields-group', FieldsGroup);