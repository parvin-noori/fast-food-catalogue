import React, { useEffect } from 'react'
import axios from '../axios'

export default function CategoryList() {

    useEffect(()=>{
        const fetchCategories=async()=>{
            const response=await axios.get("/FoodCategory/categories")
        }
    },[])
  return (
    <div>category-list</div>
  )
}
