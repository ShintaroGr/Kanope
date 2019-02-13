
/**
 * Quasar QTooltip component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/tooltip|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTooltip',
  props: {
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * Class definitions to be attributed to the Tooltip
     * @type {Array|String|Object}
     */
    contentClass: {
      type: [Array,String,Object],
    },
    /**
     * Style definitions to be attributed to the Tooltip
     * @type {Array|String|Object}
     */
    contentStyle: {
      type: [Array,String,Object],
    },
    /**
     * The maximimum height of the Tooltip; Size in CSS units, including unit name
     * @type {String}
     */
    maxHeight: {
      type: String,
    },
    /**
     * The maximimum width of the Tooltip; Size in CSS units, including unit name
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
    },
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     * @type {String}
     */
    anchor: {
      type: String,
    },
    /**
     * An array of two numbers to offset the Tooltip horizontally and vertically in pixels
     * @type {Array}
     */
    offset: {
      type: Array,
    },
    /**
     * Configure a target element to trigger Tooltip toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists)
     * @type {Boolean|String}
     */
    target: {
      type: [Boolean,String],
    },
    /**
     * Configure Tooltip to appear with delay
     * @type {Number}
     */
    delay: {
      type: Number,
    }
  }
}
