
/**
 * Quasar QIcon component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/icon|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QIcon',
  props: {
    /**
     * Name of the icon, following Quasar convention
     * @type {String}
     */
    name: {
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
     * Size in CSS units, including unit name
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * Apply a standard margin on the left side. Useful if icon is on the right side of something.
     * @type {Boolean}
     */
    left: {
      type: Boolean,
    },
    /**
     * Apply a standard margin on the right side. Useful if icon is on the left side of something.
     * @type {Boolean}
     */
    right: {
      type: Boolean,
    }
  }
}
