import { Box } from "@chakra-ui/react"

export const Layout = ({ children }: any) => {
  return(
    <Box minHeight='100vh' backgroundColor='#9413dc' >
      { children }
    </Box>
  )
}
