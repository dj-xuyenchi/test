package com.example.test.repository;

import com.example.test.model.CataLogDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatalogDetail extends JpaRepository<CataLogDetail,Long> {
}
