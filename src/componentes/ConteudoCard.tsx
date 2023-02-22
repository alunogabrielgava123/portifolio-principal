import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/conteudoCard.module.css'

interface PropsConteudoSkill {
    titulo: string
    conteudo: string
}


export default function CardComConteudo(props: PropsConteudoSkill) {

    const myRef = useRef<HTMLDivElement>(null);
    
    const typingSpeed = 50; // em milissegundos
    let index = 0;

    function type() {
        let myElement = myRef.current?.getElementsByClassName(styles.tituloSkil)[0];
        if (index < props.titulo.length) {
            if (myElement) {
                myElement.textContent += props.titulo.charAt(index);
                index++;
                setTimeout(type, typingSpeed);
            }
        }
    }

    useEffect(() => {
        type()
    }, [])

    return (
        <>
            <div ref={myRef}>
                <h1 className={styles.tituloSkil}></h1>
                <br />
                <p className={styles.tituloSkil}>{props.conteudo}</p>
            </div>
        </>
    );
}