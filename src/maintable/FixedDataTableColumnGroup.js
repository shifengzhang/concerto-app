/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FixedDataTableColumnGroup
 * @typechecks
 */

import React from 'react';

import PropTypes from 'prop-types';

/**
 * Component that defines the attributes of a table column group.
 */
class FixedDataTableColumnGroup extends React.Component {
  static __TableColumnGroup__ = true;

  static propTypes = {
    /**
     * The horizontal alignment of the table cell content.
     */
    align: PropTypes.oneOf(['left', 'center', 'right']),

    /**
     * Controls if the column group is fixed when scrolling in the X axis.
     */
    fixed: PropTypes.bool,

    /**
     * This is the header cell for this column group.
     * This can either be a string or a React element. Passing in a string
     * will render a default footer cell with that string. By default, the React
     * element passed in can expect to receive the following props:
     *
     * ```
     * props: {
     *   height: number // (supplied from the groupHeaderHeight)
     *   width: number // (supplied from the Column)
     * }
     * ```
     *
     * Because you are passing in your own React element, you can feel free to
     * pass in whatever props you may want or need.
     *
     * You can also pass in a function that returns a react elemnt, with the
     * props object above passed in as the first parameter.
     */
    header: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]),

  };

  static defaultProps = {
    fixed: false,
  };

  render() {
    return null;
  }
}

export default FixedDataTableColumnGroup;
