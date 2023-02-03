// Responsible for taking http request and forwarding it to controllers

import {Express, Request, Response} from 'express';
import { createUserHandler } from './controller/user.controller';
import validateResource from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';


function routes(app: Express){
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

// Middlewhere layer to validate what you are sending out
    app.post('/api/users', validateResource(createUserSchema), createUserHandler);
}

export default routes;