import { ScrollBarBaseInterface } from './types';

class ScrollBarBase {
  vertical?: ScrollBarBaseInterface['vertical'];

  horizontal?: ScrollBarBaseInterface['horizontal'];

  thickness?: ScrollBarBaseInterface['thickness'];

  speed?: ScrollBarBaseInterface['speed'];

  constructor(builder: any) {
    this.vertical = {
      align: builder._verticalAlign
    };
    this.horizontal = {
      align: builder._horizontalAlign
    };
    this.thickness = builder._thickness;
    this.speed = builder._speed;
  }
}

export { ScrollBarBase };
