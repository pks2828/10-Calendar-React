export interface Messages {
    allDay: string;
    previous: string;
    next: string;
    today: string;
    month: string;
    week: string;
    day: string;
    agenda: string;
    date: string;
    time: string;
    event: string;
    noEventsInRange: string;
    showMore: (total: number) => string;
}

export const getMessagesEs = (): Messages => {
    return {
        allDay: 'Todo el día',
        previous: '<',
        next: '>',
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        agenda: 'Agenda',
        date: 'Fecha',
        time: 'Hora',
        event: 'Evento',
        noEventsInRange: 'No hay eventos en este rango',
        showMore: total => `+ Ver más (${total})`
    };
};
