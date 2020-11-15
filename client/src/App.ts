import { $ } from '@/utils';
import VState from '@/@types/vstate';
import VComponent from '@/@types/vcomponent';

class App implements VComponent {
  state: VState;

  constructor() {
    this.state = {
      $target: null,
    };
    this.initTargetDOM();
    this.render();
  }

  initTargetDOM(): void {
    this.state.$target = $('#app') as HTMLElement;
  }

  render(): void {
    const { $target } = this.state;
    if ($target) $target.innerHTML = '<div>hello</div>';
  }
}

export default App;
