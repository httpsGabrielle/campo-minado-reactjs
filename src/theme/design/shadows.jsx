// ----------------------------------------------------------------------

export default function shadows() {
  const baseColor = "rgba(145, 158, 171, 0.16)";

  return [
    "none",
    `0px 2px 1px -1px ${baseColor},0px 1px 1px 0px ${baseColor},0px 1px 3px 0px ${baseColor}`,
    `0px 3px 6px 0px ${baseColor}`,
    `0px 6px 12px 0px ${baseColor}`,
    `0px 8px 16px 0px ${baseColor}`,
    `0px 12px 24px -4px ${baseColor}`,
    `0px 16px 32px -4px ${baseColor}`,
    `0px 20px 40px -4px ${baseColor}`,
    `0px 24px 48px 0px ${baseColor}`,
    `0px 32px 64px 0px ${baseColor}`,
    `0px 40px 80px 0px ${baseColor}`,
    `0px 48px 96px 0px ${baseColor}`,
    `0px 56px 112px 0px ${baseColor}`,
    `0px 64px 128px 0px ${baseColor}`,
    `0px 72px 144px 0px ${baseColor}`,
    `0px 80px 160px 0px ${baseColor}`,
    `0px 88px 176px 0px ${baseColor}`,
    `0px 96px 192px 0px ${baseColor}`,
    `0px 104px 208px 0px ${baseColor}`,
    `0px 112px 224px 0px ${baseColor}`,
    `0px 120px 240px 0px ${baseColor}`,
    `0px 128px 256px 0px ${baseColor}`,
    `0px 136px 272px 0px ${baseColor}`,
    `0px 144px 288px 0px ${baseColor}`,
    `0px 152px 304px 0px ${baseColor}`,
    `0px 160px 320px 0px ${baseColor}`,
  ];
}

// Custom shadows para componentes específicos
export function customShadows() {
  const baseColor = "rgba(145, 158, 171, 0.16)";
  return {
    z1: `0px 1px 2px 0px ${baseColor}`,
    z8: `0px 8px 16px 0px ${baseColor}`,
    z12: `0px 12px 24px -4px ${baseColor}`,
    z16: `0px 16px 32px -4px ${baseColor}`,
    z20: `0px 20px 40px -4px ${baseColor}`,
    z24: `0px 24px 48px 0px ${baseColor}`,
    card: `0px 0px 2px 0px ${baseColor}, 0px 12px 24px -4px ${baseColor}`,
    dialog: `-40px 40px 80px 0px ${baseColor}`,
    dropdown: `0px 0px 2px 0px ${baseColor}, 0px 12px 24px -4px ${baseColor}`,
  };
}
