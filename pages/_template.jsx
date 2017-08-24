import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <div className='navigation'>
          <div className='main-nav'>
              <Link
                to={prefixLink("/")}
                style={{
                  color: 'black',
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
