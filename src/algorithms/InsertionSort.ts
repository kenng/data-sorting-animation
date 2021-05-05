import { IData } from 'src/data/index';
import { SortBase } from './SortBase';

export class InsertionSort extends SortBase {
    constructor(rawData: IData[], currentIndex = 1, nextIndex = 1) {
        super(rawData, currentIndex, nextIndex);
    }

    sortNext(): IData[] {
        if (
            this.data[this.currentIndex].value <
            this.data[this.currentIndex - 1].value
        ) {
            [this.data[this.currentIndex - 1], this.data[this.currentIndex]] = [
                this.data[this.currentIndex],
                this.data[this.currentIndex - 1],
            ];

            if (--this.currentIndex == 0) {
                this.data[0].sorted = true;
                this.data[1].sorted = true;
                this.moveToNext();
            }
        } else {
            // already sorted, can go to next item
            this.data[this.currentIndex].sorted = true;
            this.data[this.currentIndex - 1].sorted = true;
            this.moveToNext();
        }

        return this.data;
    }

    moveToNext(): void {
        this.nextIndex += 1;
        this.currentIndex = this.nextIndex;
    }

    *sortGen(): Generator {
        while (this.nextIndex < this.data.length) {
            yield this.sortNext();
        }
    }
}
