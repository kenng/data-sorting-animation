import { MergeSort } from 'algorithms/MergeSort';
import { data } from 'src/data';
import { sorted } from 'src/data/data';

jest.useFakeTimers();

test('MergeSort: random data', () => {
    const sortInstance = new MergeSort(data.random());
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('MergeSort: reversed data', () => {
    const sortInstance = new MergeSort(data.reversed());
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('MergeSort: few unique data', () => {
    const sortInstance = new MergeSort(data.fewUnique());
    sortInstance.sortAll();
    expect(sorted.sorted_few_unique).toEqual(sortInstance.getDataValue());
});

test('MergeSort: nearly sorted data', () => {
    const sortInstance = new MergeSort(data.nearlySorted());
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});
