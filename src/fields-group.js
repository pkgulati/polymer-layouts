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
        }

        :host ::slotted(*) {
            min-width: 300px;
            max-width: 400px;
            flex-basis: auto; /* default value */
            flex-grow: 1;
            margin-left:8px;
            margin-right:8px     
        }

        @media (max-width:700px) {
            :host ::slotted(*) {
                min-width: 300px;
                max-width: 600px;
                flex-basis: auto; /* default value */
                flex-grow: 1;
                margin-left:8px;
                margin-right:8px 
            } 
        }
          
      </style>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      width: Number,
      height: Number,
    }
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
  }


}
customElements.define('fields-group', FieldsGroup);