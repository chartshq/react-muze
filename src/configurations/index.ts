import { Axes } from './Axes';
import { Legend, LEGEND_POSITION } from './Legend';
import { Color, Size, Shape } from './RetinalEncoding';
import { Headers, html, POSITION, ALIGNMENT } from './Headers';
import { GridLines } from './GridLines';
import { GridBands } from './GridBands';
import { ScrollBar, SCROLL_VERTICAL, SCROLL_HORIZONTAL } from './ScrollBar';
import { Encoding } from './Encoding';
import { SideEffects, SpawnableSideEffect, SurrogateSideEffect, GenericSideEffect } from './SideEffects';
import { Behaviours, GenericBehaviour, VolatileBehaviour } from './Behaviours';
import { Tooltip, TOOLTIP_TYPE, TOOLTIP_MODE } from './Tooltip';
import { Border } from './Border';
import muze from '@chartshq/muze';

const { share } = muze.Operators;

export {
  Axes,
  Legend,
  Color,
  Size,
  Shape,
  Headers,
  GridLines,
  GridBands,
  ScrollBar,
  html,
  Encoding,
  Tooltip,
  SideEffects,
  SpawnableSideEffect,
  SurrogateSideEffect,
  GenericSideEffect,
  Behaviours,
  GenericBehaviour, VolatileBehaviour,
  Border,
  share
};

export {
  LEGEND_POSITION,
  POSITION,
  ALIGNMENT,
  SCROLL_VERTICAL,
  SCROLL_HORIZONTAL,
  TOOLTIP_TYPE,
  TOOLTIP_MODE
}