import { IData } from 'src/data/index';
import { SortBase } from './SortBase';

export class BubbleSort extends SortBase {
    constructor(rawData: IData[], currentIndex = 0, nextIndex = 0) {
        super(rawData, currentIndex, nextIndex);
    }

    sortNext(): IData[] {
        this.totalStep++;

        if (
            this.data[this.currentIndex].value >
            this.data[this.currentIndex + 1].value
        ) {
            // swap
            [this.data[this.currentIndex], this.data[this.currentIndex + 1]] = [
                this.data[this.currentIndex + 1],
                this.data[this.currentIndex],
            ];
        }

        return this.data;
    }

    *sortGen(): Generator {
        for (
            this.nextIndex = 0;
            this.nextIndex < this.data.length;
            this.nextIndex++
        ) {
            const lastUnsortedIndex = this.data.length - this.nextIndex - 1;
            for (
                this.currentIndex = 0;
                this.currentIndex < lastUnsortedIndex;
                this.currentIndex++
            ) {
                yield this.sortNext();
            }
            this.data[this.currentIndex].sorted = true;
        }
    }
}
