import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String
        
    },
    isCoach:{
        type:Boolean,
        default:false
    },
    team:{
        type:String
    },
    speed:{
        type:Number,
        enum:[1,2,3]
    },
    strength:{
        type:Number,
        enum:[1,2,3]
    },
    technique:{
        type:Number,
        enum:[1,2,3]
    },
    tectical:{
        type:Number,
        enum:[1,2,3]
    },
    created_date:{
        type:Date,
        default:Date.now
    }

});