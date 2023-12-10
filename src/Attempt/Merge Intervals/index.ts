import { canAttendMeetings } from "./lc252"
import { minMeetingRooms } from "./lc253"
import { merge } from "./lc56"
import { insertInterval } from "./lc57"
import { leastInterval } from "./lc621"
import { intervalIntersection } from "./lc986"
import { employeeFreeTime } from "./lc759"

export const AttemptMergeInterval = {
  lc56: merge,
  lc57: insertInterval,
  lc252: canAttendMeetings,
  lc253: minMeetingRooms,
  lc621: leastInterval,
  lc759: employeeFreeTime,
  lc986: intervalIntersection,
}
