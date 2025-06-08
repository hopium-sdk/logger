import colors from 'colors';

colors.setTheme({
    lib: ['green', 'bold'],
    info: ['cyan', 'bold'],
    warn: ['yellow', 'bold'],
    error: ['red', 'bold']
});

const logger = colors as any;

const time = () => {
    return new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

export const Logger = {
    info: ({ lib, message }: { lib: string, message: string }) => {
        console.log(time(), logger.info("INFO "), logger.lib(lib), message);
    },
    warn: ({ lib, message }: { lib: string, message: string }) => {
        console.log(time(), logger.warn("WARN "), logger.lib(lib), message);
    },
    error: ({ lib, message }: { lib: string, message: string }) => {
        console.log(time(), logger.error("ERROR "), logger.lib(lib), message);
    }
}

export const logError = ({ lib, error }: { lib: string, error: unknown }) => {
    if (error instanceof Error) {
        Logger.error({ lib, message: error.message })
    } else {
        Logger.error({ lib, message: "Unknown error" })
    }
}