export const logg = (level: string, preMessage: string = "", postMessage: string = "", ...context: any[]) => {
    const logMessage = `${preMessage} ${level.toUpperCase()} ${postMessage}`;

    context.forEach((item, index) => {
        console.log(`Context ${index + 1}:`);
        console.log(item);
    });

    console.log(logMessage);
};