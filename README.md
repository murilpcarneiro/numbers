# Numbers - Sorteador de Números Online 🎲

Um sorteador de números online e gratuito, desenvolvido com HTML, CSS e JavaScript. Gere números aleatórios de forma rápida, fácil e segura diretamente no seu navegador.

## ✨ Features

- 🎯 **Sorteio Customizável** - Defina a quantidade, mínimo e máximo
- 🔄 **Sem Repetição** - Opção para sortear números únicos
- ✅ **Validações Completas** - Mensagens de erro amigáveis e claras
- 🎬 **Animações Suaves** - Efeito popIn com sequência e transições
- 🌈 **Design Moderno** - Gradientes, tema escuro e borda animada
- 📱 **Totalmente Responsivo** - Mobile, tablet e desktop
- ♿ **Acessível** - ARIA labels e suporte a leitores de tela
- ⚡ **Sem Dependências Externas** - Puro HTML, CSS e JavaScript

## 🎨 Demonstração Visual

### Sorteio com Animação

Os números aparecem com um efeito de quadrado giratório que muda de cor:

- **Cor inicial:** Roxo/Rosa (`#d586e0`)
- **Cor final:** Azul (`#91a1fa`)
- **Duração:** 2.6 segundos por número
- **Sequência:** Cada número anima após o anterior terminar

### Hover dos Botões

Os botões "Sortear" e "Sortear Novamente" ganham uma borda arco-íris animada ao passar o mouse:

- **Cores:** Verde → Amarelo → Rosa → Roxo → Azul
- **Duração:** 6 segundos infinitos
- **Efeito:** Rotação suave do gradiente

## 🚀 Como Usar

1. **Abra o arquivo `index.html` no navegador**

   - Clique duas vezes no arquivo, ou
   - Arraste para o navegador, ou
   - Use Live Server no VS Code

2. **Preencha o formulário:**

   - **Números:** Quantos números quer sortear (1-100)
   - **De:** Valor mínimo do intervalo
   - **Até:** Valor máximo do intervalo
   - **Não repetir número (opcional):** Marque para números únicos

3. **Clique em "Sortear"**

   - Os números aparecem com animação
   - Uma mensagem de sucesso é exibida
   - O botão é desabilitado durante a animação (3 segundos)

4. **Veja os resultados ou clique em "Sortear Novamente"**
   - Para fazer um novo sorteio, clique no botão

## 📋 Validações Implementadas

O projeto valida automaticamente:

| Validação                                  | Comportamento                   |
| ------------------------------------------ | ------------------------------- |
| **Campos vazios**                          | Exibe mensagem de erro          |
| **Valores não numéricos**                  | Rejeita e mostra alerta         |
| **Máximo ≤ Mínimo**                        | Avisa que máximo deve ser maior |
| **Quantidade ≤ 0**                         | Rejeita valores inválidos       |
| **Sem repetição + intervalo insuficiente** | Mensagem detalhada do problema  |

## 🛠️ Estrutura do Projeto

```
numbers/
├── index.html              # Estrutura HTML principal
├── script.js              # Lógica JavaScript
├── assets/                # Imagens e ícones
│   ├── logo.svg
│   ├── arrow.svg
│   └── Shapes1x.png
└── styles/
    ├── index.css          # Importa todos os estilos
    ├── global.css         # Reset, variáveis CSS, background
    ├── accessibility.css  # Classes de acessibilidade
    ├── logo.css          # Estilo do logo
    ├── header.css        # Estilo do cabeçalho
    ├── content-form.css  # Estilo do formulário
    ├── messages.css      # Estilo das mensagens
    ├── questions.css     # Seção de FAQ
    ├── results.css       # Estilo dos resultados + animações
    └── media.css         # Media queries responsivas
```

## 🎯 Tecnologias Utilizadas

- **HTML5** - Semântica e acessibilidade
- **CSS3 Moderno** - Nested selectors, Grid, Flexbox, Animations, Gradientes
- **JavaScript ES6+** - DOM manipulation, validações, event listeners
- **Google Fonts** - Inter, Roboto Flex, Roboto Mono, Sora

## 📐 Breakpoints Responsivos

| Dispositivo      | Resolução      | Layout              |
| ---------------- | -------------- | ------------------- |
| Mobile           | até 480px      | Stack vertical      |
| Mobile M         | 480px - 768px  | 1 coluna            |
| Tablet           | 768px - 1024px | 1 coluna            |
| Desktop          | 1024px+        | 2 colunas (grid)    |
| Desktops grandes | 1440px+        | 2 colunas espaçadas |

## 🎬 Animações

### PopIn (Quadrado dos números)

```
0% → scale(0), rotate(0deg)
2.6s → scale(1.1), rotate(180deg)
```

### Fade In (Número)

```
Começa em 1s, totalmente visível em 2.6s
```

### Color Change (Roxo → Azul)

```
Transição suave de cor durante toda a duração do sorteio
```

### Rotate Border (Borda dos botões)

```
Rotação de 0deg a 360deg em 6s infinitos
```

## ⚙️ Detalhes Técnicos

### Lógica de Sorteio

**Com repetição:**

```javascript
// Gera números aleatórios permitindo duplicatas
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
```

**Sem repetição:**

```javascript
// Valida se já existe antes de adicionar
if (!drawnNumbers.includes(randomNum)) {
  drawnNumbers.push(randomNum)
}
```

### Acessibilidade

- `aria-label` em elementos interativos
- `aria-labelledby` para relacionar títulos
- `aria-live="polite"` para mensagens dinâmicas
- `aria-hidden="true"` em ícones decorativos
- Contraste de cores WCAG AA

### Performance

- CSS nativo (sem Bootstrap ou Tailwind)
- Animações otimizadas (transform, opacity)
- Sem bibliotecas externas
- Carregamento instantâneo

## 🖼️ Customização

### Cores (em `styles/global.css`)

```css
:root {
  --gradient-border: linear-gradient(
    90deg,
    #77c0af 0%,
    #d1dc97 14.84%,
    #e9a9b3 32.15%,
    #d586e0 65.79%,
    #91a1fa 84.58%
  );
  --content-brand: #9b7be5;
  --background-tertiary: #242b36;
}
```

### Duração das Animações (em `styles/results.css`)

```css
animation: fadeIn 1.6s 1s ease-in-out forwards, colorChange 2.6s ease-in-out
    forwards;
```

## 📦 Como Fazer Deploy

### GitHub Pages

1. Crie um repositório no GitHub
2. Faça push dos arquivos
3. Vá em **Settings → Pages**
4. Selecione **main branch** como source
5. Seu site estará em `https://seu-usuario.github.io/numbers`

### Netlify

1. Conecte seu GitHub
2. Selecione o repositório
3. Deixe as configurações padrão
4. Deploy automático em cada push

## 📱 Compatibilidade

- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari 14+
- ✅ iOS Safari
- ✅ Chrome Android

## 🎓 Aprendizados

Este projeto demonstra:

- ✨ CSS Grid e Flexbox avançados
- 🎬 Animações CSS complexas com delays
- 🔄 Lógica de validação em JavaScript
- ♿ Boas práticas de acessibilidade
- 📱 Design responsivo mobile-first
- 🎨 Design system com CSS variables
- 🧹 Código limpo e bem organizado

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 👨‍💻 Desenvolvedor

Criado como projeto de aprendizado em Rocketseat.

---

**Gostou do projeto?** ⭐ Deixe uma estrela no GitHub!

**Tem sugestões?** 💡 Abra uma issue ou envie um pull request.

**Quer contribuir?** 🤝 Sinta-se à vontade para fazer um fork e melhorar!
