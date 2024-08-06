import { Container } from "@mui/material"
import { GridListNotices } from "../components/GridListNotices"
import { noticesCreated } from "../data/news"
import { Header } from "../../common/components/Header"

export const ListNoticies = () => {
  return (
    <Container maxWidth="xl" sx={{ margin: "10px auto 20px"}}>
        <Header />
        <Container maxWidth="md" sx={{ margin: "50px auto"}}>
          <GridListNotices notices={ noticesCreated } />
        </Container>
    </Container>
  )
}
