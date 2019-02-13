
/**
 * Quasar QRange component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/range|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QRange',
  props: {
    /**
     * Model of the component of type { min, max } (both values must be between global min/max); Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Object}
     */
    value: {
      type: Object,
    },
    /**
     * Minimum value of the model
     * @type {Number}
     */
    min: {
      type: Number,
    },
    /**
     * Maximum value of the model
     * @type {Number}
     */
    max: {
      type: Number,
    },
    /**
     * Specify step amount between valid values (> 0.0); When step equals to 0 it defines infinite granularity
     * @type {Number}
     */
    step: {
      type: Number,
    },
    /**
     * User can drag range instead of just the two thumbs
     * @type {Boolean}
     */
    dragRange: {
      type: Boolean,
    },
    /**
     * User can drag only the range instead and NOT the two thumbs
     * @type {Boolean}
     */
    dragRangeOnly: {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Popup labels (for left and right thumbs) when user clicks/taps on the slider thumb and moves it
     * @type {Boolean}
     */
    label: {
      type: Boolean,
    },
    /**
     * Color name for labels background from the Quasar Color Palette; Applies to both labels, unless specific label color props are used
     * @type {String}
     */
    labelColor: {
      type: String,
    },
    /**
     * Color name for left label background from the Quasar Color Palette
     * @type {String}
     */
    leftLabelColor: {
      type: String,
    },
    /**
     * Color name for right label background from the Quasar Color Palette
     * @type {String}
     */
    rightLabelColor: {
      type: String,
    },
    /**
     * Always display the labels
     * @type {Boolean}
     */
    labelAlways: {
      type: Boolean,
    },
    /**
     * Display markers on the track, one for each possible value for the model
     * @type {Boolean}
     */
    markers: {
      type: Boolean,
    },
    /**
     * Snap thumbs on valid values, rather than sliding freely; Suggestion: use with 'step' prop
     * @type {Boolean}
     */
    snap: {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    readonly: {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    tabindex: {
      type: [Number,String],
    }
  }
}
