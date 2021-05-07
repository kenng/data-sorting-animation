import { SortBase } from 'algorithms/SortBase';
import rawData from './data';

export interface IData {
    index: number;
    value: number;
    sorted: boolean;
}

export interface ISortCallbackFn {
    (instance: SortBase, isDone: boolean): void;
}

export enum EDataType {
    RANDOM = 'random',
    NEARLY_SORTED = 'nearly_sorted',
    REVERSED = 'reversed',
    FEW_UNIQUE = 'few_unique',
}

export enum ESortType {
    BUBBLE = 'bubble',
    INSERTION = 'insertion',
    SELECTION = 'selection',
    QUICK = 'quick',
    MERGE = 'merge',
    HEAP = 'heap',
}

function prepData(value: number, index: number) {
    return { index, value, sorted: false };
}

export function deepClone(data: IData[]): IData[] {
    return data.map((item) => JSON.parse(JSON.stringify(item)));
}

export const data = {
    random: rawData.random.map(prepData),
    reversed: rawData.reversed.map(prepData),
    few_unique: rawData.few_unique.map(prepData),
    nearly_sorted: rawData.nearly_sorted.map(prepData),
};
