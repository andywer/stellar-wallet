import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { withProps } from 'recompose'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import { Network } from 'stellar-sdk'
import theme from './theme'
import AppBottomNavigation from './components/BottomNavigation'
import Overlays from './components/Overlays'
import { VerticalLayout } from './layout'
import AllWalletsPage from './pages/all-wallets'
import QRScannerPage from './pages/qr-scanner'
import WalletPage from './pages/wallet'
import overlays from './stores/overlays'
import wallets from './stores/wallets'

Network.usePublicNetwork()

const App = () => (
  <Router>
    <MuiThemeProvider muiTheme={theme}>
      <VerticalLayout width='100%' height='100%'>
        <Paper style={{ flexGrow: 1, flexShrink: 0, overflow: 'auto', padding: 16 }}>
          <Route exact path='/' component={withProps({ wallets })(AllWalletsPage)} />
          <Route path='/wallet/:id' component={withProps({ wallets })(WalletPage)} />
          <Route path='/qr-scanner' component={QRScannerPage} />
        </Paper>
        <Paper style={{ flexGrow: 0, flexShrink: 0, zIndex: 1 }}>
          <AppBottomNavigation />
        </Paper>
        <Overlays overlays={overlays} />
      </VerticalLayout>
    </MuiThemeProvider>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
