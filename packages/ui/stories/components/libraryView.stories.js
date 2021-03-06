import React from 'react';
import { storiesOf } from '@storybook/react';

import { LibraryListTypeToggle } from '../..';

storiesOf('Components/Library list type toggle', module)
  .add('Basic', () => (
    <div className='bg'>
      <LibraryListTypeToggle toggleListType={alert}/>
    </div>
  ));
