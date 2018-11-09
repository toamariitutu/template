import * as React from 'react'
import { connect } from 'react-redux'
import { ReduxState } from '../reducers'
import * as appActions from '../actions/app'
import { getText } from '../selectors/app'
import MainframeComponent, {
  Props as MainframeComponentP,
} from '../components/Mainframe'

type StoreProps = Pick<MainframeComponentP, 'text'>

type DispatchProps = {
  requestChangeText: typeof appActions.requestSetText
}

type Props = StoreProps & DispatchProps

class Mainframe extends React.Component<Props, ReduxState> {
  // private mainWrap = React.createRef<HTMLDivElement>()
  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestChangeText('hoge')
  }

  render() {
    return <MainframeComponent {...this.props} />
  }
}

export default connect<StoreProps, DispatchProps, {}, ReduxState>(
  (state: ReduxState) => {
    return {
      text: getText(state),
    }
  },
  {
    requestChangeText: appActions.requestSetText,
  },
)(Mainframe)
