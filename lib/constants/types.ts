import mongoose from "mongoose";

export type Company = {
    name: string;
    image: string;
    description: string;
    _id?: string
  };
  