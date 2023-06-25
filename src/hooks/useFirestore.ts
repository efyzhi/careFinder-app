import { useEffect, useState } from 'react'
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from '../config/firebase';


interface Document {
    id: string;
    [key: string]: any;
}

interface UseFirestoreProps {
    collectionName: string;
}

interface UseFirestoreResult {
    documents: Document[];
    loading: boolean;
    createDocument: (data: any) => Promise<void>;
    updateDocument: (docId: string, data: any) => Promise<void>;
    deleteDocument: (docId: string) => Promise<void>;
}

const useFirestore = ({collectionName}: UseFirestoreProps): UseFirestoreResult => {
    const [documents, setDocuments] = useState<Document[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Document[];
        setDocuments(docs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, [collectionName]);
    const createDocument = async( data:any) => {
        try {
            const docRef = await addDoc(collection(db, collectionName), data);
            console.log('Document created with ID:', docRef.id)
        } catch (error) {
            console.error('Erro creating document:', error)
        }
    } 
    
    // read documents
    
    const updateDocument = async(docId: string, data: any) => {
        try {
            const docRef = doc(collection(db, collectionName, docId));
            await updateDoc(docRef, data)
                console.log('Document updated with ID:', docId);
        } catch (error) {
            console.error('Error updating document:', error)
        }
    }
    
    const deleteDocument = async( docId: string) => {
        try {
            const docRef = doc(collection(db, collectionName, docId));
            await deleteDoc(docRef)
                console.log('Document deleted with ID:', docId);
        } catch (error) {
            console.error('Error deleting document:', error)
        }
    }
  return {
    documents,
    loading,
    createDocument,
    updateDocument,
    deleteDocument,
  };
}

export default useFirestore

