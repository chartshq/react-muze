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
    this.color = builder.isClass ? builder._color : builder.color;
    this.size = builder.isClass ? builder._size : builder.size;
    this.radius = builder.isClass ? builder._radius : builder.radius;
    this.angle = builder.isClass ? builder._angle : builder.angle;
    this.text = builder.isClass ? builder._text : builder.text;
    this.rotation = builder.isClass ? builder._rotation : builder.rotation;
    this.alignmentBaseline = builder.isClass ? builder._alignmentBaseline : builder.alignmentBaseline;
  }
}

export { TextBaseEncoding };
