import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { prisma } from '../prismaClient';

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const heroSection = await prisma.heroSection.findFirst();
    const skills = await prisma.skill.findMany();
    res.status(200).json({ hero: heroSection, skills });
  } catch (error) {
    return next(createHttpError(500, 'Error while processing your request'));
  }
}

export  {
  getProfile
};