"use client";

import { useState, useEffect, useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
  const transformRef = useRef(null);

  const [imageDimensions, setImageDimensions] = useState({
    width: 1920,
    height: 1080,
  });

  const [minScale, setMinScale] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /* ───────────────── image sizing ───────────────── */

  const handleImageLoad = (e) => {
    setImageDimensions({
      width: e.target.naturalWidth,
      height: e.target.naturalHeight,
    });
  };

  const computeMinScale = () => {
    if (typeof window === "undefined") return 1;

    return Math.max(
      window.innerWidth / imageDimensions.width,
      window.innerHeight / imageDimensions.height
    );
  };

  useEffect(() => {
    const update = () => setMinScale(computeMinScale());
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [imageDimensions]);

  /* ───────────────── transform clamp ───────────────── */

  const clampTransform = (ref) => {
    if (!ref || typeof window === "undefined") return;

    const { positionX, positionY, scale } = ref.state;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const imgW = imageDimensions.width * scale;
    const imgH = imageDimensions.height * scale;

    const minX = vw - imgW;
    const minY = vh - imgH;

    let x = positionX;
    let y = positionY;
    let s = scale;

    if (s < minScale) s = minScale;
    if (x > 0) x = 0;
    if (y > 0) y = 0;
    if (x < minX) x = minX;
    if (y < minY) y = minY;

    if (x !== positionX || y !== positionY || s !== scale) {
      ref.setTransform(x, y, s, 0);
    }
  };

  /* ───────────────── buttons ───────────────── */

  const buttons = [
    { id: 101, x: 65, y: 30, image: "/Memories.png", scale: 3.5, rotation: 20, route: "/Memories" },
    { id: 102, x: 10, y: 60, image: "/Time.png", scale: 3, rotation: 0, route: "/Time" },
    { id: 103, x: 70, y: 70, image: "/Letter.png", scale: 2, rotation: 0, route: "/Letter" },
    { id: 104, x: 50, y: 50, image: "/Heart2.png", scale: 4, rotation: 0, route: "/Love" },
    { id: 105, x: 90, y: 20, image: "/Secret.png", scale: 1, rotation: 0, route: "/Goals" },

    { id: 201, x: 25, y: 24, image: "/Polaroid1.png", scale: 1.5, rotation: 0 },
    { id: 202, x: 27, y: 32, image: "/Polaroid2.png", scale: 1.5, rotation: -5 },
    { id: 203, x: 31, y: 25, image: "/Polaroid3.png", scale: 1.5, rotation: 2 },
    { id: 204, x: 35, y: 31, image: "/Polaroid4.png", scale: 1.5, rotation: 0 },
    { id: 205, x: 31, y: 37, image: "/Polaroid5.png", scale: 1.5, rotation: -2 },
    { id: 206, x: 26, y: 40, image: "/Polaroid6.png", scale: 1.5, rotation: -5 },
    { id: 207, x: 34, y: 43, image: "/Polaroid7.png", scale: 1.5, rotation: 5 },
    { id: 208, x: 34, y: 70, image: "/Polaroid8.png", scale: 1.5, rotation: -2 },
    { id: 209, x: 32, y: 62, image: "/Polaroid9.png", scale: 1.5, rotation: 0 },
    { id: 210, x: 27, y: 69, image: "/Polaroid10.png", scale: 1.5, rotation: 2 },
    { id: 211, x: 25, y: 60, image: "/Polaroid11.png", scale: 1.5, rotation: 0 },
    { id: 212, x: 29, y: 50, image: "/Polaroid12.png", scale: 1.5, rotation: 5 },
    { id: 213, x: 35, y: 51, image: "/Polaroid13.png", scale: 1.5, rotation: 0 },
    { id: 214, x: 40, y: 24, image: "/Polaroid14.png", scale: 1.5, rotation: 2 },

    { id: 301, x: 17, y: 45, image: "/Sticker1.png", scale: 1, rotation: 0 },
    { id: 302, x: 15, y: 78, image: "/Sticker2.png", scale: 1, rotation: 0 },
    { id: 303, x: 38, y: 95, image: "/Sticker3.png", scale: 1, rotation: 0 },
    { id: 304, x: 78, y: 94, image: "/Sticker4.png", scale: 1, rotation: 0 },
    { id: 305, x: 85, y: 70, image: "/Sticker5.png", scale: 1, rotation: 0 },
    { id: 306, x: 94, y: 40, image: "/Sticker6.png", scale: 1, rotation: 0 },
    { id: 307, x: 31, y: 75, image: "/Sticker7.png", scale: 1, rotation: 0 },
    { id: 308, x: 31, y: 12, image: "/Sticker8.png", scale: 1, rotation: 0 },

    { id: 1, x: 37, y: 37, image: "/Doodle2.svg", scale: 1.5, rotation: -5 },
    { id: 2, x: 38, y: 70, image: "/Doodle1.svg", scale: 1.5, rotation: -10 },
  ];

  /* ───────────────── navigation ───────────────── */

  const handleButtonClick = (button) => {
    if (!button.route) return;

    setIsTransitioning(true);
    setTimeout(() => {
      router.push(button.route);
    }, 450);
  };

  /* ───────────────── render ───────────────── */

  return (
    <div
      className={`fixed inset-0 overflow-hidden transition-opacity duration-500 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <TransformWrapper
        ref={transformRef}
        initialScale={minScale}
        minScale={minScale}
        maxScale={5}
        limitToBounds={false}
        centerOnInit
        panning={{ velocityDisabled: true }}
        alignmentAnimation={{ disabled: true }}
        onPanningStart={() => !isPanning && setIsPanning(true)}
        onPanningStop={() => isPanning && setIsPanning(false)}
        onTransformed={clampTransform}
      >
        <TransformComponent
          wrapperClass={`w-full h-full ${
            isPanning ? "cursor-grabbing" : "cursor-grab"
          }`}
          contentClass="relative"
        >
          <div
            className="relative"
            style={{
              width: imageDimensions.width,
              height: imageDimensions.height,
            }}
          >
            <img
              src="/bg.svg"
              alt="Background"
              onLoad={handleImageLoad}
              draggable={false}
              style={{
                width: imageDimensions.width,
                height: imageDimensions.height,
                userSelect: "none",
                pointerEvents: "none",
              }}
            />

            {buttons.map((b) => {
              const BASE_SIZE = 80;
              const size = BASE_SIZE * b.scale;
              const clickable = !!b.route;

              /* ───── decorative only ───── */
              if (!clickable) {
                return (
                  <div
                    key={b.id}
                    className="absolute pointer-events-none"
                    style={{
                      left: `${b.x}%`,
                      top: `${b.y}%`,
                      transform: "translate(-50%, -50%)",
                      width: size,
                      height: size,
                    }}
                  >
                    <img
                      src={b.image}
                      draggable={false}
                      style={{
                        width: "100%",
                        height: "100%",
                        transform: `rotate(${b.rotation}deg)`,
                      }}
                    />
                  </div>
                );
              }

              /* ───── interactive ───── */
              return (
                <div
                  key={b.id}
                  className="absolute"
                  style={{
                    left: `${b.x}%`,
                    top: `${b.y}%`,
                    transform: "translate(-50%, -50%)",
                    width: size,
                    height: size,
                  }}
                >
                  <button
                    onClick={() => handleButtonClick(b)}
                    className="
                      w-full h-full
                      cursor-pointer
                      transition-transform duration-200 ease-out
                      hover:scale-105
                    "
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      transformOrigin: "center center",
                    }}
                  >
                    <img
                      src={b.image}
                      draggable={false}
                      style={{
                        width: "100%",
                        height: "100%",
                        transform: `rotate(${b.rotation}deg)`,
                        pointerEvents: "none",
                      }}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}