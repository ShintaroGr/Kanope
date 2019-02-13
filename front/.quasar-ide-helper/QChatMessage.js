
/**
 * Quasar QChatMessage component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/chat-message|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QChatMessage',
  props: {
    /**
     * Render as a sent message (so from current user)
     * @type {Boolean}
     */
    sent: {
      type: Boolean,
    },
    /**
     * Renders a label header/section only
     * @type {String}
     */
    label: {
      type: String,
    },
    /**
     * Color name (from the Quasar Color Palette) for chat bubble background
     * @type {String}
     */
    bgColor: {
      type: String,
    },
    /**
     * Color name (from the Quasar Color Palette) for chat bubble text
     * @type {String}
     */
    textColor: {
      type: String,
    },
    /**
     * Author's name
     * @type {String}
     */
    name: {
      type: String,
    },
    /**
     * URL to the avatar image of the author; Suggestion: use a static resource
     * @type {String}
     */
    avatar: {
      type: String,
    },
    /**
     * Array of strings that are the message body. Strings are not sanitized (see details in docs)
     * @type {String}
     */
    text: {
      type: String,
    },
    /**
     * Creation timestamp
     * @type {String}
     */
    stamp: {
      type: String,
    },
    /**
     * 1-12 out of 12 (same as col-*)
     * @type {String}
     */
    size: {
      type: String,
    }
  }
}
