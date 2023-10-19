package com.packt.cardatabase;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.packt.cardatabase.domain.Owner;
import com.packt.cardatabase.domain.OwnerRepository;

@DataJpaTest
public class OwnerRepositoryTest {
    @Autowired
    private OwnerRepository repository;

    @Test
    void saveOwner() {
        repository.save(new Owner("Natasha", "Romanov"));
        assertThat(repository.findByFirstname("Natasha").isPresent()).isTrue();
    }

    @Test
    void deleteOwners() {
        repository.save(new Owner("Pepper", "Potts"));
        repository.deleteAll();
        assertThat(repository.count()).isEqualTo(0);
    }
}
