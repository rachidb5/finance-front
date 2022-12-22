import {
    Tr,
    Td,
    Button
  } from "@chakra-ui/react";
import { useContext} from "react";
import { AppContext } from "./AppContext";

type Props = {
    titulo: string,
    tipo: string,
    valor: number,
    categoria: string,
}
function TableLine(props: Props){
    const {items, setItems } = useContext(AppContext)
    const remove = () => {
        setItems(items.filter(i => i.titulo !== props.titulo))
        localStorage.setItem('transactions', JSON.stringify(items.filter(i => i.titulo !== props.titulo)))
    }
    return(
        <Tr>
            <Td role="titulo">{props.titulo}</Td>
            <Td role="tipo">{props.tipo}</Td>
            <Td role="categoria">{props.categoria}</Td>
            <Td role="valor">{props.valor}</Td>
            <Td role="ações">
                <Button colorScheme='red' onClick={() => remove()}>Remover</Button>
                <Button colorScheme='blue' onClick={() => remove()}>Editar</Button>
            </Td>
        </Tr>
    )
}

export default TableLine