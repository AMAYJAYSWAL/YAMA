import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Button>
        primary
      </Button>
      <Button variant="destructive">
        Secondary
      </Button>
    </div>
  );
}
