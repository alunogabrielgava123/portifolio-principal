import styles from '@/styles/cardEstudo.module.css'


/**
 * @param titulo recebe uma string do tipo titulo
 * @param conteudo recebe string do tipo conteudo
 * @param link  recebe string link
 * 
 * @returns retorna um componente contendo div h2 p 
 * 
 */


interface PropsCardConteudoEstudo {
    title: string
    conteudo: string
    link: string
    tituloLink: string
}


export default function CardConteudoEstudo(props: PropsCardConteudoEstudo) {
    return (
        <div className={styles.cardEstudo}>
            <h2>{props.title}</h2>
            <p>{props.conteudo}</p>
            <a href={props.link}>{props.tituloLink}</a>
        </div>
    );
}