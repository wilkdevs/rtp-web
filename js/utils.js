function formatDateToday() {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return new Date().toLocaleDateString('id-ID', options); // Output: Senin, 12 Mei 2025
}
