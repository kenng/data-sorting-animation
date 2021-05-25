import { IData } from 'src/data/index';
import { SortBase } from './SortBase';

export class HeapSort extends SortBase {
    constructor(rawData: IData[], nextIndex = 0) {
        super(rawData, nextIndex);
    }

    markSorted(currentIndex) {
        this.currentIndex = currentIndex;
        this.data[currentIndex].sorted = true;
    }

    setPointer(
        len: number,
        parentIndex: number,
        leftIndex: number,
        rightIndex: number,
    ) {
        this.currentIndex = parentIndex;
        this.secondMarkerIndex = leftIndex < len ? leftIndex : -1;
        this.thirdMarkerIndex = rightIndex < len ? rightIndex : -1;
    }

    *heapify(len: number, parentIndex: number) {
        let largest = parentIndex;
        const leftIndex = 2 * parentIndex + 1;
        const rightIndex = 2 * parentIndex + 2;

        this.totalStep++;
        // no need to continue if parent is last node in the tree
        if (leftIndex >= len && rightIndex >= len) return;
        this.setPointer(len, parentIndex, leftIndex, rightIndex);

        if (
            leftIndex < len &&
            this.data[leftIndex].value > this.data[largest].value
        ) {
            largest = leftIndex;
        }

        if (
            rightIndex < len &&
            this.data[rightIndex].value > this.data[largest].value
        ) {
            largest = rightIndex;
        }

        if (largest != parentIndex) {
            // show pointer before swap
            yield;
            this.swapData(parentIndex, largest);
            // show the updated data
            yield;
            // move to next heapify loop
            yield* this.heapify(len, largest);
        } else {
            yield;
        }
    }

    *heapSort() {
        const len = this.data.length;
        // max heap
        for (
            let parentIndex = Math.floor(len / 2 - 1);
            parentIndex >= 0;
            parentIndex--
        ) {
            yield* this.heapify(len, parentIndex);
        }

        // heap sort
        for (let i = len - 1; i >= 0; i--) {
            // move root element to last, and last element to root
            this.swapData(0, i);
            this.markSorted(i);

            // run heapify to get highest value node at the root again
            yield* this.heapify(i, 0);
        }
    }

    *sortGen(): Generator {
        yield* this.heapSort();
    }
}
