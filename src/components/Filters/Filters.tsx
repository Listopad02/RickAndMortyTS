import { FC } from 'react'
import { Select } from 'antd';
import "./Filters.scss"

const Filters: FC = () => {
  return (
    <div className='Filters'>
      <Select
        className='select'
        showSearch
        placeholder="Status"
        options={[
          {
            value: 'alive',
            label: 'Alive',
          },
          {
            value: 'dead',
            label: 'Dead',
          },
          {
            value: 'unknown',
            label: 'Unknown',
          },
        ]}
      />
      <Select
        className='select'
        showSearch
        placeholder="Gender"
        options={[
          {
            value: 'male',
            label: 'Male',
          },
          {
            value: 'female',
            label: 'Female',
          },
          {
            value: 'genderless',
            label: 'Genderless',
          },
          {
            value: 'unknown',
            label: 'Unknown',
          },
        ]}
      />
    </div>
  )
}

export default Filters