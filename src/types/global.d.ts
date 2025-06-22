// Asegura que TypeScript reconozca las importaciones con el alias @/
declare module '@/lib/*' {
  const value: unknown;
  export default value;
}

// Para módulos específicos
declare module '@/lib/utils' {
  export function getFormattedDate(dateStr: string): string;
  export function formatDuration(seconds: number): string;
}
