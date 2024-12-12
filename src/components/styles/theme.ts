interface ThemeGradients {
  blueToGreen: string;
  redToPurple: string;
  greenToPurple: string;
  blueToRed: string;
  orangeToYellow: string;
}

interface Theme {
  blue: string;
  green: string;
  red: string;
  purple: string;
  yellow: string;
  orange: string;
  background: string;
  text: string;

  gradients: ThemeGradients;
}

export const theme: Theme = {
  blue: '#66d9ef',
  green: '#a6e22e',
  red: '#f92672',
  purple: '#ae81ff',
  yellow: '#e6db74',
  orange: '#fd971f',
  background: '#272822',
  text: '#f8f8f2',

  gradients: {
    blueToGreen: 'linear-gradient(135deg, #66d9ef 0%, #a6e22e 100%)',
    redToPurple: 'linear-gradient(135deg, #f92672 0%, #ae81ff 100%)',
    greenToPurple: 'linear-gradient(135deg, #a6e22e 0%, #ae81ff 100%)',
    blueToRed: 'linear-gradient(135deg, #66d9ef 0%, #f92672 100%)',
    orangeToYellow: 'linear-gradient(135deg, #fd971f 0%, #e6db74 100%)'
  }
} as const;

export type { Theme, ThemeGradients };
