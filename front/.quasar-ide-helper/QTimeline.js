
/**
 * Quasar QTimeline component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/timeline|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTimeline',
  props: {
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Side to place the timeline entries in dense and comfortable layout; For loose layout it gets overriden by QTimelineEntry side prop
     * @type {String}
     */
    side: {
      type: String,
    },
    /**
     * Layout of the timeline. Dense keeps content and labels on one side. Comfortable keeps content on one side and labels on the opposite side. Loose puts content on both sides.
     * @type {String}
     */
    layout: {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    }
  }
}
