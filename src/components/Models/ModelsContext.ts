import React, {ReactNode} from 'react'

export interface ProductModel {
    modelName: string
    overlayNode: ReactNode
    sectionRef: React.RefObject<HTMLElement>
}

interface ModelsContext {
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: ProductModel[]
    registerModel: (model: ProductModel) => void
    unregisterModel: (modelName: string) => void
    getModelByName: (modelName: string) => ProductModel | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)