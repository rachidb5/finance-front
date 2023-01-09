import {
  useDisclosure,
  Tr,
  Td,
  Input,
  Select,
  SimpleGrid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { getById } from "../services/transactions";

type Props = {
  id: number;
  titulo: string;
  tipo: string;
  valor: number;
  categoria: string;
};
function TableLine(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { items, setItems } = useContext(AppContext);
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tipo, setTipo] = useState("");
  const [id, setId] = useState(0);
  const [valor, setValor] = useState(0);
  const remove = () => {
    setItems(items.filter((i) => i.titulo !== props.titulo));
    localStorage.setItem(
      "transactions",
      JSON.stringify(items.filter((i) => i.titulo !== props.titulo))
    );
  };
  const openModal = (id: number) => {
    const item = getById(id)
    setTitulo(item.titulo)
    setCategoria(item.categoria)
    setTipo(item.tipo)
    setValor(item.valor)
    setId(item.id)
    onOpen();
  };
  const save = () =>{
    let editedArr = JSON.parse(localStorage.getItem('transactions') || '[]').filter((i: { id: number }) => i.id !== id)
    editedArr.push({
      id,
      titulo,
      tipo,
      categoria,
      valor
    })
    localStorage.setItem('transactions', JSON.stringify(editedArr))
    setItems(editedArr)
    onClose()
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar</ModalHeader>
          <ModalBody>
            <SimpleGrid columns={2} spacing={10}>
              <Input
                placeholder="Pesquisa por título"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
              />
              <Input
                placeholder="Pesquisa por categoria"
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
              />
              <Select
                placeholder="Tipo"
                value={tipo}
                onChange={(event) => setTipo(event.target.value)}
              >
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
              </Select>
                <Input
                  placeholder="valor $$$"
                  value={valor}
                  onChange={(event) => setValor(parseFloat(event.target.value))}
                />
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => save()}>
              Salvar
            </Button>
            <Button colorScheme='red' onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Tr>
        <Td role="titulo">{props.titulo}</Td>
        <Td role="tipo">{props.tipo}</Td>
        <Td role="categoria">{props.categoria}</Td>
        <Td role="valor">{props.valor}</Td>
        <Td role="ações">
          <Button colorScheme="red" onClick={() => remove()}>
            Remover
          </Button>
          <Button colorScheme="blue" onClick={() => openModal(props.id)}>
            Editar
          </Button>
        </Td>
      </Tr>
    </>
  );
}

export default TableLine;
