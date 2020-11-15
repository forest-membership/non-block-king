import App from '@/App';
import { $ } from '@/utils';
import '@/scss/main';

const $body = $('body') as HTMLElement;
new App({ $parent: $body });
