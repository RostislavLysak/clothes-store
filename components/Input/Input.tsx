const styles = 'p-2 m-2 w-64 text-black rounded-md'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps) => {
  return <input className={`${styles} ${props.className}`} {...props} />
}

export default Input
