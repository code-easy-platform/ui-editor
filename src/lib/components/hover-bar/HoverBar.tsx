import { memo } from "react";


interface HoverBarProps {
  color?: string;
  zIndex?: number;
  height?: number;
  width?: number;
  left?: number;
  top?: number;
}
export const HoverBar: React.FC<HoverBarProps> = memo(({ zIndex = 0, top = -1000, left = -1000, width = 0, height = 0, color = '#4a87ee' }) => {
  return (
    <div
      data-hoverBar
      style={{
        top,
        left,
        position: 'fixed',
        border: 'thin solid',
        pointerEvents: 'none',

        width,
        height,
        zIndex: 5 + zIndex,
        borderColor: color,
      }}
    />
  );
});
