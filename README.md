# Portal Gun

**Personal Research OS** — infraestrutura digital pessoal para organizar pesquisa, hipóteses, experimentos, fontes e projetos.

> O Portal Gun não é uma plataforma de aulas. É um laboratório pessoal de pesquisa e desenvolvimento.

## Aplicação

- `index.html` — Research Hub / entrada principal
- `knowledge.html` — Knowledge Base
- `graph.html` — Knowledge Graph
- `lab.html` — Research Console
- `experiments.html` — workspace de experimentos
- `settings.html` — backup e restauração local

## Dados

- `data/research.json` — conceitos, hipóteses, perguntas, experimentos e projetos
- `data/sources.json` — registro estruturado de fontes científicas e outras referências

## Método

```text
PERGUNTA → HIPÓTESE → TESTE → OBSERVAÇÃO → RESULTADO → REVISÃO
```

O sistema separa conhecimento de referência, hipótese, observação, pergunta e especulação. Uma experiência pessoal pode ser uma observação útil sem ser tratada automaticamente como evidência causal.

## Áreas atuais

- Neurociência e cérebro
- Córtex pré-frontal e funções executivas
- Dopamina, noradrenalina e adenosina
- Estados mentais e DMN
- Memória e aprendizagem
- Cognição e desempenho
- Multiverso e consciência
- Desenvolvimento do próprio Portal Gun

## Dados locais

O laboratório e o workspace de experimentos usam `localStorage` para permitir uso sem backend. A página **Settings** permite exportar e importar um backup JSON.

## Roadmap

1. Relações entre registros por IDs.
2. Páginas individuais de pesquisa.
3. Fontes e evidências vinculadas às afirmações.
4. Knowledge Graph mais completo.
5. Sincronização/cloud e publicação.
6. Camada de análise para descobrir conexões e perguntas pendentes.
