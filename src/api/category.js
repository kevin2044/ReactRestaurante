import { BASE_API } from '../utils/constants'

export async function getCategoriesApi(token){
    try {
        const url = `${BASE_API}api/categories/`
        /* const params = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        } */
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function addCategoryApi(data, token){
    try {
        const url = `${BASE_API}api/categories/`
        const params = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function updateCategoryApi(id, data, token){
    try {
        const url = `${BASE_API}api/categories/${id}`
        const params = {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function deleteCategoryApi(id, token){
    try {
        const url = `${BASE_API}api/categories/${id}`
        const params = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(url, params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}