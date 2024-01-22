package com.example.test.service.impl;

import com.example.test.mapper.ProductDTO;
import com.example.test.repository.ProductRepository;
import com.example.test.service.IProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProduct {
    @Autowired
    private ProductRepository _productRepo;

    @Override
    public ProductDTO getProductById(Long id) {
        return ProductDTO.fromEntity(_productRepo.findById(id).orElse(null));
    }
}
