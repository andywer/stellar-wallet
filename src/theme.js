import * as materialColors from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

const darkTheme = getMuiTheme({
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    alternateTextColor: materialColors.fullWhite
  }
})

export default darkTheme
