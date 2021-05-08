import { deepClone, IData } from 'src/data/index';

export interface IReactiveData {
    currenIndex: number;
    nextIndex: number;
    secondMarkerIndex: number;
    thirdMarkerIndex: number;
    totalStep: number;
    data: IData[];
}

export abstract class SortBase {
    readonly rawData: IData[];
    data: IData[];
    protected currentIndex!: number;
    protected nextIndex!: number;
    protected secondMarkerIndex = -1;
    protected thirdMarkerIndex = -1;
    protected defaultCurrentIndex: number;
    protected defaultNextIndex: number;
    protected totalStep = 0;

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
        this.secondMarkerIndex = -1;
        this.thirdMarkerIndex = -1;
        this.data = deepClone(this.rawData);
    }

    sortAll(): void {
        const iter = this.sortGen();
        while (!iter.next().done);
    }

    swapData(key1: number, key2: number): void {
        [this.data[key1], this.data[key2]] = [this.data[key2], this.data[key1]];
    }

    getReactiveData(): IReactiveData {
        return {
            currenIndex: this.currentIndex,
            nextIndex: this.nextIndex,
            secondMarkerIndex: this.secondMarkerIndex,
            thirdMarkerIndex: this.thirdMarkerIndex,
            totalStep: this.totalStep,
            data: this.data,
        };
    }

    getDataValue(): number[] {
        return this.data.map((item) => item.value);
    }
}
