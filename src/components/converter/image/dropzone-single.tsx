import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps, Dispatch, SetStateAction } from "react";

export interface DropzoneSingleProps extends ComponentProps<"input"> {
  file: File | undefined
  setFile: Dispatch<SetStateAction<File | undefined>>
}

export function DropzoneSingle({ file, setFile, className, ...props }: DropzoneSingleProps) {
  return (
    <div className={cn(
      "border-4 border-dashed rounded relative min-h-fit flex flex-col justify-center items-center text-muted-foreground",
      className
    )}>
      <div>Select or drop your file here</div>
      {
        file &&
        <div className="text-accent-foreground">
          <Image src={URL.createObjectURL(file)} alt={file.name}
            width="0"
            height="0"
            className="w-full h-auto"
          />
        </div>
      }
      <input type="file" className="absolute inset-0 opacity-0" {...props}
        onChange={
          e => {
            const files = e.target.files;
            if (files && files.length > 0) {
              setFile(files[0])
            }
          }
        } />
    </div>
  )
}