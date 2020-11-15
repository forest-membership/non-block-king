// import { $ } from '@/utils';
import VState from '@/@types/vstate';
import VProps from '@/@types/vprops';
import VComponent from '@/@types/vcomponent';

class App implements VComponent {
  state: VState;

  constructor({ $parent }: VProps) {
    this.state = {
      $parent: $parent,
      $target: null,
    };
    this.initTargetDOM();
    this.render();
  }

  initTargetDOM(): void {
    this.state.$target = document.createElement('div');
    this.state.$target.id = 'app';
    this.state.$parent.append(this.state.$target);
  }

  render(): void {
    const { $target } = this.state;
    if ($target) $target.innerHTML = '<div>hello</div>';
  }
}

export default App;
