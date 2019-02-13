
/**
 * Quasar QPullToRefresh component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/pull-to-refresh|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPullToRefresh',
  props: {
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Icon to display when refreshing the content
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * Don't listen for mouse events
     * @type {Boolean}
     */
    noMouse: {
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
