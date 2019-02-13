import Vue from 'vue';
/**
* Quasar plugins injected to prototype:
* * $q.addressbarColor
* $q.fullscreen
* $q.appVisible
* $q.bottomSheet
* $q.cookies
* $q.dialog
* $q.loading
* $q.loadingBar
* $q.localStorage
* $q.notify
* $q.platform
* $q.screen
* $q.sessionStorage 
*/
Vue.prototype.$q = {
  addressbarColor : {
  
  
    /**
     * Sets addressbar color (for browsers that support it)
     * @param {String} hexColor Color in hex format
     * @returns {undefined} 
     */
    set (hexColor) {}
  },
  fullscreen : {
  
    /**
     * Does browser support it?
     * @type {Boolean}
     */
    isCapable: {},
    /**
     * Is Fullscreen active? (reactive)
     * @type {Boolean}
     */
    isActive: {},
  
    /**
     * Request going into Fullscreen (with optional target)
     * @param {String} [target] Optional CSS selector of target to request Fullscreen on
     * @returns {undefined} 
     */
    request (target) {},
    /**
     * Request exiting out of Fullscreen mode
     * @returns {undefined} 
     */
    exit () {},
    /**
     * Request toggling Fullscreen mode (with optional target if requesting going into Fullscreen only)
     * @param {String} [target] Optional CSS selector of target to request Fullscreen on
     * @returns {undefined} 
     */
    toggle (target) {}
  },
  appVisible : {
  
    /**
     * Does the app has user focus? Or the app runs in the background / another tab has the user's attention (reactive)
     * @type {Boolean}
     */
    appVisible: {},
  
  },
  bottomSheet : {
  
  
    /**
     * Creates an ad-hoc Bottom Sheet; Same as calling $q.bottomSheet(...)
     * @param {Object} opts Bottom Sheet options
     * @returns {Object} Chainable Object
     */
    create (opts) {}
  },
  cookies : {
  
  
    /**
     * Get cookie
     * @param {String} name Cookie name
     * @returns {String} Cookie value
     */
    get (name) {},
    /**
     * Get all cookies
     * @returns {Object} Object with cookie names (as keys) and their values
     */
    getAll () {},
    /**
     * Set cookie
     * @param {String} name Cookie name
     * @param {String} value Cookie value
     * @param {Object} [options] Cookie options
     * @returns {undefined} 
     */
    set (name,value,options) {},
    /**
     * Check if cookie exists
     * @param {String} name Cookie name
     * @returns {Boolean} Does cookie exists or not?
     */
    has (name) {},
    /**
     * Remove a cookie
     * @param {String} name Cookie name
     * @param {Object} [options] Cookie options
     * @returns {undefined} 
     */
    remove (name,options) {},
    /**
     * For SSR usage only, and only on the global import (not on $q.cookies)
     * @param {Object} ssrContext SSR Context Object
     * @returns {Object} Cookie object (like $q.cookies) for SSR usage purposes
     */
    parseSSR (ssrContext) {}
  },
  dialog : {
  
  
    /**
     * Creates an ad-hoc Dialog; Same as calling $q.dialog(...)
     * @param {Object} opts Dialog options
     * @returns {Object} Chainable Object
     */
    create (opts) {}
  },
  loading : {
  
    /**
     * Is Loading active? (reactive)
     * @type {Boolean}
     */
    isActive: {},
  
    /**
     * Activate and show
     * @param {Object} [opts] All props are optional
     * @returns {undefined} 
     */
    show (opts) {},
    /**
     * Hide it
     * @returns {undefined} 
     */
    hide () {},
    /**
     * Merge options into the default ones
     * @param {Object} opts Pick the subprop you want to define
     * @returns {undefined} 
     */
    setDefaults (opts) {}
  },
  loadingBar : {
  
  
    /**
     * Notify bar you've started a background activity
     * @param {Number} [speed] Delay (in milliseconds) between bar progress increments
     * @returns {undefined} 
     */
    start (speed) {},
    /**
     * Notify bar one background activity has finalized
     * @returns {undefined} 
     */
    stop () {},
    /**
     * Manually trigger a bar progress increment
     * @param {Number} [amount] Amount (0.0 < x < 1.0) to increment with
     * @returns {undefined} 
     */
    increment (amount) {}
  },
  localStorage : {
  
  
    /**
     * Check if storage item exists
     * @param {String} key Entry key
     * @returns {Boolean} Does the item exists or not?
     */
    has (key) {},
    /**
     * Get storage number of entries
     * @returns {Number} Number of entries
     */
    getLength () {},
    /**
     * Get a storage item value
     * @param {String} key Entry key
     * @returns {*} Storage item value
     */
    getItem (key) {},
    /**
     * Get the storage item value at specific index
     * @param {Number} index Entry index
     * @returns {*} Storage item value
     */
    getIndex (index) {},
    /**
     * Retrieve all items in storage
     * @returns {Object} Object syntax: item name as Object key and its value
     */
    getAll () {},
    /**
     * Set item in storage
     * @param {String} key Entry key
     * @param {String} value Entry value
     * @returns {undefined} 
     */
    set (key,value) {},
    /**
     * Remove a storage item
     * @param {String} key Storage key
     * @returns {undefined} 
     */
    remove (key) {},
    /**
     * Remove everything from the storage
     * @returns {undefined} 
     */
    clear () {},
    /**
     * Determine if storage has any items
     * @returns {Boolean} Tells if storage is empty or not
     */
    isEmpty () {}
  },
  notify : {
  
  
    /**
     * Creates a notification; Same as calling $q.notify(...)
     * @param {Object} opts For syntax, check quasar.conf options parameters
     * @returns {Function} Calling this function hides the notification
     */
    create (opts) {},
    /**
     * Merge options into the default ones
     * @param {Object} opts For syntax, check quasar.conf options parameters
     * @returns {undefined} 
     */
    setDefaults (opts) {}
  },
  platform : {
  
    /**
     * Client browser details (property names depend on browser)
     * @type {Object}
     */
    is: {},
    /**
     * Client browser detectable properties
     * @type {Object}
     */
    has: {},
    /**
     * Client browser environment
     * @type {Object}
     */
    within: {},
  
  },
  screen : {
  
    /**
     * Screen width (in pixels) (reactive)
     * @type {Number}
     */
    width: {},
    /**
     * Screen height (in pixels) (reactive)
     * @type {Number}
     */
    height: {},
    /**
     * Breakpoints (in pixels) (reactive)
     * @type {Object}
     */
    sizes: {},
    /**
     * Tells if current screen width is lower than breakpoint-name (reactive)
     * @type {Object}
     */
    lt: {},
    /**
     * Tells if current screen width is greater than breakpoint-name (reactive)
     * @type {Object}
     */
    gt: {},
    /**
     * Current screen width fits exactly 'xs' breakpoint (reactive)
     * @type {Boolean}
     */
    xs: {},
    /**
     * Current screen width fits exactly 'sm' breakpoint (reactive)
     * @type {Boolean}
     */
    sm: {},
    /**
     * Current screen width fits exactly 'md' breakpoint (reactive)
     * @type {Boolean}
     */
    md: {},
    /**
     * Current screen width fits exactly 'lg' breakpoint (reactive)
     * @type {Boolean}
     */
    lg: {},
    /**
     * Current screen width fits exactly 'xl' breakpoint (reactive)
     * @type {Boolean}
     */
    xl: {},
  
    /**
     * Override default breakpoint sizes
     * @param {Object} breakpoints Pick what you want to override
     * @returns {undefined} 
     */
    setSizes (breakpoints) {},
    /**
     * Debounce update of all props when screen width/height changes
     * @param {Number} amount Amount in milliseconds
     * @returns {undefined} 
     */
    setDebounce (amount) {}
  },
  sessionStorage : {
  
  
    /**
     * Check if storage item exists
     * @param {String} key Entry key
     * @returns {Boolean} Does the item exists or not?
     */
    has (key) {},
    /**
     * Get storage number of entries
     * @returns {Number} Number of entries
     */
    getLength () {},
    /**
     * Get a storage item value
     * @param {String} key Entry key
     * @returns {*} Storage item value
     */
    getItem (key) {},
    /**
     * Get the storage item value at specific index
     * @param {Number} index Entry index
     * @returns {*} Storage item value
     */
    getIndex (index) {},
    /**
     * Retrieve all items in storage
     * @returns {Object} Object syntax: item name as Object key and its value
     */
    getAll () {},
    /**
     * Set item in storage
     * @param {String} key Entry key
     * @param {String} value Entry value
     * @returns {undefined} 
     */
    set (key,value) {},
    /**
     * Remove a storage item
     * @param {String} key Storage key
     * @returns {undefined} 
     */
    remove (key) {},
    /**
     * Remove everything from the storage
     * @returns {undefined} 
     */
    clear () {},
    /**
     * Determine if storage has any items
     * @returns {Boolean} Tells if storage is empty or not
     */
    isEmpty () {}
  }
}