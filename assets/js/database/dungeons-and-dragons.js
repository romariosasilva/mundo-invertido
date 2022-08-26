import app from './app.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

export async function subscribeToDungeonsAndDragons(subscription) {
	const db = getFirestore(app);
	const dungeonsAndDragonsCollection = collection(db, 'dungeons-and-dragons');
	const docRef = await addDoc(dungeonsAndDragonsCollection, subscription);
	return docRef.id;
}

export async function getDungeonsAndDragonsSubscriptions() {
	const db = getFirestore(app);
	const dungeonsAndDragonsCollection = collection(db, 'dungeons-and-dragons');
	const dungeonsAndDragonsCollectionSnapshot = await getDocs(dungeonsAndDragonsCollection);
	const subscriptions = dungeonsAndDragonsCollectionSnapshot.docs.map(doc => doc.data());
	return subscriptions;
}