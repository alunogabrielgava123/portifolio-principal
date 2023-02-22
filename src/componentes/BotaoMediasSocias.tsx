import styles from '@/styles/bottonMedias.module.css'

export enum Medias {
    linkdin,
    github
}


interface PropsButton {
    title: string
    type: Medias
    link: string
}


export default function BotaoMidiasSociais(props: PropsButton) {
    switch (props.type) {
        case Medias.linkdin:
            return (
                <a href={props.link} className={styles.linkdin} >{props.title}</a>
            );
        case Medias.github:
            return (
                <a href={props.link} className={styles.github} ><span>{props.title}</span></a>
            );
        default:
            return (
                <a className={styles.linkdin} >{props.title}</a>
            );
    }
}