// src/components/dialog-simple.tsx
import React, { useEffect, useRef } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string; // Untuk custom styling tambahan
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Efek untuk menangani event 'Escape' key dan klik di luar dialog
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      // Opsional: disable scrolling pada body saat dialog terbuka
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      // Mengembalikan scrolling pada body
      document.body.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div
        ref={dialogRef}
        className={` rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative
          transform transition-all duration-300 ease-out scale-95 opacity-0 ${
            isOpen ? "scale-100 opacity-100" : ""
          }
          ${className || ""} `}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none"
          aria-label="Close dialog"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};
