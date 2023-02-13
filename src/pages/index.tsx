import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

enum StadoMenu { sobre, skil, blog, estudos }


interface ChildProps {
  children?: React.ReactNode
  s?: any
}

interface LinkProps {
  title: string
  destino?: any
  s?: any
  callBack: any
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
  return (
    <li onClick={props.callBack} className={styles.link}><a>{props.title}</a></li>
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
        <div>
          <h1>Sobre mim e minha competencias</h1>
        </div>
        <br />
        <div>
          <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <br></br>
          <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
      <div className={styles.conteudoImg}>
        <div className={styles.img}> </div>
      </div>
    </>
  );
}


const ConteudoSkil = () => {
  return (
    <>
      <div className={styles.conteudo}>
        <h1>Minhas Skils <br /> <br /> Experiencias</h1>
        <br />
        <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>
      <div className={styles.skil}>
        <div className={styles.deshskil}>
          <h3>React Js</h3>
          <hr className={styles.hrskill} />
        </div>
        <div className={styles.deshskil}>
          <h3>React Js</h3>
          <hr className={styles.hrskill} />
        </div>
        <div className={styles.deshskil}>
          <h3>React Js</h3>
          <hr className={styles.hrskill} />
        </div>
        <div className={styles.deshskil}>
          <h3>React Js</h3>
          <hr className={styles.hrskill} />
        </div>
        <div className={styles.rowSkil}>
          <div className={styles.cardSkill}>
            <h2>Front End Developer</h2>
            <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .</p>
          </div>
          <div className={styles.cardSkill}>
            <h2>Back End Developer</h2>
            <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
      </div>
    </>
  );
}

const ConteudoEstudos = () => {
  return (
    <>
      <div className={styles.conteudo}>
        <h1>Meus estudos<br /> <br />casos de estudos</h1>
        <br />
        <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          It was popularised in the 1960s with the release.
        </p>
      </div>
      <div className={styles.conteudo}>
        <div className={styles.gridConteudoEstudos}>
          <div className={styles.cardEstudo}>
            <h2>Tema do meu estudo</h2>
            <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the
            </p>

            <a href='#'>saiba mais</a>

          </div>
          <div className={styles.cardEstudo}>
            <h2>Tema do meu estudo</h2>
            <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the
            </p>

            <a href='#'>saiba mais</a>

          </div>
          <div className={styles.cardEstudo}>
            <h2>Tema do meu estudo</h2>
            <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the
            </p>

            <a href='#'>saiba mais</a>

          </div>
          <div className={styles.cardEstudo}>
            <h2>Tema do meu estudo</h2>
            <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the
            </p>

            <a href='#'>saiba mais</a>

          </div>
        </div>
      </div>
    </>
  );
}

const Redes = () => {
  return (
    <div>
    </div>
  )
}

export default function Home() {


  const [menu, setMenu] = useState<StadoMenu>(StadoMenu.sobre);

  /**
   * Construindo aplicacoes 
   * 
   * 
   */

  const MenuContente = () => {
    switch (menu) {
      case StadoMenu.sobre:
        return <ConteudoSobre />
      case StadoMenu.skil:
        return <ConteudoSkil />
      case StadoMenu.estudos:
        return <ConteudoEstudos />
      case StadoMenu.blog:
        return <p>Blog</p>
      default:
        break;
    }
  }



  return (
    <div>
      <SideBar s={styles.sidbar}>
        <Logo />
        <Menu s={styles.menu}>
          <LinkMenu title='Sobre' callBack={() => { setMenu(StadoMenu.sobre) }} />
          <LinkMenu title='Skils' callBack={() => { setMenu(StadoMenu.skil) }} />
          <LinkMenu title='Estudos' callBack={() => { setMenu(StadoMenu.estudos) }} />
          <LinkMenu title='Blog' callBack={() => { setMenu(StadoMenu.blog) }} />
        </Menu>
        <Redes />
      </SideBar>
      <Container s={styles.container}>
        {MenuContente()}
      </Container>
    </div>
  )
}
