import _mongoose from 'mongoose';
import { MONGO_CONNECTION_STRING } from '@shared/constants';
import logger from '@shared/Logger';

export { Schema, Document } from 'mongoose'



 _mongoose.connect(MONGO_CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(res => {
        logger.info(res);
    })
    .catch(err => {
        logger.error(err);
    })


export const mongoose =  _mongoose;