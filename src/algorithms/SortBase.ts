import { deepClone, IData } from 'src/data/index';

export interface IReactiveData {
    currenIndex: number;
    nextIndex: number;
    totalStep: number;
    data: IData[];
}

export abstract class SortBase {
    readonly rawData: IData[];
    data: IData[];
    protected currentIndex!: number;
    protected nextIndex!: number;
    protected defaultCurrentIndex: number;
    protected defaultNextIndex: number;
    protected totalStep = 0;

    abstract sortNext(): IData[];
    abstract sortGen(): Generator;

    constructor(rawData: IData[], nextIndex: number, currentIndex?: number) {
        this.rawData = rawData;
        this.data = deepClone(this.rawData);
        this.defaultCurrentIndex = currentIndex ?? nextIndex;
        this.defaultNextIndex = nextIndex;
        this.reset();
    }

    reset(): void {
        this.totalStep = 0;
        this.currentIndex = this.defaultCurrentIndex;
        this.nextIndex = this.defaultNextIndex;
        this.data = deepClone(this.rawData);
    }

    sortAll(): void {
        const g = this.sortGen();
        while (!g.next().done);
    }

    swapData(key1: number, key2: number): void {
        [this.data[key1], this.data[key2]] = [this.data[key2], this.data[key1]];
    }

    getReactiveData(): IReactiveData {
        return {
            currenIndex: this.currentIndex,
            nextIndex: this.nextIndex,
            totalStep: this.totalStep,
            data: this.data,
        };
    }

    getDataValue(): number[] {
        return this.data.map((item) => item.value);
    }
}
