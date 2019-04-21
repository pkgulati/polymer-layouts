import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'ag-grid-polymer';

export default class ClickableCellRenderer extends PolymerElement {
    static get template() {
        return html`
            <paper-button style="height: 21px" on-click="click">Edit</paper-button>
        `;
    }

    agInit(params) {
        this.params = params;

        this.cell = {row: params.value, col: params.colDef.headerName};
    }

    click() {
        console.log("Child Cell Clicked: " + JSON.stringify(this.cell));
    }
}

customElements.define('clickable-renderer', ClickableCellRenderer);