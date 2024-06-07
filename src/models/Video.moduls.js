import mongoos, {Schema} from mongoos
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    { 
        videoFile:{
            type: String,    //cloudinary url using for 
            require: true,
        },
        thumbnail:{
            type: String,    // cloudinary url 
            require: true,
        },
        description:{
            type: String,
            require: true,
        },
        duraction:{
            type: String,
            require: true,
        },
        views:{
            type: Number,
            default: 0,
        },
        isPublish:{
            type: Boolean,
            require: true,
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        


    },
  {
    timestamps: true
  }
)
videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoos.model("Video", videoSchema)