
/**
 * Quasar QCarousel component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/carousel|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QCarousel',
  props: {
    /**
     * Model of the component defining current panel's name; If used as Number, it does not defines panel index though but slide name's which may be an Integer; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*}
     */
    value: {
    },
    /**
     * Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)
     * @type {Boolean}
     */
    animated: {
      type: Boolean,
    },
    /**
     * Makes component appear as infinite (when reaching last panel, next one will become the first one)
     * @type {Boolean}
     */
    infinite: {
      type: Boolean,
    },
    /**
     * Enable swipe events (may interfere with content's touch/mouse events)
     * @type {Boolean}
     */
    swipeable: {
      type: Boolean,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    transitionPrev: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     * @type {String}
     */
    transitionNext: {
      type: String,
    },
    /**
     * Height of Carousel in CSS units, including unit name
     * @type {String}
     */
    height: {
      type: String,
    },
    /**
     * Applies a default padding to each slide, according to the usage of 'arrows' and 'navigation' props
     * @type {Boolean}
     */
    padding: {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    controlColor: {
      type: String,
    },
    /**
     * Jump to next slide at fixed time intervals (in milliseconds); 'false' disables autoplay, 'true' enables it for 5000ms intervals
     * @type {Number|Boolean}
     */
    autoplay: {
      type: [Number,Boolean],
    },
    /**
     * Show navigation arrow buttons
     * @type {Boolean}
     */
    arrows: {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    prevIcon: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    nextIcon: {
      type: String,
    },
    /**
     * Show navigation dots
     * @type {Boolean}
     */
    navigation: {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    navigationIcon: {
      type: String,
    },
    /**
     * Show thumbnails
     * @type {Boolean}
     */
    thumbnails: {
      type: Boolean,
    }
  }
}
