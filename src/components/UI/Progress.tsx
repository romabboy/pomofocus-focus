import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import clsx from "clsx"

type ProgressPrimitiveProps = React.ComponentProps<typeof ProgressPrimitive.Root>

const Progress: React.FC<ProgressPrimitiveProps> = ({className, value, ...props}) => {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={clsx(
        "bg-white opacity-15 relative h-0.5 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-black h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(${100 - (value || 0)}%)`}}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
