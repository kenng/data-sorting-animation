import { IData } from 'src/data/index';
import { SortBase } from './SortBase';

export class BubbleSort extends SortBase {
    private hasSwapped!: boolean;

    constructor(rawData: IData[], nextIndex = 0) {
        super(rawData, nextIndex);
    }

    sortNext(): IData[] {
        this.totalStep++;

        if (
            this.data[this.currentIndex].value >
            this.data[this.currentIndex + 1].value
        ) {
            [this.data[this.currentIndex], this.data[this.currentIndex + 1]] = [
                this.data[this.currentIndex + 1],
                this.data[this.currentIndex],
            ];
            this.hasSwapped = true;
        }

        return this.data;
    }

    *sortGen(): Generator {
        for (
            this.nextIndex = this.defaultNextIndex;
            this.nextIndex < this.data.length;
            this.nextIndex++
        ) {
            const lastUnsortedIndex = this.data.length - this.nextIndex - 1;
            this.hasSwapped = false;
            for (
                this.currentIndex = 0;
                this.currentIndex < lastUnsortedIndex;
                this.currentIndex++
            ) {
                yield this.sortNext();
            }

            if (!this.hasSwapped) {
                this.data.map((item) => (item.sorted = true));
                break;
            } else {
                // last element is sorted
                this.data[this.currentIndex].sorted = true;
            }
        }
    }
}
