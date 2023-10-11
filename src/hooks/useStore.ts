import { type interfaceInitialState, type Action, type Language, type FromLanguage } from '../types'
import { useReducer } from 'react'

// 1. the reducer must be created to use it in the "useReducer" hook
// in here must be the options/cases that sets the new states
// the reducer takes a state and an action
function reducer (state: interfaceInitialState, action: Action) {
  // we need to known the action type
  const { actionType } = action

  if (actionType === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLang: state.toLang,
      toLang: state.fromLang
    }
  }

  if (actionType === 'SET_FROMLANG') {
    return {
      ...state,
      fromLang: action.newStateValue
    }
  }

  if (actionType === 'SET_TOLANG') {
    return {
      ...state,
      toLang: action.newStateValue
    }
  }

  if (actionType === 'SET_FROMTEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.newStateValue,
      toText: ''
    }
  }

  if (actionType === 'SET_TOTEXT') {
    return {
      ...state,
      loading: false,
      toText: action.newStateValue
    }
  }

  return state
}

// 2. the initial state must be created to use it in the "useReducer" hook
const initialState: interfaceInitialState = {
  fromLang: 'auto',
  toLang: 'en',
  fromText: '',
  toText: '',
  loading: false
}

export function useStore () {
  // 3. use the hook useReducer with the reducer and the initialState as params
  // the hook returns a state and a dispatch
  const [{ fromLang, toLang, fromText, toText, loading }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => {
    dispatch({ actionType: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLang = (newStateValue: FromLanguage) => {
    dispatch({ actionType: 'SET_FROMLANG', newStateValue })
  }

  const setToLang = (newStateValue: Language) => {
    dispatch({ actionType: 'SET_TOLANG', newStateValue })
  }

  const setFromText = (newStateValue: string) => {
    dispatch({ actionType: 'SET_FROMTEXT', newStateValue })
  }

  const setToText = (newStateValue: string) => {
    dispatch({ actionType: 'SET_TOTEXT', newStateValue })
  }

  return { fromLang, toLang, fromText, toText, loading, interchangeLanguages, setFromLang, setToLang, setFromText, setToText }
}
