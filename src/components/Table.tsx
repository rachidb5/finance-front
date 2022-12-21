import {
  Box,
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import TableLine from "./TableLine";


export const TableL = () => {

  const { items } = useContext(AppContext);
  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="25px"
      padding="15px"
      marginTop="20px"
    >
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Tipo</Th>
              <Th>Categoria</Th>
              <Th>Valor</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map(i =><TableLine titulo={i.titulo} tipo={i.tipo} valor={i.valor} categoria={i.categoria}/> )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
