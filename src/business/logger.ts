import fs from "node:fs";
import path from "path";

class Logger {
    private static instance: Logger;
    private currentDate = new Date();
    private currentLogFile = `${this.getRootDirectory()}/logs/${this.dateTimeStamp()}.log`;
    private colors = {
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        red: '\x1b[31m',
        blue: '\x1b[34m',
        reset: '\x1b[0m'
    };

    private constructor() {
        fs.writeFileSync(this.currentLogFile, "SjInventoryControl Logs");
        this.log(`${this.currentLogFile} file created`);
    }

    public static getLogger(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    private writeCurrentLogFile(logText: string) {
        fs.appendFile(this.currentLogFile, logText, err => {
            if (err) {
                this.error(err);
            }
        });
    }

    private getRootDirectory() {
        return process.cwd();
    }

    public dateTimeStamp(): string {
        const year = this.currentDate.getFullYear();
        const month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(this.currentDate.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    public timeStamp(): string {
        const hour = String(this.currentDate.getHours()).padStart(2, '0');
        const minute = String(this.currentDate.getMinutes()).padStart(2, '0');
        const second = String(this.currentDate.getSeconds()).padStart(2, '0');
        const millisecond = String(this.currentDate.getMilliseconds()).padStart(3, '0');

        return `${this.dateTimeStamp()} ${hour}:${minute}:${second}.${millisecond}`;
    }

    public log(logText: string | object): void {
        logText = typeof logText == "object" ? JSON.stringify(logText) : logText;
        const formattedText: string = `[LOG] ${this.timeStamp()} - ${logText}`;
        console.log(`${this.colors.green}${formattedText}${this.colors.reset}}`);
        this.writeCurrentLogFile(`\n${formattedText}`);
    }

    public info(logText: string | object): void {
        logText = typeof logText == "object" ? JSON.stringify(logText) : logText;
        const formattedText: string = `[INFO] ${this.timeStamp()} - ${logText}`;
        console.info(`${this.colors.blue}${formattedText}${this.colors.reset}`);
        this.writeCurrentLogFile(`\n${formattedText}`);
    }

    public warn(logText: string | object): void {
        logText = typeof logText == "object" ? JSON.stringify(logText) : logText;
        const formattedText: string = `[WARN] ${this.timeStamp()} - ${logText}}`;
        console.warn(`${this.colors.yellow}${formattedText}${this.colors.reset}`);
        this.writeCurrentLogFile(`\n${formattedText}`);
    }

    public error(logText: string | any | object): void {
        logText = typeof logText == "object" ? JSON.stringify(logText) : logText;
        const formattedText: string = ` ${this.timeStamp()} - ${logText}`;
        console.error(`${this.colors.red}[ERROR]${formattedText}${this.colors.reset}`);
        this.writeCurrentLogFile(`\n${formattedText}`);
    }
};

export default Logger;