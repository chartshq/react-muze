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
    this.strokeWidth = builder.isClass ? builder._strokeWidth : builder.strokeWidth;
    this.strokeLinejoin = builder.isClass ? builder._strokeLinejoin : builder.strokeLinejoin;
    this.angle = builder.isClass ? builder._angle : builder.angle;
    this.radius = builder.isClass ? builder._radius : builder.radius;
    this.opacity = builder.isClass ? builder._opacity : builder.opacity;
    this.color = builder.isClass ? builder._color : builder.color;
    this.shape = builder.isClass ? builder._shape : builder.shape;
    this.size = builder.isClass ? builder._size : builder.size;
  }
}

export { ArcBaseEncoding };
