import { classNames } from "../../utils/classNames"
import Icon from "./Icon"

interface ICheckboxProps {
  checked: boolean
  disabled?: boolean

  onClick: () => void
}

export default function Checkbox(props: ICheckboxProps) {
  const handleClick = () => {
    if (!props.disabled && typeof props.onClick === "function") props.onClick()
  }

  return (
    <div
      onClick={handleClick}
      className={classNames(
        "w-6 h-6 cursor-pointer",
        "border border-transparent",
        "grid place-items-center rounded-lg",
        "transition duration-100 ease-in-out",

        props.disabled && "pointer-events-none opacity-50",
        props.checked
          ? "bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-300"
          : "bg-gray-800 hover:bg-gray-700 active:bg-gray-600"
      )}
    >
      <Icon
        name="Tick"
        width={22}
        height={22}
        className={classNames(
          "transition duration-100 ease-in-out",
          !props.checked && "opacity-0"
        )}
      />
    </div>
  )
}
