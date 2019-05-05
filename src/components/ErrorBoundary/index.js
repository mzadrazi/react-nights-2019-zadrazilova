import React from 'react'
import { node } from 'prop-types'

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, info) {
    console.error('Error boundary error', error, info)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: node.isRequired,
}

export { ErrorBoundary }
