import Header from "./Componet/header";
import Herosectoin from "./Componet/Herosectoin";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <Header />
      <Herosectoin />
    </div>
  );
}
