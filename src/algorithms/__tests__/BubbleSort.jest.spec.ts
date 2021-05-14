import { BubbleSort } from 'algorithms/BubbleSort';
import { data } from 'src/data';
import { sorted } from 'src/data/data';

jest.useFakeTimers();

test('BubbleSort: random data', () => {
    const sortInstance = new BubbleSort(data.random());
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('BubbleSort: reversed data', () => {
    const sortInstance = new BubbleSort(data.reversed());
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});

test('BubbleSort: few unique data', () => {
    const sortInstance = new BubbleSort(data.fewUnique());
    sortInstance.sortAll();
    expect(sorted.sorted_few_unique).toEqual(sortInstance.getDataValue());
});

test('BubbleSort: nearly sorted data', () => {
    const sortInstance = new BubbleSort(data.nearlySorted());
    sortInstance.sortAll();
    expect(sorted.sorted_for_all).toEqual(sortInstance.getDataValue());
});
