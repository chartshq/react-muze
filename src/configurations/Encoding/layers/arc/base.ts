import { ArcEncodingInterface } from './types';

class ArcBaseEncoding {
  strokeWidth?: ArcEncodingInterface['strokeWidth'];

  strokeLinejoin: ArcEncodingInterface['strokeLinejoin'];

  angle?: ArcEncodingInterface['angle'];

  radius?: ArcEncodingInterface['radius'];

  opacity?: ArcEncodingInterface['opacity'];

  color?: ArcEncodingInterface['color'];

  shape?: ArcEncodingInterface['shape'];

  size?: ArcEncodingInterface['size'];

  constructor(builder: any) {
    this.strokeWidth = builder._strokeWidth;
    this.strokeLinejoin = builder._strokeLinejoin;
    this.angle = builder._angle;
    this.radius = builder._radius;
    this.opacity = builder._opacity;
    this.color = builder._color;
    this.shape = builder._shape;
    this.size = builder._size;
  }
}

export { ArcBaseEncoding };
