export type ThemePaletteColor = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

export interface ITheme {
  colors: {
    success: ThemePaletteColor;
    pending: ThemePaletteColor;
    warning: ThemePaletteColor;
    error: ThemePaletteColor;
    secondary: ThemePaletteColor;
    primary: ThemePaletteColor;
    background: {
      main: string;
      contrastText: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  };

  fontSize: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };
  border: {
    presets: {
      body: string;
    };
    color: string;
    radius: number;
    width: number;
  };

  spacing: {
    s: number;
    m: number;
    l: number;
    xl: number;
  };
}

export const THEME: ITheme = {
  border: {
    radius: 6,
    color: '#EEE',
    width: 2,
    presets: {
      body: '1px solid lightgray'
    }
  },
  colors: {
    primary: {
      light: '#63ccff',
      main: '#4285f4',
      dark: '#006db3',
      contrastText: 'white'
    },
    secondary: {
      light: '#ff8cb3',
      dark: '#c51162',
      main: '#f50057',
      contrastText: 'white'
    },
    success: {
      light: '#ADE488',
      dark: '#237804',
      main: '#52c41a',
      contrastText: 'white'
    },
    warning: {
      light: '#F5E18C',
      dark: '#F6CC1B',
      main: '#F6CC1B',
      contrastText: 'white'
    },
    pending: {
      light: '#F5E18C',
      dark: '#F6CC1B',
      main: '#F6CC1B',
      contrastText: 'white'
    },
    error: {
      light: '#F7CACA',
      dark: '#DB4D4D',
      main: '#DB4D4D',
      contrastText: 'white'
    },
    text: {
      primary: 'black',
      secondary: '#444'
    },
    background: {
      main: '#18202c',
      contrastText: 'white'
    }
  },
  fontSize: {
    xs: 12,
    s: 14,
    m: 16,
    l: 20,
    xl: 24,
    xxl: 36,
    xxxl: 48
  },
  spacing: {
    s: 4,
    m: 8,
    l: 16,
    xl: 24
  }
};
