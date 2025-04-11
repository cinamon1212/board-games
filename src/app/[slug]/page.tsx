'use client'

import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { usePathname } from 'next/navigation'
import { getGameByPath, transformGamesForChart } from '@/helpers'

// Регистрация компонентов Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// Типы данных для графика
const data = {
  labels: ['Тест 1', 'Тест 2', 'Тест 3', 'Тест 4', 'Тест 5', 'Тест 6', 'Тест 7'], // ось X
  datasets: [
    {
      label: 'Alice',
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490], // Результаты для Alice
      fill: false,
      borderColor: '#8884d8',
      tension: 0.1,
    },
    {
      label: 'Bob',
      data: [2400, 1398, 9800, 3908, 4800, 3800, 4300], // Результаты для Bob
      fill: false,
      borderColor: '#82ca9d',
      tension: 0.1,
    },
    {
      label: 'Charlie',
      data: [2400, 2210, 2290, 2000, 2181, 2500, 2100], // Результаты для Charlie
      fill: false,
      borderColor: '#ff7300',
      tension: 0.1,
    },
  ],
}

// Опции для графика с правильной типизацией
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Тесты',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Результаты',
      },
    },
  },
}

const CustomLineChart = () => {
  const path = usePathname()

  const game = getGameByPath(path)

  const gamesForChart = transformGamesForChart(game.games)
  console.log(gamesForChart);
  return (
    <div style={{ width: '80%', height: '400px', margin: '0 auto' }}>
      <h2>Линейный график: Результаты тестов</h2>
      <Line data={gamesForChart} />
    </div>
  )
}

export default CustomLineChart
