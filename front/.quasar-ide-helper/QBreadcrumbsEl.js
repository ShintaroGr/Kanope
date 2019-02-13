
/**
 * Quasar QBreadcrumbsEl component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/breadcrumbs-el|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QBreadcrumbsEl',
  props: {
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     * @type {String|Object}
     */
    to: {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'exact' property
     * @type {Boolean}
     */
    exact: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'append' property
     * @type {Boolean}
     */
    append: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     * @type {Boolean}
     */
    replace: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    activeClass: {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     * @type {String}
     */
    exactActiveClass: {
      type: String,
    },
    /**
     * The label text for the breadcrumb
     * @type {String}
     */
    label: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed
     * @type {String}
     */
    icon: {
      type: String,
    }
  }
}
