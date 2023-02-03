import { Request, Response } from 'express';
import {omit} from 'lodash';
import { createUser } from '../service/user.service';
import logger from '../utils/logger';
import { CreateUserInput } from '../schema/user.schema';

// no params so its empty
export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response){
try{
    const user = await createUser(req.body); //call create user service
    // return user;
    // The line above is wrong you cannot just return user you have to call the response object
    return res.send(omit(user.toJSON(),"password"));
}
catch(e: any){
    logger.error(e);
    // if the user with that email has already registered return status code 409
    return res.status(409).send(e.message);
}

}