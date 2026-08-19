import React from 'react';

export type KiwiPose = 'idle' | 'vibing' | 'dancing' | 'flying' | 'hacking' | 'guarding' | 'sleeping';

export interface KiwiMascotProps extends React.SVGProps<SVGSVGElement> {
  pose?: KiwiPose;
  size?: number | string;
}

/**
 * Kiwi Chunky Chibi Mascot Component with multi-pose support.
 */
export const KiwiMascot: React.FC<KiwiMascotProps> = ({
  pose = 'idle',
  size = 32,
  className,
  style,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className={className}
      style={{ imageRendering: 'pixelated', ...style }}
      aria-hidden="true"
      {...props}
    >
      {/* Body Greens */}
      <rect x="5" y="2" width="5" height="1" fill="#88BC38" />
      <rect x="3" y="3" width="8" height="1" fill="#93C645" />
      <rect x="2" y="4" width="9" height="1" fill="#93C645" />
      <rect x="2" y="5" width="9" height="1" fill="#93C645" />
      <rect x="1" y="6" width="10" height="1" fill="#93C645" />
      <rect x="1" y="7" width="10" height="1" fill="#93C645" />
      <rect x="2" y="8" width="9" height="1" fill="#88BC38" />
      <rect x="2" y="9" width="9" height="1" fill="#78A832" />
      <rect x="3" y="10" width="7" height="1" fill="#6A962A" />

      {/* Eyes */}
      {pose === 'sleeping' ? (
        <rect x="7" y="5" width="3" height="1" fill="#111816" />
      ) : pose === 'dancing' ? (
        <>
          <rect x="7" y="4" width="3" height="1" fill="#111816" />
          <rect x="6" y="5" width="1" height="1" fill="#111816" />
          <rect x="10" y="5" width="1" height="1" fill="#111816" />
        </>
      ) : (
        <>
          <rect x="7" y="4" width="2" height="2" fill="#111816" />
          <rect x="7" y="4" width="1" height="1" fill="#FFFFFF" />
        </>
      )}

      {/* Beak */}
      <rect x="11" y="5" width="3" height="2" fill="#FFAA28" />
      <rect x="14" y="6" width="1" height="1" fill="#E89115" />

      {/* Feet */}
      {pose === 'dancing' ? (
        <>
          <rect x="3" y="12" width="2" height="2" fill="#FFAA28" />
          <rect x="2" y="13" width="3" height="1" fill="#FFAA28" />
          <rect x="9" y="11" width="2" height="2" fill="#FFAA28" />
          <rect x="9" y="12" width="3" height="1" fill="#FFAA28" />
        </>
      ) : pose === 'flying' ? (
        <>
          <rect x="4" y="11" width="3" height="1" fill="#FFAA28" />
          <rect x="8" y="11" width="3" height="1" fill="#FFAA28" />
        </>
      ) : (
        <>
          <rect x="4" y="12" width="2" height="2" fill="#FFAA28" />
          <rect x="3" y="13" width="3" height="1" fill="#FFAA28" />
          <rect x="8" y="12" width="2" height="2" fill="#FFAA28" />
          <rect x="7" y="13" width="3" height="1" fill="#FFAA28" />
        </>
      )}

      {/* Accessories */}
      {pose === 'vibing' && (
        <>
          <rect x="4" y="1" width="5" height="1" fill="#FF4D6D" />
          <rect x="3" y="2" width="1" height="3" fill="#FF4D6D" />
          <rect x="9" y="2" width="1" height="3" fill="#FF4D6D" />
          <rect x="2" y="4" width="1" height="3" fill="#00E5FF" />
          <rect x="9" y="4" width="1" height="3" fill="#00E5FF" />
          <rect x="6" y="4" width="4" height="2" fill="#090D0B" />
          <rect x="6" y="4" width="1" height="1" fill="#00E5FF" />
          <rect x="8" y="4" width="1" height="1" fill="#00E5FF" />
        </>
      )}

      {pose === 'hacking' && (
        <>
          <rect x="7" y="3" width="3" height="3" fill="none" stroke="#FFAA28" strokeWidth={0.8} />
          <rect x="10" y="6" width="1" height="1" fill="#FFAA28" />
        </>
      )}

      {pose === 'guarding' && (
        <>
          <rect x="0" y="4" width="3" height="5" fill="#4FB477" />
          <rect x="1" y="5" width="1" height="3" fill="#FFFFFF" />
        </>
      )}

      {pose === 'flying' && (
        <>
          <rect x="0" y="5" width="2" height="2" fill="#3D5A12" />
          <rect x="0" y="7" width="1" height="3" fill="#FF4D6D" />
          <rect x="1" y="7" width="1" height="2" fill="#FFAA28" />
          <rect x="0" y="10" width="1" height="2" fill="#FFB703" />
        </>
      )}

      {pose === 'dancing' && (
        <>
          <rect x="1" y="4" width="1" height="2" fill="#88BC38" />
          <rect x="0" y="3" width="1" height="1" fill="#88BC38" />
        </>
      )}
    </svg>
  );
};
