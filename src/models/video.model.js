const mongoose = require('mongoose');
const mongooseAggregatePaginateV2 = require('mongoose-aggregate-paginate-v2');

const { Schema } = mongoose;

const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean
    }
}, { timestamps: true })

videoSchema.plugin(mongooseAggregatePaginateV2);

const Video = mongoose.model('Video', videoSchema);

exports.Video = Video;