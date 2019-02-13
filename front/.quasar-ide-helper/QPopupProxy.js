
/**
 * Quasar QPopupProxy component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/popup-proxy|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPopupProxy',
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
     * Defines the state of the component (shown/hidden); Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * Breakpoint (in pixels) of window width from where a Menu will get to be used instead of a Dialog
     * @type {Number|String}
     */
    breakpoint: {
      type: [Number,String],
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    }
  }
}
