import { removeTodo } from '../..//store/slice'
import { todoType } from '@/types'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

export default function Todo({ todo }: { todo: todoType }) {
	const dispatch = useDispatch()

	return (
		<S.Container>
			<S.Title>{todo.title}</S.Title>
			<S.Button onClick={() => dispatch(removeTodo(todo.id))}>Delete</S.Button>
		</S.Container>
	)
}

const Container = styled.div`
	width: 19rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #d7d7d7;
	border-radius: 0.5rem;
	padding: 0.5rem;
	margin: 0.5rem;
`

const Title = styled.p`
	word-wrap: break-word;
	white-space: normal;
	max-width: 14rem;
`

const Button = styled.button`
	margin: 0.5rem;
`

const S = {
	Container,
	Title,
	Button,
}
