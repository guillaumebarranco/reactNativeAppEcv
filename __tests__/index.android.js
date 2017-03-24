import 'react-native';
import React from 'react';
import Index from '../index.android.js';

import sum from 'jest';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

xit('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});

it('1+2 shoud return 3', () => {
	expect(1+2).toBe(3);
});


function fetchData(callback) {

	setTimeout(() => {
		callback();
	}, 500);
}

it('ok', () => {

	fetchData(() => {

	});
});
