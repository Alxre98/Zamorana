"use client";

import { useEffect, useState } from "react";
import styles from "./DigitalText.module.css";

interface DigitalTextProps {
  text: string;
  position: { top?: string; right?: string; bottom?: string; left?: string };
  delay?: number;
  duration?: number;
  size?: "xs" | "sm" | "base" | "lg";
  className?: string;
}

export const DigitalText: React.FC<DigitalTextProps> = ({
  text,
  position,
  delay = 0,
  duration = 3000,
  size = "xs",
  className = "",
}) => {
  const [visible, setVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100; // Velocidad de escritura (ms)
    const deleteSpeed = 50; // Velocidad de borrado (ms)
    const pauseBeforeDelete = duration; // Usa la prop duration para la pausa antes de borrar
    const pauseBetweenCycles = 3000; // Pausa entre ciclos (ms)

    let timeout: NodeJS.Timeout;

    if (!visible) {
      // Espera inicial basada en el delay
      timeout = setTimeout(() => setVisible(true), delay);
    } else if (isDeleting) {
      // Efecto de borrado
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText(text.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, deleteSpeed);
      } else {
        // Terminó de borrar, espera y comienza de nuevo
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIndex(0);
          setCurrentText("");
        }, pauseBetweenCycles);
      }
    } else {
      // Efecto de escritura
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setCurrentText(text.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, typeSpeed);
      } else {
        // Terminó de escribir, espera y comienza a borrar
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, isDeleting, text, visible, duration]);

  if (!visible) return null;

  const sizeClassMap = {
    xs: styles.textXs,
    sm: styles.textSm,
    base: styles.textBase,
    lg: styles.textLg,
  };

  return (
    <div
      className={`${styles.digitalText} ${sizeClassMap[size]} ${className}`}
      style={{
        ...position,
        opacity: visible ? 1 : 0,
      }}
    >
      {currentText}
      <span className="animate-pulse">|</span>
    </div>
  );
};
