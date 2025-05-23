import Buttons from "@/components/Buttons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
     
      <p className="mt-4 text-lg">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">app/page.tsx</code>
      </p>
      <Buttons/>
    </div>
  );
}
