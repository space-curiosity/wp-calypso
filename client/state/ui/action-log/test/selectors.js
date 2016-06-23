/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import {
	getActionLog,
} from '../../selectors';
// ^ TODO(mcsf): either move the test, or the selector, so we don't import from
// two levels down

import {
	GUIDED_TOUR_UPDATE,
	SET_ROUTE,
} from 'state/action-types';

describe( 'selectors', () => {
	describe( 'actionLog', () => {
		it( 'should initially return one empty list', () => {
			const log = getActionLog( { ui: {} } );

			expect( log ).to.eql( [] );
		} );

		it( 'should retrieve all actions from the log', () => {
			const actions = [
				{
					type: GUIDED_TOUR_UPDATE,
					shouldShow: false,
				},
				{
					type: SET_ROUTE,
					path: '/menus/77203074',
				}
			];
			const log = getActionLog( {
				ui: {
					actionLog: actions,
				},
			} );

			expect( log ).to.eql( actions );
		} );
	} );
} );
