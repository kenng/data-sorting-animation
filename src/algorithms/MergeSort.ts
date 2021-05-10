import { IData } from 'src/data/index';
import { SortBase } from './SortBase';

export class MergeSort extends SortBase {
    constructor(rawData: IData[]) {
        super(rawData, 0);
    }

    *merge(leftIndex: number, middleIndex: number, rightIndex: number) {
        let i = 0;
        let j = 0;
        let k = leftIndex;
        const n1 = middleIndex - leftIndex + 1;
        const n2 = rightIndex - middleIndex;
        // only mark data as sorted in final merge
        const shouldMarkSorted =
            (leftIndex == 0 && rightIndex == this.data.length - 1) ?? false;

        const tempLeft = this.data.slice(leftIndex, leftIndex + n1);
        const tempRight = this.data.slice(
            middleIndex + 1,
            middleIndex + 1 + n2,
        );

        i = 0;
        j = 0;
        k = leftIndex;

        while (i < n1 && j < n2) {
            this.totalStep++;
            this.currentIndex = k;
            if (tempLeft[i].value <= tempRight[j].value) {
                this.data[k++] = tempLeft[i++];
            } else {
                this.data[k++] = tempRight[j++];
            }
            if (shouldMarkSorted) {
                const newData: IData = JSON.parse(
                    JSON.stringify(this.data[k - 1]),
                );
                newData.sorted = true;
                this.data[k - 1] = newData;
            }
            yield;
        }

        // write the remaining
        while (i < n1) {
            this.currentIndex = k;
            this.data[k++] = tempLeft[i++];
            if (shouldMarkSorted) this.data[k - 1].sorted = true;
            yield;
        }

        while (j < n2) {
            this.currentIndex = k;
            this.data[k++] = tempRight[j++];
            if (shouldMarkSorted) this.data[k - 1].sorted = true;
            yield;
        }

        return;
    }

    *mergeSort(leftIndex: number, rightIndex: number) {
        if (leftIndex < rightIndex) {
            const middleIndex =
                leftIndex + Math.floor((rightIndex - leftIndex) / 2);

            yield* this.mergeSort(leftIndex, middleIndex);
            yield* this.mergeSort(middleIndex + 1, rightIndex);

            yield* this.merge(leftIndex, middleIndex, rightIndex);
        }
    }

    *sortGen(): Generator {
        yield* this.mergeSort(0, this.data.length - 1);
    }
}
