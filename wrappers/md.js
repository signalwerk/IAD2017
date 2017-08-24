import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { config } from 'config'
import 'css/signalwerk.scss'

export default class Markdown extends React.Component {
  static propTypes = {
    router: PropTypes.object,
  }

  render() {
    const post = this.props.route.page.data
    return (
      <div className="markdown">
        <Helmet title={`${config.siteTitle} | ${post.title}`} />
        <div className="content">
          <div className='header'></div>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
          <div className='footer'>{post.title}{config.printFooterTitle}</div>
        </div>
      </div>
    )
  }
}
