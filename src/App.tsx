import { ThemeProvider } from "@emotion/react"
import { LightTheme } from "./shared/themes"
import { RoutesConfig } from "./routes/index.tsx"


function App() {
  

  return (
    <>
    <ThemeProvider theme={LightTheme}>
      <RoutesConfig/>
    </ThemeProvider>
    </>
  )
}

export default App
