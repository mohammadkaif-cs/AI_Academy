
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCn-Gj_2VtD5O--GQgpBcvhwCzj-ktNQ2A",
  authDomain: "ai-academy-4584b.firebaseapp.com",
  projectId: "ai-academy-4584b",
  appId: "1:625122635029:web:a83fb72533ab4190158d1c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Configure Google provider for popup
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});
