import muze from '@chartshq/muze';
import Muze from './Muze';
import Canvas from './Canvas';
import Layer from './Layer';
import { DataModelConstants } from '../constants';

const { DataModel } = muze;
Object.assign(DataModel, DataModelConstants);

export default Muze;
export {Canvas, Layer, DataModel };