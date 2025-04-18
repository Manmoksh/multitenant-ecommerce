import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <Button variant={"elevated"}>i im a button</Button>
      </div>
      <div>
        <Input placeholder="h n" />
      </div>
      <div>
        <Progress value={50} />
      </div>
    </div>
  );
}
