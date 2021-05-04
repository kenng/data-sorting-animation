import { SortBase } from 'algorithms/SortBase';
import random from './randomData';

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
    INSERTION = 'insert',
}

function prepData(value: number, index: number) {
    return { index, value, sorted: false };
}

export function deepClone(data: IData[]): IData[] {
    return data.map((item) => JSON.parse(JSON.stringify(item)));
}

export const data = {
    random: random.data.map(prepData),
};

export const sorted = {
    random: random.sorted,
};
