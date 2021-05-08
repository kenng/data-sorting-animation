import { MergeSort } from 'algorithms/MergeSort';
import { data } from 'src/data';
import { sorted } from 'src/data/data';

jest.useFakeTimers();

test('MergeSort: random data', () => {
    const sortInstance = new MergeSort(data.random);
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('MergeSort: reversed data', () => {
    const sortInstance = new MergeSort(data.reversed);
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('MergeSort: few unique data', () => {
    const sortInstance = new MergeSort(data.few_unique);
    sortInstance.sortAll();
    expect(sorted.sorted_few_unique).toEqual(sortInstance.getDataValue());
});

test('MergeSort: nearly sorted data', () => {
    const sortInstance = new MergeSort(data.nearly_sorted);
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});
