import Client from "../../api";
import { getDashboard } from "./dashboardService";
import { useEffect } from "react";
import { useState } from "react";
export const Dashboard = () => {
    const [dashboardData, setdashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
   
}   

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await getDashboard('');
      console.log("Dashboard Data:", data);
      // update state here
    } catch (err) {
      console.error("Error:", err);
    }
  };
  fetchData();
}, []);

export const getDashboard = async (params: string) => {
    try {
        const response = await Client.partner.dashboard.get(params);
        return(response);
    }
    catch (error) {
        console.log("Error fetching dashboard data:", error);
    }

}
export const postProduct = async (data: any, params: string) => {
    try {
        const response = await Client.partner.dashboard.postProduct(data,params);
        console.log(response);
    }
    catch (error) {
        console.log("Error posting product:", error);
    }
    
}
export const getAll = async (params: string) =>{
    try {
        const response = await Client.partner.dashboard.getAll(params);
        console.log(response);
}
    catch (error)  {
        console.log("Error fetching all products:", error);

    }

}

export const getById = async (params: string) => {
    try {
        const response = await Client.partner.dashboard.getById(params);
        console.log(response);
    
    }
    catch (error) {
       console.log("Error fetching product by Id:", error);
    }
}

export const updateProduct = async  (data: any, params: string) => {
    try {
        const response =  await Client.partner.dashboard.updateProduct(data , params);
        console.log(response);
    }
    catch (error) {
        console.log("Error updating product:", error);
    }
}

export const deleteProduct = async () => {
    try{
        const response = await Client.partner.dashboard.deleteProduct();
        console.log(response);
    }
    catch (error) {
        console.log("Error deleting product:", error);
    }
}