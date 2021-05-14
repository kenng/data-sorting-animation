import { QuickSort } from 'algorithms/QuickSort';
import { data } from 'src/data';
import { sorted } from 'src/data/data';

jest.useFakeTimers();

test('QuickSort: random data', () => {
    const sortInstance = new QuickSort(data.random());
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('QuickSort: reversed data', () => {
    const sortInstance = new QuickSort(data.reversed());
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('QuickSort: few unique data', () => {
    const sortInstance = new QuickSort(data.fewUnique());
    sortInstance.sortAll();
    expect(sorted.sorted_few_unique).toEqual(sortInstance.getDataValue());
});

test('QuickSort: nearly sorted data', () => {
    const sortInstance = new QuickSort(data.nearlySorted());
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});
