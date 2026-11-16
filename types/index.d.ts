declare module 'claude-code' {
  interface PluginState {
    'prompt-master': {
      /** Reescreve sozinho todo prompt enviado com Enter. */
      isAuto: boolean
      /** Uma reescrita está em andamento. */
      isBusy: boolean
      /** O rascunho antes da última reescrita pelo botão, para desfazer. */
      original: string | null
    }
  }
}
