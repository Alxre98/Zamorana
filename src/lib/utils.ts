/**
 * Formatea una fecha en formato "DD_MM_YYYY" a "DD MMM YYYY"
 * @param dateStr - Fecha en formato "DD_MM_YYYY"
 * @returns Fecha formateada como "DD MMM YYYY"
 */
export const getFormattedDate = (dateStr: string): string => {
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  
  try {
    const [day, month, year] = dateStr.split("_");
    return `${day} ${months[parseInt(month) - 1]} ${year}`;
  } catch (error) {
    console.error("Error al formatear la fecha:", error);
    return dateStr; // Devuelve el string original si hay un error
  }
};

/**
 * Utilidad para formatear duraciones en segundos a formato MM:SS
 * @param seconds - Duración en segundos
 * @returns String formateado como MM:SS
 */
export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};
