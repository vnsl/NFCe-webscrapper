const DateService = {
    convertTimeStamp (timeStamp: EpochTimeStamp, country: any) {
       const date = new Date(timeStamp);

       const response = country === 'USA' ? date.getMonth()+'/'+date.getDay()+'/'+date.getFullYear() : date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear()

       return response;
    },

    getNTimeStamp (numberOfDays: number) {
        return 
    }
}

export default DateService;