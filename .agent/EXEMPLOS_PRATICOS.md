# 🎯 Exemplos Práticos de Skills para KMPinformatica

## 📋 Índice de Exemplos

1. [Frontend Design](#1-frontend-design)
2. [React Best Practices](#2-react-best-practices)
3. [SEO Audit](#3-seo-audit)
4. [UI/UX Pro Max](#4-uiux-pro-max)
5. [Systematic Debugging](#5-systematic-debugging)
6. [Git Pushing](#6-git-pushing)
7. [API Security](#7-api-security)
8. [Database Design](#8-database-design)

---

## 1. Frontend Design

### 📖 O que faz?
Cria interfaces frontend distintivas e de nível profissional com estética intencional, alta qualidade e identidade visual não-genérica.

### 🎯 Quando usar?
- Criando landing pages
- Desenvolvendo componentes de UI
- Melhorando design visual
- Criando dashboards
- Desenvolvendo páginas de produtos

### 💡 Exemplos de Uso

#### Exemplo 1: Criar Landing Page Moderna
```
@frontend-design crie uma landing page para KMPinformatica com:
- Estética: Editorial Brutalism com toques de Luxury Minimal
- Cores: Dominante azul profundo, acento dourado, neutros cinza
- Tipografia: Display font expressiva para títulos, fonte limpa para corpo
- Elementos memoráveis: Hero section com animação de entrada impactante
- Layout: Assimétrico com uso intencional de espaço negativo
```

#### Exemplo 2: Redesenhar Componente de Card
```
@frontend-design redesenhe o componente de card de produtos com:
- Direção estética: Industrial Utilitarian
- Foco em: Hierarquia visual clara e interações sutis
- Evitar: Layouts genéricos de template
- Incluir: Hover states significativos e textura sutil
```

### ✅ Checklist da Skill
- [ ] Direção estética clara definida
- [ ] DFII (Design Feasibility & Impact Index) ≥ 8
- [ ] Um elemento de design memorável
- [ ] Sem fontes/cores/layouts genéricos
- [ ] Código corresponde à ambição do design
- [ ] Acessível e performático

---

## 2. React Best Practices

### 📖 O que faz?
Guia de otimização de performance para aplicações React e Next.js, mantido pela Vercel. Contém 45 regras em 8 categorias.

### 🎯 Quando usar?
- Escrevendo novos componentes React
- Implementando data fetching
- Revisando código para problemas de performance
- Refatorando código React/Next.js
- Otimizando bundle size ou tempos de carregamento

### 💡 Exemplos de Uso

#### Exemplo 1: Otimizar Performance de Componente
\`\`\`
@react-best-practices revise este componente e otimize:

import React, { useState, useEffect } from 'react';

function ProductList({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    setFilteredProducts(products.filter(p => p.active));
  }, [products]);
  
  return (
    <div>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
\`\`\`

#### Exemplo 2: Eliminar Waterfalls em Data Fetching
\`\`\`
@react-best-practices ajude-me a eliminar waterfalls nesta página:

async function ProductPage({ params }) {
  const product = await fetchProduct(params.id);
  const reviews = await fetchReviews(params.id);
  const relatedProducts = await fetchRelated(product.category);
  
  return <ProductDetail product={product} reviews={reviews} related={relatedProducts} />;
}
\`\`\`

### 🎯 Categorias Prioritárias
1. **CRÍTICO**: Eliminating Waterfalls
2. **CRÍTICO**: Bundle Size Optimization
3. **ALTO**: Server-Side Performance
4. **MÉDIO-ALTO**: Client-Side Data Fetching
5. **MÉDIO**: Re-render Optimization

---

## 3. SEO Audit

### 📖 O que faz?
Realiza auditoria completa de SEO e sugere melhorias para otimização em mecanismos de busca.

### 🎯 Quando usar?
- Lançando novo site
- Melhorando ranking de busca
- Auditando páginas existentes
- Implementando meta tags
- Otimizando conteúdo

### 💡 Exemplos de Uso

#### Exemplo 1: Auditoria Completa do Site
\`\`\`
@seo-audit faça uma auditoria completa do site KMPinformatica e sugira melhorias para:
- Meta tags (title, description)
- Estrutura de headings
- URLs amigáveis
- Schema markup
- Performance e Core Web Vitals
- Mobile-friendliness
\`\`\`

#### Exemplo 2: Otimizar Página de Produto
\`\`\`
@seo-audit otimize esta página de produto para SEO:
- URL atual: /produto?id=123
- Título: "Produto"
- Sem meta description
- Imagens sem alt text
- Sem schema markup de produto
\`\`\`

---

## 4. UI/UX Pro Max

### 📖 O que faz?
Sistemas de design premium com tokens de design, componentes reutilizáveis e padrões de interface de alta qualidade.

### 🎯 Quando usar?
- Criando design system
- Definindo tokens de design
- Padronizando componentes
- Estabelecendo guidelines visuais

### 💡 Exemplos de Uso

#### Exemplo 1: Criar Design System
\`\`\`
@ui-ux-pro-max crie um design system completo para KMPinformatica incluindo:
- Paleta de cores (primária, secundária, neutros, feedback)
- Tipografia (escala, pesos, line-heights)
- Espaçamento (sistema de 8pt grid)
- Componentes base (buttons, inputs, cards)
- Tokens CSS customizáveis
\`\`\`

#### Exemplo 2: Componente de Botão Premium
\`\`\`
@ui-ux-pro-max crie um componente de botão premium com:
- Variantes: primary, secondary, outline, ghost
- Tamanhos: sm, md, lg
- Estados: default, hover, active, disabled, loading
- Acessibilidade: focus states, keyboard navigation
- Animações sutis e profissionais
\`\`\`

---

## 5. Systematic Debugging

### 📖 O que faz?
Abordagem sistemática e profissional para debugging de código.

### 🎯 Quando usar?
- Encontrando bugs difíceis
- Debugando problemas de performance
- Investigando comportamentos inesperados
- Resolvendo erros em produção

### 💡 Exemplos de Uso

#### Exemplo 1: Debug de Erro em Produção
\`\`\`
@systematic-debugging ajude-me a debugar este erro que só acontece em produção:

Erro: "Cannot read property 'map' of undefined"
Componente: ProductList
Contexto: Acontece aleatoriamente ao carregar a página
Logs: Nenhum erro no console local
\`\`\`

#### Exemplo 2: Investigar Problema de Performance
\`\`\`
@systematic-debugging investigue por que a página está lenta:

Sintomas:
- Tempo de carregamento: 5-7 segundos
- FCP (First Contentful Paint): 3.2s
- LCP (Largest Contentful Paint): 5.8s
- Muitos re-renders no componente principal
\`\`\`

---

## 6. Git Pushing

### 📖 O que faz?
Melhores práticas para commits, branches e gestão de código com Git.

### 🎯 Quando usar?
- Fazendo commits
- Criando branches
- Fazendo merge/rebase
- Resolvendo conflitos
- Organizando histórico

### 💡 Exemplos de Uso

#### Exemplo 1: Estruturar Commits
\`\`\`
@git-pushing ajude-me a organizar estes commits:

Mudanças:
- Adicionei novo componente Header
- Corrigi bug no Footer
- Atualizei README
- Refatorei ProductCard
- Adicionei testes para Header
\`\`\`

#### Exemplo 2: Resolver Conflito de Merge
\`\`\`
@git-pushing ajude-me a resolver este conflito de merge:

Branch atual: feature/new-header
Branch de destino: main
Conflitos em: src/components/Header.tsx, src/styles/global.css
\`\`\`

---

## 7. API Security

### 📖 O que faz?
Melhores práticas de segurança para APIs, incluindo autenticação, autorização e proteção contra vulnerabilidades.

### 🎯 Quando usar?
- Criando APIs
- Implementando autenticação
- Auditando segurança
- Protegendo endpoints
- Validando inputs

### 💡 Exemplos de Uso

#### Exemplo 1: Auditar Segurança de API
\`\`\`
@api-security-best-practices audite a segurança desta API:

Endpoints:
- POST /api/products (criar produto)
- GET /api/products/:id (obter produto)
- PUT /api/products/:id (atualizar produto)
- DELETE /api/products/:id (deletar produto)

Preocupações:
- Sem autenticação implementada
- Sem validação de input
- Sem rate limiting
\`\`\`

#### Exemplo 2: Implementar Autenticação Segura
\`\`\`
@api-security-best-practices implemente autenticação segura para:
- Sistema: Next.js 14 com App Router
- Requisitos: JWT tokens, refresh tokens, proteção CSRF
- Endpoints protegidos: /api/admin/*
- Níveis de acesso: admin, user, guest
\`\`\`

---

## 8. Database Design

### 📖 O que faz?
Design de schema de banco de dados, seleção de ORM e otimização de queries.

### 🎯 Quando usar?
- Criando novo banco de dados
- Modelando entidades
- Otimizando queries
- Escolhendo ORM
- Definindo relacionamentos

### 💡 Exemplos de Uso

#### Exemplo 1: Modelar Schema de E-commerce
\`\`\`
@database-design crie um schema para e-commerce com:

Entidades:
- Produtos (nome, descrição, preço, estoque, categoria)
- Categorias (nome, descrição, parent_category)
- Pedidos (cliente, produtos, total, status, data)
- Clientes (nome, email, telefone, endereço)
- Avaliações (produto, cliente, rating, comentário)

Requisitos:
- Suporte a múltiplas imagens por produto
- Histórico de preços
- Carrinho de compras persistente
\`\`\`

#### Exemplo 2: Otimizar Query Lenta
\`\`\`
@database-design otimize esta query que está lenta:

SELECT p.*, c.name as category_name, AVG(r.rating) as avg_rating
FROM products p
LEFT JOIN categories c ON p.category_id = c.id
LEFT JOIN reviews r ON r.product_id = p.id
WHERE p.active = true
GROUP BY p.id
ORDER BY avg_rating DESC
LIMIT 20;

Problema: Demora 3-5 segundos com 10k produtos
\`\`\`

---

## 🚀 Combinando Skills

### Exemplo: Criar Feature Completa

\`\`\`
Vou criar uma nova página de produtos para KMPinformatica. Vamos usar múltiplas skills:

1. @concise-planning crie um plano detalhado para implementar:
   - Página de listagem de produtos
   - Filtros por categoria e preço
   - Busca com autocomplete
   - Paginação
   - Responsivo mobile-first

2. @database-design modele o schema necessário para produtos, categorias e filtros

3. @frontend-design crie o design da interface com estética moderna e distintiva

4. @react-best-practices implemente os componentes com otimização de performance

5. @api-security-best-practices proteja os endpoints da API

6. @seo-audit otimize a página para SEO

7. @systematic-debugging teste e corrija quaisquer problemas

8. @git-pushing organize os commits e faça push para o repositório
\`\`\`

---

## 📚 Recursos Adicionais

### Documentação das Skills
- **Catálogo Completo**: `.agent/skills/CATALOG.md`
- **Bundles**: `.agent/skills/docs/BUNDLES.md`
- **Getting Started**: `.agent/skills/docs/GETTING_STARTED.md`

### Skills Individuais
Cada skill tem sua documentação em:
`.agent/skills/skills/[nome-da-skill]/SKILL.md`

### Atualizar Skills
\`\`\`bash
cd .agent/skills
git pull
\`\`\`

---

**Última Atualização:** 2026-02-05  
**Versão:** v4.0.0 Enterprise Edition
