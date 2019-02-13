
/**
 * Quasar QPageSticky component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/page-sticky|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPageSticky',
  props: {
    /**
     * Page side/corner to stick to
     * @type {String}
     */
    position: {
      type: String,
    },
    /**
     * An array of two numbers to offset the component horizontally and vertically in pixels
     * @type {Array}
     */
    offset: {
      type: Array,
    },
    /**
     * By default the component shrinks to content's size; By using this prop you make the component fully expand horizontally or vertically, based on 'position' prop
     * @type {Boolean}
     */
    expand: {
      type: Boolean,
    }
  }
}
