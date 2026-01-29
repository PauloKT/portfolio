# Meu Portfólio

Um portfólio moderno e responsivo criado com HTML, CSS e JavaScript puro.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional
- **Totalmente Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktops
- **Navegação Suave**: Scroll suave entre seções
- **Animações**: Efeitos de animação ao fazer scroll
- **Menu Mobile**: Menu hambúrguer para dispositivos móveis

## 📋 Seções

1. **Hero**: Apresentação inicial com destaque
2. **Sobre Mim**: Informações pessoais e habilidades
3. **Objetivo Profissional**: Missão, visão e valores profissionais
4. **Projetos**: Grid de projetos com links e tecnologias utilizadas
5. **Contato**: Links para redes sociais e email

## 🛠️ Como Usar

1. Abra o arquivo `index.html` no seu navegador
2. Ou use um servidor local:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   ```

## ✏️ Personalização

### Alterar Informações Pessoais

1. **Sobre Mim**: Edite a seção `#sobre` no `index.html`
2. **Habilidades**: Modifique as tags na classe `.skills-list`
3. **Objetivo Profissional**: Atualize os cards na seção `#objetivo`

### Adicionar/Editar Projetos

Edite os cards de projeto na seção `#projetos`:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">Nome do Projeto</div>
    </div>
    <div class="project-content">
        <h3>Nome do Projeto</h3>
        <p>Descrição do projeto...</p>
        <div class="project-tech">
            <span>React</span>
            <span>Node.js</span>
        </div>
        <div class="project-links">
            <a href="URL_DO_PROJETO" class="btn btn-secondary">Ver Projeto</a>
            <a href="URL_DO_REPOSITORIO" class="btn btn-outline">Código</a>
        </div>
    </div>
</div>
```

### Atualizar Links de Contato

Na seção `#contato`, atualize os links:

```html
<a href="mailto:seuemail@example.com">Email</a>
<a href="https://linkedin.com/in/seuperfil">LinkedIn</a>
<a href="https://github.com/seuusuario">GitHub</a>
```

### Personalizar Cores

No arquivo `styles.css`, modifique as variáveis CSS:

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #8b5cf6;
    /* ... outras cores ... */
}
```

## 📱 Responsividade

O portfólio é totalmente responsivo e se adapta a:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1200px+)

## 🌐 Navegadores Suportados

- Chrome (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Edge (últimas versões)

## 📝 Licença

Este projeto é de código aberto e está disponível para uso pessoal e comercial.

## 🤝 Contribuições

Sinta-se à vontade para fazer fork, melhorar e personalizar este portfólio!

---

Desenvolvido com ❤️
