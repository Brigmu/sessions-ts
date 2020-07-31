import React, { useState } from 'react';
import './App.css';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { DatePicker, DayOfWeek, IDatePickerStrings, mergeStyleSets} from 'office-ui-fabric-react';
import { Checkbox, ICheckboxStyles } from 'office-ui-fabric-react/lib/Checkbox';
import { Icon, IIconStyles } from '@fluentui/react/lib/Icon';
import { DefaultButton, PrimaryButton} from 'office-ui-fabric-react';
import { IconButton, IIconProps} from 'office-ui-fabric-react';
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
  IColumn,
} from 'office-ui-fabric-react/lib/DetailsList';
import { initializeIcons } from '@uifabric/icons';
import LeftNav from './components/LeftNav';
import IconCheckbox from './components/IconCheckbox';
import FilterDiv from './components/FilterDiv';

function App() {

  initializeIcons();

  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 150, marginLeft: '30px'},
  };
  
  const options: IDropdownOption[] = [
    {key: 'win-32', text: 'Win-32'},
    {key: 'andriod', text: 'Android'},
    {key: 'apple', text: 'Apple'},
    // { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    // { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
   
  ];
  
  const stackTokens: IStackTokens = { childrenGap: 20 };

  const DayPickerStrings: IDatePickerStrings = {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  
    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
    closeButtonAriaLabel: 'Close date picker',

    isRequiredErrorMessage: 'Field is required.',

  invalidInputErrorMessage: 'Invalid date format.',
  };
  
  const controlClass = mergeStyleSets({
    control: {
      margin: '0 30px 0px 30px',
      maxWidth: '300px',
    },
  });

  const firstDayOfWeek = DayOfWeek.Sunday;

  const handleDate = (e: any) => {
    console.log(e);
  }

  // const checkboxStyles: Partial<ICheckboxStyles> = {
  //   checkbox: {borderRadius: '50%'},
  // }

  // const iconStyles: Partial<IIconStyles> = {
  //   root: {fontSize: '36px'}
  // }

  // const addIconStyle: Partial<IIconStyles> = {
  //   root: {fontSize: '20px', color: 'green'}
  // }

  // const removeIconStyle: Partial<IIconStyles> = {
  //   root: {fontSize: '20px', color: 'red'}
  // }

  const handleAdd = (e: any) => {
    console.log(e.target);
  }

  const addIcon: IIconProps = { iconName: 'Add', onClick: handleAdd, style: {color: 'green'}};
  const removeIcon: IIconProps = { iconName: 'Cancel', style: {color: 'red'}};

  const columns: IColumn[] = [
    {
      key: 'column1',
      name: 'Date',
      ariaLabel: 'Column operations for File type, Press to sort on File type',
      fieldName: 'date',
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
    }, 
    {
      key: 'column2',
      name: 'Name',
      fieldName: 'name',
      minWidth: 210,
      maxWidth: 250,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: 'Sorted A to Z',
      sortDescendingAriaLabel: 'Sorted Z to A',
      // onColumnClick: this._onColumnClick,
      data: 'string',
      isPadded: true,
    },
    {
      key: 'column3',
      name: 'App',
      fieldName: 'app',
      minWidth: 210,
      maxWidth: 250,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: 'Sorted A to Z',
      sortDescendingAriaLabel: 'Sorted Z to A',
      // onColumnClick: this._onColumnClick,
      data: 'string',
      isPadded: true,
    },{
      key: 'column4',
      name: 'Version',
      fieldName: 'version',
      minWidth: 150,
      maxWidth: 250,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: 'Sorted A to Z',
      sortDescendingAriaLabel: 'Sorted Z to A',
      // onColumnClick: this._onColumnClick,
      data: 'string',
      isPadded: true,
    },
    {
      key: 'column5',
      name: 'Platform',
      fieldName: 'platform',
      minWidth: 150,
      maxWidth: 250,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: 'Sorted A to Z',
      sortDescendingAriaLabel: 'Sorted Z to A',
      // onColumnClick: this._onColumnClick,
      data: 'string',
      isPadded: true,
    },
    {
      key: 'column6',
      name: 'Explore Session',
      fieldName: 'explore',
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: 'Sorted A to Z',
      sortDescendingAriaLabel: 'Sorted Z to A',
      // onColumnClick: this._onColumnClick,
      data: 'string',
      isPadded: true,
    }
  ];

  const [items, setItems] = useState([
    {
      key: 1,
      date: '7-12-2020',
      name: 'Crash',
      app: 'Office',
      version: '1.651.23',
      platform: 'Win-32'
    }
  ])

  return (
    <div className="App">
      <LeftNav>
        {/* <Stack tokens={stackTokens}>
          <Dropdown placeholder="Select platform"
            // label="Basic uncontrolled example"
            options={options}
            styles={dropdownStyles} />
        </Stack> */}
        <h4>New Query</h4>
        <h4>Recent Queries</h4>
        <h4>Saved Queries</h4>
      </LeftNav>
      <div className='container'>
        <div className='data-platform-wrapper'>
        <DatePicker
          className={controlClass.control}
          isRequired={true}
          firstDayOfWeek={firstDayOfWeek}
          strings={DayPickerStrings}
          placeholder="Start date"
          ariaLabel="Select start date"
          onSelectDate={handleDate}
        />

        <DatePicker
          className={controlClass.control}
          isRequired={true}
          firstDayOfWeek={firstDayOfWeek}
          strings={DayPickerStrings}
          placeholder="End date"
          ariaLabel="Select end date"
          onSelectDate={handleDate}
        />
        {/* <div className='platform-selector-wrapper'>
          <div className='platform-selector-row-1'>
          </div>
          <div className='platform-selector-row-2'>
            <IconCheckbox />
          </div>
        </div> */}
          <IconCheckbox name='ExcelLogo'/>
          <IconCheckbox name='PowerpointLogo'/>
          <IconCheckbox name='WordLogo'/>
        <IconCheckbox name='OneNoteLogo'/>
        <IconCheckbox name='ProjectLogo32'/>
        <IconCheckbox name='VisioLogo'/>
        <Stack tokens={stackTokens}>
          <Dropdown placeholder="Select platform"
            // label="Basic uncontrolled example"
            options={options}
            styles={dropdownStyles} />
        </Stack>
        </div>

        <div className='filters-wrapper'>
          <IconButton iconProps={addIcon} title="Add" ariaLabel="Add"/>
          <IconButton iconProps={removeIcon} title="Remove" ariaLabel="Remove"/>
          <FilterDiv />
        </div>

        <PrimaryButton text="Run Query" />
      </div>
    
      <div className='results-container'>
      <DetailsList
            items={items}
            columns={columns}
            selectionMode={SelectionMode.none}
          />
      </div>
    </div>
  );
}

export default App;
