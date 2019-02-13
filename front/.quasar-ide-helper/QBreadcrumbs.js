
/**
 * Quasar QBreadcrumbs component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/breadcrumbs|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QBreadcrumbs',
  props: {
    /**
     * The string used to separate the breadcrumbs
     * @type {String}
     */
    separator: {
      type: String,
    },
    /**
     * The color of the active breadcrumb, which can be any color from the Quasar Color Palette
     * @type {String}
     */
    activeColor: {
      type: String,
    },
    /**
     * The gutter value allows you control over the space between the breadcrumb elements.
     * @type {String}
     */
    gutter: {
      type: String,
    },
    /**
     * The color used to color the separator, which can be any color from the Quasar Color Palette
     * @type {String}
     */
    separatorColor: {
      type: String,
    },
    /**
     * Specify how to align the breadcrumbs horizontally
     * @type {String}
     */
    align: {
      type: String,
    }
  }
}
