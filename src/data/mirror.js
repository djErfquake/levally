import dotenv from 'dotenv';
dotenv.config();

const googleCalendarAPIClientId = process.env.GOOGLE_CALENDAR_CLIENT_ID;
const familyCalendar = process.env.GOOGLE_CALENDAR_ID_FAMILY;

export default {
    calendar: {
        apiClientId: googleCalendarAPIClientId,
        ids: ['en.usa#holiday@group.v.calendar.google.com'].concat(familyCalendar)
    },
    traffic: {
        home: "4419 Tolbert Avenue, Grove City, OH 43123",
        destinations: [
            { 
                collected: false,
                name: "Calvin's Work", 
                address: "Astute Solutions, Easton Cmns, Columbus, OH", 
                timeframe: {
                    day: { min: 1, max: 5 },
                    hour: { min: 6, max: 9 }
                }
            },
            { 
                collected: false,
                name: "Carolyn's Work", 
                address: "S4 NetQuest, North High Street, Columbus, OH", 
                timeframe: {
                    day: { min: 1, max: 5 },
                    hour: { min: 6, max: 9 }
                }
            },
            { 
                collected: false,
                name: "Church", 
                address: "4311 Anson Dr, Hilliard, OH 43026", 
                timeframe: {
                    day: { min: 0, max: 0 },
                    hour: { min: 6, max: 11 }
                }
            }
        ]
    }
};