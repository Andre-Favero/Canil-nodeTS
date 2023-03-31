import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.render("pages/page");
};

export const dogs = (req: Request, res: Response) => {
  res.send("catioro");
};

export const cats = (req: Request, res: Response) => {
  res.send("gatito");
};

export const fishes = (req: Request, res: Response) => {
  res.send("pexe");
};
