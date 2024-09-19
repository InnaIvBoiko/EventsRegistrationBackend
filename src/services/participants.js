import { ParticipantsCollection } from '../db/participants.js';

export const createParticipant = async (payload) => {
    const participant = await ParticipantsCollection.create(payload);
    console.log(participant);
  return participant;
};

export const getAllParticipants = async () => {
  const participants = await ParticipantsCollection.find();
  return participants;
};
