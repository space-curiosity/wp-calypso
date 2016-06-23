/** @ssr-ready **/

/**
 * External dependencies
 */
import React from 'react';
import i18n from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Button from 'components/button';

const ThemePickButton = React.createClass( {
	displayName: 'ThemePickButton',

	propTypes: {
		className: React.PropTypes.string,
		price: React.PropTypes.string,
		themeId: React.PropTypes.string,
		currentTheme: React.PropTypes.object,
		onPickTheme: React.PropTypes.func.isRequired,
		onCustomize: React.PropTypes.func.isRequired,
	},

	isThemeActive() {
		const { themeId, currentTheme } = this.props;
		return currentTheme && currentTheme.id === themeId;
	},

	render() {
		const isThemeActive = this.isThemeActive();
		const buttonText = ( isThemeActive ? i18n.translate( 'Customize' ) : i18n.translate( 'Pick this design' ) );
		const priceElement = <span>{ buttonText }<span className="theme-pick-button__cost">{ this.props.price }</span></span>;
		const buttonLabel = ( isThemeActive ? buttonText : priceElement );
		const onButtonClick = ( isThemeActive ? this.props.onCustomize : this.props.onPickTheme );
		const classNames = 'theme-pick-button ' + this.props.className;
		return (
			<Button className={ classNames } onClick={ onButtonClick }>
				{ buttonLabel }
			</Button>
		);
	}
} );

export default ThemePickButton;
