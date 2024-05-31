import Image from "next/image";
import { Button } from "@/app/components/Button";
export default function Home() {
  const a = () => console.log("s");
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>My Desgin System</h1>
      <Button label="Button" intent="primary" />
      <Button label="Button" intent="secondary" />
      <Button label="Button" intent="danger" />
    </main>
  );
}
