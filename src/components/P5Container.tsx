"use client";

import { useEffect, useRef } from "react";
import p5 from "p5";

interface P5ContainerProps {
  sketch: (p: p5) => void;
  className?: string;
}

export function P5Container({ sketch, className }: P5ContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<p5 | null>(null);

  useEffect(() => {
    if (containerRef.current && !p5Ref.current) {
      p5Ref.current = new p5(sketch, containerRef.current);
    }

    return () => {
      if (p5Ref.current) {
        p5Ref.current.remove();
        p5Ref.current = null;
      }
    };
  }, [sketch]);

  return <div ref={containerRef} className={className} />;
}
