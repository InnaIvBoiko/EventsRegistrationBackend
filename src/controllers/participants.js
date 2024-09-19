import { createParticipant, getAllParticipants } from '../services/participants.js';

export const createParticipantController = async (req, res) => {
    const participant = await createParticipant(req.body);
  res.status(201).json({
    status: 201,
    message: `Successfully created a participant!`,
    data: participant,
  });
};

export const getAllParticipantsController = async (req, res) => {
    const events = await getAllParticipants();

    res.status(200).json({
        status: 200,
        message: 'Successfully found all participants!',
        data: events,
    });
};
