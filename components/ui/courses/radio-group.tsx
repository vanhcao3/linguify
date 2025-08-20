import * as React from "react"
import { cn } from "@/lib/utils"

type RadioGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: string
  onValueChange?: (value: string) => void
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, onValueChange, children, ...props }, ref) => (
    <div ref={ref} role="radiogroup" className={cn("grid gap-2", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        return React.cloneElement(child as any, {
          checkedValue: value,
          onCheckedChange: onValueChange,
        })
      })}
    </div>
  )
)
RadioGroup.displayName = "RadioGroup"

type RadioGroupItemProps = React.InputHTMLAttributes<HTMLInputElement> & {
  checkedValue?: string
  onCheckedChange?: (value: string) => void
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, id, value, checkedValue, onCheckedChange, ...props }, ref) => (
    <label htmlFor={id} className="inline-flex items-center gap-2 cursor-pointer">
      <input
        ref={ref}
        id={id}
        type="radio"
        className={cn(
          "h-4 w-4 rounded-full border border-primary text-primary focus:outline-none",
          className
        )}
        value={value}
        checked={checkedValue === value}
        onChange={(e) => onCheckedChange?.(e.target.value)}
        {...props}
      />
    </label>
  )
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }

