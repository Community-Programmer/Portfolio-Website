const tailwindColors = [
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink',
  'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone'
];

const tailwindShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800'];

export function getRandomTailwindColorClass(prefix = 'bg'): string {
  const randomColorName = tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
  const randomShade = tailwindShades[Math.floor(Math.random() * tailwindShades.length)];
  return `${prefix}-${randomColorName}-${randomShade}`;
}
