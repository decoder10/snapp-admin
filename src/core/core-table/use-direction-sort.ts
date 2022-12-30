import { useState } from 'react';

interface IDirectionSort<TableData> {
  tableData: TableData[];
  order: Order;
  orderBy: TKeyOf<TableData>;
  currentPage: number;
  perPage: number;
}

export const useDirectionSort = <TableData>() => {
  const [sortedData, setSortedData] = useState<TableData[]>([]);

  const sortByKey = (order: string, key: TKeyOf<TableData>) => (a: TableData, b: TableData) => {
    if (a[key] < b[key]) {
      return order === 'asc' ? -1 : 1;
    }

    if (a[key] > b[key]) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  };

  function directionSort(props: IDirectionSort<TableData>) {
    const { tableData, order, orderBy, currentPage, perPage } = props;

    const data = tableData
      .sort(sortByKey(order, orderBy))
      .slice(currentPage * perPage, currentPage * perPage + perPage); // TODO remove when get real data

    setSortedData(data);
  }

  return { directionSort, sortedData };
};
