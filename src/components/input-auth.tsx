/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputAuthProps {
  id: string,
  type: "text" | "password",
  autoComplete: "on" | "off",
  label: string,
  register: any,
  error?: string,
}

export default function InputAuth({ id, label, type, autoComplete, register, error }: InputAuthProps) {

  return (
    <>
      <div className="flex justify-between">
        <label htmlFor={id} className="text-gray-600 mt-2">
          {label}
        </label>
      </div>
      <div className={`relative block p-2 border-2 border-gray-300 rounded-md focus-visible::border-gray-600 ${error && "border-red-500"}`}>
        <input id={id} type={type} autoComplete={autoComplete ?? "off"} className={`border-none outline-none w-full`} {...register} />
      </div>
      {error && <p className="text-base text-red-400">{error}</p>}
    </>
  )
}
