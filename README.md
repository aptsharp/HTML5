# Projeto feito para reciclagem de conhecimento em HTML5
## Objetivo:
- conhecer novas atualizações em HTML5 e como tem evoluido ao longo dos anos desde o seu lançamento em 2012.
- conhcer tag de acessibilidade, tornando mais acessivel para pessoas com deficiencia visual e no uso de programas para leitura de tela.
- estrutura de HTML para tecnicas de Crauling e Scraping ( video abordado por Mario Souto https://www.youtube.com/watch?v=Ltdp9-ZTAzM)

# As principais mudanças e suas semanticas.
## Semantica

A principal mudança do HTML4 para o HTML5 é com relação a semantica das estruturas para tecnicas como __WEB SCRAPING__ e __WEB CRAWLER__ que servem para ranqueamente de paginas em paginas de buscas, esta tecnica é conhecidos como __SEO__ (Search Engine Optimization), com tudo a tem muito mais a ver com a estrutura das informações no HLTML do que com logica de programação.

## Estruta do HTML.

 <img src="https://user-images.githubusercontent.com/6175226/210110149-7ecbb65b-6242-409a-807b-ed16acf91a9c.jpg" width="600" align="">

## Semantica para tecnicas de Scraping

A melhor construção para paginas HTML serem melhor ranqueadas em mecanismos de buscas é a estrutura apresentada na imagem acima.

Antes as divisões eram feitas por ```<div>``` com o HTML5 isso mudou, agora cada parate do site é apresentado em seu respectivo lugar utilizando as novas tag's ```<header>```, ```<nav>```, ```<main>```, ```<section>```, ```<article>```, ```<aside>```, ```<footer>```, ```<canvas>```

## header

Header é a tag responsavel pelo titulo da pagina pagina e as primeiras impressões que o usuario ira ter da pagina ao entrar, recomendavel que fique no topo da pagina ao costruir o HTML

## nav

Nav, responsavel pelo links de navegação dentro da pagina com link's ancora que no caso de um SPA pode levar para diversos lugares dentro de uma mesma pagina, ou links que ter forte relação com o contexto da pagina visitada, geralmente fica no topo da pagina a baixo do header

## main

Main, so permite uma vez por cada arquivo HTML sempre o responsavel por englobar todas as as outras tags, é como se fosse uma tag mãe de todas as outras.

## section

Section é responsavel por uma seção generica do contexto apresentado na pagina, podendo ter em alguns casos uma apresentação breve do que se trata a pagina.

## article

Article é a tag onde ira ficar o conteudo principal da pagina, o melhor layoute é no centro da pagina, tendo ao seu lado esquedo as informações do section e ao seu lado direito os links externos do aside.

## aside

Aside é responsavel por links externos que tenham ou não a ver com o conteudo apresentado na pagina ( na tag article ), é fortemente recomendavel que fique na pagina ao lado direito.

## footer

Footer, é responsavel por informações de contato e assinatura da pagina, pode conter alguns links no contexto da empresa que sedia a pagina, não necessariamente os links que estão nessa tag tem a ver com o contexto do conteudo apresentado no article.

## canvas

Canvas, particularmente a tab mais divertida do HTML5, o canvas nasceu com o proposito de subistituir muitas as implementações do antigo Flash ( que atualmente é uma tecnologia considerada obsoleta para fins comerciais ), tentodo inumeras possibilidades de crição de graficos, jogos, diferentes tipos de apresentações, podendo ser unido a programação JS ou qualquer outra linguagem suportada por um navegador abrindo inumeras possibilidades para crição de modelos de implentação e exibição para usuarios. 


# Exibição de uma pagina comercial nesses moldes.

link da pagina: https://pptr.dev/

![asdf](https://user-images.githubusercontent.com/6175226/210113744-b5c86ba2-6755-43b3-a26c-2ddbaa24ad88.png)

# Sobre o projeto
Este projeto foi feito com o intuito de fazer uma reciclagem de conhecimento neste projeto não fui usado nenhum .css ou .js, __APENAS HTML__ para apresentção da nova semantica.

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)
