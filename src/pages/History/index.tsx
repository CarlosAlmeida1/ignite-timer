import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'
import { useContext } from 'react'

const renderStatus = (statusColor, children) => (
  <Status statusColor={statusColor}>{children}</Status>
)

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>{renderStatus('green', 'Concluído')}</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>{renderStatus('red', 'Interrompido')}</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>{renderStatus('yellow', 'Em andamento')}</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>{renderStatus('yellow', 'Em andamento')}</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
