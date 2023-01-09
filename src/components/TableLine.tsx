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
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "./AppContext";

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
  const [idItem, setIdItem] = useState(1);
  const [tituloFiltro, setTituloFiltro] = useState('')
  const [categoriaFiltro, setCategoriaFiltro] = useState('')
  const [tipoFiltro, setTipoFiltro] = useState('')
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const remove = () => {
    setItems(items.filter((i) => i.titulo !== props.titulo));
    localStorage.setItem(
      "transactions",
      JSON.stringify(items.filter((i) => i.titulo !== props.titulo))
    );
  };
  const openModal = (id: number) => {
    onOpen()
    setIdItem(id);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <span>tesst</span>
          <span>{idItem}</span>
          <SimpleGrid columns={2} spacing={10} >
          <Input
            placeholder="Pesquisa por título"
            onChange={(event) => setTituloFiltro(event.target.value)}
          />
          <Input
            placeholder="Pesquisa por categoria"
            onChange={(event) => setCategoriaFiltro(event.target.value)}
          />
            <Select placeholder="Tipo" onChange={(event) => setTipoFiltro(event.target.value)}>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
          </Select>
          <SimpleGrid columns={2} spacing={5}>  
          <Input
            placeholder="min $$$"
            onChange={(event) => setMin(parseFloat(event.target.value))}
          />
          <Input
            placeholder="max $$$"
            onChange={(event) => setMax(parseFloat(event.target.value))}
          />
          </SimpleGrid>
        </SimpleGrid>
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
