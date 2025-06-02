import Client from "../../api";


        
    export const createEnquiry = async (data: any, params: string) => {
    try {
        const response = await Client.partner.enquiry.create(data, params);
        console.log(response);
    }
    catch (error) {
        console.log("Error creating enquiry: ", error);
    }
}

export const getAllEnquires = async (params: string) => {
    try {
        const response =  await Client.partner.enquiry.getAll(params);
        console.log(response);
    }

catch (error) {
    console.log("Error fetching all enquiries: ", error);
}
}

export const updateEnquiry = async (data: any, params: string) => {
    try {
        const response = await Client.partner.enquiry.update(data, params);
        console.log(response);
    }
    catch (error) {
        console.log("Error updating enquiry: ", error);
    }
}