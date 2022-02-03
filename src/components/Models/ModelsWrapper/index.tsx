import React, { useCallback, useRef, useState } from 'react'

import ModelsContext, { ProductModel } from '../ModelsContext'

import { Container} from './styles'

const ModelsWrapper: React.FC = ({children}) => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const [registeredModels, setRegisteredModels] = useState<ProductModel[]>([])

    const registerModel = useCallback((model: ProductModel) => {
        setRegisteredModels(state => [...state, model])
    }, [])

    const unregisterModel = useCallback((modelName: string) => {
        setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
    }, [])

    const getModelByName = useCallback((modelName: string) => {
        return registeredModels.find(item => item.modelName === modelName) || null
    },
    [registeredModels]
    )

  return (
      <ModelsContext.Provider value={{
          wrapperRef,
          registeredModels,
          registerModel,
          unregisterModel,
          getModelByName
      }} >
    <Container ref={wrapperRef}>{children}</Container>
    </ModelsContext.Provider>
  )
}

export default ModelsWrapper