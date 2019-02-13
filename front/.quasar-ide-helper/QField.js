
/**
 * Quasar QField component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/field|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QField',
  props: {
    /**
     * Does field has validation errors?
     * @type {Boolean}
     */
    error: {
      type: Boolean,
    },
    /**
     * Validation error message (gets displayed only if 'error' is set to 'true')
     * @type {String}
     */
    errorMessage: {
      type: String,
    },
    /**
     * Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules
     * @type {Array}
     */
    rules: {
      type: Array,
    },
    /**
     * Check validation status against the 'rules' only after field loses focus for first time
     * @type {Boolean}
     */
    lazyRules: {
      type: Boolean,
    },
    /**
     * A text label that will “float” up above the input field, once the field gets focus
     * @type {String}
     */
    label: {
      type: String,
    },
    /**
     * Label will be always shown above the field regardless of field content (if any)
     * @type {Boolean}
     */
    stackLabel: {
      type: Boolean,
    },
    /**
     * Helper (hint) text which gets placed below your wrapped form component
     * @type {String}
     */
    hint: {
      type: String,
    },
    /**
     * Hide the helper (hint) text when field doesn't has focus
     * @type {Boolean}
     */
    hideHint: {
      type: Boolean,
    },
    /**
     * Prefix
     * @type {String}
     */
    prefix: {
      type: String,
    },
    /**
     * Suffix
     * @type {String}
     */
    suffix: {
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
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    bgColor: {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Use 'filled' design for the field
     * @type {Boolean}
     */
    filled: {
      type: Boolean,
    },
    /**
     * Use 'outlined' design for the field
     * @type {Boolean}
     */
    outlined: {
      type: Boolean,
    },
    /**
     * Use 'borderless' design for the field
     * @type {Boolean}
     */
    borderless: {
      type: Boolean,
    },
    /**
     * Use 'standout' design for the field
     * @type {Boolean}
     */
    standout: {
      type: Boolean,
    },
    /**
     * Enables bottom slots ('error', 'hint', 'counter')
     * @type {Boolean}
     */
    bottomSlots: {
      type: Boolean,
    },
    /**
     * Applies a small standard border-radius for a squared shape of the component
     * @type {Boolean}
     */
    rounded: {
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
     * Align content to match QItem
     * @type {Boolean}
     */
    itemsAligned: {
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
    }
  }
}
