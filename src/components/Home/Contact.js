import React from 'react'
import { Transition, animated } from 'react-spring/renderprops'

const defaultStyles = {
  overflow: 'hidden',
  fontSize: '1.25rem',
  fontFamily: 'Segoe UI',
  height : '400px !important',
  width: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default class ContactInfo extends React.PureComponent {
  state = { items: [] }

  async componentDidMount() {
    this.t1 && clearTimeout(this.t1)
    this.t2 && clearTimeout(this.t2)
    this.t3 && clearTimeout(this.t3)

    this.setState({ items: ['Front-End/Back-End Developer ??', 'FullStack Developer??'] })
    this.t1 = setTimeout(
      () => this.setState({ items: ['Please Email', 'To : nrosh_uoc@yahoo.com'] }),
      4000
    )
    this.t2 = setTimeout(
      () => this.setState({ items: [ 'Please Contact', 'Mobile : 07474020266'] }),
      8000
    )
    this.t3 = setTimeout(() => this.setState({ items: ['Click here !'] }), 12000)
  }

  render() {
    return (
      <div
        style={{
          overflow: 'hidden',
          cursor: 'pointer',
          margin: 0,
          padding: 0,
        }}
        onClick={() => this.componentDidMount()}>
        <Transition
          items={this.state.items}
          //initial={null}
          from={{ overflow: 'hidden', height: 0, opacity: 0, color: '#49a6e9' }}
          enter={{ height: 50, opacity: 1, color:'#49a6e9' }}
          leave={{ height: 0, opacity: 0, color: '#324d67' }}
          update={{ color:'#bb2525' }}
          trail={200}>
          {item => styles => (
            <animated.div style={{ ...defaultStyles, ...styles }}>
              {item}
            </animated.div>
          )}
        </Transition>
      </div>
    )
  }
}