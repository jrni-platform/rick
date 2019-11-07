"use strict";

var style = "";

var template = "\n<div style=\"" + style + "\">\n\t<div>Hi {{$ctrl.filter.model.name}}. Here is your task list</div>\n\t<div ng-if=\"!$ctrl.messages.length\">You have no tasks</div>\n\n\t<div><input type=\"text\" class=\"form-control\" ng-model=\"$ctrl.newTask\" /></div>\n\t<button class=\"btn btn-primary\" ng-click=\"$ctrl.addTask()\">Add Task</button>\n\t<button class=\"btn btn-danger\" ng-click=\"$ctrl.clearTasks()\">Clear Tasks</button>\n\t<div ng-repeat=\"message in $ctrl.messages track by $index\">{{$index + 1}} - {{message}}<button class=\"btn btn-link\" ng-click=\"$ctrl.removeTask($index)\">X</button></div>\n</div>\n";

var controller = function controller() {
  var _this = this;

  this.messages = [];
  this.newTask = "";

  this.addTask = function () {
    _this.messages.push(_this.newTask);
    _this.newTask = "";
  };

  this.removeTask = function (index) {
    _this.messages.splice(index, 1);
  };

  this.removeLastTask = function () {
    _this.messages.pop();
  };

  this.clearTasks = function () {
    _this.messages = [];
  };
};

angular.module('studio').component('khufuTest', {
  template: template,
  controller: controller,
  bindings: {
    bb: '=',
    config: '=',
    filter: '='
  }
});



/**



const style = ``;

const template = `
<div style="${style}">
	<div>Hi {{$ctrl.filter.model.name}}. Here is your task list</div>
	<div ng-if="!$ctrl.messages.length">You have no tasks</div>

	<div><input type="text" class="form-control" ng-model="$ctrl.newTask" /></div>
	<button class="btn btn-primary" ng-click="$ctrl.addTask()">Add Task</button>
	<button class="btn btn-secondary" ng-click="$ctrl.removeLastTask()">Remove Last Task</button>
	<button class="btn btn-danger" ng-click="$ctrl.clearTasks()">Clear Tasks</button>
	<div ng-repeat="message in $ctrl.messages track by $index">{{$index + 1}} - {{message}}<button class="btn btn-link" ng-click="$ctrl.removeTask($index)">X</button></div>
</div>
`;

const controller = function() {
  
  this.messages = [];
  this.newTask = "";
  
  this.addTask = () => {
    this.messages.push(this.newTask);
    this.newTask = "";
  }
  
  this.removeTask = (index) => {
      this.messages.splice(index, 1);
  }
  
  this.removeLastTask = () => {
  	this.messages.pop();
  }
  
  this.clearTasks = () => {
  	this.messages = [];
  }
}


angular.module('studio').component('khufuTest', {
	template,
  	controller,
  	bindings: {
    	bb: '=',
    	config: '=',
    	filter: '='
    }
});




 */