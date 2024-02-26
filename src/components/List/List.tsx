import { useRef } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { todoType } from '@/types'

import Todo from '../Todo/Todo'
import { addTodo, selectTodo } from '../../store/slice'

export default function List() {
	const dispatch = useDispatch()
	const todoList = useSelector(selectTodo)
	const todoRef = useRef<HTMLInputElement>(null)

	const handleClick = () => {
		if (todoRef.current) {
			const newTodo: todoType = {
				id: Date.now(),
				title: todoRef.current.value,
			}

			dispatch(addTodo(newTodo))

			todoRef.current.value = ''
		}
	}

	return (
		<S.Container>
			<h1>Todo List</h1>
			<S.AddContainer>
				<S.TodoInput type="text" placeholder="✍️ 투두 작성..." ref={todoRef} />
				<S.AddTodoButton onClick={handleClick}>Add</S.AddTodoButton>
			</S.AddContainer>
			{todoList.length > 0 &&
				todoList.map((todo, idx) => {
					return <Todo key={idx} todo={todo} />
				})}
		</S.Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	width: 20rem;
`

const AddContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`

const TodoInput = styled.input`
	width: 70%;
	border-radius: 0.5rem;
	padding-left: 0.3rem;
`

const AddTodoButton = styled.button`
	border-radius: 0.5rem;
`

const S = {
	Container,
	AddContainer,
	TodoInput,
	AddTodoButton,
}
