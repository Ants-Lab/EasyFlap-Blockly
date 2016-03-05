/// <reference path="../msg/js/en.js" />

'use strict';

goog.provide('Blockly.Blocks.EasyFlap');

goog.require('Blockly.Blocks');

var EASYFLAP_BLOCK_COLOR = '#16a085';
var EASYFLAP_DATE_BLOCK_COLOR = '#27ae60';

Blockly.Blocks['ef_runevery'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.EASYFLAP_RUN_EVERY);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.EASYFLAP_DATE_DAY, "day"],
			[Blockly.Msg.EASYFLAP_DATE_HOUR, "hour"],
			[Blockly.Msg.EASYFLAP_DATE_MINUTE, "minute"]
		]), "seconds");
    this.appendStatementInput("time");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(EASYFLAP_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ef_getcaptorvalue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["angle", "1"], ["luminosité", "2"], ["température", "3"], ["humidité", "4"]]), "variable");
    this.appendDummyInput()
        .appendField(Blockly.Msg.EASYFLAP_SHUTTER_OF + " " + Blockly.Msg.EASYFLAP_SHUTTER);
    this.appendValueInput("SHUTTER")
        .setCheck('Shutter');
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(EASYFLAP_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ef_setangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.EASYFLAP_SHUTTER_OPEN);
    this.appendValueInput("SHUTTER")
        .setCheck('Shutter');
    this.appendDummyInput()
        .appendField(Blockly.Msg.EASYFLAP_SHUTTER_OPEN_AT);
    this.appendValueInput("angle")
        .setCheck("Number");
	this.appendDummyInput()
        .appendField(Blockly.Msg.EASYFLAP_DEGREES);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(EASYFLAP_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ef_shutters'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
			["Salon", "SHUTTER_1"],
			["Chambre parentale", "SHUTTER_2"],
			["Cuisine", "SHUTTER_3"]
		]), "SHUTTERS");
    this.setInputsInline(true);
    this.setOutput(true, "Shutter");
    this.setColour(EASYFLAP_BLOCK_COLOR);
    this.setTooltip('Volets');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ef_close_shutter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.EASYFLAP_SHUTTER_CLOSE);
    this.appendValueInput("SHUTTER")
        .setCheck("Shutter");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setColour(EASYFLAP_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ef_shutter_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.EASYFLAP_SHUTTER + 's');
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(EASYFLAP_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//Date Blocks


Blockly.Blocks['ef_getdate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.EASYFLAP_GET);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.EASYFLAP_DATE_YEAR, "year"],
			[Blockly.Msg.EASYFLAP_DATE_MONTH, "month"],
			[Blockly.Msg.EASYFLAP_DATE_DAY, "day"],
			[Blockly.Msg.EASYFLAP_DATE_HOUR, "hour"],
			[Blockly.Msg.EASYFLAP_DATE_MINUTE, "minute"],
			[Blockly.Msg.EASYFLAP_DATE_SECOND, "second"],
			[Blockly.Msg.EASYFLAP_DATE_MILLISECOND, "millisecond"]
		]), "type");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(EASYFLAP_DATE_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};	

Blockly.Blocks['ef_today'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.EASYFLAP_TODAY);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(EASYFLAP_DATE_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ef_weekdays'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldDropdown([
			[Blockly.Msg.EASYFLAP_SUNDAY, "0"],
			[Blockly.Msg.EASYFLAP_MONDAY, "1"],
			[Blockly.Msg.EASYFLAP_TUESDAY, "2"],
			[Blockly.Msg.EASYFLAP_WEDNESDAY, "3"],
			[Blockly.Msg.EASYFLAP_THURSDAY, "4"],
			[Blockly.Msg.EASYFLAP_FRIDAY, "5"],
			[Blockly.Msg.EASYFLAP_SATURDAY, "6"],
		]),
		"WEEK_DAY");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(EASYFLAP_DATE_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};