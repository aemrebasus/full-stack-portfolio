import './LoadEnv'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import { SERVER_START, PORT } from '@shared/constants';

/**
 * Initialize the port if the port number exist in environment or set 3000.
 */
const port = PORT;

/**
 * Start the express server at the specified port in environment or 3000.
 */
app.listen(port, () => {
    logger.info(SERVER_START);
});
