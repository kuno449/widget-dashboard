import { Card } from "../../model/card";

export const COLORS = [
  '#ea4335', '#4285f4', '#fbbc04', '#34a853', '#fa7b17',
  '#f538a0', '#a142f4', '#24c1e0', '#9aa0a6', '#5195ea',
  '#e25142', '#f5c518', '#41af6a', '#f6aea9', '#a50e0e',
  '#aecbfa', '#174ea6', '#fde293', '#a8dab5', '#0d652d',
  '#fdc69c', '#fba9d6', '#c92786', '#d7aefb', '#8430ce',
  '#a1e4f2', '#007b83', '#e8eaed', '#b9d4f6', '#f3b9b3',
  '#fbe7a2', '#b3dfc3'
];

export const MockDashboardCard: Card[] = [
  { title: 'Card 1', cols: 2, rows: 2, color: getColor()},
  { title: 'Card 2', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 3', cols: 2, rows: 1, color: getColor() },
  { title: 'Card 4', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 5', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 6', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 7', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 8', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 9', cols: 2, rows: 1, color: getColor() },
  { title: 'Card 10', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 11', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 12', cols: 2, rows: 1, color: getColor() },
  { title: 'Card 13', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 14', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 15', cols: 2, rows: 2, color: getColor() },
  { title: 'Card 16', cols: 2, rows: 1, color: getColor() },
  { title: 'Card 17', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 18', cols: 2, rows: 1, color: getColor() },
  { title: 'Card 19', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 20', cols: 1, rows: 1, color: getColor() },
  { title: 'Card 21', cols: 1, rows: 1, color: getColor()}
]

function getColor() {
  return COLORS[Math.floor(Math.random() * 32)];
}
