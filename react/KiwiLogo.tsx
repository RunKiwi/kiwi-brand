import React from 'react';

export interface KiwiLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  monochrome?: boolean;
}

/**
 * Kiwi Official 8-Bit Chunky Chibi Logo Component.
 */
export const KiwiLogo: React.FC<KiwiLogoProps> = ({
  size = 32,
  monochrome = false,
  className,
  style,
  ...props
}) => {
  if (monochrome) {
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
        <g fill="currentColor">
          <rect x="5" y="2" width="5" height="1" opacity={0.8} />
          <rect x="3" y="3" width="8" height="1" opacity={0.9} />
          <rect x="2" y="4" width="5" height="1" opacity={1.0} />
          <rect x="9" y="4" width="2" height="1" opacity={1.0} />
          <rect x="2" y="5" width="9" height="1" opacity={1.0} />
          <rect x="1" y="6" width="10" height="1" opacity={0.95} />
          <rect x="1" y="7" width="10" height="1" opacity={0.95} />
          <rect x="2" y="8" width="9" height="1" opacity={0.85} />
          <rect x="2" y="9" width="9" height="1" opacity={0.8} />
          <rect x="3" y="10" width="7" height="1" opacity={0.7} />
          <rect x="4" y="11" width="5" height="1" opacity={0.6} />
          <rect x="11" y="5" width="3" height="2" opacity={0.95} />
          <rect x="14" y="6" width="1" height="1" opacity={0.8} />
          <rect x="4" y="12" width="2" height="2" opacity={0.9} />
          <rect x="3" y="13" width="3" height="1" opacity={0.9} />
          <rect x="8" y="12" width="2" height="2" opacity={0.9} />
          <rect x="7" y="13" width="3" height="1" opacity={0.9} />
        </g>
        <rect x="7" y="4" width="1" height="1" fill="#FFFFFF" opacity={0.95} />
      </svg>
    );
  }

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
      <rect x="5" y="2" width="5" height="1" fill="#88BC38" />
      <rect x="3" y="3" width="8" height="1" fill="#93C645" />
      <rect x="2" y="4" width="9" height="1" fill="#93C645" />
      <rect x="2" y="5" width="9" height="1" fill="#93C645" />
      <rect x="1" y="6" width="10" height="1" fill="#93C645" />
      <rect x="1" y="7" width="10" height="1" fill="#93C645" />
      <rect x="2" y="8" width="9" height="1" fill="#88BC38" />
      <rect x="2" y="9" width="9" height="1" fill="#78A832" />
      <rect x="3" y="10" width="7" height="1" fill="#6A962A" />
      <rect x="4" y="11" width="5" height="1" fill="#5A8222" />
      <rect x="7" y="4" width="2" height="2" fill="#111816" />
      <rect x="7" y="4" width="1" height="1" fill="#FFFFFF" />
      <rect x="11" y="5" width="3" height="2" fill="#FFAA28" />
      <rect x="14" y="6" width="1" height="1" fill="#E89115" />
      <rect x="4" y="12" width="2" height="2" fill="#FFAA28" />
      <rect x="3" y="13" width="3" height="1" fill="#FFAA28" />
      <rect x="8" y="12" width="2" height="2" fill="#FFAA28" />
      <rect x="7" y="13" width="3" height="1" fill="#FFAA28" />
    </svg>
  );
};
