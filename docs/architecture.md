# Arquitetura

## Objetivo desta etapa

Fornecer uma base Angular simples e navegável para a evolução do site BritoDev, sem antecipar conteúdo comercial, identidade visual, integrações ou infraestrutura de publicação.

## Decisões

- **Angular 22 estável e componentes standalone:** reduz configuração e segue o padrão atual do framework.
- **Organização por funcionalidade:** páginas ficam em `features`, enquanto a estrutura persistente do site fica em `layout`.
- **Roteamento com carregamento sob demanda:** a Home e a página de rota inexistente são carregadas por `loadComponent`.
- **Sem camada compartilhada prematura:** `shared` só será criado quando existir código com uso real em mais de uma funcionalidade.
- **SCSS em duas camadas:** `_tokens.scss` concentra valores provisórios; `_base.scss` contém normalizações e regras globais essenciais. Estilos específicos permanecem junto aos componentes.
- **Aplicação estática:** não há backend, estado global, biblioteca de interface, autenticação ou persistência nesta etapa.
- **Acessibilidade básica:** a estrutura usa elementos semânticos, rótulo no menu principal, link para pular ao conteúdo e foco visível.

## Fluxo de composição

`App` compõe `SiteLayout`, que mantém cabeçalho, área principal com `router-outlet` e rodapé. O roteador insere a funcionalidade ativa na área principal.

## Evolução esperada

Novas páginas devem ser adicionadas em `features`. Componentes só devem migrar para `shared` quando forem reutilizados e tiverem uma responsabilidade clara. Serviços e interfaces devem surgir apenas quando houver comportamento ou contrato concreto que os justifique.
