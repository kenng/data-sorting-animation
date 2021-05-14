import { InsertionSort } from 'algorithms/InsertionSort';
import { data } from 'src/data';
import { sorted } from 'src/data/data';

jest.useFakeTimers();

test('insertSort: random data', () => {
    const sortInstance = new InsertionSort(data.random());
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('insertSort: reversed data', () => {
    const sortInstance = new InsertionSort(data.reversed());
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('insertSort: few unique data', () => {
    const sortInstance = new InsertionSort(data.fewUnique());
    sortInstance.sortAll();
    expect(sorted.sorted_few_unique).toEqual(sortInstance.getDataValue());
});

test('insertSort: nearly sorted data', () => {
    const sortInstance = new InsertionSort(data.nearlySorted());
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});
