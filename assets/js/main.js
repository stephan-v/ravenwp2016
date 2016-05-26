!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.ease={})}(this,function(n){"use strict";function t(n,t){return null==n||isNaN(n)?t:+n}function u(n,u){n=Math.max(1,t(n,1)),u=t(u,.3)*A;var i=u*Math.asin(1/n);return function(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/u)}}function i(n,u){n=Math.max(1,t(n,1)),u=t(u,.3)*A;var i=u*Math.asin(1/n);return function(t){return n*Math.pow(2,-10*t)*Math.sin((t-i)/u)+1}}function r(n,u){n=Math.max(1,t(n,1)),u=1.5*t(u,.3)*A;var i=u*Math.asin(1/n);return function(t){return n*((t=2*t-1)<0?Math.pow(2,10*t)*Math.sin((i-t)/u):Math.pow(2,-10*t)*Math.sin((t-i)/u)+2)/2}}function o(n){return n=t(n,1.70158),function(t){return t*t*((n+1)*t-n)}}function e(n){return n=t(n,1.70158),function(t){return--t*t*((n+1)*t+n)+1}}function c(n){return n=1.525*t(n,1.70158),function(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}}function a(n){return 1-f(1-n)}function f(n){return B>n?L*n*n:D>n?L*(n-=C)*n+E:G>n?L*(n-=F)*n+H:L*(n-=J)*n+K}function h(n){return((n*=2)<=1?1-f(1-n):f(n-1)+1)/2}function s(n){return 1-Math.sqrt(1-n*n)}function M(n){return Math.sqrt(1- --n*n)}function p(n){return((n*=2)<=1?1-Math.sqrt(1-n*n):Math.sqrt(1-(n-=2)*n)+1)/2}function l(n){return Math.pow(2,10*n-10)}function w(n){return 1-Math.pow(2,-10*n)}function b(n){return((n*=2)<=1?Math.pow(2,10*n-10):2-Math.pow(2,10-10*n))/2}function d(n){return 1-Math.cos(n*R)}function y(n){return Math.sin(n*R)}function x(n){return(1-Math.cos(Q*n))/2}function q(n){return n*n*n}function k(n){return--n*n*n+1}function m(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}function v(n){return n*n}function P(n){return n*(2-n)}function O(n){return((n*=2)<=1?n*n:--n*(2-n)+1)/2}function g(n){return+n}function I(n){return n=t(n,3),function(t){return Math.pow(t,n)}}function N(n){return n=t(n,3),function(t){return 1-Math.pow(1-t,n)}}function j(n){return n=t(n,3),function(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}}function z(n,t,u){var i=(n+="").indexOf("-");return 0>i&&(n+="-in"),arguments.length>1&&T.hasOwnProperty(n)?T[n](t,u):S.hasOwnProperty(n)?S[n]:g}var A=1/(2*Math.PI),B=4/11,C=6/11,D=8/11,E=.75,F=9/11,G=10/11,H=.9375,J=21/22,K=63/64,L=1/B/B,Q=Math.PI,R=Q/2,S={"linear-in":g,"linear-out":g,"linear-in-out":g,"quad-in":v,"quad-out":P,"quad-in-out":O,"cubic-in":q,"cubic-out":k,"cubic-in-out":m,"poly-in":q,"poly-out":k,"poly-in-out":m,"sin-in":d,"sin-out":y,"sin-in-out":x,"exp-in":l,"exp-out":w,"exp-in-out":b,"circle-in":s,"circle-out":M,"circle-in-out":p,"bounce-in":a,"bounce-out":f,"bounce-in-out":h,"back-in":o(),"back-out":e(),"back-in-out":c(),"elastic-in":u(),"elastic-out":i(),"elastic-in-out":r()},T={"poly-in":I,"poly-out":N,"poly-in-out":j,"back-in":o,"back-out":e,"back-in-out":c,"elastic-in":u,"elastic-out":i,"elastic-in-out":r};n.ease=z});
/*
	Transition ink blots
 */

(function($) {
	$(document).ready(function() {
		$(".cd-transition-layer").children().one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');

			// what to do when the animation has finished
		});

		// timeout function for all links
		$(".menu-item a, .logo2").each(function() {
			$(this).click(function(event) {
				event.preventDefault();
				var loc = this.href;

				console.log('clicked link');

				if(loc){
		            
		            $(".cd-transition-layer").addClass("visible opening");

		            // wait for javascript to pick up the animation ending call and only than proceed to the link href
		            $(".cd-transition-layer").children().one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
		            	window.location.href=loc;
		        	});
		        }
			});
		});

		var transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children();


		var frameProportion = 1.78, //png frame aspect ratio
		frames = 25, //number of png frames
		resize = false;
	 
		//set transitionBackground dimentions
		setLayerDimensions();
		$(window).on('resize', function(){
			if( !resize ) {
				resize = true;
				(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
			}
		});
		 
		function setLayerDimensions() {
			var windowWidth = $(window).width(),
				windowHeight = $(window).height(),
				layerHeight, layerWidth;
		 
			if( windowWidth/windowHeight > frameProportion ) {
				layerWidth = windowWidth;
				layerHeight = layerWidth/frameProportion;
			} else {
				layerHeight = windowHeight;
				layerWidth = layerHeight*frameProportion;
			}
		 
			transitionBackground.css({
				'width': layerWidth*frames+'px',
				'height': layerHeight+'px',
			});
		 
			resize = false;
		}
	})
})( jQuery );
(function($) {
  $('.before-wrapper').on( "mousemove", function(e) {
    var offsets = $(this).offset();
    var fullWidth = $(this).width();
    var mouseX = e.pageX - offsets.left;

    if (mouseX < 0) { mouseX = 0; }
    else if (mouseX > fullWidth) { mouseX = fullWidth }


    $(this).parent().find('.comparison-slider').css({
      left: mouseX,
      transition: 'none'
    });
    $(this).find('.after-wrapper').css({
      transform: 'translateX(' + (mouseX) + 'px)',
      transition: 'none'
    });
    $(this).find('.after-image').css({
      transform: 'translateX(' + (-1*mouseX) + 'px)',
      transition: 'none'
    });
  });
  $('.slider-wrapper').on( "mouseleave", function() {
    $(this).parent().find('.comparison-slider').css({
      left: '50%',
      transition: 'all .3s'
    });
    $(this).find('.after-wrapper').css({
      transform: 'translateX(50%)',
      transition: 'all .3s'
    });
    $(this).find('.after-image').css({
      transform: 'translateX(-50%)',
      transition: 'all .3s'
    });
  });
})( jQuery );
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.invokeAll('enable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    if (horizontalEmpty && verticalEmpty) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = isWindow ? undefined : this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = elementOffset + contextModifier - adjustment
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    Waypoint.requestAnimationFrame(function() {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers()
      }
    })

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }

  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var $ = window.jQuery
  var Waypoint = window.Waypoint

  function JQueryAdapter(element) {
    this.$element = $(element)
  }

  $.each([
    'innerHeight',
    'innerWidth',
    'off',
    'offset',
    'on',
    'outerHeight',
    'outerWidth',
    'scrollLeft',
    'scrollTop'
  ], function(i, method) {
    JQueryAdapter.prototype[method] = function() {
      var args = Array.prototype.slice.call(arguments)
      return this.$element[method].apply(this.$element, args)
    }
  })

  $.each([
    'extend',
    'inArray',
    'isEmptyObject'
  ], function(i, method) {
    JQueryAdapter[method] = $[method]
  })

  Waypoint.adapters.push({
    name: 'jquery',
    Adapter: JQueryAdapter
  })
  Waypoint.Adapter = JQueryAdapter
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function createExtension(framework) {
    return function() {
      var waypoints = []
      var overrides = arguments[0]

      if (framework.isFunction(arguments[0])) {
        overrides = framework.extend({}, arguments[1])
        overrides.handler = arguments[0]
      }

      this.each(function() {
        var options = framework.extend({}, overrides, {
          element: this
        })
        if (typeof options.context === 'string') {
          options.context = framework(this).closest(options.context)[0]
        }
        waypoints.push(new Waypoint(options))
      })

      return waypoints
    }
  }

  if (window.jQuery) {
    window.jQuery.fn.waypoint = createExtension(window.jQuery)
  }
  if (window.Zepto) {
    window.Zepto.fn.waypoint = createExtension(window.Zepto)
  }
}())
;
/*
|--------------------------------------------------------------------------
| Custom waypoint code
|--------------------------------------------------------------------------
|
| This runs an animation when a object is within 10% of the bottom view
| Code needs to be wrapper in a ready function or else it won't run
|
*/

jQuery(document).ready(function( $ ) {
	$(".os-animation-left").each(function() {
		var waypoint = new Waypoint({
			element: this,
			handler: function(direction) {
				$(this.element).addClass("animated fadeInLeft");
			},
		  	offset: '90%'
		});
	});

	$(".os-animation-right").each(function() {
		var waypoint = new Waypoint({
			element: this,
			handler: function(direction) {
				$(this.element).addClass("animated fadeInRight");
			},
		  	offset: '90%'
		});
	});

	$(".os-animation-bounce").each(function() {
		var waypoint = new Waypoint({
			element: this,
			handler: function(direction) {
				$(this.element).addClass("animated bounceIn");
			},
		  	offset: '90%'
		});
	});

	$(".os-animation-fade").each(function() {
		var waypoint = new Waypoint({
			element: this,
			handler: function(direction) {
				$(this.element).addClass("animated fadeInUp");
			},
		  	offset: '90%'
		});
	});
});
/**
 * segment - A little JavaScript class (without dependencies) to draw and animate SVG path strokes
 * @version v1.0.8
 * @link https://github.com/lmgonzalves/segment
 * @license MIT
 */

(function($){
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
        || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if(!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element){
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function(){ callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if(!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id){
            clearTimeout(id);
        };
}( jQuery ));

function Segment(path, begin, end, circular){
    this.path = path;
    this.length = path.getTotalLength();
    this.path.style.strokeDashoffset = this.length * 2;
    this.begin = typeof begin !== 'undefined' ? this.valueOf(begin) : 0;
    this.end = typeof end !== 'undefined' ? this.valueOf(end) : this.length;
    this.circular = circular !== 'undefined' ? circular : false;
    this.timer = null;
    this.animationTimer = null;
    this.draw(this.begin, this.end, 0, {circular: this.circular});
}

Segment.prototype = {
    draw: function(begin, end, duration, options){
        this.circular = options && options.hasOwnProperty('circular') ? options.circular : false;
        if(duration){
            var delay = options && options.hasOwnProperty('delay') ? parseFloat(options.delay) * 1000 : 0,
                easing = options && options.hasOwnProperty('easing') ? options.easing : null,
                callback = options && options.hasOwnProperty('callback') ? options.callback : null,
                that = this;

            this.stop();
            if(delay){
                delete options.delay;
                this.timer = setTimeout(function(){
                    that.draw(begin, end, duration, options);
                }, delay);
                return this.timer;
            }

            var startTime = new Date(),
                initBegin = this.begin,
                initEnd = this.end,
                finalBegin = this.valueOf(begin),
                finalEnd = this.valueOf(end);

            (function calc(){
                var now = new Date(),
                    elapsed = (now-startTime)/1000,
                    time = (elapsed/parseFloat(duration)),
                    t = time;

                if(typeof easing === 'function'){
                    t = easing(t);
                }

                if(time > 1){
                    t = 1;
                }else{
                    that.animationTimer = window.requestAnimationFrame(calc);
                }

                that.begin = initBegin + (finalBegin - initBegin) * t;
                that.end = initEnd + (finalEnd - initEnd) * t;

                that.begin = that.begin < 0 && !that.circular ? 0 : that.begin;
                that.begin = that.begin > that.length && !that.circular ? that.length : that.begin;
                that.end = that.end < 0 && !that.circular ? 0 : that.end;
                that.end = that.end > that.length && !that.circular ? that.length : that.end;

                if(that.end - that.begin <= that.length && that.end - that.begin > 0){
                    that.draw(that.begin, that.end, 0, {circular: that.circular});
                }else{
                    if(that.circular && that.end - that.begin > that.length){
                        that.draw(0, that.length, 0, {circular: that.circular});
                    }else{
                        that.draw(that.begin + (that.end - that.begin), that.end - (that.end - that.begin), 0, {circular: that.circular});
                    }
                }

                if(time > 1 && typeof callback === 'function'){
                    return callback.call(that);
                }
            })();
        }else{
            this.path.style.strokeDasharray = this.strokeDasharray(begin, end);
        }
    },

    strokeDasharray: function(begin, end){
        this.begin = this.valueOf(begin);
        this.end = this.valueOf(end);
        if(this.circular){
            var division = this.begin > this.end || (this.begin < 0 && this.begin < this.length * -1)
                ? parseInt(this.begin / parseInt(this.length)) : parseInt(this.end / parseInt(this.length));
            if(division !== 0){
                this.begin = this.begin - this.length * division;
                this.end = this.end - this.length * division;
            }
        }
        if(this.end > this.length){
            var plus = this.end - this.length;
            return [this.length, this.length, plus, this.begin - plus, this.end - this.begin].join(' ');
        }
        if(this.begin < 0){
            var minus = this.length + this.begin;
            if(this.end < 0){
                return [this.length, this.length + this.begin, this.end - this.begin, minus - this.end, this.end - this.begin, this.length].join(' ');
            }else{
                return [this.length, this.length + this.begin, this.end - this.begin, minus - this.end, this.length].join(' ');
            }
        }
        return [this.length, this.length + this.begin, this.end - this.begin].join(' ');
    },

    valueOf: function(input){
        var val = parseFloat(input);
        if(typeof input === 'string' || input instanceof String){
            if(~input.indexOf('%')){
                var arr;
                if(~input.indexOf('+')){
                    arr = input.split('+');
                    val = this.percent(arr[0]) + parseFloat(arr[1]);
                }else if(~input.indexOf('-')){
                    arr = input.split('-');
                    if(arr.length === 3){
                        val = -this.percent(arr[1]) - parseFloat(arr[2]);
                    }else{
                        val = arr[0] ? this.percent(arr[0]) - parseFloat(arr[1]) : -this.percent(arr[1]);
                    }
                }else{
                    val = this.percent(input);
                }
            }
        }
        return val;
    },

    stop: function(){
        window.cancelAnimationFrame(this.animationTimer);
        this.animationTimer = null;
        clearTimeout(this.timer);
        this.timer = null;
    },

    percent: function(value){
        return parseFloat(value) / 100 * this.length;
    }
};
(function($) {
    $(document).ready(function() {
        var pathA = document.getElementById('pathA'),
        pathC = document.getElementById('pathC'),
        pathB = document.getElementById('pathB'),

        // draw the initial segments, which will define the passive form
        segmentA = new Segment(pathA, 80, 320),
        segmentB = new Segment(pathB, 80, 320);
        segmentC = new Segment(pathC, 80, 320);

        /*
        |--------------------------------------------------------------------------
        | Start the animation
        |--------------------------------------------------------------------------
        |
        | Start the regular the animation
        |
        */

        // Linear section, with a callback to the next
        function inAC(s) { s.draw('80% - 240', '80%', 0.3, {delay: 0.1, callback: function(){ inAC2(s) }}); }

        // Elastic section, using elastic-out easing function
        function inAC2(s) { s.draw('100% - 545', '100% - 305', 0.6, {easing: ease.ease('elastic-out', 1, 0.3)}); }

        // Expand the bar a bit
        function inB(s) { s.draw(80 - 60, 320 + 60, 0.1, {callback: function(){ inB2(s) }}); }

        // Reduce with a bounce effect
        function inB2(s) { s.draw(80 + 120, 320 - 120, 0.3, {easing: ease.ease('bounce-out', 1, 0.3)}); }

        /*
        |--------------------------------------------------------------------------
        | Reverse the animation
        |--------------------------------------------------------------------------
        |
        | Reverse the animation
        |
        */

        function outAC(s) { s.draw('90% - 240', '90%', 0.1, {easing: ease.ease('elastic-in', 1, 0.3), callback: function(){ outAC2(s) }}); }
        function outAC2(s) { s.draw('20% - 240', '20%', 0.3, {callback: function(){ outAC3(s) }}); }
        function outAC3(s) { s.draw(80, 320, 0.7, {easing: ease.ease('elastic-out', 1, 0.3)}); }

        function outB(s) { s.draw(80, 320, 0.7, {delay: 0.1, easing: ease.ease('elastic-out', 2, 0.4)}); }

        /*
        |--------------------------------------------------------------------------
        | Trigger to animate othe svgr reverse the svg animation
        |--------------------------------------------------------------------------
        |
        | Reverse the animation
        |
        */

        var trigger = document.getElementById('menu-icon-wrapper'),
            toCloseIcon = true;

        trigger.onclick = function() {
            if (toCloseIcon) {
            	// icon animation
                inAC(segmentA);
                inB(segmentB);
                inAC(segmentC);

                // responsive menu
                $("html, body").addClass("noscroll");
                $(".navbar-collapse").addClass("fullscreen-menu");
            } else {
            	// icon animation
                outAC(segmentA);
                outB(segmentB);
                outAC(segmentC);

                // responsive menu
                $("html, body").removeClass("noscroll");
                $(".navbar-collapse").removeClass("fullscreen-menu");
            }
            toCloseIcon = !toCloseIcon;
        };
    });
})( jQuery );
/*!
 * Morphext - Text Rotating Plugin for jQuery
 * https://github.com/MrSaints/Morphext
 *
 * Built on jQuery Boilerplate
 * http://jqueryboilerplate.com/
 *
 * Copyright 2014 Ian Lai and other contributors
 * Released under the MIT license
 * http://ian.mit-license.org/
 */

/*eslint-env browser */
/*global jQuery:false */
/*eslint-disable no-underscore-dangle */

(function ($) {
    "use strict";

    var pluginName = "Morphext",
        defaults = {
            animation: "bounceIn",
            separator: ",",
            speed: 2000,
            complete: $.noop
        };

    function Plugin (element, options) {
        this.element = $(element);

        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._init();
    }

    Plugin.prototype = {
        _init: function () {
            var $that = this;
            this.phrases = [];

            this.element.addClass("morphext");

            $.each(this.element.text().split(this.settings.separator), function (key, value) {
                $that.phrases.push($.trim(value));
            });

            this.index = -1;
            this.animate();
            this.start();
        },
        animate: function () {
            this.index = ++this.index % this.phrases.length;
            this.element[0].innerHTML = "<span class=\"animated " + this.settings.animation + "\">" + this.phrases[this.index] + "</span>";

            if ($.isFunction(this.settings.complete)) {
                this.settings.complete.call(this);
            }
        },
        start: function () {
            var $that = this;
            this._interval = setInterval(function () {
                $that.animate();
            }, this.settings.speed);
        },
        stop: function () {
            this._interval = clearInterval(this._interval);
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

    /*
    |--------------------------------------------------------------------------
    | Custom code
    |--------------------------------------------------------------------------
    |
    | All gulp tasks are specified here
    |
    */

    $(document).ready(function() {
        var count = 0;
        
        $(".js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "fadeInDown",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 2000,
            complete: function () {
                count++;
                if(count == $(".js-rotating").data('sentences')) {
                    this.stop();

                    $(".js-rotating > span:contains('.')").each(function () {
                        $(this).html($(this).html().replace(".", "<span class='highlight'>.</span>"));
                    });
                }
            }
        }); 
    });
})(jQuery);

/*
|--------------------------------------------------------------------------
| wp_nav_menu() hook
|--------------------------------------------------------------------------
|
| Add data attribute to the wordpress nav menu items
|
*/

jQuery(document).ready(function( $ ) {
	$(".navbar-nav li").each(function() {
		$(this).find("span").attr('data-hover', $(this).text());
	});
});