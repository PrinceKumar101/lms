import bycrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { z } from "zod/v4";

export const login_handler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const form_data_validation = z.object({
    email: z.email("Email not correct format."),
    password: z.string().min(8, "Password must be 8 Character long."),
  });
  const isValid = form_data_validation.safeParse({ email, password });
  res.status(400).send(isValid);
};
