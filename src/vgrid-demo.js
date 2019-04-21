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
import ClickableCellRenderer from './clickable-renderer'
import '@vaadin/vaadin-grid/vaadin-grid.js';

class VaadinGridDemo extends PolymerElement {
    static get properties() {
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

       

        console.log('constructor');
       
    }

    firstDataRendered(params) {
        params.api.sizeColumnsToFit()
    }

    ready() {
        // If you override ready, always call super.ready() first.
        super.ready();
        // Output the custom element's HTML tag to the browser console.
        // Open your browser's developer tools to view the output.
        console.log('ready', this.tagName);

          this.$.addresscolumn.renderer = (root, grid, rowData) => {
            root.textContent = `${rowData.item.address.street}, ${rowData.item.address.city}`;
        };

        this.$.grid.items =  
        [
            {
                "firstName": "Jonathan",
                "lastName": "Nguyen",
                "address": {
                    "street": "3848 Sleepy Mews",
                    "city": "Big River",
                    "state": "Hawaii",
                    "zip": "96761-3780",
                    "country": "USA",
                    "phone": "(808) 555-7346"
                },
                "email": "jonathan.nguyen@company.com"
            },
            {
                "firstName": "Luis",
                "lastName": "Adams",
                "address": {
                    "street": "2718 Cozy Range",
                    "city": "Mousie",
                    "state": "Montana",
                    "zip": "59984-7576",
                    "country": "USA",
                    "phone": "(406) 555-0326"
                },
                "email": "luis.adams@company.com"
            },
            {
                "firstName": "Isaac",
                "lastName": "Smith",
                "address": {
                    "street": "1221 Dewy Nectar Plaza",
                    "city": "Hassunadchuauck",
                    "state": "Virginia",
                    "zip": "24556-5874",
                    "country": "USA",
                    "phone": "(571) 555-3265"
                },
                "email": "isaac.smith@company.com"
            },
            {
                "firstName": "Gianna",
                "lastName": "Hughes",
                "address": {
                    "street": "4783 Merry Sky Glade",
                    "city": "Blowville",
                    "state": "Wyoming",
                    "zip": "83099-4319",
                    "country": "USA",
                    "phone": "(307) 555-7524"
                },
                "email": "gianna.hughes@company.com"
            },
            {
                "firstName": "Camila",
                "lastName": "Mitchell",
                "address": {
                    "street": "216 Colonial Forest",
                    "city": "Misha Mokwa",
                    "state": "Utah",
                    "zip": "84401-0501",
                    "country": "USA",
                    "phone": "(435) 555-6135"
                },
                "email": "camila.mitchell@company.com"
            },
            {
                "firstName": "Caleb",
                "lastName": "Powell",
                "address": {
                    "street": "2590 Little Sky Square",
                    "city": "Defeated",
                    "state": "New Jersey",
                    "zip": "07091-9079",
                    "country": "USA",
                    "phone": "(551) 555-6739"
                },
                "email": "caleb.powell@company.com"
            },
            {
                "firstName": "Luke",
                "lastName": "Perez",
                "address": {
                    "street": "7310 Indian Dale Trail",
                    "city": "Deephaven",
                    "state": "Indiana",
                    "zip": "46535-2602",
                    "country": "USA",
                    "phone": "(574) 555-3369"
                },
                "email": "luke.perez@company.com"
            },
            {
                "firstName": "Caleb",
                "lastName": "Bell",
                "address": {
                    "street": "1392 Silver Lagoon Pointe",
                    "city": "Cheektowasa",
                    "state": "Maryland",
                    "zip": "21643-8254",
                    "country": "USA",
                    "phone": "(410) 555-8464"
                },
                "email": "caleb.bell@company.com"
            },
            {
                "firstName": "Ayden",
                "lastName": "Jones",
                "address": {
                    "street": "9797 Noble Hills Trail",
                    "city": "Iron Horse",
                    "state": "Pennsylvania",
                    "zip": "16906-7969",
                    "country": "USA",
                    "phone": "(267) 555-3375"
                },
                "email": "ayden.jones@company.com"
            },
            {
                "firstName": "Luke",
                "lastName": "Scott",
                "address": {
                    "street": "4599 Clear Range",
                    "city": "Teapot Dome",
                    "state": "Arkansas",
                    "zip": "71713-2933",
                    "country": "USA",
                    "phone": "(479) 555-8642"
                },
                "email": "luke.scott@company.com"
            },
            {
                "firstName": "Aaliyah",
                "lastName": "Campbell",
                "address": {
                    "street": "8892 Wishing Leaf Parade",
                    "city": "Jenny Lind",
                    "state": "Pennsylvania",
                    "zip": "18926-4904",
                    "country": "USA",
                    "phone": "(215) 555-7870"
                },
                "email": "aaliyah.campbell@company.com"
            },
            {
                "firstName": "Layla",
                "lastName": "Morgan",
                "address": {
                    "street": "8999 Hidden Bear Gardens",
                    "city": "Spain",
                    "state": "Indiana",
                    "zip": "46625-2500",
                    "country": "USA",
                    "phone": "(219) 555-6292"
                },
                "email": "layla.morgan@company.com"
            },
            {
                "firstName": "Hailey",
                "lastName": "Lopez",
                "address": {
                    "street": "981 Shady Dale Corners",
                    "city": "Hooker",
                    "state": "Minnesota",
                    "zip": "55129-1867",
                    "country": "USA",
                    "phone": "(218) 555-0005"
                },
                "email": "hailey.lopez@company.com"
            },
            {
                "firstName": "Blake",
                "lastName": "Young",
                "address": {
                    "street": "7009 Sunny Elk By-pass",
                    "city": "Herculaneum",
                    "state": "Louisiana",
                    "zip": "70799-1187",
                    "country": "USA",
                    "phone": "(225) 555-5532"
                },
                "email": "blake.young@company.com"
            },
            {
                "firstName": "Evan",
                "lastName": "Evans",
                "address": {
                    "street": "7349 Velvet Ridge",
                    "city": "Ijamsville",
                    "state": "North Carolina",
                    "zip": "28729-0772",
                    "country": "USA",
                    "phone": "(910) 555-0269"
                },
                "email": "evan.evans@company.com"
            },
            {
                "firstName": "Justin",
                "lastName": "Long",
                "address": {
                    "street": "9428 Jagged Grove",
                    "city": "Spirit Lake",
                    "state": "Rhode Island",
                    "zip": "02906-5528",
                    "country": "USA",
                    "phone": "(401) 555-8783"
                },
                "email": "justin.long@company.com"
            },
            {
                "firstName": "Genesis",
                "lastName": "Nguyen",
                "address": {
                    "street": "4935 Rocky Glen",
                    "city": "Twist",
                    "state": "Kentucky",
                    "zip": "41393-4421",
                    "country": "USA",
                    "phone": "(502) 555-1983"
                },
                "email": "genesis.nguyen@company.com"
            },
            {
                "firstName": "Eva",
                "lastName": "Wright",
                "address": {
                    "street": "6104 Old Front",
                    "city": "Goobertown",
                    "state": "New Hampshire",
                    "zip": "03553-1592",
                    "country": "USA",
                    "phone": "(603) 555-9004"
                },
                "email": "eva.wright@company.com"
            },
            {
                "firstName": "Zachary",
                "lastName": "Bennett",
                "address": {
                    "street": "2615 Quiet Path",
                    "city": "Scrappy Corner",
                    "state": "Arkansas",
                    "zip": "72480-0327",
                    "country": "USA",
                    "phone": "(479) 555-0211"
                },
                "email": "zachary.bennett@company.com"
            },
            {
                "firstName": "Ian",
                "lastName": "Gray",
                "address": {
                    "street": "4188 Crystal Orchard",
                    "city": "Mousie",
                    "state": "New Hampshire",
                    "zip": "03849-7787",
                    "country": "USA",
                    "phone": "(603) 555-0548"
                },
                "email": "ian.gray@company.com"
            },
            {
                "firstName": "Nathaniel",
                "lastName": "Taylor",
                "address": {
                    "street": "5206 Golden Bluff Road",
                    "city": "Hurricane Shoals",
                    "state": "Mississippi",
                    "zip": "38921-5783",
                    "country": "USA",
                    "phone": "(769) 555-8966"
                },
                "email": "nathaniel.taylor@company.com"
            },
            {
                "firstName": "Brooklyn",
                "lastName": "Ortiz",
                "address": {
                    "street": "985 Cinder View Diversion",
                    "city": "Fannie",
                    "state": "Massachusetts",
                    "zip": "02480-6179",
                    "country": "USA",
                    "phone": "(857) 555-1613"
                },
                "email": "brooklyn.ortiz@company.com"
            },
            {
                "firstName": "Henry",
                "lastName": "Cooper",
                "address": {
                    "street": "2309 Honey Panda Freeway",
                    "city": "Metropolis",
                    "state": "California",
                    "zip": "94292-2304",
                    "country": "USA",
                    "phone": "(408) 555-8440"
                },
                "email": "henry.cooper@company.com"
            },
            {
                "firstName": "Annabelle",
                "lastName": "Sanchez",
                "address": {
                    "street": "628 Quaking Nook",
                    "city": "Marydel",
                    "state": "California",
                    "zip": "90997-2320",
                    "country": "USA",
                    "phone": "(805) 555-8587"
                },
                "email": "annabelle.sanchez@company.com"
            },
            {
                "firstName": "Joseph",
                "lastName": "Parker",
                "address": {
                    "street": "4941 Wishing Hills Court",
                    "city": "Black Lick",
                    "state": "Georgia",
                    "zip": "39848-1414",
                    "country": "USA",
                    "phone": "(912) 555-5819"
                },
                "email": "joseph.parker@company.com"
            },
            {
                "firstName": "Elijah",
                "lastName": "Cox",
                "address": {
                    "street": "8157 Silver Heath",
                    "city": "Steam Corners",
                    "state": "Connecticut",
                    "zip": "06278-3936",
                    "country": "USA",
                    "phone": "(860) 555-7560"
                },
                "email": "elijah.cox@company.com"
            },
            {
                "firstName": "David",
                "lastName": "Hernandez",
                "address": {
                    "street": "3171 Old Pond Dale",
                    "city": "Poverty Ridge",
                    "state": "Oregon",
                    "zip": "97961-0175",
                    "country": "USA",
                    "phone": "(971) 555-2050"
                },
                "email": "david.hernandez@company.com"
            },
            {
                "firstName": "Eli",
                "lastName": "Morris",
                "address": {
                    "street": "9431 Lost Highlands",
                    "city": "Old Ford",
                    "state": "Arkansas",
                    "zip": "71608-2346",
                    "country": "USA",
                    "phone": "(501) 555-6629"
                },
                "email": "eli.morris@company.com"
            },
            {
                "firstName": "Victoria",
                "lastName": "Rivera",
                "address": {
                    "street": "216 Colonial Forest",
                    "city": "Misha Mokwa",
                    "state": "Utah",
                    "zip": "84401-0501",
                    "country": "USA",
                    "phone": "(435) 555-6135"
                },
                "email": "victoria.rivera@company.com"
            },
            {
                "firstName": "Jaxon",
                "lastName": "Baker",
                "address": {
                    "street": "9570 Lazy Oak Farm",
                    "city": "Hoosick",
                    "state": "South Carolina",
                    "zip": "29606-1498",
                    "country": "USA",
                    "phone": "(843) 555-1545"
                },
                "email": "jaxon.baker@company.com"
            },
            {
                "firstName": "Emma",
                "lastName": "Jones",
                "address": {
                    "street": "6609 Old Anchor Stead",
                    "city": "Suspension",
                    "state": "North Dakota",
                    "zip": "58306-5667",
                    "country": "USA",
                    "phone": "(701) 555-6229"
                },
                "email": "emma.jones@company.com"
            },
            {
                "firstName": "Aria",
                "lastName": "Reed",
                "address": {
                    "street": "7282 Rustic Pioneer Jetty",
                    "city": "Philadelphia",
                    "state": "Connecticut",
                    "zip": "06634-5832",
                    "country": "USA",
                    "phone": "(475) 555-0867"
                },
                "email": "aria.reed@company.com"
            },
            {
                "firstName": "Nora",
                "lastName": "Stewart",
                "address": {
                    "street": "9683 Silent Private",
                    "city": "Fate",
                    "state": "Alabama",
                    "zip": "36269-7910",
                    "country": "USA",
                    "phone": "(251) 555-5530"
                },
                "email": "nora.stewart@company.com"
            },
            {
                "firstName": "Caroline",
                "lastName": "Taylor",
                "address": {
                    "street": "8635 Gentle Deer Heath",
                    "city": "Dutch John",
                    "state": "Colorado",
                    "zip": "80166-1633",
                    "country": "USA",
                    "phone": "(303) 555-6720"
                },
                "email": "caroline.taylor@company.com"
            },
            {
                "firstName": "Asher",
                "lastName": "King",
                "address": {
                    "street": "1502 Round Limits",
                    "city": "Ben Lomond",
                    "state": "California",
                    "zip": "92880-4018",
                    "country": "USA",
                    "phone": "(707) 555-5739"
                },
                "email": "asher.king@company.com"
            },
            {
                "firstName": "Cameron",
                "lastName": "Martinez",
                "address": {
                    "street": "9683 Silent Private",
                    "city": "Fate",
                    "state": "Alabama",
                    "zip": "36269-7910",
                    "country": "USA",
                    "phone": "(251) 555-5530"
                },
                "email": "cameron.martinez@company.com"
            },
            {
                "firstName": "Nicholas",
                "lastName": "Ross",
                "address": {
                    "street": "9546 Middle Passage",
                    "city": "Beans Corner",
                    "state": "Connecticut",
                    "zip": "06257-5597",
                    "country": "USA",
                    "phone": "(860) 555-6030"
                },
                "email": "nicholas.ross@company.com"
            }
           
        ];


    }

    static get template() {
        // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
        return html`

      <h1>vaadin Grid Demo</h1>

      <vaadin-grid id="grid" theme="row-dividers" column-reordering-allowed multi-sort>
            <vaadin-grid-selection-column auto-select frozen></vaadin-grid-selection-column>
            <vaadin-grid-sort-column width="9em" path="firstName"></vaadin-grid-sort-column>
            <vaadin-grid-sort-column width="9em" path="lastName"></vaadin-grid-sort-column>
            <vaadin-grid-column id="addresscolumn" width="15em" flex-grow="2" header="Address"></vaadin-grid-column>
        </vaadin-grid>

    `;
    }
}

// Register the element with the browser.
customElements.define('vgrid-demo', VaadinGridDemo);
