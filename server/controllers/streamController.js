import asyncHandler from "express-async-handler";
import { StatusCodes } from "http-status-codes";
import LiveStream from "../models/LiveStream.js";

export const createStream = asyncHandler(async (req, res) => {
    const { name, link, date, startTime, endTime } = req.body;
    if (!name || !link || !date || !startTime || !endTime) {
        throw new Error("Fill all details",StatusCodes.BAD_REQUEST);
    }
    const streamExits = await LiveStream.findOne({name})
    if(streamExits){
        return res.status(StatusCodes.CONFLICT).json({ message: `Stream ${name} already exists!` });
    }
    const newStream = await LiveStream.create(req.body);
    const streams = await LiveStream.find({}).sort({date:-1});
    return res.status(StatusCodes.OK).json({ message: `Live Stream ${name} created!`, streams });
});

export const getStreams = asyncHandler(async (req, res) => {
    const streams = await LiveStream.find({}).sort({date :-1});
    const stream = streams[0];
    return res.status(StatusCodes.OK).json({ message: `Live Streams data sent`, streams ,stream});
});

export const updateStream = asyncHandler(async (req, res) => {
    const { id: streamId } = req.params;
    const stream = await LiveStream.findById(streamId);
    if(!stream) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: `Live Stream not found!`});
    }
    const response = await LiveStream.findByIdAndUpdate(streamId, req.body, { runValidators: true });
    const streams = await LiveStream.find({}).sort({date:-1,createdAt : -1});
    return res.status(StatusCodes.OK).json({ message: `Live Stream ${stream.name} updated`, streams });
});

export const deleteStream = asyncHandler(async (req, res) => {
    const { id: streamId } = req.params;
    const stream = await LiveStream.findById(streamId);
    if(!stream) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: `Live Stream not found!`});
    }
    const response = await LiveStream.findByIdAndDelete(streamId);
    const streams = await LiveStream.find({}).sort({date:-1});
    return res.status(StatusCodes.OK).json({ message: `Live Stream ${stream.name} deleted`, streams });
});
