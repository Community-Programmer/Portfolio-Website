import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { prisma } from '../prismaClient';

const getTheme = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const theme = await prisma.theme.findUnique({
      where: { name: 'Default' }
    });

    if (!theme) return res.status(404).json({ message: 'Theme not found' });

    res.json(theme);
  } catch (error) {
    return next(createHttpError(500, 'Error while processing your request'));
  }
}

export { getTheme };