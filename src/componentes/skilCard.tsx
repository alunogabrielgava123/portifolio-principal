import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/cardSkill.module.css';


// .hrskill4 {
//     height: 4px;
//     margin-top: 10px;
//     border: none;
//     background-image: linear-gradient(to right, rgb(5, 126, 25) 45%, rgb(47, 47, 49) 50%);
//   }

//StylesSkill
interface StyleSkill {
    height: string
    marginTop: string
    border: string
    backgroundImage: string
}


//Objeto de criacao
interface ObjetoSkill {
    titulo: string;
    style: StyleSkill
}


export default function CardSkill() {

    //Cor vermelha
    const [progress, setProgress] = useState(0);
    const [pre2, setPre2] = useState(0);
    const [pre3, setPre3] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {

            setPre3(progress => {
                const progres = progress + 1;
                if (progres >= 55) {
                    clearInterval(intervalId);
                }
                return progres;
            });

        }, 15);

        return () => clearInterval(intervalId);
    }, []);


    useEffect(() => {
        const intervalId = setInterval(() => {

            setProgress(progress => {
                const progres = progress + 1;
                if (progres >= 70) {
                    clearInterval(intervalId);
                }
                return progres;
            });

        }, 15);

        return () => clearInterval(intervalId);
    }, []);


    useEffect(() => {
        const intervalId = setInterval(() => {

            setPre2(prevPre2 => {
                const newPre2 = prevPre2 + 1;
                if (newPre2 >= 80) {
                    clearInterval(intervalId);
                }
                return newPre2;
            });

        }, 15);

        return () => clearInterval(intervalId);
    }, []);

    const elementosVisuais: ObjetoSkill[] = [
        {
            titulo: "Back End",
            style: {
                height: '4px',
                marginTop: '10px',
                border: 'none',
                backgroundImage: `linear-gradient(to right, rgb(238, 13, 39) ${pre2}%, rgb(47, 47, 49) ${pre2}%)`
            },
        },
        {
            titulo: "Front End",
            style: {
                height: '4px',
                marginTop: '10px',
                border: 'none',
                backgroundImage: `linear-gradient(to right, rgb(13, 238, 227) ${progress}%, rgb(47, 47, 49) ${progress}%)`
            },
        },
        {
            titulo: "SQL",
            style: {
                height: '4px',
                marginTop: '10px',
                border: 'none',
                backgroundImage: `linear-gradient(to right,  rgb(5, 126, 25) ${pre2}%, rgb(47, 47, 49) ${pre2}%)`
            },
        },
        {
            titulo: "Analise de dados Python",
            style: {
                height: '4px',
                marginTop: '10px',
                border: 'none',
                backgroundImage: `linear-gradient(to right, rgb(13, 238, 227) ${pre3}%, rgb(47, 47, 49) ${pre3}%)`
            },
        }
    ];


    return (
        <>
            {elementosVisuais.map((e, index) => {
                return (
                    <div key={index} className={styles.deshskil}>
                        <h3>{e.titulo}</h3>
                        <hr style={e.style} />
                    </div>
                );
            })}
        </>
    );


}