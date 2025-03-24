import Navbar from "../components/navbar";
import "../styles/global.css"

import { Slot } from "expo-router";


export default function RootLayout() {
  return <>
  <Navbar />
  <Slot />
</>
}
