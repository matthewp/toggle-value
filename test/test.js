var QUnit = require("steal-qunit");
var Map = require("can/map/");
var stache = require("can/view/stache/");
require("toggle-value");

QUnit.module("toggle-value");

QUnit.test("it works with no event provided", function(){
  var template = stache("<a href='javscript://' toggle-value='showIt'>{{#if showIt}}<div id='me'></div>{{/if}}");
  var map = new Map({ showIt: false });
  var frag = template(map);

  QUnit.equal(map.attr("showIt"), false, "showIt is initially false");
  QUnit.equal(frag.childNodes.length, 1, "There is only the anchor");

  // Trigger a click
  can.trigger(frag.childNodes[0], "click");

  QUnit.equal(map.attr("showIt"), true, "showIt is now true");
});

QUnit.test("it works with an event argument", function(){
  var template = stache("<a href='javscript://' toggle-value-foo='showIt'>{{#if showIt}}<div id='me'></div>{{/if}}");
  var map = new Map({ showIt: false });
  var frag = template(map);

  QUnit.equal(map.attr("showIt"), false, "showIt is initially false");
  QUnit.equal(frag.childNodes.length, 1, "There is only the anchor");

  // Trigger a click
  can.trigger(frag.childNodes[0], "foo");

  QUnit.equal(map.attr("showIt"), true, "showIt is now true");
});

