type Props = {
    children: React.ReactNode
}
const TodoList = (props : Props) => {
  return (
    <ul>
        {props.children}
    </ul>
  )
}

export default TodoList