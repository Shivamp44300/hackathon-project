import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  name: {
    type: String,
  },
  profile_photo: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    unique: true,
    default: null,
  },
  face_recognition_data: {
    type: String,
    default: null,
  },
  access_level: {
    type: String,
    default: null,
  },
  authorized_areas: {
    type: [String],
    default: [],
  },
  entry_time_range: {
    start: {
      type: String,
      default: null,
    },
    end: {
      type: String,
      default: null,
    },
  },
  last_location: {
    type: String,
    default: null,
  },
  tracking_consent: {
    type: Boolean,
    default: true,
  },
  visit_logs: [
    {
      entry_time: {
        type: Date,
      },
      exit_time: {
        type: Date,
      },
      location: {
        type: [Number],
      },
      place: {
        type: String,
      },
      reason: {
        type: String,
      },
      status_log: {
        type: String,
      },
    },
  ],
  emergency_contact: {
    emergency_contact_name: {
      type: String,
      default: null,
    },
    emergency_contact_phone: {
      type: String,
      default: null,
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Active", "Inactive", "Suspended"],
    default: "Active",
  },
  room_number: {
    type: String,
    default: null,
  },
  floor_number: {
    type: String,
    default: null,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
