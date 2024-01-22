package com.example.test.mapper;

import com.example.test.model.Product;
import com.example.test.model.ProductImage;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {
    private Long id;
    private String name;
    private String link;
    private Double price;
    private Integer sold;
    private Double rated;
    private String description;
    private Set<ProductImage> productImageSet;

    public static ProductDTO fromEntity(Product entity) {
        return new ProductDTO(
                entity.getId(),
                entity.getName(),
                entity.getLink(),
                entity.getPrice(),
                entity.getSold(),
                entity.getRated(),
                entity.getDescription(),
                entity.getProductImageSet()
        );
    }

    public Product toEntity() {
        return new Product(
                this.id,
                this.name,
                this.link,
                this.price,
                this.sold,
                this.rated,
                this.description,
                null
        );
    }
}
