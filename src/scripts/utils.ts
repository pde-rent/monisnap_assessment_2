// various utility
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export enum LogLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    DEBUG = "DEBUG",
    ERROR = "ERROR"
}

const ICON_BY_LOG_LEVEL: {[key: string]: string} = {
    INFO: "info",
    WARNING: "warning",
    DEBUG: "bug_report",
    ERROR: "error"
};

type Stringifiable = { toString: () => string; }

export class Logger {

    public defaultLevel: LogLevel;
    public defaultDescriptor: {
        info: (...args: unknown[]) => void,
        warn: (...args: unknown[]) => void,
        debug: (...args: unknown[]) => void,
        error: (...args: unknown[]) => void};

    constructor(defaultLevel= LogLevel.INFO, defaultDescriptor = console) {
        this.defaultLevel = defaultLevel;
        this.defaultDescriptor = defaultDescriptor;
    }

    public log(level = this.defaultLevel, message: string, descriptor = this.defaultDescriptor): void {
        switch (level) {
            case LogLevel.INFO: descriptor.info(LogLevel[level] + ": " + message); break;
            case LogLevel.WARNING: descriptor.warn(LogLevel[level] + ": " + message); break;
            case LogLevel.DEBUG: descriptor.debug(LogLevel[level] + ": " + message); break;
            case LogLevel.ERROR: descriptor.error(LogLevel[level] + ": " + message); break;
        }
    }

    public info(...args: Stringifiable[]): void { this.log(LogLevel.INFO, args.map(a => a.toString()).join(" ")); }
    public warn(...args: Stringifiable[]): void { this.log(LogLevel.WARNING, args.map(a => a.toString()).join(" ")); }
    public debug(...args: Stringifiable[]): void { this.log(LogLevel.DEBUG, args.map(a => a.toString()).join(" ")); }
    public error(...args: Stringifiable[]): void { this.log(LogLevel.ERROR, args.map(a => a.toString()).join(" ")); }
}

export const LOG = new Logger();

export function round(n: number, digits: number): number {
    return (Math.round(n * Math.pow(10, digits)) / Math.pow(10, digits));
}

export async function waitImagesLoaded(): Promise<void> {

    const imgs: NodeListOf<HTMLImageElement> | null = document.querySelectorAll('img');
    if (!imgs || !imgs.length) { return Promise.resolve(); }
    const promises: Promise<void>[] = [];

    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].complete) { continue; }
        const p = new Promise(resolve => imgs[i].addEventListener('load', () => resolve(true)));
    }
    await Promise.all(promises);
    return Promise.resolve();
}

export function generateUid(): string {
    return Math.floor(1000000000000000 + Math.random() * 9000000000000000).toString(36).substr(0, 10);
}

const FRENCH_DATE_FORMAT: DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };

export function dateToStringFr(d: Date): string {
    return d.toLocaleString('fr-FR', FRENCH_DATE_FORMAT)
}
