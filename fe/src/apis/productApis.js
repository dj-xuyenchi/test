import axiosIns from "../global/plugin/axios"

export const useProductApi = {
    actions: {
        async getProductById(payload) {
            return axiosIns.get('/api/product/get-product?productId=' + payload)
        },

    },
}
