"use strict";

import {cleanup, render} from "@testing-library/svelte";
import Link from '../src/General/Atomic/Link.svelte';

test('Render', () => {
    const {getByText} = render(Link, {href: "home", title: "Link to Home"});

    expect(getByText('Link to Home')).toBeInTheDocument();
    expect(getByText('Link to Home')).toHaveTextContent('Link to Home');
})
