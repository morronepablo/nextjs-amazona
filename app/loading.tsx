import { Loader2 } from "lucide-react";

export default async function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="h-full flex items-center justify-center">
        <Loader2 className="size-10 animate-spin text-muted-foreground" />
      </div>
    </div>
  );
}
