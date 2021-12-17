import React, {FC, ReactElement} from 'react';

interface genericListProps {
  list: any
  isLoadingUI?: boolean
  emptyListUI?: ReactElement
  children: ReactElement
}

const GenericList: FC<genericListProps> = (props: genericListProps) => {

  return (
    <div className='mt-4 mb-4'>
      {props.isLoadingUI && <h4>Loading...</h4>}
      {
        props.list?.length > 0 ?
          props.children
          :
          <h4>There are no elements to display</h4>
      }
    </div>
  )
};

export default GenericList;