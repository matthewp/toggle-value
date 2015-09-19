[![Build Status](https://travis-ci.org/matthewp/toggle-value.svg?branch=master)](https://travis-ci.org/matthewp/toggle-value)
[![npm version](https://badge.fury.io/js/toggle-value.svg)](http://badge.fury.io/js/toggle-value)

# toggle-value

A [can.view.attr](http://canjs.com/docs/can.view.attr.html) that allows you to toggle a scope value when an event occurs. Often you will find yourself writing a function in a can.Component view model that does nothing other than toggling a boolean value. Use **toggle-value** for that now.

## API

### toggle-value="property"

Toggles `property` when the element is **click**ed. For example:

```handlebars
<can-import from="toggle-value"/>

<a href="javascript://" toggle-value="showIt">Toggle me</a>

{{#if showIt}}
<div>Hello there!</div>
{{/if}}
```

When you click the "Toggle me" anchor it will change the boolean value of `showIt`, which will result in the message alternatively showing and hiding.

### toggle-value-EVENT="property"

Like the first signature, but this allows you to control what event is used to trigger the toggling from happening.  The event can be any event that is triggered, even custom events. Here's an example that will toggle the value when the mouse is over the anchor and also toggle it when the mouse rolls out of the anchor:

```handlebars
<can-import from="toggle-value"/>

<a href="javascript://" toggle-value-mouseover="showIt" toggle-value-mouseout="showIt">Toggle me</a>

{{#if showIt}}
<div>Hello there!</div>
{{/if}}
```

## License

MIT
