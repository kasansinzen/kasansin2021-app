export interface IAboutResult {
  description: string
}

export interface ISkillResult {
  title: string,
  details: string[]
}

export interface IToolResult {
  title: string,
  details: string[]
}

export interface ILanguageResult {
  title: string,
  details: string[]
}

export interface IEducationResult {
  title: string,
  durationTitle: string,
  description: string,
  images: string[]
}

export interface ICareerResult {
  title: string,
  durationTitle: string,
  description: string,
  tasks: {
    taskTitle: string,
    taskDetails: string[]
  }[],
  images: string[]
}