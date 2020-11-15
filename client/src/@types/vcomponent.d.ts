export default interface VComponent {
  initTargetDOM(): void;
  initEvents?(): void;
  subscribeStore?(): void;
  setState?(): void;
  render(): void;
  unmount?(): void;
}
