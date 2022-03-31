import { createContext, ReactNode, useEffect, useState } from "react";
import { Api } from "../../../services/Api";



interface ICategories {
    id: number
    name: string,
    type: number,

}

interface ICategoriesContextProps {
    children: ReactNode
}

export const CategoriesContext = createContext<ICategories[]>([])


export function CategoriesProvider({children}: ICategoriesContextProps){


    const [categories, setCategories] = useState<ICategories[]>([])


    useEffect(() => {
        Api.get('categories/')
            .then(response => {
                setCategories(response.data.categories)

            })
    },[])

    return(
        <CategoriesContext.Provider value={categories}>
            {children}
        </CategoriesContext.Provider>
    )
    

}