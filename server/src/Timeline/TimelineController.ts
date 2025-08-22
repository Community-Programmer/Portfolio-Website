
import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { prisma } from '../prismaClient';
import { getRandomTailwindColorClass } from "../utils/color";

const getTimeline = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const timeline = await prisma.timeline.findMany();
    res.status(200).json(timeline);
  } catch (error) {
    return next(createHttpError(500, 'Error while fetching timeline'));
  }
}

const createTimeline = async (req: Request, res: Response, next: NextFunction) => {
 try {
    const {
      period,
      position,
      company,
      description,
      technologies,
      status,
      side
    } = req.body;

    const statusColor = getRandomTailwindColorClass('bg');

    const newTimeline = await prisma.timeline.create({
      data: {
        period,
        position,
        company,
        description,
        technologies,
        status,
        statusColor,
        side
      }
    });

    res.status(201).json(newTimeline);
  } catch (error) {
    return next(createHttpError(500, 'Error while creating timeline'));
  }
}   

export {
  getTimeline,
  createTimeline
};