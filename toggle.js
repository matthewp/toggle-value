var attr = require("can/view/callbacks/").attr;

var attrExp = /toggle-value-?(.+)?/;

var toggleValue = function(el, attrData){
  var attrName = attrData.attributeName;
  var attrValue = can.$(el).attr(attrName);

  var res = attrExp.exec(attrName);
  var event = (res && res[1]) ? res[1] : "click";

  var compute = attrData.scope.computeData(attrValue).compute;

  can.$(el).bind(event, function(){
    compute(!compute());
  });
};

attr(attrExp, toggleValue);
