import hello from '@/components/demo';
import '@/styles/index';

hello();
const $app = document.querySelector('#app');
$app?.append((document.createElement('div').innerHTML = 'hello!'));
