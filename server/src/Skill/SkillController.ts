import { Request, Response, NextFunction } from "express";
import { prisma } from "../prismaClient";
import createHttpError from "http-errors";



const getSkills = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skills = await prisma.skill.findMany();
    res.json(skills);
  } catch (error) {
    return next(createHttpError(500, 'Error while processing your request'));
  }
};

export { getSkills };
