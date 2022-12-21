import { Box, Center, Input, Select, SimpleGrid } from "@chakra-ui/react";
import { json } from "node:stream/consumers";
import { useContext, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import { TableL } from "../components/Table";
import DButton from "../components/DButton";
//import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";
import { add } from "../services/transactions";

const Home = () => {
    const { setIsLoggedIn, email, setEmail, senha, setSenha } =
        useContext(AppContext);
    const [titulo, setTitulo] = useState("");
    const [tipo, setTipo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [valor, setValor] = useState("");
    const newOp = () =>{
        const op = add(titulo, tipo, categoria, parseInt(valor))
        console.log(JSON.parse(op))
    }
  return (
    <Box padding="25px">
      <Card>
        <SimpleGrid columns={2} spacing={10}>
          <Input
            placeholder="Titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
          <Select placeholder="Tipo" onChange={(event) => setTipo(event.target.value)}>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </Select>
          <Input
            placeholder="Categoria"
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
          />
          <CurrencyInput
            name="input-name"
            placeholder="Valor"
            defaultValue={10}
            prefix="R$"
            decimalSeparator=","
            decimalsLimit={2}
            onValueChange={(value: any) => setValor(value)}
          />
        </SimpleGrid>
        <Center>
          <DButton onClick={() => newOp()} />
        </Center>
      </Card>
      <TableL />
    </Box>
  );
};

export default Home;
