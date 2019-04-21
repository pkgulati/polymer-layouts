# Layout Examples

This repository is just to create some Layout Examples for Polymer 3.0. For Example
* Form Layout
* Page Header 


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


/* Not supported */
:host ::slotted(div) {
  --custom-color: red;
}

