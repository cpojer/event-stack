EventStack
==========

Helps you Escape. Provides a stack that gets popped every time a certain condition, determined usually by a keyboard event, gets fulfilled. Imagine different widgets overlaying your page and on escape the widget currently on top should be removed.

Build
-----

Build via [Packager](http://github.com/kamicane/packager), requires [MooTools Core](http://github.com/mootools/mootools-core) and [MooTools Class-Extras](http://github.com/cpojer/mootools-class-extras) to be registered to Packager already

	./packager register /path/to/event-stack
	./packager build EventStack/* > event-stack.js

Demo
----

See Demos/index.html

How To Use
----------

This plugin provides an EventStack Class.

	var EscapeStack = new EventStack; // The default options pop the stack when the user presses 'esc'
	
	EscapeStack.push(closeMyWidget); // MyWidget will be closed when the user presses 'esc'
	
	// Now if MyWidget spawns another widget on top of MyWidget you can push the close handler too
	MyWidget.openAnotherWidget = function(){
		EscapeStack.push(closeMyOtherWidget);
		
		openAnotherWidget();
	};
	
	// Now pressing the 'esc'-Button once closes 'AnotherWidget', pressing it again closes 'MyWidget'
	
If your widget has other ways of closing it (like an 'X'-Button) you should remove the close-handler from the stack.

	EscapeStack.erase(closeMyWidget);
	
Options
-------

* event - (defaults to *keyup*) The event to be used
* condition - Function to be used to determine whether to pop the stack. Defaults to pressing the ESC-Button.

Notes
-----

It's not a real stack :)