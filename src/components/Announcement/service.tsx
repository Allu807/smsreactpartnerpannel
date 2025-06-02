import Client from "../../api";
import axios from "axios";



      
export const createAnnouncements = async (data: any,params: string) => {
    try {
        const response = await Client.partner.announcement.create(data, params);
        return(response);
        axios.post(`/api/partner/announcements?${params}`, data),
        
    }
    catch (error) {
        return("Error creating announcement:", error);
    }
}
  export const getAllAnnouncement = async (params: string)=> {
    try {
        const response = await Client.partner.announcement.getAll(params);
        console.log(response);
         axios.get(`/api/partner/announcements?${params}`),
    }
    
    catch (error) {
        console.log("Error fetching announcements:", error);
    }

    
  

    return Response;

export default Announcements;

  }

