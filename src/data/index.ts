import { SortBase } from 'algorithms/SortBase';
import rawData from './data';
import { Notify } from 'quasar';

export interface IData {
    index: number;
    value: number;
    sorted: boolean;
}

type IDataFunc = () => IData[];

export interface ISortCallbackFn {
    (instance: SortBase, isDone: boolean): void;
}

export enum EDataType {
    RANDOM = 'random',
    NEARLY_SORTED = 'nearlySorted',
    REVERSED = 'reversed',
    FEW_UNIQUE = 'fewUnique',
}

export enum ESortType {
    BUBBLE = 'bubble',
    INSERTION = 'insertion',
    SELECTION = 'selection',
    QUICK = 'quick',
    MERGE = 'merge',
    HEAP = 'heap',
}

function isEmptyObject(value) {
    return (
        value && // 👈 null and undefined check
        Object.keys(value).length === 0 &&
        value.constructor === Object
    );
}

function prepData(value: number, index: number) {
    return { index, value, sorted: false };
}

export function deepClone(data: IData[]): IData[] {
    return data.map((item) => JSON.parse(JSON.stringify(item)));
}

const newData: { [key: string]: IData[] } = {
    random: [] as IData[],
    reversed: [] as IData[],
    fewUnique: [] as IData[],
    nearlySorted: [] as IData[],
};

export const data: { [key: string]: IDataFunc } = {
    random: () =>
        newData.random.length > 0
            ? newData.random
            : rawData.random.map(prepData),
    reversed: () =>
        newData.reversed.length > 0
            ? newData.reversed
            : rawData.reversed.map(prepData),
    fewUnique: () =>
        newData.fewUnique.length > 0
            ? newData.fewUnique
            : rawData.fewUnique.map(prepData),
    nearlySorted: () =>
        newData.nearlySorted.length > 0
            ? newData.nearlySorted
            : rawData.nearlySorted.map(prepData),
};

function parseData(rawStr: string): IData[] {
    try {
        const newArray = JSON.parse(rawStr);
        return newArray.map(prepData);
    } catch (err) {
        Notify.create({
            progress: true,
            message: 'Unable to parse the data as array',
            color: 'negative',
        });
        throw Error('Unable to convert data successfully');
    }
}

export const setNewData = {
    random: (userData: string) => (newData.random = parseData(userData)),
    reversed: (userData: string) => (newData.reversed = parseData(userData)),
    fewUnique: (userData: string) => (newData.fewUnique = parseData(userData)),
    nearlySorted: (userData: string) =>
        (newData.nearlySorted = parseData(userData)),
};

export function getDataValue(theData: IData[]): number[] {
    return theData.map((item) => item.value);
}
