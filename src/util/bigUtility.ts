// #1 Proper Case
export const properCase = (string: string): string => {
    return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
};

// #2 Console Logging

export const info = (arg: any): void => console.info(arg);
export const warn = (arg: any): void => console.warn(arg);
export const error = (arg: any): void => console.error(arg);
export const table = (arg: any): void => console.table(arg);

// #3 Query Selector with Optional Scope
export const select = (selector: string, tagElementScope?: Document | Element): Element | null => {
    return (tagElementScope || document).querySelector(selector);
};

// #4 addEventListener Wrapper
export const listen = (target: EventTarget, event: string, callback: EventListenerOrEventListenerObject, capture = false): void => {
    target.addEventListener(event, callback, !!capture);
};

const eventLog = (e: Event): void => console.log((e as any).target);

// Example usage:
// listen(body, "click", eventLog);

// #5 Sanitize Input / Escape Characters
export const sanitizeInput = (inputValue: string): string => {
    const div = document.createElement('div');
    div.textContent = inputValue;
    return div.innerHTML;
};

// Example usage:
// const dirtyInput = "<script>alert('xss attack')</script>&othervalues";
// const cleanInput = sanitizeInput(dirtyInput); // replaces < > and &

// #6 Create an Element with an Optional CSS Class
export const createElement = (tag: string, className?: string): HTMLElement => {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    return el;
};

// #7 Delete All Contents
export const deleteChildElements = (parentElement: Element): void => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};

// #8 Add Class with Optional Query Scope
export const addClass = (selector: string, className: string, scope?: Document | Element): void => {
    (scope || document).querySelector(selector)?.classList.add(className);
};


// #10 Get Parameters by Name from URL
export const getParameterValue = (paramName: string, url?: string): string | null => {
    if (!url) url = window.location.href;
    const regex = new RegExp(`[?&]${paramName}(=([^&#]*))`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};
