import { TextEncodingInterface } from './types';

class TextBaseEncoding {
  color?: TextEncodingInterface['color'];

  size?: TextEncodingInterface['size'];

  radius?: TextEncodingInterface['radius'];

  angle?: TextEncodingInterface['angle'];

  text?: TextEncodingInterface['text'];

  rotation: TextEncodingInterface['rotation'];

  alignmentBaseline?: TextEncodingInterface['alignmentBaseline'];

  constructor(builder: any) {
    this.color = builder._color;
    this.size = builder._size;
    this.radius = builder._radius;
    this.angle = builder._angle;
    this.text = builder._text;
    this.rotation = builder._rotation;
    this.alignmentBaseline = builder._alignmentBaseline;
  }
}

export { TextBaseEncoding };
