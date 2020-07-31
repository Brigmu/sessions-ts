import React from 'react';
import { Checkbox, ICheckboxStyles } from 'office-ui-fabric-react/lib/Checkbox';
import { Icon, IIconStyles } from '@fluentui/react/lib/Icon';

interface Props {
    name: string
}

const IconCheckbox: React.FC<Props> = (props) => {

    const checkboxStyles: Partial<ICheckboxStyles> = {
        checkbox: {borderRadius: '50%'},
      };
    
    const iconStyles: Partial<IIconStyles> = {
        root: {fontSize: '36px', color: 'grey'}
      };
    
    
    return (
        <span className='platform-span'><Icon iconName={props.name} styles={iconStyles} className='icon-test'/>
          <span className='checkbox-span'>
            <Checkbox styles={checkboxStyles}/>
          </span>
        </span>
    )
}

export default IconCheckbox;