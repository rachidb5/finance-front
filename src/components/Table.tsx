import {
  Box,
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
  Tbody,
  Input,
  Select,
  SimpleGrid
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import TableLine from "./TableLine";
import { sum } from "../services/transactions";

export const TableL = () => {
    const [tituloFiltro, setTituloFiltro] = useState('')
    const [categoriaFiltro, setCategoriaFiltro] = useState('')
    const [tipoFiltro, setTipoFiltro] = useState('')
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const { items, setItems } = useContext(AppContext);
    let filtered = items
    
    if(tituloFiltro !== ''){
      filtered = filtered.filter(f => f.titulo.includes(tituloFiltro))
    }
    if(categoriaFiltro !== ''){
      filtered = filtered.filter(f => f.categoria.includes(categoriaFiltro))
    }
    if(tipoFiltro === 'Entrada'){
      filtered = filtered.filter(f => f.tipo === 'Entrada')
    }

    if(min > 0 ){
      filtered = filtered.filter(f => f.valor > min)
    }
    if(max > 0 ){
      filtered = filtered.filter(f => f.valor < max)
    }
    else if(tipoFiltro === 'Saída'){
      filtered = filtered.filter(f => f.tipo === 'Saída')
    } else {
      filtered = filtered
    }
    /*const filterTitulo = (t:string) => {
        setTituloFiltro(t)
        let titulos = items.filter((i: { titulo: string, categoria: string, tipo: string }) => {
            i.titulo.includes(t) && i.categoria.includes(categoriaFiltro)
        }) 
        if(t !=='' && tituloFiltro){
            setItems(titulos)
        } else{
            setItems(JSON.parse(localStorage.getItem('transactions') || '[]').filter((i: {categoria: string; }) => i.categoria.includes(categoriaFiltro)))
        }
    }
    const filterCategoria = (t:string) => {
        setCategoriaFiltro(t)
        let titulos = items.filter((i: {titulo: string, categoria: string, tipo:string }) => {
            i.categoria.includes(t) && i.titulo.includes(tituloFiltro)
        }) 
        if(t !=='' && tituloFiltro){
            setItems(titulos)
        } else{
            setItems(JSON.parse(localStorage.getItem('transactions') || '[]').filter((i: {titulo: string }) => i.titulo.includes(tituloFiltro)))
        }
    }
    const selectType = (n: string) =>{
        setTipoFiltro(n)
        setItems(JSON.parse(localStorage.getItem('transactions') || '[]').filter((i: {titulo: string, categoria: string, tipo: string }) => {
            i.categoria.includes(categoriaFiltro) && i.titulo.includes(tituloFiltro) && i.tipo.includes(n)
        }))
    }*/
  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="25px"
      padding="15px"
      marginTop="20px"
    >
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
            {filtered.map(i =><TableLine key={i.id} titulo={i.titulo} tipo={i.tipo} valor={i.valor} categoria={i.categoria}/> )}
          </Tbody>
        </Table>
      </TableContainer>
      <h1>Valor total: R$ {sum(filtered)}</h1>
    </Box>
  );
};
