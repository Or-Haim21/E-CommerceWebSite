// firebaseService.js
import db from './firebase'; // Importing the default export
import { collection, doc, query, onSnapshot, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Function to load collection data and dispatch to Redux
const loadCollectionData = (collectionName, actionType, dispatch) => {
    const q = query(collection(db, collectionName));
    onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        dispatch({ type: actionType, payload: data });
    });
};

// Function to add a new document to a collection
const addDocument = async (collectionName, data) => {
    await addDoc(collection(db, collectionName), data);
};

// Function to update a document in a collection
const updateDocument = async (collectionName, id, data) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data);
};

// Function to delete a document from a collection
const deleteDocument = async (collectionName, id) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
};

// Utility function to get formatted date
const getFormattedDate = () => {
    const date = new Date();
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
};

// Export all functions
export {
    loadCollectionData,
    addDocument,
    updateDocument,
    deleteDocument,
    getFormattedDate
};
