import React from 'react';

const maskStyles = {
  'fade-edges': { maskImage: 'radial-gradient(ellipse at center, var(--background), transparent)', WebkitMaskImage: 'radial-gradient(ellipse at center, var(--background), transparent)' },
  'fade-center': { maskImage: 'radial-gradient(ellipse at center, transparent, var(--background))', WebkitMaskImage: 'radial-gradient(ellipse at center, transparent, var(--background))' },
  'fade-top': { maskImage: 'linear-gradient(to bottom, transparent, var(--background))', WebkitMaskImage: 'linear-gradient(to bottom, transparent, var(--background))' },
  'fade-bottom': { maskImage: 'linear-gradient(to bottom, var(--background), transparent)', WebkitMaskImage: 'linear-gradient(to bottom, var(--background), transparent)' },
  'fade-left': { maskImage: 'linear-gradient(to right, transparent, var(--background))', WebkitMaskImage: 'linear-gradient(to right, transparent, var(--background))' },
  'fade-right': { maskImage: 'linear-gradient(to right, var(--background), transparent)', WebkitMaskImage: 'linear-gradient(to right, var(--background), transparent)' },
  'fade-x': { maskImage: 'linear-gradient(to right, transparent, var(--background), transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, var(--background), transparent)' },
  'fade-y': { maskImage: 'linear-gradient(to bottom, transparent, var(--background), transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, var(--background), transparent)' },
  'none': {},
};

function getBgImage(variant, fill, size) {
  switch (variant) {
    case 'dots':
      return `radial-gradient(${fill} 1px, transparent 1px)`;
    case 'grid':
      return `linear-gradient(to right, ${fill} 1px, transparent 1px), linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
    case 'diagonal-stripes':
      return `repeating-linear-gradient(45deg, ${fill}, ${fill} 1px, transparent 1px, transparent ${size}px)`;
    case 'horizontal-lines':
      return `linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
    case 'vertical-lines':
      return `linear-gradient(to right, ${fill} 1px, transparent 1px)`;
    case 'checkerboard':
      return `linear-gradient(45deg, ${fill} 25%, transparent 25%), linear-gradient(-45deg, ${fill} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${fill} 75%), linear-gradient(-45deg, transparent 75%, ${fill} 75%)`;
    default:
      return undefined;
  }
}

export function BGPattern({
  variant = 'grid',
  mask = 'none',
  size = 24,
  fill = '#252525',
  className,
  style,
  ...props
}) {
  const bgSize = `${size}px ${size}px`;
  const backgroundImage = getBgImage(variant, fill, size);
  const maskStyle = maskStyles[mask] || {};

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        backgroundImage,
        backgroundSize: bgSize,
        ...maskStyle,
        ...style,
      }}
      {...props}
    />
  );
}

BGPattern.displayName = 'BGPattern';
