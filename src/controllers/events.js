import { getAllEvents, getEventById } from "../services/events.js";

export const getAllEventsController = async (req, res) => {
    const events = await getAllEvents();

    res.status(200).json({
        status: 200,
        message: 'Successfully found events!',
        data: events,
    });
};

export const getEventByIdController = async (req, res) => {
    const { eventId } = req.params;
    const event = await getEventById(eventId);

    if (event !== null) {
        res.status(200).json({
            status: 200,
            message: `Successfully found event with id ${eventId}!`,
            data: event,
        });
    } else {
        res.status(404).json({
            status: 404,
            message: 'Non found',
        });
    };
};
