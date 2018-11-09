import * as React from 'react'

export type Props = {
  text: string
}

const Mainframe: React.SFC<Props> = props => {
  const { text } = props
  return <div className="hoge">{text}</div>
}

export default Mainframe
