import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  avatar: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  slackId: {
    type: String,
    required: true
  },
  messages: {
    type: Number,
    required: false
  },
  replies: {
    type: Number,
    required: false
  },
  reactions: {
    type: Number,
    required: false
  },
  reactions_info: [
    {
      send: {
        default: 0,
        type: Number,
        required: false
      },
      receive: [
        {
          positive: {
            default: 0,
            type: Number,
            required: false
          },
          negative: {
            default: 0,
            type: Number,
            required: false
          }
        }
      ]
    }
  ],
  lastUpdate: {
    type: Date,
    required: true,
    default: Date.now
  },
  isCoreTeam: {
    type: Boolean,
    required: true,
    default: false
  }
});

export default mongoose.model("User", userSchema);
