import React from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
// Import charts, all with Chart suffix
import {
  LineChart,
  BarChart,
  // PieChart,
  // ScatterChart,
  // RadarChart,
  // MapChart,
  // TreeChart,
  // TreemapChart,
  // GraphChart,
  // GaugeChart,
  // FunnelChart,
  // ParallelChart,
  // SankeyChart,
  // BoxplotChart,
  // CandlestickChart,
  // EffectScatterChart,
  // LinesChart,
  // HeatmapChart,
  // PictorialBarChart,
  // ThemeRiverChart,
  // SunburstChart,
  // CustomChart,
} from 'echarts/charts';
// import components, all suffixed with Component
import {
  // GridSimpleComponent,
  GridComponent,
  // PolarComponent,
  // RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  // AxisPointerComponent,
  // BrushComponent,
  TitleComponent,
  // TimelineComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  LegendComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  // DatasetComponent,
} from 'echarts/components';
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
  CanvasRenderer,
  // SVGRenderer,
} from 'echarts/renderers';

// Register the required components
echarts.use(
  [
    // charts
    LineChart,
    BarChart,
    // components
    GridComponent,
    ToolboxComponent,
    TooltipComponent,
    TitleComponent,
    LegendComponent,
    // renderers
    CanvasRenderer,
  ],
);

const Echarts = (props: any) => {
  const { getOption } = props;
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOption()}
      notMerge // 可选，是否不跟之前设置的 option 进行合并，默认为 false
      lazyUpdate // 可选，在设置完 option 后是否不立即更新图表，默认为 false
      style={{ height: '320px' }}
      theme="dark"
      // onChartReady={this.onChartReady}
      // onEvents={EventsDict}
      opts={{ width: 'auto', height: 300 }}
      // opts 附加参数：devicePixelRatio（设备像素比），renderer（渲染器 'canvas'或'svg'），width(实例宽度)，height（实例高度）
      // opts={{ renderer: 'svg' }}
    />
  );
};

export default Echarts;
