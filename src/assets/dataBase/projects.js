import kenzieshop from "../img/kenzieshop.png";
import hub from "../img/hub.png";
import burguer from "../img/burguer.png";
import formulario from "../img/formulario.png";
import personagens from "../img/personagens.png";
import nuKenzie from "../img/nuKenzie.png";
import mundoInvertido from "../img/mundoInvertido.png"

export const projects = [
    {
        id: 1,
        img: kenzieshop,
        title: "Kenzieshop",
        description: "Essa aplicação é um carrinho de E-Commerce",
        tecnology: "Html, Css, JavaScript, React, Component, ContextAPI, Styled-Component",
        url: "https://react-entrega-s3-kenzishop-com-context-api-eduardo-boni.vercel.app/",
    },
    {
        id: 2,
        img: hub,
        title: "Kenzie Hub",
        description: "Kenziehub é um hub de portfólios de programadores da Kenzie! O objetivo dessa aplicação é conseguir criar um frontend de qualidade. Nesta aplicação o usuário poderá se cadastrar, adicionar as tecnologias que ele aprendeu e está aprendendo, assim como seus trabalhos realizados.",
        tecnology: "Html, Css, JavaScript, React, API, Axios, Component, Figma, react-router-dom, Styled-Component",
        url: "https://react-entrega-s2-kenzie-hub-eduardo-boni.vercel.app/",
    },
    {
        id: 3,
        img: burguer,
        title: "Burguer Kenzie",
        description: "A ideia é acessar uma lista de produtos de uma API e simular um carrinho de compras com React, além disso, praticar estilização com base no Figma.",
        tecnology: "Html, Css, JavaScript, React, API, Component, Figma",
        url: "https://react-entrega-s1-hamburgueria-da-kenzie-eduardo-boni.vercel.app/",
    },
    {
        id: 4,
        img: formulario,
        title: "Formulário de Cadastro",
        description: "O objetivo é criar um formulário de cadastro com React Hook Form e Yup. Também usaremos a biblioteca React Router Dom para criar páginas distintas.",
        tecnology: "Html, Css, JavaScript, React, react-hook-form, Yup, react-router-dom, Regex",
        url: "https://react-entrega-s2-formulario-de-cadastro-eduardo-boni.vercel.app/",
    },
    {
        id: 5,
        img: personagens,
        title: "Buscando personagens",
        description: "Nessa atividade você irá ter contato com o ciclo de vida do componente, além disso, treinar o uso do método de montagem utilizando o useEffect para fazer uma requisição na API. Vamos listar os personagens do Rick and Morty assim que a página for montada. Os personagens que estão vivos (Alive) serão renderizados em cards de cor verde e os demais em cor vermelha. ",
        tecnology: "Html, Css, JavaScript, React, API, Mobile First",
        url: "https://react-atividade-s1-buscando-mais-personagens-eduardo-boni.vercel.app/",
    },
    {
        id: 6,
        img: nuKenzie,
        title: "Nu Kenzie",
        description: "É uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas.",
        tecnology: "Html, Css, JavaScript, React, Component, UseState",
        url: "https://react-entrega-s1-nu-kenzie-eduardo-boni.vercel.app/",
    },
    {
        id: 7,
        img: mundoInvertido,
        title: "Mundo Invertido - Stranger Things",
        description: "Essa é uma aplicação para aperfeiçoar abilidades de HTML, CSS e JavaScript como: estruturação de página, semântica, acessibilidade, posicionamento, manipulação do DOM. Apresentado e disponibilizado pela equipe DIO.",
        tecnology: "Html, Css, JavaScript",
        url: "https://mundo-invertido-psi.vercel.app/",
    },
]