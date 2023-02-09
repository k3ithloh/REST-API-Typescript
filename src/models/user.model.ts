import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';
import logger from '../utils/logger';

// Create typescript definition for userSchema
// there is a few ways of integrating typescript with mongoose 
// ! Another way is to use typegoose
// export interface UserDocument extends mongoose.Document {
//     email: string;
//     name: string;
//     password: string;
//     createdAt: Date;
//     updatedAt: Date;
//     comparePassword(candidatePassword: string): Promise<boolean>;
// }

export interface UserInput {
  email: string;
  name: string;
  password: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<Boolean>;
}

const userSchema = new mongoose.Schema({
    // means that an email is required and you cannot have more than one user with the same email
email: {type: String, required: true, unique: true},
name: {type: String, required: true},
password: {type: String, required: true},
},{
    timestamps: true,
});

// you want to hash their password and store the hashed version in the database
// so if dB is compromised, the passwords are not compromised

userSchema.pre("save", async function(next){
    let user = this as UserDocument;

    if(!user.isModified('password')){
        return next();
    }
    const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));
    const hash = await bcrypt.hashSync(user.password, salt);
    user.password = hash;
    logger.info(`Hashed password for user ${user.password}`)
    return next();
});

userSchema.methods.comparePassword = async function(
    candidatePassword: string
    ): Promise<boolean> {
    const user = this as UserDocument;
        logger.info(`Comparing password for user ${user.password}`)
    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
}

const UserModel = mongoose.model('User', userSchema);

export default UserModel;