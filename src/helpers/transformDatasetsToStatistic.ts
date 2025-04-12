import { DataSets, StatisticArr } from "@/types";

export const transformDatasetsToStatistic = (datasets: DataSets): StatisticArr => {
  return datasets.map(({ label, data, borderColor }) => ({
    name: label,
    scores: data.slice(1),
    color: borderColor
  }))
}