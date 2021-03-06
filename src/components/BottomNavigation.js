import React from 'react'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import HomeIcon from 'react-icons/lib/md/home'
import QRCodeIcon from 'react-icons/lib/fa/qrcode'
import { withRouter } from 'react-router-dom'

const getSelectedIndexByPath = path => {
  if (path === '/' || path.startsWith('/wallet')) {
    return 0
  } else if (path.startsWith('/qr-scanner')) {
    return 1
  }
  console.error(`Don't know what icon to show as selected in bottom navigation. Path is: ${path}`)
  return 0
}

const AppBottomNavigation = ({ history, location }) => {
  return (
    <Paper zDepth={1}>
      <BottomNavigation selectedIndex={getSelectedIndexByPath(location.pathname)}>
        <BottomNavigationItem
          label='Wallets'
          icon={<HomeIcon style={{ fontSize: '200%' }} />}
          onClick={() => history.push('/')}
        />
        <BottomNavigationItem
          label='QR scanner'
          icon={<QRCodeIcon style={{ fontSize: '200%' }} />}
          onClick={() => history.push('/qr-scanner')}
        />
      </BottomNavigation>
    </Paper>
  )
}

export default withRouter(AppBottomNavigation)
