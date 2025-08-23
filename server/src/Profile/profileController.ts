import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { prisma } from '../prismaClient';

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const generalDetails = await prisma.generalDetail.findFirst();
    const heroSection = await prisma.heroSection.findFirst();
    const skills = await prisma.skill.findMany();
    const techStack = await prisma.techStack.findMany();
    const portfolioStats = await prisma.portfolioStats.findFirst();
    const projects = await prisma.project.findMany();
    const timeline = await prisma.timeline.findMany();
    res.status(200).json({ generalDetails, hero: heroSection, skills, techStack, portfolioStats, projects, timeline });
  } catch (error) {
    return next(createHttpError(500, 'Error while processing your request'));
  }
}

export  {
  getProfile
};