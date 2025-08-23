import { Request, Response, NextFunction } from "express";
import { prisma } from "../prismaClient";
import createHttpError from "http-errors";

const contactMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    res.status(201).json({ message: "Message sent successfully.", data: newMessage });
  } catch (error) {
    return next(createHttpError(500, "Failed to create contact message"));
  }
};

export { contactMessage };
