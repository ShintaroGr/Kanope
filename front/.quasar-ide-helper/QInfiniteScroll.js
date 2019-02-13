
/**
 * Quasar QInfiniteScroll component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/infinite-scroll|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QInfiniteScroll',
  props: {
    /**
     * Offset (pixels) to bottom of Infinite Scroll container from which the component should start loading more content in advance
     * @type {Number}
     */
    offset: {
      type: Number,
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
