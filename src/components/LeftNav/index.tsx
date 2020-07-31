import React from 'react';

interface Props {

}

const LeftNav: React.FC<Props> = (props) => {
    return (
        <div className='left-nav'>
            {props.children}
        </div>
    )
}

export default LeftNav;