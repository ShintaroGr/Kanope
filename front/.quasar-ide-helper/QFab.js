
/**
 * Quasar QFab component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/fab|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QFab',
  props: {
    /**
     * Controls state of fab actions (showing/hidden); Works best with v-model directive, otherwise use along listening to 'input' event
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
    activeIcon: {
      type: String,
    },
    /**
     * Direction to expand Fab Actions to
     * @type {String}
     */
    direction: {
      type: String,
    },
    /**
     * By default, Fab Actions are hidden when user navigates to another route and this prop disables this behavior
     * @type {Boolean}
     */
    persistent: {
      type: Boolean,
    },
    /**
     * Use 'outline' design for Fab button
     * @type {Boolean}
     */
    outline: {
      type: Boolean,
    },
    /**
     * Use 'push' design for Fab button
     * @type {Boolean}
     */
    push: {
      type: Boolean,
    },
    /**
     * Use 'flat' design for Fab button
     * @type {Boolean}
     */
    flat: {
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
     * Apply the glossy effect over the button
     * @type {Boolean}
     */
    glossy: {
      type: Boolean,
    }
  }
}
