
/**
 * Quasar QTable component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/table|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QTable',
  props: {
    /**
     * Rows of data to display
     * @type {Array}
     */
    data: {
      type: Array,
    },
    /**
     * Property of each row that defines the unique key of each row; The value of property must be string or number
     * @type {String}
     */
    rowKey: {
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
     * Display data as a grid instead of the default table
     * @type {Boolean}
     */
    grid: {
      type: Boolean,
    },
    /**
     * Dense mode; Connect with $q.screen for responsive behavior
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
    },
    /**
     * The column definitions (Array of Objects)
     * @type {Array}
     */
    columns: {
      type: Array,
    },
    /**
     * Array of Strings defining column names ('name' property of each column from 'columns' prop definitions)
     * @type {Array}
     */
    visibleColumns: {
      type: Array,
    },
    /**
     * Put Table into 'loading' state; Notify the user something is happening behind the covers
     * @type {Boolean}
     */
    loading: {
      type: Boolean,
    },
    /**
     * Table title
     * @type {String}
     */
    title: {
      type: String,
    },
    /**
     * Hide table header layer
     * @type {Boolean}
     */
    hideHeader: {
      type: Boolean,
    },
    /**
     * Hide table bottom layer
     * @type {Boolean}
     */
    hideBottom: {
      type: Boolean,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
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
     * Use a separator/border between rows, columns or all cells
     * @type {String}
     */
    separator: {
      type: String,
    },
    /**
     * Wrap text within table cells
     * @type {Boolean}
     */
    wrapCells: {
      type: Boolean,
    },
    /**
     * Skip the third state (unsorted) when user toggles column sort direction
     * @type {Boolean}
     */
    binaryStateSort: {
      type: Boolean,
    },
    /**
     * Override default text to display when no data is available
     * @type {String}
     */
    noDataLabel: {
      type: String,
    },
    /**
     * Override default text to display when user filters the table and no matched results are found
     * @type {String}
     */
    noResultsLabel: {
      type: String,
    },
    /**
     * Override default text to display when table is in loading state (see 'loading' prop)
     * @type {String}
     */
    loadingLabel: {
      type: String,
    },
    /**
     * Text to display when user selected at least one row
     * @type {Function}
     */
    selectedRowsLabel: {
      type: Function,
    },
    /**
     * Text to override default rows per page label at bottom of table
     * @type {String}
     */
    rowsPerPageLabel: {
      type: String,
    },
    /**
     * Text to override default pagination label at bottom of table (unless 'pagination' scoped slot is used)
     * @type {Function}
     */
    paginationLabel: {
      type: Function,
    },
    /**
     * CSS style to apply to native HTML <table> element's wrapper (which is a DIV)
     * @type {String|Array|Object}
     */
    tableStyle: {
      type: [String,Array,Object],
    },
    /**
     * CSS classes to apply to native HTML <table> element's wrapper (which is a DIV)
     * @type {String|Array|Object}
     */
    tableClass: {
      type: [String,Array,Object],
    },
    /**
     * String/Object to filter table with; When using an Object it requires 'filter-method' to also be specified since it will be a custom filtering
     * @type {String|Object}
     */
    filter: {
      type: [String,Object],
    },
    /**
     * The actual filtering mechanism
     * @type {Function}
     */
    filterMethod: {
      type: Function,
    },
    /**
     * Pagination object
     * @type {Object}
     */
    pagination: {
      type: Object,
    },
    /**
     * Options for user to pick (Numbers); Number 0 means 'Show all rows in one page'
     * @type {Array}
     */
    rowsPerPageOptions: {
      type: Array,
    },
    /**
     * Selection type
     * @type {String}
     */
    selection: {
      type: String,
    },
    /**
     * Keeps the user selection array
     * @type {Array}
     */
    selected: {
      type: Array,
    },
    /**
     * The actual sort mechanism. Function (rows, sortBy, descending) => sorted rows
     * @type {Function}
     */
    sortMethod: {
      type: Function,
    }
  }
}
