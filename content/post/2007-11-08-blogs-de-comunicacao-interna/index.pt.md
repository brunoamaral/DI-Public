---
title: Blogs de Comunicação Interna
author: Bruno Amaral
type: post
options:
  unlisted: false
  showHeader: false
date: 2007-11-08T08:00:56+00:00
slug: /blogs-de-comunicacao-interna/
shorturls:
  - 'a:7:{s:9:"permalink";s:61:"http://www.brunoamaral.com/post/blogs-de-comunicacao-interna/";s:7:"tinyurl";s:25:"http://tinyurl.com/6xcesh";s:4:"isgd";s:17:"http://is.gd/pFac";s:5:"bitly";s:20:"http://bit.ly/3hWnID";s:5:"snipr";s:22:"http://snipr.com/euy84";s:5:"snurl";s:22:"http://snurl.com/euy84";s:7:"snipurl";s:24:"http://snipurl.com/euy84";}'
  - 'a:7:{s:9:"permalink";s:61:"http://www.brunoamaral.com/post/blogs-de-comunicacao-interna/";s:7:"tinyurl";s:25:"http://tinyurl.com/6xcesh";s:4:"isgd";s:17:"http://is.gd/pFac";s:5:"bitly";s:20:"http://bit.ly/3hWnID";s:5:"snipr";s:22:"http://snipr.com/euy84";s:5:"snurl";s:22:"http://snurl.com/euy84";s:7:"snipurl";s:24:"http://snipurl.com/euy84";}'
btc_comment_counts:
  - 'a:0:{}'
  - 'a:0:{}'
btc_comment_summary:
  - 'a:0:{}'
  - 'a:0:{}'
bttc_cache:
  - 1257354705:0
  - 1257354705:0
bttc_short_url:
  - http://bit.ly/IEa3s
  - http://bit.ly/IEa3s
categories:
  - Relações Públicas
tags:
  - author
  - comunicação interna
  - escs
  - mestrado
  - plugins
  - template
  - turma
  - wordpress

---
Isto de andar a dizer que os blogs são óptimas ferramentas de comunicação é muito giro. Mas falar é fácil, montar o esquema é completamente diferente.

No meio académico encontramos blogs usados para comunicação interna com mais frequência. Seja por iniciativa dos professores ou dos alunos. E como já vos disse, estou a tirar um mestrado de Relações Públicas na ESCS. Conseguem imaginar um ambiente melhor para a aplicação de um blog?

E como aqui se tem falado pouco de blogging, vou aproveitar para vos deixar a receita completa.

### Levantamento de Necessidades

O primeiro passo é reconhecer as necessidades de comunicação. Vamos precisar de fazer upload de ficheiros? Há algum requisito de segurança? Então vamos precisar de utilizadores registados.

Também é essencial compreender que tipo de conteúdos vamos publicar. Hoje em dia um blog de uma turma contém vídeos, documentos de word, PDFs&#8230; Estes conteúdos devem ser divididos consoante a disciplina a que se referem. Também convém que o autor dos mesmos tenha toda a liberdade para os publicar e catalogar editar.

Mas vamos levar a ideia um bocadinho mais longe. neste género de grupos é importante haver troca de contactos entre os elementos. Por isso se calhar faz sentido que cada utilizador registado tenha a sua página de perfil. Completa com foto.

### A Plataforma

Nem pensei duas vezes. Adoro o [wordpress][1] pela facilidade com que o podemos costumizar e acrescentar funções. Além disso já possui a função de utilizadores registados, protecção de posts com password, categorias de posts e até informação de contacto para os utilizadores registados.

A versão actual do wordpress tem também uma opção para que o blog não seja indexado pelos motores de busca. Isto pode parecer contra-produtivo. Mas não se esqueçam que se trata de um blog interno.

### Os Plugins

Lembram-se de eu ter dito que é um blog interno? Então não faz sentido que toda a gente se registe. É aqui que entra o [Bouncer][2]. Este plugin deixa que qualquer pessoa se registe, mas um administrador tem de aprovar o utilizador para que ele possa receber a password.

Para segurança acrescida, temos ainda o [Role Manager][3] e [User Permissions][4]. Em conjunto estes dois plugins dão-nos mais liberdade para definir a segurança dos conteúdos. O role manager serve para mudar o nome dado por defeito aos diferentes niveis de utilizador (subscriber pode passar a aluno, por exemplo) ou para costumizar as permissões de cada nivel de segurança.

O plugin User Permissions deixa-nos definir permissões de leitura para cada página ou post. O único senão é que implica mais um passo no processo de publicação.

Para fidelizar melhor os visitantes do blog podemos usar dois plugins, o [Subscribe2][5] e o [Subscribe to Comments][6]. Este último envia um e-mail sempre que há um novo comentário num post em que participámos. O primeiro, Subscribe2, tem a função de uma newsletter que cada utilizador pode costumizar. Assim recebemos um e-mail sempre que houver posts novos nas categorias que nos interessam. Diminuimos a quantidade de informação que chega ao utilizador e garantimos que é do interesse do destinatário.

Para facilitar a publicação de vídeos do YouTube temos o [Viper&#8217;s Video Quicktags][7]. Este plugin é o equivalente a uma aspirina, evita dores de cabeça. Em vez de fazer copy-paste do código do vídeo, só temos de indicar a morada.

Como bónus, instalei o plugin para implementar o serviço de Gravatar. Não só para mostrar a foto dos utilizadores nos comentários, mas também para ser usada na página de perfil (author.php).

### Os Extras

Para mim tem bastante interesse existir um [directório com a lista dos utilizadores registados e um link para o respectivo perfil][8]. Onde cada um tem liberdade para partilhar informação sobre si e listar os posts que já colocou no blog.

Fazer isto tornou-se mais fácil do que imaginei porque o wordpress já tem a base necessária. Comecei por criar uma página que mostra todos os utilizadores registados através da função wp\_list\_authors();

No entanto esta função não mostra utilizadores que ainda não tenham posts. Para isso podemos fazer uma pequena alteração no ficheiro author-template.php. Tanto na função que controla a criação desta lista, como na que gere as páginas de erro e está no ficheiro classes.php (404).

Como esta parte é mais técnica e o post já vai longo, ficam aqui com a síntese das alterações que tive de fazer no código do wordpress.

#### Classes.php

Procurar a linha:

`if ( (0 == count($wp_query->posts)) && !is_404() && !is_search() && ( $this->did_permalink || (!empty($_SERVER['QUERY_STRING']) && (false === strpos($_SERVER['REQUEST_URI'], '?'))) ) )<br />
` 
  
Substituir por:
  
`<br />
if ( (0 == count($wp_query->posts)) && !is_404() && !is_author() && !is_search() && ( $this->did_permalink || (!empty($_SERVER['QUERY_STRING']) && (false === strpos($_SERVER['REQUEST_URI'], '?'))) ) ) {`

#### Author-template.php

Procurar:

`if ( $posts == 0 ) {if ( !$hide_empty ) $link = $name;} else {$link = '<a href="' . get_author_posts_url($author->ID, $author->user_nicename) . '" title="' . sprintf(__("Posts by %s"), attribute_escape($author->display_name)) . '">' . $name . '</a>';`

E substituir por:

`if ( $posts == 0 ) { if ( !$hide_empty )`

`/*$link = $name;*/` ```$link = '<a href="' . get_author_posts_url($author->ID, $author->user_nicename) . '" title="' . sprintf(__("Posts by %s"), attribute_escape($author->display_name)) . '">' . $name . '</a>';``} else {``$link = '<a href="' . get_author_posts_url($author->ID, $author->user_nicename) . '" title="' . sprintf(__("Posts by %s"), attribute_escape($author->display_name)) . '">' . $name . '</a>';``(Imagino que esta minha alteração no código esteja um bocadinho redundante, mas foi o que me pareceu melhor na altura e funciona.)`

#### Author.php

Este ficheiro vai determinar como é mostrada a informação de cada utilizador.
  
```<h1>About: <?php echo $curauth->display_name; ?></h1><br />
<img src="<a href="http://www.gravatar.com/avatar.php?gravatar_id=<?php">http://www.gravatar.com/avatar.php?gravatar_id=<?php</a> echo md5($curauth->user_email); ?>" alt="Gravatar" style="border: 5px solid #dfdfdf" />``<dl><br />
<dt>E-mail</dt><br />
<dd><?php echo $curauth->user_email; ?></dd>``<dt>AIM / MSN</dt><br />
<dd><?php echo $curauth->aim;?></dd>``<dt>Gtalk</dt><br />
<dd><?php echo $curauth->jabber;?></dd>``<dt>Website</dt><br />
<dd><a href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->user_url; ?></a></dd>``<dt>More profile information</dt><br />
<dd><?php echo $curauth->user_description; ?></dd><br />
</dl>`

E pronto, é tudo. Para sugestões, reclamações ou outro tipo de feedback, a caixa de comentários está sempre disponível. Digam-me fariam de diferente ou o que acham que podia estar melhor.

 [1]: http://www.wordpress.org
 [2]: http://www.simson-demmer.net/pub/NutsAndBolts/bouncer
 [3]: http://redalt.com/Resources/Plugins/Role+Manager
 [4]: http://urbangiraffe.com/plugins/user-permissions/
 [5]: http://subscribe2.wordpress.com/
 [6]: http://txfx.net/code/wordpress/subscribe-to-comments/
 [7]: http://www.viper007bond.com/wordpress-plugins/vipers-video-quicktags/
 [8]: http://codex.wordpress.org/Author_Templates