
/**
 * Quasar QHeader component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/header|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QHeader',
  props: {
    /**
     * Model of the component defining if it is shown or hidden to the user; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * Enable 'reveal' mode; Takes into account user scroll to temporarily show/hide header
     * @type {Boolean}
     */
    reveal: {
      type: Boolean,
    },
    /**
     * Amount of scroll (in pixels) that should trigger a 'reveal' state change
     * @type {Number}
     */
    revealOffset: {
      type: Number,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    bordered: {
      type: Boolean,
    },
    /**
     * Adds a default shadow to the header
     * @type {Boolean}
     */
    elevated: {
      type: Boolean,
    }
  }
}
