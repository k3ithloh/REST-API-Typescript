import {DocumentDefinition, FilterQuery} from 'mongoose';
import { omit } from "lodash";
import UserModel, { UserDocument, UserInput }from '../models/user.model';


export async function createUser(input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>>){
    try{
        return await UserModel.create(input);
    }catch(e: any){
        throw new Error(e);
    }
}
