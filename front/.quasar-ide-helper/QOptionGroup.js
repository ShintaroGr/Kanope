
/**
 * Quasar QOptionGroup component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/option-group|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QOptionGroup',
  props: {
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*}
     */
    value: {
    },
    /**
     * Array of objects with value and label props. The binary components will be created according to this array
     * @type {Array}
     */
    options: {
      type: Array,
    },
    /**
     * The type of input component to be used
     * @type {String}
     */
    type: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Should the color (if specified any) be kept when input components are unticked?
     * @type {Boolean}
     */
    keepColor: {
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
     * Label (if any specified) should be displayed on the left side of the input components
     * @type {Boolean}
     */
    leftLabel: {
      type: Boolean,
    },
    /**
     * Show input component as inline-block rather than each having their own row
     * @type {Boolean}
     */
    inline: {
      type: Boolean,
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
