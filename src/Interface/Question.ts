import { Choice } from "./Choice";

export interface Question {
  url: string;
  published_at: string;
  question: string;
  choices: [Choice];
}
