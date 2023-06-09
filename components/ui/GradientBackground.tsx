export const GradientBackground = () => {
  return (
    <>
      <svg
        className="pointer-events-none fixed isolate z-50 opacity-10 bg-slate-900 "
        width="100%"
        height="100%"
      >
        <rect width="100%" height="100%"></rect>
      </svg>

      <svg
        className="pointer-events-none fixed isolate z-50 opacity-20   bg-gradient-to-r from-slate-900/90 via-sky-500/90 to-blue-500/90 "
        width="100%"
        height="100%"
      >
        <filter id="noisebackground">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noisebackground)"></rect>
      </svg>
    </>
  );
};
