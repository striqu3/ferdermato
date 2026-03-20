# Site da Dra. Fernanda Aguiar - Dermatologista

Site profissional responsivo para a Dra. Fernanda Aguiar, especialista em dermatologia estética e naturalização facial em Ponta Grossa, PR.

## 🎯 Características

- **Design Responsivo**: Totalmente otimizado para desktop, tablet e mobile
- **SEO Otimizado**: Meta tags, JSON-LD Schema Markup e dados estruturados
- **Performance**: Imagens otimizadas, CSS e JS minificados, cache busting
- **Acessibilidade**: Semântica HTML5, atributos alt descritivos
- **Sem Dependências**: HTML/CSS/JavaScript puro, sem frameworks
- **Pronto para Produção**: Estrutura limpa, código bem organizado

## 📁 Estrutura do Projeto

```
site_dra_fernanda/
├── index.html              # Página principal com JSON-LD
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos principais (v1.0)
│   ├── js/
│   │   └── script.js       # JavaScript interativo (v1.0)
│   └── images/
│       ├── hero.jpg        # Imagem hero otimizada
│       ├── clinica.jpg     # Foto do consultório
│       ├── procedimento.jpg # Imagem de procedimento
│       └── botox.jpg       # Imagem de botox
├── .gitignore             # Arquivos a ignorar no Git
└── README.md              # Este arquivo
```

## 🚀 Deployment no Cloudflare Pages

### Opção 1: Conectar GitHub (Recomendado)

1. **Fazer push para GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Site Dra. Fernanda Aguiar"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/site-dra-fernanda.git
   git push -u origin main
   ```

2. **Conectar ao Cloudflare Pages:**
   - Acesse [Cloudflare Pages](https://pages.cloudflare.com/)
   - Clique em "Create a project"
   - Selecione seu repositório GitHub
   - Build settings:
     - **Framework preset**: None
     - **Build command**: (deixar vazio)
     - **Build output directory**: / (raiz do projeto)
   - Clique em "Save and Deploy"

### Opção 2: Upload Direto

1. **Compactar o projeto:**
   ```bash
   zip -r site-dra-fernanda.zip .
   ```

2. **Fazer upload:**
   - Acesse [Cloudflare Pages](https://pages.cloudflare.com/)
   - Clique em "Upload assets"
   - Selecione o arquivo .zip
   - Confirme o deployment

## 🔍 SEO e Dados Estruturados

O site inclui:

- **Meta Tags Otimizadas**: Título, descrição, keywords com foco em SEO local
- **Open Graph Tags**: Para compartilhamento em redes sociais
- **JSON-LD Schema Markup**: LocalBusiness e MedicalBusiness
- **Atributos Alt**: Em todas as imagens para acessibilidade e Google Imagens
- **Cache Busting**: Query strings de versão (v=1.0) em CSS e JS

## ⚡ Performance

- **Imagens Otimizadas**: Reduzidas em ~50% sem perda visual
- **CSS Modular**: Organizado por seções
- **JavaScript Eficiente**: Sem dependências externas
- **Lazy Loading**: Suporte para carregamento progressivo

## 📱 Responsividade

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🎨 Paleta de Cores

- **Primária**: #8B5CF6 (Roxo)
- **Secundária**: #EC4899 (Rosa)
- **Destaque**: #F59E0B (Âmbar)
- **Sucesso**: #10B981 (Verde)

## 📞 Informações de Contato

- **Telefone/WhatsApp**: (42) 99163-8636
- **Email**: contato@drafernandaaguiar.com
- **Endereço**: Rua Sete de Setembro, 800, Centro, Ponta Grossa - PR
- **Instagram**: [@fernanda_dermato](https://www.instagram.com/fernanda_dermato/)
- **TikTok**: [@fernanda_dermato](https://www.tiktok.com/@fernanda_dermato)

## 📋 Credenciais Profissionais

- **CRM/PR**: 30977
- **RQE**: 22311
- **Formação**: Médica Dermatologista pela UNIRIO
- **Membro**: Sociedade Brasileira de Dermatologia (SBD)

## 🔒 Segurança

- Sem dados sensíveis no código
- Formulário redireciona para WhatsApp
- Sem armazenamento de dados no servidor

## 📝 Licença

© 2026 Dra. Fernanda Aguiar. Todos os direitos reservados.

## 🤝 Suporte

Para dúvidas ou alterações, entre em contato através do WhatsApp: (42) 99163-8636

---

**Desenvolvido com ❤️ para Dra. Fernanda Aguiar**
