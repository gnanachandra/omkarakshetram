import asyncHandler from "express-async-handler";
import { StatusCodes } from "http-status-codes";
import LiveStream from "../models/LiveStream.js";
import mongoose from "mongoose";

export const createStream = asyncHandler(async (req, res) => {
    const { name, date, startTime, endTime } = req.body;
    if (!name || !date || !startTime || !endTime) {
        throw new Error("Fill all details");
    }
    const newStream = await LiveStream.create(req.body);
    const streams = await LiveStream.find({});
    return res.status(StatusCodes.OK).json({ message: `Live Stream ${name} is created!`, streams });
});

export const getStreams = asyncHandler(async (req, res) => {
    const streams = await LiveStream.find({});
    return res.status(StatusCodes.OK).json({ message: `Live Streams data sent`, streams });
});

export const updateStream = asyncHandler(async (req, res) => {
    const { id: streamId } = req.params;
    if (!mongoose.isValidObjectId(streamId)) {
        throw new Error("Not a valid mongodb ID");
    }
    const response = await LiveStream.findByIdAndUpdate(streamId, req.body, { runValidators: true });
    const streams = await LiveStream.find({});
    return res.status(StatusCodes.OK).json({ message: `Live Stream updated`, streams });
});

export const deleteStream = asyncHandler(async (req, res) => {
    const { id: streamId } = req.params;
    if (!mongoose.isValidObjectId(streamId)) {
        throw new Error("Not a valid mongodb ID");
    }
    const stream = await LiveStream.findById(streamId);
    const response = await LiveStream.findByIdAndDelete(streamId);
    const streams = await LiveStream.find({});
    return res.status(StatusCodes.OK).json({ message: `Live Stream ${stream.name} has been deleted`, streams });
});
