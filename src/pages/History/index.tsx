import { HistoryContainer, HistoryList, Status } from './styles'

const renderStatus = (statusColor, children) => (
  <Status statusColor={statusColor}>{children}</Status>
)

export function History() {
  return (
    <HistoryContainer>
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
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
