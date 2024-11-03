"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface SketchInfoProps {
  name: string;
  description?: string;
  code?: string;
}

export function SketchInfo({ name, description, code }: SketchInfoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
        </DialogHeader>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
        {code && (
          <pre className="overflow-x-auto rounded-lg bg-secondary p-4">
            <code>{code}</code>
          </pre>
        )}
      </DialogContent>
    </Dialog>
  );
}
