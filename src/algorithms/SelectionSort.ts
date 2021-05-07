import { IData } from 'src/data/index';
import { SortBase } from './SortBase';

export class SelectionSort extends SortBase {
    private lowIndex = 0;

    constructor(rawData: IData[]) {
        super(rawData, 0);
    }

    sortNext(): IData[] {
        this.totalStep++;

        if (
            this.data[this.currentIndex].value < this.data[this.lowIndex].value
        ) {
            this.lowIndex = this.currentIndex;
        }

        return this.data;
    }

    *sortGen(): Generator {
        for (
            this.nextIndex = this.defaultNextIndex;
            this.nextIndex < this.data.length;
            this.nextIndex++
        ) {
            this.lowIndex = this.nextIndex;
            for (
                this.currentIndex = this.nextIndex + 1;
                this.currentIndex < this.data.length;
                this.currentIndex++
            ) {
                yield this.sortNext();
            }

            if (this.lowIndex != this.nextIndex) {
                this.swapData(this.nextIndex, this.lowIndex);
            }
            this.data[this.nextIndex].sorted = true;
        }
    }
}
