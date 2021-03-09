import { duration } from "@material-ui/core";

export interface profileStoreModel {
  aboutResult: {description: string}[];
  skillResult: {title: string, details: string[]}[];
  toolResult: {title: string, details: string[]}[];
  languageResult: {title: string, details: string[]}[];
  educationResult: {title: string, durationTitle: string, description: string, images: string[]}[];
  careerResult: {title: string, durationTitle: string, description: string, tasks: {taskTitle: string, taskDetails: string[]}[], images: string[]}[];
}