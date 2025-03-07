import mongoose from "mongoose";

export type Company = {
    name: string;
    image: string;
    description: string;
    _id?: string
  };



export interface Job {
  _id?: string;  // Job ID
  company: string | {         // Can be either a string (ID only) or an object (detailed)
      _id: string;            // Company ID (reference)
      name?: string;          // Company name
      image?: string;         // Company logo/image URL
      description?: string;   // Company description
      createdAt?: string;     // Optional: Company creation date
      updatedAt?: string;     // Optional: Company last update date
  };
  title: string;  // Job title
  domain: string;  // Job domain (e.g., Software, Marketing)
  salary: string;  // Salary information
  description: string;  // Job description
  jobType: 'full-time' | 'part-time' | 'contract' | 'internship' | 'remote';  // Job type
  createdAt?: string;  // Optional: Job creation date
  updatedAt?: string;  // Optional: Job last update date
}



  