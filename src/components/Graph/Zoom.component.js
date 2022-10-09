import Chart from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

export const Zoom = ({ chartRef, index }) => {
  return (
    <>
      <button onClick={() => chartRef[index].current.zoom(1.1)}>
        확대지롱
      </button>
      <button onClick={() => chartRef[index].current.zoom(0.9)}>
        축소지롱
      </button>
      <button onClick={() => chartRef[index].current.resetZoom()}>
        초기화지롱
      </button>
    </>
  );
};
