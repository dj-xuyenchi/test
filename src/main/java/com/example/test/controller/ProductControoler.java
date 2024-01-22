package com.example.test.controller;

import com.example.test.service.IProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/product")
public class ProductControoler {
    @Autowired
    private IProduct _productService;

    @RequestMapping(value = "/get-product", method = RequestMethod.GET)
    public ResponseEntity<?> themNguoiDung(@RequestParam Long productId) {
        return ResponseEntity.ok(_productService.getProductById(productId));
    }
}
