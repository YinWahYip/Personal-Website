import React, { useRef, useLayoutEffect, useCallback } from "react";

export default function ImageTrack({ images = [] }) {
    const wrapperRef = useRef(null);
    const trackRef = useRef(null);

    // Internal state kept in refs to avoid re-renders
    const s = useRef({
        isDown: false,
        startX: 0,     // pointer x on pointerdown
        startTx: 0,    // translateX at pointerdown
        tx: 0,         // current translateX (px)
        segW: 0        // width of one image-set (px)
    });
    const captions = [
        "✌️✌️",
        "Mr. Fancy Pants",
        "SoFi HQ",
        "In-n-Out",
        "President of Villanova, Peter M. Donohue",
        "🗽",
        "🐸",
        "CEO of Arista, Jayshree Ullal",

    ];


    // Build 3 copies for seamless wrap
    const tripled = [...images, ...images, ...images];

    // After layout, measure one "segment" (the width of exactly one set of images)
    useLayoutEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        s.current.segW = track.scrollWidth / 3;
        s.current.tx = -s.current.segW;
        applyTransform(0);
    }, [images.length]);

    const clampWrap = useCallback((px) => {
        const { segW } = s.current;
        if (segW === 0) return px;
        while (px <= -2 * segW) px += segW;
        while (px > -segW) px -= segW;
        return px;
    }, []);

    const applyTransform = (duration = 0) => {
        const track = trackRef.current;
        if (!track) return;
        const { tx, segW } = s.current;
        const norm = segW ? ((tx % segW) + segW) % segW : 0;
        const pct = 100 + (-norm / (segW || 1)) * 100; // 100..0

        track.style.transition = duration ? `transform ${duration}ms` : "none";
        track.style.transform = `translateX(${tx}px)`;

        for (const img of track.querySelectorAll(".image")) {
            img.style.objectPosition = `${pct}% center`;
        }
    };

    const onPointerDown = (e) => {
        s.current.isDown = true;
        s.current.startX = e.clientX ?? 0;
        s.current.startTx = s.current.tx;
        wrapperRef.current?.setPointerCapture?.(e.pointerId);
    };
    const onPointerUp = (e) => {
        s.current.isDown = false;
        wrapperRef.current?.releasePointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e) => {
        if (!s.current.isDown) return;
        const dx = (e.clientX ?? 0) - s.current.startX;
        s.current.tx = clampWrap(s.current.startTx + dx);
        applyTransform(0);
    };

    const onWheel = (e) => {
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        s.current.tx = clampWrap(s.current.tx - delta);
        applyTransform(0);
        e.preventDefault();
    };
    // Auto-scroll ticker
    useLayoutEffect(() => {
        let raf;
        const tick = () => {
            s.current.tx = clampWrap(s.current.tx - 0.4); // adjust speed here
            applyTransform(0);
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [clampWrap]);
    return (
        <section
            ref={wrapperRef}
            className="image-track-wrapper"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onPointerMove={onPointerMove}
            onWheel={onWheel}
        >

            <div id="image-track" ref={trackRef} aria-label="Infinite image gallery">
                {
                    tripled.map((src, i) => (
                        <figure key={i} className="image-card">
                            <img className="image" src={src} alt={captions[i % captions.length]} />
                            <figcaption className="caption">{captions[i % captions.length]}</figcaption>
                        </figure>
                    ))}

            </div>
        </section>
    );
}
