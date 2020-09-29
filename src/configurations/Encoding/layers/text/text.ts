import { TextBaseEncoding } from './base';
import { TextEncodingInterface } from './types';

class TextLayerEncoding {
  isClass: boolean;
  
  _color?: TextEncodingInterface['color'];
  
  _size?: TextEncodingInterface['size'];

  _radius?: TextEncodingInterface['radius'];

  _angle?: TextEncodingInterface['angle'];

  _text?: TextEncodingInterface['text'];

  _rotation: TextEncodingInterface['rotation'];

  _alignmentBaseline: TextEncodingInterface['alignmentBaseline'];

  constructor({
    color,
    size,
    radius,
    angle,
    text,
    rotation,
    alignmentBaseline
  }: TextEncodingInterface) {
    this.isClass = true;
    this._color = color;
    this._size = size;
    this._radius = radius;
    this._angle = angle;
    this._text = text;
    this._rotation = rotation;
    this._alignmentBaseline = alignmentBaseline;
  }

  static config(): TextLayerEncoding {
    return new TextLayerEncoding({});
  }

  color(color: TextEncodingInterface['color']): TextLayerEncoding {
    this._color = color;
    return this;
  }

  size(size: TextEncodingInterface['size']): TextLayerEncoding {
    this._size = size;
    return this;
  }

  radius(radius: TextEncodingInterface['radius']): TextLayerEncoding {
    this._radius = radius;
    return this;
  }

  angle(angle: TextEncodingInterface['angle']): TextLayerEncoding {
    this._angle = angle;
    return this;
  }

  text(text: TextEncodingInterface['text']): TextLayerEncoding {
    this._text = text;
    return this;
  }
  
  rotation(rotation: TextEncodingInterface['rotation']): TextLayerEncoding {
    this._rotation = rotation;
    return this;
  }

  alignmentBaseline(alignmentBaseline: TextEncodingInterface['alignmentBaseline']): TextLayerEncoding {
    this._alignmentBaseline = alignmentBaseline;
    return this;
  }

  create(value?: TextEncodingInterface): any {
    const result: any = value ? new TextBaseEncoding(value) : new TextBaseEncoding(this);
    return Object.keys(result).reduce((acc: any, q) => {
      if (result[q] !== undefined) {
        acc[q] = result[q];
      }
      return acc;
    }, {});
  }
}

export { TextLayerEncoding };
