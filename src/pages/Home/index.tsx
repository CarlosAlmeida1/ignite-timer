import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartContdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor=''>Vou trabalhar em</label>
          <TaskInput
            id='task'
            placeholder='Dê um nome para o seu projeto'
            list='task-sugestion'
          />

          <datalist id='task-sugestion'>
            <option value='Projeto 1'></option>
            <option value='Projeto 2'></option>
            <option value='Projeto 3'></option>
          </datalist>

          <label htmlFor=''>Durante</label>
          <MinutesAmountInput
            type='number'
            id='minutesAmount'
            placeholder='00'
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartContdownButton type='submit' disabled>
          <Play size={24} />
          Começar
        </StartContdownButton>
      </form>
    </HomeContainer>
  )
}
