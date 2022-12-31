# Projeto feito para reciclagem de conhecimento em HTML5
## Objetivo:
- Conhecer novas atualizações em HTML5 e como tem evoluído ao longo dos anos desde o seu lançamento em 2012.
- Conhecer tag de acessibilidade, tornando mais acessível para pessoas com deficiência visual e no uso de programas para leitura de tela.
- Estrutura de HTML para técnicas de Crawling e Scraping (video abordado por Mario Souto https://www.youtube.com/watch?v=Ltdp9-ZTAzM)

# As principais mudanças e suas semânticas.
## Semântica

A principal mudança do HTML4 para o HTML5 é com relação à semântica das estruturas para técnicas como WEB SCRAPING e WEB CRAWLER que servem para ranqueamento de páginas em páginas de buscas, esta técnica são conhecidas como SEO (Search Engine Optimization), com tudo a tem muito mais a ver com a estrutura das informações no HLTML do que com lógica de programação.

## Estrutura do HTML.

 <img src="https://user-images.githubusercontent.com/6175226/210110149-7ecbb65b-6242-409a-807b-ed16acf91a9c.jpg" width="600">

## Semântica para técnicas de Scraping

A melhor construção para páginas HTML serem melhor ranqueadas em mecanismos de buscas é a estrutura apresentada na imagem acima.

Antes as divisões eram feitas por ```<div>``` com o HTML5 isso mudou, agora cada parte do site é apresentado utilizando as novas tag's ```<header>```, ```<nav>```, ```<main>```, ```<section>```, ```<article>```, ```<aside>```, ```<footer>```, ```<canvas>```

## header

Header é a tag responsável pelo título da página e as primeiras impressões que o usuário ira ter da página ao entrar, recomendável que fique no topo da página ao construir o HTML.

## nav

Nav, responsável pelo link de navegação dentro da página com links ancora que no caso de um SPA pode levar para diversos lugares numa mesma pagina, ou links que ter forte relação com o contexto da página visitada, geralmente fica no topo da página a baixo do header

## main

Main, só permite uma vez por cada arquivo HTML sempre o responsável por englobar todas as as outras tags, é como se fosse uma tag mãe de todas as outras.

## section

Section é responsável por uma seção genérica do contexto apresentado na página, podendo ter em alguns casos uma apresentação breve do que se trata a página.

## article

Article é a tag onde ira ficar o conteúdo principal da página, o melhor layout é no centro da página, tendo ao seu lado esquerdo as informações do section e ao seu lado direito os links externos do aside.

## aside

Aside é responsável por links externos que tenham ou não a ver com o conteúdo apresentado na página ( na tag article ), é fortemente recomendável que fique na página ao lado direito.

## footer

Footer, é responsável por informações de contato e assinatura da página, pode conter alguns links no contexto da empresa que sedia a página, não necessariamente os links que estão nessa tag tem a ver com o contexto do conteúdo apresentado no article.

## canvas

Canvas, particularmente a tab mais divertida do HTML5, o canvas nasceu com o proposito de substituir muitas as implementações do antigo Flash ( que atualmente é uma tecnologia considerada obsoleta para fins comerciais ), tendo inúmeras possibilidades de criação de gráficos, jogos, diferentes tipos de apresentações, podendo ser unido a programação JS ou qualquer outra linguagem suportada por um navegador abrindo inúmeras possibilidades para criação de modelos de implementação e exibição para usuários.

# Exibição de uma página comercial nesses moldes.

link da pagina: https://pptr.dev/

![asdf](https://user-images.githubusercontent.com/6175226/210113744-b5c86ba2-6755-43b3-a26c-2ddbaa24ad88.png)

# Sobre o projeto
Este projeto foi feito com o intuito de fazer uma reciclagem de conhecimento, neste projeto não fui usado nenhum .css ou .js, APENAS HTML para apresentação da nova semântica.

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)
