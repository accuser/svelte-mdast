import { mount, type ComponentProps } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import Html from './Html.svelte';

describe('Html.svelte', () => {
	beforeEach(() => {
		document.body = document.createElement('body');
	});

	const it = test.extend<{ props: ComponentProps<typeof Html> }>({
		props: {
			type: 'html',
			value: '<pre>Hello, World!</pre>'
		}
	});

	it('renders html', ({ props }) => {
		mount(Html, { props, target: document.body });

		expect(document.body.querySelector('pre')).toBeInTheDocument();
	});
});
