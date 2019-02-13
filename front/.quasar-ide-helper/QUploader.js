
/**
 * Quasar QUploader component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/uploader|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QUploader',
  props: {
    /**
     * Label for the uploader
     * @type {String}
     */
    label: {
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
     * Overrides text color (if needed); color name from the Quasar Color Palette
     * @type {String}
     */
    textColor: {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Removes border-radius so borders are squared
     * @type {Boolean}
     */
    square: {
      type: Boolean,
    },
    /**
     * Applies a 'flat' design (no default shadow)
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
    },
    /**
     * Applies a default border to the component
     * @type {Boolean}
     */
    bordered: {
      type: Boolean,
    },
    /**
     * Allow multiple file uploads
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
    },
    /**
     * Comma separated list of unique file type specifiers. Maps to 'accept' attribute of native input type=file element
     * @type {String}
     */
    accept: {
      type: String,
    },
    /**
     * Maximum size of individual file in bytes
     * @type {Number}
     */
    maxFileSize: {
      type: Number,
    },
    /**
     * Maximum size of all files combined in bytes
     * @type {Number}
     */
    maxTotalSize: {
      type: Number,
    },
    /**
     * Custom filter for added files; Only files that pass this filter will be added to the queue and uploaded
     * @type {Function}
     */
    filter: {
      type: Function,
    },
    /**
     * Don't display thumbnails for image files
     * @type {Boolean}
     */
    noThumbnails: {
      type: Boolean,
    },
    /**
     * Upload files immediately when added
     * @type {Boolean}
     */
    autoUpload: {
      type: Boolean,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    readonly: {
      type: Boolean,
    },
    /**
     * URL or path to the server which handles the upload. Takes String or factory function, which returns String. Function is called right before upload
     * @type {String|Function}
     */
    url: {
      type: [String,Function],
      required: true
    },
    /**
     * HTTP method to use for upload; Takes String or factory function which returns a String; Function is called right before upload
     * @type {String|Function}
     */
    method: {
      type: [String,Function],
    },
    /**
     * Array or a factory function which returns an array; Array consists of objects with header definitions; Function is called right before upload
     * @type {Array|Function}
     */
    headers: {
      type: [Array,Function],
    },
    /**
     * Upload files in batch (in one XHR request); Takes boolean or factory function for Boolean; Function is called right before upload
     * @type {Boolean|Function}
     */
    batch: {
      type: [Boolean,Function],
    }
  }
}
