import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Vestidos</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Produtos de filtro:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Branco</Option>
            <Option>Preto</Option>
            <Option>Vermelho</Option>
            <Option>Azul</Option>
            <Option>Amarelo</Option>
            <Option>Verde</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Tamanhos
            </Option>
            <Option>P</Option>
            <Option>M</Option>
            <Option>G</Option>
            <Option>GG</Option>
            <Option>XG</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Classificar produtos:</FilterText>
          <Select>
            <Option selected>O mais novo</Option>
            <Option>Preço (asc)</Option>
            <Option>Preço (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;