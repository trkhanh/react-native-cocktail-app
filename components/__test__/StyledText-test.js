
import * as React from 'react';
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText'

it(`render correctly`, () => {
    const tree = renderer.create(<MonoText>Snapshoot Test</MonoText>).toJSON();

    expect(tree).toMatchSnapshot();
})