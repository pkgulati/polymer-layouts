/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';
import '@polymer/paper-styles/default-theme.js';

import {IronMenuBehavior} from '@polymer/iron-menu-behavior/iron-menu-behavior.js';
import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

/**
Material design:
[Menus](https://www.google.com/design/spec/components/menus.html)

`<paper-listbox>` implements an accessible listbox control with Material Design
styling. The focused item is highlighted, and the selected item has bolded text.

    <paper-listbox>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

An initial selection can be specified with the `selected` attribute.

    <paper-listbox selected="0">
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

Make a multi-select listbox with the `multi` attribute. Items in a multi-select
listbox can be deselected, and multiple item can be selected.

    <paper-listbox multi>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-listbox-background-color`   | Menu background color |
`--primary-background-color`
`--paper-listbox-color`              | Menu foreground color |
`--primary-text-color`
`--paper-listbox`                    | Mixin applied to the listbox | `{}`

### Accessibility

`<paper-listbox>` has `role="listbox"` by default. A multi-select listbox will
also have `aria-multiselectable` set. It implements key bindings to navigate
through the listbox with the up and down arrow keys, esc to exit the listbox,
and enter to activate a listbox item. Typing the first letter of a listbox item
will also focus it.

@group Paper Elements
@element paper-listbox
@demo demo/index.html
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        border: 1px solid rgba(10, 11, 49, 0.20);
      }

        :host ::slotted(.iron-selected)  {
            border-right: 2px solid #ED462F;
        }

        #tabsContainer {
            width : 100%;
            border-right: 1px solid rgba(10, 11, 49, 0.20);
        }

    </style>

    <div id="tabsContainer" class="flex">
            <slot></slot>
    </div>
`,

  is: 'vertical-tabs',
  behaviors: [IronMenuBehavior],

  /** @private */
  hostAttributes: {role: 'listbox'}
});