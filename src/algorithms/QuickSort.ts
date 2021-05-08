import { IData } from 'src/data/index';
import { SortBase } from './SortBase';

export class QuickSort extends SortBase {
    constructor(rawData: IData[]) {
        super(rawData, 0);
    }

    *partition(lowIndex: number, highIndex: number) {
        const pivot = this.data[highIndex].value;
        let currentLowIndex = lowIndex - 1;
        this.currentIndex = highIndex;
        this.secondMarkerIndex = currentLowIndex;

        for (
            let currentHighIndex = lowIndex;
            currentHighIndex <= highIndex;
            currentHighIndex++
        ) {
            this.totalStep++;
            this.thirdMarkerIndex = currentHighIndex;
            const temp = this.data[currentHighIndex].value;
            if (temp < pivot) {
                this.secondMarkerIndex = ++currentLowIndex;
                if (currentLowIndex != currentHighIndex) {
                    yield this.data;
                    this.swapData(currentLowIndex, currentHighIndex);
                }
            }
            yield this.data;
        }

        const partitionIndex = currentLowIndex + 1;
        this.swapData(partitionIndex, highIndex);
        this.data[partitionIndex].sorted = true;
        this.secondMarkerIndex = partitionIndex;
        return partitionIndex;
    }

    *quickSort(lowIndex: number, highIndex: number) {
        if (lowIndex < highIndex) {
            const partitionIndex = yield* this.partition(lowIndex, highIndex);
            yield* this.quickSort(lowIndex, partitionIndex - 1);
            yield* this.quickSort(partitionIndex + 1, highIndex);
            this.data[lowIndex].sorted = true;
            this.data[highIndex].sorted = true;
        }
    }

    *sortGen(): Generator {
        const lowIndex = this.defaultNextIndex;
        const highIndex = this.data.length - 1;
        yield* this.quickSort(lowIndex, highIndex);
    }
}
