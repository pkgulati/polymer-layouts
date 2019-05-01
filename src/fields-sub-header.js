import {PolymerElement, html} from '@polymer/polymer';

class FieldsSubHeader extends PolymerElement {
  static get template() {
    return html`
      <style>
      
        :host {
          display:block
        }

        :host ::slotted(*) {
            @apply --paper-font-common-base;
            @apply --paper-font-menu;
        }

      </style>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      scrollIndex : {
        type : String
      }
    }
  }

  constructor() {
    super();
  }

  connectedCallback() {
     super.connectedCallback();
  }

}
customElements.define('fields-sub-header', FieldsSubHeader);