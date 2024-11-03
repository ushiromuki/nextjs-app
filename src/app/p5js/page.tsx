"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { P5Container } from "@/components/P5Container";
import { sketches } from "@/sketches";

export default function P5jsPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSketch, setActiveSketch] = useState(sketches[0].name);

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-3xl font-bold">P5.js スケッチライブラリー</h1>

      <Tabs value={activeSketch} onValueChange={setActiveSketch}>
        <div className="mb-4 flex items-center justify-between">
          <TabsList>
            {sketches.map((sketch) => (
              <TabsTrigger key={sketch.name} value={sketch.name}>
                {sketch.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <Button variant="outline" onClick={() => setIsFullscreen(!isFullscreen)}>
            {isFullscreen ? "通常表示" : "フルスクリーン"}
          </Button>
        </div>

        {sketches.map((sketch) => (
          <TabsContent key={sketch.name} value={sketch.name}>
            <Card className={`p-4 ${isFullscreen ? "fixed inset-0 z-50" : ""}`}>
              <P5Container sketch={sketch.sketch} className="flex items-center justify-center" />
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
