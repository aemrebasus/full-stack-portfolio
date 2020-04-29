import { IServerInfo } from '@models';
import { IUserInfo } from '@models';

/**
 * PORT
 */
export const PORT = process.env.PORT || 3000;

/**
 * Base route
 */
export const BASE_ROUTE = '/api/v1'

/**
 * Server-start message
 */
export const SERVER_START = `Express server started at port [${PORT}]`;


/**
 * Missing paramenters for ports
 */
export const PARAM_MISSING = 'One or more of the required parameters was missing.';



/**
 * Server information
 */
export const SERVER_NAME = 'Full Stack Application built by Ahmet Emrebas in April 27 2020';
export const DEVELOPER_NAME = 'Ahmet Emrebas';
export const DEVELOPMENT_STACK = 'MongoDB, Express, Angular, NodeJS';
export const START_DATE = 'April 27 2020';
export const END_DATE = 'UNDEFINED';


export const SERVER_INFORMATION: IServerInfo = {
    name: SERVER_NAME,
    author: DEVELOPER_NAME,
    date: {
        start: START_DATE,
        end: END_DATE
    },
    stack: DEVELOPMENT_STACK
}

export const DEVELOPER_INFORMATION: IUserInfo = {
    name: DEVELOPER_NAME,
    expertise: 'MongoDB, Express, Angular, NodeJS, Typescript, JavaScript, C#, Java',
    location: 'Houston,TX | College Station,TX'
}



/**
 * Database connection string
 */
export const MONGO_CONNECTION_STRING = 'mongodb://127.0.0.1:27017/full-stack';

