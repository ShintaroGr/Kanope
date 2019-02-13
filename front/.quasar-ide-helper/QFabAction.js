
/**
 * Quasar QFabAction component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/fab-action|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QFabAction',
  props: {
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    icon: {
      type: String,
      required: true
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
