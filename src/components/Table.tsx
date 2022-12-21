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

export const TableL = ({ children }: any) => {
  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
      { children }
      <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </Box>
  );
};
