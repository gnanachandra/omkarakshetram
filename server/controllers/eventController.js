import asyncHandler from "express-async-handler";
import { StatusCodes } from "http-status-codes";
import Event from "../models/Event.js";
import mongoose from "mongoose";

export const createEvent = asyncHandler(async (req, res) => {
    const { name, description, date, time} = req.body;
    // console.log(new Date(date).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }));
    console.log(req.body)
    if (!name || !description || !date) {
        throw new Error("Fill all details",StatusCodes.BAD_REQUEST);
    }
    const newEvent = await Event.create(req.body);
    const events = await Event.find({});
    return res.status(StatusCodes.OK).json({ message: `Event ${name} is created!`, events });
});

export const getEvents = asyncHandler(async (req, res) => {
    const events = await Event.find({});
    return res.status(StatusCodes.OK).json({ message: `Events data sent`, events });
});

export const updateEvent = asyncHandler(async (req, res) => {
    const { id: eventId } = req.params;
    if (!mongoose.isValidObjectId(eventId)) {
        throw new Error("Not a valid mongodb ID");
    }
    const response = await Event.findByIdAndUpdate(eventId, req.body, { runValidators: true });
    const events = await Event.find({});
    return res.status(StatusCodes.OK).json({ message: `Event updated`, events });
});

export const deleteEvent = asyncHandler(async (req, res) => {
    const { id: eventId } = req.params;
    if (!mongoose.isValidObjectId(eventId)) {
        throw new Error("Not a valid mongodb ID");
    }
    const event = await Event.findById(eventId);
    const response = await Event.findByIdAndDelete(eventId);
    const events = await Event.find({});
    return res.status(StatusCodes.OK).json({ message: `Event ${event.name} has been deleted`, events });
});
