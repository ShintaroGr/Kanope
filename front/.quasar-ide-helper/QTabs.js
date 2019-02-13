
/**
 * Quasar QTabs component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/tabs|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTabs',
  props: {
    /**
     * Model of the component defining current panel name; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Number|String}
     */
    value: {
      type: [Number,String],
    },
    /**
     * Horizontal alignment the tabs within the tabs container
     * @type {String}
     */
    align: {
      type: String,
    },
    /**
     * Breakpoint (in pixels) of tabs container width at which the tabs automatically turn to a justify alignment
     * @type {Number|String}
     */
    breakpoint: {
      type: [Number,String],
    },
    /**
     * The color to be attributed to the text of the active tab
     * @type {String}
     */
    activeColor: {
      type: String,
    },
    /**
     * The color to be attributed to the background of the active tab
     * @type {String}
     */
    activeBgColor: {
      type: String,
    },
    /**
     * The color to be attributed to the indicator (the underline) of the active tab
     * @type {String}
     */
    indicatorColor: {
      type: String,
    },
    /**
     * The name of an icon to replace the default arrow used to scroll through the tabs to the left, when the tabs extend past the width of the tabs container
     * @type {String}
     */
    leftIcon: {
      type: String,
    },
    /**
     * The name of an icon to replace the default arrow used to scroll through the tabs to the right, when the tabs extend past the width of the tabs container
     * @type {String}
     */
    rightIcon: {
      type: String,
    },
    /**
     * Allows the indicator to be placed above the tab, instead of below it
     * @type {Boolean}
     */
    topIndicator: {
      type: Boolean,
    },
    /**
     * Allows the indicator to be the same width as the tab's content (text or icon), instead of the whole width of the tab
     * @type {Boolean}
     */
    narrowIndicator: {
      type: Boolean,
    },
    /**
     * Allows the text to be inline with the icon, should one be used
     * @type {Boolean}
     */
    inlineLabel: {
      type: Boolean,
    },
    /**
     * Turns off capitalizing all letters within the tab (which is the default)
     * @type {Boolean}
     */
    noCaps: {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
    }
  }
}
