# jQuery.dataSubset

jQuery.dataSubset is a simple jQuery plugin for getting data subset.

## Usage

For example you have html:

```html
<div class="data-subset-example" data-id="1" data-name="Example" data-ajax-url ="https://url.example.com" data-ajax-cache="true"></div>
```

To get only ajax data u should use:

```javascript
var ajax = $('.data-subset-example').dataSubset('ajax'); // return { url: "https://url.example.com", cache: true }
```

## Params

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| prefix | string |  | Data prefix  |
| removePrefix | boolean | `true`  | Param that indicates to remove specified prefix from result data |

## License
Optimizer is open source, licensed under the [MIT License](https://github.com/askalione/jquery.dataSubset/blob/master/LICENSE).