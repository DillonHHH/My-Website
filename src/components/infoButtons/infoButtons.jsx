import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import './infoButtons.css';

function CreateButton(props) {
    return (
        <div className={'infoButton ' + props.className}>
            <button className='button' onClick={props.onClick}>
                {props.buttonText}
            </button>
            <AnimateHeight duration={250} height={props.showingContent ? 'auto' : 0} >
                <div className='infoButtonContent'>
                    {props.content}
                </div>
            </AnimateHeight>
        </div>
    );
}

function InfoButton(props) {

    const [showingContent, setShowingContent] = useState(props.show ? true : false);

    const toggleShowingContent = () => {
        setShowingContent(!showingContent);
    }

    return (
        <CreateButton
            content={props.content}
            buttonText={props.buttonText}
            className={props.className}
            onClick={toggleShowingContent}
            showingContent={showingContent}
        />
    );

}



export { InfoButton };
