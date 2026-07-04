# Simulado · Arquitetura de Redes

Simulado interativo para estudo da disciplina de Arquitetura de Redes I (UNESC), com questões de múltipla escolha, feedback imediato, videoaulas por tema e um modo de simulado completo com correção automática.

## Estrutura do repositório

```
├── index.html        # página principal
├── css/style.css     # estilos
└── js/script.js      # dados das questões + lógica da aplicação
```

## Como usar

Basta abrir o arquivo [`index.html`](index.html) diretamente no navegador, ou acessar o site publicado via GitHub Pages. Não há dependências externas nem processo de build — os três arquivos (`.html`, `.css`, `.js`) precisam apenas continuar na mesma estrutura de pastas.

## Funcionalidades

- **Início** — visão geral do progresso: quantidade de simulados feitos, última nota, melhor nota e o tema com mais dificuldade.
- **Videoaulas** — vídeos do YouTube organizados por tema.
- **Praticar por tema** — questões de um tema específico, uma de cada vez, com correção e explicação exibidas assim que você responde.
- **Simulado completo** — 30 questões sorteadas (duas de cada tema, para manter equilíbrio entre os assuntos), em ordem embaralhada, sem mostrar a resposta até o fim (como na prova real). Ao terminar, mostra nota, desempenho por tema, revisão questão a questão e sugestão de vídeos para os temas mais fracos.

O progresso é salvo no `localStorage` do navegador, então fica disponível entre sessões (mas é local a cada navegador/dispositivo).

## Temas cobertos

Paridade simples e bidimensional, Código de Hamming, CRC, Modelo OSI e TCP/IP, Dispositivos de rede, Topologias, Ethernet e endereçamento MAC, Cabeamento, Redes sem fio, Ondas e som, Áudio/imagem/vídeo, Comunicação via satélite, Fibra óptica, Tempo de propagação e RTT, e Controle de acesso ao meio (CSMA/CD e domínios de colisão).

As questões foram elaboradas a partir do conteúdo das aulas e dos exercícios/provas disponibilizados pelo professor.
