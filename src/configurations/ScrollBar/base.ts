import { ScrollBarBaseInterface } from './types';

class ScrollBarBase {
  vertical?: ScrollBarBaseInterface['vertical'];

  horizontal?: ScrollBarBaseInterface['horizontal'];

  thickness?: ScrollBarBaseInterface['thickness'];

  speed?: ScrollBarBaseInterface['speed'];

  constructor(builder: any) {
    this.vertical = {
      align: builder.isClass ? builder._verticalAlign : builder.verticalAlign,
    };
    this.horizontal = {
      align: builder.isClass ? builder._horizontalAlign : builder.horizontalAlign,
    };
    this.thickness = builder.isClass ? builder._thickness : builder.thickness;
    this.speed = builder.isClass ? builder._speed : builder.speed;
  }
}

export { ScrollBarBase };
