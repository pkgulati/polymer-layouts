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
          padding-left:8px;
          padding-right:8px;
          align-items: center;
          align-content: center;
        }

        :host ::slotted(*) {
            flex-basis: 400px; /* default value */
            flex-grow: 1;
            margin-left:8px;
            margin-right:8px  
        }

        :host ::slotted([fld-s]) {
          flex-basis: 100px; /* default value */
          flex-grow: 1;
          margin-left:8px;
          margin-right:8px  
        }

        :host ::slotted([fld-l]) {
            flex-basis: 600px; /* default value */
            flex-grow: 1;
            margin-left:8px;
            margin-right:8px  
        }

        :host([display~=large])  {
          border : 1px solid green;
        }

        :host([display~=medium]) {
          border : 1px solid red;
        }

        @media (max-width:700px) {
          :host {
            
          }
          :host ::slotted(*) {
            flex-basis: 200px;
          }
          :host ::slotted([fld-s]) {
            flex-basis: 100px;
          }
          :host ::slotted([fld-l]) {
            flex-basis: 500px;
          }
        }
          
      </style>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      display : {
        type : String,
        reflectToAttribute: true
      },
      width: Number,
      height: Number,
    }
  }

  constructor() {
    super();
    this.display = "large";
  }

  connectedCallback() {
    console.log('connectedCallback');
    super.connectedCallback();
    this.addEventListener('iron-resize', this.onIronResize.bind(this));
    console.log(this.shadowRoot.childNodes.length);
    var self = this;
    this._observer = new FlattenedNodesObserver(this, (info) => {
        window.pkgdebug = {};
        window.pkgdebug.info = info;
        this.info = info;
        console.log(self.shadowRoot.childNodes[3]);
        for (let i=0; i < this.info.addedNodes.length; i++) {
            let node = this.info.addedNodes[i];
            if (node.nodeType == 1) {
                console.log(node.tagName);
            }
        }
    });
  }

  onIronResize() {
    this.width = this.offsetWidth;
    this.height = this.offsetHeight;
    if (this.width < 700) {
        if (this.display == 'large') {
          this.set('display', 'medium');
        }
    } else {
      if (this.display == 'medium') {
        this.set('display', 'large');
      }
    }
  }


}
customElements.define('fields-group', FieldsGroup);