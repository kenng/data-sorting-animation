import { SelectionSort } from 'algorithms/SelectionSort';
import { data } from 'src/data';
import { sorted } from 'src/data/data';

jest.useFakeTimers();

test('SelectionSort: random data', () => {
    const sortInstance = new SelectionSort(data.random);
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('SelectionSort: reversed data', () => {
    const sortInstance = new SelectionSort(data.reversed);
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('SelectionSort: few unique data', () => {
    const sortInstance = new SelectionSort(data.few_unique);
    sortInstance.sortAll();
    expect(sorted.sorted_few_unique).toEqual(sortInstance.getDataValue());
});

test('SelectionSort: nearly sorted data', () => {
    const sortInstance = new SelectionSort(data.nearly_sorted);
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});
