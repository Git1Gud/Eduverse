import mongoose from "mongoose";

const CourseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        enum:['Computer Engineering','Data Science','Machine Learning','EXTC'],
        required:true,
    },
    enrollmentKey:{
        type:String,
        required:true
    },
    instructor:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    students:{
        type:[mongoose.Types.ObjectId],
        default:[]
    },
    assignments:{
        type:[mongoose.Types.ObjectId],
        default:[]
    },
    quiz: {
        type: [
            {
                question: { type: String, required: true },
                options: {
                    a: { type: String, required: true },
                    b: { type: String, required: true },
                    c: { type: String, required: true },
                    d: { type: String, required: true }
                },
                answer: { type: String, required: true }
            }
        ],
        default: []
    }
})

export const CourseModel = mongoose.model('courses',CourseSchema)