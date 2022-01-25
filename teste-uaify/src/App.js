import React, {useState, useEffect } from 'react';
import './index.css';
import useInput from "./Hooks/useInput"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, FormGroup, Input, Label, Button} from "reactstrap";
import Banner1 from "./Images/Banner1.png";
import Grupo267 from "./Images/Grupo267.png";
import Grupo264 from "./Images/Grupo264.png";
import instagram from "./Images/instagram.png";
import facebook from "./Images/facebook.png";
import youTube from "./Images/youTube.png";
import logo from "./Images/logo.png";

function App() {

  const {form, onChange, resetaEntrada} = useInput({
    nome: '',
    email:'',
    telefone: '',
    produto: '',
    estado: '',
    cidade: '',
    mensagem: '',
  })

  const [politica, setPolitica] = useState(false)

  const handleInputChange = event => {
    const { name, value} = event.target;
    
    onChange(name, value);
  };

  const enviar = ()=>{
    console.log(form)
    if(form.nome && form.email && form.telefone && form.produto && form.cidade !== null && politica === true){
      alert("Formulário enviado com sucesso!")
    }else{
      alert("Preencha todos os campos obrigatorios!")
    }
  }

  const aceitaPolitica = ()=>{
    setPolitica(!politica)
  }

  return (
    <Container className={"Fonte"}  style={{maxWidth: "100%", padding: "0"}}>
      <img  className={"Logo"} src={logo} style={{position: 'absolute', zIndex: 0, marginLeft: "80%",}}/>
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
        <Col xs="4" style={{paddingLeft: "15%"}}>
          <img src={Grupo267}/>
        </Col>
        <Col style={{paddingLeft: "8%"}}>
          <h2 style={{color: "#FDD000"}}><b>MONITORES</b></h2>
          <p>Tenha o <b>gerenciamento preciso</b> do campo <b>nas suas mãos</b> com tela colorida e recursos de alta precisão. Dessa forma, você aproveita muito mais os insumos e</p>
        </Col>
        <Col xs="4">
        </Col>
      </Row>

      <Row style={{paddingTop: "5%"}}>
        <Col xs="4">
        </Col>
        <Col style={{textAlign: "right"}}>
          <h2 style={{color: "#FDD000",}}><b>GESTÃO DE FROTA</b></h2>
          <p><b>Através de rede móvel,</b> você pode se <b>conectar com as suas máquinas New Holland de onde estiver.</b> E ainda, pode enviar e receber informações <b>em tempo real.</b></p>
        </Col>
        <Col xs="4" style={{paddingRight: "15%"}}>
          <img src={Grupo264}/>
        </Col>
      </Row>

      <Row style={{paddingTop: "5%"}}>
        <Col>
        </Col>
        <Col xs="6">
          <h2 style={{textAlign: "center"}}>Quer conhecer a solução ideal para o seu campo? <br/> Fale agora mesmo com nosso time de especialistas.</h2>
          <form style={{paddingTop: "5%"}}>
            <div>
              <Label for="Nome">
                Nome
              </Label>
              <Input
                id="Nome"
                name="nome"
                value={form.nome}
                onChange={handleInputChange}
                placeholder=""
                type="text"
                required
              />
            </div>
            <div>
              <Label for="Telefone">
                Telefone
              </Label>
              <Input
                id="Telefone"
                name="telefone"
                value={form.telefone}
                onChange={handleInputChange}
                placeholder=""
                type="number"
                required
              />
            </div>
            <div>
              <Label for="Email">
                Email
              </Label>
              <Input
                id="Email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder=""
                type="email"
                required
              />
            </div>
            <div>
              <Label for="Estado">
                Estado
              </Label>
              <Input
                id="Estado"
                name="estado"
                value={form.estado}
                onChange={handleInputChange}
                type="select"
                required
              >
                <option>
                  
                </option>
                <option 
                  value={"Minas Gerais"}
                >
                  Minas Gerais
                </option>
                <option
                  value={"São Paulo"}
                >
                  São Paulo
                </option>
              </Input>
            </div>
            <div>
              <Label for="Cidade">
                Cidade
              </Label>
              <Input
                id="Cidade"
                name="cidade"
                type="select"
                value={form.cidade}
                onChange={handleInputChange}
                required
              >
                <option>
                  
                </option>
                <option
                  value={"Belo Horizonte"}
                >
                  Belo Horizonte
                </option>
                <option
                  value={"São Paulo"}
                >
                  São Paulo
                </option>
              </Input>
            </div>
            <div>
              <Label for="Produto">
                Selecione um Produto
              </Label>
              <Input
                id="Produto"
                name="produto"
                type="select"
                value={form.produto}
                onChange={handleInputChange}
                required
              >
                <option>
                  
                </option>
                <option
                  value={"Produto 1"}
                >
                  Produto 1
                </option>
                <option
                  value={"Produto 2"}
                >
                  Produto 2
                </option>
              </Input>
            </div>
            <div>
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
            </div>
            <div check>
              <Input type="checkbox" />
              {' '}
              <Label check>
                Desejo receber mais informações sobre produtos e serviços da New Holland
              </Label>
            </div>
            <div check>
              <Input type="checkbox" value={politica} onClick={aceitaPolitica} required/>
              {' '}
              <Label check>
                Li e concordo com a <b>Política de Privacidade</b> deste site
              </Label>
            </div>
            <div check style={{paddingTop: "3%"}}>
              <button onClick={enviar} style={{width: "100%", backgroundColor: "#003E85", padding: "2%"}}>
                Submit
              </button>
            </div>
          </form>
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
