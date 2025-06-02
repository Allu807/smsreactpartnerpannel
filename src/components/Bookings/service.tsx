import Client from  "../../api"

export const createBooking = async (data: any, params: string) => {
    try {
        const response = await Client.partner.booking.create(data, params);
        console.log(response)
    }
    catch (error) {
        console.log("Error creating booking:", error);
    }
}
export const getAllBookings = async (params:string) => {
    try {
        const response = await Client.partner.booking.getAll(params);
        console.log(response);
    }
    catch (error) {
        console.log('Error fetching bookings:', error);
    }
}
export const getBookingById = async (params: string) => {
    try {
        const response =  await Client.partner.booking.getById(params);
        console.log(response);
    }
    catch (error) {
        console.log("Error fetching booking by Id:", error);
}
}
export const updateBooking =  async (data:any, params:string) => {
    try {
        const response = await Client.partner.booking.update(data, params);
        console.log(response);
    }

catch (error) {
    console.log("Error updating booking:", error);
}
}
export const cancelBooking = async (params: string) => {
    try {
        const response = await Client.partner.booking.cancel(params);
        console.log(response);
        }
        catch (error) {
            console.log("Error canceling booking:", error);
        }
}


        


