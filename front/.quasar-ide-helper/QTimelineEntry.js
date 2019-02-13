
/**
 * Quasar QTimelineEntry component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/timeline-entry|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTimelineEntry',
  props: {
    /**
     * Defines a heading timeline item
     * @type {Boolean}
     */
    heading: {
      type: Boolean,
    },
    /**
     * Tag to use, if of type 'heading' only
     * @type {String}
     */
    tag: {
      type: String,
    },
    /**
     * Side to place the timeline entry; Works only if QTimeline layout is loose.
     * @type {String}
     */
    side: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    icon: {
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
     * Title of timeline entry
     * @type {String}
     */
    title: {
      type: String,
    },
    /**
     * Subtitle of timeline entry
     * @type {String}
     */
    subtitle: {
      type: String,
    }
  }
}
