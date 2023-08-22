// Basis-URL für die API-Anfragen
const API_BASE_URL = 'http://localhost:5207/api';

/**
 * Abrufen der Tickets von der API.
 * @returns {Array} Eine Liste von Tickets oder einen leeren Array im Fehlerfall
 */
export const fetchTickets = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/Kassierer/tickets`);
        if (!response.ok) throw new Error(response.statusText);
        return await response.json();
    } catch (error) {
        console.error('Fehler beim Abrufen der Tickets:', error);
        return [];
    }
};

/**
 * Funktion zum Kauf eines Tickets über die API.
 * @param {string|number} ticketType - Typ des Tickets.
 * @param {Object} ticketPrices - Preisliste für verschiedene Tickettypen.
 * @param {string} selectedDate - Das ausgewählte Datum.
 * @returns {boolean} Gibt 'true' zurück, wenn der Kauf erfolgreich war, andernfalls 'false'.
 */
export const buyTicket = async (ticketType, ticketPrices, selectedDate) => {
    try {
        const response = await fetch(`${API_BASE_URL}/Kassierer/buy`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                type: parseInt(ticketType, 10),
                preis: ticketPrices[ticketType],
                verkaufsdatum: selectedDate,
            }),
        });
        if (!response.ok) throw new Error(response.statusText);
        return true;
    } catch (error) {
        console.error('Fehler beim Kauf des Tickets:', error);
        return false;
    }
};

/**
 * Abrufen der Tickets von der API nach einem bestimmten Datum.
 * @param {string} date - Das Datum, nach dem die Tickets abgerufen werden sollen.
 * @returns {Array} Eine Liste von Tickets oder einen leeren Array im Fehlerfall.
 */
export const fetchTicketsByDate = async (date) => {
    try {
        const response = await fetch(`${API_BASE_URL}/Kassierer/tickets/date/${date}`);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        return data.tickets;
    } catch (error) {
        console.error('Fehler beim Abrufen der Tickets nach Datum:', error);
        return [];
    }
};

/**
 * Abrufen der Tiere, die einem bestimmten Tierpfleger zugewiesen sind.
 * @param {string|number} tierpflegerId - Die ID des Tierpflegers.
 * @returns {Array} Eine Liste der Tiere, die dem Tierpfleger zugewiesen sind.
 */
export const fetchAssignedAnimals = async (tierpflegerId) => {
    const response = await fetch(`${API_BASE_URL}/Tierpfleger/${tierpflegerId}/tiere`);
    if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
    return await response.json();
};

/**
 * Aktualisieren der Daten eines bestimmten Tieres.
 * @param {string|number} animalId - Die ID des Tieres.
 * @param {Object} updatedData - Die aktualisierten Daten des Tieres.
 * @returns {Object} Die aktualisierten Daten des Tieres oder einen Fehler.
 */
export const updateAnimal = async (animalId, updatedData) => {
    const response = await fetch(`${API_BASE_URL}/Tierpfleger/tiere/${animalId}/${updatedData.gehegeId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedData),
    });

    if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
    const responseBody = await response.text();
    if (responseBody) {
        return JSON.parse(responseBody);
    } else {
        throw new Error('Error updating animal: Empty response');
    }
};
