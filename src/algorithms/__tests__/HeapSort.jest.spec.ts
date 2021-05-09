import { HeapSort } from 'algorithms/HeapSort';
import { data } from 'src/data';
import { sorted } from 'src/data/data';

jest.useFakeTimers();

test('HeapSort: random data', () => {
    const sortInstance = new HeapSort(data.random);
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('HeapSort: reversed data', () => {
    const sortInstance = new HeapSort(data.reversed);
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('HeapSort: few unique data', () => {
    const sortInstance = new HeapSort(data.few_unique);
    sortInstance.sortAll();
    expect(sorted.sorted_few_unique).toEqual(sortInstance.getDataValue());
});

test('HeapSort: nearly sorted data', () => {
    const sortInstance = new HeapSort(data.nearly_sorted);
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});
