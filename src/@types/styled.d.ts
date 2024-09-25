import "styled-components/native";
import theme from "../theme";

// Tipagem para o arquivo de theme usado pelo ThemeProvider
declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
