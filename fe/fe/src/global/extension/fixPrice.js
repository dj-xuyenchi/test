export const fixPrice = (input) => {
    return input.toLocaleString('vn-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
    });
}