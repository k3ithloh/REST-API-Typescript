import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';
import logger from '../utils/logger';
import {UserDocument} from './user.model'

// Create typescript definition for userSchema
// there is a few ways of integrating typescript with mongoose 
// ! Another way is to use typegoose
export interface SchemaDocument extends mongoose.Document {
    user: UserDocument['_id']; 
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}

const sessionSchema = new mongoose.Schema({
email: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true},
valid: {type: Boolean, required: true},
userAgent: {type: String}
},{
    timestamps: true,
});


const SessionModel = mongoose.model('Session', sessionSchema);

export default SessionModel;