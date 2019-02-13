
/**
 * Quasar QSelect component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/select|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QSelect',
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
    },
    /**
     * Model of the component; Must be Array if using 'multiple' prop; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Number|String|Array}
     */
    value: {
      type: [Number,String,Array],
      required: true
    },
    /**
     * Allow multiple selection; Model must be Array
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
    },
    /**
     * Override default selection string, if not using 'selected' slot/scoped slot and if not using 'use-chips' prop
     * @type {Number|String}
     */
    displayValue: {
      type: [Number,String],
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    dropdownIcon: {
      type: String,
    },
    /**
     * Available options that the user can select from
     * @type {Array}
     */
    options: {
      type: Array,
    },
    /**
     * Property of option which holds the 'value'
     * @type {Function|String}
     */
    optionValue: {
      type: [Function,String],
    },
    /**
     * Property of option which holds the 'label'
     * @type {Function|String}
     */
    optionLabel: {
      type: [Function,String],
    },
    /**
     * Property of option which tells it's disabled; The value of the property must be a Boolean
     * @type {Function|String}
     */
    optionDisable: {
      type: [Function,String],
    },
    /**
     * Hides selection; Use the underlying input tag to hold the label (instead of showing it to the right of the input) of the selected option; Only works for non 'multiple' Selects
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
    },
    /**
     * Show a counter of selected options on bottom right side
     * @type {Boolean}
     */
    counter: {
      type: Boolean,
    },
    /**
     * Allow a maximum number of selections that the user can do
     * @type {Number|String}
     */
    maxValues: {
      type: [Number,String],
    },
    /**
     * Dense mode for options list; occupies less space
     * @type {Boolean}
     */
    optionsDense: {
      type: Boolean,
    },
    /**
     * Options menu will be colored with a dark color
     * @type {Boolean}
     */
    optionsDark: {
      type: Boolean,
    },
    /**
     * CSS class name for options that are active/selected
     * @type {String}
     */
    optionsSelectedClass: {
      type: String,
    },
    /**
     * Expanded menu will cover the component
     * @type {Boolean}
     */
    optionsCover: {
      type: Boolean,
    },
    /**
     * Use an input tag where users can type
     * @type {Boolean}
     */
    useInput: {
      type: Boolean,
    },
    /**
     * Use QChip to show what is currently selected
     * @type {Boolean}
     */
    useChips: {
      type: Boolean,
    },
    /**
     * Try to map labels of model from 'options' Array; has a small performance penalty
     * @type {Boolean}
     */
    mapOptions: {
      type: Boolean,
    },
    /**
     * Update model with the value of the selected option instead of the whole option
     * @type {Boolean}
     */
    emitValue: {
      type: Boolean,
    },
    /**
     * Debounce the input model update with an amount of milliseconds
     * @type {Number|String}
     */
    inputDebounce: {
      type: [Number,String],
    },
    /**
     * Focus component on initial render
     * @type {Boolean}
     */
    autofocus: {
      type: Boolean,
    },
    /**
     * Transition when showing the menu; One of Quasar's embedded transitions; Works only if "cover-options" is not used
     * @type {String}
     */
    transitionShow: {
      type: String,
    },
    /**
     * Transition when hiding the menu; One of Quasar's embedded transitions; Works only if "cover-options" is not used
     * @type {String}
     */
    transitionHide: {
      type: String,
    }
  }
}
