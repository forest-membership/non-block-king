import hello from '@/components/demo';
import '@/scss/index';

hello();
const $app = document.querySelector('#app');
$app?.append((document.createElement('div').innerHTML = 'hello!'));
