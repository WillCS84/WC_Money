import { Container } from "./style";

export function Transactiontable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <td>Desenvolvimento de Website</td>
          <td>R$ 12.000</td>
          <td>Desenvolvimento</td>
          <td>20/07/2022</td>
        </tbody>
      </table>
    </Container>
  );
}
