import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import CardComConteudo from '@/componentes/ConteudoCard'
import CardSkill from '@/componentes/skilCard'
import SkillDescricaoCard from '@/componentes/skilDescricao'
import CardConteudoEstudo from '@/componentes/ConteudoEstudos'
import AnimacaoConteudoCard from '@/componentes/AnimacaoConteudo'
import BotaoMidiasSociais, { Medias } from '@/componentes/BotaoMediasSocias'


enum StadoMenu { sobre, skil, projeto, estudos }



interface ChildProps {
  children?: React.ReactNode
  s?: any
}

interface LinkProps {
  title: string
  destino?: any
  s?: any
  callBack: any
  activiti: boolean
}

//Aplicar estilo Header
const SideBar = (props: ChildProps) => {
  return (
    <div className={props.s}>
      {props.children}
    </div>
  )
}

//Montar ainda
const Logo = () => {
  return (
    <div>

    </div>
  );
}

const Menu = (props: ChildProps) => {
  return (
    <ul className={props.s}>
      {props.children}
    </ul>
  );
}


const LinkMenu = (props: LinkProps) => {

  const style = {
    color: props.activiti ? 'rgb(4, 211, 163)' : 'rgb(61, 59, 59)',
    padding: '1.5rem',
    fontSize: '1rem',
    borderBottom: '0.10px solid rgb(58, 54, 54)',
    cursor: 'pointer',
    fontFamily: "'Courier New', Courier, monospace"
  };

  const style1 = {
    color: props.activiti ? 'rgb(4, 211, 163)' : 'rgb(61, 59, 59)',
    padding: '1.5rem',
    fontSize: '1rem',
    borderTop: '0.10px solid rgb(58, 54, 54)',
    borderBottom: '0.10px solid rgb(58, 54, 54)',
    cursor: 'pointer',
    fontFamily: "'Courier New', Courier, monospace"

  };


  return (
    <li onClick={props.callBack} style={props.title == 'Sobre' ? style1 : style}><a>{props.title}</a></li>
  );
}


const Container = (propos: ChildProps) => {
  return (
    <div className={propos.s}>{propos.children}</div>
  );
}




const ConteudoSobre = () => {
  return (
    <>
      <div className={styles.conteudo}>
        <CardComConteudo titulo='Olá meu nome é Gabriel Gava' conteudo='
        Tenho 26 anos e sou natural de Londrina, Paraná, Brasil. Sou formado em Agronomia, mas há cerca de três anos mudei de carreira para me dedicar à área de desenvolvimento de software. Atualmente, estou estudando Análise e Desenvolvimento de Sistemas.
        Desde que comecei como estagiário no IDR (Instituto Rural do Paraná), tenho me dedicado ao estudo por conta própria e à criação de sistemas. Tive a oportunidade de desenvolver diversos projetos, desde sistemas web até sistemas embarcados com microcontroladores.
        Atualmente, atuo como Bolsista Científico e freelancer na área de desenvolvimento de software. Tenho grande paixão pela tecnologia e pela resolução de problemas complexos, e estou sempre em busca de aprimoramento e crescimento profissional.
        ' />
        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
          <div style={{ marginRight: '10px' }}>
            <BotaoMidiasSociais link={'https://www.linkedin.com/in/gabriel-gava-pinheiro-490401200'} type={Medias.linkdin} title={'Linkdin'} />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <BotaoMidiasSociais link={'https://github.com/alunogabrielgava123'} type={Medias.github} title={'GitHub'} />
          </div>
        </div>
      </div>
      <div className={styles.conteudoAnimacaoSobre}>
        <AnimacaoConteudoCard />
      </div>
    </>
  );
}


const NewConteudoSkill = () => {
  return (
    <>
      <div className={styles.conteudo}>
        <CardComConteudo titulo='Minhas Skills' conteudo='
          Ao longo do meu caminho de estudo e desenvolvimento de projetos, adquiri habilidades e competências em várias tecnologias. Possuo experiência em Node.js, com foco na biblioteca Express. 
          Também desenvolvi habilidades em Python para análise de dados. Além disso, tenho experiência na construção de interfaces web usando JavaScript e React.js. 
          Além disso possuo também um conhecimento sólido em algoritmos e linguagem lógica, o que me permite abordar problemas complexos com soluções eficazes. 
          Busco sempre me aperfeiçoar, estudando novas tecnologias e aprimorando minhas habilidades existentes.
        ' />
      </div>
      <div className={styles.conteudo}>
        <CardSkill />
        <div className={styles.rowSkil}>
          <SkillDescricaoCard data='01/11/2020' titulo='Back End Developer' descricao='Desenvolvimento de sistemas com Clear Code usando expresses e outros frameworks' />
          <SkillDescricaoCard data='01/01/2021' titulo='Front End Developer' descricao='Desenvolvimento de sistemas web com React Js e outros frameworks JS' />
        </div>
      </div>
    </>
  )
}


enum ConteudoEstudo {
  primeiro,
  segundo,
  terceiro
}

interface conteudoEstudoState {
  state: ConteudoEstudo,
  link: boolean[]
}

const ConteudoEstudos = () => {

  const [conteudoEstudo, setConteudoEstudos] = useState<conteudoEstudoState>({ state: ConteudoEstudo.primeiro, link: [true, false, false] });


  function ComponenteConteudo(conteudo: ConteudoEstudo) {
    switch (conteudo) {
      case ConteudoEstudo.primeiro:
        return (<>
          <CardConteudoEstudo title='API usando Go lang' conteudo='Uma Api Rest de books usando golang e boas praticas. Introducao a arquiteruea hexagonal e clear code usando go'
            tituloLink='saiba mais' link='https://github.com/alunogabrielgava123/book-go-rest#endpoints' />
          <CardConteudoEstudo title='Process Child Node js' conteudo='Utilizando process child para processamento de script em ambiente node js, processemento em paralelo usando Node Js'
            tituloLink='saiba mais' link='#' />
          <CardConteudoEstudo title='Jogo multi player' conteudo='Utilizando java script puro para desenvolvimento de jogo online e socket io como stream de dados'
            tituloLink='saiba mais' link='https://github.com/alunogabrielgava123/jogo-multiplayer' />
          <CardConteudoEstudo title='Simulação do Google Docs' conteudo='Simulacao do google docs usando react Js e sockt io podera biblioteca de stream de dados'
            tituloLink='saiba mais' link='https://github.com/alunogabrielgava123/app-plan-docs' />
        </>
        );
      case ConteudoEstudo.segundo:
        return (<>
          <CardConteudoEstudo title='Embreve' conteudo='Embreve estarei postando mais conteudos de estudos estarei postando mais conteudos desenvolvidos por mim'
            tituloLink='saiba mais' link='#' />
          <CardConteudoEstudo title='Embreve' conteudo='Embreve estarei postando mais conteudos de estudos estarei postando mais conteudos desenvolvidos por mim'
            tituloLink='saiba mais' link='#' />
          <CardConteudoEstudo title='Embreve' conteudo='Embreve estarei postando mais conteudos de estudos estarei postando mais conteudos desenvolvidos por mim'
            tituloLink='saiba mais' link='#' />
          <CardConteudoEstudo title='Embreve' conteudo='Embreve estarei postando mais conteudos de estudos estarei postando mais conteudos desenvolvidos por mim'
            tituloLink='saiba mais' link='#' />
        </>
        );
      case ConteudoEstudo.terceiro:
        return (<>
          <CardConteudoEstudo title='Embreve' conteudo='Embreve estarei postando mais conteudos de estudos estarei postando mais conteudos desenvolvidos por mim'
            tituloLink='saiba mais' link='#' />
          <CardConteudoEstudo title='Embreve' conteudo='Embreve estarei postando mais conteudos de estudos estarei postando mais conteudos desenvolvidos por mim'
            tituloLink='saiba mais' link='#' />
          <CardConteudoEstudo title='Embreve' conteudo='Embreve estarei postando mais conteudos de estudos estarei postando mais conteudos desenvolvidos por mim'
            tituloLink='saiba mais' link='#' />
          <CardConteudoEstudo title='Embreve' conteudo='Embreve estarei postando mais conteudos de estudos estarei postando mais conteudos desenvolvidos por mim'
            tituloLink='saiba mais' link='#' />
        </>
        );

      default:
        //Aqui dentro sera a animacao;
        return <><p>Só pra n ficar nulo</p></>
    }
  }

  //Mudando o estado do meu componente estudo!; 
  function setStateEstudo(posicao: number) {
    if (posicao == 1) {
      //quer dizer que estamos na página de link
      setConteudoEstudos({ state: ConteudoEstudo.primeiro, link: [true, false, false] });
    }

    if (posicao == 2) {
      setConteudoEstudos({ state: ConteudoEstudo.segundo, link: [false, true, false] });
    }

    if (posicao == 3) {
      setConteudoEstudos({ state: ConteudoEstudo.terceiro, link: [false, false, true] });
    }
  }


  function SelecionandoConteudo() {
    return (
      <div className={styles.selecionandoConteudo}>
        <ul className={styles.conteudos}>
          <p>Páginas: </p>
          <li className={conteudoEstudo.link[0] ? styles.linkLi : styles.linkLiOff} onClick={() => setStateEstudo(1)}>1</li>
          <li className={conteudoEstudo.link[1] ? styles.linkLi : styles.linkLiOff} onClick={() => setStateEstudo(2)}>2</li>
          <li className={conteudoEstudo.link[2] ? styles.linkLi : styles.linkLiOff} onClick={() => setStateEstudo(3)}>3</li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <div className={styles.conteudo}>
        <CardComConteudo titulo='Meus estudos' conteudo='
        Estou constantemente buscando e me aperfeiçoar em relação às tecnologias em que trabalho. Afinal, na área de tecnologia, as coisas evoluem rapidamente e 
        é importante estar sempre atualizado. Ao lado, você pode encontrar alguns dos meus estudos de caso mais recentes, que ilustram minha capacidade de aplicar habilidades técnicas em projetos reais.'/>
      </div>
      <div className={styles.conteudo}>
        <div className={styles.gridConteudoEstudos}>
          {ComponenteConteudo(conteudoEstudo.state)}
        </div>
        {SelecionandoConteudo()}
      </div>
    </>
  );
}


const Redes = () => {
  return (
    <div></div>
  );
}

enum ProjetoState {
  IDRCLIMA,
  APIIDR
}

interface ProjetoStateProps {
  state: ProjetoState,
  page: boolean[]
}


const Projetos = () => {

  const [projetoState, setProjetoState] = useState<ProjetoStateProps>({ state: ProjetoState.IDRCLIMA, page: [true, false] });


  function setStateProps(valor: number) {
    if (valor == 1) {
      setProjetoState({
        state: ProjetoState.IDRCLIMA,
        page: [true, false]
      });
    }

    if (valor == 2) {
      setProjetoState({
        state: ProjetoState.APIIDR,
        page: [false, true]
      });
    }
  }


  function MenuSelecaoProjeto() {

    const styleActivite = {
      fontSize: '60px', cursor: 'pointer', marginRight: '10px', color: 'red'
    };

    const styleDesativado = {
      fontSize: '60px', cursor: 'pointer', color: 'gray', marginRight: '10px',
    };


    return (
      <div>
        <div className={styles.linkPortifolio}>
          <ul style={{ display: 'flex', listStyle: 'none', marginTop: '10px', alignItems: 'center' }}>
            <li onClick={() => setStateProps(1)} style={projetoState.page[0] ? styleActivite : styleDesativado}>.</li>
            <li onClick={() => setStateProps(2)} style={projetoState.page[1] ? styleActivite : styleDesativado}>.</li>
          </ul>
        </div>
      </div>
    );
  }




  function ConteudoProjeto(projetoState: ProjetoState) {

    switch (projetoState) {
      case ProjetoState.APIIDR:
        return (<>
          <div className={styles.conteudo}>
            <h1>Projeto API IDR clima</h1>
            <br />
            <p>Este projeto teve como objetivo criar uma API paga para fornecer dados agrometeorológicos de estações meteorológicas em todo o estado do Paraná.
              A API possui diversas funcionalidades, incluindo um sistema de loading para melhorar a experiência do usuário, envio de dados por e-mail, autenticação de rotas para garantir a segurança dos dados, chaves de acesso para a
              API e um dashboard interativo que permite aos usuários visualizar facilmente os dados.</p>
            <br />
            <p>O projeto também integra formas de pagamento via PayPal, o que torna o processo de pagamento fácil e seguro para os usuários.
              A documentação da API foi cuidadosamente elaborada, para que os usuários possam utilizar a API facilmente e sem dificuldades.
              Além disso, os usuários têm a opção de receber os dados em formato CSV por e-mail, o que facilita a análise dos dados.</p>
            <p>No geral, este projeto foi desenvolvido com muitas funcionalidades úteis e recursos para melhorar a experiência do usuário, fornecendo dados meteorológicos precisos e confiáveis para aqueles que precisam deles.</p>
          </div>
          <div className={styles.link}>
            {MenuSelecaoProjeto()}
          </div>
          <div className={styles.conteudoQrcode}>
            <img src='/qrcode.png' />
          </div>

        </>)
      case ProjetoState.IDRCLIMA:
        return (<>
          <div className={styles.conteudo}>
            <h1>Aplicativo movel IDR Clima</h1>
            <br />
            <p>
              Eu tive a oportunidade de participar do desenvolvimento desse aplicativo incrível em colaboração com a equipe do IDR (Instituto de Desenvolvimento Rural do Paraná).
              Minha principal responsabilidade foi integrar todo o backend utilizando a linguagem de programação Python e o SDK Admin do Firebase.
              Com essa integração, eu pude realizar toda a lógica de verificação e atualização das estações agrometeorológicas do IDR, o que garantiu a qualidade e a confiabilidade dos dados fornecidos pelo aplicativo.</p>
            <p>
              <br />
              Além de trabalhar no backend, eu também participei da construção do front-end em conjunto com minha equipe. Trabalhamos juntos para criar interfaces amigáveis e intuitivas para o usuário, visando aprimorar a experiência do usuário.
              O objetivo do aplicativo é ajudar produtores e pesquisadores a acessar dados agrometeorológicos de forma fácil e rápida para as estações espalhadas por todo o estado do Paraná.
            </p>
            <p>Fico muito feliz em ter tido a oportunidade de contribuir com o desenvolvimento deste aplicativo e espero que ele possa ser útil para muitas pessoas.</p>
          </div>
          <div className={styles.link}>
            {MenuSelecaoProjeto()}
          </div>
          <div className={styles.conteudoQrcode}>
            <img src='/qrcode.png' />
          </div>
        </>);
      default:
        break;
    }

  }


  return (
    <>
      {ConteudoProjeto(projetoState.state)}
    </>
  )
}

export default function Home() {

  const canvas = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState<StadoMenu>(StadoMenu.sobre);
  const [activiti, setActiviti] = useState<boolean[]>([true, false, false]);


  const MenuContente = () => {
    switch (menu) {
      case StadoMenu.sobre:
        return <ConteudoSobre />
      case StadoMenu.skil:
        return <NewConteudoSkill />
      case StadoMenu.estudos:
        return <ConteudoEstudos />
      case StadoMenu.projeto:
        return <Projetos />
      default:
        break;
    }
  }

  const setActivitiIndex = (index: number) => {

    if (index == 0) {
      if (activiti[index]) {
        return
      } else {
        setActiviti([true, false, false, false])
      }
    } else if (index == 1) {
      if (activiti[index]) {
        return
      } else {
        setActiviti([false, true, false, false])
      }

    } else if (index == 2)

      if (activiti[index]) {
        return
      } else {
        setActiviti([false, false, true, false])
      }
    else {
      if (activiti[index]) {
        return
      } else {
        setActiviti([false, false, false, true])
      }
    }
  }


  return (
    <div ref={canvas} >
      <SideBar s={styles.sidbar}>
        <Logo />
        <Menu s={styles.menu}>
          <LinkMenu title='Sobre' activiti={activiti[0]} callBack={function () { setMenu(StadoMenu.sobre); setActivitiIndex(0); }} />
          <LinkMenu title='Projetos' activiti={activiti[3]} callBack={function () { setMenu(StadoMenu.projeto); setActivitiIndex(3); }} />
          <LinkMenu title='Skils' activiti={activiti[1]} callBack={function () { setMenu(StadoMenu.skil); setActivitiIndex(1); }} />
          <LinkMenu title='Estudos' activiti={activiti[2]} callBack={function () { setMenu(StadoMenu.estudos); setActivitiIndex(2); }} />
        </Menu>
        <Redes />
      </SideBar>
      <Container s={styles.container}>
        {MenuContente()}
      </Container>
    </div>
  )
}




