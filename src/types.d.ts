import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './constants'

export interface interfaceInitialState {
  fromLang: string
  toLang: string
  fromText: string
  toText: string
  loading: boolean
}

export type Action =
  | { actionType: 'INTERCHANGE_LANGUAGES' }
  | { actionType: 'SET_FROMLANG', newStateValue: string }
  | { actionType: 'SET_TOLANG', newStateValue: string }
  | { actionType: 'SET_FROMTEXT', newStateValue: string }
  | { actionType: 'SET_TOTEXT', newStateValue: string }

export type Language = keyof typeof SUPPORTED_LANGUAGES

export type AutoLanguage = typeof AUTO_LANGUAGE

export type FromLanguage = Language | AutoLanguage
