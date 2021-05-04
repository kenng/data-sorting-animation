import { InsertionSort } from 'algorithms/InsertionSort';
import { data, sorted } from 'data/data';

jest.useFakeTimers();

test('insertSort: random data', () => {
    const sortInstance = new InsertionSort(data.random);
    sortInstance.sortAll();
    expect(sorted.random).toEqual(sortInstance.getDataValue());
});
