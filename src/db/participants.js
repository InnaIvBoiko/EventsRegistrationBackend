import { Schema, model } from 'mongoose';

const participantsSchema = new Schema(
  {
    event_id: {
      type: String,
      required: false,
    },
    full_name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    date_of_birth: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ParticipantsCollection = model('participants', participantsSchema);
