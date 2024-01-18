package com.example.test.repository;

import com.example.test.model.ProductUpdate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductUpdateRepository extends JpaRepository<ProductUpdate,Long> {
}
