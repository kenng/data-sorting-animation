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

    constructor(rawData: IData[], currentIndex: number, nextIndex: number) {
        this.rawData = rawData;
        this.data = deepClone(this.rawData);
        this.defaultCurrentIndex = currentIndex;
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

    // sort(callBackFn?: ISortCallbackFn): boolean {
    //     let result = this.sortGen().next();
    //     if (!result.done) {
    //         setTimeout(() => {
    //             result = this.sortGen().next();
    //             if (callBackFn) return callBackFn(this, result.done ?? false);
    //         }, 50);
    //     }
    //     return result.done ?? false;
    // }

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
