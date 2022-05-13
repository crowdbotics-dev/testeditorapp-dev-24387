import axios from "axios"
import {
  TASKCONNECTOR_USERNAME,
  TASKCONNECTOR_PASSWORD
} from "react-native-dotenv"
const taskconnector = axios.create({
  baseURL: "https://www.facebook.com",
  auth: { username: TASKCONNECTOR_USERNAME, password: TASKCONNECTOR_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
