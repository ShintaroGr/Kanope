
/**
 * Quasar QPopupEdit component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/popup-edit|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPopupEdit',
  props: {
    /**
     * Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive
     * @type {*}
     */
    value: {
    },
    /**
     * Optional title (unless 'title' slot is used)
     * @type {String}
     */
    title: {
      type: String,
    },
    /**
     * Show Set and Cancel buttons
     * @type {Boolean}
     */
    buttons: {
      type: Boolean,
    },
    /**
     * Override Set button label
     * @type {String}
     */
    labelSet: {
      type: String,
    },
    /**
     * Override Cancel button label
     * @type {String}
     */
    labelCancel: {
      type: String,
    },
    /**
     * Avoid Popup closing by hitting ESC key or by clicking/tapping outside of the Popup
     * @type {Boolean}
     */
    persistent: {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Validates model then triggers 'save' and closes Popup; Returns a Boolean ('true' means valid, 'false' means abort); Syntax: validate(value)
     * @type {Function}
     */
    validate: {
      type: Function,
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
