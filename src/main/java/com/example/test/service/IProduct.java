package com.example.test.service;

import com.example.test.mapper.ProductDTO;

public interface IProduct {
    ProductDTO getProductById(Long id);
}
