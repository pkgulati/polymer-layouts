import {PolymerElement, html} from '@polymer/polymer';

class Form2Demo extends  PolymerElement {
  static get template() {
    return html`
      <style include="iron-flex iron-flex-alignment iron-flex-factors">
        
       

      </style>
      <div class="layout horizontal">
        <div class="leftmainbox">
                
        </div>
        <div class="flex-9 rightmainbox">
                <page-toolbar>
                    <div maintitle>My Form</div>
                </page-toolbar>
                <div class="layout horizontal">
                    <vertical-tabs class="flex-1">
                        <vertical-tab>Inbox</vertical-tab>
                        <vertical-tab>Starred</vertical-tab>
                        <vertical-tab>Sent Items</vertical-tab>
                        <vertical-tab>Official</vertical-tab>
                    </vertical-tabs>
                    <div class="flex-7 form-container">
                    </div>
                </div>
        </div>
      </div>
    `;
  }

 

  constructor() {
    super();
  }


}
customElements.define('form2-demo', Form2Demo);