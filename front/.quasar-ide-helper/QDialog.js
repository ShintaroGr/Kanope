
/**
 * Quasar QDialog component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/dialog|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QDialog',
  props: {
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {Boolean}
     */
    value: {
      type: Boolean,
    },
    /**
     * User cannot dismiss Dialog if clicking outside of it or hitting ESC key
     * @type {Boolean}
     */
    persistent: {
      type: Boolean,
    },
    /**
     * User cannot dismiss Dialog by hitting ESC key; No need to set it if 'persistent' prop is also set
     * @type {Boolean}
     */
    noEscKey: {
      type: Boolean,
    },
    /**
     * Put Dialog into seamless mode; Does not uses a backdrop so user is able to interact with the rest of the page too
     * @type {Boolean}
     */
    seamless: {
      type: Boolean,
    },
    /**
     * Put Dialog into maximized mode
     * @type {Boolean}
     */
    maximized: {
      type: Boolean,
    },
    /**
     * Dialog will try to render with same width as the window
     * @type {Boolean}
     */
    fullWidth: {
      type: Boolean,
    },
    /**
     * Dialog will try to render with same height as the window
     * @type {Boolean}
     */
    fullHeight: {
      type: Boolean,
    },
    /**
     * 
     * @type {String}
     */
    position: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionShow: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionHide: {
      type: String,
    },
    /**
     * (Accessibility) When Dialog gets hidden, do not refocus on the DOM element that previously had focus
     * @type {Boolean}
     */
    noRefocus: {
      type: Boolean,
    }
  }
}
