
/**
 * Quasar QPageScroller component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/page-scroller|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPageScroller',
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
    },
    /**
     * Scroll offset (in pixels) from which point the component is shown on page
     * @type {Number}
     */
    scrollOffset: {
      type: Number,
    },
    /**
     * Duration (in milliseconds) of the scrolling until it reaches its target
     * @type {Number}
     */
    duration: {
      type: Number,
    }
  }
}
