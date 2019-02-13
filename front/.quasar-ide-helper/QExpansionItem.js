
/**
 * Quasar QExpansionItem component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/expansion-item|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QExpansionItem',
  props: {
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     * @type {String|Object}
     */
    to: {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'exact' property
     * @type {Boolean}
     */
    exact: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'append' property
     * @type {Boolean}
     */
    append: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     * @type {Boolean}
     */
    replace: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    activeClass: {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    exactActiveClass: {
      type: String,
    },
    /**
     * Model of the component defining 'open' state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    expandIcon: {
      type: String,
    },
    /**
     * Apply custom class(es) to the expand icon item section
     * @type {Array|String|Object}
     */
    expandIconClass: {
      type: [Array,String,Object],
    },
    /**
     * Header label (unless using 'header' slot)
     * @type {String}
     */
    label: {
      type: String,
    },
    /**
     * Header sub-label (unless using 'header' slot)
     * @type {String}
     */
    caption: {
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
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
    },
    /**
     * Animation duration (in milliseconds)
     * @type {Number}
     */
    duration: {
      type: Number,
    },
    /**
     * Apply an inset to header (unless using 'header' slot); Useful when header avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu
     * @type {Number}
     */
    headerInsetLevel: {
      type: Number,
    },
    /**
     * Apply an inset to content (changes content padding)
     * @type {Number}
     */
    contentInsetLevel: {
      type: Number,
    },
    /**
     * Apply a top and bottom separator when expansion item is opened
     * @type {Boolean}
     */
    expandSeparator: {
      type: Boolean,
    },
    /**
     * Puts expansion item into open state on initial render; Overriden by v-model if used
     * @type {Boolean}
     */
    defaultOpened: {
      type: Boolean,
    },
    /**
     * Applies the expansion events to the expand icon only and not to the whole header
     * @type {Boolean}
     */
    expandIconToggle: {
      type: Boolean,
    },
    /**
     * Switch expand icon side (from default 'right' to 'left')
     * @type {Boolean}
     */
    switchToggleSide: {
      type: Boolean,
    },
    /**
     * Use dense mode for expand icon
     * @type {Boolean}
     */
    denseToggle: {
      type: Boolean,
    },
    /**
     * Register expansion item into a group (unique name that must be applied to all expansion items in that group) for coordinated open/close state within the group a.k.a. 'accordion mode'
     * @type {String}
     */
    group: {
      type: String,
    },
    /**
     * Put expansion list into 'popup' mode
     * @type {Boolean}
     */
    popup: {
      type: Boolean,
    },
    /**
     * Apply custom style to the header
     * @type {Array|String|Object}
     */
    headerStyle: {
      type: [Array,String,Object],
    },
    /**
     * Apply custom class(es) to the header
     * @type {Array|String|Object}
     */
    headerClass: {
      type: [Array,String,Object],
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
