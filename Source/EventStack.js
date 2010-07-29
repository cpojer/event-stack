/*
---

name: EventStack

description: Helps you Escape.

authors: Christoph Pojer (@cpojer)

license: MIT-style license.

requires: [Core/Class.Extras, Core/Element.Event, Class-Extras/Class.Binds]

provides: EventStack

...
*/

(function(){

this.EventStack = new Class({

	Implements: [Options, Class.Binds],

	options: {
		event: 'keyup',
		condition: function(event){
			return (event.key == 'esc');
		}
	},

	initialize: function(options){
		this.setOptions(options);
		this.stack = [];
		
		document.addEvent(this.options.event, this.bound('condition'));
	},

	condition: function(event){
		if (this.options.condition.call(this, event))
			this.pop(event);
	},

	erase: function(fn){
		this.stack.erase(fn);

		return this;
	},

	push: function(fn){
		this.erase(fn);
		this.stack.push(fn);

		return this;
	},

	pop: function(e){
		var fn = this.stack.pop();
		if (fn) fn(e);

		return this;
	}

});

})();