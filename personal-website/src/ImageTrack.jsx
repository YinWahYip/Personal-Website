// src/ImageTrack.jsx
import React, { useRef, useCallback } from "react";

export default function ImageTrack({ images = [] }) {
    const trackRef = useRef(null);
    const stateRef = useRef({ mouseDownAt: 0, prevPct: 0, pct: 0 });
    const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

    const onPointerDown = useCallback((e) => {
        stateRef.current.mouseDownAt = e.clientX ?? 0;
    }, []);

    const onPointerUp = useCallback(() => {
        stateRef.current.mouseDownAt = 0;
        stateRef.current.prevPct = stateRef.current.pct;
    }, []);

    const onPointerMove = useCallback((e) => {
        const track = trackRef.current;
        if (!track || stateRef.current.mouseDownAt === 0) return;

        const mouseDelta = stateRef.current.mouseDownAt - (e.clientX ?? 0);
        const maxDelta = window.innerWidth / 2;
        const pctDelta = (mouseDelta / maxDelta) * -100;
        const nextPct = clamp(stateRef.current.prevPct + pctDelta, -100, 0);
        stateRef.current.pct = nextPct;

        // inside onPointerMove:
        track.animate(
            { transform: `translateX(${nextPct}%)` },
            { duration: 1200, fill: "forwards" }
        );
        for (const img of track.querySelectorAll(".image")) {
            img.animate(
                { objectPosition: `${100 + nextPct}% center` },
                { duration: 1200, fill: "forwards" }
            );
        }

    }, []);

    return (
        <div
            id="image-track"
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onPointerMove={onPointerMove}
            onTouchMove={(e) => e.preventDefault()}
            role="region"
            aria-label="Sliding image gallery"
        >
            {images.map((src, i) => (
                <img key={i} className="image" src={src} alt={`pic-${i + 1}`} draggable="false" />
            ))}
        </div>
    );
}
