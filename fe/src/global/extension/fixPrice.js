export const fixPrice = (input) => {
    if (!input) {
        input = 0;
        return input.toLocaleString('vn-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        })
    }
    return input.toLocaleString('vn-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
    });
}