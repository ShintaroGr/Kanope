
/**
 * Quasar QScrollArea component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/scroll-area|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QScrollArea',
  props: {
    /**
     * Object with CSS properties and values for styling the thumb of custom scrollbar
     * @type {Object}
     */
    thumbStyle: {
      type: Object,
    },
    /**
     * Object with CSS properties and values for styling the container of QScrollArea
     * @type {Object}
     */
    contentStyle: {
      type: Object,
    },
    /**
     * Object with CSS properties and values for styling the container of QScrollArea when scroll area becomes active (is mouse hovered)
     * @type {Object}
     */
    contentActiveStyle: {
      type: Object,
    },
    /**
     * Number (in milliseconds) defining a delay before custom scrollbars become visible after mouse is hovering the container
     * @type {Number|String}
     */
    delay: {
      type: [Number,String],
    }
  }
}
