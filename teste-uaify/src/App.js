import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, FormGroup, Input, Label, Button} from "reactstrap";
import Banner1 from "./Images/Banner1.png";
import Grupo267 from "./Images/Grupo267.png";
import Grupo264 from "./Images/Grupo264.png";
import instagram from "./Images/instagram.png";
import facebook from "./Images/facebook.png";
import youTube from "./Images/youTube.png";

function App() {

  const enviar = ()=>{
    alert("Formulário enviado com sucesso!")
  }

  return (
    <Container  style={{maxWidth: "100%", padding: "0"}}>
      <Row>
        <Col>
          <img  src={Banner1}/>
        </Col>
      </Row>

      <Row style={{paddingTop: "5%"}}>
        <Col>
        </Col>
        <Col xs="6" style={{textAlign: "center"}}>
          <p><b>Natural é aquilo que faz parte do dia a dia das pessoas.</b>O mundo está cada vez mais digital, dentro e fora das porteiras. Você e todos os envolvidos na cadeia produtiva do agronegócio já são digitais!</p>
          <p><b>Já é natural se comunicar e comprar pelo celular.</b> É natural pesquisar pelas cotações na internet e acompanhar a previsão do tempo. Assim como, é <b>natural ser digital para plantar, colher e vender.</b></p>
          <p>Para a New Holland, a tecnologia torna nossa vida mais fácil, descomplicada e eficiente. É <b>natural usar máquinas e equipamentos inovadores, aplicativos, drones, telas e demais soluções digitais</b> que ajudam na</p>
        </Col>
        <Col>
        </Col>
      </Row>

      <Row style={{paddingTop: "5%"}}>
        <Col>
        </Col>
        <Col xs="6" style={{textAlign: "center"}}>
          <img src={Banner1} style={{width: "100%"}}/>
        </Col>
        <Col>
        </Col>
      </Row>

      <Row style={{paddingTop: "5%"}}>
        <Col>
        </Col>
        <Col xs="6" style={{textAlign: "center"}}>
          <h1 style={{color: "#FDD000"}}><b>SOLUÇÕES NEW HOLLAND</b></h1>
          <br/>
          <p>Os equipamentos da <b>New Holland</b> são <b>modernos, inovadores, intuitivos, tecnológicos,</b> e ao mesmo tempo, <b>muito fáceis de operar. Ideais</b> para <b>todos os tamanhos de propriedades</b> e perfis de</p>
        </Col>
        <Col>
        </Col>
      </Row>

      <Row style={{paddingTop: "5%", borderBottomStyle: "dotted", paddingBottom: "5%", borderBottomWidth: "3px", borderColor: "grey"}}>
        <Col xs="4" style={{paddingLeft: "5%"}}>
          <img src={Grupo267}/>
        </Col>
        <Col>
          <h2 style={{color: "#FDD000"}}><b>MONITORES</b></h2>
          <p>Tenha o <b>gerenciamento preciso</b> do campo <b>nas suas mãos</b> com tela colorida e recursos de alta precisão. Dessa forma, você aproveita muito mais os insumos e</p>
        </Col>
        <Col xs="4">
        </Col>
      </Row>

      <Row style={{paddingTop: "5%", }}>
        <Col xs="4">
        </Col>
        <Col style={{textAlign: "right"}}>
          <h2 style={{color: "#FDD000",}}><b>GESTÃO DE FROTA</b></h2>
          <p><b>Através de rede móvel,</b> você pode se <b>conectar com as suas máquinas New Holland de onde estiver.</b> E ainda, pode enviar e receber informações <b>em tempo real.</b></p>
        </Col>
        <Col xs="4" style={{paddingLeft: "5%"}}>
          <img src={Grupo264}/>
        </Col>
      </Row>

      <Row style={{paddingTop: "5%"}}>
        <Col>
        </Col>
        <Col xs="6">
          <h2 style={{textAlign: "center"}}>Quer conhecer a solução ideal para o seu campo? <br/> Fale agora mesmo com nosso time de especialistas.</h2>
          <Form style={{paddingTop: "5%"}}>
            <FormGroup>
              <Label for="Nome">
                Nome
              </Label>
              <Input
                id="Nome"
                name="Nome"
                placeholder=""
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Telefone">
                Telefone
              </Label>
              <Input
                id="Telefone"
                name="Telefone"
                placeholder=""
                type="number"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Email">
                Email
              </Label>
              <Input
                id="Email"
                name="Email"
                placeholder=""
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Estado">
                Estado
              </Label>
              <Input
                id="Estado"
                name="Estado"
                type="select"
              >
                <option>
                  
                </option>
                <option>
                  Minas Gerais
                </option>
                <option>
                  São Paulo
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="Cidade">
                Cidade
              </Label>
              <Input
                id="Cidade"
                name="Cidade"
                type="select"
              >
                <option>
                  
                </option>
                <option>
                  Belo Horizonte
                </option>
                <option>
                  São Paulo
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="Produto">
                Selecione um Produto
              </Label>
              <Input
                id="Produto"
                name="Produto"
                type="select"
              >
                <option>
                  
                </option>
                <option>
                  Produto 1
                </option>
                <option>
                  Produto 2
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="Mensagem">
                Mensagem
              </Label>
              <Input
                style={{height: "20vh"}}
                id="Mensagem"
                name="Mensagem"
                placeholder=""
                type="textarea"
              />
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" />
              {' '}
              <Label check>
                Desejo receber mais informações sobre produtos e serviços da New Holland
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" />
              {' '}
              <Label check>
                Li e concordo com a <b>Política de Privacidade</b> deste site
              </Label>
            </FormGroup>
            <FormGroup check style={{paddingTop: "3%"}}>
              <Button onClick={enviar} style={{width: "90%", backgroundColor: "#003E85", padding: "2%"}}>
                Submit
              </Button>
            </FormGroup>
          </Form>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row style={{marginTop: "10%", minHeight: "30vh", backgroundColor: "#003E85", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Col style={{textAlign: "center"}}>
          <span style={{color: "white"}}>Acesse <b>NEWHOLLAND.COM.BR</b></span>
            <br/>
            <img src={facebook} />
            <img style={{ marginLeft: "10%", marginRight: "10%"}} src={instagram} />
            <img src={youTube} />
        </Col>
        <Col>
          
        </Col>
        <Col style={{textAlign: "center"}}>
        <span style={{ color: "white"}}>© Copyright 2021. New Holland Agriculture All Right Reserved </span>
          <br/>
        <p style={{textAlign: "right", paddingRight:"5%"}}>Politica de Privacidade</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
