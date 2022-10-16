import { ArrowsInSimple, ArrowsOutSimple } from 'phosphor-react';
import React, { forwardRef } from 'react';
import { useMediaFullscreen } from '@react-av/core';

export type FullscreenProps = React.HTMLAttributes<HTMLButtonElement> & {
    fullscreenIcon?: React.ReactNode;
    fullscreenClassName?: string;
    exitFullscreenIcon?: React.ReactNode;
    defaultClassName?: string;
    defaultIconSize?: number;
}

const Fullscreen = forwardRef<HTMLButtonElement, FullscreenProps>(function Fullscreen(props, ref) {
    const [fullscreen, setFullscreen] = useMediaFullscreen();

    const { 
        defaultIconSize = 32,
        fullscreenIcon = <ArrowsOutSimple weight='fill' size={defaultIconSize} />,
        exitFullscreenIcon = <ArrowsInSimple weight='fill' size={defaultIconSize} />,
        className = "",
        fullscreenClassName = "",
        defaultClassName = "",
        ...btnProps
    } = props;

    const playingState = fullscreen ? "fullscreen" : "default";

    return <button 
        data-fullscreen-state={playingState} 
        onClick={() => setFullscreen(!fullscreen)}
        ref={ref}
        {...btnProps}
        className={
            (className + " " + (fullscreen ? fullscreenClassName : defaultClassName)).trim() || undefined
        }
        type="button"
        aria-label={fullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
    >
        {
            fullscreen ? exitFullscreenIcon : fullscreenIcon
        }
    </button>
});

export default Fullscreen;
