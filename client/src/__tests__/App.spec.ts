import App from '@/App';
import { $ } from '@/utils';

beforeEach(() => {
  new App({ $parent: document.body });
});

it('첫 렌더링 시 App 컴포넌트가 추가되어야 합니다.', () => {
  const $app = $('#app');
  expect($app).toHaveTextContent('hello');
});
