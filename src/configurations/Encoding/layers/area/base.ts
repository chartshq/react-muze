// import { AreaEncodingConfigInterface } from './types';

// class AreaBaseEncoding {
//   color?: AreaEncodingConfigInterface['color'];
//   x?: AreaEncodingConfigInterface['x'];
//   y?: AreaEncodingConfigInterface['y'];
//   y0?: AreaEncodingConfigInterface['y0'];
//   strokeOpacity?: AreaEncodingConfigInterface['strokeOpacity'];
//   fillOpacity?: AreaEncodingConfigInterface['fillOpacity'];

//   constructor(builder: any) {
//     const fieldsProp = ['x', 'y', 'y0'];

//     Object.keys(builder).forEach(key => {
//       if (builder[key]) {
//         const property = key.slice(1);

//         this[property as keyof AreaBaseEncoding] = 
//         fieldsProp.includes(property) ?
//           { field: builder[key] } : builder[key];
//       }
//     })
//   }
// }

// export { AreaBaseEncoding };
