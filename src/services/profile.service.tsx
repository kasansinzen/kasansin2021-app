import firebase from "../firebase";
const db = firebase.firestore();
// db.settings({timestampsInSnapshots: true})

class ProfileDataService {
  async getAll() {
    const response = db.collection("skills");
    const data = await response.get();
    data.docs.forEach(result => console.log("result", result.data()));
    return data;
  }
}

export default new ProfileDataService();