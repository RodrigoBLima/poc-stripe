## Introdução

Este é um projeto de prova de conceito (PoC) para implementação da Stripe em uma aplicação Next.js.

## Como Começar

Primeiro, inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Implementação da Stripe

Esta PoC visa integrar pagamentos com a [Stripe](https://stripe.com/). Certifique-se de configurar suas credenciais da Stripe no ambiente da aplicação.

1. Crie uma conta na Stripe e obtenha suas chaves de API.
2. Adicione suas credenciais no arquivo `.env.local`:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_public_key
   STRIPE_SECRET_KEY=your_secret_key
   ```

## Deploy na Vercel

A forma mais simples de implantar sua aplicação Next.js é usando a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), criada pelos desenvolvedores do Next.js.

Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

