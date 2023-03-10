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
        <CardComConteudo titulo='Ol?? meu nome ?? Gabriel Gava' conteudo='
        Tenho 26 anos e sou natural de Londrina, Paran??, Brasil. Sou formado em Agronomia, mas h?? cerca de tr??s anos mudei de carreira para me dedicar ?? ??rea de desenvolvimento de software. Atualmente, estou estudando An??lise e Desenvolvimento de Sistemas.
        Desde que comecei como estagi??rio no IDR (Instituto Rural do Paran??), tenho me dedicado ao estudo por conta pr??pria e ?? cria????o de sistemas. Tive a oportunidade de desenvolver diversos projetos, desde sistemas web at?? sistemas embarcados com microcontroladores.
        Atualmente, atuo como Bolsista Cient??fico e freelancer na ??rea de desenvolvimento de software. Tenho grande paix??o pela tecnologia e pela resolu????o de problemas complexos, e estou sempre em busca de aprimoramento e crescimento profissional.
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
          Ao longo do meu caminho de estudo e desenvolvimento de projetos, adquiri habilidades e compet??ncias em v??rias tecnologias. Possuo experi??ncia em Node.js, com foco na biblioteca Express. 
          Tamb??m desenvolvi habilidades em Python para an??lise de dados. Al??m disso, tenho experi??ncia na constru????o de interfaces web usando JavaScript e React.js. 
          Al??m disso possuo tamb??m um conhecimento s??lido em algoritmos e linguagem l??gica, o que me permite abordar problemas complexos com solu????es eficazes. 
          Busco sempre me aperfei??oar, estudando novas tecnologias e aprimorando minhas habilidades existentes.
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
          <CardConteudoEstudo title='Simula????o do Google Docs' conteudo='Simulacao do google docs usando react Js e sockt io podera biblioteca de stream de dados'
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
        return <><p>S?? pra n ficar nulo</p></>
    }
  }

  //Mudando o estado do meu componente estudo!; 
  function setStateEstudo(posicao: number) {
    if (posicao == 1) {
      //quer dizer que estamos na p??gina de link
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
          <p>P??ginas: </p>
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
        Estou constantemente buscando e me aperfei??oar em rela????o ??s tecnologias em que trabalho. Afinal, na ??rea de tecnologia, as coisas evoluem rapidamente e 
        ?? importante estar sempre atualizado. Ao lado, voc?? pode encontrar alguns dos meus estudos de caso mais recentes, que ilustram minha capacidade de aplicar habilidades t??cnicas em projetos reais.'/>
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
        <div style={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', justifyContent: 'end' }}>
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
            <p>Este projeto teve como objetivo criar uma API paga para fornecer dados agrometeorol??gicos de esta????es meteorol??gicas em todo o estado do Paran??.
              A API possui diversas funcionalidades, incluindo um sistema de loading para melhorar a experi??ncia do usu??rio, envio de dados por e-mail, autentica????o de rotas para garantir a seguran??a dos dados, chaves de acesso para a
              API e um dashboard interativo que permite aos usu??rios visualizar facilmente os dados.</p>
            <br />
            <p>O projeto tamb??m integra formas de pagamento via PayPal, o que torna o processo de pagamento f??cil e seguro para os usu??rios.
              A documenta????o da API foi cuidadosamente elaborada, para que os usu??rios possam utilizar a API facilmente e sem dificuldades.
              Al??m disso, os usu??rios t??m a op????o de receber os dados em formato CSV por e-mail, o que facilita a an??lise dos dados.</p>
            <p>No geral, este projeto foi desenvolvido com muitas funcionalidades ??teis e recursos para melhorar a experi??ncia do usu??rio, fornecendo dados meteorol??gicos precisos e confi??veis para aqueles que precisam deles.</p>
            {MenuSelecaoProjeto()}
          </div>
          <div className={styles.conteudoQrcode}>

          </div>
        </>)
      case ProjetoState.IDRCLIMA:
        return (<>
          <div className={styles.conteudo}>
            <h1>Aplicativo movel IDR Clima</h1>
            <br />
            <p>
              Eu tive a oportunidade de participar do desenvolvimento desse aplicativo incr??vel em colabora????o com a equipe do IDR (Instituto de Desenvolvimento Rural do Paran??).
              Minha principal responsabilidade foi integrar todo o backend utilizando a linguagem de programa????o Python e o SDK Admin do Firebase.
              Com essa integra????o, eu pude realizar toda a l??gica de verifica????o e atualiza????o das esta????es agrometeorol??gicas do IDR, o que garantiu a qualidade e a confiabilidade dos dados fornecidos pelo aplicativo.</p>
            <p>
              <br />
              Al??m de trabalhar no backend, eu tamb??m participei da constru????o do front-end em conjunto com minha equipe. Trabalhamos juntos para criar interfaces amig??veis e intuitivas para o usu??rio, visando aprimorar a experi??ncia do usu??rio.
              O objetivo do aplicativo ?? ajudar produtores e pesquisadores a acessar dados agrometeorol??gicos de forma f??cil e r??pida para as esta????es espalhadas por todo o estado do Paran??.
            </p>
            <p>Fico muito feliz em ter tido a oportunidade de contribuir com o desenvolvimento deste aplicativo e espero que ele possa ser ??til para muitas pessoas.</p>
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
    <div ref={canvas} className={styles.teste} >
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




