import firebase from "../../firebase";
const db = firebase.firestore();
const storage = firebase.storage();
// db.settings({timestampsInSnapshots: true})

class ProfileDataService {

  async getAbouts() {
    return await db.collection("abouts").orderBy('order', 'asc').get();
  }
  async getSkills() {
    return await db.collection("skills").orderBy('order', 'asc').get();
  }
  async getTools() {
    return await db.collection("tools").get();
  }
  async getLanguages() {
    return await db.collection("languages").get();
  }
  async getEducations() {
    return await db.collection("educations").get();
  }
  async getCareers() {
    return await db.collection("careers").orderBy('order', 'asc').get();
  }

  async getStorageRef(referenceUrl: string) {
    return await storage.refFromURL(referenceUrl).getDownloadURL();
  }
}

export default new ProfileDataService();