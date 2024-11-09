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
import { useGameStore } from '../../store';
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
  const { gameBalance, idealGameBalance, level } = useGameStore();
  
  const labels = Array.from({ length: level }, (_, index) => `Nivel ${index + 1}`);

  const growthData = {
    labels: ['',...labels],
    datasets: [
      {
        label: 'Competencia',
        data: idealGameBalance, // Ajusta según el crecimiento perfecto por nivel
        borderColor: 'rgba(128, 128, 128, 0.5)',
        fill: false,
        borderWidth: 2,
        pointRadius: 2,
            tension: 0.3,
        borderDash: [5, 5], // Línea punteada
      },
      {
        label: 'Tu Empresa',
        data: gameBalance, // Ajusta según las decisiones del jugador
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.3,
      },
    ],
  };

  const growthOptions: ChartOptions<'line'> = {
    scales: {
      y: {
        //beginAtZero: true,
        // title: {
        //   display: true,
        //   text: 'Balance Acumulado',
        // },
        // Establece el mínimo sugerido
        //suggestedMin: 600000 , // Valor mínimo dinámico
        suggestedMax:
          Math.max(...growthData.datasets.map(data=> data.data[0])) ||
          900000, // Valor máximo dinámico
      },
      x: {
        // title: {
        //   display: true,
        //   text: 'Niveles',
        // },
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
