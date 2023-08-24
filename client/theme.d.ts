import '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Theme {
    bg: string;
    bgLighter: string;
    text: string;
    textSoft: string;
    soft: string;
  }

  interface ThemeOptions {
    bg?: string;
    bgLighter?: string;
    text?: string;
    textSoft?: string;
    soft?: string;
  }
}
