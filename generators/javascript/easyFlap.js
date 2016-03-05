goog.provide('Blockly.JavaScript.EasyFlap');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['ef_getcaptorvalue'] = function (block) {
  var dropdown_variable = block.getFieldValue('variable');
  var dropdown_shutter = block.getFieldValue('SHUTTER');
  
  var code = 'getCaptorValue(' + dropdown_shutter + ', ' + dropdown_variable + ')';
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ef_runevery'] = function(block) {
  var dropdown_seconds = block.getFieldValue('seconds');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['ef_setangle'] = function(block) {
  var dropdown_captor = block.getFieldValue('captor');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['ef_getdate'] = function(block) {
	var dropdown_type = block.getFieldValue('type'),
		code;
	
	switch (dropdown_type) {
		case "year":
			code = 'new Date().getFullYear()';
			break;
		case "month":
			code = 'new Date().getMonth()';
			break;
		case "day":
			code = 'new Date().getDay()';
			break;
		case "hour":
			code = 'new Date().getHours()';
			break;
		case "minute":
			code = 'new Date().getMinutes()';
			break;
		case "second":
			code = 'new Date().getSeconds()';
			break;
		case "millisecond":
			code = 'new Date().getMilliseconds()';
			break;
	}
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ef_today'] = function (block) {
	
  return ['new Date().getDay()', Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ef_weekdays'] = function(block) {

	var dropdown_WEEK_DAY = block.getFieldValue('WEEK_DAY');

  return [dropdown_WEEK_DAY, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ef_shutters'] = function(block) {
  var dropdown_shutters = block.getFieldValue('SHUTTERS');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ef_close_shutter'] = function(block) {
  var value_shutter = Blockly.JavaScript.valueToCode(block, 'SHUTTER', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'closeShutter(' + value_shutter + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ef_shutter_list'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};