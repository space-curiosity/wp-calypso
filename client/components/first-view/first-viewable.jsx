/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import FirstView from './';

export default React.createClass( {
	render: function() {
		const children = React.Children.map( this.props.children, function( child ) {
			if ( child.type === FirstView ) {
				return React.cloneElement( child, {
					active: this.props.firstViewActive,
					onDismiss: this.props.onFirstViewDismiss
				} );
			}

			return child;
		}, this );

		const classes = classNames( 'first-viewable', {
			'first-view-active': this.props.firstViewActive
		} );

		return (
			<div className={ classes }>
				{ children }
			</div>
		);
	}
} );
