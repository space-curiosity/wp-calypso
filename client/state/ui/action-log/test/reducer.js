/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import { useFakeTimers } from 'test/helpers/use-sinon';
import {
	SET_ROUTE,
} from 'state/action-types';
import reducer from '../reducer';

describe( 'reducer', () => {
	useFakeTimers( 1337 );

	it( 'should default to an object of two empty lists', () => {
		const state = reducer( undefined, {} );

		expect( state ).to.eql( [] );
	} );

	it( 'should add actions to the log', () => {
		const action = {
			type: SET_ROUTE,
			path: '/menus/77203074',
		};
		const state = reducer( undefined, action );

		expect( state ).to.eql( [ { ...action, timestamp: 1337 } ] );
	} );
} );
