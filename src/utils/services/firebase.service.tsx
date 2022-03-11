import firebase from "../../firebase";
import { IAboutResult, ICareerResult, IEducationResult, ILanguageResult, ISkillResult, IToolResult } from "../interfaces/master.interface";
const db = firebase.firestore();
const storage = firebase.storage();
// db.settings({timestampsInSnapshots: true})

export const FirebaseService = new class FirebaseService {

  async getAbouts(): Promise<IAboutResult[]> {
    return (await db.collection("abouts").orderBy('order', 'asc').get()).docs.map(data => data.data() as any);
  }
  async getSkills(): Promise<ISkillResult[]> {
    return (await db.collection("skills").orderBy('order', 'asc').get()).docs.map(data => data.data() as any);
  }
  async getTools(): Promise<IToolResult[]> {
    return (await db.collection("tools").get()).docs.map(data => data.data() as any);
  }
  async getLanguages(): Promise<ILanguageResult[]> {
    return (await db.collection("languages").get()).docs.map(data => data.data() as any);
  }
  async getEducations(): Promise<IEducationResult[]> {
    return (await db.collection("educations").get()).docs.map(data => data.data() as any);
  }
  async getCareers(): Promise<ICareerResult[]> {
    return (await db.collection("careers").orderBy('order', 'asc').get()).docs.map(data => data.data() as any);
  }

  async getStorageRef(referenceUrl: string) {
    return await storage.refFromURL(referenceUrl).getDownloadURL();
  }
}