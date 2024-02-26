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
	const errorRef = useRef<HTMLParagraphElement>(null)

	const handleClick = () => {
		const text = todoRef.current?.value
		if (text && text !== '') {
			const newTodo: todoType = {
				id: Date.now(),
				title: text,
			}
			dispatch(addTodo(newTodo))

			todoRef.current.value = ''

			if (errorRef.current) {
				errorRef.current.innerText = ''
			}
		} else {
			if (errorRef.current) {
				errorRef.current.innerText = '투두를 입력해주세요.'
			}
		}
	}

	return (
		<S.Container>
			<h1>Todo List</h1>
			<S.AddContainer>
				<S.TodoInput type="text" placeholder="✍️ 투두 작성..." ref={todoRef} />
				<S.AddTodoButton onClick={handleClick}>Add</S.AddTodoButton>
			</S.AddContainer>
			<S.ErrorContainer ref={errorRef}></S.ErrorContainer>
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

const ErrorContainer = styled.p`
	width: 100%;
	color: red;
`

const S = {
	Container,
	AddContainer,
	TodoInput,
	AddTodoButton,
	ErrorContainer,
}
