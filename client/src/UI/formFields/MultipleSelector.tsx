import React, {FC, useCallback} from 'react'
import styles from './multipleSelector.module.scss'
import {IMultipleSelectorModel} from '../../interfaces/interfaces'


interface MultipleSelectorProps {
  name: string
  label: string
  selected: IMultipleSelectorModel[]
  nonSelected: IMultipleSelectorModel[]
  onChange: (selected: IMultipleSelectorModel[], nonSelected: IMultipleSelectorModel[]) => void
}

const MultipleSelector: FC<MultipleSelectorProps> = (props: MultipleSelectorProps) => {
  
  const select = useCallback((item: IMultipleSelectorModel) => {
    const selected = [...props.selected, item]
    const nonSelected = props.nonSelected.filter((value) => value !== item)
    props.onChange(selected, nonSelected)
  }, [props])

  const deSelect = useCallback((item) => {
    const nonSelected = [...props.nonSelected, item]
    const selected = props.selected.filter((value) => value !== item)
    props.onChange(selected, nonSelected)
  }, [props])

  const selectAll = useCallback(() => {
    const selected = [...props.selected, ...props.nonSelected]
    const nonSelected: IMultipleSelectorModel[] = []
    props.onChange(selected, nonSelected)
  }, [props])

  const deSelectAll = useCallback(() => {
    const nonSelected = [...props.nonSelected, ...props.selected]
    const selected: IMultipleSelectorModel[] = []
    props.onChange(selected, nonSelected)
  }, [props])

  
  return (
    <div className="mb-3">
      <label htmlFor={props.name}>{props.label}</label>
      <div className={styles.container}>

        <ul>
          {props.nonSelected.map((item) => (
            <li key={item.key} onClick={() => select(item)}>{item.value}</li>
          ))}
        </ul>
        
        <div className={styles.buttons}>
          <button type='button' onClick={selectAll}>{'>>'}</button>
          <button type='button' onClick={deSelectAll}>{'<<'}</button>
        </div>

        <ul>
          {props.selected.map((item: any) => (
            <li key={item.key} onClick={() => deSelect(item)}>{item.value}</li>
          ))}
        </ul>
        
      </div>
    </div>
  )
}

export default MultipleSelector