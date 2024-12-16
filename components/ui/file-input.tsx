"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onFileSelect?: (files: FileList | null) => void;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, onFileSelect, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onFileSelect) {
        onFileSelect(e.target.files);
      }
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <input
        type="file"
        className={cn(
          "file:mr-4 file:py-2 file:px-4",
          "file:rounded-full file:border-0",
          "file:text-sm file:font-semibold",
          "file:bg-primary file:text-primary-foreground",
          "hover:file:bg-primary/90",
          className
        )}
        onChange={handleChange}
        ref={ref}
        {...props}
      />
    );
  }
);

FileInput.displayName = "FileInput";

export { FileInput };