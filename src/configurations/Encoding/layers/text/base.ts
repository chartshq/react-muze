import { TextEncodingInterface } from './types';

class TextBaseEncoding {
  x?: TextEncodingInterface['x'];

  y?: TextEncodingInterface['y'];

  color?: TextEncodingInterface['color'];

  size?: TextEncodingInterface['size'];

  radius?: TextEncodingInterface['radius'];

  angle?: TextEncodingInterface['angle'];

  text?: TextEncodingInterface['text'];

  rotation: TextEncodingInterface['rotation'];

  alignmentBaseline?: TextEncodingInterface['alignmentBaseline'];

  // constructor(builder: any) {
  //   this.x = builder._x;
  //   this.y = builder._y;
  //   this.color = builder._color;
  //   this.size = builder._size;
  //   this.radius = builder._radius;
  //   this.angle = builder._angle;
  //   this.text = builder._text;
  //   this.rotation = builder._rotation;
  //   this.alignmentBaseline = builder._alignmentBaseline;
  // }
  constructor(builder: any) {
    const fieldsProp: string[] = [];

    Object.keys(builder).forEach(key => {
      if (builder[key]) {
        const property = key.slice(1);

        this[property as keyof TextBaseEncoding] = 
        fieldsProp.includes(property) ?
          { field: builder[key] } : builder[key];
      }
    })
  }
}

export { TextBaseEncoding };
