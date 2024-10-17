export default function timeElapsed(date){
    let diff = Date.now() - date;
    // console.log("Diff: " + diff);
    // console.log("Date: " + date);
    return diff;
}

export function resolveDisplay(displayDate){
    // displayDate should be a Date object. I should use typescript.
    const totalHours = Math.floor(displayDate / (1000 * 60 * 60));
    const totalDays = Math.floor(totalHours / 24);
    if (totalHours < 24) {
        return `${totalHours}h`;
    } else {
        return `${totalDays}d`;
    }
}