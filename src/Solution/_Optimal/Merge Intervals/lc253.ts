import { MinHeap } from "../../../util/DataStrucFactory";

export const minMeetingRooms = (intervals: number[][]): number => {
    if (intervals.length === 0) {
        return 0;
    }

    // Sort meetings based on their start times
    intervals.sort((a, b) => a[0] - b[0]);

    const minHeap = new MinHeap();
    minHeap.insert(intervals[0][1]); // Add the end time of the first meeting to the heap

    // Iterate through the remaining meetings
    for (let i = 1; i < intervals.length; i++) {
        const currentMeeting = intervals[i];

        // Check if the earliest ending meeting has ended
        if (currentMeeting[0] >= minHeap.extract() || minHeap.size() === 0) {
            // The room can be reused
            minHeap.insert(currentMeeting[1]);
        } else {
            // A new room is needed
            minHeap.insert(currentMeeting[1]);
        }
    }

    return minHeap.size();
}

// Example usage:
const example1 = minMeetingRooms([[0, 30], [5, 10], [15, 20]]);
console.log(example1); // Output: 2

const example2 = minMeetingRooms([[7, 10], [2, 4]]);
console.log(example2); // Output: 1
