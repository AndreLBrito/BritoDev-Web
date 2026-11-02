# BritoDev-Web

Site profissional da BritoDev, marca de André Brito para desenvolvimento de sites, sistemas, automações, integrações e manutenção de software.

O site apresenta serviços para pequenas empresas e profissionais, além de apoio técnico para software houses e agências que trabalham com C#/.NET, Delphi e Lazarus.

## Tecnologias

- Angular 22 com componentes standalone e carregamento lazy.
- TypeScript em modo strict.
- Angular Router com navegação por âncoras.
- SCSS com tokens de design e estilos encapsulados por componente.
- Lucide Angular para ícones vetoriais carregados seletivamente.
- ESLint, Prettier e EditorConfig para qualidade e consistência.

## Pré-requisitos

- Node.js compatível com Angular 22: `^22.22.3`, `^24.15.0` ou `^26.0.0`.
- npm, incluído na instalação do Node.js.

O projeto foi criado e validado com Node.js 24.18.0 e npm 11.16.0.

## Instalação

```bash
npm install
```

## Execução local

```bash
npm start
```

Por padrão, o servidor de desenvolvimento fica disponível em `http://localhost:4200`.

## Validação

```bash
npm run build
npm run lint
npm run format:check
```

Para aplicar a formatação automaticamente:

```bash
npm run format
```

## Estrutura

- `src/app/layout`: cabeçalho, rodapé e composição estrutural persistente.
- `src/app/features/home/sections`: seções independentes da página inicial.
- `src/app/features/not-found`: experiência para rotas inexistentes.
- `src/styles`: tokens visuais e estilos globais essenciais.
- `public/images` e `public/icons`: fotografia e identidade visual estática.
- `docs/architecture.md`: decisões técnicas e de organização.
- `docs/content-sources.md`: fontes públicas usadas para validar conteúdo profissional.
- `docs/design-references.md`: referências de composição e direção visual.

## Escopo

A aplicação é estática e não possui backend, formulário, autenticação, API própria ou banco de dados. Os canais de contato direcionam para perfis profissionais externos.
