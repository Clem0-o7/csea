import { ref, set, get } from 'firebase/database';
import { db, storage } from './firebaseConfig';

// Fetch announcements from Realtime DB
export const getAnnouncements = async () => {
  const announcementsRef = ref(db, 'announcements/');
  const snapshot = await get(announcementsRef);
  return snapshot.exists() ? snapshot.val() : [];
};

// Upload images to Firebase Storage
export const uploadPhoto = async (file, filename) => {
  const storageRef = ref(storage, `photos/${filename}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};
