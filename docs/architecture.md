# Arquitetura

## Objetivo

Apresentar a BritoDev e o trabalho de André Brito em uma experiência estática, rápida e acessível, direcionada tanto a negócios quanto a parceiros de tecnologia.

## Decisões

- **Angular 22 estável e componentes standalone:** reduz configuração e segue o padrão atual do framework.
- **Organização por funcionalidade:** páginas ficam em `features`, enquanto a estrutura persistente do site fica em `layout`.
- **Seções da Home como componentes:** cada trecho da narrativa possui responsabilidade, conteúdo e estilo próprios em `features/home/sections`.
- **Roteamento com carregamento sob demanda:** a Home e a página de rota inexistente são carregadas por `loadComponent`.
- **Sem camada compartilhada prematura:** `shared` só será criado quando existir código com uso real em mais de uma funcionalidade.
- **SCSS em duas camadas:** `_tokens.scss` concentra a identidade visual; `_base.scss` expõe tokens como propriedades CSS e contém regras globais essenciais. Estilos específicos permanecem junto aos componentes.
- **Ícones vetoriais seletivos:** `@lucide/angular` fornece componentes standalone e permite incluir apenas os ícones efetivamente usados.
- **Aplicação estática:** não há backend, estado global, biblioteca de interface, autenticação ou persistência nesta etapa.
- **Acessibilidade:** a estrutura usa elementos semânticos, rótulos de navegação, link para pular ao conteúdo, foco visível, menu mobile com estado exposto e redução de movimento conforme preferência do sistema.
- **SEO técnico estático:** `index.html` concentra canonical, metadados sociais e dados estruturados; `robots.txt` e `sitemap.xml` são publicados como assets. A Home restaura a diretiva de indexação e a página de rota inexistente aplica `noindex`.

## Fluxo de composição

`App` compõe `SiteLayout`, que mantém cabeçalho, área principal com `router-outlet` e rodapé. O roteador insere a funcionalidade ativa na área principal. A Home atua apenas como composição das seções de apresentação, serviços, processo, projetos, trajetória e contato.

## Evolução esperada

Novas páginas devem ser adicionadas em `features`. Componentes só devem migrar para `shared` quando forem reutilizados e tiverem uma responsabilidade clara. Serviços e interfaces devem surgir apenas quando houver comportamento ou contrato concreto que os justifique.
