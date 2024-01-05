import InputControl from '../InputControl/InputControl'
import PasswordControl from '../PasswordControl/PasswordControl'

export type TField = {
  disabled?: boolean
  disabledAnimated?: boolean
  helperText?: string
  label: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: 'password'
  value: string
}

interface FormControlProps extends React.FormHTMLAttributes<HTMLFormElement> {
  fields: TField[]
  onSubmit: (e: React.FormEvent) => void
}

const FormControl = ({
  fields,
  onSubmit,
  children,
  ...props
}: FormControlProps) => {
  return (
    <form onSubmit={onSubmit} {...props}>
      {fields.map((field) =>
        !field.type ? (
          <InputControl key={field.label} {...field} />
        ) : (
          <PasswordControl key={field.label} type={field.type} {...field} />
        ),
      )}
      {children}
    </form>
  )
}

export default FormControl
