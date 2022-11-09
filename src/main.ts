import { initializeApp } from 'firebase/app'
import { doc, getFirestore, onSnapshot } from 'firebase/firestore'

const config = {
  databaseURL: "https://research2022-5j.firebaseio.com",
  projectId: "research2022-5j"
}

const app = initializeApp(config)

const db = getFirestore(app)

const docRef = doc(db, 'snapshotTest', 'FqP7m3CXI8bzCWC1yXEg')

onSnapshot(docRef, { includeMetadataChanges: true }, (doc) => {
  console.log("Current data: ", doc.data())
},(err) => {
  console.error(err)
})