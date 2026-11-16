# Prompt Master

Mod do Claude Code que reescreve o seu prompt antes de enviar. Ele coloca uma
faixa de botões logo acima da caixa de mensagem:

- **✨ Prompt Master**: reescreve o rascunho atual e devolve o texto na caixa,
  para você revisar antes de enviar.
- **Auto: ligado/desligado**: reescreve sozinho todo prompt enviado com Enter
  (ignora comandos `/` e prompts com menos de 4 palavras). Começa desligado.
- **Desfazer**: restaura o rascunho original depois de uma reescrita.

A reescrita usa o modelo `sonnet` (constante `MODEL` em `hooks/register.tsx`),
mantém o idioma do rascunho e não inventa requisitos. Se falhar ou passar de
30 s, o prompt segue como você escreveu.

## Instalação

No prompt de uma sessão de terminal:

```
/plugin install prompt-master --marketplace <owner>/<repo>
```

Ou, de um shell:

```
claude plugin install prompt-master --marketplace <owner>/<repo>
```

Na desktop app: clique em **+** ao lado da caixa, depois Plugins, Add
marketplace com `<owner>/<repo>`, e Add plugin.

Para desenvolver a partir de uma pasta local:

```
claude --plugin-dir <caminho>/prompt-master
```

## Licença

MIT
