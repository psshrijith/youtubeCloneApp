export const formatViewCount = (count) => {
    if(!count) return '0 Views';
    const num = parseInt(count);
    if(isNaN(num)) return '0 Views';

    if(num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M Views';
    } else if(num >= 1000) {
        return (num / 1000).toFixed(1) + 'K Views';
    }
    return num.toString() + ' Views';
}

export const formatDate = (dateString) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    const now = new Date();
    console.log("date",date);
    console.log("now",now);
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    const units = [
        { label: 'year', days: 365 },
        { label: 'month', days: 30 },
        { label: 'week', days: 7 },
        { label: 'day', days: 1 },
    ];

    for (const unit of units) {
        if (diffInDays >= unit.days) {
            const value = Math.floor(diffInDays / unit.days);
            return `${value} ${unit.label}${value > 1 ? 's' : ''} ago`;
        }
    }

    return 'Today';
};

