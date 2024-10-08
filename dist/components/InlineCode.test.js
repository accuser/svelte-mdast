import { mount } from 'svelte';
import { beforeEach, describe, expect, test } from 'vitest';
import InlineCode from './InlineCode.svelte';
describe('InlineCode.svelte', () => {
    beforeEach(() => {
        document.body = document.createElement('body');
    });
    const it = test.extend({
        props: {
            type: 'inlineCode',
            value: 'console.log("Hello, World!");'
        }
    });
    it('renders <code>', ({ props }) => {
        mount(InlineCode, { props, target: document.body });
        expect(document.body.querySelector('code')).toBeInTheDocument();
    });
    it('renders <code> with content', ({ props }) => {
        mount(InlineCode, { props, target: document.body });
        expect(document.body.querySelector('code')).toHaveTextContent('console.log("Hello, World!");');
    });
});
