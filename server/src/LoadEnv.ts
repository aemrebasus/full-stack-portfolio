import dotenv from 'dotenv';
import commandLineArgs from 'command-line-args';

/**
 * Command line argumensts and options.
 */
const options = commandLineArgs([
    {
        name: 'env',
        alias: 'e',
        defaultValue: 'production',
        type: String,
    },
]);

/**
 * Is configuration set?
 */
const iscon = dotenv.config({
    path: `./env/${options.env}.env`,
});

if (iscon.error) {
    throw iscon.error;
}
