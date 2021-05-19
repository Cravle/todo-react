import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

import ActionCreators from '@actions//'

const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}

export default useActions
