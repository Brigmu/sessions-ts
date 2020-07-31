import React from 'react';
import { IconButton, IIconProps} from 'office-ui-fabric-react';
import { Dropdown, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

interface Props {

}


const FilterDiv: React.FC<Props> = (props) => {

    const handleAdd = (e: any) => {
        console.log(e.target);
      }
    
      const addIcon: IIconProps = { iconName: 'Add', onClick: handleAdd, style: {color: 'green'}};
      const removeIcon: IIconProps = { iconName: 'Cancel', style: {color: 'red'}};
    
      const dropdownStyles: Partial<IDropdownStyles> = {
        dropdown: { width: 300, marginLeft: '15px'},
      };

      const options: IDropdownOption[] = [
        {key: 'failed-activity-name', text: 'Failed Activity Name'},
      ];

      const operatorOptions: IDropdownOption[] = [
          {key: 'equals', text: '==='},
          {key: 'contains', text: 'contains'}
      ]

    return (
        <div className='filter-div'>
            <IconButton iconProps={addIcon} title="Add" ariaLabel="Add"/>
            <IconButton iconProps={removeIcon} title="Remove" ariaLabel="Remove"/>
            <Dropdown placeholder="Select Field"
            options={options}
            styles={dropdownStyles} />
            <Dropdown placeholder="Select operator"
            options={operatorOptions}
            styles={dropdownStyles} />
            <input className='filter-value-input'/>
        </div>
    )
}

export default FilterDiv;