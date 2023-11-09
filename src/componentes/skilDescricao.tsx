import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/skillDescricao.module.css';

interface PropsCardDescricao {
    titulo: string
    descricao: string
    data : string
}

export default function SkillDescricaoCard(props: PropsCardDescricao) {
    return (
        <>
            <div className={styles.cardSkill}>
                <h3>{props.titulo}</h3>
                <div className={styles.rowData}>
                    <p>Inicio: {props.data}</p>
                </div>
                <p>{props.descricao}</p>
            </div>
        </>
    );
}