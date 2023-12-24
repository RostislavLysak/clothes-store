interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const styles = 'px-2 py-1 mt-2 border rounded-md'

const Button = ({ ...props }: ButtonProps) => {
  return <button className={`${styles} ${props.className}`} {...props}>{props.children}</button>
}

export default Button
