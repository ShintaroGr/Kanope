
/**
 * Quasar QBtnDropdown component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/btn-dropdown|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QBtnDropdown',
  props: {
    /**
     * Controls Menu show/hidden state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    ripple: {
      type: [Boolean,Object],
    },
    /**
     * Define the button HTML DOM type
     * @type {String}
     */
    type: {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     * @type {String|Object}
     */
    to: {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     * @type {Boolean}
     */
    replace: {
      type: Boolean,
    },
    /**
     * The text that will be shown on the button
     * @type {String|Number}
     */
    label: {
      type: [String,Number],
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
    iconRight: {
      type: String,
    },
    /**
     * Makes a circle shaped button
     * @type {Boolean}
     */
    round: {
      type: Boolean,
    },
    /**
     * Use 'outline' design
     * @type {Boolean}
     */
    outline: {
      type: Boolean,
    },
    /**
     * Use 'flat' design
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
    },
    /**
     * Remove shadow
     * @type {Boolean}
     */
    unelevated: {
      type: Boolean,
    },
    /**
     * Applies a more prominent border-radius for a squared shape button
     * @type {Boolean}
     */
    rounded: {
      type: Boolean,
    },
    /**
     * Use 'push' design
     * @type {Boolean}
     */
    push: {
      type: Boolean,
    },
    /**
     * Applies a glossy effect
     * @type {Boolean}
     */
    glossy: {
      type: Boolean,
    },
    /**
     * Button size name or a CSS unit including unit name
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * Makes button size and shape to fit a Floating Action Button
     * @type {Boolean}
     */
    fab: {
      type: Boolean,
    },
    /**
     * Makes button size and shape to fit a small Floating Action Button
     * @type {Boolean}
     */
    fabMini: {
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
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    textColor: {
      type: String,
    },
    /**
     * Avoid turning label text into caps (which happens by default)
     * @type {Boolean}
     */
    noCaps: {
      type: Boolean,
    },
    /**
     * Avoid label text wrapping
     * @type {Boolean}
     */
    noWrap: {
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
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    tabindex: {
      type: [Number,String],
    },
    /**
     * Label or content alignment
     * @type {String}
     */
    align: {
      type: String,
    },
    /**
     * Stack icon and label vertically instead of on same line (like it is by default)
     * @type {Boolean}
     */
    stack: {
      type: Boolean,
    },
    /**
     * When used on flexbox parent, button will stretch to parent's height
     * @type {Boolean}
     */
    stretch: {
      type: Boolean,
    },
    /**
     * Put button into loading state (displays a QSpinner -- can be overriden by using a 'loading' slot)
     * @type {Boolean}
     */
    loading: {
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
     * Split dropdown icon into its own button
     * @type {Boolean}
     */
    split: {
      type: Boolean,
    },
    /**
     * Style definitions to be attributed to the menu
     * @type {Array|String|Object}
     */
    contentStyle: {
      type: [Array,String,Object],
    },
    /**
     * Class definitions to be attributed to the menu
     * @type {Array|String|Object}
     */
    contentClass: {
      type: [Array,String,Object],
    },
    /**
     * Allows the menu to cover the button. When used, the 'menu-self' and 'menu-fit' props are no longer effective
     * @type {Boolean}
     */
    cover: {
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
     * Two values setting the starting position or anchor point of the menu relative to its target
     * @type {String}
     */
    menuAnchor: {
      type: String,
    },
    /**
     * Two values setting the menu's own position relative to its target
     * @type {String}
     */
    menuSelf: {
      type: String,
    }
  }
}
