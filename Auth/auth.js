import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response.data);
  const token = response.data.idToken;
  return token;
}
export function createUser(email, password) {
  authenticate("signUp", email, password);
}
export function loginUser(email, password) {
  authenticate("signUp", email, password);
}
