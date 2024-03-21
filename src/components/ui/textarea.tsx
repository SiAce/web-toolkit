import * as React from "react"

import { cn } from "@/lib/utils"
import { CheckIcon, ClipboardCopyIcon } from "@radix-ui/react-icons"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const [hasCopied, setHasCopied] = React.useState(false);
    React.useEffect(() => {
      setTimeout(() => {
        setHasCopied(false)
      }, 2000)
    }, [hasCopied])

    return (
      <div className="relative">
        <textarea
          className={cn(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <button className="flex justify-center items-center border-[1px] border-zinc-700 rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 bg-muted hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
          onClick={() => {
            navigator.clipboard.writeText(String(props.value));
            setHasCopied(true);
          }}
        >
          {
            hasCopied
              ? <CheckIcon className=" text-muted-foreground" />
              : <ClipboardCopyIcon className=" text-muted-foreground"/>
          }
        </button>
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
