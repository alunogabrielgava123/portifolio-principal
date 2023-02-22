import { useEffect, useRef } from "react";
import styles from '@/styles/Home.module.css'


export default function AnimacaoConteudoCard() {
    // Referencia ao meu elemento html onde irei relaizar as animacoes;
    const canvas = useRef<HTMLDivElement>(null);
    const letters = "Js,HTML,NodeJS,Express, NextJs, NestJs, Go".split(",");

    function generateLetras() {
        let elemento = canvas.current;

        for (let i = 0; i < 1; i++) {
            const letter = letters[Math.floor(Math.random() * letters.length)];
            const x = Math.random() * (elemento!.offsetWidth -50);
            const y = Math.random() * (elemento!.offsetHeight - 50);

            const letterElement = document.createElement("div");

            letterElement?.classList.add(styles.letras);
            letterElement!.style.right = `${x}px`;
            letterElement!.style.top = `${y}px`;
            letterElement!.textContent = letter;

            elemento?.appendChild(letterElement);

            var elements = elemento?.getElementsByClassName(styles.letras);

            if (elements) {
                while (elements!.length > 10) {
                    elements![0].remove();
                }
            }
        }
    }

    // Utilizando o useEffect conseguimos mostrar na tela as letras
    useEffect(() => {
        const eventId = setInterval(generateLetras, 100);

        return () => clearInterval(eventId);
    }, []);

    return <div ref={canvas} className="conteudo" style={{ width: "100%", height: "800px" }}/>;
}
