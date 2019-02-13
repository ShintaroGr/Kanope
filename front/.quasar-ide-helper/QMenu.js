
/**
 * Quasar QMenu component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/menu|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QMenu',
  props: {
    /**
     * Configure a target element to trigger component toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists)
     * @type {Boolean|String}
     */
    target: {
      type: [Boolean,String],
    },
    /**
     * Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)
     * @type {Boolean}
     */
    contextMenu: {
      type: Boolean,
    },
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * Allows the menu to match at least the full width of its target
     * @type {Boolean}
     */
    fit: {
      type: Boolean,
    },
    /**
     * Allows the menu to cover its target. When used, the 'self' and 'fit' props are no longer effective
     * @type {Boolean}
     */
    cover: {
      type: Boolean,
    },
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {String}
     */
    anchor: {
      type: String,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {String}
     */
    self: {
      type: String,
    },
    /**
     * An array of two numbers to offset the menu horizontally and vertically in pixels
     * @type {Array}
     */
    offset: {
      type: Array,
    },
    /**
     * Skips attaching events to the target DOM element (that trigger the menu to get shown)
     * @type {Boolean}
     */
    noParentEvent: {
      type: Boolean,
    },
    /**
     * Allows for the target position to be set by the mouse position, when the target of the menu is either clicked or touched
     * @type {Boolean}
     */
    touchPosition: {
      type: Boolean,
    },
    /**
     * Allows the menu to not be dismissed by a click/tap outside of the menu or by hitting the ESC key
     * @type {Boolean}
     */
    persistent: {
      type: Boolean,
    },
    /**
     * Allows any click/tap in the menu to close it; Useful instead of attaching events to each menu item that should close the menu on click/tap
     * @type {Boolean}
     */
    autoClose: {
      type: Boolean,
    },
    /**
     * Class definitions to be attributed to the menu
     * @type {Array|String|Object}
     */
    contentClass: {
      type: [Array,String,Object],
    },
    /**
     * Style definitions to be attributed to the menu
     * @type {Array|String|Object}
     */
    contentStyle: {
      type: [Array,String,Object],
    },
    /**
     * The maximimum height of the menu; Size in CSS units, including unit name
     * @type {String}
     */
    maxHeight: {
      type: String,
    },
    /**
     * The maximimum width of the menu; Size in CSS units, including unit name
     * @type {String}
     */
    maxWidth: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionShow: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionHide: {
      type: String,
    }
  }
}
