import * as React from 'react';
import Typography from '@mui/material/Typography';

export function RegoularH1({children, color, textAlign='center',fontSize=50, marginBottom=5, marginTop=3, hoverColor=null}) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <Typography 
            variant="h1" 
            sx={{
                textAlign: textAlign,
                fontFamily: 'Playfair Display, serif',
                fontSize: fontSize,
                color: hovered && hoverColor ? hoverColor : color,
                marginBottom: marginBottom,
                paddingTop: marginTop,
                transition: 'color 0.3s',
                ...(hoverColor && {
                    '&:hover': {
                        cursor: 'pointer',
                        color: hoverColor,
                    }
                })
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </Typography>
    );
}

export function RegoularH2({children, color, fontSize=30, marginLeft=null, marginBottom=2, paddingTop=2, paddingRight, textAlign='center', hoverColor=null}) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <Typography 
            variant="h2" 
            sx={{
                paddingRight: paddingRight,
                marginLeft: marginLeft,
                textAlign: textAlign,
                fontFamily: 'Playfair Display, serif',
                fontSize: fontSize,
                color: hovered && hoverColor ? hoverColor : color,
                marginBottom: marginBottom,
                paddingTop: paddingTop,
                transition: 'color 0.3s',
                ...(hoverColor && {
                    '&:hover': {
                        cursor: 'pointer',
                        color: hoverColor,
                    }
                })
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </Typography>
    );
}

export function RegoularH1HomePage({children, position= 'absolute', color, fontSize=30, marginBottom=2, paddingTop=20, hoverColor=null}) {
    const [hovered, setHovered] = React.useState(false);
    return (
        <Typography 
            variant="h1" 
            sx={{
                zIndex:1,
                position: position,
                fontFamily: 'Playfair Display, serif',
                fontSize: fontSize,
                color: hovered && hoverColor ? hoverColor : color,
                marginBottom: marginBottom,
                paddingTop: paddingTop,
                left: '29%',
                transition: 'color 0.3s',
                ...(hoverColor && {
                    '&:hover': {
                        cursor: 'pointer',
                        color: hoverColor,
                    }
                })
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </Typography>
    );
}
