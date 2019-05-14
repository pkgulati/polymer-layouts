# Layout Examples

This repository is just to create some Layout Examples for Polymer 3.0. For Example
* Form Layout
* Page Header 

## Material design
https://material.io/design/components/text-fields.html#filled-text-field


## Links

the "cleanest" way that doesn't use :first-child/:last-child and works without any modification on flex-wrap:wrap is to set padding:5px on the container and margin:5px on the children. That will produce a 10px gap between each children and between each children and their parent.

https://stackoverflow.com/questions/20626685/better-way-to-set-distance-between-flexbox-items

https://stackoverflow.com/questions/29289071/flexbox-min-width-min-content-max-width

The problem is that flex: 1 sets flex-basis: 0. Instead, you need
```
container .box {
  min-width: 200px;
  max-width: 400px;
  flex-basis: auto; /* default value */
  flex-grow: 1;
}
```

https://mageme.com/m2demo/form-demo.html

Core banking CIF entry
https://www.youtube.com/watch?v=kitKMOVvuzM

https://i2.wp.com/www.rajmanglam.com/wp-content/uploads/2017/06/synd-online-account-opening-7.png


https://www.formstack.com/blog/2016/building-multi-column-forms/

https://ninjaforms.com/extensions/layout-styles/

https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.baymard.com%2Fresearch%2Fmedia_files%2Fattachments%2F29898%2Foriginal%2Fresearch-media-file-e741283db76692988610f0f8ecc5ad00.jpg&imgrefurl=https%3A%2F%2Fbaymard.com%2Fblog%2Favoid-multi-column-forms&docid=kBblFTki_g6zLM&tbnid=cn7z7IpCqGqiuM%3A&vet=10ahUKEwjgoemKruDhAhUVWysKHXRlA2MQMwhHKAkwCQ..i&w=962&h=833&bih=586&biw=1175&q=multi%20column%20form%20layout&ved=0ahUKEwjgoemKruDhAhUVWysKHXRlA2MQMwhHKAkwCQ&iact=mrc&uact=8


https://codepen.io/anastasef/pen/RPmKQE


/* Not supported */
:host ::slotted(div) {
  --custom-color: red;
}

https://github.com/marmelab/admin-on-rest/blob/master/docs/Tutorial.md

## App tool bar search and toggle between article and media

https://www.britannica.com/topic/freezing-food-preservation

## GOOGLE INTERPRETS MATERIAL IN MANY WAYS
http://commadot.com/google-interprets-material-in-many-ways/

## Tool bar and dialogue clash
https://www.captaincodeman.com/2017/09/08/beyond-the-polymer-starter-kit-dialogs-and-toolbars


characters
28            257


Currency  100
Amount    200
Date      200     
Name      300


Pixels    characters
200       21
100       10

size      Avergae         Min       Max
fld-xs    100             100       150        
fld-s     200             200       300
fld-m     300             250       400       
fld-l     400 / 450       300       600 
fld-xl    600 / 800       500       1000




fld-s
fld-m
fld-n
fld-l
fld-xl

### Scroll

https://stackoverflow.com/questions/42658413/polymer-event-on-content-scroll-not-firing

## Throttle

https://github.com/StartPolymer/s-utils


## Future
https://github.com/Polymer/polymer/issues/5240

https://github.com/material-components/material-components-web-components

## Menu Aligned
https://github.com/danleyb2/paper-dropdown-menu-aligned


## Fixes styling (e.g. shadow, elevation) issues in Edge 40 
https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/

paper-item:focus,
paper-icon-item:focus {
  position: relative;
  opacity: 1.0;
  background-color: var(--paper-grey-500);
}


https://stackoverflow.com/questions/33890399/angular-material-mdtabs-is-it-possible-to-have-vertical-tabs/43389018#43389018

## CSS not selected

:host(:not(.iron-selected)) > .tab-content {
        opacity: 0.8;
        @apply --paper-tab-content-unselected;
}

https://github.com/PolymerElements/paper-tabs/issues/178

## Style
                    font-size  font-weight line-height
paper-font-subhead  16px        400        24px

### Add Holiday Example
https://help.calamari.io/en/article/how-to-add-public-holidays-for-different-countries


## gmail and Add holiday
Left Navigation and Top area of right Area share same background color
Content on right is white background

