import { Request, Response, NextFunction } from "express";
import { prisma } from "../prismaClient";
import createHttpError from "http-errors";

const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    return next(createHttpError(500, "Failed to fetch projects"));
  }
};


const createProject = async (req: Request, res: Response, next: NextFunction) => {
  const { title, description, technologies, images, liveUrl, githubUrl } = req.body;

  try {
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        technologies,
        images,
        liveUrl,
        githubUrl
      }
    });

    res.status(201).json(newProject);
  } catch (error) {
    return next(createHttpError(500, "Failed to create project"));
  }
};

export { getProjects, createProject };
