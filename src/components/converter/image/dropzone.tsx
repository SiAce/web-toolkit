import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps, Dispatch, SetStateAction } from "react";

export interface DropzoneProps extends ComponentProps<"input"> {
  files: File[]
  setFiles: Dispatch<SetStateAction<File[]>>
}

export function Dropzone({files, setFiles, className, ...props }: DropzoneProps) {
  return (
    <div className={cn(
      "border-4 border-dashed rounded relative min-h-fit flex flex-col justify-center items-center text-muted-foreground",
      className
    )}>
      <div>Select or drop your file here</div>
      {
        files.length > 0
        && files.map((file, index) => (
          <div key={index} className="text-accent-foreground">
            <Image src={URL.createObjectURL(file)} alt={file.name} width={0} height={0}
              style={{
                width: "auto",
                height: '100%',
              }}
            />
          </div>
        ))
      }
      <input type="file" className="absolute inset-0 opacity-0" {...props}
        onChange={
          e => {
            const files = e.target.files;
            if (files && files.length > 0) {
              setFiles(Array.from(files))
            }
          }
        } />
    </div>
  )
}