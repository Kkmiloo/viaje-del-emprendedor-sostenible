import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
    Tooltip,
  PointElement,
  Legend,
  ChartOptions,
    LineElement,

} from 'chart.js';
import { useEffect, useRef } from 'react';
ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
    Legend,
  PointElement,
  LineElement
);

export default function GrowthChart() {
  const chartRef = useRef<ChartJS<'line'>>();
  const growthData = {
    labels: [
      'Nivel 1',
      'Nivel 2',
      'Nivel 3',
      'Nivel 4',
      'Nivel 5',
      'Nivel 6',
      'Nivel 7',
      'Nivel 8',
    ],
    datasets: [
      {
        label: 'Crecimiento Perfecto',
        data: [0, 150, 300, 450, 700, 900, 1200, 1500], // Ajusta según el crecimiento perfecto por nivel
        borderColor: 'rgba(128, 128, 128, 0.5)',
        fill: false,
        borderWidth: 2,
        pointRadius: 2,
            tension: 0.3,
        borderDash: [5, 5], // Línea punteada
      },
      {
        label: 'Crecimiento del Jugador',
        data: [0, 120, 250, 400, 600, 850, 1100, 1300], // Ajusta según las decisiones del jugador
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.3,
      },
    ],
  };

  const growthOptions: ChartOptions<'line'> = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Balance Acumulado ($COP)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Niveles',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.dataset.label}: $${tooltipItem.raw} COP`,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };
  useEffect(() => {
    // Destruye el gráfico anterior cuando el componente se desmonta o cambia
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);
  return <Line data={growthData} options={growthOptions} />;
}
