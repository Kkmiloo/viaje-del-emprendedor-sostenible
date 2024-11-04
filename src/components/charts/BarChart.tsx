import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChartExample = () => {
  const chartRef = useRef<ChartJS<'bar'>>();

  const data = {
    labels: [
      'Herramientas Avanzadas',
      'Contratar Ayudante',
      'Instalaciones Solo',
    ],
    datasets: [
      {
        label: 'Impacto Financiero (COP)',
        data: [200000, 250000, 150000],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options : ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      title: { display: true, text: 'Impacto de Decisiones en Ingresos' },
    },
  };

  useEffect(() => {
    // Destruye el gráfico anterior cuando el componente se desmonta o cambia
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default BarChartExample;
